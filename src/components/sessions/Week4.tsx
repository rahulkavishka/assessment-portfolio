import React from 'react';
import { Polaroid } from '../scrapbook/Polaroid';
import { StickyNote } from '../scrapbook/StickyNote';
import { Tape } from '../scrapbook/Tape';
import { SectionHeader } from '../scrapbook/SectionHeader';
import { SectionDivider } from '../scrapbook/SectionDivider';
import { FileText, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

export const Week4: React.FC = () => {
  return (
    <div className="space-y-10 py-4 pb-10">

      {/* Week Title Banner */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 text-center mb-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-scrapbook-accent font-bold">Week 4</span>
        <h2 className="font-handwriting text-5xl sm:text-6xl text-scrapbook-ink mt-1 transform -rotate-1">📄 CV Writing</h2>
        <p className="font-serif text-sm text-scrapbook-ink/60 mt-1">Lecturer: Ms. Anuththara · 09/02/2026</p>
        <p className="font-serif text-base text-scrapbook-ink/70 mt-2 max-w-2xl mx-auto italic">
          Crafting a professional CV and cover letter that stands out to employers and passes Applicant Tracking Systems (ATS).
        </p>
      </section>

      {/* What is a CV */}
      <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="What is a CV?" icon={<FileText size={32} />} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-scrapbook-ink/90 font-serif">
              A CV (Curriculum Vitae) is the <strong className="text-scrapbook-ink font-semibold">first document that introduces you to a potential employer</strong>. It is your personal marketing document - not simply a record of facts, but a strategically crafted tool designed to get you an interview.
            </p>

            <h4 className="font-handwriting text-3xl text-scrapbook-ink">A strong CV must be:</h4>
            <div className="space-y-2">
              {[
                'Clear, clean, and well-structured',
                'Tailored specifically to each job application',
                'Error-free (spelling or grammar errors eliminate applications immediately)',
                'Keyword-optimised to pass Applicant Tracking Systems (ATS)',
                'Packed with achievements, not just duties',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-scrapbook-paperDark/20 p-3 rounded-sm">
                  <span className="text-green-600 flex-shrink-0 mt-0.5">✅</span>
                  <span className="font-serif text-scrapbook-ink/90 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Polaroid
            src="/Week 4/CV Structure Vertical Flowchart.png"
            alt="CV Structure Flowchart"
          >
            <Tape variant="dark" className="-top-4 right-1/2 translate-x-1/2 z-50 -rotate-2" />
          </Polaroid>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* Include vs Avoid */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* What to Include */}
          <div>
            <SectionHeader title="What to Include" icon={<CheckCircle size={28} />} />
            <StickyNote color="green" rotation="left" variant="folded">
              <Tape variant="sage" className="-top-4 left-6 -rotate-6" />
              <ul className="space-y-3 text-[14px]">
                {[
                  { title: 'Targeted Profile', desc: "Must 'mirror' what the employer says they want - use their own keywords" },
                  { title: 'Strong Personality', desc: "Most CVs feel generic; showing who you are makes you memorable" },
                  { title: 'Achievements', desc: 'Aim for up to 20 achievements from both work and life experiences' },
                  { title: 'Action Verbs', desc: '"Developed", "Led", "Implemented", "Designed" - active language shows impact' },
                  { title: 'Quantifiable Results', desc: '"Improved loading speed by 40%" beats "improved performance" every time' },
                  { title: 'Relevant Keywords', desc: 'Pulled from the job description to pass ATS filters' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <div>
                      <strong className="block text-scrapbook-ink font-serif">{item.title}</strong>
                      <span className="text-scrapbook-ink/90">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </StickyNote>
          </div>

          {/* What to Avoid */}
          <div>
            <SectionHeader title="What to Avoid" icon={<AlertTriangle size={28} />} />
            <StickyNote color="pink" rotation="right">
              <Tape variant="rose" className="-top-4 right-6 rotate-6" />
              <ul className="space-y-3 text-[14px]">
                {[
                  { title: 'Passive language', desc: '"Responsibilities included..." shows tasks, not success' },
                  { title: 'Unexplained gaps', desc: 'Employers draw their own negative conclusions - explain gaps briefly and positively' },
                  { title: 'Irrelevant information', desc: 'Date of birth, marital status, short-term unrelated jobs' },
                  { title: 'Spelling or grammar errors', desc: 'Can immediately disqualify your application' },
                  { title: 'Generic, untailored content', desc: 'A one-size-fits-all CV rarely passes the first review' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <div>
                      <strong className="block text-scrapbook-ink font-serif">{item.title}</strong>
                      <span className="text-scrapbook-ink/70">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </StickyNote>
          </div>
        </div>
      </section>

      <SectionDivider variant="wavy" className="my-6" />

      {/* ATS */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionHeader title="Understanding ATS" />

        <p className="font-serif text-lg text-scrapbook-ink/90 mb-6 max-w-3xl">
          Most companies use software to filter CVs <em>before a human ever sees them</em>:
        </p>

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-xl">
            <Polaroid
              src="/Week 4/ats.png"
              alt="ats"
            >
              <Tape variant="gold" className="-top-4 left-10 z-50 rotate-3" />
            </Polaroid>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-handwriting text-3xl text-scrapbook-ink mb-4">Tips to pass ATS:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-5xl">
            {[
              'Use exact keywords from the job description',
              "Avoid fancy graphics, tables, or icons that ATS can't parse",
              'Use standard section headings (Work Experience, Education, Skills)',
              'Submit as PDF or Word as specified in the posting',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-scrapbook-paperDark/20 p-3 rounded-sm border-l-4 border-scrapbook-accent/50">
                <span className="w-6 h-6 rounded-full bg-scrapbook-accent text-scrapbook-bg flex items-center justify-center text-sm font-bold flex-shrink-0 font-sans">{i + 1}</span>
                <span className="font-serif text-scrapbook-ink/90 text-[16px]">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="scissors" className="my-6" />

      {/* Cover Letter & LinkedIn */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <SectionHeader title="The Cover Letter" />
            <StickyNote color="tan" rotation="left">
              <Tape variant="washi-dots" className="-top-4 left-1/2 -translate-x-1/2" />
              <p className="mb-3 text-[15px]">A cover letter is a <strong>personalised, 1-page introduction</strong> that accompanies your CV:</p>
              <ul className="list-disc pl-5 space-y-2 text-[14px]">
                <li><strong>Show your personality</strong> - differentiates you from identical CVs</li>
                <li><strong>Explain why this company</strong> - proves genuine research</li>
                <li><strong>Match skills to needs</strong> - shows you've read the job description</li>
                <li><strong>Be concise</strong> - every word must earn its place</li>
              </ul>
            </StickyNote>
          </div>

          <div>
            <SectionHeader title="LinkedIn as a Living CV" />
            <StickyNote color="blue" rotation="right" variant="folded">
              <Tape variant="sage" className="-top-4 right-6 rotate-6" />
              <blockquote className="italic text-[15px] text-scrapbook-ink/80 mb-3 border-l-2 border-blue-300 pl-3">
                Your LinkedIn profile is your CV that <em>works for you while you sleep.</em>
              </blockquote>
              <ul className="list-disc pl-5 space-y-2 text-[14px]">
                <li>Employers regularly check LinkedIn before calling for interviews</li>
                <li>Should reflect and expand your CV, not contradict it</li>
                <li>Recommendations add third-party credibility</li>
                <li>Shows professional activity: posts, articles, and engagement</li>
              </ul>
            </StickyNote>
          </div>
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
              Before this session, I thought writing a CV was simply listing qualifications and hoping for the best. Learning about ATS systems was genuinely eye-opening - your CV might never be seen by a human if it's not keyword-optimised. The cover letter exercise also showed how small changes (an action verb here, a specific achievement there) transform a generic document into something that actually commands attention.
            </p>
            <p className="font-serif text-scrapbook-ink/85 text-[15px] leading-relaxed relative z-10 mt-3">
              As I work toward my first IT internship, I now understand that my GitHub repositories and LinkedIn profile need to tell a consistent, professional story - one that connects my academic work to real-world value.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <StickyNote title="🌟 Key Takeaways" color="blue" rotation="left" variant="folded">
            <Tape variant="washi-dots" className="-top-4 right-10" />
            <ul className="space-y-3 list-disc pl-4 marker:text-blue-500 text-[15px]">
              <li>A CV is a marketing document - not just a fact list. Tailor it every time.</li>
              <li>Research the company and use job-description keywords to pass ATS.</li>
              <li>A cover letter explains <em>why you're the right fit</em>, not just what you've done.</li>
              <li>LinkedIn is an important extension of your CV and should be kept professional.</li>
              <li>Action verbs and quantifiable achievements make a CV stand out.</li>
              <li>Common mistakes - spelling errors, irrelevant info - can instantly eliminate applications.</li>
            </ul>
          </StickyNote>

          <StickyNote title="🚀 Application to Real Life" color="green" rotation="right" variant="pinned">
            <ul className="space-y-4 list-disc pl-4 marker:text-green-500 text-[15px] mt-2">
              <li><strong>Now:</strong> Updating my CV and LinkedIn profile to reflect my current skills, projects, and academic achievements.</li>
              <li><strong>Future:</strong> Tailoring every application separately - matching my skills to each job description and writing a bespoke cover letter each time.</li>
              <li><strong>Long-term:</strong> Maintaining a "running achievements list" throughout my career so I always have strong, quantifiable content ready.</li>
            </ul>
          </StickyNote>
        </div>
      </section>

    </div>
  );
};
