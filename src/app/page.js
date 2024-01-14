// pages/index.js
import Image from 'next/image';
import React from 'react';
import Header from '@/components/CustomHeader';

const Home = () => {
  return (
    <div className="min-h-screen flex">
      <div
        className="flex-1 flex bg-cover bg-center items-center justify-center"
        style={{
          backgroundImage: `url('/assets/images/bg-pattern-white.webp')`,
          backgroundSize: '300px 300px',
        }}
      >
        <div>
          <Image
            src="/assets/images/photo.jpeg"
            height={250}
            width={250}
            alt="personal-photo"
          />
        </div>
      </div>
      <div className="flex-1 bg-black text-white flex items-center justify-center">
        <Header />
        <p className="text-2xl">Welcome to my portfolio.</p>
      </div>
    </div>
  );
};

export default Home;
