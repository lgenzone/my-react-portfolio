import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>  
      <Navbar /> 
      <Routes>
        <Route path = '/'
               element={<Home />}
         />
         <Route path = '/about'
               element={<About />}
         />
         <Route path = '/projects'
               element={<Projects />}
         />
         <Route path = '/resume'
               element={<Resume />}
         />
         <Route path = '/contact'
               element={<Contact />}
         />
         
      </Routes>
      {/* <Home /> 
      <About />  
      <Resume />
      <Projects />
      <Contact />  */}
      <Footer />
    </div>
  );
} 

export default App;
 