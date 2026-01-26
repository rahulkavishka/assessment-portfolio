import { useState } from 'react';
import { Github, Anchor, Users, BookOpen, Globe, Folder, Terminal, Palette, PenTool, LayoutGrid } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function App() {
  // State for the Features/Theory Tabs
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-violet-100">

      {/* ========== HERO SECTION ========== */}
      <div className="relative overflow-hidden bg-slate-900 min-h-[500px] flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-50/20"></div>
        </div>

        <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8">



            {/* Main Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-tl from-violet-400 to-blue-400">
                  Assessment Portfolio
                </span>
              </h1>
            </div>

            {/* Subtitle / Introduction */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-slate-100 leading-relaxed">
                Welcome to my digital harbor. This portfolio documents my journey through the
                <strong className="text-white"> Portfolio Management</strong> module, showcasing a weekly progression of
                theoretical knowledge, collaborative group tasks, and personal reflections.
              </p>
            </div>

            {/* Module Info Tags */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <span className="flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-white/20 border border-white/30 text-white shadow-sm backdrop-blur-sm">
                Theory Diagrams
              </span>
              <span className="flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-white/20 border border-white/30 text-white shadow-sm backdrop-blur-sm">
                Group Collaboration
              </span>
              <span className="flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-white/20 border border-white/30 text-white shadow-sm backdrop-blur-sm">
                Reflective Practice
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ========== END HERO ========== */}


      {/* ========== FEATURES / THEORY SECTION ========== */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">

          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">

            {/* Left Side: Text & Tabs */}
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-slate-800 font-bold sm:text-3xl">
                Week 1: Key Deliverables
              </h2>

              {/* Tab Navs */}
              <nav className="grid gap-4 mt-5 md:mt-10">

                {/* Tab 1 Trigger */}
                <button
                  onClick={() => setActiveTab(1)}
                  type="button"
                  className={`text-start p-4 md:p-5 rounded-xl transition-all ${activeTab === 1 ? 'bg-violet-50 border border-violet-100 shadow-sm' : 'hover:bg-slate-50'}`}
                >
                  <span className="flex gap-x-6">
                    <Anchor className={`mt-2 w-6 h-6 ${activeTab === 1 ? 'text-violet-600' : 'text-slate-500'}`} />
                    <span className="grow">
                      <span className={`block text-lg font-semibold ${activeTab === 1 ? 'text-violet-600' : 'text-slate-800'}`}>
                        Important Theory
                      </span>
                      <span className="block mt-1 text-slate-500">
                        The etymology of "Portfolio" (Port + Folio) and its key applications in professional life.
                      </span>
                    </span>
                  </span>
                </button>

                {/* Tab 2 Trigger */}
                <button
                  onClick={() => setActiveTab(2)}
                  type="button"
                  className={`text-start p-4 md:p-5 rounded-xl transition-all ${activeTab === 2 ? 'bg-violet-50 border border-violet-100 shadow-sm' : 'hover:bg-slate-50'}`}
                >
                  <span className="flex gap-x-6">
                    <Users className={`mt-2 w-6 h-6 ${activeTab === 2 ? 'text-violet-600' : 'text-slate-500'}`} />
                    <span className="grow">
                      <span className={`block text-lg font-semibold ${activeTab === 2 ? 'text-violet-600' : 'text-slate-800'}`}>
                        Group Task
                      </span>
                      <span className="block mt-1 text-slate-500">
                        Collaborative creation of a "Team Identity" portfolio focusing on skills and goals.
                      </span>
                    </span>
                  </span>
                </button>

                {/* Tab 3 Trigger */}
                <button
                  onClick={() => setActiveTab(3)}
                  type="button"
                  className={`text-start p-4 md:p-5 rounded-xl transition-all ${activeTab === 3 ? 'bg-violet-50 border border-violet-100 shadow-sm' : 'hover:bg-slate-50'}`}
                >
                  <span className="flex gap-x-6">
                    <BookOpen className={`mt-2 w-6 h-6 ${activeTab === 3 ? 'text-violet-600' : 'text-slate-500'}`} />
                    <span className="grow">
                      <span className={`block text-lg font-semibold ${activeTab === 3 ? 'text-violet-600' : 'text-slate-800'}`}>
                        Individual Task
                      </span>
                      <span className="block mt-1 text-slate-500">
                        Differentiating between Personal Portfolios (Hobbies) and Career Portfolios (Professional).
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
            </div>

            {/* Right Side: Content Area (Images/Text) */}
            <div className="lg:col-span-6 lg:col-start-1 lg:order-1">
              <div className="relative">

                {/* Tab 1 Content: Theory Diagrams & Details */}
                <div className={`${activeTab === 1 ? 'block' : 'hidden'} animate-in fade-in zoom-in duration-300`}>
                  <div className="space-y-6">
                    {/* The Harbor Concept */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                      <div className="flex items-center gap-3 mb-4 text-violet-600">
                        <Anchor className="w-6 h-6" />
                        <h3 className="text-xl font-bold">The "Harbor" Concept</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="font-bold text-violet-700">Port (Harbor)</p>
                          <p className="text-sm text-slate-600">A place to dock or store treasures safely.</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="font-bold text-violet-700">Folio (Sheet)</p>
                          <p className="text-sm text-slate-600">A collection of pages or ideas.</p>
                        </div>
                      </div>
                      <p className="text-slate-600 italic border-l-4 border-violet-200 ps-4">
                        "A portfolio is literally a 'Harbor of your sheets'—a safe place where work, ideas, and creations are collected, preserved, and displayed."
                      </p>
                    </div>

                    {/* Purpose & Formats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-slate-100 shadow-lg">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider">Main Functions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-slate-700">
                          <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Presenting yourself</p>
                          <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Organizing history</p>
                          <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Discovering strengths</p>
                        </CardContent>
                      </Card>
                      <Card className="border-slate-100 shadow-lg">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider">Formats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-slate-700">
                          <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg">
                            <span className="font-medium">Hard-copy</span>
                            <Folder className="w-4 h-4 text-slate-400" />
                          </div>
                          <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg">
                            <span className="font-medium">Digital</span>
                            <Globe className="w-4 h-4 text-violet-400" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Platforms Grid */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <LayoutGrid className="w-5 h-5 text-violet-500" />
                        Industry-Standard Platforms
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { title: "Developers", icon: Terminal, desc: "GitHub Pages", color: "blue" },
                          { title: "Designers", icon: Palette, desc: "Adobe Portfolio, Cargo", color: "pink" },
                          { title: "Writers", icon: PenTool, desc: "Journo Portfolio", color: "orange" },
                          { title: "General", icon: Globe, desc: "Squarespace, Pathbrite", color: "violet" }
                        ].map((plat) => (
                          <div key={plat.title} className="p-3 border border-slate-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 mb-1">
                              <plat.icon className={`w-4 h-4 text-${plat.color}-500`} />
                              <span className="text-sm font-bold text-slate-800">{plat.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-tight">{plat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 2 Content: Group Task */}
                <div className={`${activeTab === 2 ? 'block' : 'hidden'} animate-in fade-in zoom-in duration-300`}>
                  <div className="bg-gradient-to-br from-blue-600 to-violet-600 p-8 rounded-2xl text-white shadow-xl h-full min-h-[500px] flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">Task 1: The Group Portfolio</h3>
                    <ul className="space-y-4 text-blue-100 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="bg-white/20 p-1 rounded mt-1">✓</span>
                        <span>Defined "Who We Are" as a team.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white/20 p-1 rounded mt-1">✓</span>
                        <span>Mapped out our collective technical skills.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white/20 p-1 rounded mt-1">✓</span>
                        <span>Established shared goals for the semester.</span>
                      </li>
                    </ul>
                    <div className="mt-8 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <p className="font-semibold">Outcome:</p>
                      <p className="opacity-80 text-sm">A unified document demonstrating teamwork, communication, and reflection on our collaborative potential.</p>
                    </div>
                  </div>
                </div>

                {/* Tab 3 Content: Individual Task */}
                <div className={`${activeTab === 3 ? 'block' : 'hidden'} animate-in fade-in zoom-in duration-300`}>
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Personal vs. Career Portfolio</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-violet-600 mb-2">Personal Portfolio</h4>
                        <p className="text-slate-600 text-sm mb-2">Focus: Hobbies, Interests, Creative Expression.</p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">Photography</span>
                          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">Travel Blog</span>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="font-semibold text-blue-600 mb-2">Career Portfolio</h4>
                        <p className="text-slate-600 text-sm mb-2">Focus: Employability, Skills, Certifications.</p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">CV / Resume</span>
                          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">Project Evidence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg className="w-16 h-auto text-violet-500 opacity-20" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                  </svg>
                </div>

              </div>
            </div>
          </div>

          {/* Background Color Element */}
          <div className="absolute inset-0 grid grid-cols-12 size-full pointer-events-none">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-slate-50 w-full h-5/6 rounded-3xl sm:h-3/4 lg:h-full -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
      {/* ========== END FEATURES ========== */}


      {/* ========== REFLECTION / TESTIMONIAL ========== */}
      <div className="relative overflow-hidden py-12">
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Gradients */}
          <div aria-hidden="true" className="flex -z-1 absolute start-0 top-0">
            <div className="bg-violet-200 opacity-20 blur-3xl w-[1036px] h-[300px]"></div>
          </div>



          {/* Diagrams Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 group transition-all hover:shadow-2xl">
              <div className="overflow-hidden rounded-2xl mb-4 border border-slate-50">
                <img
                  src="/1.png"  // Reference directly from the public folder
                  alt="Etymology Diagram"
                  className="w-full h-auto object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h4 className="text-lg font-bold text-slate-800">Visual Theory: The Harbor Concept</h4>
                <p className="text-sm text-slate-500">Mapping the etymology of "Portfolio" to safe storage and display.</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 group transition-all hover:shadow-2xl">
              <div className="overflow-hidden rounded-2xl mb-4 border border-slate-50">
                <img
                  src="/2.png"  // Reference directly from the public folder
                  alt="Mind Map Diagram"
                  className="w-full h-auto object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h4 className="text-lg font-bold text-slate-800">Visual Strategy: Portfolio Applications</h4>
                <p className="text-sm text-slate-500">Differentiating between career documentation and professional identity.</p>
              </div>
            </div>
          </div>

          {/* Detailed Learning Reflection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Card className="border-none shadow-2xl bg-white overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-violet-500 to-blue-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="w-6 h-6 text-violet-500" />
                  What I Learned
                </CardTitle>
                <CardDescription>Key takeaways from this week's exploration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800">The "Harbor" Mindset</h4>
                  <p className="text-slate-600 text-sm">It's a continuous storage system. Preserving work now ensures readiness for future opportunities.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800">Platform Selection</h4>
                  <p className="text-slate-600 text-sm">Context matters. LinkedIn and GitHub are crucial anchors for professional visibility in my field.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800">Collaboration</h4>
                  <p className="text-slate-600 text-sm">Learned to merge diverse writing styles and formatting into a single, unified team voice.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-white overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="w-6 h-6 text-blue-500" />
                  How I Will Apply It
                </CardTitle>
                <CardDescription>Putting knowledge into practice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative ps-8 border-l-2 border-slate-100">
                  <span className="absolute -start-[9px] top-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </span>
                  <h4 className="font-bold text-slate-800">Immediate Application</h4>
                  <p className="text-slate-600 text-sm">Starting a organized "Harbor" folder structure for all semester assignments today.</p>
                </div>
                <div className="relative ps-8 border-l-2 border-slate-100">
                  <span className="absolute -start-[9px] top-0 w-4 h-4 rounded-full bg-cyan-100 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  </span>
                  <h4 className="font-bold text-slate-800">Future Application</h4>
                  <p className="text-slate-600 text-sm">Ensuring my Career Portfolio is evidence-based for internship applications next year.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* ========== END REFLECTION ========== */}


      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-slate-200">
        <div className="text-center">

          <div className="mt-3">
            <p className="text-slate-500">Created for SLIIT City Uni | Professional Skills Module</p>
            <p className="text-slate-500">
              © 2026 Rahul Arambepola.
            </p>
          </div>

          {/* Social Brands */}
          <div className="mt-3 space-x-2">
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-slate-500 hover:bg-slate-100 transition-colors" href="https://github.com/rahulkavishka">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}

    </div>
  )
}

export default App