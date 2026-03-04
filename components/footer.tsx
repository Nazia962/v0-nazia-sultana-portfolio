'use client'

import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Mail, label: 'Email', url: 'mailto:nazia@example.com' },
  ]

  const footerLinks = [
    {
      title: 'Navigation',
      links: ['Home', 'About', 'Projects', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Resume', 'Portfolio', 'Guides'],
    },
  ]

  return (
    <footer className="bg-muted/40 border-t border-blue-500/20 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-poppins font-bold gradient-text">Nazia Sultana</div>
            <p className="text-gray-400 font-inter text-sm leading-relaxed">
              B.Tech student passionate about building beautiful, functional digital experiences.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-poppins font-semibold mb-3 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 font-inter text-sm smooth-transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-poppins font-semibold mb-3 text-white">Get Updates</h4>
            <p className="text-gray-400 font-inter text-sm mb-3">Subscribe for latest projects and insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-blue-500/5 border border-blue-500/20 focus:border-blue-500 rounded-l-lg px-3 py-2 text-sm font-inter text-white placeholder-gray-500 outline-none smooth-transition"
              />
              <button className="bg-blue-500 text-white px-3 py-2 rounded-r-lg hover:bg-blue-600 smooth-transition">
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 font-inter text-sm text-center md:text-left">
            © {currentYear} Nazia Sultana. Crafted with{' '}
            <Heart size={14} className="inline text-blue-400" /> using Next.js & Tailwind CSS.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  title={social.label}
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500/20 smooth-transition hover:scale-110"
                >
                  <IconComponent size={18} />
                </a>
              )
            })}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-gray-500 font-inter text-sm">
            <a href="#" className="hover:text-blue-400 smooth-transition">
              Privacy
            </a>
            <span className="text-blue-500/30">·</span>
            <a href="#" className="hover:text-blue-400 smooth-transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
