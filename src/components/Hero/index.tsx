import { useEffect, useRef, useState } from 'react';
import { HEADING_LABELS, DESCRIPTIONS, LINKS } from '../../data/content';
import { useTheme } from '../../context/ThemeContext';
import PlaneFlock from './PlaneFlock';
import QuoteBanner from './QuoteBanner';
import ShootingStars from './ShootingStars';
import './hero.css';

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Shared by the in-hero nav and the sticky bar so both stay in sync. */
function NavLinks() {
  const { theme, toggleTheme } = useTheme();
  const [switching, setSwitching] = useState(false);

  // icon glides right over the label, the theme flips at the far point, and
  // the new icon glides back — so the swap happens mid-flight (see hero.css)
  function handleThemeClick() {
    if (switching) return;
    setSwitching(true);
    setTimeout(toggleTheme, 250);
  }

  return (
    <>
      <div className="pill-group">
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
      </div>
      <button
        className={'theme-toggle' + (switching ? ' is-switching' : '')}
        onClick={handleThemeClick}
        onAnimationEnd={() => setSwitching(false)}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
        <span className="theme-label">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
      </button>
    </>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const navRef = useRef<HTMLElement | null>(null);
  const [navHeight, setNavHeight] = useState<number>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // auto-advance the headings, giving each description reading time (~200 wpm)
  // plus a settle-in buffer; a manual click resets the timer via activeIndex
  useEffect(() => {
    const words = DESCRIPTIONS[activeIndex].trim().split(/\s+/).length;
    const readMs = Math.max(4000, (words / (200 / 60)) * 1000 + 1500);
    const timer = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % HEADING_LABELS.length);
    }, readMs);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // remember the nav's natural height so its slot keeps that space once it pins
  useEffect(() => {
    const measure = () => {
      if (navRef.current && window.scrollY <= 24) setNavHeight(navRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <header className="hero" id="top">
      <img
        className={'hero-bg' + (theme === 'dark' ? ' is-hidden' : '')}
        src="assets/hero-bg.jpg"
        alt=""
      />
      <img
        className={'hero-bg' + (theme === 'dark' ? '' : ' is-hidden')}
        src="assets/hero-bg-dark.png"
        alt=""
      />
      <div className="hero-overlay" />
      <ShootingStars />

      {/* the slot holds the nav's space in the hero while the nav itself is pinned */}
      <div className="hero-nav-slot" style={scrolled && navHeight ? { height: navHeight } : undefined}>
        <nav ref={navRef} className={'hero-nav' + (scrolled ? ' is-stuck' : '')}>
          <NavLinks />
        </nav>
      </div>

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
