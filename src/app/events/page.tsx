'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getUpcomingEvents } from '@/api/calendar';
import Event from './event';
import Footer from '../components/Footer';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageToken, setPageToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUpcomingEvents();
        setEvents(response.items);
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
    <div className="landing-body">
      <Navbar />
      <main className="min-h-screen p-4 md:p-8">
        <h1 className="text-3xl font-bold text-dark-violet dark:text-(--color-leafy) mb-6 text-center">Join our events</h1>
        <p className="text-lg text-center mb-12">
          <a href="https://calendar.google.com/calendar/u/0/embed?src=7bd85d9630b008f805dfb8ac4e76bc7475c5a84b03ee80674d56beb9a461fd02@group.calendar.google.com&ctz=America/Los_Angeles&pli=1">
            Subscribe to our events calendar
          </a>{" "}
          to stay updated about community events.
        </p>
        <div className="max-w-4xl mx-auto">
          { !events.length && <p className="text-center text-md">No upcoming events found</p> }
          { events 
            && events.map(({ id, location, start, end, htmlLink, summary }: { id: string, location: string, start: { dateTime: string }, end: { dateTime: string }, htmlLink: string, summary: string }) => {
            return <Event location={location} startTime={start.dateTime} endTime={end.dateTime} link={htmlLink} title={summary} key={id} />})
          }
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
