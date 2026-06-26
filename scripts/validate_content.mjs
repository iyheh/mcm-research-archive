import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const assertIncludes = (content, expected, label) => {
  if (!content.includes(expected)) {
    throw new Error(`${label} is missing: ${expected}`);
  }
};

const assertMatches = (content, pattern, label) => {
  if (!pattern.test(content)) {
    throw new Error(`${label} does not match: ${pattern}`);
  }
};

const assertEqual = (actual, expected, label) => {
  if (actual !== expected) {
    throw new Error(`${label} expected ${expected}, got ${actual}`);
  }
};

const koreanLungData = read('src/data/lungData.ts');
const englishLungData = read('src/data/lungDataEn.ts');
const koreanArticles = read('src/data.json');
const englishArticles = read('src/dataEn.json');
const koreanArticleArchive = JSON.parse(koreanArticles);
const englishArticleArchive = JSON.parse(englishArticles);
const koreanSlcArticle = koreanArticleArchive.find((article) => Number(article.id) === 52);
const englishSlcArticle = englishArticleArchive.find((article) => Number(article.id) === 52);

assertIncludes(koreanLungData, 'name: "SLC5A1"', 'Korean lung analysis data');
assertIncludes(englishLungData, 'name: "SLC5A1"', 'English lung analysis data');
assertIncludes(koreanLungData, 'article_id: 52', 'Korean SLC5A1 source article link');
assertIncludes(englishLungData, 'article_id: 52', 'English SLC5A1 source article link');
assertIncludes(koreanLungData, 'uniprot_id: "P13866"', 'Korean SLC5A1 UniProt id');
assertIncludes(englishLungData, 'uniprot_id: "P13866"', 'English SLC5A1 UniProt id');

assertIncludes(koreanLungData, '포도당·갈락토스', 'Korean SLC5A1 transport summary');
assertIncludes(englishLungData, 'glucose and galactose', 'English SLC5A1 transport summary');
assertIncludes(koreanLungData, 'PI3K/Akt/mTOR', 'Korean SLC5A1 pathway summary');
assertIncludes(englishLungData, 'PI3K/Akt/mTOR', 'English SLC5A1 pathway summary');

assertIncludes(koreanLungData, '47% 증가', 'Korean SLC5A1 ADC risk summary');
assertIncludes(englishLungData, '47% increase', 'English SLC5A1 ADC risk summary');
assertIncludes(koreanLungData, '72% 증가', 'Korean SLC5A1 female ADC risk summary');
assertIncludes(englishLungData, '72% increase', 'English SLC5A1 female ADC risk summary');
assertIncludes(koreanLungData, '40% 증가', 'Korean SLC5A1 male ADC risk summary');
assertIncludes(englishLungData, '40% increase', 'English SLC5A1 male ADC risk summary');
assertIncludes(koreanLungData, 'HR 1.47', 'Korean SLC5A1 ADC hazard ratio');
assertIncludes(englishLungData, 'HR 1.47', 'English SLC5A1 ADC hazard ratio');
assertIncludes(koreanLungData, 'HR 1.72, p-value 8.3*10-5', 'Korean SLC5A1 female hazard ratio and p-value');
assertIncludes(englishLungData, 'HR 1.72, p-value 8.3*10-5', 'English SLC5A1 female hazard ratio and p-value');
assertIncludes(koreanLungData, 'HR 1.4, p-value 0.005', 'Korean SLC5A1 male hazard ratio and p-value');
assertIncludes(englishLungData, 'HR 1.4, p-value 0.005', 'English SLC5A1 male hazard ratio and p-value');
assertIncludes(koreanLungData, '편평세포암(SQC)에서는 고발현과 저발현 사이의 추가 위험이 확인되지 않았습니다', 'Korean SLC5A1 SQC no-risk result');
assertIncludes(englishLungData, 'In squamous cell carcinoma (SQC), no additional prognostic risk was found between high and low expression', 'English SLC5A1 SQC no-risk result');

assertMatches(koreanLungData, /name: "SLC5A1"[\s\S]*deepDive:/, 'Korean SLC5A1 deep insight card');
assertMatches(englishLungData, /name: "SLC5A1"[\s\S]*deepDive:/, 'English SLC5A1 deep insight card');

if (!koreanSlcArticle) throw new Error('Korean article archive is missing id 52');
if (!englishSlcArticle) throw new Error('English article archive is missing id 52');

assertEqual(koreanSlcArticle.date, '2026-04-30', 'Korean SLC5A1 article date');
assertEqual(englishSlcArticle.date, '2026-04-30', 'English SLC5A1 article date');
assertIncludes(koreanSlcArticle.link, 'articleId=829', 'Korean article archive link');
assertIncludes(englishSlcArticle.link, 'articleId=829', 'English article archive link');
assertIncludes(koreanSlcArticle.title, 'Research Update from the MCM Team (June 2026)', 'Korean article archive title');
assertIncludes(englishSlcArticle.title, 'Research Update from the MCM Team (June 2026)', 'English article archive title');

console.log('Content validation passed.');
