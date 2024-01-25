import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mapper } from '@/helpers/mapper';
import Layout from './layout';
import '../app/globals.css';

const ProjectsPage = ({ projects }) => {
  return (
    <Layout>
      <Header />
      <div className="bg-black flex justify-center pt-10 h-auto pb-10">
        <div className="w-1/2">
          <div className="text-center h-40 pt-16">
            <h1 className="justify-center align-center text-xl font-bold">
              Projects
            </h1>
            <div className="py-2">{projects.desc}</div>
          </div>
          {projects.list.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOdd={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps() {
  const projects = mapper('projects');

  return {
    props: {
      projects
    }
  };
}

export default ProjectsPage;
