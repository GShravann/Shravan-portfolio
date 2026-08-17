import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

const IMPACT_MAP = [
  {
    domain: "Women's Health",
    project: 'Ova AI',
    description: 'Privacy-first AI health assistant for PCOS/PCOD awareness using LLaMA 3.',
    color: '#8B5CF6',
    emoji: '💜',
    icon: '🤖',
  },
  {
    domain: 'Public Safety',
    project: 'Mitra AI',
    description: 'Smart kiosk and civic safety platform with SOS alerts and safety scoring.',
    color: '#22D3EE',
    emoji: '🛡️',
    icon: '🏙️',
  },
  {
    domain: 'Healthcare Access',
    project: 'eHRS',
    description: 'Open-source electronic health records for underserved community medical camps.',
    color: '#34D399',
    emoji: '🏥',
    icon: '💊',
  },
  {
    domain: 'Emergency Assistance',
    project: 'fuelReach',
    description: 'On-demand emergency fuel delivery connecting users to petrol pumps in real-time.',
    color: '#F59E0B',
    emoji: '⛽',
    icon: '🚨',
  },
  {
    domain: 'Agricultural Access',
    project: 'CropDoc AI',
    description: 'AI-powered crop disease diagnosis in Telugu for regional farmers.',
    color: '#86EFAC',
    emoji: '🌾',
    icon: '🌱',
  },
  {
    domain: 'Environment',
    project: 'Air Quality Forecasting',
    description: 'Predictive ML modeling for urban air quality — healthier cities through data.',
    color: '#60A5FA',
    emoji: '🌬️',
    icon: '🌍',
  },
];

export default function SocialImpact() {
  return (
    <section id="impact" className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/3 to-transparent pointer-events-none" />
      <div className="orb w-[500px] h-[500px] bg-accent-violet/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="Technology With Purpose"
          title={<>Building for <span className="text-gradient-cyan">people,</span><br />not just projects.</>}
          subtitle="Every project I build connects to a real human need. This is the central belief that drives my engineering work."
          align="center"
        />

        {/* Central philosophy */}
        <ScrollReveal className="mt-10 text-center">
          <div className="inline-block px-6 py-3 rounded-full glass-violet border border-accent-violet/30">
            <p className="text-sm font-mono text-text-secondary" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="text-accent-violet">CODE</span>
              <span className="text-text-muted mx-3">→</span>
              <span className="text-accent-cyan">DEPLOYMENT</span>
              <span className="text-text-muted mx-3">→</span>
              <span className="text-text-primary font-semibold">REAL USERS</span>
              <span className="text-text-muted mx-3">→</span>
              <span className="text-accent-violet font-semibold">SOCIAL IMPACT</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMPACT_MAP.map((item, i) => (
            <ScrollReveal key={item.project} delay={i * 0.09}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="relative p-6 glass rounded-2xl border border-border-subtle overflow-hidden group"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}10 0%, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: item.color + '15', border: `1px solid ${item.color}30` }}
                    >
                      {item.emoji}
                    </div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  <p className="text-xs font-mono text-text-muted mb-1 tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {item.domain.toUpperCase()}
                  </p>

                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: item.color }}
                  >
                    {item.project}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>

                  <div
                    className="mt-4 h-px"
                    style={{ background: `linear-gradient(to right, ${item.color}40, transparent)` }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom mission statement */}
        <ScrollReveal className="mt-16">
          <div className="p-8 glass rounded-2xl border border-accent-violet/15 text-center">
            <p className="text-2xl font-bold text-text-primary leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              "Technology is only valuable when it reaches the people who need it most."
            </p>
            <p className="mt-3 text-text-muted">
              — The principle behind every project I build.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
