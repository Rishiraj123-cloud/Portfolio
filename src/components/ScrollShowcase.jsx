import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ScrollShowcase.css';

const projects = [
  {
    id: "01",
    title: "VELOCE BIKES",
    category: "E-COMMERCE WEBSITE",
    image: "/projects/project1.png"
  },
  {
    id: "02",
    title: "WOODCRAFT",
    category: "FURNITURE WEBSITE",
    image: "/projects/project2.jpg"
  },
  {
    id: "03",
    title: "URBANIC",
    category: "FASHION MAGAZINE",
    image: "/projects/project3.jpg"
  }
];

const ScrollShowcase = () => {
  return (
    <section id="showcase" className="portfolio-projects section container">
      <div className="projects-header">
        <h2 className="section-heading">SELECTED PROJECTS</h2>
        <a href="#" className="view-all-link">VIEW ALL PROJECTS <ArrowRight size={16} /></a>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            
            <div className="project-details">
              <span className="project-number font-display">{project.id}</span>
              <div className="project-text">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
              <ArrowRight className="project-arrow" size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScrollShowcase;
