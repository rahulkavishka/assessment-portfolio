import React from 'react';
import { Polaroid } from './scrapbook/Polaroid';
import { StickyNote } from './scrapbook/StickyNote';
import { Tape } from './scrapbook/Tape';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 py-6 animate-in fade-in slide-in-from-bottom-8 duration-700">

      {/* Scrapbook Header / Cover Style */}
      <section className="text-center space-y-6 relative pb-8 border-b border-scrapbook-tan/20">
        <div className="inline-block relative">
          <h2 className="font-handwriting text-6xl sm:text-7xl text-scrapbook-ink transform -rotate-1 mt-0">
            Academic Journal
          </h2>
        </div>
        <p className="font-serif text-lg sm:text-xl text-scrapbook-ink/80 italic max-w-2xl mx-auto">
          A creative, evidence-based scrapbook documenting Professional Skills Module learning, milestones, and reflections.
        </p>

        {/* Student Profile Index Card */}
        <div className="relative max-w-md mx-auto bg-scrapbook-paperDark/70 border border-scrapbook-tan/30 p-6 rounded-md shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300 mt-6">
          <Tape className="-top-4 left-1/2 -translate-x-1/2 w-28 h-8 rotate-1" />
          <div className="text-center space-y-2 font-serif text-scrapbook-ink">
            <div className="text-xs uppercase tracking-widest text-scrapbook-tan font-bold">Student Log</div>
            <div className="font-handwriting text-3xl text-scrapbook-ink font-semibold">Rahul Arambepola</div>
            <div className="text-sm border-t border-scrapbook-tan/30 pt-2 flex justify-between px-4">
              <span><strong>Reg No:</strong> SA24610322</span>
              <span>SLIIT City Uni</span>
            </div>
            <div className="text-sm border-t border-scrapbook-tan/30 pt-2">
              <strong>Module:</strong> Professional Skills
            </div>
          </div>
        </div>
      </section>

      {/* Main Introduction Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-handwriting text-4xl text-scrapbook-ink transform rotate-1">
            What is this Portfolio?
          </h3>
          <p className="font-serif text-base sm:text-lg leading-relaxed text-scrapbook-ink/90">
            This portfolio functions as a literal <strong className="text-scrapbook-ink">"Harbor of Sheets"</strong>, a dedicated, organized space designed to preserve coursework, technical skills, and reflections.
          </p>
          <p className="font-serif text-base sm:text-lg leading-relaxed text-scrapbook-ink/90">
            Rather than a dry CV or file directory, this site uses a physical <b>scrapbook layout</b> to emphasize that academic growth is an active, iterative, and tangible process. Through polaroid layouts, sticky notes, and sketches, each section acts as a preservation of progress.
          </p>

          <div className="bg-[#e3d5bb]/30 border-l-4 border-scrapbook-tan p-6 rounded-r-md font-serif text-[15px] text-scrapbook-ink/90 space-y-3">
            <h4 className="font-bold text-scrapbook-ink uppercase tracking-wider text-xs">Core Objectives:</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Presenting:</strong> Showcasing technical milestones and collaborative identity.</li>
              <li><strong>Organizing:</strong> Maintaining a visible history of semester achievements.</li>
              <li><strong>Discovering:</strong> Reflecting on strengths and identifying areas for career application.</li>
            </ul>
          </div>
        </div>

        {/* Polaroid Graphic */}
        <div className="lg:col-span-5 relative mx-auto w-full max-w-sm">
          <Polaroid
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600"
            alt="Scrapbook Cover"
            caption="Documenting the Journey"
            rotation="right"
          >
            <Tape className="-top-4 right-10 z-50 rotate-12" />
          </Polaroid>
        </div>
      </section>

      {/* The Pillars of the Scrapbook */}
      <section className="space-y-8 pt-6 border-t border-scrapbook-tan/20">
        <h3 className="font-handwriting text-4xl text-center text-scrapbook-ink transform -rotate-1 mb-8">
          Portfolio Pillars
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Pillar 1: Weekly Sessions */}
          <StickyNote color="tan" rotation="left" className="hover:-translate-y-2 transition-transform duration-300">
            <Tape className="-top-4 left-6 -rotate-6" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-scrapbook-tan pb-1 text-scrapbook-ink">
              1. Weekly Sessions
            </h4>
            <p className="text-sm text-scrapbook-ink/80 leading-relaxed font-serif">
              An active breakdown of each week's deliverables, starting with fundamental etymological concepts in Week 1, and progressing through the semester's material.
            </p>
          </StickyNote>

          {/* Pillar 2: Collaboration */}
          <StickyNote color="blue" rotation="none" className="hover:-translate-y-2 transition-transform duration-300">
            <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-3" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-blue-200 pb-1 text-scrapbook-ink">
              2. Collaboration
            </h4>
            <p className="text-sm text-scrapbook-ink/80 leading-relaxed font-serif">
              Summaries of team tasks, mapping collective skills, defining mutual goals, and demonstrating coordination and reflection on team dynamics.
            </p>
          </StickyNote>

          {/* Pillar 3: Career Planning */}
          <StickyNote color="green" rotation="right" className="hover:-translate-y-2 transition-transform duration-300">
            <Tape className="-top-4 right-6 rotate-6" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-green-200 pb-1 text-scrapbook-ink">
              3. Reflections
            </h4>
            <p className="text-sm text-scrapbook-ink/80 leading-relaxed font-serif">
              A self-reflection zone to analyze what was learned, platform considerations (like GitHub and LinkedIn), and concrete steps for career application.
            </p>
          </StickyNote>
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center pt-8 border-t border-scrapbook-tan/20">
        <p className="font-handwriting text-3xl text-scrapbook-tan transform -rotate-1">
          Use the sidebar to explore the weekly entries.
        </p>
      </section>

    </div>
  );
};
