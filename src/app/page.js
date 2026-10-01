import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import IridescentBackdrop from '@/components/IridescentBackdrop';
import ScrollBadge from '@/components/ScrollBadge';
import { mapper } from '@/helpers/mapper';

const data = mapper('dashboard');
const projects = mapper('projects');

const FEATURED_COUNT = 3;

const Home = () => {
  const featured = projects.list.slice(0, FEATURED_COUNT);

  return (
    <>
      <Header />

      <main>
        {/* ── HERO — one monumental phrase over the iridescent media ── */}
        <section className="on-dark hero-viewport">
          <IridescentBackdrop />

          <div className="container-page" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h1 className="display-headline" style={{ color: 'var(--color-paper)' }}>
              {data.name}
            </h1>
          </div>

          <ScrollBadge />
        </section>

        {/* ── MANIFESTO — 78px whisper weight on paper ── */}
        <section className="surface-paper container-page section-gap-lg">
          <p className="eyebrow" style={{ color: 'var(--color-felt-gray)' }}>
            {data.welcomeBadge}
          </p>

          <h2 className="heading-whisper" style={{ marginTop: 'var(--spacing-28)', maxWidth: '22ch' }}>
            {data.extendedBio}
          </h2>

          <hr className="rule" style={{ marginBlock: 'var(--section-gap)' }} />

          <p className="body-muted" style={{ maxWidth: '58ch' }}>
            {data.desc}
          </p>
        </section>

        {/* ── ADJACENT BANDS — portrait left, statement right ── */}
        <section className="surface-paper container-page section-gap">
          <div
            style={{
              display: 'grid',
              gap: 'var(--section-gap)',
              alignItems: 'center',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', background: 'var(--surface-ash-mist)' }}>
              <Image
                src={data.imageLeft}
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                alt={data.name}
                className="project-row__img"
                priority
              />
            </div>

            <div>
              <h2 className="heading-accent">{data.headline}</h2>

              <p className="body-copy" style={{ marginTop: 'var(--spacing-28)', maxWidth: '48ch' }}>
                {data.extendedBio}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--element-gap)', marginTop: 'var(--spacing-40)' }}>
                {data.cta.map((button) => (
                  <Link
                    key={button.href}
                    href={button.href}
                    className={button.variant === 'primary' ? 'pill-ghost' : 'pill-ghost'}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INVERSE BAND — stats ── */}
        <section className="surface-obsidian on-dark">
          <div
            className="container-page"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--section-gap)',
              paddingBlock: 'var(--section-gap)'
            }}
          >
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <p className="heading-anchor" style={{ color: 'var(--color-paper)' }}>
                  {stat.value}
                </p>
                <p className="caption" style={{ color: 'var(--color-ash-mist)', marginTop: 'var(--spacing-12)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SELECTED WORK — single-column list rows ── */}
        <section className="surface-paper container-page section-gap-lg">
          <p className="eyebrow" style={{ color: 'var(--color-felt-gray)' }}>
            {projects.eyebrow}
          </p>

          <h2 className="heading-whisper" style={{ marginTop: 'var(--spacing-28)' }}>
            {projects.heading}
          </h2>

          <div style={{ display: 'grid', gap: 'var(--spacing-64)', marginTop: 'var(--spacing-64)' }}>
            {featured.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div style={{ marginTop: 'var(--spacing-64)' }}>
            <Link href="/projects" className="pill-ghost">
              {projects.projectCountText}
              {` (${projects.list.length})`}
            </Link>
          </div>
        </section>

        {/* ── CLOSING STATEMENT ── */}
        <section className="surface-paper container-page section-gap-lg">
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
    </>
  );
};

export default Home;
