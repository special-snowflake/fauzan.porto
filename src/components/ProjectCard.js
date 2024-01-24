'use client';
import PropTypes from 'prop-types';
import '../app/globals.css';
import Image from 'next/image';

const ProjectCard = ({ project, isOdd }) => {
  const imagePosition = isOdd ? 'left' : 'right';

  return (
    <div
      className={`flex items-center justify-center bg-gray-950 text-white p-4 my-3 ${
        imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {project.imagePath && (
        <Image
          src={project.imagePath}
          height={100}
          width={100}
          alt="personal-photo"
        />
      )}
      <div className="w-1/2 md:w-2/3 max-w-lg mx-4">
        <h2 className="text-2xl font-bold">{project.projectName}</h2>
        <p className="my-2">{project.desc}</p>
        <a
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {project.link.label}
        </a>
        <div className="mt-2">
          {project.tag.map((tag) => (
            <span
              key={tag}
              className="mr-2 bg-gray-800 text-white py-1 px-2 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.any,
  isOdd: PropTypes.bool
};

export default ProjectCard;