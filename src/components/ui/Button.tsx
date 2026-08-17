import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'ghost' | 'cyan' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit';
  target?: string;
}

const styles: Record<Variant, string> = {
  primary: 'bg-accent-violet text-white hover:bg-accent-violet-light shadow-violet-sm hover:shadow-violet',
  secondary: 'bg-bg-card text-text-primary border border-border-default hover:border-accent-violet',
  ghost: 'text-text-primary hover:text-accent-violet border border-transparent hover:border-border-default',
  cyan: 'bg-accent-cyan text-bg-primary hover:bg-accent-cyan-light font-semibold',
  outline: 'border border-accent-violet text-accent-violet hover:bg-accent-violet hover:text-white',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  disabled,
  type = 'button',
  target,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap';
  const cls = `${base} ${styles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const inner = (
    <>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cls}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.button>
  );
}
