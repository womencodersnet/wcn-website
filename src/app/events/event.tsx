import React from "react";

const Event = ({
  location,
  startTime,
  link,
  title,
}: {
  location: string;
  startTime: string;
  link: string;
  title: string;
}) => {
  const eventStartDate = new Date(startTime);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formatMdY = (d: Date) => {
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  const formattedStartDate = formatMdY(eventStartDate);

  return (
    <div className="w-56 h-72 bg-[url('/assets/placeholder.jpg')] p-4 bg-cover bg-center flex flex-col bg-leafy justify-center shadow-sm border border-slate-200 rounded-lg transition-all duration-300 ease-out hover:w-full hover:mx-4 focus:w-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <div className="flex flex-col gap-6 justify-center p-6 backdrop-brightness-50 rounded-lg" tabIndex={0}>
        <p className="block text-neutral-50 leading-normal font-light">
          {formattedStartDate}
        </p>
        <h5 className="text-neutral-50 text-xl font-semibold">{title}</h5>
        <div>
        <a
          href={link}
          rel="noreferer noopener"
          target="_blank"
          className="text-neutral-50 font-semibold text-sm hover:underline flex items-center"
        >
          More Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Event;
