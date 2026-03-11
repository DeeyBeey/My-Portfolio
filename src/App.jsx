import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Header from './components/header';
import AboutSection from './components/about'
import ExperienceSection from './components/experience';
import ProjectSection from './components/projects';
import ContactSection from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = (targetId) => {
    const targetElement = document.querySelector(targetId);

    if (!targetElement || !lenisRef.current) {
      return;
    }

    lenisRef.current.scrollTo(targetElement, {
      offset: -24,
    });
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigate} />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
