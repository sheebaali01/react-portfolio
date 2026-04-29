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
    
    // count up animation
    const counts = gsap.utils.toArray('.active-page .count');
    counts.forEach((count) => {
      const targetValue = parseInt(count.getAttribute('data-target'));
      ScrollTrigger.create({
        trigger: count,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(count, 
            { innerText: 0 },
            {
              innerText: targetValue,
              duration: 2,
              snap: { innerText: 1 },
              ease: 'power1.inOut',
              onUpdate: function() {
                count.innerText = Math.ceil(count.innerText);
              }
            }
          );
        }
      });
    });

    // hero text animation (fallback since SplitText is not available)
    const heroHeading = document.querySelector('.active-page .page-heading');
    if (heroHeading) {
      gsap.fromTo(heroHeading, 
        { y: 20, opacity: 0 }, 
        { delay: 0.5, duration: 0.7, y: 0, opacity: 1, ease: 'power2.out' }
      );
    }
    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [activeSection]);

  return (
    <>
      <Header />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} navOpen={navOpen} setNavOpen={setNavOpen} />
      <main id="main" className="position-relative">
        <About isActive={activeSection === 'about'} setActiveSection={setActiveSection} />
        <Services isActive={activeSection === 'services'} setActiveSection={setActiveSection} />
        <Portfolio isActive={activeSection === 'portfolio'} setActiveSection={setActiveSection} />
        <Resume isActive={activeSection === 'resume'} setActiveSection={setActiveSection} />
        <Blog isActive={activeSection === 'blog'} setActiveSection={setActiveSection} />
        <Contact isActive={activeSection === 'contact'} setActiveSection={setActiveSection} />
        
        {/* Page Transition Overlays */}
        <div id="nav-overlay-about" className="nav-overlay bg-gradient-1"></div>
        <div id="nav-overlay-services" className="nav-overlay bg-gradient-2"></div>
        <div id="nav-overlay-portfolio" className="nav-overlay bg-gradient-3"></div>
        <div id="nav-overlay-resume" className="nav-overlay bg-gradient-4"></div>
        <div id="nav-overlay-blog" className="nav-overlay bg-gradient-5"></div>
        <div id="nav-overlay-contact" className="nav-overlay bg-gradient-6"></div>
      </main>
    </>
  );
}

export default App;
