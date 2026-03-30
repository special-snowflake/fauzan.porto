'use client';

import '../app/globals.css';
import { mapper } from '@/helpers/mapper';

const Footer = () => {
  const year = new Date().getFullYear();
  const footerData = mapper('footer');
  const contactsData = mapper('contacts');

  return (
    <footer className="w-full border-t border-gray-700/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-3">{footerData.aboutHeading}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerData.aboutDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">{footerData.linksHeading}</h3>
            <ul className="space-y-2 text-sm">
              {footerData.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-smooth">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Source Code */}
          <div>
            <h3 className="text-white font-semibold mb-3">{footerData.sourceCodeHeading}</h3>
            <a 
              target="_blank" 
              href={footerData.sourceCodeUrl}
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-accent transition-smooth text-sm"
            >
              <span>{footerData.sourceCodeLabel}</span>
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/30 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {contactsData.map((contact) => (
              <a 
                key={contact.type}
                href={contact.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-smooth hover:scale-110"
                aria-label={contact.label}
              >
                <img 
                  src={`/assets/icons/${contact.type}.svg`}
                  alt={contact.label}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(70%)' }}
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {year} {footerData.copyrightText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
