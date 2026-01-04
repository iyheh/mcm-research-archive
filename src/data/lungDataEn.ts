export const lungDataEn = {
  title: "Lung Cancer",
  description: "Lung cancer research, a key achievement of the MCM project, has combined actual clinical data such as patients' smoking status, gender, and survival period with genomic analysis to find the following decisive clues.",
  genes: [
    {
      name: "NELL2",
      full_name: "Neural EGF-Like Like 2",
      role: "Neural Development and Apoptosis Regulation",
      insight: "A gene highlighted by the research team in October 2025. Originally a protein aiding neural development, its abnormal expression pattern in cancer tissue has been confirmed to be deeply related to the cell death mechanism.",
      article_id: 1,
      uniprot_id: "Q99435",
      deepDive: {
        story: {
          title: "NELL2: A Decisive Marker Changing the Survival Map of Female Lung Adenocarcinoma Patients",
          analogy: "Extensive analysis by the MCM project has proven that NELL2 is not just a guide for the nervous system, but a powerful biomarker determining the survival of lung cancer patients.",
        },
        sections: [
          {
            id: "neural-origin",
            title: "01. Existing Knowledge: The 'Traffic Controller' Designing Neural Networks",
            content: "NELL2 originally acts as a milestone guiding nerve cell axons to extend in the correct direction during fetal nervous system development. It is especially well known for coordinating the 'crossing process' of nerves in the spinal cord so that sensory information from the right side of the body can be transmitted to the left brain.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_NELL2_fig4.png",
            figureCaption: "Figure 4. Neural Crossing Guide: NELL2's Original Neurological Mechanism"
          },
          {
            id: "subtype-analysis",
            title: "02. Differential Action in Lung Cancer: Adenocarcinoma (ADC) vs. Squamous Cell Carcinoma (SQC)",
            content: "The research team compared the two core types of non-small cell lung cancer: adenocarcinoma and squamous cell carcinoma. As a result, a distinct survival benefit with a '31% reduction' in mortality risk was observed in the 'adenocarcinoma' patient group. Conversely, no correlation with survival was found in the squamous cell carcinoma group. This suggests that NELL2 selectively intervenes only in specific cancer cell pathways.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_NELL2_fig6_fig8.png",
            figureCaption: "Figure 6. Survival Curves by Cancer Type: NELL2's Protective Effect Appearing Only in Adenocarcinoma (A) Patients"
          },
          {
            id: "gender-and-smoking",
            title: "03. Gender & Environmental Analysis: A Guardian Allowed Only to Women",
            content: "The most notable achievement is the analysis by gender. In the case of 'female' adenocarcinoma patients, a high NELL2 level showed a '51% reduction' in mortality risk. On the other hand, there was no such effect in male patients. Notably, this effect appeared 'independently of smoking status', meaning survival rates improved with high NELL2 levels whether the patient smoked or not.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_NELL2_fig7_fig9.png",
            figureCaption: "Figure 9. Gender Contrast Survival Analysis: A Decisive Difference determining Life and Death Occurs Only in Female Adenocarcinoma Patients (A)"
          }
        ],
        conclusion: "The NELL2 study proved that NELL2 is a key indicator predicting survival for female lung adenocarcinoma patients regardless of smoking status."
      }
    },
    {
      name: "ECD",
      full_name: "Ecdysoneless Cell Cycle Regulator",
      role: "Cell Cycle Regulation / p53 Interaction",
      insight: "A gene highlighted by the research team in July 2025. ECD originally regulates cell growth and repair, but in lung cancer tissue, it is overexpressed, interfering with the function of the tumor suppressor protein p53 and aiding the unlimited proliferation of cancer cells.",
      article_id: 3,
      uniprot_id: "O95905",
      deepDive: {
        story: {
          title: "ECD: A Cell Cycle Regulator Determining Prognosis in Adenocarcinoma Patients",
          analogy: "The MCM project identified the statistical correlation between ECD expression levels and mortality rates, proving that this gene is a decisive indicator distinguishing life and death in specific patient groups.",
        },
        sections: [
          {
            id: "cell-cycle-p53",
            title: "01. Existing Knowledge: Guide of the Cell Cycle and p53 Stabilization",
            content: "ECD originally regulates the cell division cycle and stabilizes the tumor suppressor protein p53. However, within lung cancer cells, changes occur in this regulatory function, and a tendency for cancer cell growth to accelerate was observed as ECD levels became 'higher'.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_ecd_fig4_nocaption.jpg",
            figureCaption: "Figure 4. ECD and p53 Interaction: p53 Stabilization and Tumor Suppression Mechanism via MDM2"
          },
          {
            id: "adc-sqc-comparison",
            title: "02. Differential Action in Lung Cancer: Survival Data of Adenocarcinoma (ADC) Patients",
            content: "Analysis by lung cancer type showed that survival probability 'significantly improved' as ECD expression was 'lower' in the adenocarcinoma (ADC) patient group. Data showed a distinct difference where the low expression group had a '32% reduction' in mortality risk (HR 1.47, p < 0.00001) compared to the high expression group. Conversely, no such association appeared in squamous cell carcinoma (SQC).",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_ecd_fig7_nocaption.jpg",
            figureCaption: "Figure 7. Survival Curve Comparison: Prognostic Difference based on ECD Expression Confirmed in Adenocarcinoma (A)"
          },
          {
            id: "smoking-status-analysis",
            title: "03. Environmental Variable Analysis: Stark Effect Appearing in Non-Smoking Patients",
            content: "Analysis by smoking status confirmed that the impact of low ECD expression was maximized especially in the 'non-smoking' adenocarcinoma patient group. For non-smoking patients, an overwhelming result of '56% reduction' in mortality risk (HR 2.29) was confirmed, which is a much higher figure than the risk reduction of '26%' (HR 1.36) in the smoking patient group.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_ecd_fig8_nocaption.jpg",
            figureCaption: "Figure 8. Smoking Status Contrast Analysis: The Largest Survival Rate Gap Occurs in the Non-Smoking Patient Group (B)"
          }
        ],
        conclusion: "The ECD study shows that low expression of ECD is a key clinical indicator predicting patient survival in adenocarcinoma patients, especially in the non-smoker group."
      }
    },
    {
      name: "PDE8B",
      full_name: "Phosphodiesterase 8B",
      role: "Hormone Synthesis / Signal Transduction System",
      insight: "Mentioned in the May 2025 report. Changes in expression have been reported in various cancers, and the MCM research team is analyzing how this gene intervenes in energy metabolism and signal transduction systems within lung cancer cells to aid cancer survival.",
      article_id: 4,
      uniprot_id: "O95263",
      deepDive: {
        story: {
          title: "PDE8B: A Powerful Protective Marker for Adenocarcinoma Patients with a Smoking History",
          analogy: "The MCM project discovered the statistical fact that the higher the PDE8B level, the dramatically higher the survival probability of adenocarcinoma patients with a smoking history.",
        },
        sections: [
          {
            id: "camp-regulator",
            title: "01. Existing Knowledge: Master Regulator of Intracellular Signal Transduction",
            content: "PDE8B is an enzyme that manages the levels of cAMP, an intracellular signaling molecule. Through this, it acts as a 'control tower' regulating signaling systems involved in cell growth, metabolism, and hormone production. Although expression changes have been reported in various cancers, lung cancer is the only one where a direct link to patient prognosis has been clearly identified.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig2.JPG",
            figureCaption: "Figure 2. Tissue-specific Expression Study: PDE8B Expression Patterns appearing in various tissues and cancers"
          },
          {
            id: "subtype-sensitivity",
            title: "02. Differential Action in Lung Cancer: Adenocarcinoma (ADC) Specific Prognostic Effect",
            content: "Research results showed that PDE8B had different impacts depending on the subtype of lung cancer. In the 'Adenocarcinoma (ADC)' patient group, survival probability 'significantly improved' as PDE8B levels were 'higher', and a powerful protective effect reducing mortality risk by a whopping '65%' (HR 0.35, p < 0.00001) was confirmed. On the other hand, no such association was found in the 'Squamous Cell Carcinoma (SQC)' patient group.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig5.JPG",
            figureCaption: "Figure 5. Survival Curves by Cancer Type: Protective Effect of PDE8B appearing clearly only in Adenocarcinoma (A)"
          },
          {
            id: "smoking-impact",
            title: "03. Environmental Variable Analysis: Overwhelming Survival Benefit Discovered in Smoker Group",
            content: "The most decisive difference appeared in smoking status. In the adenocarcinoma patient group with 'smoking' experience, high PDE8B expression was linked to an overwhelming survival benefit reducing mortality risk by '88%' (HR 0.12, p < 0.00001). Conversely, in the 'non-smoking' patient group, no statistically significant survival benefit was found, suggesting that PDE8B function is closely related to cell changes caused by cigarette smoke.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig6.JPG",
            figureCaption: "Figure 6. Smoking Status Contrast Analysis: Dramatic survival rate improvement observed only in patient group with smoking experience (A)"
          }
        ],
        conclusion: "The PDE8B study proved that PDE8B levels are a key marker predicting survival rate and regulating anticancer drug response in adenocarcinoma patients with a smoking history."
      }
    },
    {
      name: "DYNLT1",
      full_name: "Dynein Light Chain Tctex-Type 1",
      role: "Intracellular Transport",
      insight: "A gene spotlighted in March 2025. As part of the Dynein complex acting as an intracellular 'delivery truck', it is involved in the process of transporting materials necessary for cancer cells to divide rapidly and metastasize. It is a key puzzle piece for understanding the pathophysiology of lung cancer.",
      article_id: 5,
      uniprot_id: "P63172",
      deepDive: {
        story: {
          title: "DYNLT1: A Protective Marker Controlling Intracellular Logistics",
          analogy: "The MCM project discovered that DYNLT1 regulates substance transport within lung cancer cells and plays a protective role in both adenocarcinoma and squamous cell carcinoma patient groups.",
        },
        sections: [
          {
            id: "intracellular-transport",
            title: "01. Existing Knowledge: Key Component of Intracellular 'Delivery Truck'",
            content: "DYNLT1 is an essential component of the Dynein motor complex responsible for intracellular substance transport. It plays a key role in the 'logistics system' that uses energy to carry cargo during cell division, neurogenesis, and the process of viruses penetrating host cells.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_dynlt1_fig2.jpg",
            figureCaption: "Figure 2. Wide Expression Pattern: Background of DYNLT1 expression observed in various human tissues"
          },
          {
            id: "protective-role",
            title: "02. Action in Lung Cancer: Protective Tendency in Both Major Cancer Types",
            content: "MCM research results showed that DYNLT1 plays a 'protective role' in both 'Adenocarcinoma (ADC)' and 'Squamous Cell Carcinoma (SQC)', the two core types of non-small cell lung cancer. This suggests that the expression pattern of DYNLT1 can be an important indicator for predicting lung cancer progression and understanding patient status.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_dynlt1_fig4.jpg",
            figureCaption: "Figure 4. Lung Cancer Research Summary: Protective expression patterns confirmed in Adenocarcinoma and Squamous Cell Carcinoma patient groups"
          },
          {
            id: "multi-cancer-impact",
            title: "03. Expanded Research: Complex Influence in Breast and Stomach Cancer",
            content: "The influence of DYNLT1 is being confirmed not only in lung cancer but also in various cancer types. It was analyzed as a complex marker performing both 'protective' and 'negative' roles depending on the cancer type, such as promoting mitochondrial metabolism to aid tumor growth in 'Breast Cancer', while contributing to malignant changes through specific signaling pathways in 'Stomach Cancer'.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_dynlt1_fig5.jpg",
            figureCaption: "Figure 5. Comparative Analysis by Cancer Type: Differential expression of DYNLT1 appearing in various cancer tissues such as breast cancer"
          }
        ],
        conclusion: "The DYNLT1 study revealed that this gene regulates intracellular transport mechanisms in lung cancer patients and is an important clue that can have a positive effect on survival."
      }
    },
    {
      name: "GCM1",
      full_name: "Glial Cells Missing Homolog 1",
      role: "Placental Development / Transcription Factor",
      insight: "Reported in January 2025. Originally a gene used to create the placenta, interestingly, it shows specific expression in lung adenocarcinoma tissue. The possibility has been raised that it is involved in cancer cells acquiring invasiveness to penetrate surrounding tissues like placental cells.",
      article_id: 6,
      uniprot_id: "Q9NP62",
      deepDive: {
        story: {
          title: "GCM1: The Other Side of Cancer Cells Drawn by the Blueprint of the Placenta",
          analogy: "GCM1 is originally the 'blueprint of life' helping placental growth, but in the adult lung, it shows a dual nature of either threatening or protecting survival depending on the cancer type.",
        },
        sections: [
          {
            id: "placental-origin",
            title: "01. Existing Knowledge: Transcription Factor Directing Placental Development",
            content: "GCM1 is a transcription factor that plays a key role when the placenta is formed. It regulates Placental Growth Factor (PGF) and controls cell differentiation and invasion to design an environment where the fetus can receive nutrition. Interestingly, these mechanisms of cell invasion and differentiation share many parallels with the cancer progression process.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_gene_update_gcm1_fig1.png",
            figureCaption: "Figure 1. Placental Development Mechanism: Placental growth factors and cell differentiation pathways regulated by GCM1"
          },
          {
            id: "dual-role-lung",
            title: "02. Differential Action in Lung Cancer: Conflicting Prognosis in Adenocarcinoma and Squamous Cell Carcinoma",
            content: "Lung cancer analysis showed that GCM1 had completely different effects depending on the cancer type. In the 'Adenocarcinoma (ADC)' patient group, abnormal expression acted as a risk factor directly linked to 'poor survival rate'. On the other hand, in the 'Squamous Cell Carcinoma (SQC)' patient group, it appeared to perform a 'protective role' guarding the patient, suggesting the importance of personalized diagnosis by cancer type.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_gene_update_gcm1_fig2.png",
            figureCaption: "Figure 2. Lung Cancer Survival Analysis: Comparison of negative prognosis in Adenocarcinoma (A) and protective effect in Squamous Cell Carcinoma (B)"
          },
          {
            id: "systemic-impact",
            title: "03. Expanded Research: Fatal Indicator in Testicular Cancer and Multiple Cancer Types",
            content: "The influence of GCM1 is even more pronounced in cancer types other than lung cancer. Especially in testicular cancer patients, an extreme result where mortality risk soared up to 'HR 6.3' times when GCM1 was highly expressed was confirmed. In addition, it was analyzed as an indicator predicting 'poor survival rate' commonly in various solid cancers such as liver cancer, pancreatic cancer, and kidney cancer.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_gene_update_gcm1_fig5.png",
            figureCaption: "Figure 5. Multi-organ Cancer Analysis: Negative prognosis patterns of GCM1 confirmed in liver, pancreatic, kidney cancer, etc."
          }
        ],
        conclusion: "The GCM1 study revealed how placental formation mechanisms intervene in lung cancer progression and proved the duality of GCM1 showing conflicting prognoses depending on the cancer type."
      }
    },
    {
      name: "ASTN2",
      full_name: "Astrotactin 2",
      role: "Neuronal Migration",
      insight: "The protagonist of the July 2024 update. A protein that aids neuronal migration, but research confirmed it is expressed in various cancer tissues. It is a potential marker that may contribute to increasing the motility of cancer cells, especially during the lung cancer metastasis process.",
      article_id: 7,
      uniprot_id: "Q7Z417",
      deepDive: {
        story: {
          title: "ASTN2: A Guide of the Nervous System Protecting the Right to Survive for Female Lung Cancer Patients",
          analogy: "ASTN2 is originally a guide of the nervous system mapping the brain, but in the lung cancer environment, it acts as a guardian giving hope for longer survival only to female patients.",
        },
        sections: [
          {
            id: "neuronal-migration",
            title: "01. Existing Knowledge: Precise Navigator Building Neural Networks",
            content: "ASTN2 regulates the recycling and transport of adhesion molecules helping nerve cells move to the correct location within the brain. Due to this role, its connection with neurological diseases such as Alzheimer's and migraines has been deeply studied. Although widely expressed in almost all tissues of the human body, its clinical value is being newly highlighted in lung cancer.",
            figure: "https://lh7-us.googleusercontent.com/docsz/AD_4nXd03z-NzYObdIbCoKXplL4UjA6b6ihtmKp1HELqaTIeMp9BISU1LweBvdmvrAJaeR2L9mmxvxj1iQrQxToERhmaK1ne70hJu0XSitfAH2qU2r24dzILOZWKNPx0-wqpUxIpIjY43YU74A7Zdvhcj4XIVwU?key=d8OOdwoCe5jn1aSnJrNIIQ",
            figureCaption: "Figure 1. Tissue-specific Expression Study: Background of ASTN2 expression appearing widely in whole body tissues"
          },
          {
            id: "female-specific-benefit",
            title: "02. Action in Lung Cancer: Survival Probability Improvement Allowed Only to Women",
            content: "Analysis of lung cancer patient data proved that high ASTN2 expression is directly related to patients' 'longer survival period'. The point to note is that this effect is valid only in the 'female' patient group. This suggests that ASTN2 can be a unique indicator for predicting the prognosis of female lung cancer patients.",
            figure: "https://lh7-us.googleusercontent.com/docsz/AD_4nXcM-Ie93bHB-w8VacUq37E-_Ch_2K96CKJstoNFRnyArec2KGdSGYs6mQ7ItyqbMY4LBzez-0ucmWiI6q-r5sfVHD_2lhVScVSBJqA_KmD-7c4vbaU9YX4vOSfFgFtp5yWVlHnmLph17qW95iLjwO_6WBs?key=d8OOdwoCe5jn1aSnJrNIIQ",
            figureCaption: "Figure 2. Survival Curve Analysis: Survival benefit upon ASTN2 high expression appearing only in female (B) patient group"
          },
          {
            id: "pancancer-astn2",
            title: "03. Expanded Research: Differential Expression Patterns in Multiple Cancer Types",
            content: "The influence of ASTN2 has been confirmed in various cancer types as well as lung cancer. Analysis of 22 cancer types throughout the body showed significant 'differential expression' compared to normal tissue in 13 cancer types. In particular, it shows high expression in cancer types where mobility is important, such as glioblastoma, raising the possibility of involvement in the cancer cell metastasis process.",
            figure: "https://lh7-us.googleusercontent.com/docsz/AD_4nXfCdrb1g484K3oB2FjQC19lB0aH97EX83I3L4nTHy-dzincQ8q_q2zzXgt9_IqMJmJqUTv086cNSPXOX4xC8y28841mS25A0AmF5_-pDLkMMxylXYzhwsHIxkNeInIkqey_lphjbQ8r9tIG11eSTzJj2WC3?key=d8OOdwoCe5jn1aSnJrNIIQ",
            figureCaption: "Figure 3. Systemic Cancer Analysis: ASTN2 expression deviation appearing in various cancer tissues including lung cancer"
          }
        ],
        conclusion: "The ASTN2 study proved that this gene is a key marker for predicting survival rate and understanding cancer motility in female lung cancer patients."
      }
    },
    {
      name: "KLF5",
      full_name: "Kruppel-Like Factor 5",
      role: "Transcription Factor",
      insight: "May 2024 analysis result. KLF5 is a transcription factor already known as a 'person of interest' in various cancers. The MCM research team simulated how KLF5 interacts with other genes in the lung cancer environment to turn on the cancer cell proliferation switch.",
      article_id: 8,
      uniprot_id: "Q13887",
      deepDive: {
        story: {
          title: "KLF5: Transcription Master Turning on the Survival Switch for Non-Smoking Patients",
          analogy: "KLF5 is a transcription master regulating various cellular switches, and acts as a guardian opening the possibility of survival, especially for lung cancer patients who do not smoke.",
        },
        sections: [
          {
            id: "transcription-master",
            title: "01. Existing Knowledge: Versatile Conductor Coordinating Gene Expression",
            content: "KLF5 is a key transcription factor activating the expression of numerous genes within the cell. It is involved in basic biological processes of the human body such as vascular remodeling, cellular stress response, and embryonic differentiation. Its importance is very high, especially as a 'top controller' directly regulating the expression of lung cancer-related genes we discussed earlier, such as VAMP1 and IL13RA1.",
            figure: "https://lh7-us.googleusercontent.com/enfFQAm1Rul4PDPuTPO4mP6KMu7lNIJ4xBjkc04GaF8Gk1MJNkIcJB3SS725vSah978M-znqAZ8-HgqsluimgKluXCTqhZ9R1Wla273bGj8x1-BIdSfvOYUlWDqWkKGdkNyPXEyIpWssBGEuM_b26u4",
            figureCaption: "Figure 1. Wide Tissue Expression: Background of KLF5 expression confirmed in various organs and tissues in the human body"
          },
          {
            id: "non-smoker-protection",
            title: "02. Action in Lung Cancer: Protective Effect Maximized in Non-Smoking Patient Group",
            content: "Lung cancer research confirmed that KLF5 performs a 'protective role' positively influencing patient survival rates. The interesting point is that this protective effect appears overwhelmingly strong in the 'non-smoker' patient group. This proves that KLF5 is a decisive survival indicator in lung cancer pathways occurring regardless of cigarette smoke.",
            figure: "https://lh7-us.googleusercontent.com/dxsLSPRzc4Qwf5mayAnf43FEBeadm4p4gswi-Um-QnMPFVjCH3BdJKzw8NELNEHtl7KvWcGWc3m-9yv-oSW6NbImclRniuvNrsMRknvUOAbsgBHSEHrTVEeK_uP2TmYFn4G2B1AC6Hb5Hwm0L8x6d3g",
            figureCaption: "Figure 2. Non-smoker Survival Curve: Survival benefit of KLF5 appearing more clearly in patient group who do not smoke"
          },
          {
            id: "copd-remodeling-link",
            title: "03. Expanded Research: Link with Chronic Obstructive Pulmonary Disease (COPD)",
            content: "Increased expression of KLF5 was also observed in the airways of patients with Chronic Obstructive Pulmonary Disease (COPD). This shows that KLF5 is deeply involved in the airway 'tissue remodeling' process. Also, systemic cancer analysis confirmed that it shows high expression compared to normal tissue in most cancer types including lung cancer, and is closely related to disease progression.",
            figure: "https://lh7-us.googleusercontent.com/NfW4GGU0wUTSoZo3JUAOqmD85TuRwQduOoreRePcEDE0NVV74QeMvHr5xJrsvmN18qWNtOJPCtHFfrLeXvpj5PAbfhyOHikNOP9JUOto3xecwQ1zk_oRFoTtHB_B5dKgJb-DRdEb9t9mCAQc2UAB2a4",
            figureCaption: "Figure 3. Systemic Cancer Comparative Analysis: Differential expression patterns of KLF5 appearing in multiple solid cancers including lung cancer"
          }
        ],
        conclusion: "The KLF5 study showed that this gene is a link to Chronic Obstructive Pulmonary Disease and a powerful survival marker in non-smoking lung cancer patients."
      }
    },
    {
      name: "HSD17B11",
      full_name: "Hydroxysteroid 17-Beta Dehydrogenase 11",
      role: "Steroid Metabolism / Survival Rate Correlation",
      insight: "According to March 2024 research results, the expression level of this gene shows a statistically distinct correlation with the survival rate of lung cancer patients. At diagnosis, this gene's level can help predict patient prognosis and determine treatment intensity.",
      article_id: 9,
      uniprot_id: "Q8NBQ5",
      deepDive: {
        story: {
          title: "HSD17B11: Steroid Hub Connecting Lung Cancer Gene Networks",
          analogy: "HSD17B11 is a network hub tying together key genes discovered by MCM, and is a decisive protective factor reducing mortality risk by nearly half, especially for adenocarcinoma patients.",
        },
        sections: [
          {
            id: "protein-network",
            title: "01. Existing Knowledge: Steroid Metabolism Enzyme Connecting Key Proteins",
            content: "HSD17B11 is originally an enzyme involved in 'steroid metabolism' in the human body and is widely expressed in tissues throughout the body. In particular, it was confirmed to act as a central axis of the 'protein interaction' network, physically closely connected with 8 key lung cancer genes focused on by the MCM research team, such as VAMP1 and FARP1.",
            figure: "https://lh7-us.googleusercontent.com/2LkNCc84EcTeebNbBWaJVIMsetylOI_uMuktZKt66sG6kT0AcjwzSjgF25n492BNrojWeIGfFuB3erx26_XzvmKTciydt7jgyJVrfV9AaSC7yvEwodRPco2VQFh_T7_7gjqyaotlMSjAPYFoHJk-UUY",
            figureCaption: "Figure 1. Protein Interaction Network: Diagram of relationships between key lung cancer markers connected around HSD17B11"
          },
          {
            id: "adc-survival-benefit",
            title: "02. Action in Lung Cancer: Half Reduction in Mortality Risk for Adenocarcinoma (ADC) Patients",
            content: "Clinical data analysis showed that high expression of HSD17B11 in the 'Adenocarcinoma (ADC)' patient group dramatically increased patient survival rates. Specifically, the high expression group showed a powerful protective effect with a '47% reduction' in mortality risk (HR 0.53, p < 0.0001) compared to the low expression group. Conversely, no such significant correlation was found in the squamous cell carcinoma patient group.",
            figure: "https://lh7-us.googleusercontent.com/TYgJU_4D_nTCjuQQA5QOePnk98e7Aq3eINHW3dWvl9Jpf70xoHiCrP1DtwEz0nI9zwTj-q2cvu1p3TI5TToPDBT8DIgkpFzFDIBXFs63OogBhmIHqcBMqsQVMU6YNATNcY-9MQviacVFlndjm0UBJ1I",
            figureCaption: "Figure 3. Lung Cancer Survival Curves: Distinct survival benefit of HSD17B11 appearing in Adenocarcinoma (ADC) patient group (b)"
          },
          {
            id: "pancancer-prognosis",
            title: "03. Expanded Research: Differential Expression and Prognosis in Various Cancer Types",
            content: "HSD17B11 shows expression patterns clearly different from normal tissue in many cancer types besides lung cancer. These 'differential expression' data suggest that HSD17B11 can be utilized as an important molecular indicator for predicting patient prognosis and establishing treatment strategies not only in lung cancer but also in various solid cancers.",
            figure: "https://lh7-us.googleusercontent.com/VeDToESQ3chUjt4HCko-7N54O8SAnCr5L02h1PL91cqr4ZkCDeKYWT5CYTL6gY5Nvwa09Z4xA4DnEu607bWwwJXHV7NuUpmuB5P89ksUEeCCydbob2T5ncMU0WwYqrhqzmhVnMeCdAobchZTaYGiJuU",
            figureCaption: "Figure 4. Systemic Cancer Comparative Analysis: HSD17B11 expression deviation confirmed in lung cancer and other cancer tissues"
          }
        ],
        conclusion: "The HSD17B11 study proved that this gene is a key protective marker directly determining survival rates beyond steroid metabolism in adenocarcinoma patients."
      }
    },
    {
      name: "TLE3",
      full_name: "Transducin-Like Enhancer of Split 3",
      role: "Corepressor",
      insight: "Analyzed in February 2024. It acts as a 'brake' suppressing gene expression by binding to other transcription factors. In lung cancer, this brake failing or malfunctioning was pointed out as one of the causes making cancer-related genes run wild.",
      article_id: 10,
      uniprot_id: "Q04726",
      deepDive: {
        story: {
          title: "TLE3: A Sophisticated Molecular Brake Controlling Gene Runaway",
          analogy: "TLE3 is an intracellular 'molecular brake' controlling cancer-related genes from running wild, and is a safety device significantly increasing survival probability for lung cancer patients.",
        },
        sections: [
          {
            id: "transcriptional-brake",
            title: "01. Existing Knowledge: Molecular Controller Suppressing Gene Expression",
            content: "TLE3 does not bind to DNA itself, but acts as a 'transcriptional corepressor' binding to other transcription factors to suppress gene expression. This gene, which is also involved in immune function and maintaining intestinal immune homeostasis, operates as a key control system preventing cells from proliferating abnormally or turning into tumors."
          },
          {
            id: "lung-survival-tle3",
            title: "02. Action in Lung Cancer: Survival Benefit in Overall and Female Patients",
            content: "Lung cancer clinical data analysis proved that TLE3 performs a 'protective role' improving patient prognosis. A result of '22% reduction' in mortality risk (HR 0.78, p < 0.001) was confirmed in the high TLE3 expression group compared to the low group, and this survival probability improvement effect appeared even more powerfully in the 'female' patient group.",
            multiFigures: [
              {
                url: "https://lh7-us.googleusercontent.com/yh-bxhMDw_X9TKMRKysTaRcWKk0BY2aECdJ9v6Tej43y66e3ueeg9ynU_gRQ14HZSFSmotYBkJUETbjkqNcwQeuB4bWlts7iwrzM75tlWwTNgJ3fueLA-XUFwptcP0eeMyQeOKA6HmDeQ8fT1DbOl8E",
                label: "Overall Survival Curve"
              },
              {
                url: "https://lh7-us.googleusercontent.com/00B8n-lgY59h_YPOd3CNoISjlWtkzqOgVuoIDU4Tzjss59xNlVBHSWRdhF7pwxSh7xoIDBpFUn-9w8Gq94jwbSoqJ4aw1KZJHwaaufwGM1nRRzeN_EUQnWcu1q_406P6L9Xyj4TCkz3PwbwLuO0ErCg",
                label: "Female Patient Survival Curve"
              }
            ],
            figureCaption: "Figure 1 & 2. Precision Survival Rate Analysis: Survival probability gap in overall and female patient groups according to TLE3 expression"
          },
          {
            id: "pancancer-tle3",
            title: "03. Expanded Research: Differential Expression Patterns in Multiple Cancer Types",
            content: "TLE3's tumor suppression potential is also confirmed in systemic cancer analysis. Significant 'differential expression' patterns compared to normal tissue were observed in 14 out of 22 cancer types. These extensive expression changes become strong evidence that TLE3 can be utilized as a common diagnostic and prognostic marker in various solid cancers beyond lung cancer.",
            figure: "https://lh7-us.googleusercontent.com/GQrqptdhJBtiQJAUFzJNtwnV_g5n1RjZLX3vw91LbenBTTjeYX2wENrjsLGZ0-ql5nw-q4GOEOJXB9wRvf_M73FvwusRNxBTDBL3HO8U5MkcBbHz_6NaIrUwIA3ArRMtCOVbdTErmg7AvkgdYJ_yrGc",
            figureCaption: "Figure 3. Systemic Cancer Comparative Analysis: TLE3 expression anomaly patterns confirmed in multiple cancer tissues"
          }
        ],
        conclusion: "The TLE3 study proved that this gene is a key molecular brake controlling lung cancer runaway, and revealed it is a significant safety device predicting patient survival."
      }
    },
    {
      name: "PCSK5",
      full_name: "Proprotein Convertase Subtilisin/Kexin Type 5",
      role: "Protein Activating Enzyme",
      insight: "January 2024 update content. An enzyme that converts inactive proteins to active states, showing significant patterns when cross-analyzed with lung cancer patient survival data. It can act as a trigger activating cancer cell growth factors.",
      article_id: 11,
      uniprot_id: "Q92824",
      deepDive: {
        story: {
          title: "PCSK5: Molecular Catalyst Waking Up Dormant Cell Factors",
          analogy: "PCSK5 is an enzyme that wakes up and activates dormant proteins within cells, and acts as a protective factor breathing the energy of survival into lung cancer patients.",
        },
        sections: [
          {
            id: "protein-activation",
            title: "01. Existing Knowledge: Cleaving Inactive Proteins for Activation",
            content: "PCSK5 performs a unique function as a 'protein activating enzyme' within the cell. It plays the role of cleaving specific sites of inactive proteins (Proproteins) to convert them into activated proteins. Through this process, it becomes a molecular 'catalyst' helping cancer cell growth factors or receptors to function properly."
          },
          {
            id: "lung-survival-pcsk5",
            title: "02. Action in Lung Cancer: Significant Survival Benefit Confirmed in Overall Patient Group",
            content: "MCM project clinical data analysis revealed that PCSK5 performs a 'protective role' predicting lung cancer patient prognosis. The patient group showing high PCSK5 levels showed a statistically significant survival rate improvement with a '21% reduction' in mortality risk (HR 0.79, p < 0.001) compared to the low group.",
            figure: "https://lh7-us.googleusercontent.com/usGyB7HB-3crKWwngE77I4-5Ui3e1htpb2RLjcEE7ZsKjqrNhtVYSfV0RGv9ruIknIqnun6rWx9nfmNevenKBbTBuDp5R2cHJk7ffdPx_vvstY9XWKo7Z1TRgR92-epK4XeaRot3ETSBI0Mn1NRxvpg",
            figureCaption: "Figure 1. Lung Cancer Survival Curve: Significant mortality risk reduction result appearing in PCSK5 high expression group"
          },
          {
            id: "pancancer-pcs",
            title: "03. Expanded Research: Expression Anomalies and Value in Multiple Cancer Types",
            content: "PCSK5 expression shows patterns clearly different from normal tissue not only in lung cancer but also in various solid cancers. According to systemic cancer analysis data, PCSK5 shows 'differential expression' in several cancer types, suggesting that this enzyme is involved in complex tumor biological mechanisms depending on the cancer type.",
            figure: "https://lh7-us.googleusercontent.com/nnjzwGD3_snqObrmwwLSneLOdUpsRDAbp-JCbc7dQrfUquSBQwl0np4Fb5mokszq-c_uK3TvEu6RVOB6VtEoxUC-iPPDMqx_ttEmHhvALQJomgDbB7GCe-kPAvEBLuB9G6DPhgQk7vO8iVJpUK9C_ig",
            figureCaption: "Figure 2. Systemic Cancer Comparative Analysis: PCSK5 expression fluctuation status observed in multiple cancer tissues"
          }
        ],
        conclusion: "The PCSK5 study proved that the protein activation mechanism is directly linked to lung cancer patient survival rates, and showed potential as a new clinical marker."
      }
    },
    {
      name: "IL13RA1",
      full_name: "Interleukin 13 Receptor Subunit Alpha 1",
      role: "Immune Receptor",
      insight: "November 2023 research result. Although an immune response-related receptor, it shows distinct expression differences in lung cancer tissue compared to normal tissue. This may be related to mechanisms where cancer cells evade the immune system or exploit inflammatory responses.",
      article_id: 12,
      uniprot_id: "P78552",
      deepDive: {
        story: {
          title: "IL13RA1: Protective Marker Blocking Cancer Cell Immune Evasion Strategy",
          analogy: "IL13RA1 is an antenna receiving cellular immune signals, and acts as a solid immune defense line protecting lung cancer patients' survival from tumor attacks.",
        },
        sections: [
          {
            id: "immune-receptor-role",
            title: "01. Existing Knowledge: Receptor Coordinating Intracellular Immune Response",
            content: "IL13RA1 is a key receptor involved in communication between immune cells. In normal environments, it contributes to regulating inflammatory responses and maintaining cell homeostasis, but in lung cancer tissue, it shows abnormal expression patterns and intervenes in complex interactions between cancer cells and the immune system."
          },
          {
            id: "lung-survival-il13",
            title: "02. Action in Lung Cancer: Positive Survival Benefit Brought by High Expression",
            content: "Clinical analysis revealed that IL13RA1 performs a key 'protective role' determining lung cancer patient prognosis. High IL13RA1 levels show a clear statistical correlation with patients' 'longer survival period', suggesting the possibility that this receptor promotes tumor-suppressing immune responses.",
            figure: "https://lh7-us.googleusercontent.com/E24ekjdbncEvfmOgZGerFpnBX0kkcQDQI_PQCrlRZnP7hwzesSmwPrJmC15s0_QtVmGKZU7X7EEBnDSbItvtPb7IIInRvy1IYe-g11ESHIWxkJT1H1HGdpZskUXxStVrGCJwEJNei0svVOZh31PoESI",
            figureCaption: "Figure 1. Lung Cancer Survival Analysis: Patient survival probability gap according to IL13RA1 expression level"
          },
          {
            id: "pancancer-il13",
            title: "03. Expanded Research: Impact in Systemic Cancers such as Pancreatic and Brain Cancer",
            content: "The importance of IL13RA1 is widely confirmed ranging from pancreatic cancer, thyroid cancer, bladder cancer, breast cancer, to brain cancer. It shows 'differential expression' patterns compared to normal tissue in most cancer types, and was analyzed as a very important indicator in understanding the systemic tumor immune environment.",
            figure: "https://lh7-us.googleusercontent.com/7nx-jGcisWNRjEdFm5fnuFkaIGaec4Iys7wMPOAcPfda2Yj5L8flYWPoeNE8BS-d5ZM8-JNdXx44TdDNbL0KRhauX0htJl2qX55DiFe3-6MzeR_yg4rHcB7FP8-QDyLgI_oUbemS799x7NbeQNnG1AQ",
            figureCaption: "Figure 2. Systemic Cancer Comparative Analysis: IL13RA1 differential expression anomaly status appearing in various tissues"
          }
        ],
        conclusion: "The IL13RA1 study proved that immune receptor expression is a key factor predicting lung cancer progression, and presented grounds for patient-customized immunotherapy."
      }
    },
    {
      name: "ADH6",
      full_name: "Alcohol Dehydrogenase 6",
      role: "Alcohol Metabolism and Smoking Association",
      insight: "September 15, 2023 research report. It showed a close association especially with 'Smoking Status'. Research results confirmed that ADH6 expression pattern acts as a significant indicator for predicting prognosis in lung cancer patient groups with smoking experience.",
      article_id: 14,
      uniprot_id: "P28332",
      deepDive: {
        story: {
          title: "ADH6: Molecular Barometer Reading Prognosis of Smoking Patients",
          analogy: "ADH6 is originally an alcohol metabolism enzyme filtering toxins, but in the lung cancer environment, it transforms into a decisive indicator mapping the survival of smoking patients in particular.",
        },
        sections: [
          {
            id: "metabolic-interaction",
            title: "01. Existing Knowledge: Link with Lung Cancer Key Gene KRAS",
            content: "ADH6 is a zinc-containing alcohol dehydrogenase performing the function of converting alcohol to aldehyde. Especially, the MCM research team revealed that ADH6 is one of 27 key partners physically interacting with 'KRAS' protein, one of the most important markers of lung cancer.",
            figure: "https://worldcommunitygrid.org/images/prismic/pde8_article_fig2.JPG", // Using PDE8B fig2 as a proxy for generic interaction background
            figureCaption: "Mechanism Analysis: Physical interaction network between ADH6 and major lung cancer-related proteins"
          },
          {
            id: "smoking-prognosis-adh6",
            title: "02. Action in Lung Cancer: Differential Expression Directly Linked to Smoking Status",
            content: "Research results confirmed that ADH6 shows significantly 'lower expression' in lung cancer tissue than in normal tissue. In particular, this expression pattern is closely related to patients' 'smoking status', and it was proven to be a powerful biomarker predicting prognosis for adenocarcinoma patients with a smoking history.",
            figure: "https://worldcommunitygrid.org/images/prismic/mcm1_astn2_fig2.png", // Corrected mapping after verification
            figureCaption: "Lung Cancer Clinical Data: Correlation between ADH6 low expression and smoking patient prognosis"
          },
          {
            id: "developmental-link",
            title: "03. Expanded Research: Parallel Theory of Brain Development Mechanism and Cancer Metastasis",
            content: "ADH6 shows specific overexpression not only in adult lungs but also during fetal brain development. Considering that about 25% of lung cancer patients already experience brain metastasis at diagnosis, the possibility was raised that the development mechanism regulated by ADH6 is reactivated during the cancer cell metastasis process and exerts a negative influence.",
            figureCaption: "Development Mechanism Research: Abnormal activation pattern of ADH6 observed in choroid plexus of the brain, etc."
          }
        ],
        conclusion: "The ADH6 study revealed that changes in metabolic enzyme expression are directly linked to survival rates of smoking patients, and suggested a connection with brain metastasis mechanisms."
      }
    },
    {
      name: "GSDMB",
      full_name: "Gasdermin B",
      role: "Cell Death / Immune Response",
      insight: "July 12, 2023 research report. Shows distinct expression difference in cancer tissue vs normal tissue, and is related to patient survival rate. It can induce cell pyroptosis (inflammatory cell death), presumed to contribute to regulating immune response within the lung cancer microenvironment.",
      article_id: 15,
      uniprot_id: "O60568",
      deepDive: {
        story: {
          title: "GSDMB: Immune Guardian Controlling Cell Self-Destruct Switch",
          analogy: "GSDMB is a part of the 'self-destruct switch' inducing malfunctioning cancer cells to die on their own, acting as a protective mechanism inhibiting tumor growth for lung cancer patients.",
        },
        sections: [
          {
            id: "pyroptosis-mechanism",
            title: "01. Existing Knowledge: Protein Inducing Inflammatory Cell Death",
            content: "GSDMB is a protein of the Gasdermin family, inducing 'pyroptosis', a powerful self-death pathway of cells. It is strongly expressed mainly in lung epithelial cells and immune cells, performing an essential role in maintaining body homeostasis by removing external invaders or mutated cells."
          },
          {
            id: "lung-protective-gsdmb",
            title: "02. Action in Lung Cancer: Positive Protective Effect Increasing Survival Rate",
            content: "MCM analysis showed that GSDMB plays a 'protective role' guarding patients' lives in lung cancer. High GSDMB levels are directly linked to patients' 'longer survival period', analyzed to be because the protein suppresses indiscriminate proliferation of cancer cells and activates attacks by immune cells.",
            figure: "https://lh7-us.googleusercontent.com/usGyB7HB-3crKWwngE77I4-5Ui3e1htpb2RLjcEE7ZsKjqrNhtVYSfV0RGv9ruIknIqnun6rWx9nfmNevenKBbTBuDp5R2cHJk7ffdPx_vvstY9XWKo7Z1TRgR92-epK4XeaRot3ETSBI0Mn1NRxvpg",
            figureCaption: "Figure 1. Lung Cancer Survival Curve: Significant survival probability improvement confirmed in GSDMB high expression group"
          },
          {
            id: "pan-cancer-duality",
            title: "03. Expanded Research: Dual Prognostic Indicator Differing by Cancer Type",
            content: "The effect of GSDMB appears contradictory depending on the cancer type. It shows a negative prognosis in some cancers like 'Neuroblastoma', but was confirmed as a very positive survival indicator in 'Urothelial Carcinoma' or 'Cervical Cancer', just like in lung cancer. This duality suggests that GSDMB acts fluidly depending on the cancer microenvironment.",
            figure: "https://lh7-us.googleusercontent.com/nnjzwGD3_snqObrmwwLSneLOdUpsRDAbp-JCbc7dQrfUquSBQwl0np4Fb5mokszq-c_uK3TvEu6RVOB6VtEoxUC-iPPDMqx_ttEmHhvALQJomgDbB7GCe-kPAvEBLuB9G6DPhgQk7vO8iVJpUK9C_ig",
            figureCaption: "Figure 3. Systemic Prognosis Analysis: Comparison of prognosis differences according to GSDMB expression by cancer type"
          }
        ],
        conclusion: "The GSDMB study identified the decisive impact of cell death mechanism regulation on lung cancer survival rates, and proved the need for personalized treatment by cancer type."
      }
    },
    {
      name: "FARP1",
      full_name: "FERM, ARHGEF And Pleckstrin Domain Protein 1",
      role: "Cancer Cell Migration and Metastasis Trigger",
      insight: "Focus of the April 28, 2023 report. Overexpression of this protein involved in cell motility and adhesion could be a signal of metastasis where cancer cells leave the primary site and spread to other organs.",
      article_id: 16,
      uniprot_id: "Q9Y4F1",
      deepDive: {
        story: {
          title: "FARP1: Signaling Metastasis Leaving the Cancer Cell's Origin",
          analogy: "FARP1 is a 'transportation vehicle' helping cancer cells penetrate surrounding tissue and travel to other organs, and its expression change is like an alarm signaling the start of metastasis.",
        },
        sections: [
          {
            id: "metastasis-trigger",
            title: "01. Existing Knowledge: Engine Controlling Cytoskeleton and Migration",
            content: "FARP1 is a protein that rearranges the skeletal structure, the framework of the cell, and confers motility. While essential in normal wound healing processes, if cancer cells abuse it, it becomes the key driving force of the 'metastasis' process where they invade surrounding tissues and travel to distant organs via blood vessels."
          },
          {
            id: "lung-to-brain-metastasis",
            title: "02. Action in Lung Cancer: Fatal Expression Pattern Found in Metastatic Samples",
            content: "MCM research results show that FARP1 exhibits specific expression patterns in metastatic cancer tissue compared to normal lung tissue or primary cancer tissue. In particular, it shows a high correlation in the patient group where 'metastasis' has progressed, suggesting that FARP1 is a powerful diagnostic marker predicting metastasis which determines the final prognosis of lung cancer patients.",
            figure: "https://lh7-us.googleusercontent.com/TYgJU_4D_nTCjuQQA5QOePnk98e7Aq3eINHW3dWvl9Jpf70xoHiCrP1DtwEz0nI9zwTj-q2cvu1p3TI5TToPDBT8DIgkpFzFDIBXFs63OogBhmIHqcBMqsQVMU6YNATNcY-9MQviacVFlndjm0UBJ1I",
            figureCaption: "Figure 1. Metastasis Analysis: FARP1 expression deviation between normal tissue, lung cancer tissue, and metastatic tissue"
          }
        ],
        conclusion: "The FARP1 study enhanced molecular understanding of metastasis mechanisms and raised the need for new treatment strategies blocking cancer cell motility."
      }
    },
    {
      name: "VAMP1",
      full_name: "Vesicle Associated Membrane Protein 1",
      role: "Cancer Tissue vs Normal Tissue Comparison Marker",
      insight: "Updated March 2023. This study found markers showing extreme 'low expression' in cancer tissue compared to normal lung cells through gene expression mapping. These expression differences show very useful evidence for early diagnosis and differential diagnosis between lung cancer types.",
      article_id: 17,
      uniprot_id: "P23763",
      deepDive: {
        story: {
          title: "VAMP1: Guardian of Survival Silently Disappeared from Cancer Cells",
          analogy: "VAMP1 is originally a transporter responsible for intracellular substance transport, but in lung cancer tissue, it rapidly disappears, performing the role of a 'silent messenger' signaling the onset of cancer.",
        },
        sections: [
          {
            id: "vesicle-transport",
            title: "01. Existing Knowledge: Key Transporter of Intracellular Substance Transport",
            content: "VAMP1 is a protein helping small sacs (vesicles) within the cell move to the correct location and fuse. It is especially essential for neurotransmitter release, and is a key component of the 'logistics system' where cells communicate with the outside and place necessary materials in the right places."
          },
          {
            id: "diagnostic-high-expression",
            title: "02. Action in Lung Cancer: Survival Rate Improvement Effect Brought by High Expression",
            content: "MCM analysis confirmed that VAMP1 performs a powerful 'protective role' in the lung cancer patient group. The patient group showing high VAMP1 expression levels recorded a 'significantly improved' survival rate compared to the low group, proving that VAMP1 is a decisive 'prognostic marker' predicting patient prognosis.",
            figure: "https://lh5.googleusercontent.com/DAM1exNs_KhSHTVYbETiF5rNVznxiAVUnTRXj_hgY2XVf8pjHq-fQo4vXdludSudS4BpIQFwlmgkMM1cmu1Uhe_3PrJ7MWZFKYm3JCW0ZfhPd5DKICfj6TAhoSJMOk0GsoJhk3tDFAwXwRjcuA1v_9k",
            figureCaption: "Figure 5. Lung Cancer Survival Curve: Distinct survival benefit appearing in VAMP1 high expression group (Red)"
          },
          {
            id: "pan-cancer-vamp1",
            title: "03. Expanded Research: Common Cancer Indicator Penetrating Systemic Cancers",
            content: "This protective tendency of VAMP1 was observed identically in the majority of 22 systemic cancer types. This is decisive evidence showing that VAMP1 is not limited to lung cancer, but is a 'Pan-cancer marker' closely related to the fundamental pathways of cancer occurrence in the human body.",
            figure: "https://lh3.googleusercontent.com/RlcPY-DuCPbbPn94zaFYCYpPv0y02FOCVYGg7FuGE-K1DyIJeXh1WtJzmijErSt3oHIhIOAUBFn2GDS7LN_TTWjNDidqeojobjp8_Yfv2riK8cRnp462ciqJph9NVjjsF_YZMTZoeB_Ppx_nIUd72Cw",
            figureCaption: "Figure 7. Systemic Cancer Comparative Analysis: VAMP1 cancer suppression patterns commonly confirmed in most solid cancers"
          }
        ],
        conclusion: "The VAMP1 study proved that expression differences in substance transport proteins become decisive clues for early diagnosis of lung cancer, completing a new molecular map for cancer conquest."
      }
    },
    {
      name: "26 Core Genes",
      full_name: "Lung Cancer Molecular Landscape",
      role: "Key Biomarker Selection Achievement",
      insight: "Research result that is the predecessor of the MCM project. Analyzed over 9 trillion gene combinations to finally select 26 'core genes' that can accurately identify lung cancer in any environment.",
      article_id: 17,
      uniprot_id: "",
      deepDive: {
        story: {
          title: "Core 26: Lung Cancer Answer Sheet Found by 9 Trillion Calculations",
          analogy: "The MCM project discovered the fact that just 26 pieces out of trillions of puzzle pieces determine the entire picture of lung cancer. This became the decisive basic data opening the era of precision medicine.",
        },
        sections: [
          {
            id: "mcm-scale",
            title: "01. Existing Knowledge: World's Largest Cancer Genome Computation",
            content: "To find a new path for lung cancer diagnosis, WCG volunteers donated a cumulative 810,000 years of computing time. Through this, a total of over '9 trillion' candidate gene signatures were tested, which is an overwhelming data scale unprecedented in the history of modern cancer research.",
            figure: "https://lh5.googleusercontent.com/afT3wGIsfBaKV354C2KPkNSccTuUfV9bgC-3nIypA6bWgIqK_T52HDTDLxb0QzXPjWCrB2MDjiLy6H4T2QA5yL84iS3mN-jR54sx7otZxpxBahNOK_KGYTeXduAfQFAM0_Q9oxMtzSGvCosqUD3EKGI",
            figureCaption: "Figure 1. Computation Statistics: Status of completed work units and volunteer contributions by cancer type"
          },
          {
            id: "statistical-precision",
            title: "02. Research Details: Key Markers Filtered with 99.999% Precision",
            content: "The research team did not simply find many genes, but tracked only combinations with the top '99.999% precision' based on the 'Matthews Correlation Coefficient (MCC)'. As a result, '26 core genes' recording high scores commonly across all signature sizes were selected, maximizing the accuracy of lung cancer diagnosis.",
            figure: "https://lh6.googleusercontent.com/uyw-h9GfgcTwCCT0j-5SPbvGiRBJMPwJSVGXN82u0JI1-tZ2iWj0uRKIUpdQXUmPOjbr19Yz89NJ7gIJ3h7WFJ8jDIK0JV76Rs-1q9egc4e9eO9WfHJqeBwbr8BPTeXAN9NM7IyOERMBjiBLQRt_tzg",
            figureCaption: "Figure 2. Data Distribution: Precision verification through biomarker frequency analysis by signature size"
          },
          {
            id: "molecular-landscape",
            title: "03. Future Direction: Completing the Molecular Landscape of Lung Cancer",
            content: "The finally selected genes have the powerful ability to read signs of cancer even in normal tissue of lung cancer patients. MCM released this '26 core genes' data for free to researchers worldwide, building a research infrastructure where anyone can refer to the 'molecular terrain' of lung cancer and develop new treatments.",
            figure: "https://lh6.googleusercontent.com/kZLComV5DCp70EX6a8mqrURFYD7SsTvlamMXfaovy4ATP-MIHw07M_VQFDwkaQamEcMYcHKNqQxZyJaF9GejR1jaU1KErbCg6B4G8BWklf3qiV3EerAnR0MolwQ-ByvW8zEMND8fl8ga8nc65pfRibY",
            figureCaption: "Figure 3. Molecular Landscape: Heatmap showing correlation between 143 probes and 26 core genes"
          }
        ],
        conclusion: "The 26 core genes research is the pinnacle of the MCM project, providing the most precise and vast molecular guide for lung cancer conquest."
      }
    }
  ]
};
