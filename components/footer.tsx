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
    <footer className="bg-muted/40 border-t border-primary/20 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">Nazia Sultana</div>
            <p className="text-secondary text-sm leading-relaxed">
              B.Tech student passionate about building beautiful, functional digital experiences.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-secondary hover:text-primary text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-semibold mb-3">Get Updates</h4>
            <p className="text-secondary text-sm mb-3">Subscribe for latest projects and insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-muted border border-primary/20 focus:border-primary rounded-l-lg px-3 py-2 text-sm text-foreground placeholder-secondary outline-none transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-3 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
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
          <p className="text-secondary text-sm text-center md:text-left">
            © {currentYear} Nazia Sultana. Crafted with{' '}
            <Heart size={14} className="inline text-primary" /> using Next.js & Tailwind CSS.
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
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <IconComponent size={18} />
                </a>
              )
            })}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-secondary text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <span className="text-primary/30">·</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
