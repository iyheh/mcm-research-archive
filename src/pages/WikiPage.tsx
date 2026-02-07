export const WikiPage = ({ glossary }: { glossary: any[] }) => (
  <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 relative z-10 pt-10">
    <div className="text-center border-b border-border-main pb-12"><h2 className="text-4xl md:text-6xl font-black text-main mb-4 tracking-tighter">WIKI</h2><p className="text-accent font-bold tracking-widest uppercase">Terminology Database</p></div>
    <div className="grid gap-6">{glossary.map((item, idx) => (<div key={idx} className="bg-card p-6 md:p-8 border border-border-main hover:border-accent transition-all group"><h3 className="text-xl md:text-2xl font-black text-main mb-4 group-hover:text-accent transition-colors">{item.term}</h3><p className="text-sub leading-relaxed text-base md:text-lg">{item.def}</p></div>))}</div>
  </div>
);
