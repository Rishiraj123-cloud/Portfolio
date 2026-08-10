import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import './Hero.css';

const frameCount = 240;

// Preload images for canvas sequence
const preloadImages = () => {
  const images = [];
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const id = String(i).padStart(6, '0');
    img.src = `/frames/frame_${id}.jpg`;
    images.push(img);
  }
  return images;
};

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  // Load images and draw first frame on mount
  useEffect(() => {
    imagesRef.current = preloadImages();
    if (imagesRef.current[0]) {
      imagesRef.current[0].onload = () => {
        renderFrame(0);
      };
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const renderFrame = (index) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const ctx = canvasRef.current.getContext('2d');
    const img = imagesRef.current[index];
    if (img && img.complete) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    renderFrame(frameIndex);
  });

  // Parallax elements
  const creativeTextY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const visualTextY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const bioY = useTransform(smoothProgress, [0, 1], [0, -30]);

  return (
    <section ref={containerRef} className="hero-editorial" style={{ height: '300vh' }}>
      
      {/* Layered Foreground Container that sticks to screen */}
      <div className="sticky-foreground">
        
        {/* Top Marquee */}
        <div className="hero-top-marquee">
          <div className="marquee-content">
            UI/UX DESIGN &nbsp;&nbsp;•&nbsp;&nbsp; FRONTEND DEVELOPMENT &nbsp;&nbsp;•&nbsp;&nbsp; WEB ANIMATION &nbsp;&nbsp;•&nbsp;&nbsp; BRANDING &nbsp;&nbsp;•&nbsp;&nbsp; INTERACTIVE EXPERIENCES
          </div>
        </div>

        {/* Top Left Info */}
        <div className="hero-top-left">
          <h1 className="hero-name">RISHIKESH</h1>
          <p className="hero-subtitle">Creative Developer</p>
        </div>

        {/* Top Right Info */}
        <div className="hero-top-right">
          <p>Design that speaks.</p>
          <p>Code that converts.</p>
        </div>

        {/* Canvas Sequence (The Subject) */}
        <div className="hero-portrait-wrapper">
          <canvas 
            ref={canvasRef} 
            width={1920} 
            height={1080} 
            className="portrait-canvas"
          />
          <div className="canvas-vignette"></div>
        </div>

        {/* Giant Background Text (Placed over canvas, masked out in middle) */}
        <motion.div 
          className="hero-giant-text"
          style={{ y: creativeTextY }}
        >
          CREATIVE
        </motion.div>

        {/* Bottom Right Title */}
        <motion.div 
          className="hero-bottom-right-title"
          style={{ y: visualTextY }}
        >
          DEVELOPER
        </motion.div>

        {/* Bottom Left Socials */}
        <div className="hero-bottom-left">
          {/* Social links removed */}
        </div>

        {/* Bottom Bio */}
        <motion.div 
          className="hero-bottom-bio"
          style={{ y: bioY }}
        >
          Between creativity and logic lies the space where I build. From architecting scalable frontend systems to shaping immersive digital experiences, my work revolves around performance, structure, and interactive storytelling. I help brands express who they are with purpose, precision, and personality.
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
