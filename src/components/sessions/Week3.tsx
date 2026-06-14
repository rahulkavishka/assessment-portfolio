import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { Stamp } from '../scrapbook/Stamp';
import { Brain, Heart, Lightbulb, Activity } from 'lucide-react';

export const Week3: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Week Title Banner */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 text-center mb-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-scrapbook-accent font-bold">Week 3</span>
        <h2 className="font-handwriting text-5xl sm:text-6xl text-scrapbook-ink mt-1 transform -rotate-1">🧠 Emotional Intelligence</h2>
        <p className="font-serif text-sm text-scrapbook-ink/60 mt-1">Lecturer: Ms. Nilusha Ariasena · 03/02/2026</p>
        <p className="font-serif text-base text-scrapbook-ink/70 mt-2 max-w-2xl mx-auto italic">
          Understanding emotions, emotional intelligence, and Goleman's framework for managing emotions professionally.
        </p>
      </section>

      {/* IQ vs EQ */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="IQ vs EQ - The Crucial Difference" icon={<Brain size={32} />} />
        <div className='flex items-center justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <StickyNote color="blue" rotation="left" variant="folded">
              <Tape variant="sage" className="-top-4 left-6 -rotate-6" />
              <h4 className="font-handwriting text-3xl mb-3 border-b border-blue-200 pb-1">🧩 IQ</h4>
              <p className="font-serif text-[15px] text-scrapbook-ink/90 mb-2"><strong>Intelligence Quotient</strong></p>
              <ul className="list-disc pl-5 space-y-1 text-scrapbook-ink/80 text-[16px]">
                <li>Logic, math, memory, analytical reasoning</li>
                <li>Academic achievement, technical performance</li>
              </ul>
            </StickyNote>

            <StickyNote color="yellow" rotation="right" variant="pinned">
              <h4 className="font-handwriting text-3xl mb-3 border-b border-yellow-200 pb-1 mt-2">💛 EQ</h4>
              <p className="font-serif text-[15px] text-scrapbook-ink/90 mb-2"><strong>Emotional Quotient</strong></p>
              <ul className="list-disc pl-5 space-y-1 text-scrapbook-ink/80 text-[16px]">
                <li>Self-awareness, empathy, emotional regulation</li>
                <li>Leadership, stress management, teamwork, relationships</li>
              </ul>
            </StickyNote>
          </div>
        </div>

        <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 italic text-scrapbook-ink/80 font-serif mt-6 max-w-2xl">
          <strong>Key Insight:</strong> IQ gets you <em>into</em> a room; EQ determines how far you go once you're there.
        </blockquote>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Primary vs Secondary Emotions */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Primary vs Secondary Emotions" icon={<Heart size={32} />} />

        <p className="font-serif text-lg text-scrapbook-ink/90 mb-6 max-w-5xl">
          Emotions are a complex mix of <strong>feelings, thoughts, physical reactions, and behaviours</strong> triggered by our experiences and environment.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Polaroid
            src="/Week 3/primary vs secondary.png"
            alt="Primary and Secondary Emotion Wheel"
          >
            <Tape variant="rose" className="-top-4 right-10 z-50 -rotate-3" />
          </Polaroid>

          <Polaroid
            src="/Week 3/Primary & Secondary Emotion Wheel.png"
            alt="Primary and Secondary Emotion Wheel"
          >
            <Tape variant="rose" className="-top-4 right-10 z-50 -rotate-3" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Emotional Leakage */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Emotional Leakage" icon={<Activity size={32} />} />

        <p className="font-serif text-lg text-scrapbook-ink/90 mb-6 max-w-5xl">
          Emotional leakage is when our <strong>true feelings show without us consciously noticing</strong> - through:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl">
          {[
            { emoji: '🗣️', label: 'Voice', desc: 'Tone, pitch, speed, trembling' },
            { emoji: '😐', label: 'Facial Expressions', desc: 'Micro-expressions that flash in milliseconds' },
            { emoji: '😮', label: 'Breathing', desc: 'Shallow, rapid, or held breath' },
            { emoji: '🚶', label: 'Body Language', desc: 'Posture, gestures, eye contact' },
          ].map((item) => (
            <div key={item.label} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-4 text-center hover:-translate-y-1 transition-all duration-300">
              <span className="text-4xl block mb-2">{item.emoji}</span>
              <strong className="font-serif text-scrapbook-ink text-md block">{item.label}</strong>
              <span className="font-serif text-scrapbook-ink/70 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 italic text-scrapbook-ink/90 font-serif mt-6 max-w-3xl">
          Others can often read our emotional state from these signals even when we try to suppress them.
        </blockquote>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Emotional Intelligence - 4 Abilities */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Emotional Intelligence - 4 Abilities" />
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          <Polaroid
            src="/Week 3/4 Abilities → Image Prompt.png"
            alt="Primary and Secondary Emotion Wheel"
          >
            <Tape variant="rose" className="-top-4 right-10 z-50 -rotate-3" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Goleman's 5 Domains */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Goleman's 5 EI Domains" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Polaroid
            src="/Week 3/dani3.jpg"
            alt="Goleman"
          >
            <Tape variant="gold" className="-top-4 left-10 z-50 rotate-3" />
          </Polaroid>

          <Polaroid
            src="/Week 3/Goleman's 5 EI Domains Pentagon.png"
            alt="Goleman's 5 EI Domains Pentagon"
            caption="5 Domains Pentagon"
          >
            <Tape variant="gold" className="-top-4 left-10 z-50 rotate-3" />
          </Polaroid>
        </div>

        {/* Aristotle Quote */}
        <div className="mt-8 bg-[#2b1f17] text-scrapbook-paper p-6 sm:p-8 rounded-sm shadow-lg relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("/stucco.png")' }}></div>
          <Stamp text="350 BC" color="red" rotation="-rotate-12" className="top-2 right-4 opacity-40 scale-75" />
          <blockquote className="font-serif text-lg italic text-scrapbook-paper/90 relative z-10 leading-relaxed">
            "Anyone can become angry - that is easy. But to be angry with the right person, to the right degree, at the right time, for the right purpose, and in the right way - that is not easy."
          </blockquote>
          <p className="font-sans text-sm text-scrapbook-tan mt-3 relative z-10">-Aristotle, <em>The Nicomachean Ethics</em></p>
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Classroom Activities */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Classroom Activities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <StickyNote color="pink" rotation="left" variant="folded">
            <Tape variant="rose" className="-top-4 left-6 -rotate-6" />
            <strong className="block mb-2 font-handwriting text-2xl">
              🎭 Activity 1 - The Surprise Reaction
            </strong>
            <p className="text-[14px]">
              The lecturer suddenly raised her voice at a student. The room went
              completely silent. She then revealed it was a deliberate demonstration
              of how <strong>emotions spread instantly and affect an entire room</strong>
              - this is emotional contagion in action.
            </p>
          </StickyNote>

          <StickyNote color="yellow" rotation="right" variant="pinned">
            <strong className="block mb-2 font-handwriting text-2xl mt-2">
              🎭 Activity 2 - Emotion Role-Play
            </strong>
            <p className="text-[14px]">
              Each group member was secretly assigned an emotion (Happy, Sad, Angry,
              Disgusted). Without revealing it, each person behaved according to that
              emotion in a group conversation.
            </p>
            <p className="text-[14px] mt-2 italic text-scrapbook-ink/80">
              <strong>My assigned emotion was Happy.</strong> I said "The lecture is
              almost over!" - my group looked pleased but confused.
            </p>
          </StickyNote>
        </div>

        <div className="mt-4 bg-scrapbook-paperDark/40 border-l-4 border-scrapbook-accent p-5 rounded-r-md font-serif text-scrapbook-ink/90 text-base shadow-sm max-w-3xl">
          <span className="font-bold uppercase tracking-wider text-xs block text-scrapbook-accent mb-2">Insight</span>
          The activity showed powerfully how <strong>hidden emotions silently disrupt group dynamics</strong> even when nothing is said directly.
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Reflections */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center mb-6">
          <SectionHeader title="Reflections" icon={<Lightbulb size={32} />} className="mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-[#fdfbf7] p-6 sm:p-8 rounded-sm shadow-md relative overflow-hidden border border-scrapbook-tan/20 transform -rotate-[0.5deg]">
            <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundSize: '100% 2rem', backgroundImage: 'linear-gradient(to bottom, transparent 1.9rem, #b59275 2rem)' }}></div>
            <Tape variant="washi-stripes" className="-top-4 left-1/2 -translate-x-1/2 z-50" />
            <h4 className="font-handwriting text-3xl text-scrapbook-ink mb-3 relative z-10">✍️ Personal Reflection</h4>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10">
              Before this session, I thought emotions were a private matter with no place in professional settings. The role-play activity completely changed that. When one person in a group carries hidden frustration, the entire team feels the tension - even without a single word being spoken.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              As an IT student who regularly works in project groups, this lesson is immediately practical. The late-night debugging sessions, the tight deadlines, the disagreements about approach - these are all emotional experiences as much as technical ones. A team that manages emotions well will always outperform one that doesn't, regardless of skill level.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="🌟 Key Takeaways" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
            <ul className="space-y-3 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>IQ opens doors; EQ keeps them open and earns leadership.</li>
              <li>Emotions are never truly hidden - they leak through voice, face, and body.</li>
              <li>Goleman's 5 EI domains: Self-Awareness, Self-Regulation, Motivation, Empathy, Social Skills.</li>
              <li>Self-regulation means expressing emotions at the <em>right time</em>, in the <em>right way</em>.</li>
              <li>Strong EI reduces conflict, builds better relationships, and improves team performance.</li>
            </ul>
          </StickyNote>

          <StickyNote title="🚀 Application to Real Life" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
              <li>
                <strong>Now:</strong> Before assigning tasks in group projects, checking in on teammates' energy and state of mind rather than diving straight into work.
              </li>
              <li>
                <strong>Future:</strong> Using self-regulation during high-pressure moments (tight deadlines, technical failures) to model calm and keep the team focused.
              </li>
            </ul>
          </StickyNote>
        </div>
      </section>

    </div>
  );
};
