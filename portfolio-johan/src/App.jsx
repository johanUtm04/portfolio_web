import Home from "./components/Home";
import About from "./components/About";
import TechStack from './components/TechStack';
import Works from "./components/Works";
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-black">
      <CustomCursor />
      {/* Navbar section */}
      <Navbar />
      <main>
        <Home />
        <About />
        <TechStack />
        <Works />
        <Contact />
      </main>
    </div>
  )
}

export default App