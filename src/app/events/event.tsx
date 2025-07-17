import React from 'react';

const Event = ({ location, startTime, endTime, link, title }: { location: string, startTime: string, endTime: string, link: string, title: string }) => {

  const eventStartDate = new Date(startTime);
  const eventEndDate = new Date(endTime);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedStartDate = formatter.format(eventStartDate);
  const formattedEndDate = formatter.format(eventEndDate);

  return (
    <div className="relative flex flex-col my-6 bg-leafy shadow-sm border border-slate-200 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <h5 className="text-slate-800 text-xl font-semibold">
          {title}
        </h5>
      </div>
      <p className="block text-slate-600 leading-normal font-light mb-4">
        {formattedStartDate} - {formattedEndDate}
      </p>
      <p className="block text-slate-600 leading-normal font-light mb-4"><a href={location}>Join us here</a></p>
      <div>
        <a href={link} rel="noreferer noopener" target="_blank" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
          More Info
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Event;