import React from 'react';

const ITEMS = [
  'AI', 'Generative AI', 'Python', 'FastAPI', 'Full-Stack', 'HealthTech', 'CivicTech',
  'IoT', 'Open Source', 'LLaMA 3', 'Hugging Face', 'Streamlit', 'SQLAlchemy',
  'React', 'REST APIs', 'Data Science', 'Leadership', 'Community Impact',
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-6 px-3">
      <span className="text-sm font-mono tracking-widest text-text-muted uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {text}
      </span>
      <span className="text-accent-violet text-xs">◆</span>
    </span>
  );
}

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS]; // Double for seamless loop

  return (
    <div className="relative overflow-hidden border-y border-border-subtle bg-bg-secondary/50 py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <div className="marquee-track whitespace-nowrap">
        {items.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}
