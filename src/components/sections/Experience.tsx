import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { EXPERIENCES } from '../../data/experience';

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="orb w-80 h-80 bg-accent-violet/6 top-0 right-0" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Experience"
          title={<>Where I built my <span className="text-gradient-violet">skills.</span></>}
          subtitle="Internships, leadership roles and community contributions that shaped my engineering perspective."
        />

        <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Left: company tabs */}
          <ScrollReveal>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {EXPERIENCES.map((exp, i) => (
                <button
                  key={exp.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 lg:flex-shrink text-left p-4 rounded-xl border transition-all duration-200 ${
                    active === i ? 'border-opacity-100 shadow-card' : 'glass border-border-subtle hover:border-opacity-50'
                  }`}
                  style={active === i ? {
                    backgroundColor: exp.color + '15',
                    borderColor: exp.color + '50',
                    boxShadow: `0 0 20px ${exp.color}15`,
                  } : {}}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: exp.color + '20' }}
                    >
                      {exp.emoji}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-text-primary text-sm truncate" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {exp.company}
                      </p>
                      <p className="text-xs text-text-muted truncate">{exp.role}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: detail panel */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 glass rounded-2xl border border-border-subtle"
              >
                {(() => {
                  const exp = EXPERIENCES[active];
                  return (
                    <div className="space-y-5">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-xs font-mono px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: exp.color + '20', color: exp.color, fontFamily: 'JetBrains Mono, monospace' }}
                            >
                              {exp.type}
                            </span>
                            <span className="text-xs text-text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {exp.role}
                          </h3>
                          <p className="text-accent-violet font-medium">{exp.company}</p>
                          <p className="text-sm text-text-muted mt-0.5">{exp.location}</p>
                        </div>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ backgroundColor: exp.color + '20' }}
                        >
                          {exp.emoji}
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-text-secondary leading-relaxed">{exp.summary}</p>

                      {/* Highlights */}
                      <div>
                        <p className="text-xs font-mono text-text-muted mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          WHAT I WORKED ON
                        </p>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcome */}
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: exp.color + '10', border: `1px solid ${exp.color}25` }}
                      >
                        <p className="text-xs font-mono mb-1" style={{ color: exp.color, fontFamily: 'JetBrains Mono, monospace' }}>
                          IMPACT
                        </p>
                        <p className="text-sm text-text-primary">{exp.outcome}</p>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-xs font-mono text-text-muted mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          TOOLS & SKILLS
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map(s => (
                            <span
                              key={s}
                              className="text-xs px-2 py-1 rounded-full font-mono border border-border-subtle text-text-muted"
                              style={{ fontFamily: 'JetBrains Mono, monospace' }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
