'use client'

import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        {/* Glowing accent line */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
          <span className="text-primary text-sm font-semibold">WELCOME TO MY PORTFOLIO</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="block text-foreground">Nazia Sultana</span>
          <span className="block gradient-text text-5xl md:text-6xl">B.Tech Student & Developer</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
          Passionate about crafting elegant digital solutions with cutting-edge technology. 
          Exploring the intersection of design and development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="glow-primary-hover group bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="glass-effect-hover glass-effect text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:translate-y-[-2px]">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
