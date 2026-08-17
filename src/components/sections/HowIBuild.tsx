import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

const STEPS = [
  { num: '01', title: 'Understand', description: 'Understand the problem deeply. Who is affected? What is the real pain?', icon: '🔍', color: '#8B5CF6' },
  { num: '02', title: 'Research', description: 'Explore the domain and users. What exists? What gaps remain unfilled?', icon: '📚', color: '#7C3AED' },
  { num: '03', title: 'Design', description: 'Design the system and experience. Architecture first, UI second.', icon: '✏️', color: '#6D28D9' },
  { num: '04', title: 'Build', description: 'Develop the application. Modular, maintainable, tested at each step.', icon: '⚙️', color: '#22D3EE' },
  { num: '05', title: 'Test', description: 'Validate workflows and edge cases. The system must work under stress.', icon: '🧪', color: '#0891B2' },
  { num: '06', title: 'Improve', description: 'Iterate based on feedback. Good systems get better after launch.', icon: '🔄', color: '#60A5FA' },
  { num: '07', title: 'Deploy', description: 'Turn the idea into something usable by real people in the real world.', icon: '🚀', color: '#34D399' },
];

export default function HowIBuild() {
  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <div className="orb w-96 h-96 bg-accent-violet/6 bottom-0 left-1/4" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Engineering Process"
          title={<>How I <span className="text-gradient-violet">build.</span></>}
          subtitle="A systematic approach to turning ideas into deployed systems."
          align="center"
        />

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="relative p-5 glass rounded-2xl border border-border-subtle hover:border-opacity-100 transition-all text-center group"
                  style={{ '--hover-border': step.color + '40' } as React.CSSProperties}
                >
                  {/* Step number */}
                  <div
                    className="text-[10px] font-mono mb-3 text-text-muted"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-xl"
                    style={{ backgroundColor: step.color + '15', border: `1px solid ${step.color}30` }}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-text-primary text-sm mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: step.color }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>

                  {/* Arrow connector (not on last) */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-text-muted text-xs">
                      →
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom quote */}
          <ScrollReveal className="mt-16 text-center">
            <blockquote className="text-xl sm:text-2xl text-text-secondary italic max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              "I don't just learn technology. I use technology to build things that{' '}
              <span className="text-gradient-violet not-italic font-semibold">matter.</span>"
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
