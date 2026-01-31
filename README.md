# 🧬 MCM Insight System v2.1
### Mapping Cancer Markers: Advanced Research Dashboard

> **"Decoding the blueprint of life, one block at a time."**

**MCM Insight System**은 World Community Grid의 *Mapping Cancer Markers* 프로젝트 데이터를 시각화하고 분석하는 차세대 대시보드입니다.  
단순한 정보 나열을 넘어, **실시간 3D 단백질 렌더링**과 **서버 데이터 동기화**를 통해 연구 현황을 생생하게 전달합니다.

---

## 🚀 Key Features (핵심 기능)

### 1. 🧬 Real-time 3D Protein Lab
*   **AlphaFold v6 Integration**: 구글 딥마인드의 AlphaFold v6 DB와 연동하여, 유전자 클릭 시 해당 단백질의 3D 구조를 실시간으로 불러옵니다.
*   **Interactive Viewer**: **3Dmol.js** 엔진을 탑재하여 브라우저 내에서 단백질을 회전, 확대/축소하며 구조를 분석할 수 있습니다.
*   **Tactical Scan Mode**: 이미지가 없는 경우 고유의 **Digital DNA Pattern**을 생성하거나, 흑백+라임 틴트의 전술 스캔 모드로 렌더링합니다.

### 2. 📊 Live Grid Statistics
*   **Authentic Data Sync**: Python 스크립트(`fetch_real_data_bs4.py`)를 통해 WCG 공식 서버의 히스토리 데이터를 정밀 크롤링합니다.
*   **Neon Activity Chart**: 최근 14일간의 연산량(Points)과 결과(Results) 추이를 **Neon Lime Line Chart**로 시각화했습니다.
*   **Access Log Table**: 서버 터미널 스타일의 로그 테이블로 일자별 상세 데이터를 제공합니다.

### 3. 📜 Project History Log
*   **Interactive Timeline**: 2013년부터 이어진 MCM 프로젝트의 연구 흐름을 터미널 스타일 연표로 시각화했습니다.
*   **Original PDF Archive**: 각 마일스톤에 해당하는 원본 업데이트 문서(PDF)를 웹상에서 바로 열람하거나 다운로드할 수 있습니다.
*   **Multi-language Support**: 연구 히스토리는 한국어와 영어를 모두 지원합니다.

### 4. 🎨 High-Contrast Tech Minimal Design
*   **Theme**: Deep Black (`#09090b`) 배경과 Neon Lime (`#a3e635`) 액센트 컬러를 사용한 몰입감 높은 UI.
*   **Visuals**: 정적 노이즈 그리드 배경, 마우스 반응형 인터랙션, 글리치 텍스트 효과 등 사이버펑크/Sci-Fi 감성 적용.

---

## 🛠️ Tech Stack

*   **Frontend**: React (Vite), TypeScript, Tailwind CSS
*   **Routing**: Custom Hash-based Routing (SPA Compatible)
*   **3D Engine**: 3Dmol.js (WebGL based)
*   **Data Pipeline**: Python (BeautifulSoup4, Requests)
*   **Icons**: Lucide React

---

## 💻 Installation & Usage

### 1. 프로젝트 설정
```bash
npm install
```

### 2. 최신 데이터 동기화 (Python 필요)
WCG 서버에서 최신 통계 데이터를 가져오려면 아래 스크립트를 실행하세요.
```bash
# 필수 패키지 설치
pip install beautifulsoup4 pandas requests

# 데이터 크롤링 및 적용
python scripts/fetch_real_data_bs4.py
```
> 스크립트 실행 후 `src/serverData.ts` 파일이 자동으로 갱신됩니다.

### 3. 개발 서버 실행
```bash
npm run dev
# 또는 start_server.bat 실행
```

---

## 📂 Project Structure

```
mcm-research-archive/
├── public/
│   └── history_assets/         # MCM 프로젝트 연도별 업데이트 원본 PDF
├── scripts/
│   ├── fetch_real_data_bs4.py  # WCG 통계 크롤링 (핵심)
│   └── ...
├── src/
│   ├── Visuals.tsx             # 3D 뷰어, 차트, 패턴 생성기 등 시각화 컴포넌트
│   ├── HistoryTimeline.tsx     # 프로젝트 히스토리 타임라인 & 모달 컴포넌트
│   ├── App.tsx                 # 메인 레이아웃 및 페이지 라우팅 (Hash Router)
│   ├── serverData.ts           # 크롤링된 실시간 서버 데이터
│   ├── contents.ts             # 유전자 정보 및 UniProt ID 매핑
│   └── data/
│       ├── projectHistory.ts   # 연도별 업데이트 로그 데이터 (KO/EN)
│       └── ...
└── ...
```

---

## 📘 Deep Research Report Guidelines (심층 리포트 구축 원칙)

이 섹션은 프로젝트의 핵심인 '심층 분석 리포트' 기능을 추가하거나 수정할 때 반드시 준수해야 할 마스터 가이드라인입니다.

### 1. 구성 방식 (Detailed Structure)
*   **01번 섹션 (배경 지식)**: 폐암 연구 이전의 일반적인 생물학적 역할과 기전을 아주 짧고 명료하게 요약하여 도입부로 구성합니다.
*   **02번 섹션 이후 (폐암 연구 상세)**: MCM 프로젝트의 핵심 성과인 '폐암' 관련 연구 내용은 원문의 모든 수치, 통계, 발견 사항을 **단 하나도 빠짐없이** 상세하게 수록합니다.
*   **섹션 통합 원칙**: 특정 변수(예: 흡연 여부)에 대한 내용이 독립된 섹션으로 존재하기에 내용이 적거나 시각적 균형이 깨진다면, 이를 연관된 메인 섹션(예: 성별 분석 파트)으로 흡수시켜 전체 흐름을 매끄럽게 만듭니다.

### 2. 연구 데이터 분석 및 매핑 과정 (Analysis Process)
*   **HTML 전수 분석**: 요약본이나 텍스트 뷰어에 의존하지 않습니다. 반드시 웹사이트의 **전체 HTML 소스를 통째로 정독**하여 연구의 맥락을 파악합니다.
*   **캡션 기반 이미지 매핑**: 이미지 숫자에 의존하지 않습니다. **이미지 아래의 실제 캡션 텍스트를 정독**하고, 해당 이미지가 증명하는 데이터(생존 곡선, 발현 대조 등)를 파악하여 본문과 1:1로 매칭합니다.
*   **시각적 중복 배제**: 상단 3D 단백질 모델과 중복되는 시각 자료(단백질 구조도 등)는 리포트 본문에서 배제하고, 연구 본연의 데이터(KM Plot 등)를 우선 배치합니다.

### 3. '알잘딱' 강조 전략 (Strategic Highlighting)
*   **강조 대상의 엄격한 제한**: 문장에서 무분별하게 하이라이트를 남발하지 않습니다. 오직 **[효과가 나타난 주어/암종] + [수치] + [결과/변화]** 삼박자만 정확히 강조합니다.
    *   **Good**: **'여성'** 선암 환자의 경우 사망 위험이 **'51% 감소'**했습니다.
    *   **Bad**: **'여성 선암 환자'**의 경우 **'사망 위험이 무려 51%나 감소하는 결과'**를 보였습니다.
*   **수식어 및 반복어 배제**: '무려', '매우 유의미한', '최대' 등 주관적 수식어나 이미 강조된 주어의 반복은 하이라이트에서 제외합니다.
*   **가독성 중심**: 사용자가 스크롤을 빠르게 내리며 강조된 단어만 훑어도 "누가, 얼마나 좋아졌는가"를 단번에 파악하게 합니다.

### 4. 디자인 및 논리적 흐름 (UI/UX & Logic)
*   **논리적 순서**: 여러 변수가 복합된 분석(예: 성별 + 흡연 여부)의 경우, 메인 대조군 분석(예: 여성 vs 남성)을 완벽히 끝낸 뒤에 세부 변수(예: 흡연 여부와의 독립성)를 설명합니다.
*   **이미지 포커스 연출**: 이미지는 검은색 테두리를 제거하고, 스크롤이 화면 중앙에 올 때만 **불투명도(100%)와 크기(scale-105)**를 키워 집중 조명합니다. 평소에는 반투명 상태를 유지합니다.
*   **캡션 레이아웃**: 이미지가 커질 때 텍스트를 가리지 않도록 캡션 영역을 이미지 박스 하단에 물리적으로 격리(Border-top 처리 등)하여 절대 겹치지 않게 합니다.
*   **2단 그리드 유지**: 모든 섹션은 2단 그리드 배치를 기본으로 하며, 내용이 적은 섹션은 억지로 자리를 채우기보다 연관 섹션이나 결론부에 자연스럽게 흡수시킵니다.

### 5. 표준 레퍼런스 (Reference Implementation)
새로운 리포트를 작성할 때는 반드시 **`src/data/lungData.ts`** 내의 **NELL2** 데이터를 '골드 스탠다드'로 참고하십시오. (2026.01.04 최신 업데이트 버전 기준)

---

## 🔗 Credits
*   **Data Source**: World Community Grid (Mapping Cancer Markers Project)
*   **Protein Structure**: AlphaFold Protein Structure Database (EBI/Google DeepMind)
*   **Designed & Developed by**: Gemini CLI Agent & User