import type { LucideIcon } from 'lucide-react';

import type { HistoryLog } from '../data/projectHistory';

export type Language = 'ko' | 'en';

export interface StatItem {
  label: string;
  value: string;
  sub: string;
}

export interface ProjectInfo {
  title: string;
  subtitle: string;
  description: string;
  stats: StatItem[];
}

export interface GlossaryItem {
  term: string;
  def: string;
}

export interface DeepDiveFigure {
  url: string;
  label: string;
}

export interface DeepDiveSection {
  id: string;
  title: string;
  content: string;
  figure?: string;
  figureCaption?: string;
  multiFigures?: DeepDiveFigure[];
}

export interface DeepDiveStory {
  title: string;
  analogy: string;
}

export interface DeepDiveContent {
  story: DeepDiveStory;
  sections: DeepDiveSection[];
  conclusion: string;
}

export interface Gene {
  name: string;
  full_name: string;
  role: string;
  insight: string;
  article_id?: number | string;
  uniprot_id?: string;
  deepDive?: DeepDiveContent;
}

export interface GeneAnalysisCategory {
  title: string;
  description: string;
  genes: Gene[];
}

export interface GeneAnalysisByCategory {
  lung: GeneAnalysisCategory;
  ovarian: GeneAnalysisCategory;
  sarcoma: GeneAnalysisCategory;
}

export interface Article {
  id: number;
  date: string;
  title: string;
  category: string;
  summary: string;
  link: string;
}

export interface LocalizedResources {
  projectInfo: ProjectInfo;
  geneAnalysis: GeneAnalysisByCategory;
  glossary: GlossaryItem[];
  articles: Article[];
  historyLogs: HistoryLog[];
}

export interface ServerHistoryEntry {
  date: string;
  runtime_raw: string;
  points: number;
  results: number;
}

export interface ServerStats {
  runtime: string;
  points: string;
  results: string;
  history: ServerHistoryEntry[];
}

export interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  isLive?: boolean;
}

export interface SectionHeaderProps {
  title: string;
  sub?: string;
  icon: LucideIcon;
}
