import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        
        // Wait a tiny bit after reaching 100 before animating out
        setTimeout(() => {
          onComplete();
        }, 500);
      } else {
        setProgress(currentProgress);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="preloader-container"
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader-content">
        <div className="preloader-title font-display">RISHIKESH</div>
        <div className="preloader-progress font-display">{progress}%</div>
      </div>
    </motion.div>
  );
};

export default Preloader;
