import React from 'react';
import { Polaroid } from './scrapbook/Polaroid';
import { Tape } from './scrapbook/Tape';
import { PaperClip } from './scrapbook/PaperClip';
import { Stamp } from './scrapbook/Stamp';
import { SectionDivider } from './scrapbook/SectionDivider';
import { ArrowRight, BookOpen, PenTool, Star } from 'lucide-react';

interface HomeProps {
  onExplore?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onExplore }) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-8">

      {/* Hero Section */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 -mt-4 sm:-mt-6 lg:-mt-8 mb-8 py-6 sm:py-8 lg:py-10 px-8 sm:px-12 lg:px-16 overflow-hidden rounded-t-sm shadow-md border-b border-[#3c2f25]">
        {/* Dark textured background */}
        <div className="absolute inset-0 bg-[#2b1f17]">
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url("/stucco.png")' }}></div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2b1f17] via-[#241a13] to-[#16100b] opacity-100"></div>
        </div>

        {/* Floating Decorative Doodles */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <BookOpen className="absolute top-10 left-10 w-12 h-12 text-scrapbook-tan animate-float" />
          <PenTool className="absolute bottom-20 right-10 w-8 h-8 text-scrapbook-tan animate-float" style={{ animationDelay: '1s' }} />
          <Star className="absolute top-20 right-20 w-6 h-6 text-scrapbook-tan animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="inline-block relative">
            <h2 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-scrapbook-paper via-scrapbook-tan to-scrapbook-glow transform -rotate-1 drop-shadow-lg py-2">
              Academic Journal
            </h2>
            <p className="mt-4 font-serif text-xl sm:text-2xl text-scrapbook-paper/80 italic max-w-2xl mx-auto font-light">
              A creative, evidence-based scrapbook documenting Professional Skills Module learning, milestones, and reflections.
            </p>
          </div>

          {/* Student Profile Glass Card */}
          <div className="relative mt-6 w-full max-w-sm animate-reveal-up stagger-2">
            <PaperClip variant="gold" className="-top-8 -left-2" />
            <div className="glass rounded-xl p-5 transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              <Stamp text="VERIFIED" color="red" rotation="-rotate-12" className="-top-2 -right-4 opacity-50 scale-75" />

              <div className="relative z-10 space-y-2 text-left">
                <div className="flex items-center gap-3 mb-3 border-b border-white/20 pb-3">
                  <div className="w-10 h-10 rounded-full bg-scrapbook-tan/20 flex items-center justify-center border border-white/30 flex-shrink-0">
                    <span className="font-display font-bold text-lg text-scrapbook-paper">RA</span>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-scrapbook-tan font-bold">Student Log</div>
                    <div className="font-handwriting text-2xl text-scrapbook-paper leading-none mt-1">Rahul Arambepola</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-sm text-scrapbook-paper/80">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-scrapbook-tan/70 mb-0.5">Reg No</span>
                    <span className="font-medium text-scrapbook-paper">SA24610322</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-scrapbook-tan/70 mb-0.5">Campus</span>
                    <span className="font-medium text-scrapbook-paper">SLIIT City Uni</span>
                  </div>
                  <div className="col-span-2 mt-1.5 pt-1.5 border-t border-white/10">
                    <span className="block text-[10px] uppercase tracking-wider text-scrapbook-tan/70 mb-0.5">Module</span>
                    <span className="font-medium text-scrapbook-paper">Professional Skills - IT1215</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Introduction Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-6">
        <div className="lg:col-span-6 space-y-4">
          <h3 className="font-handwriting text-4xl text-scrapbook-ink transform rotate-1 inline-block relative">
            What is this Portfolio?
            <span className="absolute bottom-1 left-0 w-full h-[2px] bg-scrapbook-accent/50 -rotate-1 rounded-full"></span>
          </h3>
          <p className="font-serif text-lg leading-relaxed text-scrapbook-ink/90">
            This portfolio functions as a literal <strong className="text-scrapbook-ink font-semibold">"Harbor of Sheets"</strong>, a dedicated, organized space designed to preserve coursework, technical skills, and reflections.
          </p>
          <p className="font-serif text-lg leading-relaxed text-scrapbook-ink/90">
            Rather than a dry CV or file directory, this site uses a physical <b>scrapbook layout</b> to emphasize that academic growth is an active, iterative, and tangible process. Through polaroid layouts, sticky notes, and sketches, each section acts as a preservation of progress.
          </p>
        </div>

        {/* Polaroid Graphic */}
        <div className="lg:col-span-6 relative mx-auto w-full max-w-xl">
          <Polaroid
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600"
            alt="Scrapbook Cover"
            caption="Documenting the Journey"
            rotation="right"
          >
            <Tape variant="rose" className="-top-4 right-10 z-50 rotate-12" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-8" />

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto">
        <h3 className="font-handwriting text-4xl text-center text-scrapbook-ink transform -rotate-2 mb-6">
          The Journey Ahead
        </h3>

        <div className="relative border-l-2 border-dashed border-scrapbook-tan/40 ml-4 space-y-8 pb-4">

          {/* Node 1 */}
          <div className="relative pl-8">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-scrapbook-accent shadow-[0_0_10px_rgba(201,149,107,0.5)] border-2 border-scrapbook-paper z-10"></div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-scrapbook-accent mb-1">Week 1-3</h4>
            <h5 className="font-display font-semibold text-2xl text-scrapbook-ink mb-2">Foundation & Self</h5>
            <p className="font-serif text-scrapbook-ink/70 text-sm max-w-md">Understanding the "Harbor" concept, building visual stories, and developing emotional intelligence.</p>
          </div>

          {/* Node 2 */}
          <div className="relative pl-8">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-scrapbook-paper border-2 border-scrapbook-tan z-10"></div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-scrapbook-tan mb-1">Week 4-5</h4>
            <h5 className="font-display font-semibold text-2xl text-scrapbook-ink mb-2">Professional Output</h5>
            <p className="font-serif text-scrapbook-ink/70 text-sm max-w-md">Crafting industry-ready CVs and conducting comprehensive academic and market research.</p>
          </div>

          {/* Node 3 */}
          <div className="relative pl-8">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-scrapbook-paper border-2 border-scrapbook-tan z-10"></div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-scrapbook-tan mb-1">Week 6-8</h4>
            <h5 className="font-display font-semibold text-2xl text-scrapbook-ink mb-2">Leadership & Action</h5>
            <p className="font-serif text-scrapbook-ink/70 text-sm max-w-md">Managing meetings, negotiating effectively, and demonstrating team leadership skills.</p>
          </div>

        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-scrapbook-bg text-scrapbook-paper py-8 relative overflow-hidden paper-shadow my-10 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("/stucco.png")' }}></div>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-around items-center gap-6 relative z-10 font-display">
          <div className="text-center group">
            <div className="text-5xl font-bold text-scrapbook-accent mb-2 transition-transform group-hover:scale-110 duration-300">8</div>
            <div className="text-sm uppercase tracking-widest text-scrapbook-paper/60">Weeks</div>
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-scrapbook-tan/30 to-transparent hidden sm:block"></div>
          <div className="text-center group">
            <div className="text-5xl font-bold text-scrapbook-accent mb-2 transition-transform group-hover:scale-110 duration-300">3</div>
            <div className="text-sm uppercase tracking-widest text-scrapbook-paper/60">Pillars</div>
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-scrapbook-tan/30 to-transparent hidden sm:block"></div>
          <div className="text-center group">
            <div className="text-5xl font-bold text-scrapbook-accent mb-2 transition-transform group-hover:scale-110 duration-300">1</div>
            <div className="text-sm uppercase tracking-widest text-scrapbook-paper/60">Journey</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center pb-6 px-4">
        <button
          onClick={onExplore}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-bold tracking-widest uppercase text-scrapbook-bg bg-scrapbook-accent rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,149,107,0.4)]"
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 flex items-center gap-3">
            Explore the Journal
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </section>

    </div>
  );
};
