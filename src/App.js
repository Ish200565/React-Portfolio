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

  useEffect(() => {
    const handleHashChange = () => setIsCredentialsPage(window.location.hash === '#credentials');
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isCredentialsPage) return undefined;

    const pendingSection = window.sessionStorage.getItem('pending-section');
    window.sessionStorage.removeItem('pending-section');

    if (pendingSection) {
      window.requestAnimationFrame(() => {
        document.getElementById(pendingSection)?.scrollIntoView({ behavior: 'smooth' });
      });
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
  }, [isCredentialsPage]);

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
