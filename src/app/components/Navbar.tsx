import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links = [{
    name: 'About Us',
    link: '/'
  }, {
    name: 'Our Community',
    link: '/community'
  }, {
    name: 'Events',
    link: '/events'
  },{
    name: 'Resources',
    link: '/resources'
  }, {
    name: 'Code of Conduct',
    link: '/conduct'
  }, {
    name: 'Contact Us',
    link: '/contact-us'
  }];
  return (
    <div className="top-0 w-full lg:relative z-50">
      <nav className="z-10 sticky top-0 left-0 right-0 px-5 py-2.5 lg:border-none lg:py-4 bg-dark-violet">
        <div className="flex items-center justify-around">
          <a href="/" className="flex items-center space-x-2">              
            <img className="h-10" src="/assets/WCN-SVG.svg" alt="WCN logo" />
          </a>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base">
              { links.map(({ link, name }, index) => (
                <li key={index} className="inline-block">
                  <Link href={link}>{name}</Link></li>
              ))}
            </ul>
          </div>
          <label className="lg:hidden relative z-40 cursor-pointer px-3 py-6 dark:text-white" htmlFor="mobile-menu">
            <input className="peer hidden" type="checkbox" id="mobile-menu" />
            <div className="relative z-50 block h-[1px] w-7 bg-dark-violet bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
            <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block"></div>
            <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
              <div className="float-right min-h-full w-[85%] bg-dark-violet px-6 pt-15 shadow-2xl">
                <menu role="list">
                  { links.map(({ link, name }, index) => (
                    <li key={index} className="block p-5 text-2xl active:bg-purple-900">
                      <Link href={link}>{name}</Link></li>
                  ))}
                </menu>
              </div>
            </div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;