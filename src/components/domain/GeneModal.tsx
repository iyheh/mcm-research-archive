import { useEffect } from 'react';
import { X, Microscope, Sparkles, ArrowRight, Database } from 'lucide-react';
import { ProteinViewer, GenePattern, ThemeMode } from '../../Visuals';

export const GeneModal = ({ gene, onClose, theme, onDeepDive, articles }: { gene: any, onClose: () => void, theme: ThemeMode, onDeepDive: (gene: any) => void, articles: any[] }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!gene) return null;

  const relatedArticle = articles.find((a: any) => {
    if (gene.article_id) return Number(a.id) === Number(gene.article_id);
    return (a.title && a.title.toLowerCase().includes(gene.name.toLowerCase())) || 
           (a.summary && a.summary.toLowerCase().includes(gene.name.toLowerCase()));
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Modal Container: Fullscreen on Mobile, Centered Card on Desktop */}
      <div className="bg-card border-t md:border border-border-main w-full md:max-w-3xl h-[95dvh] md:h-auto md:max-h-[90vh] overflow-hidden relative z-10 shadow-2xl flex flex-col rounded-t-2xl md:rounded-xl">
        
        {/* Close Button (Floating) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-accent hover:text-accent-contrast text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          
          {/* Tactical 3D Scan Area */}
          <div className="relative h-[40dvh] md:h-96 w-full bg-page overflow-hidden border-b border-accent group shrink-0">
             {gene.uniprot_id ? (
               <ProteinViewer uniprotId={gene.uniprot_id} fallbackSeed={gene.name} theme={theme} />
             ) : (relatedArticle && (relatedArticle as any).image) ? (
               <>
                 <img 
                   src={(relatedArticle as any).image} 
                   alt="Subject Scan" 
                   className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale contrast-125 brightness-75" 
                 />
                 <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20"></div>
               </>
             ) : (
               <GenePattern seed={gene.name} className="opacity-30" theme={theme} />
             )}
             
             <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent">
               <div>
                 <span className="text-[10px] font-bold text-accent uppercase tracking-widest border border-accent px-2 py-1 bg-black/80 backdrop-blur-sm shadow-sm mb-2 inline-block">
                   Target ID: {gene.name}
                 </span>
                 <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-xl filter block">
                   {gene.name}
                 </h2>
                 <div className="flex items-center gap-2 mt-2">
                   <p className="text-accent font-mono text-xs md:text-sm font-bold tracking-wider uppercase bg-black/50 px-2 py-0.5 backdrop-blur-md border border-accent/20">
                     // {gene.full_name}
                   </p>
                   {gene.uniprot_id && <span className="text-[10px] bg-accent text-accent-contrast px-2 py-0.5 rounded font-bold shadow-sm">3D MODEL</span>}
                 </div>
               </div>
             </div>
          </div>

          <div className="p-6 md:p-10 space-y-8 bg-card">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-accent flex items-center border-b border-border-main pb-2 uppercase tracking-wide">
                <Microscope size={20} className="mr-2" />
                Analysis Result
              </h3>
              <p className="text-main leading-loose text-lg md:text-xl font-light">
                {gene.insight}
              </p>
            </div>

            {/* Deep Insight Action */}
            {gene.deepDive && (
              <button 
                onClick={() => onDeepDive(gene)}
                className="w-full bg-accent text-accent-contrast p-5 md:p-6 flex items-center justify-between group hover:scale-[1.02] transition-all shadow-xl active:scale-95 rounded-sm"
              >
                <div className="flex items-center gap-4">
                   <div className="bg-accent-contrast/10 p-2 hidden md:block">
                     <Sparkles size={24} />
                   </div>
                   <div className="text-left">
                     <p className="text-xs font-black uppercase tracking-widest opacity-80">Intelligence Access</p>
                     <p className="text-lg md:text-2xl font-black uppercase">Launch Deep Insight Report</p>
                   </div>
                </div>
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </button>
            )}

            {relatedArticle && (
              <div className="bg-card-hover p-6 border border-border-main hover:border-accent transition-colors">
                 <h4 className="text-xs font-bold text-sub uppercase tracking-widest mb-4 flex items-center">
                   <Database size={12} className="mr-2" /> Source Data
                 </h4>
                 <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <p className="text-main font-bold leading-tight text-lg">{relatedArticle.title}</p>
                      <p className="text-sub text-xs mt-1 font-mono">{relatedArticle.date}</p>
                    </div>
                    <a href={relatedArticle.link} target="_blank" rel="noreferrer" className="text-center md:text-left bg-card border border-border-main hover:bg-accent hover:text-accent-contrast text-main px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap">
                      Read Article
                    </a>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
