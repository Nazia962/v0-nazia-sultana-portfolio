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
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'd love to hear from you!
          </p>
          <div className="section-divider w-24 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="glass-effect p-6 rounded-xl flex gap-4 group scale-hover smooth-transition">
              <div className="p-3 bg-blue-500/10 rounded-lg h-fit group-hover:bg-blue-500/20 smooth-transition">
                <Mail size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-poppins font-bold mb-1 text-white">Email</h3>
                <p className="text-gray-400 font-inter">nazia@example.com</p>
                <a href="mailto:nazia@example.com" className="text-blue-400 font-inter text-sm mt-2 hover:underline inline-block">
                  Send an email →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-effect p-6 rounded-xl flex gap-4 group scale-hover smooth-transition">
              <div className="p-3 bg-blue-500/10 rounded-lg h-fit group-hover:bg-blue-500/20 smooth-transition">
                <Smartphone size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-poppins font-bold mb-1 text-white">Phone</h3>
                <p className="text-gray-400 font-inter">+91 (XXX) XXX-XXXX</p>
                <a href="tel:+911234567890" className="text-blue-400 font-inter text-sm mt-2 hover:underline inline-block">
                  Give me a call →
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-effect p-6 rounded-xl flex gap-4 group scale-hover smooth-transition">
              <div className="p-3 bg-blue-500/10 rounded-lg h-fit group-hover:bg-blue-500/20 smooth-transition">
                <MapPin size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-poppins font-bold mb-1 text-white">Location</h3>
                <p className="text-gray-400 font-inter">India</p>
                <p className="text-blue-400 font-inter text-sm mt-2">Available for remote work worldwide</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-poppins font-bold mb-4 text-white">Connect With Me</h3>
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
                    className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white rounded-lg flex items-center justify-center smooth-transition hover:scale-110"
                    title={social.name}
                  >
                    <span className="text-sm font-poppins font-bold">{social.name.charAt(0)}</span>
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
                <label className="block text-sm font-poppins font-semibold mb-2 text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-500/5 border border-blue-500/20 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-inter smooth-transition outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-poppins font-semibold mb-2 text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-500/5 border border-blue-500/20 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-inter smooth-transition outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-poppins font-semibold mb-2 text-white">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-500/5 border border-blue-500/20 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-inter smooth-transition outline-none"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-poppins font-semibold mb-2 text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-blue-500/5 border border-blue-500/20 focus:border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-inter smooth-transition outline-none resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="glow-primary-hover w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-poppins font-semibold flex items-center justify-center gap-2 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                <p className="text-center text-blue-400 font-inter text-sm font-semibold">
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
