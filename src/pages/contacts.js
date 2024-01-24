import React from 'react';
import '../app/globals.css';
import Header from '@/components/Header';
import Layout from './layout';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen flex bg-black text-white items-center justify-center">
        <h1 className="text-white">This Page is Under Maintenance.</h1>
      </div>
      <Footer />
    </Layout>
  );
};

export default ContactPage;
