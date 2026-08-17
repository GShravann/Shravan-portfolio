import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { SKILL_CATEGORIES } from '../../data/skills';

const LEVEL_CONFIG = {
  core: { label: 'Core', color: '#8B5CF6', size: 'lg' },
  proficient: { label: 'Proficient', color: '#22D3EE', size: 'md' },
  familiar: { label: 'Familiar', color: '#667085', size: 'sm' },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].id);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  const current = SKILL_CATEGORIES.find(c => c.id === activeCategory) || SKILL_CATEGORIES[0];

  const handleSkillHover = (skill: { name: string; context: string }, e: React.MouseEvent) => {
    setHoveredSkill(skill.name);
    setTooltip({ text: skill.context, x: e.clientX, y: e.clientY });
  };

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="orb w-96 h-96 bg-accent-cyan/5 top-1/2 right-0 translate-x-1/4" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Technology Constellation"
          title={<>My Tech <span className="text-gradient-violet">Stack</span></>}
          subtitle="The tools I use to build, train, deploy and design — hover a skill to see where I used it."
        />

        <div className="mt-12">
          {/* Category selector */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {SKILL_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'text-white shadow-violet-sm'
                      : 'glass border border-border-subtle text-text-muted hover:text-text-secondary'
                  }`}
                  style={activeCategory === cat.id ? { backgroundColor: cat.color, boxShadow: `0 0 20px ${cat.color}40` } : {}}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills constellation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-64"
              onMouseLeave={() => { setHoveredSkill(null); setTooltip(null); }}
            >
              {/* Legend */}
              <div className="flex items-center gap-6 mb-6 text-xs text-text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {Object.entries(LEVEL_CONFIG).map(([level, cfg]) => (
                  <div key={level} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cfg.color }} />
                    {cfg.label}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {current.skills.map((skill, i) => {
                  const lvl = LEVEL_CONFIG[skill.level];
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <motion.button
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, y: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
                      transition={{ 
                        opacity: { delay: i * 0.05, duration: 0.3 },
                        scale: { delay: i * 0.05, duration: 0.3 },
                        y: { duration: 3 + (i % 2), repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 } 
                      }}
                      className={`relative px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer ${
                        skill.level === 'core' ? 'text-base' : skill.level === 'proficient' ? 'text-sm' : 'text-xs'
                      }`}
                      style={{
                        borderColor: isHovered ? lvl.color + '80' : lvl.color + '30',
                        backgroundColor: isHovered ? lvl.color + '15' : lvl.color + '08',
                        color: isHovered ? lvl.color : undefined,
                        boxShadow: isHovered ? `0 0 20px ${lvl.color}20` : undefined,
                      }}
                      onMouseEnter={(e) => handleSkillHover(skill, e)}
                      onMouseLeave={() => { setHoveredSkill(null); setTooltip(null); }}
                    >
                      {skill.name}
                      {skill.level === 'core' && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ backgroundColor: lvl.color }} />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Context tooltip */}
              <AnimatePresence>
                {tooltip && hoveredSkill && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="fixed z-50 max-w-xs p-3 glass rounded-xl border border-border-subtle shadow-card pointer-events-none text-sm text-text-secondary"
                    style={{ left: Math.min(tooltip.x + 12, window.innerWidth - 320), top: tooltip.y + 12 }}
                  >
                    <p className="font-semibold text-text-primary mb-1">{hoveredSkill}</p>
                    <p className="text-xs">{tooltip.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Stats row */}
          <ScrollReveal className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '5+', label: 'Projects Built', color: '#8B5CF6' },
                { value: '20+', label: 'Skills Active', color: '#22D3EE' },
                { value: '4', label: 'Core Domains', color: '#F59E0B' },
                { value: '11+', label: 'Certifications', color: '#34D399' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 glass rounded-2xl border border-border-subtle text-center">
                  <div className="text-3xl font-bold" style={{ color: stat.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
