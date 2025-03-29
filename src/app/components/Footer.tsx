import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer style={{
        width: '100%',
        backgroundColor: '#402B6D', 
        color:'#C0F862',
        padding: '3rem ',
        fontFamily: '"Roboto Mono", monospace'
        }}
    >
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button style={{
                height:'min-content',
                backgroundColor:'#C0F862',
                color:'#402B6D',
                padding:'0.5rem',
                borderRadius:'5px',
                border:'1px solid #000',
                boxShadow:'0 0 5px #000',
                fontSize:'20px',
                fontWeight:'bold'
                }}
            >
                Our Code of Conduct
            </button>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start',gap:'1rem'}}>
                <h3 style={{fontSize:'1.3rem',fontWeight:'bold'}}>Contact Us</h3>
                <a href="mailto:womencodersnetwork@gmail.com" style={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
                    <IoMdMail />  womencodersnetwork@gmail.com
                </a>
                <a href="https://www.linkedin.com/company/womencodersnet/" target='_blank' rel='noreferrer' style={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
                    <FaLinkedin /> WCN Linkedin
                </a>
            </div>
        </div> 
      <p style={{position:'relative',bottom:'-2em',textAlign: 'center'}}>&copy; All rights reserved. Women Coders Network {year}</p>
    </footer>
  );
};

export default Footer;