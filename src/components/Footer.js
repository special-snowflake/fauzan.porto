'use client';

import Link from 'next/link';
import { mapper } from '@/helpers/mapper';
import Icon from '@/components/Icons';

/**
 * Footer — compact address block.
 * Roobert 11px weight 400 at 1.36 leading in Felt Gray, tightened by 8px top margins.
 * No dividers beyond the single top hairline, no elevation.
 */
const Footer = () => {
  const year = new Date().getFullYear();
  const footerData = mapper('footer');
  const contactsData = mapper('contacts');

  return (
    <footer className="surface-paper">
      <div className="container-page section-gap">
        <hr className="rule" />

        <div className="site-footer__grid" style={{ paddingTop: 'var(--section-gap)' }}>
          <div>
            <h2 className="site-footer__heading">{footerData.aboutHeading}</h2>
            <span className="site-footer__line">{footerData.aboutDescription}</span>
          </div>

          <div>
            <h2 className="site-footer__heading">{footerData.linksHeading}</h2>
            {footerData.quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="link-plain site-footer__line">
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h2 className="site-footer__heading">{footerData.sourceCodeHeading}</h2>
            <a
              href={footerData.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-plain site-footer__line"
            >
              {footerData.sourceCodeLabel}
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--spacing-28)',
            flexWrap: 'wrap',
            marginTop: 'var(--section-gap)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-28)' }}>
            {contactsData.map((contact) => (
              <a
                key={contact.type}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-plain"
                aria-label={contact.label}
                style={{ display: 'inline-flex' }}
              >
                <Icon type={contact.type} />
              </a>
            ))}
          </div>

          <p className="caption" style={{ color: 'var(--color-felt-gray)' }}>
            © {year} {footerData.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
