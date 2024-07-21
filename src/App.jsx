import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
// import Timeline from "./Components/Timeline";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="bg-slate-950">
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  ); 
};


export default App;