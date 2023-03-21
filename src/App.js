import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div>  
      <Navbar /> 
      <Home /> 
      <About /> 
      <Resume />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
} 

export default App;
 