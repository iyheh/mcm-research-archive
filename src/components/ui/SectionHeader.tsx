export const SectionHeader = ({ title, sub, icon: Icon }: any) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-2 border-border-main pb-4 gap-4">
    <div className="flex items-center space-x-4">
      <div className="bg-accent text-accent-contrast p-3">
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-main tracking-tight uppercase">{title}</h2>
      </div>
    </div>
    {sub && <p className="text-sub font-bold text-sm uppercase tracking-wide text-left md:text-right ml-16 md:ml-0">{sub}</p>}
  </div>
);
