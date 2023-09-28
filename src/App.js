import './App.css';
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutME'
import Skills from './components/skills/Skills';
import Portfolio from "./components/Portfolio/Portfolio";
import FindUs from "./components/FindUs/FindUs";
function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <FindUs/>
    </div>
  );
}

export default App;
