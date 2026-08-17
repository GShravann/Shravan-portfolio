import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { CERTS } from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative overflow-hidden">
      <div className="orb w-80 h-80 bg-accent-cyan/5 bottom-0 right-0" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Credentials"
          title={<>Earned <span className="text-gradient-violet">Credentials</span></>}
          subtitle="Continuous learning across AI, IoT, databases and cloud — 11+ certifications from recognized institutions."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={(i % 6) * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="relative p-5 glass rounded-2xl border border-border-subtle overflow-hidden group h-full"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-16 h-1 rounded-t-2xl" style={{ backgroundColor: cert.color }} />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: cert.color + '20' }}
                  >
                    {cert.emoji}
                  </div>

                  <div className="flex items-center gap-1 text-xs">
                    {cert.verified ? (
                      <span className="flex items-center gap-1 text-accent-cyan">
                        <CheckCircle size={12} />
                        Verified
                      </span>
                    ) : (
                      <span className="text-text-muted">On request</span>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-text-muted font-mono mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {cert.issuer}
                  </p>
                  <h3 className="font-semibold text-text-primary text-sm leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {cert.title}
                  </h3>
                  {cert.metric && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="font-bold text-sm" style={{ color: cert.color }}>{cert.metric}</span>
                      <span className="text-xs text-text-muted">{cert.metricLabel}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.skills.slice(0, 2).map(s => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-full border border-border-subtle text-text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">{cert.year}</span>
                  {cert.credentialUrl && cert.credentialUrl !== '[ADD LINK]' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center gap-1 transition-colors hover:text-accent-violet text-text-muted"
                    >
                      Verify <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Summary bar */}
        <ScrollReveal className="mt-8">
          <div className="p-4 glass rounded-2xl border border-border-subtle flex flex-wrap items-center justify-center gap-6 text-center">
            {[
              { value: '11+', label: 'Certifications', color: '#8B5CF6' },
              { value: '6', label: 'Institutions', color: '#22D3EE' },
              { value: '2019–2026', label: 'Credential Timeline', color: '#F59E0B' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold" style={{ color: s.color, fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
                <div className="text-xs text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
