import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className='w-full p-10 bg-dark-violet text-leafy font-main'>
        <div className='flex justify-between max-[640px]:flex-col'>
            <button className='h-min bg-leafy text-dark-violet p-2 rounded border-2 border-solid border-[#000]-800 shadow-xl text-xl font-bold max-[640px]:mb-4'>
                Our Code of Conduct
            </button>
            <div className='flex flex-col items-start gap-3 max-[640px]:items-center'>
                <h3 className='text-2xl font-bold'>Contact Us</h3>
                <a className='flex gap-2 items-center' href="mailto:womencodersnetwork@gmail.com">
                    <IoMdMail />  womencodersnetwork@gmail.com
                </a>
                <a className='flex gap-2 items-center' href="https://www.linkedin.com/company/womencodersnet/" target='_blank' rel='noreferrer'>
                    <FaLinkedin /> WCN Linkedin
                </a>
            </div>
        </div> 
      <p className='relative bottom-[-2em] text-center'>&copy; All rights reserved. Women Coders Network {year}</p>
    </footer>
  );
};

export default Footer;