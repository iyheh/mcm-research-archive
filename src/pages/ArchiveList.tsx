import { ArrowRight } from 'lucide-react';

export const ArchiveList = ({ articles }: { articles: any[] }) => (
  <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 relative z-10 pt-10">
    <div className="flex justify-between items-end mb-12 border-b-4 border-main pb-4"><h2 className="text-4xl md:text-6xl font-black text-main tracking-tighter">ARCHIVE</h2><span className="text-lg md:text-xl font-bold text-accent">{articles.length} ITEMS</span></div>
    <div className="grid gap-4">{articles.map((article: any) => (<a key={article.id} href={article.link} target="_blank" rel="noreferrer" className="flex flex-col md:flex-row items-start md:items-center justify-between bg-card p-6 border border-border-main hover:bg-accent hover:text-accent-contrast transition-all group"><div className="flex-1"><div className="flex items-center gap-3 mb-2"><span className="text-xs font-bold uppercase tracking-wider border border-border-main px-2 py-0.5 group-hover:border-black/20">{article.category}</span><span className="text-sub text-xs font-bold group-hover:text-accent-contrast/60">{article.date}</span></div><h3 className="text-lg md:text-xl font-bold text-main group-hover:text-accent-contrast transition-colors">{article.title}</h3></div><ArrowRight size={24} className="text-sub mt-4 md:mt-0 group-hover:text-accent-contrast transition-colors" /></a>))}</div>
  </div>
);
