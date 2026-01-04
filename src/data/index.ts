import { lungData } from './lungData';
import { ovarianData } from './ovarianData';
import { sarcomaData } from './sarcomaData';

export * from './projectData';
export * from './lungData';
export * from './ovarianData';
export * from './sarcomaData';

export const geneAnalysis = {
  lung: lungData,
  ovarian: ovarianData,
  sarcoma: sarcomaData
};