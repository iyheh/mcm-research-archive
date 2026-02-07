import { GeneCard } from '../components/domain/GeneCard';
import { ThemeMode } from '../Visuals';

export const AnalysisPage = ({ theme, onGeneClick, analysis }: { theme: ThemeMode, onGeneClick: (gene: any) => void, analysis: any }) => {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 pt-10">
      <div className="border-l-4 border-accent pl-4 md:pl-8"><h2 className="text-4xl md:text-6xl font-black mb-4 text-main uppercase tracking-tighter">Analysis Lab</h2><p className="text-sub max-w-2xl text-lg md:text-2xl font-light">Decoded genetic sequences from distributed computing grid.</p></div>
      {Object.entries(analysis).map(([key, data]: any) => (
        <div key={key} className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8"><span className="text-accent font-black text-2xl">0{key === 'lung' ? 1 : key === 'ovarian' ? 2 : 3}</span><h3 className="text-3xl md:text-4xl font-black text-main uppercase">{data.title}</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{data.genes.map((gene: any) => (<GeneCard key={gene.name} gene={gene} onClick={onGeneClick} theme={theme} />))}</div>
        </div>
      ))}
    </div>
  );
};
