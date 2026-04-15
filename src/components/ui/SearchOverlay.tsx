import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, Dna, FileText, Clock, ArrowRight } from 'lucide-react';
import type { HistoryLog } from '../../data/projectHistory';
import type { Article, Gene, GeneAnalysisByCategory, GeneAnalysisCategory } from '../../types/content';

interface SearchResult {
  type: 'gene' | 'article' | 'log';
  id: string | number;
  title: string;
  subtitle?: string;
  data: Gene | Article | HistoryLog;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (type: 'gene' | 'article' | 'log', data: Gene | Article | HistoryLog) => void;
  data: {
    genes: GeneAnalysisByCategory;
    articles: Article[];
    history: HistoryLog[];
  };
}

const Highlight = ({ text, query }: { text?: string, query: string }) => {
  if (!text) return null;
  if (!query.trim()) return <>{text}</>;

  const keywords = query.trim().split(/\s+/).filter(Boolean);
  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${keywords.map(escapeRegExp).join('|')})`, 'gi');
  
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => {
        const isMatch = keywords.some(kw => part.toLowerCase() === kw.toLowerCase());
        return isMatch ? (
          <span key={i} className="text-accent bg-accent/10 rounded-sm px-0.5 font-bold">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
};

export const SearchOverlay = ({ isOpen, onClose, onNavigate, data }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const results = useMemo(() => {
    const keywords = deferredQuery.toLowerCase().split(/\s+/).filter(Boolean);
    if (keywords.length === 0) {
      return [];
    }

    const newResults: SearchResult[] = [];

    // Search Genes
    const geneCategories = Object.values(data.genes) as GeneAnalysisCategory[];
    geneCategories.forEach((category) => {
      category.genes.forEach((gene) => {
        const fields = [gene.name, gene.full_name, gene.insight];

        if (keywords.every((keyword) => fields.some((field) => field.toLowerCase().includes(keyword)))) {
          newResults.push({
            type: 'gene',
            id: gene.name,
            title: gene.name,
            subtitle: gene.full_name,
            data: gene,
          });
        }
      });
    });

    // Search Articles
    data.articles.forEach((article) => {
      const fields = [article.title, article.summary];

      if (keywords.every((keyword) => fields.some((field) => field.toLowerCase().includes(keyword)))) {
        newResults.push({
          type: 'article',
          id: article.id,
          title: article.title,
          subtitle: article.date,
          data: article,
        });
      }
    });

    // Search History
    data.history.forEach((log) => {
      const fields = [log.title, log.summary, log.date, ...log.details];

      if (keywords.every((keyword) => fields.some((field) => field.toLowerCase().includes(keyword)))) {
        newResults.push({
          type: 'log',
          id: log.id,
          title: log.title,
          subtitle: log.date,
          data: log,
        });
      }
    });

    return newResults;
  }, [data, deferredQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-page/95 backdrop-blur-xl animate-in fade-in duration-200 flex flex-col">
      <div className="max-w-4xl w-full mx-auto p-6 mt-10 md:mt-20">
        <div className="flex items-center gap-4 border-b-2 border-accent pb-4 relative group">
          <Search size={32} className="text-accent" />
          <input 
            ref={inputRef}
            id="global-search-input"
            type="text" 
            placeholder="Search genes, reports, or history..." 
            className="w-full bg-transparent text-3xl md:text-5xl font-black text-main placeholder-sub/30 focus:outline-none uppercase tracking-tight"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-card-hover rounded-full transition-colors">
            <X size={32} className="text-sub hover:text-accent" />
          </button>
          {/* Tactical scanning line effect */}
          <div className="absolute bottom-[-2px] left-0 h-[2px] bg-accent w-full scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-500" />
        </div>

        <div className="mt-8 overflow-y-auto max-h-[70vh] space-y-2 pr-2 custom-scrollbar">
          {results.length === 0 && query && (
             <div className="text-center mt-20 space-y-4 animate-in fade-in zoom-in duration-300">
               <div className="inline-block p-4 border border-border-main bg-card rounded-full opacity-50">
                 <Search size={48} className="text-sub" />
               </div>
               <p className="text-sub text-xl font-light">No matching intelligence found for <span className="text-main font-bold">"{query}"</span>.</p>
             </div>
          )}
          
          {results.map((result, idx) => (
            <button 
              key={`${result.type}-${result.id}-${idx}`}
              onClick={() => {
                onNavigate(result.type, result.data);
                onClose();
              }}
              className="w-full text-left p-4 md:p-6 bg-card border border-border-main hover:border-accent hover:bg-card-hover transition-all group flex items-center justify-between animate-in slide-in-from-bottom-2 duration-300 fill-mode-both"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                <div className="p-3 bg-page rounded-lg border border-border-main text-accent shrink-0 group-hover:scale-110 group-hover:bg-accent/10 transition-all">
                  {result.type === 'gene' && <Dna size={24} />}
                  {result.type === 'article' && <FileText size={24} />}
                  {result.type === 'log' && <Clock size={24} />}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent px-2 py-0.5 rounded shrink-0">
                      {result.type}
                    </span>
                    <span className="text-xs text-sub font-mono truncate"><Highlight text={result.subtitle} query={query} /></span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-main group-hover:text-accent transition-colors truncate">
                    <Highlight text={result.title} query={query} />
                  </h4>
                </div>
              </div>
              <ArrowRight size={24} className="text-sub group-hover:text-accent -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
