import React from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { mapper, projectsInDisplayOrder } from '@/helpers/mapper';

const ProjectsPage = ({ projects }) => {
  return (
    <PageShell title="Projects">
      <Header />

      <main>
        {/* ── SECTION HEADER ── */}
        <section className="surface-paper container-page" style={{ paddingTop: 'calc(66px + var(--spacing-68))' }}>
          <p className="eyebrow" style={{ color: 'var(--color-felt-gray)' }}>
            {projects.eyebrow}
          </p>

          <h1 className="heading-whisper" style={{ marginTop: 'var(--spacing-28)' }}>
            {projects.heading}
          </h1>

          <p className="body-muted" style={{ marginTop: 'var(--spacing-28)', maxWidth: '52ch' }}>
            {projects.desc}
          </p>

          <div style={{ marginTop: 'var(--spacing-48)' }}>
            <span className="caption">
              {projects.list.length} {projects.projectCountText}
            </span>
          </div>
        </section>

        {/* ── PROJECT LIST — one full-width row per project ── */}
        <section className="surface-paper container-page" style={{ paddingBlock: 'var(--spacing-64)' }}>
          <div style={{ display: 'grid', gap: 'var(--spacing-64)' }}>
            {projects.list.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* ── CLOSING STATEMENT ── */}
        <section className="surface-paper container-page" style={{ paddingBottom: 'var(--spacing-68)' }}>
          <hr className="rule" />
          <h2 className="heading-anchor" style={{ marginTop: 'var(--section-gap)', maxWidth: '18ch' }}>
            {projects.cta.heading}
          </h2>
          <p className="body-muted" style={{ marginTop: 'var(--spacing-28)', maxWidth: '52ch' }}>
            {projects.cta.description}
          </p>
          <div style={{ marginTop: 'var(--spacing-40)' }}>
            <Link href={projects.cta.buttonHref} className="pill-ghost">
              {projects.cta.buttonLabel}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </PageShell>
  );
};

export async function getStaticProps() {
  const projectData = mapper('projects');
  return {
    props: {
      // Same ordering helper the home page's featured rows use.
      projects: { ...projectData, list: projectsInDisplayOrder() }
    }
  };
}

export default ProjectsPage;
