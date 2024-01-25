import React from 'react';
import '../app/globals.css';
import Header from '@/components/Header';
import Layout from './layout';
import Footer from '@/components/Footer';
import { mapper } from '@/helpers/mapper';
import Icon from '@/components/Icons';

const ContactPage = ({ contacts }) => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen flex flex-col bg-black text-white items-center justify-center">
        <h1 className="text-white mb-8 font-medium text-xl">
          You can reach me out at:
        </h1>
        <div className="flex items-center">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 mb-4 rounded-full border border-white hover:bg-white/[0.8] duration-300 m-2 flex justify-content font-medium"
            >
              <Icon type={contact.type} />
              {contact.label}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps() {
  const contacts = mapper('contacts');

  return {
    props: {
      contacts
    }
  };
}

export default ContactPage;
