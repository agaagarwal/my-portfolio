/**
 * Flock of paper planes crossing the hero left-to-right. All share the same
 * flight path and timing (see `flyAcross` in hero.css) and differ only by
 * static offset, size, and opacity — so they travel as one loose parallel pack.
 */
const FLOCK = [
  { left: -58, top: 50, size: 70, opacity: 1 },
  { left: 18, top: 80, size: 50, opacity: 0.9 },
  { left: -30, top: 106, size: 34, opacity: 0.8 },
  { left: 40, top: 48, size: 42, opacity: 0.88 },
  { left: -8, top: 116, size: 28, opacity: 0.75 },
  { left: -44, top: 80, size: 58, opacity: 0.85 },
];

export default function PlaneFlock() {
  // Styles are fully inline: React 18 passes `className` through as an attribute
  // named "className" on custom elements, so a CSS class would never match here.
  return (
    <>
      {FLOCK.map((p, i) => (
        <dotlottie-player
          key={i}
          src="assets/plane.lottie"
          autoplay
          loop
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: 'translateX(-16vw)',
            animation: 'flyAcross 18s linear infinite',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}
