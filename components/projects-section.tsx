'use client'

import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'AI Content Generator',
    description: 'An intelligent web application that leverages AI to generate creative content. Features real-time streaming, multiple content types, and a beautiful, responsive UI.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel AI SDK', 'Tailwind CSS'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product catalog, cart management, secure checkout, and admin dashboard for inventory management.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'React', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration features, and intuitive kanban board interface.',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application providing real-time weather data, forecasts, and beautiful visualizations with location-based services.',
    tags: ['React', 'OpenWeather API', 'Geolocation', 'Charts.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website featuring smooth animations, glassmorphism effects, and optimized performance.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    link: '#',
    github: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Content-rich blogging platform with markdown support, comments, categories, search functionality, and social sharing features.',
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'MDX'],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A curated collection of projects showcasing my skills in full-stack development, design, and problem-solving.
          </p>
          <div className="section-divider w-24 mx-auto mt-6"></div>
        </div>

        {/* Featured Project */}
        {projects[0] && (
          <div className="mb-16 glass-effect-hover glass-effect p-8 rounded-xl overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project info */}
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  Featured Project
                </div>
                <h3 className="text-3xl font-bold">{projects[0].title}</h3>
                <p className="text-lg text-secondary leading-relaxed">{projects[0].description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {projects[0].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6">
                  <a
                    href={projects[0].link}
                    className="glow-primary-hover inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Live Demo
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={projects[0].github}
                    className="glass-effect-hover glass-effect inline-flex items-center gap-2 text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    GitHub
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Placeholder for image */}
              <div className="h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🚀</div>
                  <p className="text-secondary">Project Screenshot</p>
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
              className="glass-effect-hover glass-effect p-6 rounded-xl flex flex-col group transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Project header */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-secondary text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-muted text-secondary rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-secondary rounded-full text-xs font-medium">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-primary/20">
                <a
                  href={project.link}
                  className="flex-1 inline-flex items-center justify-center gap-1 text-primary hover:text-primary font-medium transition-colors text-sm pt-4"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a
                  href={project.github}
                  className="flex-1 inline-flex items-center justify-center gap-1 text-primary hover:text-primary font-medium transition-colors text-sm pt-4"
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
