import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mapper } from '@/helpers/mapper';
import Layout from './layout';
import Link from 'next/link';
import '../app/globals.css';

const ProjectsPage = ({ projects }) => {
  return (
    <Layout>
      <Header />
      <main className="min-h-screen pt-20 pb-12">
        <div className="bg-grid" />
        <div className="bg-glow" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 hero-eyebrow mb-6">
              <span className="hero-eyebrow__dot" />
              {projects.eyebrow}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white">
              {projects.heading.split(' ').map((word, i) => 
                word === projects.heading.split(' ')[projects.heading.split(' ').length - 1] 
                  ? <span key={i} className="gradient-text">{word}</span> 
                  : <span key={i}>{word} </span>
              )}
            </h1>

            <p className="hero-desc max-w-xl mx-auto">
              {`// ${projects.desc}`}
            </p>
          </div>

          {/* Project count */}
          <div className="project-counter mb-8">
            {projects.list.length} {projects.projectCountText}
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {projects.list.map((project, index) => (
              <div
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-20 animate-slide-up cta-section"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="cta-grid-bg" />
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white tracking-tight">
              {projects.cta.heading}
            </h2>
            <p className="cta-desc mb-7">
              {`// ${projects.cta.description}`}
            </p>
            <Link href={projects.cta.buttonHref} className="cta-btn">
              <span>{projects.cta.buttonLabel}</span>
              <span>Get in Touch</span>
              <svg
                width="16"
                height="16"
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
              {/* </a> */}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps() {
  const projects = mapper('projects');
  return { props: { projects } };
}

export default ProjectsPage;
