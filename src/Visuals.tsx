import { useEffect, useRef, useState } from 'react';
import { Dna, Zap } from 'lucide-react';

// Theme Type Definition
export type ThemeMode = 'tech' | 'clinical';

interface ThemeProps {
  theme: ThemeMode;
}

// --- 1. Grid Background ---
export const GridBackground = ({ theme }: ThemeProps) => {
  const isTech = theme === 'tech';
  const bgColor = isTech ? '#09090b' : '#f8fafc';
  const dotColor = isTech ? '#3f3f46' : '#cbd5e1';
  const vignette = isTech 
    ? 'radial-gradient(circle at center, transparent 0%, #09090b 100%)' 
    : 'radial-gradient(circle at center, transparent 0%, #f8fafc 100%)';

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
        backgroundSize: '32px 32px',
        opacity: 1
      }}
    >
      <div 
        className="absolute inset-0 opacity-80 transition-all duration-500"
        style={{ background: vignette }}
      />
    </div>
  );
};

// --- 2. CountUp ---
export const CountUp = ({ value, duration = 1500 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const match = value.match(/([\d.]+)(.*)/);
  const targetNumber = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 3);
      setDisplayValue(targetNumber * ease);
      if (progress < duration) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetNumber, duration]);

  const isFloat = targetNumber % 1 !== 0;
  return (
    <span>
      {isFloat ? displayValue.toFixed(1) : Math.floor(displayValue)}
      <span className="text-sm ml-1 opacity-80">{suffix}</span>
    </span>
  );
};

// --- 3. Status Indicator ---
export const StatusIndicator = () => (
  <div className="flex items-center space-x-2 text-xs font-bold text-accent bg-card border border-border-main px-3 py-1 rounded-full transition-colors shadow-sm">
    <div className="relative w-2 h-2">
      <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
      <div className="absolute inset-0 bg-accent rounded-full"></div>
    </div>
    <span className="tracking-wider uppercase">System Operational</span>
  </div>
);

// --- 4. Gene Pattern (Enhanced Digital Scan Mode) ---
export const GenePattern = ({ seed, className, theme = 'tech' }: { seed: string, className?: string, theme?: ThemeMode }) => {
  const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const isTech = theme === 'tech';
  const baseColor = isTech ? '163, 230, 53' : '2, 132, 199'; // Neon Lime or Blue
  
  const generateBarcode = () => {
    let gradients = [];
    // Random vertical bars
    for (let i = 0; i < 12; i++) {
      const pos = (hash * (i + 1.5)) % 100;
      const width = ((hash * (i + 0.7)) % 2) + 0.1;
      const opacity = (((hash * (i + 2)) % 20) + 5) / 100;
      gradients.push(`linear-gradient(90deg, transparent ${pos}%, rgba(${baseColor}, ${opacity}) ${pos}%, rgba(${baseColor}, ${opacity}) ${pos + width}%, transparent ${pos + width}%)`);
    }
    // Subtle horizontal grid lines
    gradients.push(`linear-gradient(0deg, rgba(${baseColor}, 0.05) 1px, transparent 1px)`);
    return gradients.join(', ');
  };

  return (
    <div className={`w-full h-full bg-transparent overflow-hidden ${className}`}>
      <div 
        className="w-full h-full relative"
        style={{ 
          backgroundImage: generateBarcode(), 
          backgroundSize: '100% 100%, 100% 40px' 
        }}
      >
        {/* Animated Horizontal Scanline (Descending) */}
        <div className="absolute inset-x-0 h-[2px] bg-accent/50 animate-scan-vertical pointer-events-none" />
      </div>
    </div>
  );
};

// --- 5. Protein 3D Viewer ---
export const ProteinViewer = ({ uniprotId, fallbackSeed, theme }: { uniprotId: string, fallbackSeed: string, theme: ThemeMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const viewerRef = useRef<any>(null);

  const bgColor = theme === 'tech' ? '#09090b' : '#f8fafc';
  const cartoonColor = theme === 'tech' ? '#a3e635' : '#0284c7';
  const stickColor = theme === 'tech' ? '#ffffff' : '#1e293b';

  // Handle Theme Changes
  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.setBackgroundColor(bgColor);
      viewerRef.current.setStyle({}, { 
        cartoon: { color: cartoonColor, opacity: 0.9, thickness: 0.5 },
        stick: { color: stickColor, radius: 0.1, opacity: 0.3 }
      });
      viewerRef.current.render();
    }
  }, [theme, bgColor, cartoonColor, stickColor]);

  // Handle Resize and Initialization
  useEffect(() => {
    let animationFrameId: number;

    const initViewer = () => {
      if (!uniprotId || !containerRef.current || !(window as any).$3Dmol) {
        setError(true);
        return;
      }

      const { clientWidth, clientHeight } = containerRef.current;
      
      // Critical: Only initialize if dimensions are valid
      if (clientWidth > 0 && clientHeight > 0) {
        if (!viewerRef.current) {
          viewerRef.current = (window as any).$3Dmol.createViewer(containerRef.current, { backgroundColor: bgColor });
        }
        
        setLoading(true);
        setError(false);
        const pdbUrl = `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-model_v6.pdb`;
        
        fetch(pdbUrl)
          .then(r => r.ok ? r.text() : Promise.reject())
          .then(data => {
            if (!viewerRef.current) return;
            viewerRef.current.clear();
            viewerRef.current.addModel(data, "pdb");
            viewerRef.current.setStyle({}, { 
              cartoon: { color: cartoonColor, opacity: 0.9, thickness: 0.5 },
              stick: { color: stickColor, radius: 0.1, opacity: 0.3 }
            });
            viewerRef.current.zoomTo();
            viewerRef.current.render();
            viewerRef.current.spin('y', 0.5);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          });
      } else {
        // Retry next frame if size is still 0
        animationFrameId = requestAnimationFrame(initViewer);
      }
    };

    animationFrameId = requestAnimationFrame(initViewer);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (viewerRef.current) {
        viewerRef.current.clear();
        viewerRef.current = null;
      }
    };
  }, [uniprotId, bgColor, cartoonColor, stickColor]);

  const handleResize = () => {
    if (viewerRef.current && containerRef.current) {
      viewerRef.current.resize();
      viewerRef.current.render();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (error) return <GenePattern seed={fallbackSeed} className="opacity-30" theme={theme} />;

  return (
    <div className="relative w-full h-full group">
      {loading && <div className="absolute inset-0 flex items-center justify-center bg-card z-10"><div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div></div>}
      <div ref={containerRef} className="w-full h-full cursor-move" />
      <div className="absolute bottom-4 right-4 text-[10px] text-accent font-bold uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">Interactive 3D Model</div>
    </div>
  );
};

// --- 6. ServerActivityChart ---
export const ServerActivityChart = ({ data, theme }: { data: any[], theme: ThemeMode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  if (!data || data.length === 0) return null;

  const values = data.map(d => d.results);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const width = 1000;
  const height = 300;
  const paddingX = 40;
  const paddingY = 40;
  const getX = (i: number) => (i / (values.length - 1)) * (width - paddingX * 2) + paddingX;
  const getY = (v: number) => (height - paddingY * 2) - ((v - min) / range) * (height - paddingY * 2) + paddingY;
  const points = values.map((v, i) => `${getX(i)},${getY(v)}`).join(' ');
  const areaPath = `${paddingX},${height - paddingY} ${points} ${width - paddingX},${height - paddingY}`;

  const accentColor = theme === 'tech' ? '#a3e635' : '#0284c7';
  const gridColor = theme === 'tech' ? '#333' : '#e2e8f0';

  return (
    <div ref={containerRef} className="w-full h-64 relative group cursor-crosshair" 
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) setActiveIndex(Math.max(0, Math.min(values.length - 1, Math.round(((e.clientX - rect.left) / rect.width) * (values.length - 1)))));
      }}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs><linearGradient id={`g-${theme}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={accentColor} stopOpacity="0.2" /><stop offset="100%" stopColor={accentColor} stopOpacity="0" /></linearGradient></defs>
        <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke={gridColor} strokeWidth="1" />
        <polyline points={areaPath} fill={`url(#g-${theme})`} stroke="none" />
        <polyline points={points} fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" className="drop-shadow-sm" />
        {activeIndex !== null && (
          <g>
            <line x1={getX(activeIndex)} y1={paddingY} x2={getX(activeIndex)} y2={height - paddingY} stroke={accentColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <circle cx={getX(activeIndex)} cy={getY(values[activeIndex])} r="6" fill={theme === 'tech' ? '#09090b' : '#fff'} stroke={accentColor} strokeWidth="3" />
          </g>
        )}
      </svg>
      {activeIndex !== null && (
        <div className="absolute top-0 bg-card border border-accent p-3 rounded shadow-2xl z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full" style={{ left: `${(activeIndex / (values.length - 1)) * 100}%`, top: '10%' }}>
           <p className="text-[10px] text-sub font-bold uppercase tracking-widest mb-1">{data[activeIndex].date}</p>
           <div className="flex items-end gap-2"><span className="text-xl font-black text-main">{data[activeIndex].results.toLocaleString()}</span><span className="text-xs text-accent font-bold mb-1">RES</span></div>
        </div>
      )}
    </div>
  );
};

// --- 7. Image Helper with Scroll-Based Focus (Polished) ---
const ImageWithFocus = ({ src, alt }: { src: string, alt: string }) => {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFocused(entry.isIntersecting);
      },
      { 
        threshold: 0.5,
        rootMargin: "-15% 0px -15% 0px"
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className={`transition-all duration-1000 ease-out flex items-center justify-center ${isFocused ? 'scale-105 z-20' : 'scale-100 z-10'}`}>
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-auto shadow-2xl rounded-sm transition-all duration-1000 ${
            isFocused ? 'opacity-100' : 'opacity-20'
          }`} 
        />
      </div>
    </div>
  );
};

// --- 8. Deep Dive Report View ---
export const DeepDiveReport = ({ gene, theme, onBack }: { gene: any, theme: ThemeMode, onBack: () => void }) => {
  const [activeSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!gene.deepDive) return null;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-700 bg-page min-h-screen relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-border-main p-6 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-sub hover:text-accent transition-all group">
           <div className="p-2 border border-border-main group-hover:border-accent">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
           </div>
           <span className="font-black uppercase tracking-tighter">Exit Lab Analysis</span>
        </button>
        <div className="flex gap-4 items-center">
           <span className="text-[10px] font-bold text-sub uppercase tracking-widest border-r border-border-main pr-4">Subject: {gene.name}</span>
           <div className="flex gap-1">
             {gene.deepDive.sections.map((_: any, i: number) => (
               <div key={i} className={`h-1 w-8 transition-all duration-300 ${i === activeSection ? 'bg-accent w-12' : 'bg-border-main'}`}></div>
             ))}
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scroll-smooth" ref={scrollContainerRef}>
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-40">
          {/* Hero Section */}
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="space-y-4">
              <span className="bg-accent text-accent-contrast px-3 py-1 text-xs font-black uppercase tracking-widest">Deep Insight Report</span>
              <h1 className="text-6xl md:text-8xl font-black text-main tracking-tighter leading-none">
                {gene.deepDive.story.title}
              </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="p-8 bg-card border-l-8 border-accent shadow-2xl relative z-10">
                <div className="absolute -top-4 -left-4 bg-accent text-accent-contrast p-2 text-xs font-bold">ANALOGY</div>
                <p className="text-2xl font-light italic leading-relaxed text-main">
                  "{gene.deepDive.story.analogy}"
                </p>
              </div>
              <div className="h-64 rounded-xl overflow-visible relative group">
                <ProteinViewer uniprotId={gene.uniprot_id} fallbackSeed={gene.name} theme={theme} />
                <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </section>

          {/* Detailed Sections */}
          {gene.deepDive.sections.map((section: any, idx: number) => {
            const hasVisual = section.figure || section.multiFigures;
            return (
              <section key={idx} className="pt-24 border-t border-border-main/30 grid lg:grid-cols-2 gap-20 items-stretch">
                <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="flex items-center gap-4">
                     <div className="bg-accent/10 px-3 py-1 border border-accent/20">
                       <span className="text-2xl font-black text-accent">0{idx+1}</span>
                     </div>
                     <h2 className="text-4xl font-black text-main uppercase tracking-tight">{section.title}</h2>
                  </div>
                  
                  <p className="text-xl text-sub leading-loose font-light">
                    {section.content.split(/('.*?')/).map((part: string, i: number) => 
                      part.startsWith("'") ? <span key={i} className="text-accent font-bold border-b border-accent/30">{part.replace(/'/g, '')}</span> : part
                    )}
                  </p>
                </div>
                
                <div className="flex flex-col">
                  {section.multiFigures ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {section.multiFigures.map((fig: any, fIdx: number) => (
                        <div key={fIdx} className="space-y-4">
                          <div className="relative flex items-center justify-center">
                               <ImageWithFocus src={fig.url} alt={fig.label} />
                          </div>
                          <p className="text-[10px] text-center font-bold text-sub uppercase tracking-tighter">
                             {fig.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : section.figure ? (
                    <div className="relative flex items-center justify-center">
                      <ImageWithFocus src={section.figure} alt={section.title} />
                      <div className="absolute top-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-1 backdrop-blur-sm border border-white/20 z-30 opacity-50">SOURCE: WCG RESEARCH</div>
                    </div>
                  ) : (
                    <div className="relative flex-1 min-h-[300px] flex flex-col items-center justify-center overflow-hidden">
                       <GenePattern seed={section.id} className="absolute inset-0 opacity-40" theme={theme} />
                    </div>
                  )}
                  {/* Separate area for caption only if visual exists */}
                  {(section.figure || section.multiFigures) && (
                    <div className="pt-4 border-t border-border-main/20">
                      <p className="text-xs text-sub font-mono uppercase tracking-widest text-center opacity-60">
                        // {section.figureCaption}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            );
          })}

          <section className="bg-main text-bg-page p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
             <h2 className="text-5xl font-black uppercase tracking-tighter">Research Conclusion</h2>
             <p className="text-3xl font-light max-w-3xl mx-auto leading-tight">
               "{gene.deepDive.conclusion}"
             </p>
             <button onClick={onBack} className="bg-accent text-accent-contrast px-8 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform">
               Return to Analysis Lab
             </button>
             <div className="absolute bottom-4 left-0 right-0 h-4 opacity-10">
               <GenePattern seed="Conclusion" theme={theme} />
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};