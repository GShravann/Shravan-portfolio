import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { JOURNEY } from '../../data/journey';

const ERA_COLORS = {
  roots: '#F59E0B',
  growth: '#8B5CF6',
  ai: '#7C3AED',
  impact: '#22D3EE',
};

const ERA_LABELS = {
  roots: 'ROOTS',
  growth: 'GROWTH',
  ai: 'AI ERA',
  impact: 'IMPACT',
};

export default function Journey() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="journey" className="section-pad relative overflow-hidden">
      <div className="orb w-96 h-96 bg-accent-violet/6 bottom-0 left-0" />

      <div className="container-max">
        <SectionHeader
          eyebrow="My Journey"
          title={<>The{' '}<span className="text-gradient-violet">chapters</span>{' '}that shaped me</>}
          subtitle="From Scouts to AI Tech Lead — an honest account of my evolution as an engineer."
        />

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/60 via-accent-cyan/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {JOURNEY.map((milestone, i) => {
              const isActive = active === milestone.id;
              const isLeft = i % 2 === 0;
              const eraColor = ERA_COLORS[milestone.era];

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile/Desktop: content card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.button
                      onClick={() => setActive(isActive ? null : milestone.id)}
                      className="w-full text-left"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div
                        className={`p-5 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? 'glass-violet border-opacity-100 shadow-violet-sm'
                            : 'glass border-border-subtle hover:border-opacity-100'
                        }`}
                        style={{ borderColor: isActive ? eraColor + '40' : undefined }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono px-2 py-0.5 rounded-full border text-text-muted"
                                style={{ borderColor: eraColor + '40', color: eraColor, fontFamily: 'JetBrains Mono, monospace' }}>
                                {milestone.year}
                              </span>
                              <span className="text-[10px] font-mono tracking-wider text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                {ERA_LABELS[milestone.era]}
                              </span>
                            </div>
                            <h3 className="font-bold text-text-primary text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {milestone.icon} {milestone.title}
                            </h3>
                            <p className="text-sm text-text-muted mt-0.5">{milestone.subtitle}</p>
                          </div>
                          <motion.span
                            animate={{ rotate: isActive ? 180 : 0 }}
                            className="text-text-muted text-sm mt-1 flex-shrink-0"
                          >
                            ▾
                          </motion.span>
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-border-subtle space-y-3">
                                <p className="text-sm text-text-secondary leading-relaxed">{milestone.story}</p>
                                <div className="p-3 rounded-xl bg-accent-violet/5 border border-accent-violet/10">
                                  <p className="text-xs font-mono text-accent-violet mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                    LESSON LEARNED
                                  </p>
                                  <p className="text-sm text-text-primary italic">"{milestone.lesson}"</p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-text-muted">
                                  <span>→</span>
                                  <span className="italic">{milestone.next}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.button>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-5 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg border-2 glass cursor-pointer shadow-card"
                      style={{ borderColor: eraColor + '60', backgroundColor: eraColor + '10' }}
                      onClick={() => setActive(isActive ? null : milestone.id)}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
