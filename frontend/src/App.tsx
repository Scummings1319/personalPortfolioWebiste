import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
