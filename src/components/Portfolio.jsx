import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-cv-page">
      <div className="cv-container">
        <header className="cv-header">
          <h1 className="cv-name">Rishikesh</h1>
          <h2 className="cv-title">Creative Developer & UI/UX Designer</h2>
          
          <div className="cv-contact-info">
            <a href="mailto:rishihanchate9291@gmail.com">rishihanchate9291@gmail.com</a>
            <span>•</span>
            <a href="tel:+919380126330">+91 9380126330</a>
            <span>•</span>
            <span>Bengalore, India</span>
          </div>
        </header>

        <section className="cv-section">
          <h3 className="cv-section-title">Profile</h3>
          <p className="cv-text">
            Between creativity and logic, I bring digital experiences to life. I specialize in crafting visually stunning, modern web applications with a focus on immersive user experiences, smooth animations, and solid architectural principles.
          </p>
        </section>

        <section className="cv-section">
          <h3 className="cv-section-title">Education</h3>
          <div className="cv-item">
            <div className="cv-item-header">
              <h4 className="cv-item-title">B.E. in Computer Science Engineering</h4>
              <span className="cv-item-date">2024 - 2028</span>
            </div>
            <p className="cv-item-subtitle">Nagarjuna College of Engineering and Technology</p>
          </div>
        </section>

        <section className="cv-section">
          <h3 className="cv-section-title">Certificates in Hackathons</h3>
          <div className="cv-item">
            <div className="cv-item-header">
              <h4 className="cv-item-title">Athernex Hackathon</h4>
              <span className="cv-item-date">April 2026</span>
            </div>
            <p className="cv-item-subtitle">Organized by Bytexync (DSCE) and CodeIO (BMSCE)</p>
            <img src="/certificate.jpg" alt="Athernex Hackathon Certificate" style={{ marginTop: '1rem', width: '250px', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h4 className="cv-item-title">Cepheus Hackathon</h4>
              <span className="cv-item-date">April 2026</span>
            </div>
            <p className="cv-item-subtitle">Conducted by Google Developers Groups AIT & Code Club</p>
            <img src="/certificate2.jpg" alt="Cepheus Hackathon Certificate" style={{ marginTop: '1rem', width: '250px', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>
        </section>

        <section className="cv-section">
          <h3 className="cv-section-title">Skills</h3>
          <div className="cv-skills-grid">
            <div className="cv-skill-category">
              <h4>Design</h4>
              <p>UI/UX Design, Web Design, Figma, Adobe XD, Photoshop, Webflow</p>
            </div>
            <div className="cv-skill-category">
              <h4>Development</h4>
              <p>HTML/CSS, JavaScript, React.js, Node.js, Express, Framer Motion, GSAP</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3 className="cv-section-title">Selected Projects</h3>
          <div className="cv-projects">
            <div className="cv-project-item">
              <h4>Veloce Bikes</h4>
              <p>E-Commerce Website showcasing high-performance bicycles with 3D product integration.</p>
            </div>
            <div className="cv-project-item">
              <h4>Woodcraft</h4>
              <p>Branding and web presence for a premium custom furniture manufacturer.</p>
            </div>
            <div className="cv-project-item">
              <h4>Urbanic</h4>
              <p>Mobile application UI focusing on sustainable street fashion and community.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
