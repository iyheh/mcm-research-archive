import { CountUp } from '../../Visuals';

export const StatCard = ({ label, value, sub, icon: Icon, isLive = false }: any) => (
  <div className={`bg-card p-6 border-l-4 ${isLive ? 'border-accent bg-card-hover' : 'border-border-main'} hover:border-accent transition-all duration-200 group relative overflow-hidden shadow-sm`}>
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-2">
        <p className={`text-xs font-bold uppercase tracking-widest ${isLive ? 'text-accent' : 'text-sub'}`}>{label}</p>
        {isLive && <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>}
      </div>
      <Icon size={20} className={`${isLive ? 'text-accent' : 'text-sub'} group-hover:text-accent transition-colors`} />
    </div>
    <h3 className="text-4xl font-black text-main mb-1 tracking-tight">
      <CountUp value={value} />
    </h3>
    <p className="text-sm text-sub font-medium group-hover:text-accent transition-colors opacity-80">{sub}</p>
  </div>
);
