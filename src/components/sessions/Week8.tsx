import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { PaperClip } from '../scrapbook/PaperClip';
import { Stamp } from '../scrapbook/Stamp';
import { MermaidDiagram } from '../scrapbook/MermaidDiagram';
import { Users, Trophy, Film, Lightbulb, Shield } from 'lucide-react';

const teamworkMindmap = `mindmap
  root((Why Teamwork Matters))
    Synergy
      Combined output exceeds individual effort
      1+1+1 becomes more than 3
    Support
      Members back each other through difficulty
      No one is left behind
    Encouragement
      Motivation and morale from team energy
      Pushing each other to keep going
    Flexibility
      Covering each others weaknesses
      Adapting roles as needed
    Equality
      Every voice has equal weight
      Respect for all contributions
    Managing
      Good leadership keeps everything organised
      Structure enables high performance`;

const tuckmanStages = `flowchart TD
    A["1️⃣ FORMING\\nGroup comes together\\nRoles unclear — excitement & uncertainty"] --> B
    B["2️⃣ STORMING\\nConflict emerges\\nPersonalities and ideas clash"] --> C
    C["3️⃣ NORMING\\nGround rules form\\nGroup becomes cohesive & collaborative"] --> D
    D["4️⃣ PERFORMING\\nTeam works effectively\\nHigh output with minimal friction"] --> E
    E["5️⃣ ADJOURNING\\nProject ends\\nTeam reflects and disperses"]`;

export const Week8: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Week Title Banner */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 text-center mb-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-scrapbook-accent font-bold">Week 8</span>
        <h2 className="font-handwriting text-5xl sm:text-6xl text-scrapbook-ink mt-1 transform -rotate-1">👥 Team Leadership Skills</h2>
        <p className="font-serif text-sm text-scrapbook-ink/60 mt-1">Lecturer: Mr. Suresh Dissanayake · 31/03/2026</p>
        <p className="font-serif text-base text-scrapbook-ink/70 mt-2 max-w-2xl mx-auto italic">
          Understanding the dynamics of effective teamwork, leadership models, conflict management, and practical team collaboration.
        </p>
      </section>

      {/* Why Teamwork Matters */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Why Teamwork Matters" icon={<Users size={32} />} />

        {/* Opening Quote */}
        <div className="bg-[#2b1f17] text-scrapbook-paper p-6 rounded-sm shadow-lg relative overflow-hidden max-w-3xl mb-8">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("/stucco.png")' }}></div>
          <blockquote className="font-serif text-lg italic text-scrapbook-paper/90 relative z-10 leading-relaxed">
            "Everyone needs somebody, anybody… a reason to live."
          </blockquote>
          <p className="font-sans text-sm text-scrapbook-tan mt-2 relative z-10">— Mr. Suresh Dissanayake</p>
        </div>

        <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif mb-6 max-w-3xl">
          Real strength and purpose in professional life come from working <em>with</em> others — not despite them.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <MermaidDiagram chart={teamworkMindmap} caption="Why Teamwork Matters" />

          <Polaroid
            src="/Week 8/Why Teamwork Matters Radial Spokes.png"
            alt="Why Teamwork Matters Radial Spokes"
            caption="Teamwork Spokes Infographic"
            rotation="right"
          >
            <Tape variant="gold" className="-top-4 right-10 z-50 -rotate-3" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Characteristics of Effective Teams */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Characteristics of Effective Teams" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl">
          {[
            { icon: '🗣️', text: 'Clear and open communication' },
            { icon: '🌟', text: 'Recognition of individual talent and contribution' },
            { icon: '🏡', text: 'A genuine sense of belonging and psychological safety' },
            { icon: '🎯', text: 'Clear leadership with defined direction' },
            { icon: '📐', text: 'Structured roles and responsibilities' },
            { icon: '✅', text: 'Achievable, clearly communicated goals' },
            { icon: '🔄', text: 'Regular, constructive feedback loops' },
            { icon: '💡', text: 'Always solution-focused — not problem-obsessed' },
          ].map((item, i) => (
            <div key={i} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-3 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-xl">{item.icon}</span>
              <p className="font-serif text-scrapbook-ink/90 text-[13px] mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Tuckman's 5 Stages */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Tuckman's 5 Stages of Group Development" />

        <MermaidDiagram chart={tuckmanStages} caption="Tuckman's Group Development Model" className="max-w-3xl mb-6" />

        <div className="space-y-3 max-w-4xl">
          {[
            { stage: 'Forming', what: 'Excitement + uncertainty; testing boundaries', leadership: 'Provide clear direction and structure', color: 'bg-[#E9C46A]/20' },
            { stage: 'Storming', what: 'Conflict; personality clashes; power struggles', leadership: 'Facilitate discussion; normalise disagreement', color: 'bg-[#E76F51]/15' },
            { stage: 'Norming', what: 'Cohesion forms; rules emerge; trust builds', leadership: 'Encourage collaboration; step back slightly', color: 'bg-[#2D6A4F]/10' },
            { stage: 'Performing', what: 'High-functioning; shared goals; low friction', leadership: 'Support; celebrate wins; remove blockers', color: 'bg-[#457B9D]/10' },
            { stage: 'Adjourning', what: 'Completion; reflection; transition', leadership: 'Acknowledge contributions; capture learnings', color: 'bg-[#9B72CF]/10' },
          ].map((item) => (
            <div key={item.stage} className={`flex flex-col sm:flex-row gap-4 p-4 rounded-sm border border-scrapbook-tan/10 ${item.color}`}>
              <strong className="font-serif text-scrapbook-ink text-sm w-28 flex-shrink-0">{item.stage}</strong>
              <div className="flex-1">
                <span className="font-serif text-scrapbook-ink/80 text-[13px] block">{item.what}</span>
              </div>
              <div className="flex-1">
                <span className="font-serif text-scrapbook-ink/70 text-[13px] italic block">Leadership: {item.leadership}</span>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 italic text-scrapbook-ink/80 font-serif mt-6 max-w-3xl">
          <strong>Key insight:</strong> Every team goes through <em>all 5 stages</em> — even conflict during Storming is not a failure. It is a necessary step toward high performance.
        </blockquote>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Kenneth Thomas Conflict Management Model */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Kenneth Thomas Conflict Management Model (1971)" icon={<Shield size={32} />} />

        <p className="font-serif text-lg text-scrapbook-ink/90 mb-6 max-w-3xl">
          Thomas maps conflict styles against <strong>how important the goal is to you</strong> and <strong>how important the relationship is to you</strong>:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Manual 2x2 Grid */}
          <div className="relative">
            <PaperClip variant="gold" className="-top-8 -left-2" />
            <div className="bg-[#fdfbf7] rounded-sm shadow-lg overflow-hidden border border-scrapbook-tan/20">
              {/* Axis Labels */}
              <div className="text-center font-sans text-[10px] uppercase tracking-widest text-scrapbook-ink/50 font-bold pt-3 px-3">
                Goal Importance ↑
              </div>
              <div className="grid grid-cols-2 gap-2 p-3 relative">
                {/* Top Row */}
                <div className="bg-[#F4A261] text-white p-4 rounded-sm hover:scale-[1.02] transition-transform">
                  <span className="text-2xl block mb-1">🦈</span>
                  <strong className="block font-serif text-sm">SHARK — Competing</strong>
                  <p className="text-[11px] mt-1 opacity-90">High goal · Low relationship</p>
                  <p className="text-[11px] mt-1 opacity-80 italic">Emergency decisions requiring fast action</p>
                </div>
                <div className="bg-[#2D6A4F] text-white p-4 rounded-sm hover:scale-[1.02] transition-transform">
                  <span className="text-2xl block mb-1">🦉</span>
                  <strong className="block font-serif text-sm">OWL — Collaborating</strong>
                  <p className="text-[11px] mt-1 opacity-90">High goal · High relationship</p>
                  <p className="text-[11px] mt-1 opacity-80 italic">Long-term partnerships where both sides matter</p>
                </div>

                {/* Center Fox */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F8BBD9] text-scrapbook-ink p-3 rounded-full border-2 border-scrapbook-ink/20 shadow-lg z-20 text-center w-24 h-24 flex flex-col items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-xl">🦊</span>
                  <strong className="font-serif text-[10px] block">FOX</strong>
                  <span className="font-serif text-[8px]">Compromising</span>
                </div>

                {/* Bottom Row */}
                <div className="bg-[#9E9E9E] text-white p-4 rounded-sm hover:scale-[1.02] transition-transform">
                  <span className="text-2xl block mb-1">🐢</span>
                  <strong className="block font-serif text-sm">TURTLE — Avoiding</strong>
                  <p className="text-[11px] mt-1 opacity-90">Low goal · Low relationship</p>
                  <p className="text-[11px] mt-1 opacity-80 italic">Issue is trivial or timing is wrong</p>
                </div>
                <div className="bg-[#90C8E0] text-scrapbook-ink p-4 rounded-sm hover:scale-[1.02] transition-transform">
                  <span className="text-2xl block mb-1">🧸</span>
                  <strong className="block font-serif text-sm">TEDDY BEAR — Accommodating</strong>
                  <p className="text-[11px] mt-1 opacity-80">Low goal · High relationship</p>
                  <p className="text-[11px] mt-1 opacity-70 italic">Preserving the relationship matters more</p>
                </div>
              </div>
              <div className="text-center font-sans text-[10px] uppercase tracking-widest text-scrapbook-ink/50 font-bold pb-3 px-3">
                ← Relationship Importance →
              </div>
            </div>
          </div>

          <Polaroid
            src="/Week 8/Thomas Conflict Management 2×2 Matrix.png"
            alt="Thomas Conflict Management Matrix"
            caption="Conflict Management Model"
            rotation="left"
          >
            <Tape variant="rose" className="-top-4 left-10 z-50 rotate-3" />
          </Polaroid>
        </div>

        {/* Summary Table */}
        <div className="mt-6 overflow-x-auto max-w-4xl">
          <div className="bg-[#fdfbf7] rounded-sm shadow-md border border-scrapbook-tan/20 p-4">
            <div className="grid grid-cols-5 gap-2 text-[12px] font-serif">
              <div className="font-bold text-scrapbook-ink p-2 border-b border-scrapbook-tan/20">Animal</div>
              <div className="font-bold text-scrapbook-ink p-2 border-b border-scrapbook-tan/20">Style</div>
              <div className="font-bold text-scrapbook-ink p-2 border-b border-scrapbook-tan/20">Goal</div>
              <div className="font-bold text-scrapbook-ink p-2 border-b border-scrapbook-tan/20">Relationship</div>
              <div className="font-bold text-scrapbook-ink p-2 border-b border-scrapbook-tan/20">Best Used When</div>
              {[
                { animal: '🦈 Shark', style: 'Competing', goal: 'High', rel: 'Low', when: 'Emergency decisions' },
                { animal: '🦉 Owl', style: 'Collaborating', goal: 'High', rel: 'High', when: 'Long-term partnerships' },
                { animal: '🦊 Fox', style: 'Compromising', goal: 'Medium', rel: 'Medium', when: 'Quick practical solutions' },
                { animal: '🐢 Turtle', style: 'Avoiding', goal: 'Low', rel: 'Low', when: 'Trivial issues' },
                { animal: '🧸 Teddy Bear', style: 'Accommodating', goal: 'Low', rel: 'High', when: 'Preserving relationships' },
              ].map((row) => (
                <React.Fragment key={row.animal}>
                  <div className="p-2 text-scrapbook-ink/90">{row.animal}</div>
                  <div className="p-2 text-scrapbook-ink/80">{row.style}</div>
                  <div className="p-2 text-scrapbook-ink/80">{row.goal}</div>
                  <div className="p-2 text-scrapbook-ink/80">{row.rel}</div>
                  <div className="p-2 text-scrapbook-ink/70">{row.when}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Tower Challenge Activity */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Activity: A4 Paper Tower Challenge" icon={<Trophy size={32} />} />

        <p className="font-serif text-lg text-scrapbook-ink/90 mb-4 max-w-3xl">
          Divided into 4 groups, each team received only <strong>2 sheets of A4 paper and 10 minutes</strong> to build the <strong>tallest free-standing tower</strong> — no other materials.
        </p>

        <div className="bg-[#2b1f17] text-scrapbook-paper p-6 rounded-sm shadow-lg relative overflow-hidden max-w-3xl mb-6">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("/stucco.png")' }}></div>
          <Stamp text="WINNERS" color="red" rotation="-rotate-12" className="top-2 right-4 opacity-50 scale-75" />
          <div className="relative z-10 text-center">
            <span className="text-4xl">🏆</span>
            <p className="font-handwriting text-4xl text-scrapbook-glow mt-2">Our group built the HIGHEST tower!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {[
            { title: 'Synergy', desc: 'Our combined approach produced something none of us would have built alone' },
            { title: 'Communication', desc: 'Fast, clear decisions under time pressure were decisive' },
            { title: 'Leadership', desc: 'Someone had to commit to a design quickly and rally the team' },
            { title: 'Problem-Solving', desc: 'Adapting mid-build when our first structure started to lean' },
            { title: 'Flexibility', desc: 'Each person contributed different folding and structural ideas' },
          ].map((item) => (
            <div key={item.title} className="bg-scrapbook-paperDark/30 border border-scrapbook-tan/15 rounded-sm p-4">
              <strong className="font-serif text-scrapbook-ink text-sm block">✅ {item.title}</strong>
              <span className="font-serif text-scrapbook-ink/70 text-xs">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-scrapbook-paperDark/40 border-l-4 border-scrapbook-accent p-5 rounded-r-md font-serif text-scrapbook-ink/90 text-[15px] shadow-sm max-w-3xl italic">
          A rival team's tower collapsed at the very last second — showing how poor communication, unclear leadership, and weak coordination can destroy even a strong idea under pressure. That moment taught more than any success could.
        </div>
      </section>

      <SectionDivider variant="dots" className="my-6" />

      {/* Movie Clips */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Movie Clips Used in Class" icon={<Film size={32} />} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          {[
            { movie: 'The Avengers — Chitauri Battle', lesson: 'People from completely different backgrounds uniting for a single shared goal', emoji: '🦸' },
            { movie: 'Lord of the Rings — Forming the Fellowship', lesson: 'The Forming and Norming stages; different skills converging around one mission', emoji: '💍' },
            { movie: 'The Last Ship', lesson: 'Leadership under extreme pressure; maintaining team cohesion in crisis', emoji: '🚢' },
          ].map((item) => (
            <StickyNote key={item.movie} color="tan" rotation="none">
              <span className="text-3xl block mb-2">{item.emoji}</span>
              <strong className="block mb-1 font-handwriting text-2xl">{item.movie}</strong>
              <p className="text-[13px] text-scrapbook-ink/80">{item.lesson}</p>
            </StickyNote>
          ))}
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

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
              This session brought together everything we'd covered across the entire module. The tower-building activity was the highlight — not because we won, but because I could <em>see</em> every concept playing out in real time. We formed, stormed briefly over design disagreements, normed around a shared approach, performed under pressure, and adjourned with pride.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              Mr. Suresh's opening quote stayed with me. In IT, where projects are increasingly complex and distributed, knowing how to build and lead effective teams isn't optional — it's the foundation everything else rests on.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              The Kenneth Thomas model helped me identify my own default conflict style. I lean toward <strong>Owl (Collaborating)</strong> — I want solutions that genuinely work for everyone, even when that takes more time. That self-knowledge is something I'll carry into every team I join.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="🌟 Key Takeaways" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
            <ul className="space-y-3 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>Effective teamwork requires synergy, support, equality, and clear leadership — not just technical skill.</li>
              <li>Every team naturally goes through Tuckman's 5 stages — Storming is normal, not a sign of failure.</li>
              <li>Understanding your conflict style (Thomas model) helps you manage disagreements strategically.</li>
              <li>Being a great team leader means understanding people and creating belonging — not just giving instructions.</li>
              <li>Practical challenges (like the tower activity) reveal more about team dynamics than theory alone.</li>
            </ul>
          </StickyNote>

          <StickyNote title="🚀 Application to Real Life" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
              <li><strong>Now:</strong> Using Tuckman's stages to diagnose where our group projects are — especially recognising Storming as a normal, temporary phase, not a crisis.</li>
              <li><strong>Future:</strong> Focusing on clear communication and regular team feedback in all collaborative work.</li>
              <li><strong>Long-term:</strong> Embracing diversity in teams; developing leadership that creates genuine belonging and drives high performance.</li>
            </ul>
          </StickyNote>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Overall Reflection */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="bg-[#2b1f17] text-scrapbook-paper p-6 sm:p-10 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("/stucco.png")' }}></div>
          <Stamp text="COMPLETE" color="red" rotation="-rotate-12" className="top-4 right-6 opacity-40" />

          <div className="relative z-10">
            <h3 className="font-handwriting text-4xl sm:text-5xl text-scrapbook-glow mb-6 transform -rotate-1">📖 Overall Reflection</h3>

            <p className="font-serif text-scrapbook-paper/90 text-[15px] leading-relaxed mb-6">
              Through the Professional Skills module (IT1215), I've built a foundation of competencies that extend far beyond technical IT knowledge. Each session added a new layer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { week: '1', topic: 'The Harbor', change: 'Shifted from passive assignment holder to active portfolio builder' },
                { week: '2', topic: 'Professional Skills', change: 'Understood that technical excellence needs professional character to succeed' },
                { week: '3', topic: 'Emotional Intelligence', change: 'Realised emotions are a team dynamic, not a private matter' },
                { week: '4', topic: 'CV Writing', change: 'Learned to present myself strategically, not just factually' },
                { week: '5', topic: 'Research', change: 'Developed a structured, evidence-first approach to problem-solving' },
                { week: '6', topic: 'Agendas & Meetings', change: 'Built real confidence in leading and participating in formal settings' },
                { week: '7', topic: 'Negotiations', change: 'Discovered that every conversation is an opportunity for mutual value' },
                { week: '8', topic: 'Team Leadership', change: 'Proved that the best outcomes emerge from genuine collaboration' },
              ].map((item) => (
                <div key={item.week} className="bg-white/5 border border-white/10 rounded-sm p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full bg-scrapbook-accent text-scrapbook-bg flex items-center justify-center text-[10px] font-bold font-sans flex-shrink-0">{item.week}</span>
                    <strong className="font-serif text-scrapbook-glow text-sm">{item.topic}</strong>
                  </div>
                  <p className="font-serif text-scrapbook-paper/70 text-[12px] pl-8">{item.change}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-scrapbook-accent/50 pl-4 font-serif text-lg italic text-scrapbook-paper/90 leading-relaxed mb-4">
              "Professional skills are the operating system on which technical skills run. Without the OS, the best code in the world sits idle."
            </blockquote>
            <p className="font-sans text-sm text-scrapbook-tan pl-4">— Rahul Arambepola</p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 mt-8">
        <SectionHeader title="References" />
        <div className="bg-scrapbook-paperDark/20 p-6 rounded-sm border border-scrapbook-tan/10 max-w-3xl">
          <ul className="space-y-2 font-serif text-[13px] text-scrapbook-ink/70">
            <li>Goleman, D. (1995). <em>Emotional Intelligence</em>. Bantam Books.</li>
            <li>Salovey, P., & Mayer, J. D. (1990). Emotional Intelligence. <em>Imagination, Cognition and Personality</em>.</li>
            <li>Tuckman, B. (1965). Developmental Sequence in Small Groups. <em>Psychological Bulletin, 63</em>(6), 384–399.</li>
            <li>Thomas, K. W. (1971). <em>Conflict and Conflict Management</em>. Handbook of Industrial & Organizational Psychology.</li>
            <li>Kennedy, G. (1998). <em>The New Negotiating Edge</em>. Nicholas Brealey Publishing.</li>
            <li>Aristotle (350 BC). <em>The Nicomachean Ethics</em>.</li>
            <li>Peterson, C., & Seligman, M. E. P. (2004). <em>Character Strengths and Virtues</em>. Oxford University Press.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-dashed border-scrapbook-tan/30">
          <p className="font-serif text-scrapbook-ink/50 text-sm italic">
            Portfolio by Rahul Arambepola · SA24610322 · SLIIT City Uni · HND in Information Technology · June 2024 Intake · Module IT1215
          </p>
        </div>
      </section>

    </div>
  );
};
