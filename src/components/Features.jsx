import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Code, Send } from 'lucide-react';
import './Features.css';

const processSteps = [
  { id: "01", icon: <Search size={16} />, title: "DISCOVER", desc: "Understanding goals, audience, and project requirements." },
  { id: "02", icon: <Lightbulb size={16} />, title: "IDEATE", desc: "Planning, wireframing, and creating the right concept." },
  { id: "03", icon: <PenTool size={16} />, title: "DESIGN", desc: "Crafting visual design with a focus on user experience." },
  { id: "04", icon: <Code size={16} />, title: "DEVELOP", desc: "Building fast, responsive, and high-performing websites." },
  { id: "05", icon: <Send size={16} />, title: "DELIVER", desc: "Testing, optimizing, and launching with perfection." }
];

const skillsList = [
  "WEB DESIGN", "UI/UX DESIGN", "FIGMA", "FRAMER", 
  "ADOBE XD", "PHOTOSHOP", "WEBFLOW", "HTML/CSS", 
  "JAVASCRIPT", "GSAP ANIMATION", "SEO BASICS"
];

const Features = () => {
  return (
    <section id="features" className="about-section container">
      <div className="about-grid">
        
        {/* Column 1: Education & Skills */}
        <div className="about-col">
          <h2 className="section-heading mb-loose">EDUCATION & SKILLS</h2>
          
          <div className="education-block">
            <h3 className="accent-heading">EDUCATION</h3>
            
            <div className="edu-item">
              <div>
                <h4 className="edu-title">B.E. in Computer Science Engineering</h4>
                <p className="edu-subtitle">Nagarjuna College of Engineering and Technology</p>
              </div>
              <span className="edu-date">2024-2028</span>
            </div>
            
            <div className="edu-item">
              <div>
                <h4 className="edu-title">UI/UX Design Certification</h4>
                <p className="edu-subtitle">Google Career Certificates</p>
              </div>
              <span className="edu-date">2023</span>
            </div>
          </div>
          
          <div className="skills-block">
            <h3 className="accent-heading">SKILLS</h3>
            <div className="skills-tags">
              {skillsList.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Work Process */}
        <div className="about-col">
          <h2 className="section-heading mb-loose">WORK PROCESS</h2>
          
          <div className="process-timeline">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-number">{step.id}</div>
                <div className="process-icon-wrapper">
                  <div className="process-icon">{step.icon}</div>
                  {i !== processSteps.length - 1 && <div className="process-line"></div>}
                </div>
                <div className="process-content">
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Quote Block */}
        <div className="about-col quote-col">
          <div className="quote-box">
            <div className="quote-marks">“</div>
            <p className="quote-text">
              Good design is not just how it looks, but how it works.
            </p>
            <div className="quote-signature font-signature">Rishikesh</div>
            
            <div className="quote-footer">
              <p>LET'S CREATE SOMETHING GREAT TOGETHER.</p>
              <span className="quote-plus">+</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
