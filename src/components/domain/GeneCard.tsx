import { ArrowRight } from 'lucide-react';
import { GenePattern, ThemeMode } from '../../Visuals';

export const GeneCard = ({ gene, onClick, theme }: { gene: any, onClick: (gene: any) => void, theme: ThemeMode }) => (
  <div 
    onClick={() => onClick(gene)}
    className="bg-card border border-border-main hover:border-accent hover:bg-card-hover transition-all duration-200 cursor-pointer group h-full flex flex-col relative overflow-hidden shadow-sm hover:shadow-md"
  >
    <div className="h-1.5 w-full opacity-50 group-hover:opacity-100 transition-opacity">
       <GenePattern seed={gene.name} theme={theme} />
    </div>
    <div className="p-5 flex flex-col h-full justify-between">
      <div className="mb-4">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-bold text-sub border border-border-main px-2 py-1 uppercase tracking-wider group-hover:text-accent group-hover:border-accent transition-colors">
            {gene.role}
          </span>
          <ArrowRight size={16} className="text-sub group-hover:text-accent -translate-x-2 group-hover:translate-x-0 transition-all" />
        </div>
        <h4 className="text-2xl font-black text-main mb-1 group-hover:text-accent transition-colors">
          {gene.name}
        </h4>
        <p className="text-xs text-sub font-bold uppercase tracking-wide truncate">{gene.full_name}</p>
      </div>
      <p className="text-sm text-sub line-clamp-2 leading-relaxed group-hover:text-main transition-colors">
        {gene.insight}
      </p>
    </div>
  </div>
);
