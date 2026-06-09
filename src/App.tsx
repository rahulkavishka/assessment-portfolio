import { useState } from 'react';
import { Menu, X, Image as ImageIcon, Users, Compass, Home as HomeIcon, Brain, FileText, Search, ClipboardList, Handshake } from 'lucide-react';
import { Week1 } from './components/sessions/Week1';
import { Home } from './components/Home';

const SESSIONS = [
  { id: 1, title: 'Week 1: The Harbor', icon: Compass },
  { id: 2, title: 'Week 2: Visual Story', icon: ImageIcon },
  { id: 3, title: 'Week 3: Emotional Intelligence', icon: Brain },
  { id: 4, title: 'Week 4: CV Writing', icon: FileText },
  { id: 5, title: 'Week 5: Research', icon: Search },
  { id: 6, title: 'Week 6: Writing Agendas & Meetings', icon: ClipboardList },
  { id: 7, title: 'Week 7: Types of Negotiations', icon: Handshake },
  { id: 8, title: 'Week 8: Team Leadership Skills', icon: Users },
];

export default function App() {
  const [activeSession, setActiveSession] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-scrapbook-bg text-scrapbook-paper font-serif overflow-hidden selection:bg-scrapbook-tan/30">

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-scrapbook-bg border-b border-white/10 z-50 flex items-center justify-between px-4">
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
        className={`fixed lg:static inset-y-0 left-0 w-72 bg-scrapbook-bg border-r border-white/5 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col pt-20 lg:pt-0`}
      >
        <div className="p-8 hidden lg:block">
          <h1 className="font-handwriting text-5xl text-scrapbook-paper tracking-wider transform -rotate-2">
            PS
            <br />
            <span className="text-scrapbook-tan ml-4">Portfolio</span>
          </h1>
          <div className="w-12 h-0.5 bg-scrapbook-tan mt-6 opacity-50"></div>
        </div>

        <nav className="flex-1 px-4 pb-8 overflow-y-auto space-y-2 mt-4 lg:mt-0">
          <button
            onClick={() => {
              setActiveSession(0);
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${activeSession === 0
              ? 'bg-scrapbook-paper text-scrapbook-ink shadow-lg scale-[1.02]'
              : 'text-scrapbook-paper/70 hover:bg-white/5 hover:text-scrapbook-paper'
              }`}
          >
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <HomeIcon size={20} className={`transition-transform duration-300 ${activeSession === 0 ? 'rotate-12' : 'group-hover:-rotate-12'}`} />
            </div>
            <span className="font-medium tracking-wide text-sm uppercase font-semibold">Home</span>
            {activeSession === 0 && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-scrapbook-tan animate-pulse"></div>
            )}
          </button>

          <div className="h-px bg-white/10 my-4 opacity-50"></div>

          {SESSIONS.map((session) => {
            const isActive = activeSession === session.id;
            const Icon = session.icon;

            return (
              <button
                key={session.id}
                onClick={() => {
                  setActiveSession(session.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${isActive
                  ? 'bg-scrapbook-paper text-scrapbook-ink shadow-lg scale-[1.02]'
                  : 'text-scrapbook-paper/70 hover:bg-white/5 hover:text-scrapbook-paper'
                  }`}
              >
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className={`transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:-rotate-12'}`} />
                </div>
                <span className="font-medium tracking-wide text-sm uppercase text-left">{session.title}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-scrapbook-tan animate-pulse flex-shrink-0"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer Decoration */}
        <div className="p-8 border-t border-white/5 opacity-50">
          <p className="font-handwriting text-xl text-center">Rahul Arambepola</p>
          <p className="text-xs text-center uppercase tracking-widest mt-2">2026</p>
        </div>
      </aside>

      {/* Main Content Area (Scrapbook Pages) */}
      <main className="flex-1 h-full overflow-y-auto pt-16 lg:pt-0 relative bg-gradient-to-br from-[#1c1815] via-[#231d19] to-[#14110f]">

        {/* Subtle noise/texture overlay for the background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stucco.png")' }}>
        </div>

        {/* Floating Animated Stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute top-[10%] left-[5%] text-scrapbook-tan/20 w-8 h-8 animate-[pulse_3s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <svg className="absolute top-[30%] right-[8%] text-scrapbook-paper/10 w-12 h-12 animate-[pulse_4s_ease-in-out_infinite_1s]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <svg className="absolute bottom-[20%] left-[10%] text-scrapbook-tan/15 w-6 h-6 animate-[pulse_2.5s_ease-in-out_infinite_2s]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <svg className="absolute top-[60%] right-[15%] text-scrapbook-paper/10 w-10 h-10 animate-[pulse_5s_ease-in-out_infinite_0.5s]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        </div>

        <div className="max-w-6xl mx-auto p-4 sm:p-8 lg:p-12 relative z-10">
          {/* Main Content Container */}
          <div className="bg-scrapbook-paper text-scrapbook-ink rounded-sm shadow-2xl p-6 sm:p-10 lg:p-16 relative min-h-[800px]">

            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none rounded-sm mix-blend-multiply"
              style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}>
            </div>

            {/* Decorative Tape Top Center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-scrapbook-tapeDark backdrop-blur-sm -rotate-2 z-10" style={{ clipPath: 'polygon(0% 10%, 100% 0%, 95% 100%, 5% 90%)' }}></div>

            <div className="relative z-10">
              {activeSession === 0 ? (
                <Home />
              ) : activeSession === 1 ? (
                <Week1 />
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 text-center pt-20">
                  <h2 className="font-handwriting text-5xl sm:text-7xl mb-8 transform -rotate-1 text-scrapbook-ink">
                    {SESSIONS.find(s => s.id === activeSession)?.title}
                  </h2>
                  <p className="text-xl italic text-scrapbook-ink/80 max-w-2xl mx-auto font-serif">
                    Content for this session is currently being crafted. The scrapbook layout is ready to hold memories, theories, and reflections.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}