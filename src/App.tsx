import { useState, useEffect, useRef } from 'react';
import { Menu, X, Image as ImageIcon, Users, Compass, Home as HomeIcon, Brain, FileText, Search, ClipboardList, Handshake, Feather } from 'lucide-react';
import { Week1 } from './components/sessions/Week1';
import { Week2 } from './components/sessions/Week2';
import { Week3 } from './components/sessions/Week3';
import { Week4 } from './components/sessions/Week4';
import { Week5 } from './components/sessions/Week5';
import { Week6 } from './components/sessions/Week6';
import { Week7 } from './components/sessions/Week7';
import { Week8 } from './components/sessions/Week8';
import { Home } from './components/Home';
import { ProgressAndScroll } from './components/ProgressAndScroll';

const SESSIONS = [
  { id: 1, title: 'Week 1: The Harbor', icon: Compass },
  { id: 2, title: 'Week 2: Professional Skills', icon: ImageIcon },
  { id: 3, title: 'Week 3: Emotional Intelligence', icon: Brain },
  { id: 4, title: 'Week 4: CV Writing', icon: FileText },
  { id: 5, title: 'Week 5: Research', icon: Search },
  { id: 6, title: 'Week 6: Writing Agendas & Meetings', icon: ClipboardList },
  { id: 7, title: 'Week 7: Types of Negotiations', icon: Handshake },
  { id: 8, title: 'Week 8: Team Leadership Skills', icon: Users },
];

const WEEK_COMPONENTS: Record<number, React.FC> = {
  1: Week1,
  2: Week2,
  3: Week3,
  4: Week4,
  5: Week5,
  6: Week6,
  7: Week7,
  8: Week8,
};

export default function App() {
  const [activeSession, setActiveSession] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [activeSession]);

  const renderContent = () => {
    if (activeSession === 0) {
      return <Home onExplore={() => setActiveSession(1)} />;
    }
    const WeekComponent = WEEK_COMPONENTS[activeSession];
    if (WeekComponent) {
      return <WeekComponent />;
    }
    return null;
  };

  return (
    <div className="flex h-screen bg-scrapbook-bg text-scrapbook-paper font-serif overflow-hidden selection:bg-scrapbook-tan/30">

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-scrapbook-bg border-b border-white/10 z-40 flex items-center justify-between px-4">
        <h1 className="font-handwriting text-3xl text-scrapbook-paper tracking-wider">Portfolio</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-80 bg-gradient-to-b from-[#1a1612] via-[#1e1915] to-[#16120f] border-r border-white/5 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 ease-out z-40 flex flex-col pt-20 lg:pt-0`}
      >
        {/* Paper Texture Overlay for Sidebar */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("/stucco.png")' }}>
        </div>

        <div className="p-8 hidden lg:block relative z-10 animate-reveal-scale">
          <h1 className="font-handwriting text-5xl text-scrapbook-paper tracking-wider transform -rotate-2">
            PS
            <span className="text-scrapbook-accent ml-4 ink-underline inline-block">Portfolio</span>
          </h1>
          <div className="flex items-center gap-2 mt-4 text-scrapbook-tan opacity-70">
            <Feather size={16} className="transform -scale-x-100" />
            <div className="flex-1 h-px bg-gradient-to-r from-scrapbook-tan/50 to-transparent"></div>
          </div>
        </div>

        <nav className="flex-1 px-4 pb-8 overflow-y-auto space-y-2 mt-4 lg:mt-0 relative z-10 custom-scrollbar">
          <button
            onClick={() => {
              setActiveSession(0);
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${activeSession === 0
              ? 'bg-white/5 text-scrapbook-glow shadow-md border-l-4 border-scrapbook-accent scale-[1.02]'
              : 'text-scrapbook-paper/70 hover:bg-white/5 hover:text-scrapbook-paper border-l-4 border-transparent'
              }`}
          >
            {/* Hover Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer"></div>

            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 relative z-10">
              <HomeIcon size={20} className={`transition-transform duration-300 ${activeSession === 0 ? 'rotate-12' : 'group-hover:-rotate-12'}`} />
            </div>
            <span className="font-medium tracking-wide text-sm uppercase font-sans relative z-10">Home</span>
            {activeSession === 0 && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-scrapbook-glow animate-glow-pulse relative z-10 flex-shrink-0"></div>
            )}
          </button>

          <div className="h-px bg-white/10 my-4 opacity-50"></div>

          {SESSIONS.map((session) => {
            const isActive = activeSession === session.id;
            const Icon = session.icon;
            const weekMatch = session.title.match(/Week (\d+):/);
            const weekNumber = weekMatch ? weekMatch[1] : null;
            const cleanTitle = session.title.replace(/Week \d+: /, '');

            return (
              <button
                key={session.id}
                onClick={() => {
                  setActiveSession(session.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${isActive
                  ? 'bg-white/5 text-scrapbook-glow shadow-md border-l-4 border-scrapbook-accent scale-[1.02]'
                  : 'text-scrapbook-paper/70 hover:bg-white/5 hover:text-scrapbook-paper border-l-4 border-transparent'
                  }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer"></div>

                {weekNumber ? (
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full text-[13px] font-bold font-sans flex-shrink-0 relative z-10 transition-colors ${isActive ? 'bg-scrapbook-accent text-scrapbook-bg' : 'bg-white/10 text-scrapbook-paper/70 group-hover:bg-white/20 group-hover:text-white'}`}>
                    {weekNumber}
                  </div>
                ) : (
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 relative z-10">
                    <Icon size={20} className={`transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:-rotate-12'}`} />
                  </div>
                )}

                <span className="font-medium tracking-wide text-[13px] uppercase font-sans text-left leading-tight relative z-10">{cleanTitle}</span>

                <div className="ml-auto relative z-10 flex-shrink-0">
                  {isActive ? (
                    <div className="w-1.5 h-1.5 rounded-full bg-scrapbook-glow animate-glow-pulse"></div>
                  ) : (
                    <div className={`w-1.5 h-1.5 rounded-full border transition-colors ${session.id < activeSession ? 'border-scrapbook-tan bg-scrapbook-tan/50' : 'border-white/20'}`}></div>
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area (Scrapbook Pages) */}
      <main ref={mainRef} className="flex-1 h-full overflow-y-auto pt-16 lg:pt-0 relative bg-gradient-to-br from-[#120f0d] via-[#1a1512] to-[#0c0a09] scroll-smooth">
        <ProgressAndScroll />

        {/* Subtle noise/texture overlay for the background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("/stucco.png")' }}>
        </div>

        {/* Floating Animated Stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute top-[10%] left-[5%] text-scrapbook-tan/20 w-8 h-8 animate-[pulse_3s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <svg className="absolute top-[30%] right-[8%] text-scrapbook-paper/10 w-12 h-12 animate-[pulse_4s_ease-in-out_infinite_1s]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <svg className="absolute bottom-[20%] left-[10%] text-scrapbook-tan/15 w-6 h-6 animate-[pulse_2.5s_ease-in-out_infinite_2s]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <svg className="absolute top-[60%] right-[15%] text-scrapbook-paper/10 w-10 h-10 animate-[pulse_5s_ease-in-out_infinite_0.5s]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        </div>

        <div className="max-w-6xl mx-auto p-2 sm:p-4 lg:p-6 relative z-10">
          {/* Main Content Container */}
          <div className="bg-scrapbook-paper text-scrapbook-ink rounded-sm shadow-2xl p-4 sm:p-6 lg:p-8 relative min-h-[800px]">

            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none rounded-sm mix-blend-multiply"
              style={{ backgroundImage: 'url("/cream-paper.png")' }}>
            </div>

            {/* Decorative Tape Top Center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-scrapbook-tapeDark backdrop-blur-sm -rotate-2 z-10" style={{ clipPath: 'polygon(0% 10%, 100% 0%, 95% 100%, 5% 90%)' }}></div>

            <div className="relative z-10">
              {renderContent()}
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}