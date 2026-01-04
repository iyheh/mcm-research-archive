export const ovarianData = {
  title: "난소암 (Ovarian Cancer)",
  description: "조기 진단이 어려운 질병의 특성을 극복하기 위해, 대규모 데이터셋 내에서 식별된 유전자 패턴을 찾는 데 주력하고 있습니다.",
  genes: [
    {
      name: "Ovarian Signatures",
      full_name: "Mapping Ovarian Heterogeneity",
      role: "조기 진단 및 예후 마커 발굴",
      insight: "난소암은 발견 당시 이미 병기가 진행된 경우가 많아, 대규모 데이터셋(711개 샘플)을 통해 장기 생존자와 단기 생존자를 구분할 수 있는 결정적인 유전자 시그니처를 찾는 데 집중하고 있습니다.",
      article_id: 13,
      uniprot_id: "",
      deepDive: {
        story: {
          title: "난소암: 불균질한 데이터 속에서 찾는 생존의 실마리",
          analogy: "난소암 연구는 안개 자욱한 미로에서 길을 찾는 것과 같습니다. MCM 연구팀은 예상치 못한 데이터의 불균질성을 발견하고, 이를 해결하기 위한 정밀한 추가 분석을 진행 중입니다.",
        },
        sections: [
          {
            id: "ovarian-challenge",
            title: "01. 기존의 지식: 조기 진단의 장벽과 연구의 필요성",
            content: "난소암은 뚜렷한 전조증상이 없어 '침묵의 살인자'로 불립니다. 대부분의 환자가 이미 암이 상당히 진행된 상태에서 발견되기에, 초기에 암을 식별할 수 있는 진단 시그니처와 환자의 생존 기간(3년 미만 vs 4년 이상)을 정확히 예측할 수 있는 마커를 발굴하는 것이 연구의 최우선 과제입니다."
          },
          {
            id: "dishomogeneity-analysis",
            title: "02. 난소암 연구 상세: 데이터의 '불균질성' 발견",
            content: "MCM 연구팀은 WCG 자원봉사자들의 도움으로 '1,600억 개' 이상의 난소암 후보 시그니처를 테스트했습니다. 분석 결과, 폐암과 달리 난소암 데이터는 정규 분포를 따르지 않는 '불균질성(Dishomogeneity)'을 보였습니다. 이는 난소암이 유전적으로 매우 복잡한 하위 유형들로 구성되어 있음을 시사하며, 이를 정밀하게 분석하기 위해 '추가 연산' 작업이 결정되었습니다.",
            figure: "https://lh4.googleusercontent.com/STuQLYP00JoSLvY32CJXcZSfbNcO1FtwJVPLzDYNaR-LrBUPVk45XWvjjuh45f_oTjMUK-rPdMUK3bFYTvT_t8vlQc2arIQv41mN7xyPAj_Ca48amCGYgA6_-x_kxmLquMQttJl6HvFqzVCCVEgk_jQ",
            figureCaption: "Figure 1. 데이터 분포 분석: 정규 분포에서 벗어난 난소암 데이터의 독특한 패턴 확인"
          },
          {
            id: "lung-vs-ovarian",
            title: "03. 암종별 비교 분석: 폐암 데이터와의 상관관계",
            content: "폐암 데이터가 안정적인 정규 분포를 보이는 것과 달리, 난소암은 하위 유형 간의 유전적 편차가 매우 크게 나타났습니다. 연구팀은 이러한 '불균질한 결과'를 극복하기 위해 육종(Sarcoma) 분석을 일시 중단하고 난소암 분석에 연산 자원을 집중 배치하는 등 보다 정교한 마커 발굴 전략을 수립했습니다.",
            figureCaption: "비교 분석 데이터: 폐암(정규) 대비 난소암(비정규) 데이터의 특이점 비교 연구"
          }
        ],
        conclusion: "난소암 연구는 데이터의 불균질성을 해결하는 과정을 통해, 보다 정밀하고 개인화된 진단 마커를 발굴하는 새로운 단계로 진입했습니다."
      }
    }
  ]
};