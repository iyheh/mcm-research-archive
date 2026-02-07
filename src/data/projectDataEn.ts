export const projectInfoEn = {
  title: "Mapping Cancer Markers (MCM)",
  subtitle: "Mapping the path to cancer conquest through collective intelligence",
  description: "The Mapping Cancer Markers (MCM) project is a large-scale distributed computing research initiative that utilizes the idle computer resources of volunteers worldwide (World Community Grid) to identify potential biomarkers for intractable cancers such as lung cancer, ovarian cancer, and sarcoma. It is led by the Jurisica Lab at the University of Toronto.",
  stats: [
    { label: "Research Period", value: "11 Years+", sub: "Nov 2013 ~ Present" },
    { label: "Analyzed Gene Combinations", value: "15 Trillion+", sub: "Heuristic Search" },
    { label: "Major Target Cancers", value: "3 Types", sub: "Lung, Ovarian, Sarcoma" },
    { label: "Key Genes Discovered", value: "26+", sub: "DYNLT1, GCM1 etc." }
  ]
};

export const glossaryEn = [
  { term: "Biomarker", def: "An indicator of biological changes or disease states within the body. The MCM project seeks 'genes/proteins' as biomarkers." },
  { term: "Work Unit", def: "A small unit of work into which massive data is divided in distributed computing. Users' computers receive these fragments, calculate them, and send the results back to the laboratory." },
  { term: "Heuristic Search", def: "An intelligent algorithm that finds the 'most efficient' path when calculating every possibility is too vast." },
  { term: "Genomic Signature", def: "Refers to a unique expression pattern or combination of multiple genes that can indicate a specific disease or condition." },
  { term: "False Discovery Rate (FDR)", def: "A statistical method used to correct for random events that falsely appear significant. It is crucial for filtering out false patterns in the trillions of gene combinations analyzed by MCM." },
  { term: "Matthews Correlation Coefficient (MCC)", def: "A reliable measure of the quality of binary classifications, especially useful when classes are of different sizes. It offers a stricter standard than simple accuracy." },
  { term: "AlphaFold", def: "An AI program developed by DeepMind that predicts 3D protein structures from amino acid sequences. Used in this project to visualize structures like NELL2." },
  { term: "Microarray", def: "A chip-based technology used to measure the expression levels of large numbers of genes simultaneously. It played a pivotal role in MCM's initial data collection." },
  { term: "Transcription Factor", def: "A protein that controls the transcription of genetic information from DNA to RNA. Many genes determining cancer progression, such as KLF5 and GCM1, belong to this category." },
  { term: "Kaplan-Meier Plot", def: "A graph used to analyze the 'survival time' of patients in clinical trials. It visualizes how patient survival rates differ based on the expression levels of specific genes (e.g., top 25% vs. bottom 25%)." }
];
