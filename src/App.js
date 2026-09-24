/*The main assembler*/
import { useEffect } from 'react';
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
  useEffect(() => {
    const sections = document.querySelectorAll('.App > section');

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
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Credentials />
        <CodingJourney />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
