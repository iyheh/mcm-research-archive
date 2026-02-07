import { useState, useEffect } from 'react';
import { Search, X, Dna, FileText, Clock, ArrowRight } from 'lucide-react';

interface SearchResult {
  type: 'gene' | 'article' | 'log';
  id: string | number;
  title: string;
  subtitle?: string;
  data: any;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (type: 'gene' | 'article' | 'log', data: any) => void;
  data: {
    genes: any;
    articles: any[];
    history: any[];
  };
}

export const SearchOverlay = ({ isOpen, onClose, onNavigate, data }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus input on open
      const input = document.getElementById('global-search-input');
      if (input) input.focus();
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search Genes
    if (data.genes) {
      Object.values(data.genes).forEach((category: any) => {
        if (Array.isArray(category?.genes)) {
          category.genes.forEach((gene: any) => {
            const geneName = gene.name?.toLowerCase() || '';
            const geneFullName = gene.full_name?.toLowerCase() || '';
            const geneInsight = gene.insight?.toLowerCase() || '';
            
            if (geneName.includes(lowerQuery) || 
                geneFullName.includes(lowerQuery) ||
                geneInsight.includes(lowerQuery)) {
              newResults.push({
                type: 'gene',
                id: gene.name,
                title: gene.name,
                subtitle: gene.full_name,
                data: gene
              });
            }
          });
        }
      });
    }

    // Search Articles
    if (Array.isArray(data.articles)) {
      data.articles.forEach((article: any) => {
        const title = article.title?.toLowerCase() || '';
        const summary = article.summary?.toLowerCase() || '';

        if (title.includes(lowerQuery) || summary.includes(lowerQuery)) {
          newResults.push({
            type: 'article',
            id: article.id,
            title: article.title,
            subtitle: article.date,
            data: article
          });
        }
      });
    }

    // Search History
    if (Array.isArray(data.history)) {
      data.history.forEach((log: any) => {
        const title = log.title?.toLowerCase() || '';
        const desc = log.desc?.toLowerCase() || '';

        if (title.includes(lowerQuery) || desc.includes(lowerQuery)) {
          newResults.push({
            type: 'log',
            id: log.id,
            title: log.title,
            subtitle: log.date,
            data: log
          });
        }
      });
    }

    setResults(newResults);
  }, [query, data]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-page/95 backdrop-blur-xl animate-in fade-in duration-200 flex flex-col">
      <div className="max-w-4xl w-full mx-auto p-6">
        <div className="flex items-center gap-4 border-b-2 border-accent pb-4">
          <Search size={32} className="text-accent" />
          <input 
            id="global-search-input"
            type="text" 
            placeholder="Search genes, reports, or history..." 
            className="w-full bg-transparent text-3xl md:text-5xl font-black text-main placeholder-sub/30 focus:outline-none uppercase tracking-tight"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-card-hover rounded-full transition-colors">
            <X size={32} className="text-sub" />
          </button>
        </div>

        <div className="mt-8 overflow-y-auto max-h-[80vh] space-y-2">
          {results.length === 0 && query && (
             <p className="text-sub text-xl font-light text-center mt-20">No matching intelligence found.</p>
          )}
          
          {results.map((result, idx) => (
            <button 
              key={`${result.type}-${result.id}-${idx}`}
              onClick={() => {
                onNavigate(result.type, result.data);
                onClose();
              }}
              className="w-full text-left p-6 bg-card border border-border-main hover:border-accent hover:bg-card-hover transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-page rounded-lg border border-border-main text-accent">
                  {result.type === 'gene' && <Dna size={24} />}
                  {result.type === 'article' && <FileText size={24} />}
                  {result.type === 'log' && <Clock size={24} />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent px-2 py-0.5 rounded">
                      {result.type}
                    </span>
                    <span className="text-xs text-sub font-mono">{result.subtitle}</span>
                  </div>
                  <h4 className="text-xl font-bold text-main group-hover:text-accent transition-colors">
                    {result.title}
                  </h4>
                </div>
              </div>
              <ArrowRight size={24} className="text-sub group-hover:text-accent -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
