import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky w-full top-0 left-0">
      <div className="container mx-auto justify-items-center p-8">
        <ul className="ml-8 grid grid-cols-4 gap-10 text-center w-full">
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
    </nav>
  );
};

export default Navbar;