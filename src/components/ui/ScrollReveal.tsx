import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

const variants = {
  hidden: (dir: string) => ({
    opacity: 0,
    y: dir === 'up' ? 40 : 0,
    x: dir === 'left' ? -40 : dir === 'right' ? 40 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
