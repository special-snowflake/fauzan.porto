import Image from 'next/image';
import React from 'react';
import Header from '@/components/Header';
import Layout from './layout';
import { mapper } from '@/helpers/mapper';
const data = mapper('dashboard');

const Home = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen flex">
        <div
          className="flex-1 flex bg-cover bg-center items-center justify-center"
          style={{
            backgroundImage: `url(${data.backgroundLeft})`,
            backgroundSize: '300px 300px'
          }}
        >
          <div>
            <Image
              src={data.imageLeft}
              height={250}
              width={250}
              alt="personal-photo"
            />
          </div>
        </div>
        <div className="flex-1 bg-black text-white flex items-center justify-center pt-10">
          <p className="text-2xl">{data.desc}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
