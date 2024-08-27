import Header from './components/header';
import AboutSection from './components/about'
import ExperienceSection from './components/experience';
import ProjectSection from './components/projects';
import ContactSection from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
