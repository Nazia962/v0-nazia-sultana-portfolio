'use client'

import { ArrowRight, Mail, FileText } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect p-12 md:p-16 rounded-xl text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Interested in working together?
          </h2>

          {/* Subheading */}
          <p className="text-xl font-inter text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let's build innovative and meaningful digital solutions that make a real-world impact.
          </p>

          {/* Divider */}
          <div className="section-divider w-24 mx-auto"></div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8">
            <Link 
              href="#contact"
              className="glow-primary-hover px-8 py-4 rounded-lg bg-blue-500 text-white font-poppins font-semibold flex items-center gap-2 hover:gap-3 smooth-transition"
            >
              <Mail size={20} />
              Hire Me
            </Link>
            <a 
              href="#"
              className="btn-smooth px-8 py-4 rounded-lg border border-blue-500/50 text-white font-poppins font-semibold flex items-center gap-2 smooth-transition"
            >
              <FileText size={20} />
              View Resume
            </a>
          </div>

          {/* Additional Info */}
          <div className="pt-8 border-t border-blue-500/20">
            <p className="text-gray-500 font-inter text-sm">
              Available for internships, freelance projects, and exciting opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
