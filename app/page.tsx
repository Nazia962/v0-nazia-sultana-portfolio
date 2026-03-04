'use client'

import { useState } from 'react'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ProjectsSection from '@/components/projects-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
