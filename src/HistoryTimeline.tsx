import { HistoryLog, projectHistoryEn, projectHistoryKo } from './data/projectHistory';
import { FileText, Calendar, ArrowRight, X, Terminal, Download, ExternalLink } from 'lucide-react';

interface TimelineProps {
  lang: 'ko' | 'en';
  onLogSelect: (log: HistoryLog) => void;
}

export const LogDetailModal = ({ log, onClose }: { log: HistoryLog, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="bg-card border border-accent w-full max-w-2xl relative z-10 shadow-2xl shadow-accent/20 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-border-main bg-card-hover">
          <div className="flex items-center gap-3">
             <div className="bg-accent/10 p-2 border border-accent/20">
               <Terminal size={20} className="text-accent" />
             </div>
             <div>
               <p className="text-xs font-mono text-accent mb-1">LOG_ID: {log.id}</p>
               <h3 className="text-xl font-black text-main uppercase tracking-tight">{log.title}</h3>
             </div>
          </div>
          <button onClick={onClose} className="text-sub hover:text-accent transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex items-center gap-4 text-xs font-mono text-sub border-b border-border-main pb-4">
             <span className="flex items-center gap-1"><Calendar size={14} /> {log.date}</span>
             <span className="text-accent">|</span>
             <span className="uppercase">{log.category}</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-main uppercase tracking-wider">Summary</h4>
            <p className="text-lg text-main leading-relaxed font-light">
              {log.summary}
            </p>
          </div>

          <div className="space-y-3 bg-card-hover p-4 border-l-2 border-accent/50">
             <h4 className="text-xs font-bold text-sub uppercase tracking-wider">Key Findings & Details</h4>
             <ul className="space-y-2">
               {log.details.map((detail, idx) => (
                 <li key={idx} className="flex items-start gap-2 text-sm text-sub">
                   <span className="text-accent mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                   <span className="leading-relaxed">{detail}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Footer / Actions */}
        <div className="p-6 border-t border-border-main bg-card-hover flex justify-end gap-4">
           <a 
             href={log.pdf.startsWith('http') ? log.pdf : `${import.meta.env.BASE_URL}${log.pdf.replace(/^\//, '')}`} 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 px-4 py-2 bg-card border border-border-main hover:bg-accent hover:text-accent-contrast hover:border-accent text-main text-xs font-bold uppercase tracking-wider transition-all"
           >
             <ExternalLink size={16} /> Open PDF
           </a>
           <a 
             href={log.pdf.startsWith('http') ? log.pdf : `${import.meta.env.BASE_URL}${log.pdf.replace(/^\//, '')}`} 
             download
             className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-contrast border border-accent hover:brightness-110 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-accent/20"
           >
             <Download size={16} /> Download Log
           </a>
        </div>
      </div>
    </div>
  );
};

export const HistoryTimeline = ({ lang, onLogSelect }: TimelineProps) => {
  const historyData = lang === 'ko' ? projectHistoryKo : projectHistoryEn;

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 relative z-10 pt-10 pb-20">
      <div className="text-center border-b border-border-main pb-12">
        <h2 className="text-4xl md:text-6xl font-black text-main mb-4 tracking-tighter">PROJECT HISTORY</h2>
      </div>

      <div className="relative border-l-2 border-border-main ml-4 md:ml-24 space-y-12">
        {historyData.map((log, index) => {
          const showYear = index === 0 || log.year !== historyData[index - 1].year;
          
          return (
            <div key={log.id} className="relative pl-8 md:pl-12 group">
              {/* Year Label (Desktop) */}
              {showYear && (
                <div className="absolute -left-20 top-[-4px] hidden md:block text-right">
                  <span className="text-sm font-mono font-black text-border-main group-hover:text-accent transition-colors duration-300">
                    {log.year}
                  </span>
                </div>
              )}

              {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0 bg-page border-2 border-border-main text-sub w-4 h-4 rounded-full group-hover:border-accent group-hover:scale-125 transition-all duration-300 z-10"></div>
            
            {/* Content Card */}
            <div 
              onClick={() => onLogSelect(log)}
              className="bg-card border border-border-main p-6 md:p-8 hover:border-accent hover:bg-card-hover hover:translate-x-2 transition-all duration-300 cursor-pointer shadow-sm group-hover:shadow-md relative overflow-hidden mt-2"
            >
               {/* Header Row: Date & Category */}
               <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2">
                   <Calendar size={14} className="text-accent" />
                   <span className="text-sm font-mono font-bold text-accent">
                     {log.date}
                   </span>
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-sub/10 text-sub rounded group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                   {log.category.replace('_', ' ')}
                 </span>
               </div>

               <h3 className="text-xl md:text-2xl font-black text-main uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                 {log.title}
               </h3>

               <p className="text-sub font-light leading-relaxed mb-6 line-clamp-2 group-hover:text-main transition-colors">
                 {log.summary}
               </p>

               <div className="flex items-center gap-2 text-xs font-bold text-sub uppercase tracking-wider group-hover:text-accent transition-colors">
                 <FileText size={16} />
                 <span>Read Analysis Log</span>
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
