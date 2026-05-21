"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import toggleMode from "../utilities/toggleMode";
import { FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
  const [isTop, setTop] = useState(true);
  const [isMobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      setTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", checkPosition);
    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  const links = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Code of Conduct",
      link: "/conduct",
    },
  ];

  const joinButton = (
    <Link href="https://discord.gg/YpaJ3JckNM">
      <button className="text-dark-violet bg-(--color-leafy) px-6 py-1 rounded font-bold text-xl hover:cursor-pointer">
        Join
      </button>
    </Link>
  );

  // theme state to update icon
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleToggle = () => {
    toggleMode();
    setDark((d) => !d);
  };

  return (
    <div
      className={`top-0 w-full lg:fixed z-50 bg-white dark:bg-stale py-4 ${!isTop ? "shadow-md" : ""}`}
    >
      <nav className="z-10 sticky left-0 right-0 px-5 py-2.5 lg:border-none lg:py-4 font-(family-name:--font-main)">
        <div className="flex items-center justify-around">
          <a href="/" className="flex items-center space-x-2">
            {isDark ? <img className="h-10" src="/assets/WCN-dark.svg" alt="WCN Darkmode" /> : <img className="h-10" src="/assets/WCN-SVG.svg" alt="WCN Lightmode" />}
            <h1 className="font-extrabold text-xl">Women Coders Network</h1>
          </a>
          <div className="hidden lg:block">
            <ul className="flex gap-10 font-semibold text-base">
              {links.map(({ link, name }, index) => (
                <li key={index} className="inline-block">
                  <Link href={link}>{name}</Link>
                </li>
              ))}
              <li>
                <button
                  className="text-xl cursor-pointer"
                  onClick={handleToggle}
                >
                  {isDark ? <FaSun /> : <FaMoon />}
                </button>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">{joinButton}</div>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!isMobileOpen)}
              className="relative z-50 cursor-pointer px-3 py-6 dark:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className={`relative z-50 block h-[2px] w-7 transition-all duration-200 ease-out content-[''] before:absolute before:z-50 before:block before:h-full before:w-full before:bg-dark-violet dark:before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:block after:h-full after:w-full after:bg-dark-violet dark:after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] ${isMobileOpen ? "bg-transparent dark:bg-transparent before:top-0 before:w-full before:rotate-45 after:bottom-0 after:w-full after:-rotate-45" : "bg-dark-violet dark:bg-white before:top-[-0.35rem] after:bottom-[-0.35rem]"}`}></div>
            </button>
            <div className={`fixed inset-0 z-40 h-full w-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setMobileOpen(false)}></div>
            <div className={`fixed top-0 right-0 z-40 h-full w-full overflow-y-auto overscroll-y-none transition-transform duration-500 ease-in-out ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
              <div className="float-right min-h-full w-[85%] bg-white dark:bg-stale px-6 pt-15 shadow-2xl">
                <menu role="list">
                  {links.map(({ link, name }, index) => (
                    <li key={index} className="block p-5 text-2xl">
                      <Link href={link} onClick={() => setMobileOpen(false)}>{name}</Link>
                    </li>
                  ))}
                  <li className="p-5">
                    <button
                      onClick={handleToggle}
                      className="text-2xl cursor-pointer"
                    >
                      {isDark ? <FaSun /> : <FaMoon />}
                    </button>
                  </li>
                  <li key="join" className="p-5" onClick={() => setMobileOpen(false)}>
                    {joinButton}
                  </li>
                </menu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
