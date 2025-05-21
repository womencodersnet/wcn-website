import React from 'react';

const About = () => {

  const email = 'womencodersnetwork@gmail.com';
  return (
    <section className='flex flex-col items-center gap-4 mb-4'>
        <h3 className='text-3xl font-bold'>About Us</h3>
        <article className='font-main text-xl'>The Women Coders Network is a community that fosters connection, ignites knowledge sharing, celebrates the brilliance of women across every facet of tech, and signifies the boundless potential of women shaping the future of technology, together!</article>
    </section>
  );
};

export default About;