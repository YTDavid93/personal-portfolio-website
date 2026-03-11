import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import { useScrollReveal } from './hooks/userScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      {/* render cursor component  */}
      <Cursor />
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
      {/* render contact section */}
      <Contact />
      {/* render footer section */}
      <Footer />
    </>
  )
}

export default App
