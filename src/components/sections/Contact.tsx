import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, ExternalLink } from 'lucide-react';
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline, IoCallOutline, IoLogoTwitter, IoPaperPlaneOutline, IoLogoInstagram, IoLocationOutline } from 'react-icons/io5';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.open(`mailto:shravankumargandipally@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSent(true);
  };

  const LINKS = [
    {
      label: 'LinkedIn',
      sub: 'gandipallyshravankumar',
      href: 'https://www.linkedin.com/in/gandipallyshravankumar/',
      icon: <IoLogoLinkedin size={20} />,
      color: '#0A66C2',
      primary: true,
    },
    {
      label: 'GitHub',
      sub: 'GShravann',
      href: 'https://github.com/GShravann/',
      icon: <IoLogoGithub size={20} />,
      color: '#333333',
      primary: false,
    },
    {
      label: 'Email',
      sub: 'shravankumargandipally',
      href: 'mailto:shravankumargandipally@gmail.com',
      icon: <IoMailOutline size={20} />,
      color: '#8B5CF6',
      primary: false,
    },
    {
      label: 'Phone',
      sub: '+91 8886908338',
      href: 'tel:+918886908338',
      icon: <IoCallOutline size={20} />,
      color: '#10B981',
      primary: false,
    },
    {
      label: 'Twitter / X',
      sub: '@GShravann',
      href: 'https://twitter.com/GShravann',
      icon: <IoLogoTwitter size={20} />,
      color: '#1DA1F2',
      primary: false,
    },
    {
      label: 'Telegram',
      sub: '@GShravann',
      href: 'https://t.me/GShravann',
      icon: <IoPaperPlaneOutline size={20} />,
      color: '#26A5E4',
      primary: false,
    },
    {
      label: 'Instagram',
      sub: 'Shravann.xo',
      href: 'https://instagram.com/Shravann.xo',
      icon: <IoLogoInstagram size={20} />,
      color: '#E1306C',
      primary: false,
    },
  ];

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-accent-violet/8 top-0 left-1/2 -translate-x-1/2" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="Let's Connect"
          title={<>Let's Build Something <span className="text-gradient-violet">Meaningful.</span></>}
          subtitle="Have an interesting problem, research idea, project or opportunity? I'd love to hear about it."
          align="center"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: links + location */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="p-5 glass rounded-2xl border border-border-subtle">
                <div className="flex items-center gap-2 mb-4">
                  <IoLocationOutline size={16} className="text-accent-violet" />
                  <span className="text-sm text-text-secondary">Hyderabad, India</span>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm">
                  I'm especially interested in roles and collaborations in HealthTech, CivicTech, AI development, and Full-Stack engineering. If you're building something that matters, let's talk.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3">
              {LINKS.map((link, i) => (
                <ScrollReveal key={link.label} delay={i * 0.08}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-200 text-center ${
                      link.primary ? 'border-opacity-100 shadow-card' : 'glass border-border-subtle hover:border-opacity-50'
                    }`}
                    style={link.primary ? {
                      backgroundColor: link.color + '15',
                      borderColor: link.color + '40',
                    } : {}}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: link.color + '20', color: link.color }}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {link.label}
                      </p>
                      <p className="text-xs text-text-muted truncate max-w-[120px]">{link.sub}</p>
                    </div>
                    <ExternalLink size={10} className="text-text-muted" />
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: contact form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="p-6 glass rounded-2xl border border-border-subtle space-y-4">
              <h3 className="text-xl font-bold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Send a Message
              </h3>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-violet/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-violet/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project, idea or opportunity..."
                  className="w-full px-4 py-3 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-violet/50 transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center" icon={<Send size={14} />}>
                {sent ? 'Opening email client...' : 'Send Message'}
              </Button>

              <p className="text-xs text-text-muted text-center">
                Or connect directly via LinkedIn for the fastest response.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
