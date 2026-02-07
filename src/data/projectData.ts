export const projectInfo = {
  title: "Mapping Cancer Markers (MCM)",
  subtitle: "인류의 집단지성으로 암 정복의 지도를 그리다",
  description: "MCM(Mapping Cancer Markers) 프로젝트는 전 세계 자원봉사자들의 컴퓨터 유휴 자원을 활용하여(World Community Grid), 폐암, 난소암, 육종 등 난치성 암의 잠재적 바이오마커(Biomarker)를 식별하는 대규모 분산 컴퓨팅 연구입니다. 토론토 대학의 Jurisica Lab에서 주도하고 있습니다.",
  stats: [
    { label: "연구 기간", value: "11년+", sub: "2013년 11월 ~ 현재" },
    { label: "분석된 유전자 조합", value: "15조 개+", sub: "Heuristic Search" },
    { label: "주요 타겟 암", value: "3종", sub: "폐암, 난소암, 육종" },
    { label: "발견된 핵심 유전자", value: "26개+", sub: "DYNLT1, GCM1 등" }
  ]
};

export const glossary = [
  { term: "바이오마커 (Biomarker)", def: "몸 안의 생물학적 변화, 질병 발생 여부 등을 알 수 있는 지표입니다. MCM 프로젝트는 '유전자/단백질'를 바이오마커로 찾습니다." },
  { term: "워크 유닛 (Work Unit)", def: "분산 컴퓨팅에서 거대한 데이터를 잘게 쪼갠 작업 단위입니다. 사용자들의 컴퓨터가 이 조각을 받아 계산하고 결과를 다시 연구소로 보냅니다." },
  { term: "휴리스틱 탐색 (Heuristic Search)", def: "모든 경우의 수를 계산하기에 너무 방대할 때, '가장 효율적인' 경로를 찾아나가는 지능형 알고리즘입니다." },
  { term: "유전체 시그니처 (Signature)", def: "특정 질병이나 상태를 나타낼 수 있는 여러 유전자들의 고유한 발현 패턴이나 조합을 의미합니다." },
  { term: "오발견율 (FDR)", def: "통계적 검정 시 우연히 유의미하게 보이는 오류를 보정하는 방법입니다. 수조 개의 유전자 조합을 다루는 MCM에서 가짜 패턴을 걸러내는 핵심 지표입니다." },
  { term: "매튜 상관 계수 (MCC)", def: "불균형한 데이터셋에서도 예측 모델의 정확도를 신뢰성 있게 평가하는 척도입니다. 단순 정확도(Accuracy)보다 훨씬 엄격한 기준을 제시합니다." },
  { term: "알파폴드 (AlphaFold)", def: "딥마인드가 개발한 AI로, 유전자 서열만으로 단백질의 3차원 구조를 예측합니다. 이 프로젝트에서는 NELL2 등의 구조 시각화에 활용되었습니다." },
  { term: "마이크로어레이 (Microarray)", def: "수만 개의 유전자 발현량을 한 번에 측정할 수 있는 칩 기반 기술입니다. MCM의 초기 데이터 수집에 중추적인 역할을 했습니다." },
  { term: "전사 인자 (Transcription Factor)", def: "DNA의 유전 정보를 RNA로 옮기는 과정을 조절하는 단백질입니다. KLF5, GCM1 등 암의 진행을 결정짓는 많은 유전자가 이에 속합니다." },
  { term: "카플란-마이어 곡선 (Kaplan-Meier Plot)", def: "임상 시험에서 환자들의 '생존 시간'을 분석하여 그래프로 나타낸 것입니다. 특정 유전자의 발현량에 따라 환자의 생존율이 어떻게 달라지는지(예: 상위 25% vs 하위 25%)를 한눈에 보여줍니다." }
];