import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      
      <Header />
      <Hero />
    </>
  )
}

export default App
