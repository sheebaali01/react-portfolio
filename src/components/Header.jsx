import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import portfolioData from '../data/portfolio.json';

gsap.registerPlugin(TextPlugin);

const Header = () => {
  const { personalInfo } = portfolioData;
  const textRef = useRef(null);

  useGSAP(() => {
    const textChange = personalInfo.scrambleText;
    let index = 0;

    const scrambleText = () => {
      if (!textRef.current) return;
      gsap.to(textRef.current, {
        duration: 1,
        text: {
          value: textChange[index],
        },
        onComplete: () => {
          index = (index + 1) % textChange.length;
          setTimeout(scrambleText, 2000); // Increased delay for readability
        },
      });
    };

    scrambleText();
  }, []);

  return (
    <header id="header" className="header-v2 d-flex transition">
      <a className="navbar-brand" href="#">
        <img src="/src/assets/images/boka-logo.png" alt="" />
      </a>
      <div className="header-img-hold z-index-1 bg-black">
        <img className="w-100 h-100 img-cover" src="/src/assets/images/hero.jpeg" alt="" />
      </div>
      <div className="header-content d-flex flex-column align-items-start justify-content-end z-index-2">
        <h1 className="mb-2 text-uppercase">{personalInfo.name}</h1>
        <h2 className="mb-12 font-primary fw-bold" id="text_change" ref={textRef}>
          {personalInfo.title}
        </h2>
        <ul className="d-flex flex-wrap gap-4">
          {personalInfo.social.map((item, idx) => (
            <li key={idx}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
