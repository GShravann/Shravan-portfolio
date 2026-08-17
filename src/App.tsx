import React, { useEffect, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import HowIBuild from './components/sections/HowIBuild';
import Experience from './components/sections/Experience';
import SocialImpact from './components/sections/SocialImpact';
import Leadership from './components/sections/Leadership';
import Certifications from './components/sections/Certifications';
import Terminal from './components/sections/Terminal';
import Contact from './components/sections/Contact';
import AskShravan from './components/sections/AskShravan';

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animFrame: number;
    let mx = 0, my = 0;
    let cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      cx = lerp(cx, mx, 0.08);
      cy = lerp(cy, my, 0.08);
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      animFrame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero — full screen */}
        <Hero />

        {/* Identity marquee */}
        <Marquee />

        {/* About — Beyond the Code */}
        <About />

        {/* Interactive Journey */}
        <Journey />

        {/* Featured Projects */}
        <Projects />

        {/* Skills Constellation */}
        <Skills />

        {/* How I Build */}
        <HowIBuild />

        {/* Experience */}
        <Experience />

        {/* Social Impact */}
        <SocialImpact />

        {/* Leadership */}
        <Leadership />

        {/* Certifications */}
        <Certifications />

        {/* Terminal micro-interaction */}
        <Terminal />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI assistant */}
      <AskShravan />
    </div>
  );
}
