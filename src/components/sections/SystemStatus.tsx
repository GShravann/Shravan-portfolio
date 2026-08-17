import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const STATUS_LINES = [
  { label: 'CURRENT FOCUS', value: 'AI / Generative AI', color: '#8B5CF6' },
  { label: 'BUILDING', value: 'HealthTech + CivicTech', color: '#22D3EE' },
  { label: 'LEARNING', value: 'Advanced AI Systems', color: '#60A5FA' },
  { label: 'LOCATION', value: 'Hyderabad, India', color: '#34D399' },
  { label: 'STATUS', value: 'Open to opportunities', color: '#F59E0B' },
];

export function SystemStatusPanel({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-20 right-4 sm:right-8 z-50 w-72 glass-violet rounded-2xl p-5 shadow-violet"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="dot-online" />
          <span className="text-xs font-mono text-accent-cyan" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            SYSTEM STATUS
          </span>
        </div>
        <button onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors">
          <X size={14} />
        </button>
      </div>
      <div className="space-y-3">
        {STATUS_LINES.map((line, i) => (
          <motion.div
            key={line.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col gap-0.5"
          >
            <span className="text-[10px] font-mono tracking-widest text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {line.label}
            </span>
            <span className="text-sm font-medium" style={{ color: line.color, fontFamily: 'Space Grotesk, sans-serif' }}>
              {line.value}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-border-subtle">
        <p className="text-[10px] font-mono text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          GANDIPALLY SHRAVAN KUMAR · v2026
        </p>
      </div>
    </motion.div>
  );
}

export default function SystemStatus() {
  return null; // Handled by Navbar
}
