'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Footer from './components/Footer';
import { getUpcomingEvents } from '@/api/calendar';
import About from './components/About';

const convertDateToGoogleFormat = (date: string) => {
  return new Date(date).toISOString().replace(/[-/.:]+/g, '');
};

const formatToLocalTimeZone = (date: string) => {
  const eventDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(eventDate);
}

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUpcomingEvents();
        console.log('events', response);
        setEvents(response.items.slice(0, 3)); // only show first 3 events
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
          <p>Loading...</p>
        </main>
      </div>
    );
  }
  return (
    <div className="main-container landing-body">
      <Navbar />
      <div className="content-container flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="header">
          <h2 className="title text-7xl font-bold text-white">WCN</h2>
          <p className="subtitle">Women Coders Network</p>
          <hr className="hr-line" />
        </div>
        <main>
          <About />
          <section className="mx-auto md:w-1/2">
            <h3 className="section-header">What{'\''}s Happening?</h3>
            <p className="mb-20">
              🚧 We{'\''}re Getting Ready! Our website is currently under
              construction. 🚧
            </p>
            <p className="mb-20">
              Soon, it will be your go-to hub for resources, community
              interaction, and essential updates from WCN. Stay tuned for
              the launch of something great!
            </p>
          </section>
          <section className="mx-auto md:w-1/2">
            <h3 className="section-header">Get Connected!</h3>
            <div className="mb-20">
              <p className="mb-6">Join our Discord community! Connect with fellow women in tech,
              share ideas, seek support, and learn together. Our collective
              voice will shape the future of technology.</p>
              <Link href="https://discord.gg/YpaJ3JckNM">
                <span className="join-button w-1/2">Join Our Discord</span>
              </Link>
            </div>
          </section>
          <section className="mx-auto lg:w-3/4">
            <h3 className="section-header">Upcoming Events</h3>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 place-items-center align-center">
              { events && events.map( ({ end, start, location, summary }, index ) => {
                const link = `https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&dates=${convertDateToGoogleFormat(start.dateTime)}/${convertDateToGoogleFormat(end.dateTime)}&text=${summary}&location=${location}&ctz=${start.timeZone}`;
                return (
                  <div key={index} className="m-4 block text-neutral-50 rounded-lg bg-dark-violet dark:bg-leafy shadow-secondary-1 dark:bg-surface-dark dark:text-dark-violet text-surface">
                    <div className="p-6">
                      <h5 className="mb-6 text-xl font-bold leading-tight">
                        { summary }
                      </h5>
                      <p className="mb-6">
                        Time: { formatToLocalTimeZone(start.dateTime) } - { formatToLocalTimeZone(end.dateTime) }
                      </p>
                      <a href={ link } rel="noreferer noopener" target="_blank" className="bg-leafy dark:bg-dark-violet hover:bg-grass-green text-dark-violet dark:text-leafy font-bold py-2 px-4 rounded">
                        Add to Calendar
                      </a>
                    </div>
                  </div>
                );
              }) }
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
