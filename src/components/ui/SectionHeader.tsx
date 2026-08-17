import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-accent-violet mb-4 flex items-center gap-2"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        <span className="inline-block w-8 h-px bg-accent-violet" />
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
        style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg text-text-secondary max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
