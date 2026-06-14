import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { Handshake, Shield, Lightbulb, Swords } from 'lucide-react';

export const Week7: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Week Title Banner */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 text-center mb-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-scrapbook-accent font-bold">Week 7</span>
        <h2 className="font-handwriting text-5xl sm:text-6xl text-scrapbook-ink mt-1 transform -rotate-1">🤝 Types of Negotiations</h2>
        <p className="font-serif text-sm text-scrapbook-ink/60 mt-1">Lecturer: Ms. Lelani Kandegamage · 24/03/2026</p>
        <p className="font-serif text-base text-scrapbook-ink/70 mt-2 max-w-5xl mx-auto italic">
          Negotiation as a core professional skill - strategies, tactics, frameworks, and the win-win mindset.
        </p>
      </section>

      {/* What is Negotiation */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="What is Negotiation?" icon={<Handshake size={32} />} />

        <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif mb-6 max-w-5xl">
          Negotiation is far more than arguing for what you want. It is a <strong>key life skill</strong> applied daily in professional contexts:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mb-6">
          {[
            { emoji: '💼', text: 'Job offers and salary discussions' },
            { emoji: '🗓️', text: 'Project scope, timelines, and deadlines' },
            { emoji: '👥', text: 'Task allocation within teams' },
            { emoji: '🤝', text: 'Client and stakeholder relationship management' },
            { emoji: '🏢', text: 'Everyday workplace decisions and compromises' },
          ].map((item, i) => (
            <div key={i} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-4 hover:-translate-y-1 transition-all duration-300">
              <span className="text-2xl block mb-2">{item.emoji}</span>
              <p className="font-serif text-scrapbook-ink/90 text-[16px]">{item.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 italic text-scrapbook-ink/80 font-serif font-semibold">
          Preparation is the single most important factor in every negotiation.
        </blockquote>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Kennedy's 3 Behaviours */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Gavin Kennedy's 3 Negotiation Behaviours" />
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <Polaroid
              src="/Week 7/3beha.png"
              alt="Types of Meetings Radial Mind Map"
            >
              <Tape variant="rose" className="-top-4 right-10 z-50 -rotate-3" />
            </Polaroid>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* 5-Step Process + Image */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="The 5-Step Negotiation Process" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {[
              { step: '1', title: 'Opening', desc: 'State your position, goals, and expectations clearly' },
              { step: '2', title: 'Exploration', desc: "Listen actively to understand the other party's needs and priorities" },
              { step: '3', title: 'Create Movement', desc: 'Make strategic concessions; identify shared ground' },
              { step: '4', title: 'Create Closure', desc: 'Drive toward a mutually acceptable agreement' },
              { step: '5', title: 'Closing', desc: 'Formalise the agreement; confirm all parties understand commitments' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-scrapbook-paperDark/20 p-4 rounded-sm border border-scrapbook-tan/10 hover:border-scrapbook-accent/30 transition-colors">
                <span className="w-8 h-8 rounded-full bg-scrapbook-accent text-scrapbook-bg flex items-center justify-center text-sm font-bold flex-shrink-0 font-sans">{item.step}</span>
                <div>
                  <strong className="font-serif text-scrapbook-ink text-sm block">{item.title}</strong>
                  <span className="font-serif text-scrapbook-ink/70 text-[13px]">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <Polaroid
            src="/Week 7/Negotiation Staircase BATNA ZOPA Cards.png"
            alt="Negotiation Staircase with BATNA and ZOPA"
          >
            <Tape variant="gold" className="-top-4 right-10 z-50 -rotate-3" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Common Tactics */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Common Negotiation Tactics" icon={<Swords size={32} />} />

        <p className="font-serif text-base text-scrapbook-ink/70 mb-4 italic">Know them to beat them:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl">
          {[
            { tactic: 'High Ball', desc: 'Open with an inflated demand to anchor expectations high' },
            { tactic: 'Low Ball', desc: 'Start very low to make later offers seem more reasonable' },
            { tactic: 'Big Fish', desc: 'Claim authority of a larger party to add pressure' },
            { tactic: 'Bluff', desc: 'Pretend to have more leverage or information than you do' },
            { tactic: 'Bad Cop / Good Cop', desc: 'One negotiator is aggressive; the other is friendly and reasonable' },
            { tactic: 'Delays', desc: 'Use time pressure ("I need an answer today") as leverage' },
            { tactic: 'No Authority', desc: 'Claim you need to consult a higher authority before agreeing' },
            { tactic: 'Change the Negotiator', desc: 'Swap your negotiator mid-process to reset expectations' },
          ].map((item) => (
            <div key={item.tactic} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-3 hover:border-scrapbook-accent/30 transition-colors">
              <strong className="font-serif text-scrapbook-ink text-md block">{item.tactic}</strong>
              <span className="font-serif text-scrapbook-ink/80 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Key Concepts: BATNA, ZOPA, Me First vs We First */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Key Negotiation Concepts" icon={<Shield size={32} />} />

        <div className="flex justify-center gap-6 max-w-5xl mb-8">
          <StickyNote color="tan" rotation="left" variant="folded">
            <Tape variant="dark" className="-top-4 left-6 -rotate-6" />
            <h4 className="font-handwriting text-3xl mb-2">🛡️ BATNA</h4>
            <p className="font-serif text-[15px] italic text-scrapbook-ink/90 mb-2">Best Alternative To a Negotiated Agreement</p>
            <p className="font-serif text-[14px] text-scrapbook-ink/90">
              Your strongest backup plan if talks fail. Know it before you enter any negotiation.
            </p>
          </StickyNote>

          <StickyNote color="blue" rotation="right">
            <Tape variant="sage" className="-top-4 right-6 rotate-6" />
            <h4 className="font-handwriting text-3xl mb-2">🎯 ZOPA</h4>
            <p className="font-serif text-[15px] italic text-scrapbook-ink/90 mb-2">Zone Of Possible Agreement</p>
            <p className="font-serif text-[14px] text-scrapbook-ink/80">
              The overlap range where both parties can reach a deal that satisfies their core needs.
            </p>
          </StickyNote>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <Polaroid
              src="/Week 7/me first.png"
              alt="Negotiation Staircase with BATNA and ZOPA"
            >
              <Tape variant="gold" className="-top-4 right-10 z-50 -rotate-3" />
            </Polaroid>
          </div>
        </div>
        <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 italic text-scrapbook-ink/80 font-serif mt-6 max-w-5xl">
          In professional life, <strong>We First (Win/Win)</strong> almost always produces better long-term outcomes. You work with the same people again - burning bridges is never worth it.
        </blockquote>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Top 10 Skills */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Top 10 Effective Negotiation Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-5xl">
          {[
            { emoji: '🧩', skill: 'Problem Analysis' },
            { emoji: '👂', skill: 'Active Listening' },
            { emoji: '🗣️', skill: 'Verbal Communication' },
            { emoji: '🎯', skill: 'Decision Making' },
            { emoji: '⚖️', skill: 'Ethical Behaviour' },
            { emoji: '📋', skill: 'Preparation' },
            { emoji: '💡', skill: 'Problem Solving' },
            { emoji: '🧘', skill: 'Emotional Control' },
            { emoji: '🤝', skill: 'Collaborative Approach' },
            { emoji: '🌐', skill: 'Interpersonal Skills' },
          ].map((item, i) => (
            <div key={item.skill} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-3 text-center hover:-translate-y-1 transition-all duration-300">
              <span className="text-2xl">{item.emoji}</span>
              <span className="w-5 h-5 rounded-full bg-scrapbook-accent/20 text-scrapbook-accent flex items-center justify-center text-[13px] font-bold mx-auto font-sans mt-1 mb-1">{i + 1}</span>
              <p className="font-serif text-scrapbook-ink text-sm font-bold">{item.skill}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

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
              Before this session, I assumed negotiation was reserved for high-stakes business deals or buying a car. The lecture revealed that I negotiate every single day - when dividing up group project tasks, when discussing deadline extensions with lecturers, when deciding whose design approach the team follows.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              The 5-step framework gave me language for something I was doing intuitively but inconsistently. I found myself most drawn to the Win-Win philosophy - it reflects the kind of collaborator I aspire to be. In IT, where you work with the same people across multiple projects and years, maintaining relationships is just as valuable as winning a single argument.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="🌟 Key Takeaways" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
            <ul className="space-y-3 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>Preparation is the foundation of every successful negotiation.</li>
              <li>Three negotiation behaviours exist: Manipulation, Win-Win, and Good Intentions.</li>
              <li>The 5-step process: Opening → Exploration → Movement → Closure → Closing.</li>
              <li>Knowing common tactics helps you recognise them and respond strategically.</li>
              <li>BATNA and ZOPA are the two most critical concepts before entering any negotiation.</li>
              <li>Win-Win (We First) is more effective than Win-Lose (Me First) in professional relationships.</li>
            </ul>
          </StickyNote>

          <StickyNote title="🚀 Application to Real Life" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
              <li><strong>Now:</strong> Using the 5-step structure in group project discussions; always preparing my BATNA before negotiating deadlines.</li>
              <li><strong>Future:</strong> Applying active listening and win-win thinking in all client and team negotiations during my IT career.</li>
              <li><strong>Long-term:</strong> Salary negotiations, project scoping, vendor agreements - these skills will matter at every career stage.</li>
            </ul>
          </StickyNote>
        </div>
      </section>

    </div>
  );
};
