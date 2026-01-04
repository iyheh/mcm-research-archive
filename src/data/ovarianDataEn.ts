export const ovarianDataEn = {
  title: "Ovarian Cancer",
  description: "To overcome the characteristic difficulty of early diagnosis, we are focusing on identifying gene patterns within large-scale datasets.",
  genes: [
    {
      name: "Ovarian Signatures",
      full_name: "Mapping Ovarian Heterogeneity",
      role: "Early Diagnosis and Prognostic Marker Discovery",
      insight: "Since ovarian cancer is often advanced at the time of discovery, we are focusing on finding decisive gene signatures that can distinguish between long-term and short-term survivors using large-scale datasets (711 samples).",
      article_id: 13,
      uniprot_id: "",
      deepDive: {
        story: {
          title: "Ovarian Cancer: Finding Clues for Survival in Heterogeneous Data",
          analogy: "Ovarian cancer research is like finding a path in a foggy maze. The MCM research team discovered unexpected data heterogeneity and is conducting precise additional analyses to resolve this.",
        },
        sections: [
          {
            id: "ovarian-challenge",
            title: "01. Existing Knowledge: Barriers to Early Diagnosis and Need for Research",
            content: "Ovarian cancer is called the 'silent killer' because it has no distinct precursor symptoms. Since most patients are diagnosed when the cancer is already quite advanced, the top priority of research is to discover diagnostic signatures that can identify cancer early and markers that can accurately predict patient survival periods (less than 3 years vs. more than 4 years)."
          },
          {
            id: "dishomogeneity-analysis",
            title: "02. Ovarian Cancer Research Details: Discovery of Data 'Heterogeneity'",
            content: "With the help of WCG volunteers, the MCM research team tested over '160 billion' candidate ovarian cancer signatures. The analysis showed that, unlike lung cancer, ovarian cancer data displayed 'heterogeneity' that did not follow a normal distribution. This suggests that ovarian cancer consists of genetically very complex subtypes, and 'additional computation' tasks were decided upon to analyze this precisely.",
            figure: "https://lh4.googleusercontent.com/STuQLYP00JoSLvY32CJXcZSfbNcO1FtwJVPLzDYNaR-LrBUPVk45XWvjjuh45f_oTjMUK-rPdMUK3bFYTvT_t8vlQc2arIQv41mN7xyPAj_Ca48amCGYgA6_-x_kxmLquMQttJl6HvFqzVCCVEgk_jQ",
            figureCaption: "Figure 1. Data Distribution Analysis: Confirmation of unique patterns in ovarian cancer data deviating from normal distribution"
          },
          {
            id: "lung-vs-ovarian",
            title: "03. Comparison by Cancer Type: Correlation with Lung Cancer Data",
            content: "Unlike lung cancer data, which shows a stable normal distribution, ovarian cancer showed very large genetic deviations between subtypes. To overcome these 'heterogeneous results', the research team established a more sophisticated marker discovery strategy, such as temporarily suspending Sarcoma analysis and concentrating computational resources on ovarian cancer analysis.",
            figureCaption: "Comparative Analysis Data: Comparative study of singularities in Ovarian Cancer (Non-normal) vs Lung Cancer (Normal) data"
          }
        ],
        conclusion: "Ovarian cancer research has entered a new stage of discovering more precise and personalized diagnostic markers through the process of resolving data heterogeneity."
      }
    }
  ]
};
