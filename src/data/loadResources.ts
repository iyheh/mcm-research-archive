import articlesDataEn from '../dataEn.json';
import type { LocalizedResources } from '../types/content';
import { projectHistoryEn, projectHistoryKo } from './projectHistory';
import { lungDataEn } from './lungDataEn';
import { ovarianDataEn } from './ovarianDataEn';
import { projectInfoEn, glossaryEn } from './projectDataEn';
import { sarcomaDataEn } from './sarcomaDataEn';

export const defaultResources: LocalizedResources = {
  projectInfo: projectInfoEn,
  geneAnalysis: {
    lung: lungDataEn,
    ovarian: ovarianDataEn,
    sarcoma: sarcomaDataEn,
  },
  glossary: glossaryEn,
  articles: articlesDataEn,
  historyLogs: projectHistoryEn,
};

let koreanResourcesPromise: Promise<LocalizedResources> | null = null;

export const loadResources = (lang: 'ko' | 'en'): Promise<LocalizedResources> => {
  if (lang === 'en') {
    return Promise.resolve(defaultResources);
  }

  if (!koreanResourcesPromise) {
    koreanResourcesPromise = Promise.all([
      import('./projectData'),
      import('./lungData'),
      import('./ovarianData'),
      import('./sarcomaData'),
      import('../data.json'),
    ]).then(([projectData, lung, ovarian, sarcoma, articles]) => ({
      projectInfo: projectData.projectInfo,
      geneAnalysis: {
        lung: lung.lungData,
        ovarian: ovarian.ovarianData,
        sarcoma: sarcoma.sarcomaData,
      },
      glossary: projectData.glossary,
      articles: articles.default,
      historyLogs: projectHistoryKo,
    }));
  }

  return koreanResourcesPromise;
};
