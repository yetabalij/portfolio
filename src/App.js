import Home from "./Section/Home/Home";
import About from "./Section/About/About";
import Skills from "./Section/Skills/Skills";
import Projects from "./Section/Projects/Projects";
import Contacts from "./Section/Contacts/Contacts";
import Footer from "./Components/Footer";

import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="bg-primary-color text-white overflow-auto">
      <div className="w-[80%] mx-auto overflow-auto">
        <Navigation />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
