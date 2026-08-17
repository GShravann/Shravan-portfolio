import React, { useRef, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5';
import Button from '../ui/Button';
import NeuralCore from '../3d/NeuralCore';

const TAGS = ['AI', 'Generative AI', 'Full-Stack', 'HealthTech', 'CivicTech', 'Python', 'Open Source'];

function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-violet border border-accent-violet/20 text-xs font-mono mb-8"
      style={{ fontFamily: 'JetBrains Mono, monospace' }}
    >
      <span className="dot-online" />
      <span className="text-accent-cyan">AVAILABLE FOR INTERNSHIPS</span>
      <span className="text-text-muted">•</span>
      <span className="text-text-muted">ENGINEERING OPPORTUNITIES</span>
    </motion.div>
  );
}

function TagStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="flex flex-wrap gap-2 mt-6"
    >
      {TAGS.map((tag, i) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + i * 0.07 }}
          className="px-3 py-1 text-xs font-mono rounded-full border border-border-subtle text-text-muted hover:text-text-secondary hover:border-accent-violet/30 transition-all cursor-default"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY.current = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow orbs */}
      <div className="orb w-[600px] h-[600px] bg-accent-violet/8 top-[-200px] left-[-200px]" />
      <div className="orb w-[400px] h-[400px] bg-accent-cyan/6 bottom-0 right-[10%]" />

      <div className="container-max relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <AvailabilityBadge />

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-text-primary"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              I build{' '}
              <span className="text-gradient-violet">intelligent</span>{' '}
              systems that solve{' '}
              <span className="italic text-text-secondary">real</span>{' '}
              problems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed"
            >
              I'm <strong className="text-text-primary">Gandipally Shravan Kumar</strong> — a Computer Science Engineering student and AI-focused developer building practical systems across healthcare, public safety, and social impact.
            </motion.p>

            <TagStrip />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <Button href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
                Explore My Work
              </Button>
              <Button href="[ADD RESUME URL]" target="_blank" variant="secondary" icon={<Download size={16} />}>
                View Resume
              </Button>
              <Button href="#contact" variant="ghost">
                Let's Connect
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="https://www.linkedin.com/in/gandipallyshravankumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-violet transition-colors group"
              >
                <IoLogoLinkedin size={16} className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <span className="w-px h-4 bg-border-subtle" />
              <a
                href="https://github.com/GShravann/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-violet transition-colors group"
              >
                <IoLogoGithub size={16} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <span className="w-px h-4 bg-border-subtle" />
              <a
                href="mailto:shravankumargandipally@gmail.com"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-violet transition-colors group"
              >
                <IoMailOutline size={16} className="group-hover:scale-110 transition-transform" />
                Email
              </a>
            </motion.div>
          </div>

          {/* Right: Neural Core 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Glow behind sphere */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-accent-violet/20 blur-3xl animate-pulse-glow" />
              </div>

              {/* Three.js canvas */}
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-accent-violet/30 animate-spin-slow" />
                </div>
              }>
                <NeuralCore mouseX={mouseX} mouseY={mouseY} />
              </Suspense>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 left-0 glass-violet rounded-xl px-3 py-2 text-xs font-mono"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="text-accent-cyan">● VISWAM.AI</span>
                <br />
                <span className="text-text-muted">Tech Lead</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-12 right-0 glass-violet rounded-xl px-3 py-2 text-xs font-mono"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="text-accent-violet">● eHRS</span>
                <br />
                <span className="text-text-muted">Live Deployment</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 right-4 glass-violet rounded-xl px-3 py-2 text-xs font-mono"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="text-accent-blue">● Mitra AI</span>
                <br />
                <span className="text-text-muted">Safety Platform</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-text-muted tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-accent-violet/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
