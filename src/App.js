import Home from "./Section/Home/Home";
import About from "./Section/About/About";
import Skills from "./Section/Skills/Skills";
import Projects from "./Section/Projects/Projects";
import Contacts from "./Section/Contacts/Contacts";
import Footer from "./Components/Footer";

import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="bg-primary-color text-white select-none overflow-hidden">
      <div className="w-[80%] mx-auto relative">
        <div className="fixed bottom-10 lg:bottom-[80px] md:bottom-10 left-[50%] translate-x-[-50%] z-10">
          <Navigation />
        </div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
