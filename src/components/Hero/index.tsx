import { useState } from 'react';
import { HEADING_LABELS, DESCRIPTIONS, LINKS } from '../../data/content';
import PlaneFlock from './PlaneFlock';
import QuoteBanner from './QuoteBanner';
import './hero.css';

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="hero" id="top">
      <img className="hero-bg" src="assets/hero-bg.jpg" alt="" />
      <div className="hero-overlay" />

      <nav className="hero-nav">
        <a
          className="pill"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToProjects();
          }}
        >
          WORK
        </a>
        <a className="pill" href={LINKS.resume} target="_blank" rel="noopener noreferrer">
          RESUME
        </a>
        <a className="pill" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          LINKEDIN
        </a>
        <a className="pill" href={LINKS.gmailCompose} target="_blank" rel="noopener noreferrer">
          GMAIL
        </a>
      </nav>

      <PlaneFlock />
      <QuoteBanner />

      {/* cursive background word — hidden in the final design; flip the CSS to bring it back */}
      <div className="cursive-word" aria-hidden="true">
        {HEADING_LABELS[activeIndex].toLowerCase()}
      </div>

      <div className="hero-content">
        <div className="headings-scroll">
          <div className="headings" role="tablist">
            {HEADING_LABELS.map((label, i) => (
              <button
                key={label}
                role="tab"
                aria-selected={i === activeIndex}
                className={'heading' + (i === activeIndex ? ' is-active' : '')}
                onClick={() => setActiveIndex(i)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* key remounts the block on tab switch so the fade-in replays */}
        <p className="hero-desc" key={activeIndex}>
          {DESCRIPTIONS[activeIndex]}
        </p>

        {activeIndex === 0 && (
          <div className="working-at" key={`working-${activeIndex}`}>
            Working at
            <img src="assets/eazydiner-logo.png" alt="eazydiner" />
          </div>
        )}
      </div>

      <div
        className="scroll-cue"
        role="button"
        tabIndex={0}
        aria-label="Scroll to projects"
        onClick={scrollToProjects}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToProjects();
          }
        }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <div className="scroll-label">Scroll to see work</div>
      </div>
    </header>
  );
}
