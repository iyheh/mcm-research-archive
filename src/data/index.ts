import { lungData } from './lungData';
import { ovarianData } from './ovarianData';
import { sarcomaData } from './sarcomaData';

export * from './projectData';
export * from './lungData';
export * from './ovarianData';
export * from './sarcomaData';

// English Exports
export * from './projectDataEn';
export * from './lungDataEn';
export * from './ovarianDataEn';
export * from './sarcomaDataEn';

export const geneAnalysis = {
  lung: lungData,
  ovarian: ovarianData,
  sarcoma: sarcomaData
};