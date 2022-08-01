import Home from "./Section/Home/Home";
import About from "./Section/About/About";
import Skills from "./Section/Skills/Skills";
import Projects from "./Section/Projects/Projects";
import Contacts from "./Section/Contacts/Contacts";
import Footer from "./Components/Footer";

import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
