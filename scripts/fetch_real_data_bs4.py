import requests
from bs4 import BeautifulSoup
import json
import os

# 1. URL 설정 (MCM 프로젝트, 14개 레코드)
url = "https://www.worldcommunitygrid.org/stat/viewProjectsHistory.do?projectShortName=mcm1&numRecordsPerPage=14"

# 2. 헤더 설정 (봇 차단 방지용 User-Agent)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

try:
    print(f"Connecting to {url}...")
    # 3. 데이터 요청
    response = requests.get(url, headers=headers)
    response.raise_for_status() # 에러 발생 시 중단

    # 4. HTML 파싱
    soup = BeautifulSoup(response.text, 'html.parser')

    # 5. 데이터가 들어있는 테이블 찾기
    target_table = None
    tables = soup.find_all("table")
    
    for table in tables:
        if "Statistics date" in table.get_text():
            target_table = table
            break
    
    if not target_table:
        print("데이터 테이블을 찾을 수 없습니다. (HTML 구조 변경 또는 접근 차단)")
        # 디버깅용 HTML 저장
        with open('bs4_debug.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
        exit()

    # 6. 데이터 추출
    history = []
    rows = target_table.find_all("tr")

    print(f"Found table. Scanning {len(rows)} rows...")

    for row in rows:
        cols = row.find_all("td")
        col_texts = [ele.get_text(strip=True) for ele in cols if ele.get_text(strip=True)]
        
        # 유효한 데이터 행인 경우 (4개 컬럼)
        if len(col_texts) == 4 and "Statistics date" not in col_texts:
            date_str = col_texts[0]
            runtime = col_texts[1]
            points_str = col_texts[2]
            results_str = col_texts[3]
            
            try:
                points = int(points_str.replace(',', ''))
                results = int(results_str.replace(',', ''))
                
                history.append({
                    "date": date_str,
                    "runtime_raw": runtime,
                    "points": points,
                    "results": results
                })
            except ValueError:
                continue

    if not history:
        print("No valid data rows found.")
        exit()

    print(f"Successfully extracted {len(history)} records.")

    # 7. 파일로 저장
    latest = history[0]
    stats_data = {
        "runtime": latest['runtime_raw'],
        "points": f"{latest['points']:,}",
        "results": f"{latest['results']:,}",
        "history": history
    }
    
    # 7-1. JSON 저장 (src/server_stats.json & public/server_stats.json)
    # Build용
    with open('src/server_stats.json', 'w', encoding='utf-8') as f:
        json.dump(stats_data, f, indent=2)
    
    # Runtime Fetch용
    with open('public/server_stats.json', 'w', encoding='utf-8') as f:
        json.dump(stats_data, f, indent=2)
        
    print(f"Data saved to src/server_stats.json & public/server_stats.json")

    # 7-2. TS 저장 (serverData.ts - 하위 호환용)
    ts_content = f"""export const serverStats = {{
  "runtime": "{stats_data['runtime']}",
  "points": "{stats_data['points']}",
  "results": "{stats_data['results']}",
  "history": {json.dumps(history, indent=4)}
}};
"""
    with open('src/serverData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Data saved to src/serverData.ts")

except Exception as e:
    print(f"오류 발생: {e}")
