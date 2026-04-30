import React, { useEffect, useState } from 'react';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const [isDark, setIsDark] = useState(document.body.classList.contains('dark-theme'));

  const toggleTheme = (e) => {
    e.preventDefault();
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      setIsDark(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      setIsDark(true);
    }
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center justify-content-between">
              <div>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</div>
              <div className="d-flex align-items-center gap-3">
                <div className="theme-switcher">
                  <button className={`theme-toggler ${isDark ? 'active' : ''}`} onClick={toggleTheme}>
                    <span className="dark-icon d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-moon"></i>
                    </span>
                    <span className="light-icon d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-sun"></i>
                    </span>
                  </button>
                </div>
                <a href="#" className="go-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
                  <i className="fa-solid fa-arrow-up-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
