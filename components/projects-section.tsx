'use client'

import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Smart Library Dashboard',
    problem: 'Students waste time searching for books in libraries with manual cataloging systems',
    targetUsers: 'College library staff and students',
    solution: 'AI-powered predictive library system with real-time book availability tracking and smart search',
    tags: ['Next.js', 'AI/ML', 'React', 'Tailwind CSS', 'Database'],
    impact: 'Reduced book search time by 80%, improved library operations efficiency',
    image: '/projects/smart-library-dashboard.webp',
    imageAlt: 'Smart library management dashboard with statistics and search',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Memory Booster Game',
    problem: 'Traditional memorization techniques are boring and ineffective for students',
    targetUsers: 'Students aged 14-25',
    solution: 'AI-powered learning game using spaced repetition and gamification to boost memory retention',
    tags: ['React', 'AI', 'Game Design', 'TypeScript'],
    impact: 'Improved retention rates by 60%, made learning engaging and fun',
    image: '/projects/memory-booster-game-ui.webp',
    imageAlt: 'Memory booster game interface with cards and scoring',
    link: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    problem: 'Teams struggle with scattered task tracking across multiple platforms',
    targetUsers: 'Remote teams and project managers',
    solution: 'Collaborative task management with real-time updates and kanban board interface',
    tags: ['React', 'Firebase', 'Redux'],
    impact: 'Enabled seamless team collaboration and 40% faster project delivery',
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    problem: 'Weather apps lack personalized, visually appealing data presentation',
    targetUsers: 'Weather enthusiasts and daily planners',
    solution: 'Interactive weather dashboard with real-time data and beautiful visualizations',
    tags: ['React', 'OpenWeather API', 'Charts.js'],
    impact: 'Built a clean, intuitive interface for weather information',
    link: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Platform',
    problem: 'Small businesses need affordable, scalable e-commerce solutions',
    targetUsers: 'Small business owners and online sellers',
    solution: 'Full-stack e-commerce platform with secure checkout and admin dashboard',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    impact: 'Enabled businesses to launch online stores with minimal setup',
    link: '#',
    github: '#',
  },
  {
    title: 'Blog Platform',
    problem: 'Content creators need a simple, powerful blogging platform',
    targetUsers: 'Writers, developers, and content creators',
    solution: 'Modern blogging platform with markdown support and social sharing',
    tags: ['Next.js', 'MongoDB', 'MDX'],
    impact: 'Democratized blogging with an accessible, feature-rich platform',
    link: '#',
    github: '#',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto">
            Case studies showcasing my approach to solving real-world problems through intelligent design and clean code.
          </p>
          <div className="section-divider w-24 mx-auto mt-6"></div>
        </div>

        {/* Featured Project - Case Study Format */}
        {projects[0] && (
          <div className="mb-16 glass-effect p-8 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project image */}
              <div className="h-80 rounded-lg overflow-hidden scale-hover">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Case Study Content */}
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-poppins font-semibold">
                  Featured Project
                </div>
                
                <h3 className="text-3xl font-poppins font-bold text-white">{projects[0].title}</h3>

                {/* Problem Statement */}
                <div>
                  <h4 className="text-sm font-poppins font-semibold text-blue-400 mb-2">Problem Statement</h4>
                  <p className="text-gray-400 font-inter leading-relaxed">{projects[0].problem}</p>
                </div>

                {/* Target Users */}
                <div>
                  <h4 className="text-sm font-poppins font-semibold text-blue-400 mb-2">Target Users</h4>
                  <p className="text-gray-400 font-inter">{projects[0].targetUsers}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-poppins font-semibold text-blue-400 mb-2">Solution Approach</h4>
                  <p className="text-gray-400 font-inter leading-relaxed">{projects[0].solution}</p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[0].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-inter font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="border-t border-blue-500/20 pt-4">
                  <h4 className="text-sm font-poppins font-semibold text-blue-400 mb-2">Impact & Learning</h4>
                  <p className="text-gray-400 font-inter">{projects[0].impact}</p>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={projects[0].link}
                    className="glow-primary-hover px-6 py-3 rounded-lg bg-blue-500 text-white font-poppins font-semibold flex items-center gap-2 smooth-transition"
                  >
                    Live Demo
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={projects[0].github}
                    className="btn-smooth px-6 py-3 rounded-lg border border-blue-500/50 text-white font-poppins font-semibold flex items-center gap-2"
                  >
                    GitHub
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl flex flex-col group scale-hover smooth-transition"
            >
              {/* Project title */}
              <h3 className="text-xl font-poppins font-bold mb-3 text-white">
                {project.title}
              </h3>

              {/* Problem */}
              <div className="mb-4">
                <p className="text-xs font-poppins font-semibold text-blue-400 mb-1">Problem</p>
                <p className="text-sm text-gray-400 font-inter leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-xs font-poppins font-semibold text-blue-400 mb-1">Solution</p>
                <p className="text-sm text-gray-400 font-inter leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-inter font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <p className="text-xs text-gray-500 font-inter mb-4 flex-grow border-t border-blue-500/20 pt-4">
                {project.impact}
              </p>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex-1 inline-flex items-center justify-center gap-1 text-blue-400 hover:text-blue-300 font-inter font-medium transition-colors text-sm py-2"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a
                  href={project.github}
                  className="flex-1 inline-flex items-center justify-center gap-1 text-blue-400 hover:text-blue-300 font-inter font-medium transition-colors text-sm py-2"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
