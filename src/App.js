/*The main assembler*/
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import HackathonsCerts from './components/HackathonsCerts/HackathonsCerts';
import Education from './components/Education/Education';
import CodingJourney from './components/CodingJourney/CodingJourney';
import Contact from './components/Contact/Contact';
import './App.css'; 

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <HackathonsCerts />
        <CodingJourney />
        <Education />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
