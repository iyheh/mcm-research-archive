import { useState, useEffect, useCallback } from 'react';
import { Dna, Menu, X, Sun, Moon, Search } from 'lucide-react';
import { 
  projectInfo, geneAnalysis, glossary,
  projectInfoEn, lungDataEn, ovarianDataEn, sarcomaDataEn, glossaryEn
} from './data/index';
import articlesDataKo from './data.json';
import articlesDataEn from './dataEn.json';
import { GridBackground, ThemeMode, DeepDiveReport } from './Visuals';
import { HistoryTimeline, LogDetailModal } from './HistoryTimeline';
import { HistoryLog, projectHistoryKo, projectHistoryEn } from './data/projectHistory';

// Components
import { GeneModal } from './components/domain/GeneModal';
import { Dashboard } from './pages/Dashboard';
import { StatisticsPage } from './pages/StatisticsPage';
import { AnalysisPage } from './pages/AnalysisPage';
import { WikiPage } from './pages/WikiPage';
import { ArchiveList } from './pages/ArchiveList';
import { SearchOverlay } from './components/ui/SearchOverlay';

// --- Data Helper ---
const geneAnalysisEn = {
  lung: lungDataEn,
  ovarian: ovarianDataEn,
  sarcoma: sarcomaDataEn
};

// --- Main App ---

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState<ThemeMode>('clinical');
  const [lang, setLang] = useState<'ko' | 'en'>('en');
  const [deepDiveGene, setDeepDiveGene] = useState<any>(null);
  const [selectedGene, setSelectedGene] = useState<any>(null); // Managed globally for UI overlay
  const [selectedLog, setSelectedLog] = useState<HistoryLog | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Data Selection based on Language
  const currentProjectInfo = lang === 'ko' ? projectInfo : projectInfoEn;
  const currentGeneAnalysis = lang === 'ko' ? geneAnalysis : geneAnalysisEn;
  const currentGlossary = lang === 'ko' ? glossary : glossaryEn;
  const currentArticles = lang === 'ko' ? articlesDataKo : articlesDataEn;
  const currentHistoryLogs = lang === 'ko' ? projectHistoryKo : projectHistoryEn;

  // --- Router Logic (Hash-based) ---
  const updateHash = useCallback((tab: string, type?: 'gene' | 'log', id?: string, action?: 'deep-dive') => {
    let newHash = `#${tab}`;
    if (type && id) {
      newHash += `/${type}/${encodeURIComponent(id)}`;
      if (action) {
        newHash += `/${action}`;
      }
    }
    window.location.hash = newHash;
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove '#'
      const parts = hash.split('/');
      const tab = parts[0] || 'dashboard';
      const type = parts[1];
      const id = parts[2] ? decodeURIComponent(parts[2]) : null;
      const action = parts[3]; // 'deep-dive'

      // Update active tab
      setActiveTab(tab);

      // Reset states initially
      setSelectedGene(null);
      setSelectedLog(null);
      setDeepDiveGene(null);

      if (!type) return;

      if (type === 'gene' && id) {
        // Find gene
        let foundGene: any = null;
        Object.values(currentGeneAnalysis).forEach((category: any) => {
          const gene = category.genes.find((g: any) => g.name === id);
          if (gene) foundGene = gene;
        });

        if (action === 'deep-dive' && foundGene && foundGene.deepDive) {
          setDeepDiveGene(foundGene);
        } else {
          setSelectedGene(foundGene);
        }
      } else if (type === 'log' && id) {
        const foundLog = currentHistoryLogs.find((l) => l.id === id);
        setSelectedLog(foundLog || null);
      }
    };

    // Initialize
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentGeneAnalysis, currentHistoryLogs]); 

  // Wrappers for UI interactions to use Router
  const handleTabChange = (tabId: string) => {
    updateHash(tabId);
    if(isMenuOpen) setIsMenuOpen(false);
  };

  const handleGeneSelect = (gene: any) => {
    updateHash('analysis', 'gene', gene.name);
  };

  const handleLogSelect = (log: HistoryLog) => {
    updateHash('history', 'log', log.id);
  };

  const handleCloseModal = () => {
    updateHash(activeTab);
  };

  const handleDeepDive = (gene: any) => {
    updateHash('analysis', 'gene', gene.name, 'deep-dive');
  };

  const handleSearchNavigate = (type: 'gene' | 'article' | 'log', data: any) => {
    if (type === 'gene') {
      handleGeneSelect(data);
    } else if (type === 'log') {
      handleLogSelect(data);
    } else if (type === 'article') {
      window.open(data.link, '_blank');
    }
    setIsSearchOpen(false);
  };

  // When exiting deep dive via UI button, we want to go back to gene modal
  const handleExitDeepDive = () => {
    if (deepDiveGene) {
      updateHash('analysis', 'gene', deepDiveGene.name);
    } else {
      updateHash('analysis');
    }
  };


  if (deepDiveGene) {
    return (
      <div className={`min-h-screen bg-page text-main font-sans selection:bg-accent selection:text-accent-contrast transition-colors duration-300 ${theme === 'clinical' ? 'theme-clinical' : ''}`}>
        <DeepDiveReport gene={deepDiveGene} theme={theme} onBack={handleExitDeepDive} />
      </div>
    );
  }

  const TabButton = ({ id, label, mobile = false }: { id: string, label: string, mobile?: boolean }) => (
    <button 
      onClick={() => handleTabChange(id)} 
      className={`px-4 py-2 text-xs font-bold transition-all rounded-md uppercase ${
        activeTab === id 
          ? 'bg-card-hover text-main shadow-sm' 
          : 'text-sub hover:text-main hover:bg-card-hover/50'
      } ${mobile ? 'w-full text-left py-4 text-sm' : ''}`}
    >
      {label}
    </button>
  );

  return (
    <div className={`min-h-screen bg-page text-main flex flex-col font-sans relative selection:bg-accent selection:text-accent-contrast transition-colors duration-300 ${theme === 'clinical' ? 'theme-clinical' : ''}`}>
      <GridBackground theme={theme} />
      
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSearchNavigate}
        data={{
          genes: currentGeneAnalysis,
          articles: currentArticles,
          history: currentHistoryLogs
        }}
      />

      {/* Gene Modal - High Z-index to cover everything including nav */}
      {selectedGene && (
        <GeneModal 
          gene={selectedGene} 
          onClose={handleCloseModal} 
          theme={theme} 
          onDeepDive={handleDeepDive} 
          articles={currentArticles} 
        />
      )}

      {selectedLog && (
        <LogDetailModal 
          log={selectedLog}
          onClose={handleCloseModal}
        />
      )}

      {/* Navigation */}
      <nav className={`bg-page/90 backdrop-blur-sm border-b border-border-main sticky top-0 z-50 transition-all duration-500 ${selectedGene || selectedLog ? 'opacity-20 blur-sm pointer-events-none' : 'opacity-100 blur-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleTabChange('dashboard')}>
              <div className="bg-main text-bg-page p-1.5 group-hover:bg-accent transition-colors"><Dna size={24} strokeWidth={3} /></div>
              <span className="font-black text-2xl text-main tracking-tighter">MCM<span className="text-accent">.INSIGHT</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex gap-1 bg-card p-1 rounded-lg border border-border-main">
                {[
                  { id: 'dashboard', label: 'dashboard' },
                  { id: 'statistics', label: 'statistics' },
                  { id: 'analysis', label: 'analysis' },
                  { id: 'history', label: 'history' },
                  { id: 'wiki', label: 'wiki' },
                  { id: 'archive', label: 'archive' }
                ].map(tab => (
                  <TabButton key={tab.id} id={tab.id} label={tab.label} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIsSearchOpen(true)} className="p-2 text-sub hover:text-accent transition-colors bg-card border border-border-main rounded-md">
                   <Search size={20} />
                </button>
                <button 
                  onClick={() => setLang(l => l === 'ko' ? 'en' : 'ko')} 
                  className="p-2 text-xs font-black text-sub hover:text-accent transition-colors bg-card border border-border-main rounded-md flex items-center gap-1 uppercase w-16 justify-center"
                >
                  {lang === 'ko' ? 'KR' : 'EN'}
                </button>
                <button onClick={() => setTheme(t => t === 'tech' ? 'clinical' : 'tech')} className="p-2 text-sub hover:text-accent transition-colors bg-card border border-border-main rounded-md">{theme === 'tech' ? <Sun size={20} /> : <Moon size={20} />}</button>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 text-main">
                <Search size={24} />
              </button>
              <button className="p-2 text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-page border-b border-border-main shadow-2xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-200">
             {[
                { id: 'dashboard', label: 'dashboard' },
                { id: 'statistics', label: 'statistics' },
                { id: 'analysis', label: 'analysis' },
                { id: 'history', label: 'history' },
                { id: 'wiki', label: 'wiki' },
                { id: 'archive', label: 'archive' }
             ].map(tab => (
                <TabButton key={tab.id} id={tab.id} label={tab.label} mobile={true} />
             ))}
             <div className="flex gap-2 mt-4 pt-4 border-t border-border-main">
                <button 
                  onClick={() => setLang(l => l === 'ko' ? 'en' : 'ko')} 
                  className="flex-1 p-3 text-sm font-black text-sub hover:text-accent transition-colors bg-card border border-border-main rounded-md uppercase"
                >
                  {lang === 'ko' ? 'KOREAN' : 'ENGLISH'}
                </button>
                <button onClick={() => setTheme(t => t === 'tech' ? 'clinical' : 'tech')} className="flex-1 p-3 text-sub hover:text-accent transition-colors bg-card border border-border-main rounded-md flex justify-center items-center">
                  {theme === 'tech' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
             </div>
          </div>
        )}
      </nav>

      <main className={`flex-1 max-w-7xl mx-auto px-4 md:px-6 pb-20 w-full z-10 transition-all duration-500 ${selectedGene || selectedLog ? 'blur-md' : 'blur-0'}`}>
        {activeTab === 'dashboard' && <Dashboard info={currentProjectInfo} analysis={currentGeneAnalysis} />}
        {activeTab === 'statistics' && <StatisticsPage theme={theme} />}
        {activeTab === 'analysis' && <AnalysisPage theme={theme} onGeneClick={handleGeneSelect} analysis={currentGeneAnalysis} />}
        {activeTab === 'history' && <HistoryTimeline lang={lang} onLogSelect={handleLogSelect} />}
        {activeTab === 'wiki' && <WikiPage glossary={currentGlossary} />}
        {activeTab === 'archive' && <ArchiveList articles={currentArticles} />}
      </main>
    </div>
  );
}

export default App;
