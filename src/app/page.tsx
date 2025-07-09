'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Footer from './components/Footer';
import { getUpcomingEvents } from '@/api/calendar';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetch data');
      try {
        const response = await getUpcomingEvents();
        console.log('events', response);
        setEvents(response.items.slice(0, 2));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="landing-body">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
          <p>Loading...</p>;
        </main>
      </div>
    );
  }
  return (
    <div className="main-container landing-body">
      <Navbar />
      <div className="flex text-white min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="text-center">
          <h1 className="text-7xl text-white">WCN</h1>
          <p className="subtitle">Women Coders Network</p>
          <hr className="hr-line" />
        </div>

        <main className="main-content">
          <div>
            <h3 className="section-header">Who Are We?</h3>
            <p className="info">
            Women Coders Network is uniting communities to empower women and gender minorities in technology worldwide.
            </p>
          </div>
          <section>
            <h3 className="section-header">What{'\''}s Happening?</h3>
            <p className="info">
              🚧 We{'\''}re Getting Ready! Our website is currently under
              construction. 🚧
            </p>
            <p className="info">
              Soon, it will be your go-to hub for resources, community
              interaction, and essential updates from WCN. Stay tuned for
              the launch of something great!
            </p>
          </section>
          <section>
            <h3 className="section-header">Get Connected!</h3>
            <p className="info">
              Join our Discord community! Connect with fellow women in tech,
              share ideas, seek support, and learn together. Our collective
              voice will shape the future of technology.
            </p>
            <Link href="https://discord.gg/YpaJ3JckNM">
              <div className="join-button">Join Our Discord</div>
            </Link>
          </section>
          <section>
            <h3 className="section-header">Events</h3>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 place-items-center align-center">
              <div
                className="m-4 block rounded-lg bg-dark-violet shadow-secondary-1 dark:bg-surface-dark dark:text-dark-violet text-surface">
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight">
                    {events[0].summary}
                  </h5>
                  <p className="mb-4 text-base">
                    With supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <a href="#" className="bg-leafy hover:bg-grass-green text-dark-violet font-bold py-2 px-4 rounded">
                    Join Us!
                  </a>
                </div>
              </div>

              <div
                className="block rounded-lg bg-dark-violet shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight">
                    {events[0].summary}
                  </h5>
                  <p className="mb-4 text-base">
                    With supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <a href="#" className="bg-leafy hover:bg-grass-green text-dark-violet font-bold py-2 px-4 rounded">
                    Join Us!
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
