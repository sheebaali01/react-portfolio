import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Resume from './components/sections/Resume';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('js-ready');
  }, []);

  useGSAP(() => {
    if (!activeSection) {
      gsap.set('.animate-child > *', {opacity: 0, y: 60, rotate: 3});
      gsap.set('hr', {width: 0});
      return;
    }
    
    // reset first
    gsap.set('.active-page .animate-child > *', {opacity: 0, y: 60, rotate: 3});
    gsap.set('.active-page hr', {width: 0});

    // then animate
    const animateChildren = gsap.utils.toArray('.active-page .animate-child');
    animateChildren.forEach((child) => {
      gsap.to(child.children, {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: child,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });

    const hrs = gsap.utils.toArray('.active-page hr');
    hrs.forEach((hr) => {
      gsap.to(hr, {
        width: '100%',
        duration: 0.7,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: hr,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });
    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [activeSection]);

  return (
    <>
      <Header />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} navOpen={navOpen} setNavOpen={setNavOpen} />
      <main id="main" className="position-relative">
        <About isActive={activeSection === 'about'} />
        <Services isActive={activeSection === 'services'} />
        <Portfolio isActive={activeSection === 'portfolio'} />
        <Resume isActive={activeSection === 'resume'} />
        <Blog isActive={activeSection === 'blog'} />
        <Contact isActive={activeSection === 'contact'} />
      </main>
    </>
  );
}

export default App;
