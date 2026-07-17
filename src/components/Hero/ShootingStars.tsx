/**
 * Shooting stars streaking across the hero in dark mode. Each star reuses the
 * same `shootStar` keyframes (see hero.css) and differs only by position,
 * delay, and cycle length so the sky never fires two identical streaks.
 * The container fades with the theme, so mode switches never pop.
 */
const STARS = [
  { top: '10%', left: '6%', delay: 0, duration: 7 },
  { top: '28%', left: '36%', delay: 2.1, duration: 8.5 },
  { top: '6%', left: '54%', delay: 4.3, duration: 7.6 },
  { top: '20%', left: '70%', delay: 1.2, duration: 9 },
  { top: '42%', left: '12%', delay: 5.4, duration: 8 },
  { top: '36%', left: '58%', delay: 3.2, duration: 7.2 },
];

export default function ShootingStars() {
  return (
    <div className="shooting-stars" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
