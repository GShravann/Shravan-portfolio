import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', icon: <Sun size={14} />, label: 'Light' },
    { value: 'dark', icon: <Moon size={14} />, label: 'Dark' },
    { value: 'system', icon: <Monitor size={14} />, label: 'System' },
  ] as const;

  return (
    <div className="flex items-center p-1 rounded-xl glass border border-border-subtle bg-bg-card/50 backdrop-blur-md">
      {themes.map((t) => {
        const isActive = theme === t.value;
        return (
          <button
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`relative p-2 rounded-lg flex items-center justify-center transition-colors ${
              isActive ? 'text-white' : 'text-text-muted hover:text-text-primary'
            }`}
            title={t.label}
          >
            {isActive && (
              <motion.div
                layoutId="active-theme"
                className="absolute inset-0 bg-accent-violet rounded-lg shadow-violet"
                initial={false}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.icon}</span>
          </button>
        );
      })}
    </div>
  );
}
