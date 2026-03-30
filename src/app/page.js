import Image from 'next/image';
import React from 'react';
import Header from '@/components/Header';
import Layout from './layout';
import { mapper } from '@/helpers/mapper';
import Link from 'next/link';

const data = mapper('dashboard');

const Home = () => {
  return (
    <Layout>
      <Header />
      <main className="min-h-screen flex flex-col lg:flex-row items-stretch pt-16">
        {/* Left Section - Image & Pattern */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 sm:p-8 lg:p-12 order-2 lg:order-1 min-h-60 lg:min-h-screen">
          <div className="w-full max-w-md animate-slide-up">
            {/* Glow background circles */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-30 animate-float"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Image container */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/30 shadow-glow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10 mix-blend-overlay"></div>
              <Image
                src={data.imageLeft}
                height={350}
                width={350}
                alt="personal-photo"
                className="w-full h-auto object-cover hover:scale-105 transition-smooth duration-300"
                priority
              />
            </div>

            {/* Pattern overlay */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl"
              style={{
                backgroundImage: `url(${data.backgroundLeft})`,
                backgroundSize: '200px 200px'
              }}
            ></div>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12 order-1 lg:order-2 min-h-96 lg:min-h-screen">
          <div className="w-full max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Welcome badge */}
            <div className="mb-6 inline-block">
              <span className="badge">
                {data.welcomeBadge}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              {data.headline} <span className="gradient-text">{data.name}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
              {data.desc}
            </p>

            {/* Secondary description */}
            <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
              {data.extendedBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {data.cta.map((button, index) => (
                <Link 
                  key={index}
                  href={button.href} 
                  className={button.variant === 'primary' ? 'btn-primary text-center sm:text-left' : 'btn-secondary text-center sm:text-left'}
                >
                  {button.label}
                </Link>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
