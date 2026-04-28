import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import portfolioData from '../data/portfolio.json';

const Navbar = ({ activeSection, setActiveSection, navOpen, setNavOpen }) => {
  const { navItems } = portfolioData;

  const handleNavClick = (id) => {
    if (activeSection !== id) {
      setActiveSection(id);
      document.body.classList.add('page-active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToMenu = (e) => {
    e.preventDefault();
    setActiveSection(null);
    document.body.classList.remove('page-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleNav = (e) => {
    e.preventDefault();
    if (!document.body.classList.contains('nav-open')) {
      document.body.classList.add('nav-open');
      document.body.classList.add('nav-stagger');
      setTimeout(() => {
        document.body.classList.remove('nav-stagger');
      }, 1000);
      setNavOpen(true);
    } else {
      document.body.classList.remove('nav-open');
      setNavOpen(false);
    }
  };

  return (
    <>
      <div className="navbar-outer">
        <div className="navbar w-100 h-100 transition position-relative p-0">
          <div className="navbar-block-wrapper d-flex flex-column w-100 h-100 position-relative">
            {navItems.map((item) => (
              <div
                key={item.id}
                className={`navbar-block navbar-v2-block ${item.bgClass} z-index-${item.zIndex} ${activeSection === item.id ? 'full' : activeSection ? 'remove' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <h2 className="d-flex transition">
                  <span className="arrow outline"><i className="fa-solid fa-arrow-right"></i></span>{item.title}
                </h2>
                <h3 className="hero-heading">{item.heading}</h3>

                <div className="navbar-icon">
                  <img src={`/src/assets/images/${item.icon}`} alt="" />
                </div>
                <div className="text-marquee-wrapper d-none d-xl-block">
                  <div className="text-marquee-parent">
                    {[1, 2, 3].map((listIdx) => (
                      <div className="text-marquee-list" key={listIdx}>
                        {[1, 2, 3].map((spanIdx) => (
                          <span key={spanIdx}>{item.marquee}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="scroll-down d-flex">
            <a href="#main" className="link link-xl text-white" data-text="Scroll">
              <span>Scroll</span> <b className="arrow outline"><i className="fa-solid fa-arrow-down"></i></b>
            </a>
          </div>
          <div className="go-back">
            <a href="#" className="link link-xl back-to-menu text-white" data-text="Back to Menu" onClick={handleBackToMenu}>
              <span>Back to Menu</span> <b className="arrow outline"><i className="fa-solid fa-arrow-right"></i></b>
            </a>
          </div>
        </div>
      </div>
      <div className="nav-toggler d-xl-none">
        <a href="#" className="nav-toggle-btn" onClick={toggleNav}>
          <span></span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
