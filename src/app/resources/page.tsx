'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Resource from "./resource";

const Resources = () => {

  return (
    <div className="landing-body">
      <Navbar />
      <main className="flex flex-col gap-12 items-center min-h-screen p-4 md:p-8 bg-neutral-50 text-(--color-dark-violet) font-(family-name:--font-main)">
        <h3 className="text-4xl font-extrabold  mb-6 text-center">Resources</h3>
        <p className='text-sm font-medium'>A collection of resources dedicated to empowering women in tech, curated by past, present, and future women in tech.</p>
        <Resource />
      </main>
    </div>
  );
};

export default Resources;
