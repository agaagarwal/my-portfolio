import { LINKS } from '../../data/content';
import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-tagline">— LET'S BUILD SOMETHING —</div>
      <div className="footer-rule" />
      <div className="footer-row">
        <div className="footer-contacts">
          <a href={`mailto:${LINKS.email}`}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 6l10 7 10-7" />
            </svg>
            {LINKS.email}
          </a>
          <a href={LINKS.phoneHref}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {LINKS.phoneDisplay}
          </a>
        </div>
        <div className="footer-socials">
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.32 8.25h4.31v2.02h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.98c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.7V23h-4.5V8.25z" />
            </svg>
          </a>
          <a href={LINKS.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 7.5h7.5c3.7 0 5.1 1.6 5.1 3.9 0 1.7-.9 2.7-1.9 3.2 1.4.5 2.6 1.7 2.6 3.7 0 2.9-2.3 4.4-5.6 4.4H0V7.5zm3.3 5.7h3.7c1.3 0 2.2-.6 2.2-1.8 0-1.2-.9-1.7-2.2-1.7H3.3v3.5zm0 5.9h3.9c1.5 0 2.5-.7 2.5-2s-1-1.9-2.5-1.9H3.3v3.9zM24 15.9H16.6c.1 1.7 1.2 2.6 2.7 2.6 1.1 0 2-.5 2.4-1.4h3c-.6 2.3-2.7 3.9-5.4 3.9-3.6 0-5.9-2.4-5.9-6.1 0-3.5 2.3-6.1 5.7-6.1 3.7 0 5.8 2.8 5.8 6.4 0 .2 0 .5-.1.7zm-7.3-2.2h4.4c-.1-1.5-1-2.4-2.2-2.4-1.3 0-2 .9-2.2 2.4zM14.5 6h6.9v1.7h-6.9V6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
