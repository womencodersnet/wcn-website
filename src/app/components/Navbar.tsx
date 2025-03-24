import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="top-0 w-full lg:relative z-50">
      <nav className="z-10 sticky top-0 left-0 right-0 px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-around">
          <a href="/" className="flex items-center space-x-2">              
            <img className="h-10" src="/assets/WCN-SVG.svg" alt="WCN logo" />
          </a>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base">
              <li className="inline-block">
                <Link href="/">
                  About Us
                </Link>
              </li>
              <li className="inline-block">
                <Link href="/community">
                  Our Community
                </Link>
              </li>
              <li className="inline-block">
                <Link href="/conduct">
                  Code of Conduct
                </Link>
              </li>
              <li className="inline-block">
                <Link href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button className="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl dark:text-white focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;