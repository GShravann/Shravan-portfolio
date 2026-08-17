import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TERMINAL_LINES = [
  { cmd: '$ whoami', out: 'Gandipally Shravan Kumar', delay: 0 },
  { cmd: '$ focus', out: 'AI + Full-Stack Engineering', delay: 800 },
  { cmd: '$ building', out: 'Technology with purpose', delay: 1600 },
  { cmd: '$ location', out: 'Hyderabad, India', delay: 2400 },
  { cmd: '$ status', out: 'Open to opportunities ✓', delay: 3200 },
  { cmd: '$ next', out: 'HealthTech · CivicTech · AI Systems', delay: 4000 },
];

function TerminalLine({ cmd, out, delay }: { cmd: string; out: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const [outVisible, setOutVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), delay);
    const t2 = setTimeout(() => setOutVisible(true), delay + 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [delay]);

  if (!visible) return null;

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-accent-violet">›</span>
        <span className="text-text-primary">{cmd}</span>
      </div>
      {outVisible && (
        <div className="flex items-center gap-2 ml-4 text-accent-cyan">
          <span>{out}</span>
        </div>
      )}
    </div>
  );
}

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);

  const handleOpen = () => {
    setOpen(true);
    setKey(prev => prev + 1);
  };

  return (
    <div className="flex justify-center py-12">
      <button
        onClick={handleOpen}
        className="flex items-center gap-3 px-5 py-3 glass rounded-2xl border border-border-subtle hover:border-accent-violet/30 transition-all group"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent-violet animate-pulse" />
        <span className="font-mono text-sm text-text-muted group-hover:text-text-secondary transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          $ ./shravan --info
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/90 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg glass rounded-2xl border border-accent-violet/20 overflow-hidden shadow-violet"
              onClick={e => e.stopPropagation()}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-mono text-text-muted mx-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  shravan@portfolio ~ terminal
                </span>
                <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary text-xs transition-colors">✕</button>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-3 min-h-[280px]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {TERMINAL_LINES.map((line) => (
                  <TerminalLine key={`${key}-${line.cmd}`} {...line} />
                ))}
              </div>

              <div className="px-5 pb-4 font-mono text-xs text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Press <span className="text-accent-violet">ESC</span> or click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
