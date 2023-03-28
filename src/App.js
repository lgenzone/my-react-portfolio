import React, { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  let pageContent;

  switch (currentPage) {
    case "Home":
      pageContent = <Home />;
      break;
    case "About":
      pageContent = <About />;
      break;
    case "Projects":
      pageContent = <Projects />;
      break;
    case "Resume":
      pageContent = <Resume />;
      break;
    case "Contact":
      pageContent = <Contact />;
      break;
    default:
      pageContent = <Home />;
      break;
  }

  return (
    <div>
      <Navbar onNavigationClick={handleNavigationClick} />
      {pageContent}
      <Footer />
    </div>
  );
}

export default App;
