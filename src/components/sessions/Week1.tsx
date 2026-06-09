import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';

export const Week1: React.FC = () => {
  return (
    <div className="space-y-20 py-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

      {/* Intro & Harbor Concept */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h3 className="font-handwriting text-5xl mb-8 text-scrapbook-ink transform -rotate-1">The "Harbor" Concept</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif">
              A portfolio is literally a <strong className="text-scrapbook-ink">"Harbor of your sheets"</strong> — a safe place where work, ideas, and creations are collected, preserved, and displayed.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <StickyNote color="tan" rotation="left" className="flex-1 hover:-translate-y-1 transition-transform">
                <Tape className="-top-4 left-1/2 -translate-x-1/2" />
                <strong className="block text-lg mb-1 font-handwriting text-3xl">Port (Harbor)</strong>
                A place to dock or store treasures safely.
              </StickyNote>

              <StickyNote color="yellow" rotation="right" className="flex-1 hover:-translate-y-1 transition-transform">
                <Tape className="-top-4 left-1/2 -translate-x-1/2" />
                <strong className="block text-lg mb-1 font-handwriting text-3xl">Folio (Sheet)</strong>
                A collection of pages or ideas.
              </StickyNote>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <Polaroid
              src="/1.png"
              alt="Etymology Diagram"
              caption="Visual Theory: The Harbor"
              rotation="right"
            >
              <Tape className="-top-4 right-1/2 translate-x-1/2 z-50 -rotate-2" />
            </Polaroid>
          </div>
        </div>

        {/* Portfolio Theory, Formats & Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <StickyNote color="blue" rotation="left" className="hover:-translate-y-1 transition-transform">
            <Tape className="-top-4 left-6 -rotate-6" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-blue-200 pb-1">Main Functions</h4>
            <ul className="list-disc pl-5 space-y-2 text-scrapbook-ink/90 text-[15px]">
              <li>Presenting yourself</li>
              <li>Organizing history</li>
              <li>Discovering strengths</li>
            </ul>
          </StickyNote>

          <StickyNote color="pink" rotation="right" className="hover:-translate-y-1 transition-transform">
            <Tape className="-top-4 right-6 rotate-6" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-pink-200 pb-1">Formats</h4>
            <ul className="list-disc pl-5 space-y-2 text-scrapbook-ink/90 text-[15px]">
              <li><strong>Hard-copy:</strong> Physical documents, physical folders, binders</li>
              <li><strong>Digital:</strong> Websites, PDF, cloud drives, social channels</li>
            </ul>
          </StickyNote>

          <StickyNote color="yellow" rotation="left" className="hover:-translate-y-1 transition-transform">
            <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-2" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-yellow-200 pb-1">Platforms</h4>
            <ul className="space-y-2 text-scrapbook-ink/90 text-sm">
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">Developers:</strong> GitHub Pages</li>
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">Designers:</strong> Adobe Portfolio, Cargo</li>
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">Writers:</strong> Journo Portfolio</li>
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">General:</strong> Squarespace, Pathbrite</li>
            </ul>
          </StickyNote>
        </div>
      </section>

      {/* Visual Story & Group Task */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">

        <div className="lg:col-span-5 relative mx-auto w-full max-w-sm">
          <Polaroid
            src="/2.png"
            alt="Mind Map Diagram"
            caption="Portfolio Applications"
            rotation="left"
          >
            <Tape className="-top-4 left-4 z-50 rotate-3" />
          </Polaroid>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="relative group">
            <h3 className="font-handwriting text-4xl text-scrapbook-ink transform rotate-1 transition-transform group-hover:rotate-0">
              Task 1: The Group Portfolio
            </h3>
            <p className="font-serif mt-2 mb-6 text-scrapbook-ink/80">
              Collaborative creation defining <strong>"Who We Are"</strong> as a team, mapping collective skills, and establishing semester goals.
            </p>

            <div className="bg-scrapbook-paperDark p-8 rounded-sm shadow-inner relative overflow-hidden transition-all duration-300 hover:shadow-md border border-scrapbook-tan/20">
              {/* Notebook lines effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundSize: '100% 2rem', backgroundImage: 'linear-gradient(to bottom, transparent 1.9rem, #b59275 2rem)' }}></div>

              <ul className="space-y-6 text-scrapbook-ink/90 font-handwriting text-2xl relative z-10 pl-6">
                <li className="relative before:content-['✓'] before:absolute before:-left-6 before:text-green-700 hover:text-scrapbook-ink transition-colors">Defined "Who We Are" as a team.</li>
                <li className="relative before:content-['✓'] before:absolute before:-left-6 before:text-green-700 hover:text-scrapbook-ink transition-colors">Mapped out collective technical skills.</li>
                <li className="relative before:content-['✓'] before:absolute before:-left-6 before:text-green-700 hover:text-scrapbook-ink transition-colors">Established shared goals for the semester.</li>
              </ul>
            </div>

            {/* Outcome Tag */}
            <div className="mt-6 block bg-[#e3d5bb]/50 border-l-4 border-scrapbook-tan p-4 rounded-r-md font-serif text-scrapbook-ink/90 text-[15px]">
              <span className="font-bold uppercase tracking-wider text-xs block text-scrapbook-tan mb-1">Outcome:</span>
              A unified document demonstrating teamwork, communication, and reflection on collaborative potential.
            </div>
          </div>
        </div>

      </section>

      {/* Individual Task: Personal vs. Career */}
      <section className="relative mt-20 pt-10 border-t border-scrapbook-tan/25 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h3 className="font-handwriting text-4xl mb-6 text-scrapbook-ink transform -rotate-1">Individual Task: Personal vs. Career</h3>
        <p className="font-serif text-lg leading-relaxed text-scrapbook-ink/90 max-w-3xl mb-10">
          Exploring two distinct paths of self-presentation based on goals, content focus, and layout requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Personal Portfolio */}
          <div className="relative group">
            <Tape className="-top-3 left-12 z-20 rotate-12" />
            <div className="bg-[#fef9c3] border-t-8 border-[#fde047] p-8 shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-300 rounded-sm">
              <h4 className="font-handwriting text-3xl text-scrapbook-ink mb-1">Personal Portfolio</h4>
              <p className="font-serif text-xs uppercase tracking-widest text-amber-700 font-bold mb-4">Focus: Hobbies, interests, creative expression</p>
              
              <p className="font-serif text-sm text-scrapbook-ink/80 leading-relaxed mb-6">
                A space to share personal stories, projects, and creative works with a focus on visual and written self-expression.
              </p>

              <div className="border-t border-[#fde047] pt-4">
                <span className="font-handwriting text-xl text-scrapbook-ink block mb-2">Examples:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#fde047]/60 px-3 py-1 rounded-full text-xs font-serif text-scrapbook-ink font-semibold">Photography</span>
                  <span className="bg-[#fde047]/60 px-3 py-1 rounded-full text-xs font-serif text-scrapbook-ink font-semibold">Travel Blog</span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Portfolio */}
          <div className="relative group">
            <Tape className="-top-3 right-12 z-20 -rotate-12" />
            <div className="bg-[#e0f2fe] border-t-8 border-[#7dd3fc] p-8 shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-300 rounded-sm">
              <h4 className="font-handwriting text-3xl text-scrapbook-ink mb-1">Career Portfolio</h4>
              <p className="font-serif text-xs uppercase tracking-widest text-blue-700 font-bold mb-4">Focus: Employability, skills, certifications</p>
              
              <p className="font-serif text-sm text-scrapbook-ink/80 leading-relaxed mb-6">
                An evidence-based professional showcase targeted at recruiters, containing projects, accomplishments, and skills.
              </p>

              <div className="border-t border-[#7dd3fc] pt-4">
                <span className="font-handwriting text-xl text-scrapbook-ink block mb-2">Examples:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#7dd3fc]/60 px-3 py-1 rounded-full text-xs font-serif text-scrapbook-ink font-semibold">CV / Resume</span>
                  <span className="bg-[#7dd3fc]/60 px-3 py-1 rounded-full text-xs font-serif text-scrapbook-ink font-semibold">Project Evidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="pt-16 pb-8 relative border-t border-scrapbook-tan/25 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h3 className="font-handwriting text-5xl mb-10 text-center text-scrapbook-ink">Reflections</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <StickyNote title="What I Learned" color="blue" rotation="left" className="hover:-translate-y-2 transition-all duration-300">
            <Tape className="-top-4 right-10" />
            <ul className="space-y-4 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>
                <strong>The “Harbor” Mindset:</strong> A portfolio is a continuous storage system. Preserving work now ensures readiness for future opportunities.
              </li>
              <li>
                <strong>Platform Selection:</strong> Context matters. LinkedIn and GitHub are crucial for professional visibility.
              </li>
              <li>
                <strong>Collaboration:</strong> Learned to merge diverse writing styles and formatting into a unified team voice.
              </li>
            </ul>
          </StickyNote>

          <StickyNote title="How I Will Apply It" color="green" rotation="right" className="hover:-translate-y-2 transition-all duration-300">
            <Tape className="-top-4 left-10" />
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px]">
              <li>
                <strong>Immediate Application:</strong> Create an organized “Harbor” folder structure for all semester assignments.
              </li>
              <li>
                <strong>Future Application:</strong> Build an evidence-based career portfolio for internship applications.
              </li>
            </ul>
          </StickyNote>
        </div>
      </section>

    </div>
  );
};
