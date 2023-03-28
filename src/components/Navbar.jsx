import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Navbar = ({ onNavigationClick }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handlePageClick = (page) => {
    setNav(false);
    onNavigationClick(page);
  };

  return (
    <div
      className="fixed w-full h-[80px] flex justify-center items-center px-4 nav"
      style={{ backgroundColor: colors.Background }}
    >
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <button onClick={() => handlePageClick('Home')} style={{ color: colors.Text }}>Home</button>
        </li>
        <li>
          <button onClick={() => handlePageClick('About')} style={{ color: colors.Text }}>About</button>
        </li>
        <li>
          <button onClick={() => handlePageClick('Projects')} style={{ color: colors.Text }}>Projects</button>
        </li>
        <li>
          <button onClick={() => handlePageClick('Resume')} style={{ color: colors.Text }}>Resume</button>
        </li>
        <li>
          <button onClick={() => handlePageClick('Contact')} style={{ color: colors.Text }}>Contact</button>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-40 fixed top-0 right-0 mt-4 mr-4">
          {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* mobile */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center ${!nav ? "hidden" : ""}`} style={{backgroundColor: colors.Background, zIndex: "20"}}>
        <li className="py-6 text-4xl">
          <button onClick={() => handlePageClick('Home')} style={{ color: colors.Text }}>Home</button>
        </li>
        <li className="py-6 text-4xl">
          <button onClick={() => handlePageClick('About')} style={{ color: colors.Text }}>About</button>
        </li>
        <li className="py-6 text-4xl">
          <button onClick={() => handlePageClick('Projects')} style={{ color: colors.Text }}>Projects</button>
        </li>
        <li className="py-6 text-4xl">
          <button onClick={() => handlePageClick('Resume')} style={{ color: colors.Text }}>Resume</button>
        </li>
        <li className="py-6 text-4xl">
          <button onClick={() => handlePageClick('Contact')} style={{ color: colors.Text }}>Contact</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;


