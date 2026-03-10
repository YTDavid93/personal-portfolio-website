import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';

function App() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      
      {/* render header section */}
      <Header />
      {/* render hero section */}
      <Hero />
      {/* render about section */}
      <About />
      {/* render project section */}
      <Project />
      {/* render experience section */}
      <Experience />
    </>
  )
}

export default App
