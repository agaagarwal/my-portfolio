import { PROJECTS } from '../../data/content';
import ProjectCard from './ProjectCard';
import './projects.css';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-inner">
        <h2 className="projects-title">Work</h2>
        <div className="project-stack">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
