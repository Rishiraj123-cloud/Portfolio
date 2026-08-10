import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header className={`editorial-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="logo-text"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>RISHIKESH</Link></div>
        <nav className="header-nav">
          <Link to="/" className="glass-btn">HOME</Link>
          <Link to="/portfolio" className="glass-btn">RESUME</Link>
          {isHome ? (
            <>
              <a href="#showcase" className="glass-btn">WORK</a>
              <a href="#features" className="glass-btn">EXPERTISE</a>
            </>
          ) : (
            <>
              <Link to="/#showcase" className="glass-btn">WORK</Link>
              <Link to="/#features" className="glass-btn">EXPERTISE</Link>
            </>
          )}
        </nav>
        <div className="header-cta">
          <Link to="/contact" className="glass-btn highlight-btn">LET'S TALK</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
