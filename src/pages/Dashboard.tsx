import { Dna, Microscope, Cpu, FileText } from 'lucide-react';
import { StatusIndicator } from '../Visuals';
import { StatCard } from '../components/ui/StatCard';
import { SectionHeader } from '../components/ui/SectionHeader';

export const Dashboard = ({ info, analysis }: { info: any, analysis: any }) => (
  <div className="space-y-16 animate-in fade-in duration-500 relative z-10">
    <div className="py-8 md:py-12 border-b border-border-main">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-6">
        <div>
          <StatusIndicator />
          <h1 className="text-5xl md:text-8xl font-black text-main mt-6 mb-4 leading-none tracking-tighter">
            {info.title}
          </h1>
          <p className="text-lg md:text-xl text-sub max-w-2xl font-light">
            {info.description}
          </p>
        </div>
        <div className="block md:block text-left md:text-right mt-4 md:mt-0">
           <p className="text-5xl md:text-6xl font-black text-accent tabular-nums">11<span className="text-2xl text-sub">YRS</span></p>
           <p className="text-sub text-sm font-bold uppercase tracking-widest mt-1">Research Duration</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard icon={Dna} {...info.stats[1]} />
      <StatCard icon={Microscope} {...info.stats[2]} />
      <StatCard icon={Cpu} {...info.stats[3]} />
      <StatCard icon={FileText} label="Research Papers" value="16+" sub="Published Findings" />
    </div>
    {/* Key Research Highlights */}
    <div className="pt-8">
      <SectionHeader title="Target Sectors" sub="Active Research Areas" icon={Dna} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(analysis).map(([key, data]: any) => {
          const status = key === 'lung' ? 'Analysis' : key === 'ovarian' ? 'Computation' : 'Paused';
          const isActive = status !== 'Paused';
          
          return (
            <div key={key} className={`group bg-card border ${isActive ? 'border-border-main hover:border-accent' : 'border-border-main/50 opacity-70'} p-8 transition-all duration-300 shadow-sm relative overflow-hidden flex flex-col min-h-[280px] md:min-h-[320px]`}>
              {/* Visual Accent Bar */}
              <div className={`absolute top-0 left-0 h-1.5 w-full ${isActive ? 'bg-accent' : 'bg-border-main'}`} />
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${isActive ? 'bg-accent/10 text-accent' : 'bg-sub/10 text-sub'}`}>
                    Phase: {status}
                  </span>
                  {status === 'Computation' && <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>}
                </div>
                
                <h3 className={`text-2xl font-black mb-4 uppercase tracking-tighter whitespace-nowrap ${isActive ? 'text-main' : 'text-sub'}`}>
                  {data.title}
                </h3>
                <p className="text-sub leading-loose font-light text-base">
                  {data.description}
                </p>
              </div>

              {/* Subtle background icon */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Dna size={120} strokeWidth={1} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
