/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
          elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
        },
        accent: {
          violet: 'rgb(var(--accent-violet) / <alpha-value>)',
          'violet-light': 'rgb(var(--accent-violet-light) / <alpha-value>)',
          'violet-dark': 'rgb(var(--accent-violet-dark) / <alpha-value>)',
          cyan: 'rgb(var(--accent-cyan) / <alpha-value>)',
          'cyan-light': 'rgb(var(--accent-cyan-light) / <alpha-value>)',
          blue: 'rgb(var(--accent-blue) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
        },
        border: {
          default: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
          cyan: 'var(--border-cyan)',
        },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 60%)',
        'gradient-violet': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(34,211,238,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'cursor-glow': 'cursorGlow 0.3s ease-out',
        'typewriter': 'typewriter 0.1s steps(1) forwards',
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        cursorGlow: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'violet': '0 0 40px rgb(var(--accent-violet) / 0.25)',
        'violet-sm': '0 0 20px rgb(var(--accent-violet) / 0.15)',
        'cyan': '0 0 40px rgb(var(--accent-cyan) / 0.2)',
        'card': '0 4px 32px rgb(var(--text-primary) / 0.08), inset 0 1px 0 var(--border-subtle)',
        'card-hover': '0 8px 48px rgb(var(--text-primary) / 0.15), 0 0 0 1px rgb(var(--accent-violet) / 0.2)',
        'glow-violet': '0 0 60px rgb(var(--accent-violet) / 0.3), 0 0 120px rgb(var(--accent-violet) / 0.1)',
      },
      backdropBlur: {
        xs: '4px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
