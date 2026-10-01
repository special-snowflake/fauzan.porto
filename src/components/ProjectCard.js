'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';

/**
 * Project / list row — paired image and title, no card chrome.
 * Transparent background, 0px radius, no shadow, full-bleed image inside the
 * 1078px container, title below in Roobert 16px weight 400.
 */
const ProjectCard = ({ project, index = 0 }) => {
  const rowNum = String(index + 1).padStart(2, '0');

  return (
    <article className="project-row">
      <a
        href={project.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-plain"
        aria-label={project.projectName}
      >
        <div className="project-row__media">
          <Image
            src={project.imagePath}
            fill
            sizes="(max-width: 768px) 100vw, 1078px"
            alt={project.projectName}
            className="project-row__img"
            onError={(event) => {
              event.target.src = '/assets/images/not-found.webp';
            }}
          />
        </div>

        <div className="project-row__head">
          <h3 className="project-row__title">{project.projectName}</h3>
          <span className="project-row__index">{rowNum}</span>
        </div>

        <p className="project-row__desc">{project.desc}</p>

        {Array.isArray(project.tag) && project.tag.length > 0 && (
          <ul className="tag-list" style={{ listStyle: 'none', padding: 0 }}>
            {project.tag.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <span className="pill-ghost" style={{ marginTop: 'var(--spacing-28)' }}>
          {project.link.label}
        </span>
      </a>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    imagePath: PropTypes.string,
    desc: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    })
  }).isRequired,
  index: PropTypes.number
};

export default ProjectCard;
