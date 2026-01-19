import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-black">
      
      {/* Navbar section */}
      
      <main>
        <Home />
        <About />
      </main>

    </div>
  )
}

export default App