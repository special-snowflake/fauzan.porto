import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import Icon from '@/components/Icons';
import { mapper } from '@/helpers/mapper';

const ContactPage = ({ contacts, contactsPageData }) => {
  const emailContact = contacts.find((contact) => contact.type === 'email');
  const emailHref = emailContact ? emailContact.url : 'mailto:ahmadfauzan.dev@gmail.com';

  return (
    <PageShell title="Contacts">
      <Header />

      <main>
        {/* ── SECTION HEADER ── */}
        <section className="surface-paper container-page" style={{ paddingTop: 'calc(66px + var(--spacing-68))' }}>
          <p className="eyebrow" style={{ color: 'var(--color-felt-gray)' }}>
            {contactsPageData.badge}
          </p>

          <h1 className="heading-whisper" style={{ marginTop: 'var(--spacing-28)' }}>
            {contactsPageData.heading}
          </h1>

          <p className="body-muted" style={{ marginTop: 'var(--spacing-28)', maxWidth: '52ch' }}>
            {contactsPageData.description}
          </p>
        </section>

        {/* ── CONTACT ROWS — underline-free text links on hairlines ── */}
        <section className="surface-paper container-page" style={{ paddingBlock: 'var(--spacing-64)' }}>
          <hr className="rule" />

          {contacts.map((contact) => (
            <a
              key={contact.type}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-plain contact-row"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-28)' }}>
                <Icon type={contact.type} />
                <span className="body-copy">{contact.label}</span>
              </span>

              <span className="caption" style={{ color: 'var(--color-felt-gray)' }}>
                &#8599;
              </span>
            </a>
          ))}
        </section>

        {/* ── EMAIL ── */}
        <section className="surface-paper container-page" style={{ paddingBottom: 'var(--spacing-68)' }}>
          <h2 className="heading-accent" style={{ maxWidth: '20ch' }}>
            {contactsPageData.emailHeading}
          </h2>

          <p className="body-muted" style={{ marginTop: 'var(--spacing-28)', maxWidth: '48ch' }}>
            {contactsPageData.emailDescription}
          </p>

          <div style={{ marginTop: 'var(--spacing-40)' }}>
            <a href={emailHref} className="pill-ghost">
              {contactsPageData.emailButtonLabel}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </PageShell>
  );
};

export async function getStaticProps() {
  const contacts = mapper('contacts');
  const contactsPageData = mapper('contactsPage');

  return {
    props: {
      contacts,
      contactsPageData
    }
  };
}

export default ContactPage;
