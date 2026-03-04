'use client'

import { useState, FormEvent } from 'react'
import { Mail, Smartphone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'd love to hear from you!
          </p>
          <div className="section-divider w-24 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="glass-effect-hover glass-effect p-6 rounded-xl flex gap-4 group">
              <div className="p-3 bg-primary/10 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-secondary">nazia@example.com</p>
                <a href="mailto:nazia@example.com" className="text-primary text-sm mt-2 hover:underline inline-block">
                  Send an email →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-effect-hover glass-effect p-6 rounded-xl flex gap-4 group">
              <div className="p-3 bg-primary/10 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
                <Smartphone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-secondary">+91 (XXX) XXX-XXXX</p>
                <a href="tel:+911234567890" className="text-primary text-sm mt-2 hover:underline inline-block">
                  Give me a call →
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-effect-hover glass-effect p-6 rounded-xl flex gap-4 group">
              <div className="p-3 bg-primary/10 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-secondary">India</p>
                <p className="text-primary text-sm mt-2">Available for remote work worldwide</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: '#' },
                  { name: 'LinkedIn', url: '#' },
                  { name: 'Twitter', url: '#' },
                  { name: 'Instagram', url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-background rounded-lg flex items-center justify-center transition-all duration-300 text-primary hover:scale-110"
                    title={social.name}
                  >
                    <span className="text-sm font-bold">{social.name.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-foreground placeholder-secondary transition-colors outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-foreground placeholder-secondary transition-colors outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-foreground placeholder-secondary transition-colors outline-none"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-muted border border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-foreground placeholder-secondary transition-colors outline-none resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="glow-primary-hover w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span> Sending...
                  </>
                ) : submitted ? (
                  <>
                    ✓ Message sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-primary text-sm font-semibold">
                  Thank you for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
