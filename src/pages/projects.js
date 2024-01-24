import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/CustomHeader';
import { mapper } from '@/helpers/mapper';
import '../app/globals.css';
const projects = mapper('projects');

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#444444] flex justify-center pt-10 h-auto">
        <div className="w-1/2">
          <div className="text-center h-40 p-16">
            <h1 className="justify-center align-center text-xl font-bold">Projects</h1>
            <div>Description</div>
          </div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOdd={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
