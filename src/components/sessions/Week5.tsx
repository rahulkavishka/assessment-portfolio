import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { PaperClip } from '../scrapbook/PaperClip';
import { MermaidDiagram } from '../scrapbook/MermaidDiagram';
import { Search, BookOpen, Lightbulb } from 'lucide-react';

const researchFlowchart = `flowchart TD
    A["🔍 Problem Identification\\nWhat are we investigating and why?"] --> B
    B["📚 Literature Review\\nWhat has already been discovered?"] --> C
    C["🔬 Research Methodology\\nHow will we collect and analyse data?"] --> D
    D["📊 Data Collection & Analysis\\nGather information and look for patterns"] --> E
    E["💡 Results & Discussion\\nWhat does the data tell us?"] --> F
    F["✅ Conclusion & Recommendations\\nSummarise and suggest next steps"] --> G
    G["📖 References\\nAcknowledge all sources correctly"]`;

export const Week5: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Week Title Banner */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 text-center mb-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-scrapbook-accent font-bold">Week 5</span>
        <h2 className="font-handwriting text-5xl sm:text-6xl text-scrapbook-ink mt-1 transform -rotate-1">🔬 Research</h2>
        <p className="font-serif text-sm text-scrapbook-ink/60 mt-1">Lecturer: Dr. Janaka Alawathugoda · 17/02/2026</p>
        <p className="font-serif text-base text-scrapbook-ink/70 mt-2 max-w-2xl mx-auto italic">
          Understanding the importance of research skills in both academic study and professional IT practice.
        </p>
      </section>

      {/* Why Research Matters */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Why Research Matters" icon={<Search size={32} />} />

        <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif mb-6 max-w-3xl">
          Research is not just for academics — it is a <strong className="text-scrapbook-ink font-semibold">practical professional skill</strong> used daily in IT:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {[
            { icon: '💡', text: 'Developing new ideas and improving existing systems' },
            { icon: '📊', text: 'Making evidence-based decisions rather than assumptions' },
            { icon: '🏗️', text: 'Building better applications by learning from what already exists' },
            { icon: '🎓', text: 'Supporting your top-up degree and postgraduate study' },
            { icon: '🔧', text: 'Solving real-world problems with structured, repeatable approaches' },
          ].map((item, i) => (
            <div key={i} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-4 hover:-translate-y-1 transition-all duration-300">
              <span className="text-2xl block mb-2">{item.icon}</span>
              <p className="font-serif text-scrapbook-ink/90 text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 italic text-scrapbook-ink/80 font-serif mt-6">
          Research helps us move from <em>guessing</em> to <em>knowing with evidence.</em>
        </blockquote>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Types of Research */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Types of Research" icon={<BookOpen size={32} />} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            { type: 'Primary', desc: 'Collecting original data directly', example: 'Surveys of app users, usability testing', color: 'blue' as const },
            { type: 'Secondary', desc: 'Using existing published material', example: 'Literature reviews, reading technical papers', color: 'green' as const },
            { type: 'Qualitative', desc: 'Exploring opinions and experiences', example: 'Interviews about user experience', color: 'yellow' as const },
            { type: 'Quantitative', desc: 'Measuring and analysing numerical data', example: 'Load testing, performance benchmarks', color: 'pink' as const },
          ].map((item) => (
            <StickyNote key={item.type} color={item.color} rotation="none">
              <strong className="block mb-1 font-handwriting text-3xl">{item.type}</strong>
              <p className="text-[14px] text-scrapbook-ink/90">{item.desc}</p>
              <p className="text-[13px] text-scrapbook-ink/70 mt-1 italic">IT Example: {item.example}</p>
            </StickyNote>
          ))}
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Research Structure */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Standard Research Paper Structure" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <MermaidDiagram chart={researchFlowchart} caption="The 7-Step Research Process" />

          <Polaroid
            src="/Week 5/7-Step Research Process Flowchart.png"
            alt="7-Step Research Process Flowchart"
            caption="Research Process Infographic"
            rotation="right"
          >
            <Tape variant="gold" className="-top-4 right-10 z-50 -rotate-3" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Step-by-Step Table */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Step-by-Step Research Process" />

        <div className="space-y-3 max-w-3xl">
          {[
            { step: 1, action: 'Identify the Problem', purpose: "Define precisely what you're investigating and why it matters" },
            { step: 2, action: 'Literature Review', purpose: 'Learn what researchers and practitioners have already discovered' },
            { step: 3, action: 'Choose Methodology', purpose: "Decide how you'll gather and analyse data" },
            { step: 4, action: 'Collect Data', purpose: 'Implement your data collection method rigorously' },
            { step: 5, action: 'Analyse Data', purpose: 'Look for patterns, trends, correlations, and anomalies' },
            { step: 6, action: 'Results & Discussion', purpose: 'Interpret the data — what does it actually mean?' },
            { step: 7, action: 'Conclusion', purpose: 'Summarise findings, acknowledge limitations, suggest future research' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4 bg-scrapbook-paperDark/20 p-4 rounded-sm border border-scrapbook-tan/10 hover:border-scrapbook-accent/30 transition-colors">
              <span className="w-8 h-8 rounded-full bg-scrapbook-accent text-scrapbook-bg flex items-center justify-center text-sm font-bold flex-shrink-0 font-sans">{item.step}</span>
              <div>
                <strong className="font-serif text-scrapbook-ink text-sm block">{item.action}</strong>
                <span className="font-serif text-scrapbook-ink/70 text-[13px]">{item.purpose}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Research Applied to IT */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Research Applied to IT" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            { scenario: 'Building a mobile app', application: 'Research existing similar apps before designing yours' },
            { scenario: 'Improving database performance', application: 'Benchmark current performance, review optimisation literature' },
            { scenario: 'Choosing a tech stack', application: 'Compare frameworks using evidence, not trends' },
            { scenario: 'Designing a UI', application: 'Conduct user research to inform design decisions' },
          ].map((item) => (
            <div key={item.scenario} className="bg-scrapbook-paperDark/30 p-4 rounded-sm border-l-4 border-scrapbook-accent/50">
              <strong className="font-serif text-scrapbook-ink text-sm block">🖥️ {item.scenario}</strong>
              <span className="font-serif text-scrapbook-ink/70 text-[13px]">{item.application}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Academic Honesty */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Academic Honesty" />
        <div className="relative max-w-3xl">
          <PaperClip variant="gold" className="-top-8 right-4" />
          <StickyNote color="tan" rotation="none">
            <Tape variant="dark" className="-top-4 left-1/2 -translate-x-1/2" />
            <p className="mb-3 font-serif text-[15px]">Good research is built on integrity:</p>
            <ul className="list-disc pl-5 space-y-2 text-[14px]">
              <li><strong>Proper referencing</strong> — Acknowledge every source used</li>
              <li><strong>No plagiarism</strong> — Always paraphrase, cite, and credit</li>
              <li><strong>Transparency</strong> — Describe methods clearly so others can verify findings</li>
              <li><strong>Accurate reporting</strong> — Report results honestly, even when unexpected</li>
            </ul>
          </StickyNote>
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
              Before this session, I assumed research was only for professors or final-year dissertations. Dr. Janaka's connection between research and building real applications made the topic immediately relevant. The step-by-step structure makes research feel less like an overwhelming academic task and more like structured problem-solving — something we do every time we approach a programming challenge.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              This session changed how I approach my assignments. Now I identify the problem first and review what's already been said before jumping into writing or coding.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="🌟 Key Takeaways" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
            <ul className="space-y-3 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>Research is a core skill for top-up degrees and real-world IT development.</li>
              <li>Every research paper follows a standard structure that makes findings logical and credible.</li>
              <li>Starting with a clear problem statement is the single most important foundation.</li>
              <li>Methodology must be described accurately so others can understand and replicate work.</li>
              <li>Research writing requires clear language, proper referencing, and academic honesty.</li>
            </ul>
          </StickyNote>

          <StickyNote title="🚀 Application to Real Life" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
              <li><strong>Now:</strong> Applying the research structure to university assignments — problem first, literature second, then analysis.</li>
              <li><strong>Future:</strong> Before starting any project, doing a short literature/market review to understand what's already been built.</li>
              <li><strong>Long-term:</strong> Using research methods in my IT career to develop evidence-based solutions and write credible technical reports.</li>
            </ul>
          </StickyNote>
        </div>
      </section>

    </div>
  );
};
