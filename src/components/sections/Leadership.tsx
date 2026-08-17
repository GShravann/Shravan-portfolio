import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

const LEADERSHIP = [
  {
    org: 'NNRG MUN',
    role: 'Head of Delegate Affairs',
    period: 'Jan 2026 – Present',
    color: '#8B5CF6',
    emoji: '🌐',
    highlights: [
      'Organized NNRG MUN 2026 — national-level conference',
      '240+ delegates · 4 committees (DISEC, AIPPM, UNHRC, TLA)',
      'Promoted from Designer to Head of D\'Affaires',
      'Led team through planning, campaigns and full 2-day execution',
    ],
    skills: ['Leadership', 'Event Management', 'Public Speaking', 'Diplomacy'],
    quote: 'Leading a room of 240+ delegates taught me to listen as much as I speak.',
    warmth: true,
  },
  {
    org: 'NNRG MUN',
    role: 'Design Team Lead',
    period: 'Jan 2025 – Dec 2025',
    color: '#F59E0B',
    emoji: '🎨',
    highlights: [
      'Designed all event posters, promotional materials and visual identity',
      'Built the complete event brand for NNRG MUN 2025',
      'Coordinated visual communications with secretariat team',
    ],
    skills: ['Canva', 'Visual Design', 'Event Branding', 'Team Coordination'],
    quote: 'Design is communication. Every poster had to tell the story of the conference.',
    warmth: true,
  },
  {
    org: 'Bharat Scouts & Guides',
    role: 'Rajyapuraskar Awardee',
    period: '2014 – 2019',
    color: '#34D399',
    emoji: '🏕️',
    highlights: [
      'Rajyapuraskar — highest recognition for scouts in India',
      'Completed rigorous camps at KV NFC, KV Golconda, KV AFS Begumpet',
      'Journey through Pravesh, Dwitiya Sopan and Tritiya Sopan',
      '5-year commitment to service, leadership and community',
    ],
    skills: ['Leadership', 'Teamwork', 'Community Service', 'Youth Development'],
    quote: 'Scouting taught me that the most important skill is showing up — consistently.',
    warmth: true,
  },
  {
    org: 'ELCO',
    role: 'Community Volunteer',
    period: 'Ongoing',
    color: '#60A5FA',
    emoji: '🤝',
    highlights: [
      'Community volunteering and social service initiatives',
      'Contributing to local community development programs',
    ],
    skills: ['Volunteering', 'Community Impact', 'Social Service'],
    quote: 'Communities are built by people who show up without being asked.',
    warmth: true,
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad relative overflow-hidden">
      <div className="orb w-80 h-80 bg-accent-violet/5 top-0 left-0" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Leadership & Community"
          title={<>I Build <span className="text-gradient-violet">Teams</span> Too.</>}
          subtitle="Engineering is only part of what I do. Leadership, community and service run equally deep."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {LEADERSHIP.map((item, i) => (
            <ScrollReveal key={item.org + item.role} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative p-6 glass rounded-2xl border border-border-subtle overflow-hidden group h-full"
              >
                {/* Warm glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: item.color }}
                />

                <div className="pt-2">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{item.emoji}</span>
                        <div>
                          <h3 className="font-bold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {item.org}
                          </h3>
                          <p className="text-sm" style={{ color: item.color }}>{item.role}</p>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-text-muted flex-shrink-0" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.skills.map(s => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border-subtle text-text-muted"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <blockquote
                    className="border-l-2 pl-3 italic text-sm text-text-muted"
                    style={{ borderColor: item.color }}
                  >
                    "{item.quote}"
                  </blockquote>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
