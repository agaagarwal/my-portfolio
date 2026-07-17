/**
 * Plane towing the quote banner, flying right-to-left across the hero.
 *
 * The flag is one continuous SVG shape whose outline morphs through wave
 * phases (SMIL d-animation), and the quote is real text on an invisible
 * center path animated with the same phases — so the letters trace the
 * cloth's traveling wave instead of the old sliced-image segments.
 */
const QUOTE =
  'To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life';

const W = 5055;
const H = 270;
const TOP = 70;
const BOTTOM = 215;
const BASELINE = 168;
const AMP = 34;
const NOTCH = 150; // swallowtail cut depth on the trailing end
const N = 60; // samples per edge; every frame emits the same commands so SMIL can morph
const FRAMES = 12;
const WAVE_CYCLE_S = 2.4;

function waveY(x: number, base: number, phase: number) {
  return base + AMP * Math.sin((2 * Math.PI * x) / W - phase);
}

function flagPath(phase: number) {
  const d: string[] = [];
  for (let i = 0; i <= N; i++) {
    const x = Math.round((W * i) / N);
    d.push(`${i === 0 ? 'M' : 'L'} ${x} ${waveY(x, TOP, phase).toFixed(1)}`);
  }
  d.push(`L ${W - NOTCH} ${waveY(W - NOTCH, (TOP + BOTTOM) / 2, phase).toFixed(1)}`);
  for (let i = N; i >= 0; i--) {
    const x = Math.round((W * i) / N);
    d.push(`L ${x} ${waveY(x, BOTTOM, phase).toFixed(1)}`);
  }
  return d.join(' ') + ' Z';
}

function textPathD(phase: number) {
  const d: string[] = [];
  for (let i = 0; i <= N; i++) {
    const x = Math.round((W * i) / N);
    d.push(`${i === 0 ? 'M' : 'L'} ${x} ${waveY(x, BASELINE, phase).toFixed(1)}`);
  }
  return d.join(' ');
}

const PHASES = Array.from({ length: FRAMES + 1 }, (_, k) => (2 * Math.PI * k) / FRAMES);
const FLAG_VALUES = PHASES.map(flagPath).join(';');
const TEXT_VALUES = PHASES.map(textPathD).join(';');

export default function QuoteBanner() {
  return (
    <div className="banner" aria-hidden="true">
      <img className="banner-plane" src="assets/banner-plane-part.png" alt="" />
      <div className="banner-fabric">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
          <defs>
            <linearGradient id="banner-cloth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F8DA45" />
              <stop offset="1" stopColor="#EFC81F" />
            </linearGradient>
            <path id="banner-text-path" d={textPathD(0)}>
              <animate
                attributeName="d"
                dur={`${WAVE_CYCLE_S}s`}
                repeatCount="indefinite"
                values={TEXT_VALUES}
              />
            </path>
          </defs>
          <path fill="url(#banner-cloth)" d={flagPath(0)}>
            <animate
              attributeName="d"
              dur={`${WAVE_CYCLE_S}s`}
              repeatCount="indefinite"
              values={FLAG_VALUES}
            />
          </path>
          <text fontFamily="'Figtree', sans-serif" fontWeight={700} fontSize={72} fill="#2e2a18">
            {/* textLength stretches the quote across the cloth so only a small
                margin is left at the leading and trailing ends */}
            <textPath
              href="#banner-text-path"
              startOffset={130}
              textLength={W - 550}
              lengthAdjust="spacingAndGlyphs"
            >
              {QUOTE}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
