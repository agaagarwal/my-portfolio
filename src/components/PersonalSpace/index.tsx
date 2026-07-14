import { SNIPPETS } from '../../data/content';
import './personal-space.css';

export default function PersonalSpace() {
  return (
    <section className="personal-space" id="personal-space">
      <div className="section-inner">
        <h2 className="personal-title">Personal Space</h2>
        <p className="personal-para">
          When I am not designing, I spend my time living and consuming. I love cinema, music, and
          all forms of storytelling. I admire how minute details shape a larger idea. Connecting
          with new people gives me a fresh perspective of the world through their lenses.
          Ultimately, good design comes from understanding people. I also like creating. Who does
          not?
        </p>
        <p className="personal-lead">Here are a few snippets from my life.</p>
      </div>
      <div className="snippets-viewport">
        {/* two identical sets + translateX(-50%) = seamless infinite loop */}
        <div className="snippets-track">
          {[0, 1].map((set) => (
            <div className="snippets-set" key={set} aria-hidden={set === 1}>
              {SNIPPETS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={set === 0 ? `Life snippet ${i + 1}` : ''}
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
