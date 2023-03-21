import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div
      className="fixed w-full h-[80px] flex justify-center  items-center px-4 text-gray-300 nav"
      style={{ backgroundColor: colors.Background }}
    >
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/resume'>Resume</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center ${!nav ? "hidden" : ""}`} style={{backgroundColor: colors.Background}}>
        <li className="py-6 text-4xl">
          <a href='/'>Home</a>
        </li>
        <li className="py-6 text-4xl">
        <a href='/about'>About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href='/projects'>Projects</a>
        </li>
        <li className="py-6 text-4xl">
          <a href='/resume'>Resume</a>
        </li>
        <li className="py-6 text-4xl">
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
