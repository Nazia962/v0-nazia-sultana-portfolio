'use client'

import { FileText } from 'lucide-react'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 bg-gradient-to-b from-background via-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: About text */}
          <div className="space-y-6">
            <p className="text-lg text-secondary leading-relaxed">
              I'm a B.Tech student passionate about technology and innovation. With a strong foundation in 
              computer science fundamentals, I'm constantly exploring new technologies and building projects 
              that solve real-world problems.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My journey in tech started with a curiosity about how things work, which evolved into a passion 
              for building elegant, user-centric solutions. I believe in continuous learning and pushing the 
              boundaries of what's possible.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Currently, I'm focused on developing full-stack web applications, exploring cloud technologies, 
              and contributing to open-source projects. I'm always excited to collaborate with like-minded 
              individuals and tackle challenging problems.
            </p>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-secondary mt-1">Projects</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-secondary mt-1">Skills</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-secondary mt-1">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right: Skills preview and CTA */}
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-xl space-y-4">
              <h3 className="text-2xl font-bold">Quick Facts</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-primary font-semibold mb-1">Education</p>
                  <p className="text-secondary">B.Tech in Computer Science & Engineering</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-1">Focus Areas</p>
                  <p className="text-secondary">Web Development, Cloud Computing, Data Structures</p>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-1">Learning Goals</p>
                  <p className="text-secondary">Advanced system design, AI/ML applications, DevOps</p>
                </div>
              </div>
            </div>

            {/* Resume CTA */}
            <button className="glow-primary-hover w-full bg-primary/10 hover:bg-primary/20 border border-primary text-primary px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
              <FileText size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
