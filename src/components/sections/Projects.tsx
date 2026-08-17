import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { PROJECTS, LAB_PROJECTS } from '../../data/projects';

function ArchitectureDiagram({ steps, color }: { steps: { from: string; to: string }[]; color: string }) {
  const nodes = [steps[0].from, ...steps.map(s => s.to)];
  return (
    <div className="flex items-center flex-wrap gap-2 mt-4">
      {nodes.map((node, i) => (
        <React.Fragment key={node}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="px-3 py-1.5 rounded-lg text-xs font-mono border"
            style={{ borderColor: color + '40', color, backgroundColor: color + '10', fontFamily: 'JetBrains Mono, monospace' }}
          >
            {node}
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.05 }}
              className="text-text-muted text-xs"
            >
              →
            </motion.span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  const isOva = project.id === 'ova-ai';
  const containerClass = isOva
    ? `grid lg:grid-cols-2 gap-8 lg:gap-12 items-start p-6 sm:p-12 border border-accent-violet/30 bg-accent-violet/5 shadow-violet rounded-3xl relative my-16 ${isEven ? '' : 'lg:[direction:rtl]'}`
    : `grid lg:grid-cols-2 gap-8 lg:gap-12 items-start py-16 border-b border-border-subtle last:border-0 ${isEven ? '' : 'lg:[direction:rtl]'}`;

  return (
    <ScrollReveal delay={0.1}>
      <div className={containerClass}>
        {isOva && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-violet text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest shadow-violet uppercase z-20 flex items-center gap-2">
            <span className="text-sm">🌟</span> Flagship Project
          </div>
        )}
        {/* Visual panel */}
        <div className={`${isEven ? '' : 'lg:[direction:ltr]'}`}>
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center shadow-card"
            style={{ backgroundColor: project.color + '15', border: `1px solid ${project.color}30` }}
          >
            {/* Abstract visual */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div
              className="absolute w-48 h-48 rounded-full blur-3xl"
              style={{ backgroundColor: project.color + '30' }}
            />
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">{project.emoji}</div>
              <h3 className="text-2xl font-bold" style={{ color: project.accentColor, fontFamily: 'Space Grotesk, sans-serif' }}>
                {project.title}
              </h3>
              <p className="text-xs font-mono mt-2 text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {project.category}
              </p>

              {/* Architecture diagram */}
              {project.architecture && (
                <div className="mt-4">
                  <ArchitectureDiagram steps={project.architecture} color={project.accentColor} />
                </div>
              )}
            </div>

            {/* Status badge */}
            <div
              className="absolute top-4 right-4 px-2 py-1 rounded-full text-[10px] font-mono"
              style={{ backgroundColor: project.color + '20', color: project.accentColor, fontFamily: 'JetBrains Mono, monospace' }}
            >
              {project.status === 'live' ? '● LIVE' : project.status === 'building' ? '◎ BUILDING' : '✓ DEPLOYED'}
            </div>
          </div>
        </div>

        {/* Content panel */}
        <div className={`${isEven ? '' : 'lg:[direction:ltr]'}`}>
          <div className="space-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded-full border border-border-subtle text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {tag}
                </span>
              ))}
              <span className="px-2 py-0.5 text-xs font-mono rounded-full text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {project.year}
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-3xl font-bold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {project.title}
              </h3>
              <p className="text-text-secondary mt-2 leading-relaxed">{project.tagline}</p>
            </div>

            {/* Problem */}
            <div className="p-4 rounded-xl glass border border-border-subtle">
              <p className="text-xs font-mono text-text-muted mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>THE PROBLEM</p>
              <p className="text-sm text-text-secondary">{project.problem}</p>
            </div>

            {/* My contribution */}
            <div>
              <p className="text-xs font-mono text-text-muted mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>MY CONTRIBUTION</p>
              <p className="text-sm text-text-primary">{project.contribution}</p>
            </div>

            {/* Features toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-accent-violet hover:text-accent-violet-light transition-colors flex items-center gap-1"
            >
              {expanded ? 'Hide features' : 'See key features'}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }}>▾</motion.span>
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-1.5 overflow-hidden"
                >
                  {project.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span style={{ color: project.accentColor }} className="mt-1 flex-shrink-0">◆</span>
                      {f}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Reflection */}
            <blockquote
              className="border-l-2 pl-4 py-1 italic text-sm text-text-muted"
              style={{ borderColor: project.color }}
            >
              "{project.reflection}"
            </blockquote>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              {project.repoUrl && project.repoUrl !== '[ADD LINK]' && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-violet/30 transition-all"
                >
                  <IoLogoGithub size={16} />
                  Repository
                </a>
              )}
              {project.liveUrl && project.liveUrl !== '[ADD LINK]' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent-violet text-white hover:bg-accent-violet-light transition-all"
                >
                  <IoOpenOutline size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function LabProjects() {
  return (
    <div className="mt-24">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Experiments Lab
          </h3>
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="text-xs font-mono text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            ◎ ONGOING EXPLORATION
          </span>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LAB_PROJECTS.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.1}>
            <div className="p-5 glass rounded-2xl border border-border-subtle hover:border-accent-violet/20 transition-all group">
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h4 className="font-semibold text-text-primary mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {p.title}
              </h4>
              <p className="text-xs font-mono text-accent-cyan mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {p.category}
              </p>
              <p className="text-sm text-text-muted">{p.description}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-border-subtle text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-max">
        <SectionHeader
          eyebrow="Featured Projects"
          title={<>Selected work, built to <span className="text-gradient-violet">solve.</span></>}
          subtitle="AI, IoT, Full-Stack and open-source contributions — each project a real-world problem tackled with technology."
        />

        <div className="mt-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <LabProjects />
      </div>
    </section>
  );
}
