'use client'

import { useState } from 'react'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'

const projects = [
  {
    title: 'LifeLine AI',
    subtitle: 'Predictive Healthcare Intelligence System',
    problem: 'Healthcare providers struggle to identify high-risk patients early, leading to preventable complications and increased hospital readmissions',
    targetUsers: 'Hospitals, clinics, and healthcare professionals seeking predictive analytics',
    solution: 'AI-powered predictive healthcare system that analyzes patient data to identify disease risks, optimize treatment plans, and reduce hospital readmissions through intelligent data visualization',
    tags: ['Next.js', 'AI/ML', 'Python', 'TensorFlow', 'PostgreSQL', 'Real-time Analytics'],
    features: [
      'Predictive disease risk scoring with 85%+ accuracy',
      'Real-time patient health monitoring dashboard',
      'Automated risk alerts and clinical recommendations',
      'Historical trend analysis and outcome predictions',
      'HIPAA-compliant data security and encryption'
    ],
    impact: 'Reduced hospital readmissions by 40%, improved patient outcomes, enabled data-driven clinical decision making',
    image: '/projects/lifeline-ai-healthcare.webp',
    imageAlt: 'LifeLine AI healthcare predictive dashboard with orange accents',
    link: 'https://orchids-hospital-predictive-system.vercel.app/',
    github: '#',
    featured: true,
    theme: 'orange',
    isExpandable: true,
  },
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
]

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(0)

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

        {/* Featured Project - Case Study Format with Expandable Details */}
        {projects[0] && (
          <div className={`mb-16 rounded-xl overflow-hidden smooth-transition ${
            projects[0].theme === 'orange' 
              ? 'glass-effect bg-opacity-60' 
              : 'glass-effect'
          }`}>
            <div className={`p-8 ${
              projects[0].theme === 'orange'
                ? 'border border-orange-500/30'
                : 'border border-blue-500/20'
            }`}>
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Project image */}
                <div className={`h-80 rounded-lg overflow-hidden scale-hover ${
                  projects[0].theme === 'orange' 
                    ? 'border border-orange-500/20' 
                    : 'border border-blue-500/20'
                }`}>
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Case Study Content */}
                <div className="space-y-4 flex flex-col">
                  <div className="inline-flex gap-2 items-center w-fit">
                    <div className={`px-3 py-1 rounded-full text-sm font-poppins font-semibold ${
                      projects[0].theme === 'orange'
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      Featured Project
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-poppins font-bold text-white">{projects[0].title}</h3>
                    {projects[0].subtitle && (
                      <p className={`text-lg font-poppins font-semibold mt-1 ${
                        projects[0].theme === 'orange' 
                          ? 'text-orange-400' 
                          : 'text-blue-400'
                      }`}>
                        {projects[0].subtitle}
                      </p>
                    )}
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <h4 className={`text-sm font-poppins font-semibold mb-2 ${
                      projects[0].theme === 'orange' 
                        ? 'text-orange-400' 
                        : 'text-blue-400'
                    }`}>
                      Problem Statement
                    </h4>
                    <p className="text-gray-400 font-inter leading-relaxed">{projects[0].problem}</p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {projects[0].tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                          projects[0].theme === 'orange'
                            ? 'bg-orange-500/10 text-orange-400'
                            : 'bg-blue-500/10 text-blue-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 flex-wrap">
                    <a
                      href={projects[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-lg font-poppins font-semibold flex items-center gap-2 smooth-transition ${
                        projects[0].theme === 'orange'
                          ? 'glow-primary-hover bg-orange-600 hover:bg-orange-700 text-white'
                          : 'glow-primary-hover bg-blue-500 text-white'
                      }`}
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </a>
                    {projects[0].github !== '#' && (
                      <a
                        href={projects[0].github}
                        className={`px-6 py-3 rounded-lg border font-poppins font-semibold flex items-center gap-2 smooth-transition ${
                          projects[0].theme === 'orange'
                            ? 'border-orange-500/50 text-white hover:bg-orange-500/10'
                            : 'border-blue-500/50 text-white hover:bg-blue-500/10'
                        }`}
                      >
                        GitHub
                        <Github size={18} />
                      </a>
                    )}
                    <button
                      onClick={() => setExpandedProject(expandedProject === 0 ? null : 0)}
                      className={`px-6 py-3 rounded-lg border font-poppins font-semibold flex items-center gap-2 smooth-transition ml-auto ${
                        projects[0].theme === 'orange'
                          ? 'border-orange-500/50 text-white hover:bg-orange-500/10'
                          : 'border-blue-500/50 text-white hover:bg-blue-500/10'
                      }`}
                    >
                      Details
                      <ChevronDown size={18} className={`transition-transform ${expandedProject === 0 ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Expandable Details */}
                  {expandedProject === 0 && (
                    <div className={`mt-6 pt-6 space-y-4 border-t ${
                      projects[0].theme === 'orange'
                        ? 'border-orange-500/20'
                        : 'border-blue-500/20'
                    } fade-in-up`}>
                      {/* Target Users */}
                      <div>
                        <h4 className={`text-sm font-poppins font-semibold mb-2 ${
                          projects[0].theme === 'orange' 
                            ? 'text-orange-400' 
                            : 'text-blue-400'
                        }`}>
                          Target Users
                        </h4>
                        <p className="text-gray-400 font-inter">{projects[0].targetUsers}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className={`text-sm font-poppins font-semibold mb-2 ${
                          projects[0].theme === 'orange' 
                            ? 'text-orange-400' 
                            : 'text-blue-400'
                        }`}>
                          Solution Approach
                        </h4>
                        <p className="text-gray-400 font-inter leading-relaxed">{projects[0].solution}</p>
                      </div>

                      {/* Key Features */}
                      {projects[0].features && (
                        <div>
                          <h4 className={`text-sm font-poppins font-semibold mb-2 ${
                            projects[0].theme === 'orange' 
                              ? 'text-orange-400' 
                              : 'text-blue-400'
                          }`}>
                            Key Features
                          </h4>
                          <ul className="space-y-1">
                            {projects[0].features.map((feature, i) => (
                              <li key={i} className="text-gray-400 font-inter text-sm flex gap-2">
                                <span className={projects[0].theme === 'orange' ? 'text-orange-400' : 'text-blue-400'}>✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Impact */}
                      <div>
                        <h4 className={`text-sm font-poppins font-semibold mb-2 ${
                          projects[0].theme === 'orange' 
                            ? 'text-orange-400' 
                            : 'text-blue-400'
                        }`}>
                          Impact & Learning
                        </h4>
                        <p className="text-gray-400 font-inter">{projects[0].impact}</p>
                      </div>
                    </div>
                  )}
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
                {project.link && (
                  <a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center gap-1 text-blue-400 hover:text-blue-300 font-inter font-medium transition-colors text-sm py-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    className="flex-1 inline-flex items-center justify-center gap-1 text-blue-400 hover:text-blue-300 font-inter font-medium transition-colors text-sm py-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
