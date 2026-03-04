'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:pb-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* Animated badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 smooth-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-inter text-blue-400">Welcome to my portfolio</span>
        </div>

        {/* Main heading */}
        <div className={`space-y-4 sm:space-y-6 smooth-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight">
            Nazia Sultana
          </h1>
          <p className="text-xl sm:text-2xl font-poppins font-semibold text-blue-400">
            B.Tech Student | Aspiring Web Developer
          </p>
        </div>

        {/* Tagline */}
        <p className={`text-lg sm:text-xl font-inter text-gray-400 max-w-2xl mx-auto leading-relaxed smooth-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
          I build smart, user-friendly web applications with clean design and real-world impact. Passionate about AI, productivity tools, and creative problem solving.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center smooth-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
          <Link href="#projects" className="glow-primary-hover px-8 py-3 rounded-lg bg-blue-500 text-white font-poppins font-semibold flex items-center gap-2 hover:gap-3">
            View My Work
            <ArrowRight size={20} />
          </Link>
          <Link href="#contact" className="btn-smooth px-8 py-3 rounded-lg border border-blue-500/50 text-white font-poppins font-semibold hover:bg-blue-500/10">
            Get In Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className={`flex justify-center pt-8 smooth-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
            <span className="text-sm font-inter">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
