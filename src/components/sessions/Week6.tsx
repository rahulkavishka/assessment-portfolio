import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { PaperClip } from '../scrapbook/PaperClip';
import { Stamp } from '../scrapbook/Stamp';
import { MermaidDiagram } from '../scrapbook/MermaidDiagram';
import { ClipboardList, Calendar, Lightbulb, Crown } from 'lucide-react';

const agendaMindmap = `mindmap
  root((Types of Agendas))
    Meeting Agenda
      Internal team discussions
      Project status updates
    Workshop Agenda
      Skill-building sessions
      Hands-on training
    Conference Agenda
      Multi-session large events
      Multiple speakers and tracks
    Training Agenda
      Learning and development sessions
    Community Agenda
      Cultural or public events`;

const meetingTypesGraph = `graph TD
    A["📅 Meeting Types"] --> B["👥 Staff Meetings\\nRegular team updates"]
    A --> C["🔨 Project Meetings\\nProgress tracking and problem-solving"]
    A --> D["📐 Planning Meetings\\nStrategic planning and goal-setting"]
    A --> E["🔍 Review Meetings\\nEvaluating outcomes and performance"]
    A --> F["💡 Problem-Solving Meetings\\nAddressing specific challenges"]`;

const meetingStructure = `flowchart LR
    A["1️⃣\\nPreparation"] --> B["2️⃣\\nOpening"]
    B --> C["3️⃣\\nAgenda\\nDiscussion"]
    C --> D["4️⃣\\nDecision\\nMaking"]
    D --> E["5️⃣\\nClosing"]`;

export const Week6: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Week Title Banner */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 text-center mb-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-scrapbook-accent font-bold">Week 6</span>
        <h2 className="font-handwriting text-5xl sm:text-6xl text-scrapbook-ink mt-1 transform -rotate-1">📋 Writing Agendas & Meetings</h2>
        <p className="font-serif text-sm text-scrapbook-ink/60 mt-1">Lecturer: Ms. Sathsarani Samarakoon · 24/03/2026</p>
        <p className="font-serif text-base text-scrapbook-ink/70 mt-2 max-w-2xl mx-auto italic">
          Learning to write professional agendas and conduct effective, structured meetings.
        </p>
      </section>

      {/* What is an Agenda */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="What is an Agenda?" icon={<ClipboardList size={32} />} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif">
              An agenda is a <strong className="text-scrapbook-ink font-semibold">structured outline of topics, activities, and sessions</strong> for any meeting or event. It is a <em>strategic tool</em> — not just a to-do list — that:
            </p>
            <div className="space-y-2">
              {[
                'Keeps everyone focused and on track',
                'Manages time and sets clear expectations',
                'Ensures the desired outcomes are actually achieved',
                'Provides a formal record of what was intended to be discussed',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-scrapbook-paperDark/20 p-3 rounded-sm">
                  <span className="text-scrapbook-accent flex-shrink-0 mt-0.5">◆</span>
                  <span className="font-serif text-scrapbook-ink/90 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <MermaidDiagram chart={agendaMindmap} caption="Types of Agendas" />
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Components of a Well-Written Agenda */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Components of a Well-Written Agenda" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
          {[
            { icon: '📋', title: 'Event Details', desc: 'Meeting name, date, venue, start/end time' },
            { icon: '👋', title: 'Welcome & Opening', desc: 'Sets the professional tone' },
            { icon: '✅', title: 'Previous Minutes', desc: 'Formal opening item for recurring meetings' },
            { icon: '📝', title: 'Session List', desc: 'Numbered topics with time allocations and facilitators' },
            { icon: '☕', title: 'Breaks', desc: 'Maintains focus and energy across long sessions' },
            { icon: '🎯', title: 'Interactive Activities', desc: 'Keeps participants engaged' },
            { icon: '🔚', title: 'Closing Remarks', desc: 'Summarise decisions and confirm next steps' },
            { icon: '📌', title: 'Any Other Matter', desc: "Standard formal closing item (with Chair's permission)" },
          ].map((item) => (
            <div key={item.title} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-4 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-2xl">{item.icon}</span>
              <h5 className="font-serif font-bold text-scrapbook-ink text-sm mt-2">{item.title}</h5>
              <p className="font-serif text-scrapbook-ink/70 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Types of Meetings */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Types of Meetings" icon={<Calendar size={32} />} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <MermaidDiagram chart={meetingTypesGraph} caption="Meeting Types Overview" />

          <Polaroid
            src="/Week 6/Types of Meetings Radial Mind Map.png"
            alt="Types of Meetings Radial Mind Map"
            caption="Meeting Types Infographic"
            rotation="right"
          >
            <Tape variant="rose" className="-top-4 right-10 z-50 -rotate-3" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* 5-Step Meeting Structure */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="The 5-Step Meeting Structure" />

        <MermaidDiagram chart={meetingStructure} caption="Meeting Flow" className="max-w-4xl mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl">
          {[
            { step: '1', title: 'Preparation', desc: 'Circulate agenda in advance; gather materials; confirm roles' },
            { step: '2', title: 'Opening', desc: 'Welcome attendees; confirm minutes from last meeting' },
            { step: '3', title: 'Agenda Discussion', desc: 'Work through each numbered item systematically' },
            { step: '4', title: 'Decision-Making', desc: 'Reach conclusions; assign action items with clear owners and deadlines' },
            { step: '5', title: 'Closing', desc: 'Summarise all decisions; confirm next meeting date and responsibilities' },
          ].map((item) => (
            <div key={item.step} className="bg-scrapbook-paperDark/20 p-4 rounded-sm border-t-4 border-scrapbook-accent/50 text-center hover:-translate-y-1 transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-scrapbook-accent text-scrapbook-bg flex items-center justify-center text-sm font-bold mx-auto font-sans">{item.step}</span>
              <strong className="font-serif text-scrapbook-ink text-sm block mt-2">{item.title}</strong>
              <span className="font-serif text-scrapbook-ink/70 text-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Key Roles & Etiquette */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <SectionHeader title="Key Roles in a Meeting" />
            <div className="space-y-3">
              {[
                { role: '🪑 Chairperson', desc: 'Guides discussion, manages time, ensures all voices are heard, remains neutral' },
                { role: '📝 Secretary', desc: 'Records discussions, decisions, and action items accurately' },
                { role: '👥 Participants', desc: 'Prepare in advance, contribute ideas, stay on topic, respect others' },
              ].map((item) => (
                <div key={item.role} className="bg-scrapbook-paperDark/30 p-4 rounded-sm border-l-4 border-scrapbook-accent/50">
                  <strong className="font-serif text-scrapbook-ink text-sm block">{item.role}</strong>
                  <span className="font-serif text-scrapbook-ink/70 text-xs">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Meeting Etiquette" />
            <StickyNote color="yellow" rotation="right" variant="pinned">
              <ul className="space-y-3 text-[14px] mt-2">
                <li>⏰ <strong>Punctuality</strong> — Arrive prepared and on time</li>
                <li>📋 <strong>Preparation</strong> — Read the agenda before attending</li>
                <li>🗣️ <strong>Clarity</strong> — Speak clearly and concisely</li>
                <li>🤫 <strong>Active listening</strong> — Don't interrupt; wait your turn</li>
                <li>📵 <strong>No distractions</strong> — Phones and laptops away unless required</li>
              </ul>
            </StickyNote>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Mock Meeting Activity */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Activity: Mock Meeting — Startup Café" icon={<Crown size={32} />} />

        <p className="font-serif text-lg text-scrapbook-ink/90 mb-6 max-w-3xl">
          We performed a full mock meeting in the <strong>7th-floor board meeting room</strong> using the Startup Café business scenario. I was selected as <strong>Chairperson (CEO)</strong>:
        </p>

        <div className="relative max-w-3xl">
          <PaperClip variant="gold" className="-top-8 -left-2" />
          <div className="bg-[#fdfbf7] p-6 rounded-sm shadow-md border border-scrapbook-tan/20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20 rounded-sm mix-blend-multiply" style={{ backgroundImage: 'url("/cream-paper.png")' }} />
            <Stamp text="CEO" color="red" rotation="-rotate-12" className="top-2 right-4 opacity-40 scale-75" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
              {[
                { role: '🪑 Chairperson (CEO)', person: 'Rahul Arambepola', highlight: true },
                { role: '📝 Secretary', person: 'Avinash' },
                { role: '💰 Finance Analyst', person: 'Madushan' },
                { role: '📣 Marketing Analyst', person: 'Sangeeth' },
                { role: '⚙️ Operations Head', person: 'Sahan' },
                { role: '👥 HR Coordinator', person: 'Methmal' },
              ].map((item) => (
                <div key={item.role} className={`p-3 rounded-sm ${item.highlight ? 'bg-scrapbook-accent/15 border-2 border-scrapbook-accent/40' : 'bg-scrapbook-paperDark/20 border border-scrapbook-tan/10'}`}>
                  <span className="font-serif text-xs text-scrapbook-ink/60 block">{item.role}</span>
                  <strong className="font-serif text-scrapbook-ink text-sm">{item.person}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-scrapbook-paperDark/40 border-l-4 border-scrapbook-accent p-5 rounded-r-md font-serif text-scrapbook-ink/90 text-base shadow-sm max-w-3xl">
          <span className="font-bold uppercase tracking-wider text-xs block text-scrapbook-accent mb-2">Experience</span>
          Following the complete 5-step structure in a real boardroom setting was an experience unlike anything in a typical classroom.
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
              Before this session, I assumed running a meeting was simply gathering people and talking through issues until something was decided. Leading the Startup Café meeting as Chairperson completely revised that assumption. Having a structured agenda meant I could redirect off-topic conversations and ensure every role contributed.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              Sitting in a formal boardroom and following professional protocols made the experience feel surprisingly real. That environment — the table, the roles, the formal language — changed how I carried myself. I felt more confident, more deliberate, and more professional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="🌟 Key Takeaways" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
            <ul className="space-y-3 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>An agenda is a <em>strategic</em> tool — the difference between a productive meeting and a wasted hour.</li>
              <li>Every agenda needs the standard formal format with all essential components.</li>
              <li>Meetings follow a clear 5-step structure: Prepare → Open → Discuss → Decide → Close.</li>
              <li>The Chairperson and Secretary are the most critical roles for a smooth meeting.</li>
              <li>Meeting etiquette — punctuality, preparation, listening — is just as important as the agenda.</li>
              <li>Mock meetings build genuine confidence for real professional environments.</li>
            </ul>
          </StickyNote>

          <StickyNote title="🚀 Application to Real Life" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
              <li><strong>Now:</strong> Using the proper agenda format for all group project meetings — with time slots, facilitators, and clear action items.</li>
              <li><strong>Future:</strong> Applying the 5-step structure whenever leading or participating in professional team discussions.</li>
              <li><strong>Long-term:</strong> These skills will serve me in every client meeting, sprint planning session, and stakeholder presentation throughout my IT career.</li>
            </ul>
          </StickyNote>
        </div>
      </section>

    </div>
  );
};
