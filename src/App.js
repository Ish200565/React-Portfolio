/*The main assembler*/
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import CodingJourney from './components/CodingJourney/CodingJourney';
import Contact from './components/Contact/Contact';
import Credentials from './pages/Credentials/Credentials';
import './App.css'; 

function App() {
  const [isCredentialsPage, setIsCredentialsPage] = useState(window.location.hash === '#credentials');
  const [pendingSection, setPendingSection] = useState(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setPendingSection(null);
      setIsCredentialsPage(window.location.hash === '#credentials');
    };
    const handlePortfolioNavigation = (event) => {
      const { hash, section } = event.detail || {};
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash || ''}`);
      setPendingSection(section || null);
      setIsCredentialsPage(hash === '#credentials');
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('portfolio:navigate', handlePortfolioNavigation);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('portfolio:navigate', handlePortfolioNavigation);
    };
  }, []);

  useEffect(() => {
    if (isCredentialsPage) return undefined;

    if (pendingSection) {
      let attempts = 0;
      const scrollToPendingSection = () => {
        const section = document.getElementById(pendingSection);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        attempts += 1;
        if (attempts < 10) window.requestAnimationFrame(scrollToPendingSection);
      };

      window.requestAnimationFrame(scrollToPendingSection);
      setPendingSection(null);
    }

    const sections = document.querySelectorAll('.App > section:not(.hero)');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach(section => section.classList.add('is-visible'));
      return undefined;
    }

    sections.forEach(section => section.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [isCredentialsPage, pendingSection]);

  return (
    <ThemeProvider>
      <div className={`App ${isCredentialsPage ? 'credentials-active' : ''}`}>
        <Navbar />
        {isCredentialsPage ? (
          <Credentials />
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <CodingJourney />
            <Contact />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
