export interface HistoryLog {
  id: string;
  date: string; // YYYY.MM.DD
  year: number;
  category: 'SYSTEM_UPDATE' | 'DATA_MIGRATION' | 'MILESTONE' | 'PUBLICATION' | 'NEW_PHASE';
  title: string;
  summary: string;
  details: string[];
  pdf: string;
}

export const projectHistoryEn: HistoryLog[] = [
  {
    id: 'LOG_2014_05',
    date: '2014.05.01',
    year: 2014,
    category: 'NEW_PHASE',
    title: 'Phase 1: Lung Cancer Landscaping',
    summary: 'Initial analysis of gene signatures for lung cancer. Evaluation of "signature quality" and landscaping of the search space.',
    details: [
      "Estimated project runtime: 2 years for 4 cancers (Lung, Ovarian, Prostate, Sarcoma).",
      "Processed 26 billion gene signatures to assess quality.",
      "Identified that most genes have poor predictive ability, isolating the top 1,000 scoring signatures.",
      "Established a 'benchmark' for measuring gene signature performance (similar to an IQ test for genes)."
    ],
    pdf: '/history_assets/UPDATE-2014-MAY.pdf'
  },
  {
    id: 'LOG_2014_10',
    date: '2014.10.06',
    year: 2014,
    category: 'SYSTEM_UPDATE',
    title: 'Analytics Pipeline Upgrade',
    summary: 'Integration of IBM InfoSphere Streams for real-time high-throughput analytics.',
    details: [
      "Surpassed 84,000 years of computation time.",
      "Deployed IBM InfoSphere Streams on IBM Power 780 for real-time analysis.",
      "Found that smaller signatures (5 genes) target different biological processes compared to larger ones (25 genes)."
    ],
    pdf: '/history_assets/UPDATE-2014-OCT.pdf'
  },
  {
    id: 'LOG_2015_06',
    date: '2015.06.24',
    year: 2015,
    category: 'MILESTONE',
    title: 'Phase 2: Targeted Biomarker Discovery',
    summary: 'Narrowed search space from 22,000+ genes to a subset of 223 high-performing biomarkers.',
    details: [
      "Transitioned from exploratory analysis to targeted Phase 2.",
      "Observed that 'Cellular Fate and Organization' is a key biological process in top signatures.",
      "Network analysis revealed that 'Hub Proteins' are critical but 4 major identified proteins do not interact directly.",
      "Identified 20 high-priority proteins linked through known interactions."
    ],
    pdf: '/history_assets/UPDATE-2015-JUN.pdf'
  },
  {
    id: 'LOG_2015_11',
    date: '2015.11.01',
    year: 2015,
    category: 'NEW_PHASE',
    title: 'Phase 3: Removing Redundancy',
    summary: 'Focus on finding uncorrelated biomarkers to maximize information content in signatures.',
    details: [
      "Targeting high-scoring, uncorrelated biomarkers to avoid redundant information (Analogy: Two copies of the same book vs. two different books).",
      "Discovered that Phase 2 signatures (potentially correlated) outperformed Phase 3 signatures initially, leading to further investigation.",
      "Analyzed biomarker pairs acting as protein interactions using IID database.",
      "Enriched pathways identified: Mevalonate metabolism (target for statins)."
    ],
    pdf: '/history_assets/UPDATE-2015-NOV.pdf'
  },
  {
    id: 'LOG_2016_09',
    date: '2016.09.01',
    year: 2016,
    category: 'DATA_MIGRATION',
    title: 'Transition to Ovarian Dataset',
    summary: 'Expansion to Ovarian Cancer analysis and ETL system overhaul.',
    details: [
      "Overhauled Extract-Transform-Load (ETL) system for better data handling.",
      "Ovarian dataset combines data from multiple independent studies, requiring careful normalization to minimize bias.",
      "Introduction of mirDIP (microRNA Data Integration Portal) to analyze microRNA-gene interactions.",
      "Highlighted the role of microRNAs (e.g., miR-200 family, let-7) in ovarian cancer."
    ],
    pdf: '/history_assets/UPDATE-2016-SEP.pdf'
  },
  {
    id: 'LOG_2017_11',
    date: '2017.11.01',
    year: 2017,
    category: 'MILESTONE',
    title: 'Lab Relocation & Sarcoma Prep',
    summary: 'Lab moved to Krembil Research Institute; finalizing Sarcoma work units.',
    details: [
      "Physical move of servers and lab to Krembil Research Institute (KRI).",
      "Secured 'The Next Generation Signalling Biology Platform' funding.",
      "Continued processing Ovarian Cancer work units without interruption."
    ],
    pdf: '/history_assets/UPDATE-2017-NOV.pdf'
  },
  {
    id: 'LOG_2018_07',
    date: '2018.07.01',
    year: 2018,
    category: 'PUBLICATION',
    title: 'Gene-Family Patterns & Sarcoma Intro',
    summary: 'Deep dive into gene pattern families and introduction of the Sarcoma dataset challenge.',
    details: [
      "Goal: Identify principles of how biomarkers form useful groups (heuristics).",
      "Validated 'gene-pattern-families' using independent lung cancer datasets.",
      "Sarcoma Challenge: Heterogeneous group of tumors (fat, muscle, bone, etc.) requiring more complex analysis than binary classification.",
      "Planned use of pathDIP for pathway enrichment analysis."
    ],
    pdf: '/history_assets/UPDATE-2018-JUL.pdf'
  },
  {
    id: 'LOG_2019_12',
    date: '2019.12.01',
    year: 2019,
    category: 'SYSTEM_UPDATE',
    title: 'Signature Size Optimization',
    summary: 'Analysis of optimal signature size (10-20 markers) for clinical feasibility.',
    details: [
      "Lung processing complete; Ovarian nearing completion; Sarcoma prep underway.",
      "Processed 4.5 trillion candidate lung cancer signatures.",
      "Found that peak accuracy plateaus between 40-80 biomarkers, but 10-20 markers offer the best balance for clinical use.",
      "Biomarker effectiveness varies by signature size (e.g., some genes work better in small groups)."
    ],
    pdf: '/history_assets/UPDATE-2019-DEC.pdf'
  },
  {
    id: 'LOG_2021_06',
    date: '2021.06.01',
    year: 2021,
    category: 'SYSTEM_UPDATE',
    title: 'Multi-Label Analysis Codebase',
    summary: 'Code update to support multi-label classification for Sarcoma subtypes.',
    details: [
      "Upgraded MCM application to handle multi-label datasets (unlike binary Lung/Ovarian labels).",
      "Enabled search for signatures that distinguish specific histological subtypes (e.g., Leiomyosarcoma).",
      "Allowed 'one-against-all' and specific subtype comparisons.",
      "Published multiple papers related to pathDIP 4 and mirDIP 4.1."
    ],
    pdf: '/history_assets/UPDATE-2021-JUN.pdf'
  },
  {
    pdf: '/history_assets/UPDATE-2021-NOV.pdf'
  },
  {
    id: 'LOG_2023_09',
    date: '2023.09.25',
    year: 2023,
    category: 'NEW_PHASE',
    title: 'Ovarian Dishomogeneity Analysis',
    summary: 'Discovery of non-normal distribution in ovarian results leading to additional targeted work units.',
    details: [
      "Identified that ovarian cancer results are dishomogeneous, unlike the normal distribution seen in lung cancer.",
      "Launched additional ovarian work units starting September 25th to investigate biomarkers further.",
      "Temporarily paused Sarcoma work units to prioritize ovarian data resolution.",
      "Tested over 160 billion candidate ovarian cancer signatures with help from WCG volunteers."
    ],
    pdf: '/history_assets/UPDATE-2023-SEP2.pdf'
  }
];

export const projectHistoryKo: HistoryLog[] = [
  {
    id: 'LOG_2014_05',
    date: '2014.05.01',
    year: 2014,
    category: 'NEW_PHASE',
    title: '1단계: 폐암 지형도 분석 (Landscaping)',
    summary: '폐암 유전자 서명(Signature)에 대한 초기 분석. 서명 품질 평가 및 검색 공간(Search Space)의 지형도 파악 수행.',
    details: [
      "프로젝트 예상 기간: 2년, 4대 암종(폐, 난소, 전립선, 육종) 분석 목표.",
      "약 260억 개의 유전자 서명을 처리하여 품질 평가 진행.",
      "대부분의 유전자가 예측 능력이 낮음을 확인, 상위 1,000개 고득점 서명을 분리.",
      "유전자 서명의 성능을 측정하는 '벤치마크' 수립 (유전자를 위한 IQ 테스트와 유사)."
    ],
    pdf: '/history_assets/UPDATE-2014-MAY.pdf'
  },
  {
    id: 'LOG_2014_10',
    date: '2014.10.06',
    year: 2014,
    category: 'SYSTEM_UPDATE',
    title: '분석 파이프라인 업그레이드',
    summary: 'IBM InfoSphere Streams 도입으로 실시간 대용량 분석 처리 능력 확보.',
    details: [
      "총 연산 시간 84,000년 돌파.",
      "IBM Power 780 서버에 실시간 분석 플랫폼(InfoSphere Streams) 구축 및 가동.",
      "작은 서명(5개 유전자)과 큰 서명(25개 유전자)이 서로 다른 생물학적 과정을 타겟팅함을 발견."
    ],
    pdf: '/history_assets/UPDATE-2014-OCT.pdf'
  },
  {
    id: 'LOG_2015_06',
    date: '2015.06.24',
    year: 2015,
    category: 'MILESTONE',
    title: '2단계: 타겟 바이오마커 발굴',
    summary: '22,000개 이상의 유전자 중 고성능 바이오마커 223개를 선별하여 탐색 범위를 좁힘.',
    details: [
      "탐색적 분석(Exploratory)에서 타겟 집중형(Targeted) 2단계로 전환.",
      "상위 서명들에서 '세포 운명 및 조직화(Cellular Fate and Organization)'가 핵심 기전임을 관측.",
      "네트워크 분석 결과, 핵심 '허브 단백질' 4종은 직접 상호작용하지 않음을 발견.",
      "알려진 상호작용으로 연결된 20개의 고우선순위 단백질 식별."
    ],
    pdf: '/history_assets/UPDATE-2015-JUN.pdf'
  },
  {
    id: 'LOG_2015_11',
    date: '2015.11.01',
    year: 2015,
    category: 'NEW_PHASE',
    title: '3단계: 중복성 제거 (Redundancy)',
    summary: '서명 내 정보량을 극대화하기 위해 상관관계가 낮은(Uncorrelated) 바이오마커 조합 탐색.',
    details: [
      "중복 정보를 피하기 위해 점수는 높되 서로 상관없는 바이오마커 타겟팅 (비유: 똑같은 책 2권보다는 다른 책 2권이 낫다).",
      "초기 분석에선 2단계 서명(상관성 있음)이 3단계보다 성능이 좋아, 이에 대한 심층 원인 분석 착수.",
      "IID 데이터베이스를 활용하여 바이오마커 쌍을 단백질 상호작용 관점에서 분석.",
      "발견된 주요 경로: 메발론산 대사 (Mevalonate metabolism, 스타틴의 표적)."
    ],
    pdf: '/history_assets/UPDATE-2015-NOV.pdf'
  },
  {
    id: 'LOG_2016_09',
    date: '2016.09.01',
    year: 2016,
    category: 'DATA_MIGRATION',
    title: '난소암 데이터셋 분석 전환',
    summary: '폐암에서 난소암(Ovarian Cancer)으로 분석 영역 확장 및 ETL 시스템 전면 개편.',
    details: [
      "ETL(추출-변환-적재) 시스템을 개편하여 데이터 처리 효율성 증대.",
      "난소암 데이터셋은 여러 독립 연구를 통합한 것으로, 편향(Bias) 최소화를 위한 정밀 정규화 수행.",
      "마이크로RNA(microRNA)와 유전자 간 상호작용 분석을 위해 mirDIP 포털 도입.",
      "난소암에서 miR-200 패밀리와 let-7 등 마이크로RNA의 중요성 부각."
    ],
    pdf: '/history_assets/UPDATE-2016-SEP.pdf'
  },
  {
    id: 'LOG_2017_11',
    date: '2017.11.01',
    year: 2017,
    category: 'MILESTONE',
    title: '연구소 이전 및 육종 준비',
    summary: 'Krembil 연구소(KRI)로 랩 이전 완료 및 육종(Sarcoma) 분석 작업 단위(Work Unit) 준비.',
    details: [
      "서버 및 연구 인프라를 Krembil Research Institute (KRI)로 물리적 이전.",
      "'차세대 신호 전달 생물학 플랫폼' 연구 자금 확보.",
      "이전 기간에도 중단 없이 난소암 데이터 연산 지속."
    ],
    pdf: '/history_assets/UPDATE-2017-NOV.pdf'
  },
  {
    id: 'LOG_2018_07',
    date: '2018.07.01',
    year: 2018,
    category: 'PUBLICATION',
    title: '유전자 패턴 패밀리 & 육종 소개',
    summary: '유전자 패턴 패밀리(Gene-Pattern-Family) 심층 분석 및 육종 데이터셋의 난제 소개.',
    details: [
      "목표: 바이오마커들이 유용한 그룹을 형성하는 원칙(Heuristics) 규명.",
      "독립된 폐암 데이터셋을 사용하여 '유전자 패턴 패밀리' 검증 성공.",
      "육종(Sarcoma)의 도전과제: 지방, 근육, 뼈 등 기원이 다양하여 이진 분류보다 복잡한 분석 필요.",
      "경로 농축 분석(Pathway Enrichment)을 위해 pathDIP 활용 계획 수립."
    ],
    pdf: '/history_assets/UPDATE-2018-JUL.pdf'
  },
  {
    id: 'LOG_2019_12',
    date: '2019.12.01',
    year: 2019,
    category: 'SYSTEM_UPDATE',
    title: '서명 크기 최적화 (Optimization)',
    summary: '임상 적용 가능성을 고려한 최적의 유전자 서명 크기(10~20개) 분석.',
    details: [
      "폐암 분석 완료, 난소암 마무리 단계, 육종 준비 중.",
      "총 4.5조(Trillion) 개의 폐암 후보 서명 처리 완료.",
      "정확도는 40~80개 마커에서 정점에 달하지만, 임상적 효율성은 10~20개 구간이 최적임을 확인.",
      "서명 크기에 따라 각 바이오마커의 효과가 달라짐을 발견."
    ],
    pdf: '/history_assets/UPDATE-2019-DEC.pdf'
  },
  {
    id: 'LOG_2021_06',
    date: '2021.06.01',
    year: 2021,
    category: 'SYSTEM_UPDATE',
    title: '다중 레이블 분석 코드 업데이트',
    summary: '육종(Sarcoma) 하위 유형 분류를 위한 다중 레이블(Multi-label) 지원 코드 배포.',
    details: [
      "기존 이진 분류(암 vs 정상)와 달리 다중 레이블을 처리하도록 MCM 애플리케이션 업그레이드.",
      "평활근육종(Leiomyosarcoma) 등 특정 조직학적 하위 유형을 구별하는 서명 탐색 가능.",
      "'일대다(One-against-all)' 비교 및 특정 서브타입 간 비교 허용.",
      "pathDIP 4 및 mirDIP 4.1 관련 다수 논문 발표."
    ],
    pdf: '/history_assets/UPDATE-2021-JUN.pdf'
  },
  {
    id: 'LOG_2021_11',
    date: '2021.11.16',
    year: 2021,
    category: 'MILESTONE',
    title: '15조 개 서명 테스트 달성',
    summary: 'WCG 17주년 기념 업데이트. 자원봉사자들의 기여로 천문학적인 연산량 달성.',
    details: [
      "누적 15조(15 Trillion) 개 이상의 유전자 서명 테스트 완료.",
      "폐암 데이터는 서명 크기가 커질수록 연산량이 늘어나는 일반적 패턴을 보임.",
      "난소암 데이터는 예후 예측(생존 기간)의 복잡성으로 인해 연산 비용이 더 높음을 확인.",
      "육종 분석은 예측 능력에 영향을 미치는 다양한 구성 성분에 집중할 것임을 확정."
    ],
    pdf: '/history_assets/UPDATE-2021-NOV.pdf'
  },
  {
    id: 'LOG_2023_09',
    date: '2023.09.25',
    year: 2023,
    category: 'NEW_PHASE',
    title: '난소암 결과 불균질성 분석',
    summary: '정규 분포를 따르지 않는 난소암 분석 결과 발견에 따른 추가 작업 단위 실행.',
    details: [
      "난소암 결과가 폐암과 달리 불균질(Dishomogeneous)하게 나타나는 현상 발견.",
      "정밀 분석을 위해 9월 25일부터 추가 난소암 작업 단위(Work Units) 가동 시작.",
      "난소암 데이터 해결을 위해 육종(Sarcoma) 연산을 일시 중단하고 자원 집중.",
      "WCG 자원봉사자들의 지원으로 1,600억 개 이상의 후보 난소암 서명 테스트 완료."
    ],
    pdf: '/history_assets/UPDATE-2023-SEP2.pdf'
  }
];