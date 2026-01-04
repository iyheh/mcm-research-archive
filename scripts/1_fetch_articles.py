import urllib.request
import re
import json
import time
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

base_url = "https://www.worldcommunitygrid.org/about_us/news.s?filterCategory=3_116&sortBy=&pageNum={}"
articles = []

print("MCM 프로젝트 전체 데이터 크롤링 시작...")

for page in range(1, 7):
    url = base_url.format(page)
    print(f"Reading page {page}...")
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
            # 1. 기사 덩어리(블록) 추출
            # 날짜(span class="brown") ~ 제목(a class="contentLinkBold") ~ 요약(그 아래 텍스트)
            # HTML 구조가 복잡하므로, 가장 확실한 '날짜'와 '제목'을 쌍으로 찾습니다.
            
            # 패턴: <span class="brown">DATE</span> ... <a href="LINK" class="contentLinkBold">TITLE</a>
            pattern = r'<span class="brown">\s*(.*?)\s*</span>.*?<a href="(/about_us/article\.s\?articleId=[^"]+)"[^>]*class="contentLinkBold">\s*(.*?)\s*</a>'
            
            # 요약문은 별도로 찾기 어려우므로, 제목을 찾은 뒤 그 뒤에 오는 텍스트를 정규식으로 추가 탐색
            # 하지만 간단하게 '날짜'와 '제목'만 정확히 가져와도 성공입니다.
            
            matches = re.findall(pattern, html, re.DOTALL)
            print(f"  -> Found {len(matches)} articles")
            
            for date_str, link_frag, title in matches:
                # 데이터 정제
                link = "https://www.worldcommunitygrid.org" + link_frag
                title = title.strip().replace('&nbsp;', ' ').replace('&#160;', ' ').replace('&ndash;', '-').replace('&#8217;', "'")
                date_str = date_str.strip()
                
                # 날짜 변환 (28 Oct 2025 -> 2025-10-28)
                try:
                    t = time.strptime(date_str, "%d %b %Y")
                    formatted_date = time.strftime("%Y-%m-%d", t)
                except:
                    formatted_date = date_str

                # 카테고리 자동 분류
                if "Research Update" in title:
                    category = "연구 업데이트"
                elif "DOWNTIME" in title or "Migration" in title:
                    category = "시스템"
                elif "Launch" in title or "launch" in title:
                    category = "마일스톤"
                else:
                    category = "뉴스"

                # 요약: 제목을 기반으로 하되, 특정 키워드가 있으면 설명을 덧붙임 (간이)
                summary = title
                if "DYNLT1" in title: summary += " (세포 내 수송 관련 유전자 분석)"
                if "NELL2" in title: summary += " (신경 발달 및 세포 사멸 조절)"
                if "ECD" in title: summary += " (세포 주기 조절 인자)"
                if "PDE8B" in title: summary += " (호르몬 합성 관련 유전자)"
                
                articles.append({
                    "id": len(articles) + 1,
                    "date": formatted_date,
                    "title": title,
                    "category": category,
                    "summary": summary,
                    "link": link
                })
                
    except Exception as e:
        print(f"  [Error] Page {page}: {e}")

# 결과 저장
with open('src/data.json', 'w', encoding='utf-8') as f:
    json.dump(articles, f, ensure_ascii=False, indent=2)

print(f"크롤링 완료! 총 {len(articles)}개의 기사를 저장했습니다.")
