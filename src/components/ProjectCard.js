'use client';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectCard = ({ project, index = 0 }) => {
  const isReversed = index % 2 !== 0;
  const cardNum = String(index + 1).padStart(2, '0');

  return (
    <div className="project-card">
      <div className="card-accent" />

      <div className={`card-inner ${isReversed ? 'card-inner--reversed' : ''}`}>
        {/* Image */}
        <div className="card-img">
          <Image
            src={project.imagePath}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={project.projectName}
            className="card-img__photo"
            onError={(e) => {
              e.target.src = '/assets/images/not-found.webp';
            }}
          />
          <div className="card-img__overlay" />
          <span className="card-index">{cardNum}</span>
        </div>

        {/* Content */}
        <div className="card-content">
          <h3 className="card-title">{project.projectName}</h3>

          <p className="card-desc">{project.desc}</p>

          <div className="card-tags">
            {project.tag.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-cta"
          >
            <span>{project.link.label}</span>
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.any,
  index: PropTypes.number,
};

export default ProjectCard;
