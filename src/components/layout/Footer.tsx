import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline, IoCallOutline, IoLogoTwitter, IoPaperPlaneOutline, IoLogoInstagram } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary">
      <div className="container-max py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent-violet flex items-center justify-center text-white text-sm font-bold">
                GSK
              </div>
              <span className="font-bold text-text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Gandipally Shravan Kumar
              </span>
            </div>
            <p className="text-xs font-mono text-text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              AI • Full-Stack • HealthTech • CivicTech
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://www.linkedin.com/in/gandipallyshravankumar/" target="_blank" rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
              <IoLogoLinkedin size={18} />
            </a>
            <a href="https://github.com/GShravann/" target="_blank" rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
              <IoLogoGithub size={18} />
            </a>
            <a href="mailto:shravankumargandipally@gmail.com"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
              <IoMailOutline size={18} />
            </a>
            <a href="tel:+918886908338"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
              <IoCallOutline size={18} />
            </a>
            <a href="https://twitter.com/GShravann" target="_blank" rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
              <IoLogoTwitter size={18} />
            </a>
            <a href="https://t.me/GShravann" target="_blank" rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
              <IoPaperPlaneOutline size={18} />
            </a>
            <a href="https://instagram.com/Shravann.xo" target="_blank" rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card">
              <IoLogoInstagram size={18} />
            </a>
            <a href="[ADD RESUME URL]"
              className="p-2 text-text-muted hover:text-accent-violet transition-colors rounded-lg hover:bg-bg-card ml-2">
              <Download size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-violet transition-colors"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>
            Built with curiosity, code and purpose.
          </p>
          <p>© 2026 Gandipally Shravan Kumar · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
