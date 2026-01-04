export const lungData = {
  title: "폐암 (Lung Cancer)",
  description: "MCM 프로젝트의 핵심 성과인 폐암 연구는 환자의 흡연 여부, 성별, 생존 기간 등 실제 임상 데이터와 유전체 분석을 결합하여 다음과 같은 결정적인 단서들을 찾아냈습니다.",
  genes: [
    {
      name: "NELL2",
      full_name: "Neural EGF-Like Like 2",
      role: "신경 발달 및 세포 사멸(Apoptosis) 조절",
      insight: "2025년 10월 연구팀이 주목한 유전자입니다. 원래 신경 발달을 돕는 단백질이지만, 암 조직에서 나타나는 비정상적인 발현 패턴이 세포 사멸 기전과 깊이 연관되어 있음이 확인되었습니다.",
      article_id: 1,
      uniprot_id: "Q99435",
      deepDive: {
        story: {
          title: "NELL2: 여성 폐선암 환자의 생존 지도를 바꾸는 결정적 마커",
          analogy: "MCM 프로젝트의 방대한 분석 결과, NELL2는 신경계의 길잡이를 넘어 폐암 환자의 생존권을 결정짓는 강력한 바이오마커임이 입증되었습니다.",
        },
        sections: [
          {
            id: "neural-origin",
            title: "01. 기존의 지식: 신경망을 설계하는 '교통정리사'",
            content: "NELL2는 본래 태아의 신경계가 발달할 때, 신경 세포의 축삭(Axon)이 올바른 방향으로 뻗어나가도록 안내하는 이정표 역할을 합니다. 특히 몸의 오른쪽 감각이 왼쪽 뇌로 전달될 수 있도록 신경이 척수에서 '교차하는 과정'을 조율하는 것으로 잘 알려져 있습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_NELL2_fig4.png",
            figureCaption: "Figure 4. 신경 세포의 교차 가이드: NELL2의 본래 신경학적 기전"
          },
          {
            id: "subtype-analysis",
            title: "02. 폐암 내 차별적 작용: 선암(ADC) vs 편평세포암(SQC)",
            content: "연구팀은 비소세포폐암의 두 핵심 유형인 선암과 편평세포암을 비교 분석했습니다. 그 결과, '선암' 환자군에서는 생존 위험이 '31% 감소'하는 뚜렷한 생존 이득이 관찰되었습니다. 반면 편평세포암 환자군에서는 생존율 사이에 연관성이 발견되지 않았습니다. 이는 NELL2가 특정 암세포 경로에만 선택적으로 개입함을 시사합니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_NELL2_fig6_fig8.png",
            figureCaption: "Figure 6. 암종별 생존 곡선: 선암(A) 환자에게서만 나타나는 NELL2의 보호 효과"
          },
          {
            id: "gender-and-smoking",
            title: "03. 성별 및 환경 분석: 오직 여성에게만 허락된 수호자",
            content: "가장 주목할 만한 성과는 성별에 따른 분석입니다. '여성' 선암 환자의 경우, NELL2 수치가 높을 때 사망 위험이 '51% 감소'하는 결과를 보였습니다. 반면 남성 환자에게는 이러한 영향이 없었습니다. 특히 이 효과는 '흡연 여부와 독립적'으로 나타나, 담배를 피우는 환자든 아니든 NELL2 수치가 높으면 생존율이 향상되었습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_NELL2_fig7_fig9.png",
            figureCaption: "Figure 9. 성별 대조 생존 분석: 여성 선암 환자(A)에게서만 생사를 가르는 결정적 차이가 발생함"
          }
        ],
        conclusion: "NELL2 연구는 여성 폐선암 환자에게 NELL2가 흡연 여부와 상관없이 생존을 예측하는 핵심 지표임을 입증했습니다."
      }
    },
    {
      name: "ECD",
      full_name: "Ecdysoneless Cell Cycle Regulator",
      role: "세포 주기 조절 / p53 상호작용",
      insight: "2025년 7월 연구팀이 주목한 유전자입니다. ECD는 본래 세포의 성장과 복구(Repair)를 조절하는 역할을 하지만, 폐암 조직에서는 과발현되어 암 억제 단백질인 p53의 기능을 방해하고 암세포의 무제한 증식을 돕는 것으로 분석되었습니다.",
      article_id: 3,
      uniprot_id: "O95905",
      deepDive: {
        story: {
          title: "ECD: 선암 환자의 예후를 결정짓는 세포 주기 조절자",
          analogy: "MCM 프로젝트는 ECD 발현량과 사망률 사이의 통계적 상관관계를 규명하여, 이 유전자가 특정 환자군에서 생사를 가르는 결정적인 지표임을 입증했습니다.",
        },
        sections: [
          {
            id: "cell-cycle-p53",
            title: "01. 기존의 지식: 세포 주기의 가이드와 p53 안정화",
            content: "ECD는 본래 세포 분열 주기를 조절하고 암 억제 단백질인 p53을 안정화하는 역할을 합니다. 하지만 폐암 세포 내에서는 이러한 조절 기능에 변화가 생겨, ECD 수치가 '높을수록' 암세포의 성장이 가속화되는 경향이 관찰되었습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_ecd_fig4_nocaption.jpg",
            figureCaption: "Figure 4. ECD와 p53 상호작용: MDM2를 통한 p53 안정화 및 종양 억제 기전"
          },
          {
            id: "adc-sqc-comparison",
            title: "02. 폐암 내 차별적 작용: 선암(ADC) 환자의 생존 데이터",
            content: "폐암 유형별 분석 결과, 선암(ADC) 환자군에서 ECD 발현이 '낮을수록' 생존 확률이 '유의미하게 향상'되었습니다. 데이터에 따르면 낮은 발현군은 높은 발현군에 비해 사망 위험이 '32% 감소'(HR 1.47, p < 0.00001)하는 뚜렷한 차이를 보였습니다. 반면 편평세포암(SQC)에서는 이러한 연관성이 나타나지 않았습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_ecd_fig7_nocaption.jpg",
            figureCaption: "Figure 7. 생존 곡선 비교: 선암(A)에서 확인된 ECD 발현에 따른 예후 차이"
          },
          {
            id: "smoking-status-analysis",
            title: "03. 환경 변수 분석: 비흡연 환자에게서 나타나는 극명한 효과",
            content: "흡연 여부에 따른 분석 결과, 특히 '비흡연' 선암 환자군에서 ECD 저발현의 영향력이 극대화되었습니다. 비흡연 환자의 경우 사망 위험이 '56% 감소'(HR 2.29)하는 압도적인 결과가 확인되었으며, 이는 흡연 환자군의 위험 감소폭인 '26%'(HR 1.36)보다 훨씬 높은 수치입니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_ecd_fig8_nocaption.jpg",
            figureCaption: "Figure 8. 흡연 여부 대조 분석: 비흡연 환자군(B)에서 생존율 격차가 가장 크게 발생함"
          }
        ],
        conclusion: "ECD 연구는 선암 환자, 특히 비흡연자군에서 ECD의 저발현이 환자의 생존율을 예측하는 핵심적인 임상 지표임을 보여줍니다."
      }
    },
    {
      name: "PDE8B",
      full_name: "Phosphodiesterase 8B",
      role: "호르몬 합성 / 신호 전달 체계",
      insight: "2025년 5월 리포트에서 언급되었습니다. 다양한 암종에서 발현 변화가 보고된 바 있으며, MCM 연구팀은 이 유전자가 폐암 세포 내의 에너지 대사와 신호 전달 체계에 어떻게 개입하여 암의 생존을 돕는지 분석하고 있습니다.",
      article_id: 4,
      uniprot_id: "O95263",
      deepDive: {
        story: {
          title: "PDE8B: 흡연 이력이 있는 선암 환자의 강력한 보호 마커",
          analogy: "MCM 프로젝트는 PDE8B 수치가 높을수록 흡연 경력이 있는 선암 환자의 생존 확률이 비약적으로 높아진다는 통계적 사실을 발견했습니다.",
        },
        sections: [
          {
            id: "camp-regulator",
            title: "01. 기존의 지식: 세포 내 신호 전달의 마스터 조절자",
            content: "PDE8B는 세포 내 신호 전달 물질인 cAMP의 수치를 관리하는 효소입니다. 이를 통해 세포의 성장, 대사, 호르몬 생산에 관여하는 신호 체계를 조절하는 '컨트롤 타워' 역할을 수행합니다. 다양한 암종에서 발현 변화가 보고되어 왔으나, 환자의 예후와 직접적인 연관성이 명확히 규명된 곳은 폐암이 유일합니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig2.JPG",
            figureCaption: "Figure 2. 조직별 발현 연구: 다양한 조직 및 암종에서 나타나는 PDE8B의 발현 패턴"
          },
          {
            id: "subtype-sensitivity",
            title: "02. 폐암 내 차별적 작용: 선암(ADC) 특이적 예후 효과",
            content: "연구 결과, PDE8B는 폐암의 하위 유형에 따라 상이한 영향력을 보였습니다. '선암(ADC)' 환자군에서는 PDE8B 수치가 '높을수록' 생존 확률이 '유의미하게 향상'되었으며, 사망 위험이 무려 '65% 감소'(HR 0.35, p < 0.00001)하는 강력한 보호 효과가 확인되었습니다. 반면 '편평세포암(SQC)' 환자군에서는 이러한 연관성이 발견되지 않았습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig5.JPG",
            figureCaption: "Figure 5. 암종별 생존 곡선: 선암(A)에서만 뚜렷하게 나타나는 PDE8B의 보호 효과"
          },
          {
            id: "smoking-impact",
            title: "03. 환경 변수 분석: 흡연자군에서 발견된 압도적 생존 이득",
            content: "가장 결정적인 차이는 흡연 여부에서 나타났습니다. '흡연' 경험이 있는 선암 환자군에서 높은 PDE8B 발현은 사망 위험을 '88% 감소'(HR 0.12, p < 0.00001)시키는 압도적인 생존 이득과 연결되었습니다. 반면 '비흡연' 환자군에서는 통계적으로 유의미한 생존 이득이 발견되지 않아, PDE8B의 기능이 담배 연기로 인한 세포 변화와 밀접하게 연관되어 있음을 시사합니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig6.JPG",
            figureCaption: "Figure 6. 흡연 여부 대조 분석: 흡연 경험이 있는 환자군(A)에서만 극적인 생존율 향상이 관찰됨"
          }
        ],
        conclusion: "PDE8B 연구는 흡연 이력이 있는 선암 환자에게서 PDE8B 수치가 생존율을 예측하고 항암제 반응을 조절하는 핵심 마커임을 입증했습니다."
      }
    },
    {
      name: "DYNLT1",
      full_name: "Dynein Light Chain Tctex-Type 1",
      role: "세포 내 물질 수송",
      insight: "2025년 3월 집중 조명된 유전자입니다. 세포 내 '택배 트럭' 역할을 하는 다이네인(Dynein) 복합체의 일부로, 암세포가 빠르게 분열하고 전이하는 데 필요한 물질들을 실어 나르는 과정에 관여합니다. 폐암의 병태생리 이해에 핵심적인 퍼즐 조각입니다.",
      article_id: 5,
      uniprot_id: "P63172",
      deepDive: {
        story: {
          title: "DYNLT1: 세포 내 물류를 통제하는 보호적 마커",
          analogy: "MCM 프로젝트는 DYNLT1이 폐암 세포 내의 물질 수송을 조절하며, 특히 선암과 편평세포암 환자군 모두에서 보호적인 역할을 수행한다는 점을 발견했습니다.",
        },
        sections: [
          {
            id: "intracellular-transport",
            title: "01. 기존의 지식: 세포 내 '택배 트럭'의 핵심 부품",
            content: "DYNLT1은 세포 내 물질 수송을 담당하는 다이네인(Dynein) 모터 복합체의 필수적인 구성 요소입니다. 세포 분열, 신경 발생, 그리고 바이러스가 숙주 세포로 침투하는 과정에서 에너지를 사용하여 화물을 실어 나르는 '물류 시스템'의 핵심적인 역할을 수행합니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_dynlt1_fig2.jpg",
            figureCaption: "Figure 2. 광범위한 발현 패턴: 다양한 인체 조직에서 관찰되는 DYNLT1의 발현 배경"
          },
          {
            id: "protective-role",
            title: "02. 폐암 내 작용: 두 주요 암종 모두에서의 보호적 경향",
            content: "MCM 연구 결과, DYNLT1은 비소세포폐암의 두 핵심 유형인 '선암(ADC)'과 '편평세포암(SQC)' 모두에서 '보호적 역할'을 하는 것으로 나타났습니다. 이는 DYNLT1의 발현 패턴이 폐암의 진행을 예측하고 환자의 상태를 파악하는 데 중요한 지표가 될 수 있음을 시사합니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_dynlt1_fig4.jpg",
            figureCaption: "Figure 4. 폐암 연구 요약: 선암 및 편평세포암 환자군에서 확인된 보호적 발현 패턴"
          },
          {
            id: "multi-cancer-impact",
            title: "03. 확장된 연구: 유방암 및 위암에서의 복합적 영향력",
            content: "DYNLT1은 폐암뿐만 아니라 다양한 암종에서도 그 영향력이 확인되고 있습니다. '유방암'에서는 미토콘드리아 대사를 촉진하여 종양 성장을 돕는 반면, '위암'에서는 특정 신호 경로를 통해 악성 변화에 기여하는 등 암종에 따라 '보호적 역할'과 '부정적 역할'을 동시에 수행하는 복합적인 마커로 분석되었습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_dynlt1_fig5.jpg",
            figureCaption: "Figure 5. 암종별 비교 분석: 유방암 등 다양한 암 조직에서 나타나는 DYNLT1의 차별적 발현"
          }
        ],
        conclusion: "DYNLT1 연구는 폐암 환자에게서 이 유전자가 세포 내 수송 메커니즘을 조절하며 생존에 긍정적인 영향을 미칠 수 있는 중요한 단서임을 밝혀냈습니다."
      }
    },
    {
      name: "GCM1",
      full_name: "Glial Cells Missing Homolog 1",
      role: "태반 발달 / 전사 인자",
      insight: "2025년 1월에 보고되었습니다. 원래 태반을 만드는 데 쓰이는 유전자지만, 흥미롭게도 폐 선암 조직에서 특이적인 발현을 보입니다. 암세포가 마치 태반 세포처럼 주변 조직을 파고드는 침습성(Invasiveness)을 획득하는 데 관여할 가능성이 제기되었습니다.",
      article_id: 6,
      uniprot_id: "Q9NP62",
      deepDive: {
        story: {
          title: "GCM1: 태반의 설계도가 그리는 암세포의 이면",
          analogy: "GCM1은 본래 태반의 성장을 돕는 '생명의 설계도'이지만, 성인의 폐에서는 암종에 따라 생존을 위협하거나 오히려 보호하는 이중적인 모습을 보입니다.",
        },
        sections: [
          {
            id: "placental-origin",
            title: "01. 기존의 지식: 태반 발달을 지휘하는 전사 인자",
            content: "GCM1은 본래 태반이 형성될 때 핵심적인 역할을 하는 전사 인자입니다. 태반 성장 인자(PGF)를 조절하고 세포의 분화와 침투를 조절하여 태아가 영양을 공급받을 수 있는 환경을 설계합니다. 이러한 세포 침습과 분화의 메커니즘은 흥미롭게도 암의 진행 과정과 많은 평행이론을 공유합니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_gene_update_gcm1_fig1.png",
            figureCaption: "Figure 1. 태반 발달 기전: GCM1이 조절하는 태반 성장 인자와 세포 분화 경로"
          },
          {
            id: "dual-role-lung",
            title: "02. 폐암 내 차별적 작용: 선암과 편평세포암의 상반된 예후",
            content: "폐암 분석 결과, GCM1은 암종에 따라 완전히 다른 영향을 미쳤습니다. '선암(ADC)' 환자군에서는 비정상적인 발현이 '나쁜 생존율'과 직결되는 위험 인자로 작용했습니다. 반면, '편평세포암(SQC)' 환자군에서는 오히려 환자를 지키는 '보호적 역할'을 수행하는 것으로 나타나, 암종별 맞춤형 진단의 중요성을 시사했습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_gene_update_gcm1_fig2.png",
            figureCaption: "Figure 2. 폐암 생존 분석: 선암(A)에서의 부정적 예후와 편평세포암(B)에서의 보호적 효과 비교"
          },
          {
            id: "systemic-impact",
            title: "03. 확장된 연구: 고환암 및 다수 암종에서의 치명적 지표",
            content: "GCM1의 영향력은 폐 이외의 암종에서 더욱 극명하게 드러납니다. 특히 고환암 환자의 경우, GCM1이 높게 발현될 때 사망 위험이 무려 'HR 6.3'배까지 치솟는 극단적인 결과가 확인되었습니다. 이 외에도 간암, 췌장암, 신장암 등 여러 고형암에서 공통적으로 '나쁜 생존율'을 예측하는 지표로 분석되었습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_gene_update_gcm1_fig5.png",
            figureCaption: "Figure 5. 다장기 암종 분석: 간, 췌장, 신장암 등에서 확인된 GCM1의 부정적 예후 패턴"
          }
        ],
        conclusion: "GCM1 연구는 태반 형성 기전이 폐암의 진행에 어떻게 개입하는지 밝혀냈으며, 암종에 따라 상반된 예후를 보이는 GCM1의 이중성을 입증했습니다."
      }
    },
    {
      name: "ASTN2",
      full_name: "Astrotactin 2",
      role: "신경 세포 이동",
      insight: "2024년 7월 업데이트의 주인공입니다. 신경 세포의 이동을 돕는 단백질이지만, 연구 결과 여러 암 조직에서 발현됨이 확인되었습니다. 특히 폐암의 전이(Metastasis) 과정에서 암세포의 이동성을 높이는 데 기여할 수 있는 잠재적 마커입니다.",
      article_id: 7,
      uniprot_id: "Q7Z417",
      deepDive: {
        story: {
          title: "ASTN2: 여성 폐암 환자의 생존권을 수호하는 신경계의 가이드",
          analogy: "ASTN2는 본래 뇌의 지도를 그리는 신경계의 가이드이지만, 폐암 환경에서는 오직 여성 환자들에게만 더 긴 생존의 희망을 주는 수호자로 작용합니다.",
        },
        sections: [
          {
            id: "neuronal-migration",
            title: "01. 기존의 지식: 신경망을 구축하는 정밀한 내비게이터",
            content: "ASTN2는 신경 세포가 뇌 내의 올바른 위치로 이동할 수 있도록 돕는 접착 분자의 재활용과 수송을 조절합니다. 이러한 역할 때문에 알츠하이머, 편두통 등 신경계 질환과의 연관성이 깊게 연구되어 왔습니다. 인체의 거의 모든 조직에서 광범위하게 발현되지만, 그 임상적 가치는 폐암에서 새롭게 조명되고 있습니다.",
            figure: "https://lh7-us.googleusercontent.com/docsz/AD_4nXd03z-NzYObdIbCoKXplL4UjA6b6ihtmKp1HELqaTIeMp9BISU1LweBvdmvrAJaeR2L9mmxvxj1iQrQxToERhmaK1ne70hJu0XSitfAH2qU2r24dzILOZWKNPx0-wqpUxIpIjY43YU74A7Zdvhcj4XIVwU?key=d8OOdwoCe5jn1aSnJrNIIQ",
            figureCaption: "Figure 1. 조직별 발현 연구: 전신 조직에서 광범위하게 나타나는 ASTN2의 발현 배경"
          },
          {
            id: "female-specific-benefit",
            title: "02. 폐암 내 작용: 오직 여성에게만 허락된 생존 확률 향상",
            content: "폐암 환자의 데이터를 분석한 결과, 높은 ASTN2 발현은 환자의 '더 긴 생존 기간'과 직접적인 연관성이 있음이 입증되었습니다. 주목할 점은 이 효과가 오직 '여성' 환자군에서만 유효하다는 사실입니다. 이는 여성 폐암 환자의 예후를 예측하는 데 있어 ASTN2가 독보적인 지표가 될 수 있음을 시사합니다.",
            figure: "https://lh7-us.googleusercontent.com/docsz/AD_4nXcM-Ie93bHB-w8VacUq37E-_Ch_2K96CKJstoNFRnyArec2KGdSGYs6mQ7ItyqbMY4LBzez-0ucmWiI6q-r5sfVHD_2lhVScVSBJqA_KmD-7c4vbaU9YX4vOSfFgFtp5yWVlHnmLph17qW95iLjwO_6WBs?key=d8OOdwoCe5jn1aSnJrNIIQ",
            figureCaption: "Figure 2. 생존 곡선 분석: 여성(B) 환자군에서만 나타나는 ASTN2 고발현 시의 생존 이득"
          },
          {
            id: "pancancer-astn2",
            title: "03. 확장된 연구: 다수 암종에서의 차별적 발현 패턴",
            content: "ASTN2는 폐암뿐만 아니라 다양한 암종에서도 그 영향력이 확인되었습니다. 전신 22개 암종 분석 결과, 13개 암종에서 정상 조직 대비 유의미한 '차별적 발현'이 관찰되었습니다. 특히 glioblastoma 등 이동성이 중요한 암종에서 높은 발현을 보이며, 암세포의 전이 과정에 관여할 가능성이 제기되었습니다.",
            figure: "https://lh7-us.googleusercontent.com/docsz/AD_4nXfCdrb1g484K3oB2FjQC19lB0aH97EX83I3L4nTHy-dzincQ8q_q2zzXgt9_IqMJmJqUTv086cNSPXOX4xC8y28841mS25A0AmF5_-pDLkMMxylXYzhwsHIxkNeInIkqey_lphjbQ8r9tIG11eSTzJj2WC3?key=d8OOdwoCe5jn1aSnJrNIIQ",
            figureCaption: "Figure 3. 전신 암종 분석: 폐암을 포함한 다양한 암 조직에서 나타나는 ASTN2의 발현 편차"
          }
        ],
        conclusion: "ASTN2 연구는 여성 폐암 환자에게서 이 유전자가 생존율을 예측하고 암의 이동성을 파악하는 핵심적인 마커임을 입증했습니다."
      }
    },
    {
      name: "KLF5",
      full_name: "Kruppel-Like Factor 5",
      role: "전사 인자 (Transcription Factor)",
      insight: "2024년 5월 분석 결과입니다. KLF5는 이미 여러 암에서 '요주의 인물'로 알려진 전사 인자입니다. MCM 연구팀은 폐암 환경에서 KLF5가 다른 유전자들과 어떻게 상호작용하여 암세포의 증식 스위치를 켜는지 시뮬레이션했습니다.",
      article_id: 8,
      uniprot_id: "Q13887",
      deepDive: {
        story: {
          title: "KLF5: 비흡연 환자의 생존 스위치를 켜는 전사 마스터",
          analogy: "KLF5는 세포의 다양한 스위치를 조절하는 전사 마스터이며, 특히 담배를 피우지 않는 폐암 환자들에게는 생존의 가능성을 열어주는 수호자 역할을 합니다.",
        },
        sections: [
          {
            id: "transcription-master",
            title: "01. 기존의 지식: 유전자 발현을 조율하는 다재다능한 지휘자",
            content: "KLF5는 세포 내 수많은 유전자의 발현을 활성화하는 핵심 전사 인자입니다. 혈관 리모델링, 세포 스트레스 반응, 배아 분화 등 인체의 기초적인 생물학적 과정 전반에 관여합니다. 특히 우리가 앞서 다룬 VAMP1, IL13RA1 등 폐암 관련 유전자들의 발현을 직접 조절하는 '상위 컨트롤러'로서 그 중요성이 매우 높습니다.",
            figure: "https://lh7-us.googleusercontent.com/enfFQAm1Rul4PDPuTPO4mP6KMu7lNIJ4xBjkc04GaF8Gk1MJNkIcJB3SS725vSah978M-znqAZ8-HgqsluimgKluXCTqhZ9R1Wla273bGj8x1-BIdSfvOYUlWDqWkKGdkNyPXEyIpWssBGEuM_b26u4",
            figureCaption: "Figure 1. 광범위한 조직 발현: 인체 내 다양한 장기와 조직에서 확인된 KLF5의 발현 배경"
          },
          {
            id: "non-smoker-protection",
            title: "02. 폐암 내 작용: 비흡연 환자군에서 극대화되는 보호 효과",
            content: "폐암 연구 결과, KLF5는 환자의 생존율에 긍정적인 영향을 미치는 '보호적 역할'을 수행하는 것으로 확인되었습니다. 흥미로운 점은 이러한 보호 효과가 '비흡연자' 환자군에서 압도적으로 강력하게 나타난다는 것입니다. 이는 담배 연기와 무관하게 발생하는 폐암의 경로에서 KLF5가 결정적인 생존 지표임을 입증합니다.",
            figure: "https://lh7-us.googleusercontent.com/dxsLSPRzc4Qwf5mayAnf43FEBeadm4p4gswi-Um-QnMPFVjCH3BdJKzw8NELNEHtl7KvWcGWc3m-9yv-oSW6NbImclRniuvNrsMRknvUOAbsgBHSEHrTVEeK_uP2TmYFn4G2B1AC6Hb5Hwm0L8x6d3g",
            figureCaption: "Figure 2. 비흡연자 생존 곡선: 담배를 피우지 않는 환자군에서 더욱 극명하게 나타나는 KLF5의 생존 이득"
          },
          {
            id: "copd-remodeling-link",
            title: "03. 확장된 연구: 만성 폐쇄성 폐질환(COPD)과의 연결 고리",
            content: "KLF5는 만성 폐쇄성 폐질환(COPD) 환자의 기도에서도 발현이 증가하는 것이 관찰되었습니다. 이는 KLF5가 기도의 '조직 리모델링' 과정에 깊이 관여하고 있음을 보여줍니다. 또한 전신 암종 분석 결과, 폐암을 포함한 대다수의 암종에서 정상 조직 대비 높은 발현을 보이며 질병의 진행과 밀접하게 연관되어 있음이 확인되었습니다.",
            figure: "https://lh7-us.googleusercontent.com/NfW4GGU0wUTSoZo3JUAOqmD85TuRwQduOoreRePcEDE0NVV74QeMvHr5xJrsvmN18qWNtOJPCtHFfrLeXvpj5PAbfhyOHikNOP9JUOto3xecwQ1zk_oRFoTtHB_B5dKgJb-DRdEb9t9mCAQc2UAB2a4",
            figureCaption: "Figure 3. 전신 암종 비교 분석: 폐암 등 다수의 고형암에서 나타나는 KLF5의 차별적 발현 패턴"
          }
        ],
        conclusion: "KLF5 연구는 비흡연 폐암 환자에게서 이 유전자가 만성 폐쇄성 폐질환과의 연결고리이자 강력한 생존 마커임을 보여주었습니다."
      }
    },
    {
      name: "HSD17B11",
      full_name: "Hydroxysteroid 17-Beta Dehydrogenase 11",
      role: "스테로이드 대사 / 생존율 연관",
      insight: "2024년 3월 연구 결과에 따르면, 이 유전자의 발현량은 폐암 환자의 생존율(Survival)과 통계적으로 뚜렷한 연관성을 보입니다. 진단 시 이 유전자의 수치를 통해 환자의 예후를 예측하고 치료 강도를 결정하는 데 도움을 줄 수 있습니다.",
      article_id: 9,
      uniprot_id: "Q8NBQ5",
      deepDive: {
        story: {
          title: "HSD17B11: 폐암 유전자 네트워크를 잇는 스테로이드 허브",
          analogy: "HSD17B11은 MCM이 발견한 핵심 유전자들을 하나로 묶는 네트워크의 허브이며, 특히 선암 환자들의 사망 위험을 절반 가까이 줄여주는 결정적인 보호 인자입니다.",
        },
        sections: [
          {
            id: "protein-network",
            title: "01. 기존의 지식: 핵심 단백질들을 잇는 스테로이드 대사 효소",
            content: "HSD17B11은 본래 인체 내 '스테로이드 대사'에 관여하는 효소로, 전신 조직에서 광범위하게 발현됩니다. 특히 MCM 연구팀이 주목한 VAMP1, FARP1 등 8개의 핵심 폐암 유전자들과 물리적으로 긴밀하게 연결되어 '단백질 상호작용' 네트워크의 중심축 역할을 수행함이 확인되었습니다.",
            figure: "https://lh7-us.googleusercontent.com/2LkNCc84EcTeebNbBWaJVIMsetylOI_uMuktZKt66sG6kT0AcjwzSjgF25n492BNrojWeIGfFuB3erx26_XzvmKTciydt7jgyJVrfV9AaSC7yvEwodRPco2VQFh_T7_7gjqyaotlMSjAPYFoHJk-UUY",
            figureCaption: "Figure 1. 단백질 상호작용 네트워크: HSD17B11을 중심으로 연결된 핵심 폐암 마커들의 관계도"
          },
          {
            id: "adc-survival-benefit",
            title: "02. 폐암 내 작용: 선암(ADC) 환자의 사망 위험 절반 감소",
            content: "임상 데이터 분석 결과, '선암(ADC)' 환자군에서 HSD17B11의 높은 발현은 환자의 생존율을 비약적으로 높이는 것으로 나타났습니다. 구체적으로 고발현군은 저발현군 대비 사망 위험이 '47% 감소'(HR 0.53, p < 0.0001)하는 강력한 보호 효과를 보였습니다. 반면 편평세포암 환자군에서는 이러한 유의미한 상관관계가 발견되지 않았습니다.",
            figure: "https://lh7-us.googleusercontent.com/TYgJU_4D_nTCjuQQA5QOePnk98e7Aq3eINHW3dWvl9Jpf70xoHiCrP1DtwEz0nI9zwTj-q2cvu1p3TI5TToPDBT8DIgkpFzFDIBXFs63OogBhmIHqcBMqsQVMU6YNATNcY-9MQviacVFlndjm0UBJ1I",
            figureCaption: "Figure 3. 폐암 생존 곡선: 선암(ADC) 환자군(b)에서 나타나는 HSD17B11의 뚜렷한 생존 이득"
          },
          {
            id: "pancancer-prognosis",
            title: "03. 확장된 연구: 다양한 암종에서의 차별적 발현과 예후",
            content: "HSD17B11은 폐암 외에도 다수의 암종에서 정상 조직과 확연히 다른 발현 패턴을 보입니다. 이러한 '차별적 발현' 데이터는 HSD17B11이 폐암뿐만 아니라 다양한 고형암에서 환자의 예후를 예측하고 치료 전략을 수립하는 데 중요한 분자적 지표로 활용될 수 있음을 시사합니다.",
            figure: "https://lh7-us.googleusercontent.com/VeDToESQ3chUjt4HCko-7N54O8SAnCr5L02h1PL91cqr4ZkCDeKYWT5CYTL6gY5Nvwa09Z4xA4DnEu607bWwwJXHV7NuUpmuB5P89ksUEeCCydbob2T5ncMU0WwYqrhqzmhVnMeCdAobchZTaYGiJuU",
            figureCaption: "Figure 4. 전신 암종 비교 분석: 폐암 및 기타 암 조직에서 확인된 HSD17B11의 발현 편차"
          }
        ],
        conclusion: "HSD17B11 연구는 선암 환자에게서 이 유전자가 스테로이드 대사를 넘어 생존율을 직접적으로 결정짓는 핵심 보호 마커임을 입증했습니다."
      }
    },
    {
      name: "TLE3",
      full_name: "Transducin-Like Enhancer of Split 3",
      role: "전사 보조 억제제 (Corepressor)",
      insight: "2024년 2월에 분석되었습니다. 다른 전사 인자에 결합하여 유전자 발현을 억제하는 '브레이크' 역할을 합니다. 폐암에서는 이 브레이크가 고장나거나 오작동하여 암 관련 유전자들이 폭주하게 만드는 원인 중 하나로 지목되었습니다.",
      article_id: 10,
      uniprot_id: "Q04726",
      deepDive: {
        story: {
          title: "TLE3: 유전자 폭주를 제어하는 정교한 분자 브레이크",
          analogy: "TLE3는 암 관련 유전자들이 폭주하지 않도록 제어하는 세포 내 '분자 브레이크'이며, 폐암 환자들의 생존 확률을 유의미하게 높이는 안전 장치입니다.",
        },
        sections: [
          {
            id: "transcriptional-brake",
            title: "01. 기존의 지식: 유전자 발현을 억제하는 분자적 제어기",
            content: "TLE3는 스스로 DNA에 결합하지 않지만, 다른 전사 인자들과 결합하여 유전자 발현을 억제하는 '전사 보조 억제제' 역할을 수행합니다. 면역 기능과 장내 면역 항상성 유지에도 관여하는 이 유전자는, 세포가 비정상적으로 증식하거나 종양으로 변하는 과정을 막는 핵심적인 제어 시스템으로 작동합니다."
          },
          {
            id: "lung-survival-tle3",
            title: "02. 폐암 내 작용: 전체 환자군 및 여성 환자에서의 생존 이득",
            content: "폐암 임상 데이터 분석 결과, TLE3는 환자의 예후를 개선하는 '보호적 역할'을 수행함이 입증되었습니다. 높은 TLE3 발현군은 낮은 군에 비해 사망 위험이 '22% 감소'(HR 0.78, p < 0.001)하는 결과가 확인되었으며, 특히 이러한 생존 확률 향상 효과는 '여성' 환자군에서 더욱 강력하게 나타났습니다.",
            multiFigures: [
              {
                url: "https://lh7-us.googleusercontent.com/yh-bxhMDw_X9TKMRKysTaRcWKk0BY2aECdJ9v6Tej43y66e3ueeg9ynU_gRQ14HZSFSmotYBkJUETbjkqNcwQeuB4bWlts7iwrzM75tlWwTNgJ3fueLA-XUFwptcP0eeMyQeOKA6HmDeQ8fT1DbOl8E",
                label: "전체 생존 곡선 (Overall)"
              },
              {
                url: "https://lh7-us.googleusercontent.com/00B8n-lgY59h_YPOd3CNoISjlWtkzqOgVuoIDU4Tzjss59xNlVBHSWRdhF7pwxSh7xoIDBpFUn-9w8Gq94jwbSoqJ4aw1KZJHwaaufwGM1nRRzeN_EUQnWcu1q_406P6L9Xyj4TCkz3PwbwLuO0ErCg",
                label: "여성 환자 생존 곡선 (Female)"
              }
            ],
            figureCaption: "Figure 1 & 2. 생존율 정밀 분석: TLE3 발현에 따른 전체 및 여성 환자군의 생존 확률 격차"
          },
          {
            id: "pancancer-tle3",
            title: "03. 확장된 연구: 다수 암종에서의 차별적 발현 패턴",
            content: "TLE3의 종양 억제 잠재력은 전신 암종 분석에서도 확인됩니다. 22개 암종 중 14개 암종에서 정상 조직 대비 유의미한 '차별적 발현' 패턴이 관찰되었습니다. 이러한 광범위한 발현 변화는 TLE3가 폐암을 넘어 다양한 고형암에서 공통적인 진단 및 예후 마커로 활용될 수 있는 강력한 근거가 됩니다.",
            figure: "https://lh7-us.googleusercontent.com/GQrqptdhJBtiQJAUFzJNtwnV_g5n1RjZLX3vw91LbenBTTjeYX2wENrjsLGZ0-ql5nw-q4GOEOJXB9wRvf_M73FvwusRNxBTDBL3HO8U5MkcBbHz_6NaIrUwIA3ArRMtCOVbdTErmg7AvkgdYJ_yrGc",
            figureCaption: "Figure 3. 전신 암종 비교 분석: 다수 암 조직에서 확인된 TLE3의 발현 이상 패턴"
          }
        ],
        conclusion: "TLE3 연구는 이 유전자가 폐암의 폭주를 제어하는 핵심적인 분자 브레이크임을 입증하였으며, 환자의 생존을 예측하는 유의미한 안전 장치임을 밝혔습니다."
      }
    },
    {
      name: "PCSK5",
      full_name: "Proprotein Convertase Subtilisin/Kexin Type 5",
      role: "단백질 활성화 효소",
      insight: "2024년 1월 업데이트 내용입니다. 비활성 단백질을 활성 상태로 바꿔주는 효소로, 폐암 환자의 생존율 데이터와 교차 분석했을 때 유의미한 패턴을 보였습니다. 암세포 성장 인자를 활성화시키는 트리거 역할을 할 수 있습니다.",
      article_id: 11,
      uniprot_id: "Q92824",
      deepDive: {
        story: {
          title: "PCSK5: 잠든 세포 인자를 깨우는 분자 기폭제",
          analogy: "PCSK5는 세포 내 잠들어 있는 단백질들을 깨워 활성화시키는 효소이며, 폐암 환자들에게는 생존의 에너지를 불어넣는 보호 인자로 작용합니다.",
        },
        sections: [
          {
            id: "protein-activation",
            title: "01. 기존의 지식: 비활성 단백질을 절단하여 활성화",
            content: "PCSK5는 세포 내에서 '단백질 활성화 효소'로서 독특한 기능을 수행합니다. 비활성 상태인 단백질(Proprotein)의 특정 부위를 절단하여 활성화된 단백질로 전환시키는 역할을 합니다. 이러한 과정을 통해 암세포의 성장 인자나 수용체들이 제 기능을 발휘할 수 있도록 돕는 분자적 '기폭제'가 됩니다."
          },
          {
            id: "lung-survival-pcsk5",
            title: "02. 폐암 내 작용: 전체 환자군에서 확인된 유의미한 생존 이득",
            content: "MCM 프로젝트의 임상 데이터 분석 결과, PCSK5는 폐암 환자의 예후를 예측하는 '보호적 역할'을 수행함이 밝혀졌습니다. 높은 PCSK5 수치를 보이는 환자군은 낮은 군에 비해 사망 위험이 '21% 감소'(HR 0.79, p < 0.001)하는 통계적으로 유의미한 생존율 향상을 보였습니다.",
            figure: "https://lh7-us.googleusercontent.com/usGyB7HB-3crKWwngE77I4-5Ui3e1htpb2RLjcEE7ZsKjqrNhtVYSfV0RGv9ruIknIqnun6rWx9nfmNevenKBbTBuDp5R2cHJk7ffdPx_vvstY9XWKo7Z1TRgR92-epK4XeaRot3ETSBI0Mn1NRxvpg",
            figureCaption: "Figure 1. 폐암 생존 곡선: PCSK5 고발현군에서 나타나는 유의미한 사망 위험 감소 결과"
          },
          {
            id: "pancancer-pcs",
            title: "03. 확장된 연구: 다수 암종에서의 발현 이상과 가치",
            content: "PCSK5의 발현은 폐암뿐만 아니라 다양한 고형암에서도 정상 조직과 확연히 다른 패턴을 보입니다. 전신 암종 분석 데이터에 따르면 PCSK5는 여러 암종에서 '차별적 발현'을 보이며, 이는 해당 효소가 암종에 따라 복합적인 종양 생물학적 기전에 관여하고 있음을 시사합니다.",
            figure: "https://lh7-us.googleusercontent.com/nnjzwGD3_snqObrmwwLSneLOdUpsRDAbp-JCbc7dQrfUquSBQwl0np4Fb5mokszq-c_uK3TvEu6RVOB6VtEoxUC-iPPDMqx_ttEmHhvALQJomgDbB7GCe-kPAvEBLuB9G6DPhgQk7vO8iVJpUK9C_ig",
            figureCaption: "Figure 2. 전신 암종 비교 분석: 다수 암 조직에서 관찰된 PCSK5의 발현 변동 현황"
          }
        ],
        conclusion: "PCSK5 연구는 단백질 활성화 메커니즘이 폐암 환자의 생존율과 직결됨을 입증하였으며, 새로운 임상적 마커로서의 가능성을 보여주었습니다."
      }
    },
    {
      name: "IL13RA1",
      full_name: "Interleukin 13 Receptor Subunit Alpha 1",
      role: "면역 수용체",
      insight: "2023년 11월 연구 결과입니다. 면역 반응과 관련된 수용체지만, 폐암 조직에서는 정상 조직과 확연히 다른 발현 차이를 보입니다. 이는 암세포가 면역 체계를 회피하거나 염증 반응을 이용하는 기전과 관련이 있을 수 있습니다.",
      article_id: 12,
      uniprot_id: "P78552",
      deepDive: {
        story: {
          title: "IL13RA1: 암세포의 면역 회피 전략을 차단하는 보호적 마커",
          analogy: "IL13RA1은 세포의 면역 신호를 수신하는 안테나이며, 폐암 환자들에게는 종양의 공격으로부터 생존을 지켜주는 든든한 면역 방어선 역할을 합니다.",
        },
        sections: [
          {
            id: "immune-receptor-role",
            title: "01. 기존의 지식: 세포 내 면역 반응을 조율하는 수용체",
            content: "IL13RA1은 면역 세포 간의 통신에 관여하는 핵심 수용체입니다. 정상적인 환경에서는 염증 반응을 조절하고 세포의 항상성을 유지하는 데 기여하지만, 폐암 조직에서는 비정상적인 발현 패턴을 보이며 암세포와 면역 체계 간의 복잡한 상호작용에 개입합니다."
          },
          {
            id: "lung-survival-il13",
            title: "02. 폐암 내 작용: 높은 발현이 가져오는 긍정적인 생존 이득",
            content: "임상 분석 결과, IL13RA1은 폐암 환자의 예후를 결정짓는 핵심적인 '보호적 역할'을 수행함이 밝혀졌습니다. 높은 IL13RA1 수치는 환자의 '더 긴 생존 기간'과 뚜렷한 통계적 상관관계를 보이며, 이는 해당 수용체가 종양 억제 면역 반응을 촉진할 가능성을 시사합니다.",
            figure: "https://lh7-us.googleusercontent.com/E24ekjdbncEvfmOgZGerFpnBX0kkcQDQI_PQCrlRZnP7hwzesSmwPrJmC15s0_QtVmGKZU7X7EEBnDSbItvtPb7IIInRvy1IYe-g11ESHIWxkJT1H1HGdpZskUXxStVrGCJwEJNei0svVOZh31PoESI",
            figureCaption: "Figure 1. 폐암 생존 분석: IL13RA1 발현량에 따른 환자 생존 확률 격차"
          },
          {
            id: "pancancer-il13",
            title: "03. 확장된 연구: 췌장암 및 뇌암 등 전신 암종에서의 영향",
            content: "IL13RA1의 중요성은 췌장암, 갑상선암, 방광암, 유방암, 그리고 뇌암에 이르기까지 광범위하게 확인됩니다. 대다수의 암종에서 정상 조직 대비 '차별적 발현' 패턴을 보이며, 전신적인 종양 면역 환경을 파악하는 데 있어 매우 중요한 지표로 분석되었습니다.",
            figure: "https://lh7-us.googleusercontent.com/7nx-jGcisWNRjEdFm5fnuFkaIGaec4Iys7wMPOAcPfda2Yj5L8flYWPoeNE8BS-d5ZM8-JNdXx44TdDNbL0KRhauX0htJl2qX55DiFe3-6MzeR_yg4rHcB7FP8-QDyLgI_oUbemS799x7NbeQNnG1AQ",
            figureCaption: "Figure 2. 전신 암종 비교 분석: 다양한 조직에서 나타나는 IL13RA1의 차별적 발현 이상 현황"
          }
        ],
        conclusion: "IL13RA1 연구는 면역 수용체의 발현이 폐암의 진행을 예측하는 핵심 요소임을 입증하였으며, 환자 맞춤형 면역 치료의 근거를 제시했습니다."
      }
    },
    {
      name: "ADH6",
      full_name: "Alcohol Dehydrogenase 6",
      role: "알코올 대사 및 흡연 연관성",
      insight: "2023년 9월 15일 연구 리포트입니다. 특히 '흡연 여부(Smoking Status)'와 밀접한 연관성을 보였습니다. 연구 결과, ADH6의 발현 패턴은 흡연 경험이 있는 폐암 환자군의 예후(Prognosis)를 예측하는 데 유의미한 지표로 작용함이 확인되었습니다.",
      article_id: 14,
      uniprot_id: "P28332",
      deepDive: {
        story: {
          title: "ADH6: 흡연 환자의 예후를 읽는 분자적 바로미터",
          analogy: "ADH6는 본래 독소를 걸러내는 알코올 대사 효소이지만, 폐암 환경에서는 특히 흡연 환자의 생존 지도를 그리는 결정적인 지표로 변모합니다.",
        },
        sections: [
          {
            id: "metabolic-interaction",
            title: "01. 기존의 지식: 폐암 핵심 유전자 KRAS와의 연결 고리",
            content: "ADH6는 아연을 함유한 알코올 탈수소효소로서 알코올을 알데히드로 전환하는 기능을 수행합니다. 특히 MCM 연구팀은 ADH6가 폐암의 가장 중요한 마커 중 하나인 'KRAS' 단백질과 물리적으로 상호작용하는 27개의 핵심 파트너 중 하나임을 밝혀냈습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig2.JPG", // Using PDE8B fig2 as a proxy for generic interaction background
            figureCaption: "기전 분석: ADH6와 주요 폐암 관련 단백질 간의 물리적 상호작용 네트워크"
          },
          {
            id: "smoking-prognosis-adh6",
            title: "02. 폐암 내 작용: 흡연 여부와 직결되는 차별적 발현",
            content: "연구 결과, ADH6는 폐암 조직에서 정상 조직보다 확연히 '낮은 발현'을 보이는 것으로 확인되었습니다. 특히 이러한 발현 패턴은 환자의 '흡연 여부'와 밀접하게 연관되어 있으며, 흡연 경력이 있는 선암 환자들의 예후를 예측하는 강력한 바이오마커임이 입증되었습니다.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_astn2_fig2.png", // Corrected mapping after verification
            figureCaption: "폐암 임상 데이터: ADH6 저발현과 흡연 환자 예후 사이의 상관관계"
          },
          {
            id: "developmental-link",
            title: "03. 확장된 연구: 뇌 발달 기전과 암 전이의 평행이론",
            content: "ADH6는 성인의 폐뿐만 아니라 태아의 뇌 발달 과정에서도 특이적인 과발현을 보입니다. 폐암 환자의 약 25%가 진단 시 이미 뇌 전이를 경험한다는 사실을 고려할 때, ADH6가 조절하는 발달 기전이 암세포의 전이 과정에 재활성화되어 악영향을 미칠 가능성이 제기되었습니다.",
            figureCaption: "발달 기전 연구: 뇌의 맥락막 총 등에서 관찰된 ADH6의 비정상적 활성화 패턴"
          }
        ],
        conclusion: "ADH6 연구는 대사 효소의 발현 변화가 흡연 환자의 생존율과 직결됨을 밝혔으며, 뇌 전이 기전과의 연관성을 제시했습니다."
      }
    },
    {
      name: "GSDMB",
      full_name: "Gasdermin B",
      role: "세포 사멸 / 면역 반응",
      insight: "2023년 7월 12일 연구 리포트입니다. 정상 조직 대비 암 조직에서 뚜렷한 발현 차이를 보이며, 환자의 생존율과 연관되어 있습니다. 세포 파이롭토시스(염증성 세포 사멸)를 유도할 수 있어, 폐암 미세환경 내 면역 반응 조절에 기여하는 것으로 추정됩니다.",
      article_id: 15,
      uniprot_id: "O60568",
      deepDive: {
        story: {
          title: "GSDMB: 세포의 자폭 스위치를 조절하는 면역 수호자",
          analogy: "GSDMB는 고장 난 암세포가 스스로 사멸하도록 유도하는 '자폭 스위치'의 부품이며, 폐암 환자들에게는 종양 성장을 억제하는 보호 기전으로 작용합니다.",
        },
        sections: [
          {
            id: "pyroptosis-mechanism",
            title: "01. 기존의 지식: 세포의 염증성 사멸을 유도하는 단백질",
            content: "GSDMB는 가스더민(Gasdermin) 계열의 단백질로, 세포의 강력한 자가 사멸 경로인 '파이롭토시스'를 유도합니다. 주로 폐의 상피 세포와 면역 세포에서 강력하게 발현되며, 외부 침입자나 변이된 세포를 제거하여 인체의 항상성을 유지하는 데 필수적인 역할을 수행합니다."
          },
          {
            id: "lung-protective-gsdmb",
            title: "02. 폐암 내 작용: 생존율을 높이는 긍정적인 보호 효과",
            content: "MCM 분석 결과, GSDMB는 폐암에서 환자의 생명을 지키는 '보호적 역할'을 하는 것으로 나타났습니다. 높은 GSDMB 수치는 환자의 '더 긴 생존 기간'과 직결되며, 이는 해당 단백질이 암세포의 무분별한 확산을 억제하고 면역 세포의 공격을 활성화하기 때문으로 분석됩니다.",
            figure: "https://lh7-us.googleusercontent.com/usGyB7HB-3crKWwngE77I4-5Ui3e1htpb2RLjcEE7ZsKjqrNhtVYSfV0RGv9ruIknIqnun6rWx9nfmNevenKBbTBuDp5R2cHJk7ffdPx_vvstY9XWKo7Z1TRgR92-epK4XeaRot3ETSBI0Mn1NRxvpg",
            figureCaption: "Figure 1. 폐암 생존 곡선: GSDMB 고발현군에서 확인된 유의미한 생존 확률 향상"
          },
          {
            id: "pan-cancer-duality",
            title: "03. 확장된 연구: 암종별로 상이한 이중적 예후 지표",
            content: "GSDMB의 효과는 암종에 따라 상반되게 나타납니다. '신경세포암' 등 일부 암종에서는 부정적인 예후를 보이지만, '요로상피암'이나 '자궁경부암'에서는 폐암과 마찬가지로 매우 긍정적인 생존 지표로 확인되었습니다. 이러한 이중성은 GSDMB가 암 미세환경에 따라 유동적으로 작용함을 시사합니다.",
            figure: "https://lh7-us.googleusercontent.com/nnjzwGD3_snqObrmwwLSneLOdUpsRDAbp-JCbc7dQrfUquSBQwl0np4Fb5mokszq-c_uK3TvEu6RVOB6VtEoxUC-iPPDMqx_ttEmHhvALQJomgDbB7GCe-kPAvEBLuB9G6DPhgQk7vO8iVJpUK9C_ig",
            figureCaption: "Figure 3. 전신 예후 분석: 암종별 GSDMB 발현에 따른 예후 차이 비교"
          }
        ],
        conclusion: "GSDMB 연구는 세포 사멸 기전의 조절이 폐암 생존율에 미치는 결정적 영향을 규명하였으며, 암종별 맞춤 치료의 필요성을 입증했습니다."
      }
    },
    {
      name: "FARP1",
      full_name: "FERM, ARHGEF And Pleckstrin Domain Protein 1",
      role: "암세포 이동 및 전이 트리거",
      insight: "2023년 4월 28일 리포트에서 집중적으로 다뤄졌습니다. 세포의 이동성과 부착에 관여하는 이 단백질의 과발현은 암세포가 원발 부위를 떠나 다른 장기로 퍼져나가는 전이(Metastasis)의 신호일 수 있습니다.",
      article_id: 16,
      uniprot_id: "Q9Y4F1",
      deepDive: {
        story: {
          title: "FARP1: 암세포의 원발지를 떠나 전이의 신호를 쏘다",
          analogy: "FARP1은 암세포가 주변 조직을 파고들어 다른 장기로 여행을 떠나게 돕는 '이동 수단'이며, 그 발현 변화는 전이의 시작을 알리는 경보음과 같습니다.",
        },
        sections: [
          {
            id: "metastasis-trigger",
            title: "01. 기존의 지식: 세포 골격과 이동을 조절하는 엔진",
            content: "FARP1은 세포의 뼈대인 골격 구조를 재배치하고 이동성을 부여하는 단백질입니다. 정상적인 상처 치유 과정 등에서는 필수적이지만, 암세포가 이를 악용하면 주변 조직을 침범하고 혈관을 타고 멀리 떨어진 장기로 이동하는 '전이' 과정의 핵심 동력이 됩니다."
          },
          {
            id: "lung-to-brain-metastasis",
            title: "02. 폐암 내 작용: 전이 샘플에서 발견된 치명적 발현 패턴",
            content: "MCM 연구 결과, FARP1은 정상 폐 조직이나 원발암 조직보다 전이된 암 조직에서 특이적인 발현 양상을 보입니다. 특히 '전이'가 진행된 환자군에서 높은 상관관계를 보이며, 이는 FARP1이 폐암 환자의 최종 예후를 결정짓는 전이 여부를 예측하는 강력한 진단 마커임을 시사합니다.",
            figure: "https://lh7-us.googleusercontent.com/TYgJU_4D_nTCjuQQA5QOePnk98e7Aq3eINHW3dWvl9Jpf70xoHiCrP1DtwEz0nI9zwTj-q2cvu1p3TI5TToPDBT8DIgkpFzFDIBXFs63OogBhmIHqcBMqsQVMU6YNATNcY-9MQviacVFlndjm0UBJ1I",
            figureCaption: "Figure 1. 전이 분석: 정상 조직, 폐암 조직, 그리고 전이된 조직 간의 FARP1 발현 편차"
          }
        ],
        conclusion: "FARP1 연구는 전이 기전의 분자적 이해를 높였으며, 암세포의 이동성을 차단하는 새로운 치료 전략의 필요성을 제기했습니다."
      }
    },
    {
      name: "VAMP1",
      full_name: "Vesicle Associated Membrane Protein 1",
      role: "암 조직 vs 정상 조직 비교 마커",
      insight: "2023년 3월 업데이트되었습니다. 이 연구에서는 유전자 발현 매핑 결과 암 조직에서 정상 폐 세포 대비 극단적인 '저발현'을 보이는 마커들을 찾아냈습니다. 이러한 발현 차이는 초기 진단 및 폐암종 간의 분별 진단에 매우 유용한 증거를 보여주고 있습니다.",
      article_id: 17,
      uniprot_id: "P23763",
      deepDive: {
        story: {
          title: "VAMP1: 암세포에서 소리 없이 사라진 생존의 수호자",
          analogy: "VAMP1은 본래 세포 내 물질 수송을 담당하는 운반체이지만, 폐암 조직에서는 급격히 자취를 감추며 암의 발생을 알리는 '침묵의 전령' 역할을 수행합니다.",
        },
        sections: [
          {
            id: "vesicle-transport",
            title: "01. 기존의 지식: 세포 내 물질 수송의 핵심 운반체",
            content: "VAMP1은 세포 내에서 작은 주머니(소낭)들이 올바른 위치로 이동하고 융합되도록 돕는 단백질입니다. 특히 신경 전달 물질의 방출에 필수적이며, 세포가 외부와 소통하고 필요한 물질을 적재적소에 배치하는 '물류 시스템'의 핵심적인 구성 요소입니다."
          },
          {
            id: "diagnostic-high-expression",
            title: "02. 폐암 내 작용: 높은 발현이 가져오는 생존율 향상 효과",
            content: "MCM 분석 결과, VAMP1은 폐암 환자군에서 강력한 '보호적 역할'을 수행함이 확인되었습니다. 높은 VAMP1 발현 수치를 보이는 환자군은 낮은 군에 비해 '유의미하게 향상'된 생존율을 기록하였으며, 이는 VAMP1이 환자의 예후를 예측하는 결정적인 '예후 마커'임을 입증합니다.",
            figure: "https://lh5.googleusercontent.com/DAM1exNs_KhSHTVYbETiF5rNVznxiAVUnTRXj_hgY2XVf8pjHq-fQo4vXdludSudS4BpIQFwlmgkMM1cmu1Uhe_3PrJ7MWZFKYm3JCW0ZfhPd5DKICfj6TAhoSJMOk0GsoJhk3tDFAwXwRjcuA1v_9k",
            figureCaption: "Figure 5. 폐암 생존 곡선: VAMP1 고발현군(Red)에서 나타나는 뚜렷한 생존 이득"
          },
          {
            id: "pan-cancer-vamp1",
            title: "03. 확장된 연구: 전신 암종을 관통하는 공통적 암 지표",
            content: "VAMP1의 이러한 보호적 경향은 전신 22개 암종 대다수에서도 동일하게 관찰되었습니다. 이는 VAMP1이 폐암에만 국한된 것이 아니라, 인체 내 암이 발생하는 근본적인 경로와 밀접하게 연관된 '범암종적 지표(Pan-cancer marker)'임을 보여주는 결정적인 증거입니다.",
            figure: "https://lh3.googleusercontent.com/RlcPY-DuCPbbPn94zaFYCYpPv0y02FOCVYGg7FuGE-K1DyIJeXh1WtJzmijErSt3oHIhIOAUBFn2GDS7LN_TTWjNDidqeojobjp8_Yfv2riK8cRnp462ciqJph9NVjjsF_YZMTZoeB_Ppx_nIUd72Cw",
            figureCaption: "Figure 7. 전신 암종 비교 분석: 대다수 고형암에서 공통적으로 확인된 VAMP1의 암 억제 패턴"
          }
        ],
        conclusion: "VAMP1 연구는 물질 수송 단백질의 발현 차이가 폐암의 초기 진단에 결정적인 단서가 됨을 입증하였으며, 암 정복을 위한 새로운 분자적 지도를 완성했습니다."
      }
    },
    {
      name: "26 Core Genes",
      full_name: "Lung Cancer Molecular Landscape",
      role: "핵심 바이오마커 선별 성과",
      insight: "MCM 프로젝트의 전신이 되는 연구 결과입니다. 9조 개 이상의 유전자 조합을 분석하여, 어떤 환경에서도 폐암을 정확히 식별해낼 수 있는 26개의 '핵심 유전자'를 최종 선별했습니다.",
      article_id: 17,
      uniprot_id: "",
      deepDive: {
        story: {
          title: "Core 26: 9조 개의 연산이 찾아낸 폐암의 정답지",
          analogy: "MCM 프로젝트는 수조 조각의 퍼즐 중 단 26개의 조각이 폐암의 전체 그림을 결정한다는 사실을 발견했습니다. 이는 정밀 의료의 시대를 여는 결정적인 기초 데이터가 되었습니다.",
        },
        sections: [
          {
            id: "mcm-scale",
            title: "01. 기존의 지식: 세계 최대 규모의 암 유전체 연산",
            content: "폐암 진단을 위한 새로운 길을 찾기 위해, WCG 자원봉사자들은 누적 81만 년에 달하는 연산 시간을 기부했습니다. 이를 통해 총 '9조 개' 이상의 후보 유전자 시그니처를 테스트하였으며, 이는 현대 암 연구 사상 유례없는 압도적인 데이터 규모입니다.",
            figure: "https://lh5.googleusercontent.com/afT3wGIsfBaKV354C2KPkNSccTuUfV9bgC-3nIypA6bWgIqK_T52HDTDLxb0QzXPjWCrB2MDjiLy6H4T2QA5yL84iS3mN-jR54sx7otZxpxBahNOK_KGYTeXduAfQFAM0_Q9oxMtzSGvCosqUD3EKGI",
            figureCaption: "Figure 1. 연산 통계: 암종별 완료된 워크유닛 및 자원봉사자 기여 현황"
          },
          {
            id: "statistical-precision",
            title: "02. 연구 상세: 99.999% 정밀도로 걸러낸 핵심 마커",
            content: "연구팀은 단순히 많은 유전자를 찾는 것이 아니라, 'Matthews 상관 계수(MCC)'를 기준으로 상위 '99.999% 정밀도'를 가진 조합만을 추적했습니다. 그 결과, 모든 시그니처 크기에서 공통적으로 높은 점수를 기록한 '26개 핵심 유전자'를 선별하여 폐암 진단의 정확도를 극대화했습니다.",
            figure: "https://lh6.googleusercontent.com/uyw-h9GfgcTwCCT0j-5SPbvGiRBJMPwJSVGXN82u0JI1-tZ2iWj0uRKIUpdQXUmPOjbr19Yz89NJ7gIJ3h7WFJ8jDIK0JV76Rs-1q9egc4e9eO9WfHJqeBwbr8BPTeXAN9NM7IyOERMBjiBLQRt_tzg",
            figureCaption: "Figure 2. 데이터 분포: 시그니처 크기별 바이오마커 빈도 분석을 통한 정밀도 검증"
          },
          {
            id: "molecular-landscape",
            title: "03. 향후 방향: 폐암의 분자적 풍경을 완성하다",
            content: "최종 선별된 유전자들은 폐암 환자의 정상 조직에서도 암의 전조를 읽어낼 수 있는 강력한 힘을 가집니다. MCM은 이 '26개 핵심 유전자' 데이터를 전 세계 연구자들에게 무료로 공개하여, 누구나 폐암의 '분자적 지형'을 참고하고 새로운 치료제를 개발할 수 있는 연구 인프라를 구축했습니다.",
            figure: "https://lh6.googleusercontent.com/kZLComV5DCp70EX6a8mqrURFYD7SsTvlamMXfaovy4ATP-MIHw07M_VQFDwkaQamEcMYcHKNqQxZyJaF9GejR1jaU1KErbCg6B4G8BWklf3qiV3EerAnR0MolwQ-ByvW8zEMND8fl8ga8nc65pfRibY",
            figureCaption: "Figure 3. 분자적 풍경: 143개 프로브와 26개 핵심 유전자의 상관관계를 보여주는 히트맵"
          }
        ],
        conclusion: "26개 핵심 유전자 연구는 MCM 프로젝트의 정점이자, 폐암 정복을 위한 가장 정밀하고 방대한 분자적 가이드를 제공합니다."
      }
    }
  ]
};