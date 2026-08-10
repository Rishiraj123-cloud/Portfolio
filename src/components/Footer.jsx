import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="letswork-footer container">
      <div className="footer-grid">
        
        {/* Left Column */}
        <div className="footer-col-left">
          <h2 className="footer-heading">
            LET'S WORK<br/>TOGETHER <span className="red-star">✦</span>
          </h2>
          <p className="footer-desc">
            I'm currently open for new projects and collaborations. Let's create something amazing that drives results.
          </p>
          
          <Link to="/contact" className="freelance-btn">
            <span className="btn-icon"><ArrowRight size={16}/></span>
            AVAILABLE FOR FREELANCE
          </Link>
        </div>

        {/* Middle Column: Contact Info */}
        <div className="footer-col-middle">
          <div className="contact-item">
            <div className="contact-icon"><Mail size={16}/></div>
            <span>rishihanchate9291@gmail.com</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><Globe size={16}/></div>
            <span>www.rishikesh.dev</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><Phone size={16}/></div>
            <span>+91 9380126330</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><MapPin size={16}/></div>
            <span>Bangalore, India</span>
          </div>
        </div>

        {/* Right Column: Graphic/Mockup */}
        <div className="footer-col-right">
          <div className="laptop-mockup-container">
            <div className="laptop-screen">
              <div className="screen-content">
                <span className="screen-text">WE<br/>DESIGN<br/>DIGITAL<br/>EXPERIENCES</span>
                <div className="screen-red-accent"></div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
