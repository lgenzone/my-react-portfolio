import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const location = useLocation();

  return (
    <div
      className="fixed w-full h-[80px] flex justify-center  items-center px-4 text-gray-300 nav"
      style={{ backgroundColor: colors.Background }}
    >
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href='/' style={{ color: location.pathname === '/' ? colors.Accent : colors.Text }}>Home</a>
        </li>
        <li>
          <a href='/about' style={{ color: location.pathname === '/about' ? colors.Accent : colors.Text }}>About</a>
        </li>
        <li>
          <a href='/projects' style={{ color: location.pathname === '/projects' ? colors.Accent : colors.Text }}>Projects</a>
        </li>
        <li>
          <a href='/resume' style={{ color: location.pathname === '/resume' ? colors.Accent : colors.Text }}>Resume</a>
        </li>
        <li>
          <a href='/contact' style={{ color: location.pathname === '/contact' ? colors.Accent : colors.Text }}>Contact</a>
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
          <a href='/' style={{ color: location.pathname === '/' ? colors.Accent : colors.Text }}>Home</a>
        </li>
        <li className="py-6 text-4xl">
        <a href='/about' style={{ color: location.pathname === '/about' ? colors.Accent : colors.Text }}>About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href='/projects' style={{ color: location.pathname === '/projects' ? colors.Accent : colors.Text }}>Projects</a>
        </li>
        <li className="py-6 text-4xl">
          <a href='/resume' style={{ color: location.pathname === '/resume' ? colors.Accent : colors.Text }}>Resume</a>
        </li>
        <li className="py-6 text-4xl">
          <a href='/contact' style={{ color: location.pathname === '/contact' ? colors.Accent : colors.Text }}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

