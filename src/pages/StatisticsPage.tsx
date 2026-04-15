import { useState, useEffect } from 'react';
import { Clock, Zap, Database, Users } from 'lucide-react';
import { StatCard } from '../components/ui/StatCard';
import { ServerActivityChart, ThemeMode } from '../Visuals';
import { serverStats as initialStats } from '../serverData';
import type { ServerHistoryEntry, ServerStats } from '../types/content';

const STATS_CACHE_KEY = 'mcm_server_stats:v2';

const parseSortableDate = (value: string) => {
  const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    return Date.UTC(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3]));
  }

  const dottedMatch = value.match(/^(\d{4})\.(\d{2})\.(\d{2})$/);
  if (dottedMatch) {
    return Date.UTC(Number(dottedMatch[1]), Number(dottedMatch[2]) - 1, Number(dottedMatch[3]));
  }

  const slashMatch = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (slashMatch) {
    return Date.UTC(Number(slashMatch[3]), Number(slashMatch[1]) - 1, Number(slashMatch[2]));
  }

  return 0;
};

const sortHistoryDescending = (history: ServerHistoryEntry[]) =>
  [...history].sort((left, right) => parseSortableDate(right.date) - parseSortableDate(left.date));

const normalizeStats = (stats: ServerStats): ServerStats => ({
  ...stats,
  history: sortHistoryDescending(stats.history),
});

export const StatisticsPage = ({ theme }: { theme: ThemeMode }) => {
  const [stats, setStats] = useState<ServerStats>(() => {
    // Priority 1: Check localStorage for previously successful fetch
    try {
      const cached = localStorage.getItem(STATS_CACHE_KEY);
      if (cached) {
        return normalizeStats(JSON.parse(cached) as ServerStats);
      }
    } catch {
      return normalizeStats(initialStats);
    }
    return normalizeStats(initialStats);
  });

  useEffect(() => {
    // Dynamic fetch to get the absolute latest data from JSON
    fetch(`${import.meta.env.BASE_URL}server_stats.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load server stats');
        }
        return res.json();
      })
      .then(data => {
        const finalData = normalizeStats(data as ServerStats);
        setStats(finalData);
        // Update cache for future use
        try {
          localStorage.setItem(STATS_CACHE_KEY, JSON.stringify(finalData));
        } catch {
          // Ignore cache write failures and keep the fresh in-memory data.
        }
      })
      .catch(() => {
        // Fallback handled by state initialization if fetch fails,
        // but we can force a sort on the current state just in case
        setStats((prev) => normalizeStats(prev));
      });
  }, []);

  const formatRuntime = (raw: string) => {
    if (!raw) return "";
    const parts = raw.split(':');
    if (parts.length !== 5) return raw; // Fallback if format doesn't match
    // y, d, h, m, s
    const units = ['y', 'd', 'h', 'm', 's'];
    return parts.map((part, i) => `${parseInt(part)}${units[i]}`).join(' ');
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 pt-4">
      <div className="border-b border-border-main pb-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-main uppercase tracking-tighter mb-2">Live Grid Status</h2>
        <p className="text-sub font-mono text-sm">Real-time data synchronization with World Community Grid</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <StatCard label="Today's Run Time" value={formatRuntime(stats.runtime)} sub="Global Contribution" icon={Clock} isLive={true} />
        <StatCard label="Points Generated" value={stats.points} sub="Computed Data" icon={Zap} isLive={true} />
        <StatCard label="Results Returned" value={stats.results} sub="Packets Processed" icon={Database} isLive={true} />
        <StatCard label="Active Volunteers" value="82,400+" sub="Global Grid Nodes" icon={Users} isLive={true} />
      </div>
      <div className="mb-8 bg-card border border-border-main p-4 md:p-6 relative overflow-hidden group">
        <div className="flex justify-between items-end mb-6">
          <div><h3 className="text-lg md:text-xl font-black text-main uppercase tracking-tight">Computation Output</h3><p className="text-sub text-xs font-bold uppercase tracking-widest mt-1">Daily Results Returned (Last 14 Days)</p></div>
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
              {stats.history.map((log, i) => (
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
