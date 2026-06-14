import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { PaperClip } from '../scrapbook/PaperClip';
import { Stamp } from '../scrapbook/Stamp';
import { Compass, Users, User, Lightbulb } from 'lucide-react';

export const Week1: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Intro & Harbor Concept */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="The 'Harbor' Concept" icon={<Compass size={32} />} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif">
              A portfolio is literally a <strong className="text-scrapbook-ink font-semibold">"Harbor of your sheets"</strong> - a safe place where work, ideas, and creations are collected, preserved, and displayed.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 relative">
              <PaperClip variant="silver" className="-top-6 left-10" />

              <StickyNote color="tan" rotation="left" variant="folded" className="flex-1">
                <Tape variant="washi-dots" className="-top-4 left-1/2 -translate-x-1/2" />
                <strong className="block text-lg mb-1 font-handwriting text-3xl">Port (Harbor)</strong>
                A place to dock or store treasures safely.
              </StickyNote>

              <StickyNote color="yellow" rotation="right" variant="pinned" className="flex-1 mt-4 sm:mt-0">
                <strong className="block text-lg mb-1 font-handwriting text-3xl mt-2">Folio (Sheet)</strong>
                A collection of pages or ideas.
              </StickyNote>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <Polaroid
              src="/1.png"
              alt="Etymology Diagram"
              caption="Visual Theory: The Harbor"
              rotation="right"
            >
              <Tape variant="dark" className="-top-4 right-1/2 translate-x-1/2 z-50 -rotate-2" />
            </Polaroid>
          </div>
        </div>

        {/* Portfolio Theory, Formats & Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-6 border-t border-dashed border-scrapbook-tan/30 relative">
          <Stamp text="THEORY" color="black" rotation="-rotate-6" className="-top-6 right-10 opacity-30" />

          <StickyNote color="blue" rotation="left">
            <Tape variant="rose" className="-top-4 left-6 -rotate-6" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-blue-200 pb-1">Main Functions</h4>
            <ul className="list-disc pl-5 space-y-2 text-scrapbook-ink/90 text-[15px]">
              <li>Presenting yourself</li>
              <li>Organizing history</li>
              <li>Discovering strengths</li>
            </ul>
          </StickyNote>

          <StickyNote color="pink" rotation="right" variant="folded">
            <Tape variant="light" className="-top-4 right-6 rotate-6" />
            <h4 className="font-handwriting text-3xl mb-3 border-b border-pink-200 pb-1">Formats</h4>
            <ul className="list-disc pl-5 space-y-2 text-scrapbook-ink/90 text-[15px]">
              <li><strong>Hard-copy:</strong> Physical documents, physical folders, binders</li>
              <li><strong>Digital:</strong> Websites, PDF, cloud drives, social channels</li>
            </ul>
          </StickyNote>

          <StickyNote color="yellow" rotation="left" variant="pinned">
            <h4 className="font-handwriting text-3xl mb-3 border-b border-yellow-200 pb-1 mt-2">Platforms</h4>
            <ul className="space-y-2 text-scrapbook-ink/90 text-sm">
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">Developers:</strong> GitHub Pages</li>
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">Designers:</strong> Adobe Portfolio, Cargo</li>
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">Writers:</strong> Journo Portfolio</li>
              <li><strong className="text-scrapbook-ink font-serif text-[13px]">General:</strong> Squarespace, Pathbrite</li>
            </ul>
          </StickyNote>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Visual Story & Group Task */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 stagger-1">
        <SectionHeader title="Task 1: Group Portfolio" icon={<Users size={32} />} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
          <div className="lg:col-span-6 relative mx-auto w-full max-w-xl">
            <Polaroid
              src="/2.png"
              alt="Mind Map Diagram"
              caption="Portfolio Applications"
              rotation="left"
            >
              <Tape variant="washi-stripes" className="-top-4 left-4 z-50 rotate-3" />
            </Polaroid>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="font-serif text-lg text-scrapbook-ink/90">
              Collaborative creation defining <strong>"Who We Are"</strong> as a team, mapping collective skills, and establishing semester goals.
            </p>

            <div className="bg-[#fdfbf7] p-8 rounded-sm shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg border border-scrapbook-tan/20 transform rotate-1">
              <Tape variant="sage" className="-top-3 right-10 -rotate-2" />
              {/* Notebook lines effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundSize: '100% 2rem', backgroundImage: 'linear-gradient(to bottom, transparent 1.9rem, #b59275 2rem)' }}></div>

              <ul className="space-y-6 text-scrapbook-ink/90 font-handwriting text-3xl relative z-10 pl-8 mt-2">
                <li className="relative before:content-['✓'] before:absolute before:-left-8 before:text-green-600 hover:text-scrapbook-accent transition-colors">Defined "Who We Are" as a team.</li>
                <li className="relative before:content-['✓'] before:absolute before:-left-8 before:text-green-600 hover:text-scrapbook-accent transition-colors">Mapped out collective technical skills.</li>
                <li className="relative before:content-['✓'] before:absolute before:-left-8 before:text-green-600 hover:text-scrapbook-accent transition-colors">Established shared goals for the semester.</li>
              </ul>
            </div>

            {/* Outcome Tag */}
            <div className="mt-8 block bg-scrapbook-paperDark/40 border-l-4 border-scrapbook-accent p-5 rounded-r-md font-serif text-scrapbook-ink/90 text-base shadow-sm">
              <span className="font-bold uppercase tracking-wider text-xs block text-scrapbook-accent mb-2">Outcome</span>
              A unified document demonstrating teamwork, communication, and reflection on collaborative potential.
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Individual Task: Personal vs. Career */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 stagger-2">
        <SectionHeader title="Individual Task: Paths" icon={<User size={32} />} />

        <p className="font-serif text-lg leading-relaxed text-scrapbook-ink/90 max-w-3xl mb-6">
          Exploring two distinct paths of self-presentation based on goals, content focus, and layout requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Personal Portfolio */}
          <div className="relative group">
            <Tape variant="gold" className="-top-3 left-12 z-20 rotate-12" />
            <div className="bg-[#fef9c3] border-t-8 border-[#fde047] p-8 shadow-md transform -rotate-1 hover:rotate-0 hover:shadow-xl transition-all duration-300 rounded-sm"
              style={{ backgroundImage: 'url("/cream-paper.png")' }}>
              <h4 className="font-handwriting text-4xl text-scrapbook-ink mb-1">Personal Portfolio</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-amber-700 font-bold mb-4">Focus: Hobbies & Creative</p>

              <p className="font-serif text-[15px] text-scrapbook-ink/80 leading-relaxed mb-6">
                A space to share personal stories, projects, and creative works with a focus on visual and written self-expression.
              </p>

              <div className="border-t border-[#fde047] pt-4">
                <span className="font-handwriting text-2xl text-scrapbook-ink block mb-2">Examples:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#fde047]/40 px-3 py-1 rounded-full text-xs font-sans text-scrapbook-ink font-semibold">Photography</span>
                  <span className="bg-[#fde047]/40 px-3 py-1 rounded-full text-xs font-sans text-scrapbook-ink font-semibold">Travel Blog</span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Portfolio */}
          <div className="relative group">
            <Tape variant="dark" className="-top-3 right-12 z-20 -rotate-12" />
            <div className="bg-[#e0f2fe] border-t-8 border-[#7dd3fc] p-8 shadow-md transform rotate-1 hover:rotate-0 hover:shadow-xl transition-all duration-300 rounded-sm"
              style={{ backgroundImage: 'url("/cream-paper.png")' }}>
              <Stamp text="CAREER" color="blue" rotation="rotate-6" className="bottom-4 right-4 opacity-20" />
              <h4 className="font-handwriting text-4xl text-scrapbook-ink mb-1">Career Portfolio</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-blue-700 font-bold mb-4">Focus: Employability & Skills</p>

              <p className="font-serif text-[15px] text-scrapbook-ink/80 leading-relaxed mb-6 relative z-10">
                An evidence-based professional showcase targeted at recruiters, containing projects, accomplishments, and skills.
              </p>

              <div className="border-t border-[#7dd3fc] pt-4 relative z-10">
                <span className="font-handwriting text-2xl text-scrapbook-ink block mb-2">Examples:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#7dd3fc]/40 px-3 py-1 rounded-full text-xs font-sans text-scrapbook-ink font-semibold">CV / Resume</span>
                  <span className="bg-[#7dd3fc]/40 px-3 py-1 rounded-full text-xs font-sans text-scrapbook-ink font-semibold">Project Evidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Reflections */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 stagger-3">
        <div className="text-center mb-6">
          <SectionHeader title="Reflections" icon={<Lightbulb size={32} />} className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="What I Learned" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
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

          <StickyNote title="How I Will Apply It" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
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
