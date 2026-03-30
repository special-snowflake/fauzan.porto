import React from 'react';
import '../app/globals.css';
import Header from '@/components/Header';
import Layout from './layout';
import Footer from '@/components/Footer';
import { mapper } from '@/helpers/mapper';
import Icon from '@/components/Icons';

const ContactPage = ({ contacts, contactsPageData }) => {
  return (
    <Layout>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4">
        <div className="w-full max-w-2xl animate-slide-up">
          {/* Hero Section */}
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="badge">{contactsPageData.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {contactsPageData.heading.split(' ').map((word, i) => 
                word === contactsPageData.heading.split(' ')[contactsPageData.heading.split(' ').length - 1]
                  ? <span key={i} className="gradient-text">{word}</span>
                  : <span key={i}>{word} </span>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {contactsPageData.description}
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center justify-center sm:justify-start p-6 hover:border-primary/50 hover:shadow-glow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-primary/40 to-accent/40 flex items-center justify-center group-hover:from-primary/60 group-hover:to-accent/60 transition-smooth">
                    <Icon type={contact.type} />
                  </div>
                  <div className="flex-1 hidden sm:block">
                    <p className="font-semibold text-white group-hover:gradient-text transition-smooth">
                      {contact.label}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-smooth flex-shrink-0"
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
                </div>
                <span className="sm:hidden text-white font-semibold ml-2">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>

          {/* Alternative Contact Method */}
          <div
            className="glass rounded-xl p-8 text-center mb-8 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {contactsPageData.emailHeading}
            </h2>
            <p className="text-gray-400 mb-4">
              {contactsPageData.emailDescription}
            </p>
            <a
              href="mailto:ahmadfauzan.dev@gmail.com"
              className="inline-flex items-center btn-primary"
            >
              <span>{contactsPageData.emailButtonLabel}</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps() {
  const contacts = mapper('contacts');
  const contactsPageData = mapper('contactsPage');

  return {
    props: {
      contacts,
      contactsPageData,
    },
  };
}

export default ContactPage;
