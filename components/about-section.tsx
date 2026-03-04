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
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">About Me</h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: About text */}
          <div className="space-y-6">
            <p className="text-lg font-inter text-gray-400 leading-relaxed">
              I am an 19-year-old B.Tech student passionate about combining technology and education. I enjoy building intelligent systems that solve real-world academic problems, such as predictive library systems and AI-powered learning tools.
            </p>
            <p className="text-lg font-inter text-gray-400 leading-relaxed">
              My journey in tech started with curiosity about how systems work, evolving into a passion for creating elegant, user-centric solutions. I specialize in building full-stack web applications with modern technologies and clean, maintainable code.
            </p>
            <p className="text-lg font-inter text-gray-400 leading-relaxed">
              I'm focused on developing intelligent applications that combine AI, productivity tools, and creative problem-solving. Always excited to collaborate and tackle challenges that make a real-world impact.
            </p>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-poppins font-bold text-blue-400">5+</div>
                <div className="text-sm font-inter text-gray-500 mt-1">Projects</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-poppins font-bold text-blue-400">15+</div>
                <div className="text-sm font-inter text-gray-500 mt-1">Skills</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-poppins font-bold text-blue-400">100%</div>
                <div className="text-sm font-inter text-gray-500 mt-1">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right: Skills preview and CTA */}
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-xl space-y-4">
              <h3 className="text-2xl font-poppins font-bold">Quick Facts</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-blue-400 font-poppins font-semibold mb-1">Education</p>
                  <p className="text-gray-400 font-inter">B.Tech in Computer Science & Engineering</p>
                </div>
                <div>
                  <p className="text-blue-400 font-poppins font-semibold mb-1">Focus Areas</p>
                  <p className="text-gray-400 font-inter">Web Development, Cloud Computing, Data Structures</p>
                </div>
                <div>
                  <p className="text-blue-400 font-poppins font-semibold mb-1">Learning Goals</p>
                  <p className="text-gray-400 font-inter">Advanced system design, AI/ML applications, DevOps</p>
                </div>
              </div>
            </div>

            {/* Resume CTA */}
            <button className="glow-primary-hover w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500 text-blue-400 px-6 py-4 rounded-lg font-poppins font-semibold flex items-center justify-center gap-2 smooth-transition">
              <FileText size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
