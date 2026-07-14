/**
 * Plane towing the quote banner, flying right-to-left across the hero.
 *
 * The fabric strip is sliced into thin segments; each shows its own window of
 * the full banner image and bobs on a phase-offset delay, so together they
 * read as one continuous cloth with a traveling wave (see design chats).
 */
const SEGMENT_COUNT = 64;
const WAVE_CYCLE_S = 2.4; // must match the bannerWaveSeg duration in hero.css

const SEGMENTS = Array.from({ length: SEGMENT_COUNT }, (_, i) => ({
  delay: `${-(i * WAVE_CYCLE_S) / SEGMENT_COUNT}s`,
  left: `${-i * 100}%`,
  width: `${SEGMENT_COUNT * 100}%`,
}));

export default function QuoteBanner() {
  return (
    <div className="banner" aria-hidden="true">
      <img className="banner-plane" src="assets/banner-plane-part.png" alt="" />
      <div className="banner-fabric">
        {SEGMENTS.map((seg, i) => (
          <div key={i} className="banner-seg" style={{ animationDelay: seg.delay }}>
            <img
              src="assets/banner-fabric-part.png"
              alt=""
              style={{ left: seg.left, width: seg.width }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
