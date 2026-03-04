'use client'

import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Cpu,
  GitBranch,
  Palette,
  Zap,
} from 'lucide-react'

const skills = [
  {
    icon: Code2,
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Database,
    name: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Cloud,
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Git', 'Linux'],
  },
  {
    icon: Smartphone,
    name: 'Mobile',
    items: ['React Native', 'Flutter', 'Mobile Optimization'],
  },
  {
    icon: Cpu,
    name: 'Core CS',
    items: ['DSA', 'OOP', 'System Design', 'Algorithms'],
  },
  {
    icon: Palette,
    name: 'Design',
    items: ['UI/UX', 'Figma', 'Responsive Design', 'Accessibility'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills developed through continuous learning and practical projects.
          </p>
          <div className="section-divider w-24 mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={index}
                className="glass-effect-hover glass-effect p-6 rounded-xl group transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <IconComponent
                    size={28}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional skills highlight */}
        <div className="mt-16 glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Other Competencies</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: GitBranch, text: 'Version Control' },
              { icon: Zap, text: 'Performance Optimization' },
              { icon: Code2, text: 'API Development' },
              { icon: Palette, text: 'Web Standards' },
            ].map((item, i) => {
              const IconComponent = item.icon
              return (
                <div key={i} className="flex items-center gap-3">
                  <IconComponent size={20} className="text-primary flex-shrink-0" />
                  <span className="text-secondary">{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
