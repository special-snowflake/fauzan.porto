import Image from 'next/image';
import React from 'react';
import Header from '@/components/Header';
import Layout from './layout';
import { mapper } from '@/helpers/mapper';
import Link from 'next/link';
import InteractiveGrid from '@/components/InteractiveGrid';

const data = mapper('dashboard');

const Home = () => {
  return (
    <Layout>
      <Header />
      <main className="min-h-screen overflow-hidden pt-16">
        <InteractiveGrid />
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col lg:flex-row">
          {/* Left Section - Image & Pattern */}
          <div className="order-2 flex w-full items-center justify-center px-5 py-12 sm:px-8 sm:py-16 lg:order-1 lg:w-1/2 lg:px-12 lg:py-20 xl:px-20">
            <div className="relative w-full max-w-lg animate-slide-up">
              {/* Image container */}
              <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-2 shadow-2xl shadow-black/20">
                <div className="absolute inset-2 z-10 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-screen"></div>
                <Image
                  src={data.imageLeft}
                  height={350}
                  width={350}
                  alt="personal-photo"
                  className="h-auto w-full rounded-2xl object-cover transition-smooth duration-300 hover:scale-105"
                  priority
                />
              </div>

              {/* Pattern overlay */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-3xl opacity-10"
                style={{
                  backgroundImage: `url(${data.backgroundLeft})`,
                  backgroundSize: '160px 160px'
                }}
              ></div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="order-1 flex w-full items-center justify-center px-5 py-12 sm:px-8 sm:py-16 lg:order-2 lg:w-1/2 lg:px-12 lg:py-20 xl:px-20">
            <div className="w-full max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {/* Welcome badge */}
              <div className="mb-7 inline-block">
                <span className="badge">
                  {data.welcomeBadge}
                </span>
              </div>

              {/* Main heading */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {data.headline} <span className="gradient-text">{data.name}</span>
              </h1>

              {/* Description */}
              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
                {data.desc}
              </p>

              {/* Secondary description */}
              <p className="mb-9 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {data.extendedBio}
              </p>

              {/* CTA Buttons */}
              <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                {data.cta.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={button.variant === 'primary' ? 'btn-primary w-full text-center sm:w-auto' : 'btn-secondary w-full text-center sm:w-auto'}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:gap-6">
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <p className="text-2xl font-bold gradient-text sm:text-3xl">{stat.value}</p>
                    <p className="text-xs leading-5 text-slate-300 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
