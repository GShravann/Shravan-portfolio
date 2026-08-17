import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

const JOURNEY_STEPS = [
  { label: 'Electronics', icon: '⚡' },
  { label: 'Lateral Entry IT', icon: '↩' },
  { label: 'Programming', icon: '{ }' },
  { label: 'Full-Stack Dev', icon: '🌐' },
  { label: 'Artificial Intelligence', icon: '🤖' },
  { label: 'Generative AI', icon: '✨' },
  { label: 'HealthTech', icon: '🏥' },
  { label: 'CivicTech', icon: '🛡️' },
  { label: 'Open Source', icon: '🌍' },
  { label: 'Technical Leadership', icon: '🎯' },
];

const PERSONALITY = [
  {
    trait: 'Curious',
    description: 'I explore AI, IoT, electronics, healthcare, civic technology, aerospace and software.',
    color: '#8B5CF6',
  },
  {
    trait: 'Builder',
    description: 'I prefer creating functional systems rather than only learning theory.',
    color: '#22D3EE',
  },
  {
    trait: 'Socially Conscious',
    description: 'Many projects focus on healthcare, safety, emergency response and community needs.',
    color: '#34D399',
  },
  {
    trait: 'Resilient',
    description: 'My Electronics → AI journey demonstrates learning software despite initially struggling with programming.',
    color: '#F59E0B',
  },
  {
    trait: 'Leader',
    description: 'Technical leadership at VISWAM.AI, NNRG MUN Head of D\'Affaires, Scouts Rajyapuraskar.',
    color: '#60A5FA',
  },
  {
    trait: 'Ambitious',
    description: 'Building technology with purpose — systems that matter beyond the screen.',
    color: '#F472B6',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="orb w-96 h-96 bg-accent-violet/6 top-1/2 right-0 translate-x-1/2" />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <SectionHeader
              eyebrow="About"
              title={<>Beyond the <span className="text-gradient-violet">Code</span></>}
            />

            <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
              <ScrollReveal delay={0.1}>
                <p>
                  I didn't begin as a traditional software engineer. I came from an <strong className="text-text-primary">Electronics and Communication Engineering</strong> background — where hardware, sensors, and circuits were my world. An IoT workshop at JNTU opened my eyes to connected systems, and from there, the pull toward software became impossible to ignore.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p>
                  Through a lateral entry into Computer Science, I joined classmates who already knew coding — while I was just beginning. Debugging felt like a nightmare. Progress was slow. But those tough days taught me a lesson I still carry:{' '}
                  <em className="text-text-primary italic">the future belongs to those who never stop learning.</em>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p>
                  From basic programs, I built toward full-stack web development — and then discovered AI. The VISWAM.AI Summer of AI internship was the turning point. I became a Tech Lead, built CropDoc AI for Telugu-speaking farmers, re-engineered Ova AI with LLaMA 3, and reached the AI HackDay 2025 finals.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p>
                  Today I build systems where <strong className="text-text-primary">technology has a practical purpose</strong>. Mitra AI for women's safety. eHRS for community medical camps. fuelReach for emergency situations. The question I ask with every project: does this actually help someone?
                </p>
              </ScrollReveal>
            </div>

            {/* Journey path */}
            <ScrollReveal delay={0.5} className="mt-10">
              <div className="p-5 glass rounded-2xl border border-border-subtle">
                <p className="text-xs font-mono tracking-widest text-text-muted mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  MY EVOLUTION
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {JOURNEY_STEPS.map((step, i) => (
                    <React.Fragment key={step.label}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="text-xs px-2 py-1 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:border-accent-violet/30 hover:text-text-primary transition-all cursor-default"
                      >
                        {step.icon} {step.label}
                      </motion.span>
                      {i < JOURNEY_STEPS.length - 1 && (
                        <span className="text-text-muted text-xs">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Profile card + personality */}
          <div className="space-y-6">
            {/* Profile placeholder */}
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass border border-border-subtle max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 via-bg-card to-accent-cyan/10 grid-bg" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-violet flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-violet" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    GSK
                  </div>
                  <h3 className="text-xl font-bold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Gandipally Shravan Kumar
                  </h3>
                  <p className="text-sm text-text-muted mt-1 font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    AI / FULL-STACK ENGINEER
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-1">
                    {['HealthTech', 'CivicTech', 'Open Source'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-accent-violet/10 text-accent-violet border border-accent-violet/20 font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 text-xs text-text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    📍 Hyderabad, India
                    <br />
                    🎓 B.Tech CSE · NNRG · 2024–Present
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Personality traits */}
            <div className="grid grid-cols-2 gap-3">
              {PERSONALITY.map((p, i) => (
                <ScrollReveal key={p.trait} delay={0.1 + i * 0.1}>
                  <div className="p-4 glass rounded-xl border border-border-subtle hover:border-opacity-100 transition-all group"
                    style={{ '--hover-color': p.color } as React.CSSProperties}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="text-sm font-semibold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {p.trait}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{p.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
