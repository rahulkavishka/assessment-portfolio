import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { Briefcase, Eye, Lightbulb, Target } from 'lucide-react';

export const Week2: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Week Title Banner */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 text-center mb-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-scrapbook-accent font-bold">Week 2</span>
        <h2 className="font-handwriting text-5xl sm:text-6xl text-scrapbook-ink mt-1 transform -rotate-1">💼 Professional Skills</h2>
        <p className="font-serif text-sm text-scrapbook-ink/60 mt-1">Lecturer: Ms. Oshani</p>
        <p className="font-serif text-base text-scrapbook-ink/70 mt-2 max-w-2xl mx-auto italic">
          Understanding professional skills - their types, components, benefits, and how to develop them for the workplace.
        </p>
      </section>

      {/* About the Module */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="About Professional Skills" icon={<Briefcase size={32} />} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif">
              Professional skills are the <strong className="text-scrapbook-ink font-semibold">abilities and qualities</strong> that help a person work effectively and succeed in a professional environment. They encompass both:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <StickyNote color="blue" rotation="left" className="flex-1">
                <strong className="block mb-1 font-handwriting text-3xl">Technical Skills</strong>
                Programming, writing, research, systems analysis
              </StickyNote>
              <StickyNote color="green" rotation="right" className="flex-1">
                <strong className="block mb-1 font-handwriting text-3xl">Soft Skills</strong>
                Communication, teamwork, leadership, time management
              </StickyNote>
            </div>

            <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 italic text-scrapbook-ink/80 font-serif">
              Professional skills help individuals perform tasks efficiently, solve problems, work well with others, and achieve career growth.
            </blockquote>
          </div>

          <div>
            <h4 className="font-handwriting text-3xl text-scrapbook-ink mb-4">Purpose of this Module</h4>
            <div className="bg-[#fdfbf7] p-6 rounded-sm shadow-md relative overflow-hidden border border-scrapbook-tan/20">
              <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundSize: '100% 2rem', backgroundImage: 'linear-gradient(to bottom, transparent 1.9rem, #b59275 2rem)' }}></div>
              <ul className="space-y-3 text-scrapbook-ink/90 font-serif text-[15px] relative z-10 pl-6">
                {[
                  'Develop important workplace and career skills',
                  'Improve communication and teamwork abilities',
                  'Build confidence and professionalism',
                  'Learn how to create CVs, portfolios, and cover letters',
                  'Enhance problem-solving and critical thinking',
                  'Prepare for interviews and job opportunities',
                  'Improve time management and organisational skills',
                  'Support personal and professional development',
                ].map((item, i) => (
                  <li key={i} className="relative before:content-['✦'] before:absolute before:-left-6 before:text-scrapbook-accent">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Three Categories */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Three Categories of Workplace Skills" icon={<Target size={32} />} />

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-xl">
            <Polaroid
              src="/Week 2/Three Skill Categories Triangle.png"
              alt="Three Skill Categories Triangle"
            >
              <Tape variant="gold" className="-top-4 left-10 z-50 rotate-3" />
            </Polaroid>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Key Components */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Key Components" icon={<Lightbulb size={32} />} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🗣️', skill: 'Communication', desc: 'Expressing ideas clearly and effectively' },
            { icon: '🤝', skill: 'Teamwork', desc: 'Collaborating with others to achieve common goals' },
            { icon: '🌟', skill: 'Leadership', desc: 'Guiding and motivating team members' },
            { icon: '🧩', skill: 'Problem-Solving', desc: 'Identifying and resolving challenges efficiently' },
            { icon: '⏰', skill: 'Time Management', desc: 'Organising tasks and meeting deadlines' },
            { icon: '🔄', skill: 'Adaptability', desc: 'Adjusting to new situations and technologies' },
            { icon: '🧠', skill: 'Critical Thinking', desc: 'Analysing information to make informed decisions' },
            { icon: '⚖️', skill: 'Professional Ethics', desc: 'Maintaining integrity and responsibility in the workplace' },
          ].map((item) => (
            <div key={item.skill} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-4 hover:border-scrapbook-accent/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-2xl">{item.icon}</span>
              <h5 className="font-serif font-bold text-scrapbook-ink text-md mt-2">{item.skill}</h5>
              <p className="font-serif text-scrapbook-ink/80 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Benefits + Image */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Benefits of Professional Skills" />

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-xl">
            <Polaroid
              src="/Week 2/Benefits of Professional Skills Wheel.png"
              alt="Benefits of Professional Skills Wheel"
            >
              <Tape variant="rose" className="-top-4 right-10 z-50 -rotate-3" />
            </Polaroid>
          </div>
        </div>

        {/* How to Improve */}
        <div className="mt-8">
          <h4 className="font-handwriting text-3xl text-scrapbook-ink mb-4">How to Improve Professional Skills</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { title: 'Continuous Learning', desc: 'Courses, certifications, online tutorials' },
              { title: 'Practical Experience', desc: 'Internships, group projects, part-time roles' },
              { title: 'Self-Reflection', desc: 'Journaling, portfolio building, post-project reviews' },
              { title: 'Seeking Feedback', desc: 'Peer reviews, mentors, performance conversations' },
              { title: 'Active Participation', desc: 'Team projects, workshops, leadership opportunities' },
            ].map((item) => (
              <div key={item.title} className="bg-scrapbook-paperDark/20 p-4 rounded-sm border-l-4 border-scrapbook-accent/50">
                <strong className="font-serif text-scrapbook-ink text-md block">{item.title}</strong>
                <span className="font-serif text-scrapbook-ink/70 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Johari Window */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="The Johari Window" icon={<Eye size={32} />} />

        <p className="font-serif text-lg text-scrapbook-ink/90 max-w-5xl mb-6">
          The <strong>Johari Window</strong> is a 2×2 grid that helps you understand yourself through the lens of what <em>you</em> know and what <em>others</em> know about you.
        </p>

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-xl">
            <Polaroid
              src="/Week 2/Johari Window Diagram.png"
              alt="Johari Window Diagram"
            >
              <Tape
                variant="dark"
                className="-top-4 right-1/2 translate-x-1/2 z-50 -rotate-2"
              />
            </Polaroid>
          </div>
        </div>

        {/* Activity */}
        <div className="mt-6 bg-scrapbook-paperDark/40 border-l-4 border-scrapbook-accent p-5 rounded-r-md font-serif text-scrapbook-ink/90 text-base shadow-sm max-w-5xl">
          <span className="font-bold uppercase tracking-wider text-xs block text-scrapbook-accent mb-2">🎯 Activity</span>
          In this session, we passed chits around the room where classmates wrote 3–4 qualities they see in us. By plotting these against our own self-assessment, we discovered our "Blind Area" - strengths we hadn't noticed in ourselves.
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Classroom Activities */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Classroom Activities" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StickyNote color="yellow" rotation="left" variant="pinned">
            <strong className="block mb-2 font-handwriting text-2xl">1. Skills Match-Up</strong>
            Matched job roles (Manager, Sales Rep, Customer Service Agent) to their required skill sets. Showed how each job needs its own unique mix.
          </StickyNote>
          <StickyNote color="pink" rotation="right" variant="folded">
            <Tape variant="rose" className="-top-4 left-6 -rotate-6" />
            <strong className="block mb-2 font-handwriting text-2xl">2. Future Goal Writing</strong>
            Wrote down the professional skills needed for our chosen IT career path.
          </StickyNote>
          <StickyNote color="blue" rotation="left">
            <Tape variant="sage" className="-top-4 right-6 rotate-6" />
            <strong className="block mb-2 font-handwriting text-2xl">3. Johari Window</strong>
            Used the MyGrow worksheet to map self-known vs peer-observed strengths. Blind-area feedback was unexpectedly insightful.
          </StickyNote>
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Reflections */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center mb-6">
          <SectionHeader title="Reflections" icon={<Lightbulb size={32} />} className="mx-auto" />
        </div>

        {/* Personal Reflection */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-[#fdfbf7] p-6 sm:p-8 rounded-sm shadow-md relative overflow-hidden border border-scrapbook-tan/20 transform -rotate-[0.5deg]">
            <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundSize: '100% 2rem', backgroundImage: 'linear-gradient(to bottom, transparent 1.9rem, #b59275 2rem)' }}></div>
            <Tape variant="washi-stripes" className="-top-4 left-1/2 -translate-x-1/2 z-50" />
            <h4 className="font-handwriting text-3xl text-scrapbook-ink mb-3 relative z-10">✍️ Personal Reflection</h4>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10">
              This module gave me a much clearer understanding that being a good IT professional isn't just about coding ability. The skills match-up activity showed how every role - even technical ones - requires a mix of human skills. The Johari Window was the most impactful part: seeing qualities others recognise in you that you've overlooked is a genuinely humbling and motivating experience.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              I left the session thinking about how I present myself - not just on paper, but in every group interaction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="🌟 Key Takeaways" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
            <ul className="space-y-3 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>Professional skills are just as important as technical skills - employers hire for both.</li>
              <li>Workplace skills fall into three groups: Technical, Soft, and Transferable.</li>
              <li>Values, attitudes, and character shape how we behave in professional environments.</li>
              <li>The Johari Window is a simple but powerful tool for increasing self-awareness.</li>
              <li>Feedback from others can reveal "blind spots" - strengths we've never noticed ourselves.</li>
            </ul>
          </StickyNote>

          <StickyNote title="🚀 Application to Real Life" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
              <li>
                <strong>Now:</strong> Actively practising time management and communication in group assignments, and building my "Open Area" by sharing more openly with teammates.
              </li>
              <li>
                <strong>Future:</strong> Using the Johari Window framework to continuously seek feedback and grow my professional self-awareness throughout my career.
              </li>
            </ul>
          </StickyNote>
        </div>
      </section>

    </div>
  );
};
