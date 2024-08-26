import Header from './components/header';
import AboutSection from './components/about'
import ExperienceSection from './components/experience';
import ProjectSection from './components/projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </div>
  );
}

export default App;
