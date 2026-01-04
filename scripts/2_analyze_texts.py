import urllib.request
import re
import json
import time
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

# 기존에 수집한 목록 불러오기
with open('src/data.json', 'r', encoding='utf-8') as f:
    articles = json.load(f)

print(f"총 {len(articles)}개 기사의 상세 본문을 수집합니다...")

success_count = 0
fail_count = 0

# 기사 순회
for idx, article in enumerate(articles):
    url = article['link']
    
    # URL이 없는 경우 패스
    if not url or url == "#" or not url.startswith("http"):
        continue
        
    print(f"[{idx+1}/{len(articles)}] Reading: {article['title']} ...")
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
            # 본문 추출 (WCG 뉴스 페이지 구조에 맞춤)
            # 보통 <div class="wcg-legacy-layout"> ... <div class="wcg-legacy wcg-body-padding"> 안에 본문이 있음
            # 정규식으로 <p> 태그 안의 내용들을 긁어모으는 전략 사용
            
            # 1. 본문 영역을 대략적으로 찾기 (HTML 태그 제거 후 텍스트만 추출)
            #    너무 복잡하므로, <p> 태그 내용을 위주로 수집
            
            body_text = ""
            paragraphs = re.findall(r'<p.*?>(.*?)</p>', html, re.DOTALL)
            
            # 의미 있는 문단만 필터링 (너무 짧거나 메뉴 텍스트 제외)
            valid_paragraphs = []
            for p in paragraphs:
                # 태그 제거
                clean_p = re.sub(r'<.*?>', '', p).strip()
                clean_p = clean_p.replace('&nbsp;', ' ').replace('&#160;', ' ').replace('&quot;', '"').replace('&amp;', '&')
                
                if len(clean_p) > 50: # 50자 이상인 문단만 본문으로 간주
                    valid_paragraphs.append(clean_p)
            
            if valid_paragraphs:
                # 상위 3~5개 문단만 합쳐서 요약으로 사용 (너무 길면 지루함)
                summary_full = " ".join(valid_paragraphs[:3])
                
                # 본문에서 유전자 이름 찾기 (대문자 영어 + 숫자 조합 패턴, 예: GCM1, KRAS)
                # 단, WCG, MCM, IBM 같은 단어 제외
                potential_genes = re.findall(r'\b[A-Z][A-Z0-9]{2,}\b', summary_full)
                exclude_words = {'WCG', 'MCM', 'IBM', 'BOINC', 'CPU', 'GPU', 'RAM', 'URL', 'HTTP', 'HTTPS', 'THE', 'AND', 'FOR', 'NOT', 'BUT', 'USA', 'DNA', 'RNA', 'PC', 'OS', 'MAC', 'FAQ'}
                genes = sorted(list(set([g for g in potential_genes if g not in exclude_words])))
                
                # 요약 업데이트
                article['summary'] = summary_full[:300] + "..." if len(summary_full) > 300 else summary_full
                
                # 만약 유전자가 발견되면 제목이나 요약에 표시해줄 수도 있음 (일단은 요약만 업데이트)
                if genes:
                    print(f"   -> 발견된 유전자/키워드: {', '.join(genes)}")
                
                success_count += 1
            else:
                print("   -> 본문 추출 실패 (유효한 문단 없음)")
                
        # 서버 부하 방지를 위한 짧은 대기
        time.sleep(0.5)
        
    except Exception as e:
        print(f"   -> [Error] {e}")
        fail_count += 1

# 결과 덮어쓰기
with open('src/data.json', 'w', encoding='utf-8') as f:
    json.dump(articles, f, ensure_ascii=False, indent=2)

print(f"업데이트 완료! 성공: {success_count}, 실패: {fail_count}")
