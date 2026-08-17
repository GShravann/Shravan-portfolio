'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Link2, Mail } from 'lucide-react';
import { SystemStatusPanel } from '../sections/SystemStatus';
import ThemeToggle from '../ui/ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-border-subtle' : 'bg-transparent'
        }`}
      >
        <div className="container-max flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-accent-violet flex items-center justify-center font-bold text-sm text-white shadow-violet-sm group-hover:shadow-violet transition-shadow">
              GSK
            </div>
            <span className="hidden sm:block text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Shravan Kumar
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm transition-colors duration-200 relative ${
                  activeSection === href.slice(1)
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent-violet"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* System status */}
            <button
              onClick={() => setStatusOpen(!statusOpen)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-border-subtle hover:border-accent-cyan transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="dot-online" />
              <span className="text-text-muted">SYSTEM ONLINE</span>
            </button>

            {/* Social icons */}
            <div className="hidden md:flex items-center gap-2">
              <a href="https://www.linkedin.com/in/gandipallyshravankumar/" target="_blank" rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
                <Link2 size={16} />
              </a>
              <a href="https://github.com/GShravann/" target="_blank" rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
                <Code2 size={16} />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* System Status Panel */}
      <AnimatePresence>
        {statusOpen && <SystemStatusPanel onClose={() => setStatusOpen(false)} />}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 glass flex flex-col pt-20 px-6 pb-8 lg:hidden"
          >
            <nav className="flex flex-col gap-4 flex-1">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-bold text-text-primary hover:text-accent-violet transition-colors py-2 border-b border-border-subtle"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.linkedin.com/in/gandipallyshravankumar/" target="_blank" rel="noopener noreferrer"
                className="p-3 text-text-secondary hover:text-accent-violet transition-colors border border-border-subtle rounded-xl">
                <Link2 size={20} />
              </a>
              <a href="https://github.com/GShravann/" target="_blank" rel="noopener noreferrer"
                className="p-3 text-text-secondary hover:text-accent-violet transition-colors border border-border-subtle rounded-xl">
                <Code2 size={20} />
              </a>
              <a href="mailto:shravankumargandipally@gmail.com"
                className="p-3 text-text-secondary hover:text-accent-violet transition-colors border border-border-subtle rounded-xl">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
