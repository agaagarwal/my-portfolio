import type { Project } from '../../data/content';

interface Props {
  project: Project;
  index: number;
}

function ProjectCoverMedia({ project }: { project: Project }) {
  if (project.cover.endsWith('.lottie')) {
    return <dotlottie-player src={project.cover} autoplay loop />;
  }
  return <img src={project.cover} alt={project.coverAlt} loading="lazy" />;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="project-card">
      <div className="project-info">
        <div className="project-meta-head">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-rule" />
          <span className="project-category">{project.category}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-divider" />
        <div className="project-meta-cols">
          <div className="project-meta-group">
            <div className="project-meta">
              <div className="project-meta-label">{project.metaLeft.label}</div>
              <div className="project-meta-value">{project.metaLeft.value}</div>
            </div>
            {project.metaRight && (
              <div className="project-meta">
                <div className="project-meta-label">{project.metaRight.label}</div>
                <div className="project-meta-value">
                  {project.metaRight.bold && <b>{project.metaRight.bold}</b>}
                  {project.metaRight.value}
                </div>
              </div>
            )}
          </div>
          {/* compact duplicate of the cover that sits beside the meta text on
              narrow screens; the full-size cover hides there instead */}
          <div className="project-cover project-cover-inline">
            <ProjectCoverMedia project={project} />
          </div>
        </div>
        <a className="read-more" href={project.href} target="_blank" rel="noopener noreferrer">
          <span className="read-more-circle">
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
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
          <span className="read-more-label">READ MORE</span>
        </a>
      </div>
      <div className="project-cover">
        <ProjectCoverMedia project={project} />
      </div>
    </article>
  );
}
