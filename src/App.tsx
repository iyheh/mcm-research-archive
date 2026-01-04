import { useState, useEffect } from 'react';
import { 
  Dna, FileText, 
  Microscope, ArrowRight, Database, Users, X, Cpu, Clock, Zap, Sun, Moon, Sparkles, Globe 
} from 'lucide-react';
import { 
  projectInfo, geneAnalysis, glossary,
  projectInfoEn, lungDataEn, ovarianDataEn, sarcomaDataEn, glossaryEn
} from './data/index';
import articlesDataKo from './data.json';
import articlesDataEn from './dataEn.json';
import { serverStats as initialStats } from './serverData';
import { GridBackground, CountUp, StatusIndicator, GenePattern, ProteinViewer, ServerActivityChart, ThemeMode, DeepDiveReport } from './Visuals';

// --- Data Helper ---
const geneAnalysisEn = {
  lung: lungDataEn,
  ovarian: ovarianDataEn,
  sarcoma: sarcomaDataEn
};

// --- Components ---

const StatCard = ({ label, value, sub, icon: Icon, isLive = false }: any) => (
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

const GeneModal = ({ gene, onClose, theme, onDeepDive, articles }: { gene: any, onClose: () => void, theme: ThemeMode, onDeepDive: (gene: any) => void, articles: any[] }) => {
  if (!gene) return null;

  const relatedArticle = articles.find((a: any) => {
    if (gene.article_id) return Number(a.id) === Number(gene.article_id);
    return (a.title && a.title.toLowerCase().includes(gene.name.toLowerCase())) || 
           (a.summary && a.summary.toLowerCase().includes(gene.name.toLowerCase()));
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-card border border-border-main w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col">
        
        {/* Tactical 3D Scan Area */}
        <div className="relative h-80 w-full bg-page overflow-hidden border-b border-accent group">
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
           
           <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none">
             <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold text-accent uppercase tracking-widest border border-accent px-2 py-1 bg-card/80 backdrop-blur-sm shadow-sm">
                 Target ID: {gene.name}
               </span>
               <button 
                  onClick={onClose}
                  className="pointer-events-auto text-sub hover:text-main transition-colors bg-card/80 p-1 rounded-full hover:bg-accent hover:text-accent-contrast"
                >
                  <X size={24} />
               </button>
             </div>
             <div>
               <h2 className="text-5xl font-black text-main tracking-tighter drop-shadow-xl filter block">
                 {gene.name}
               </h2>
               <div className="flex items-center gap-2 mt-2">
                 <p className="text-accent font-mono text-sm font-bold tracking-wider uppercase bg-card/80 px-2 py-0.5 backdrop-blur-md border border-accent/20">
                   // {gene.full_name}
                 </p>
                 {gene.uniprot_id && <span className="text-[10px] bg-accent text-accent-contrast px-2 py-0.5 rounded font-bold shadow-sm">3D MODEL</span>}
               </div>
             </div>
           </div>
        </div>

        <div className="p-8 space-y-8 bg-card">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent flex items-center border-b border-border-main pb-2 uppercase tracking-wide">
              <Microscope size={20} className="mr-2" />
              Analysis Result
            </h3>
            <p className="text-main leading-loose text-lg font-light">
              {gene.insight}
            </p>
          </div>

          {/* Deep Insight Action */}
          {gene.deepDive && (
            <button 
              onClick={() => onDeepDive(gene)}
              className="w-full bg-accent text-accent-contrast p-6 flex items-center justify-between group hover:scale-[1.02] transition-all shadow-xl active:scale-95"
            >
              <div className="flex items-center gap-4">
                 <div className="bg-accent-contrast/10 p-2">
                   <Sparkles size={24} />
                 </div>
                 <div className="text-left">
                   <p className="text-xs font-black uppercase tracking-widest opacity-80">Intelligence Access</p>
                   <p className="text-xl font-black uppercase">Launch Deep Insight Report</p>
                 </div>
              </div>
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </button>
          )}

          {relatedArticle && (
            <div className="bg-card-hover p-6 border border-border-main hover:border-accent transition-colors">
               <h4 className="text-xs font-bold text-sub uppercase tracking-widest mb-4 flex items-center">
                 <Database size={12} className="mr-2" /> Source Data
               </h4>
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    <p className="text-main font-bold leading-tight">{relatedArticle.title}</p>
                    <p className="text-sub text-xs mt-1 font-mono">{relatedArticle.date}</p>
                  </div>
                  <a href={relatedArticle.link} target="_blank" rel="noreferrer" className="text-center sm:text-left bg-card border border-border-main hover:bg-accent hover:text-accent-contrast text-main px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all">
                    Access Original Article
                  </a>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const GeneCard = ({ gene, onClick, theme }: any) => (
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

const SectionHeader = ({ title, sub, icon: Icon }: any) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-2 border-border-main pb-4 gap-4">
    <div className="flex items-center space-x-4">
      <div className="bg-accent text-accent-contrast p-3">
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <div>
        <h2 className="text-3xl font-black text-main tracking-tight uppercase">{title}</h2>
      </div>
    </div>
    {sub && <p className="text-sub font-bold text-sm uppercase tracking-wide text-right">{sub}</p>}
  </div>
);

// --- Pages ---

const Dashboard = ({ info, analysis }: { info: any, analysis: any }) => (
  <div className="space-y-16 animate-in fade-in duration-500 relative z-10">
    <div className="py-12 border-b border-border-main">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-6">
        <div>
          <StatusIndicator />
          <h1 className="text-5xl md:text-8xl font-black text-main mt-6 mb-4 leading-none tracking-tighter">
            {info.title}
          </h1>
          <p className="text-xl text-sub max-w-2xl font-light">
            {info.description}
          </p>
        </div>
        <div className="hidden md:block text-right">
           <p className="text-6xl font-black text-accent tabular-nums">11<span className="text-2xl text-sub">YRS</span></p>
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
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(analysis).map(([key, data]: any) => {
          const status = key === 'lung' ? 'Analysis' : key === 'ovarian' ? 'Computation' : 'Paused';
          const isActive = status !== 'Paused';
          
          return (
            <div key={key} className={`group bg-card border ${isActive ? 'border-border-main hover:border-accent' : 'border-border-main/50 opacity-70'} p-8 transition-all duration-300 shadow-sm relative overflow-hidden flex flex-col min-h-[320px]`}>
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

const StatisticsPage = ({ theme }: { theme: ThemeMode }) => {
  const [stats, setStats] = useState<any>(initialStats);

  useEffect(() => {
    // Dynamic fetch to get the absolute latest data from JSON
    fetch('/src/server_stats.json')
      .then(res => res.json())
      .then(data => {
        // Explicit sort by date (newest first)
        const sortedHistory = data.history.sort((a: any, b: any) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setStats({ ...data, history: sortedHistory });
      })
      .catch(() => {
        // Fallback to imported data if fetch fails
        const sortedInitial = [...initialStats.history].sort((a: any, b: any) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setStats({ ...initialStats, history: sortedInitial });
      });
  }, []);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 pt-4">
      <div className="border-b border-border-main pb-8 mb-8">
        <h2 className="text-4xl font-black text-main uppercase tracking-tighter mb-2">Live Grid Status</h2>
        <p className="text-sub font-mono text-sm">Real-time data synchronization with World Community Grid</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <StatCard label="Total Run Time" value={stats.runtime} sub="Global Contribution" icon={Clock} isLive={true} />
        <StatCard label="Points Generated" value={stats.points} sub="Computed Data" icon={Zap} isLive={true} />
        <StatCard label="Results Returned" value={stats.results} sub="Packets Processed" icon={Database} isLive={true} />
        <StatCard label="Active Volunteers" value="82,400+" sub="Global Grid Nodes" icon={Users} isLive={true} />
      </div>
      <div className="mb-8 bg-card border border-border-main p-6 relative overflow-hidden group">
        <div className="flex justify-between items-end mb-6">
          <div><h3 className="text-xl font-black text-main uppercase tracking-tight">Computation Output</h3><p className="text-sub text-xs font-bold uppercase tracking-widest mt-1">Daily Results Returned (Last 14 Days)</p></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span><span className="text-accent text-xs font-bold">LIVE DATA</span></div>
        </div>
        <ServerActivityChart data={[...stats.history].reverse()} theme={theme} />
      </div>
      <div className="bg-card border border-border-main overflow-hidden">
        <div className="p-4 border-b border-border-main bg-card-hover flex justify-between items-center"><h3 className="text-sm font-black text-main uppercase tracking-widest">Access Logs // Project History</h3></div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead><tr className="bg-card-hover text-sub border-b border-border-main"><th className="p-3 font-bold uppercase">Date</th><th className="p-3 font-bold uppercase text-right">Points</th><th className="p-3 font-bold uppercase text-right">Results</th></tr></thead>
            <tbody className="divide-y divide-border-main">
              {stats.history.map((log: any, i: number) => (
                <tr key={i} className="hover:bg-accent/5 transition-colors group">
                  <td className="p-3 text-main group-hover:text-accent">{log.date}</td>
                  <td className="p-3 text-right text-main font-bold">{log.points.toLocaleString()}</td>
                  <td className="p-3 text-right text-accent font-bold">{log.results.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AnalysisPage = ({ theme, onDeepDive, analysis, articles }: { theme: ThemeMode, onDeepDive: (gene: any) => void, analysis: any, articles: any[] }) => {
  const [selectedGene, setSelectedGene] = useState<any>(null);
  return (
    <>
      <GeneModal gene={selectedGene} onClose={() => setSelectedGene(null)} theme={theme} onDeepDive={(g) => { setSelectedGene(null); onDeepDive(g); }} articles={articles} />
      <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 pt-10">
        <div className="border-l-4 border-accent pl-8"><h2 className="text-6xl font-black mb-4 text-main uppercase tracking-tighter">Analysis Lab</h2><p className="text-sub max-w-2xl text-2xl font-light">Decoded genetic sequences from distributed computing grid.</p></div>
        {Object.entries(analysis).map(([key, data]: any) => (
          <div key={key} className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-8"><span className="text-accent font-black text-2xl">0{key === 'lung' ? 1 : key === 'ovarian' ? 2 : 3}</span><h3 className="text-4xl font-black text-main uppercase">{data.title}</h3></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{data.genes.map((gene: any) => (<GeneCard key={gene.name} gene={gene} onClick={setSelectedGene} theme={theme} />))}</div>
          </div>
        ))}
      </div>
    </>
  );
};

// --- Main App ---

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState<ThemeMode>('clinical');
  const [lang, setLang] = useState<'ko' | 'en'>('ko'); // Language State
  const [deepDiveGene, setDeepDiveGene] = useState<any>(null);

  // Data Selection based on Language
  const currentProjectInfo = lang === 'ko' ? projectInfo : projectInfoEn;
  const currentGeneAnalysis = lang === 'ko' ? geneAnalysis : geneAnalysisEn;
  const currentGlossary = lang === 'ko' ? glossary : glossaryEn;
  const currentArticles = lang === 'ko' ? articlesDataKo : articlesDataEn;

  if (deepDiveGene) {
    return (
      <div className={`min-h-screen bg-page text-main font-sans selection:bg-accent selection:text-accent-contrast transition-colors duration-300 ${theme === 'clinical' ? 'theme-clinical' : ''}`}>
        <DeepDiveReport gene={deepDiveGene} theme={theme} onBack={() => setDeepDiveGene(null)} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-page text-main flex flex-col font-sans relative selection:bg-accent selection:text-accent-contrast transition-colors duration-300 ${theme === 'clinical' ? 'theme-clinical' : ''}`}>
      <GridBackground theme={theme} />
      <nav className="bg-page/90 backdrop-blur-sm border-b border-border-main sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('dashboard')}>
              <div className="bg-main text-bg-page p-1.5 group-hover:bg-accent transition-colors"><Dna size={24} strokeWidth={3} /></div>
              <span className="font-black text-2xl text-main tracking-tighter">MCM<span className="text-accent">.INSIGHT</span></span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1 bg-card p-1 rounded-lg border border-border-main">
                {['dashboard', 'statistics', 'analysis', 'wiki', 'archive'].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-xs font-bold transition-all rounded-md ${activeTab === tab ? 'bg-card-hover text-main shadow-sm' : 'text-sub hover:text-main hover:bg-card-hover/50'}`}>{tab.toUpperCase()}</button>
                ))}
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setLang(l => l === 'ko' ? 'en' : 'ko')} 
                  className="p-2 text-xs font-black text-sub hover:text-accent transition-colors bg-card border border-border-main rounded-md flex items-center gap-1 uppercase w-16 justify-center"
                >
                  {lang === 'ko' ? 'KR' : 'EN'}
                </button>
                <button onClick={() => setTheme(t => t === 'tech' ? 'clinical' : 'tech')} className="p-2 text-sub hover:text-accent transition-colors bg-card border border-border-main rounded-md">{theme === 'tech' ? <Sun size={20} /> : <Moon size={20} />}</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-7xl mx-auto px-6 pb-20 w-full z-10">
        {activeTab === 'dashboard' && <Dashboard info={currentProjectInfo} analysis={currentGeneAnalysis} />}
        {activeTab === 'statistics' && <StatisticsPage theme={theme} />}
        {activeTab === 'analysis' && <AnalysisPage theme={theme} onDeepDive={setDeepDiveGene} analysis={currentGeneAnalysis} articles={currentArticles} />}
        {activeTab === 'wiki' && <WikiPage glossary={currentGlossary} />}
        {activeTab === 'archive' && <ArchiveList articles={currentArticles} />}
      </main>
    </div>
  );
}

// Helper components moved for brevity but should be defined
const WikiPage = ({ glossary }: { glossary: any[] }) => (
  <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 relative z-10 pt-10">
    <div className="text-center border-b border-border-main pb-12"><h2 className="text-6xl font-black text-main mb-4 tracking-tighter">WIKI</h2><p className="text-accent font-bold tracking-widest uppercase">Terminology Database</p></div>
    <div className="grid gap-6">{glossary.map((item, idx) => (<div key={idx} className="bg-card p-8 border border-border-main hover:border-accent transition-all group"><h3 className="text-2xl font-black text-main mb-4 group-hover:text-accent transition-colors">{item.term}</h3><p className="text-sub leading-relaxed text-lg">{item.def}</p></div>))}</div>
  </div>
);

const ArchiveList = ({ articles }: { articles: any[] }) => (
  <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 relative z-10 pt-10">
    <div className="flex justify-between items-end mb-12 border-b-4 border-main pb-4"><h2 className="text-6xl font-black text-main tracking-tighter">ARCHIVE</h2><span className="text-xl font-bold text-accent">{articles.length} ITEMS</span></div>
    <div className="grid gap-4">{articles.map((article: any) => (<a key={article.id} href={article.link} target="_blank" rel="noreferrer" className="flex flex-col md:flex-row items-start md:items-center justify-between bg-card p-6 border border-border-main hover:bg-accent hover:text-accent-contrast transition-all group"><div className="flex-1"><div className="flex items-center gap-3 mb-2"><span className="text-xs font-bold uppercase tracking-wider border border-border-main px-2 py-0.5 group-hover:border-black/20">{article.category}</span><span className="text-sub text-xs font-bold group-hover:text-accent-contrast/60">{article.date}</span></div><h3 className="text-xl font-bold text-main group-hover:text-accent-contrast transition-colors">{article.title}</h3></div><ArrowRight size={24} className="text-sub mt-4 md:mt-0 group-hover:text-accent-contrast transition-colors" /></a>))}</div>
  </div>
);

export default App;