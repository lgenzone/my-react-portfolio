import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div
      className="fixed w-full h-[80px] flex justify-center items-center px-4 nav"
      style={{ backgroundColor: colors.Background }}
    >
      {/* menu */}
      <ul className="hidden md:flex"
      style={{ color: "white"}}
      >
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to='about' smooth={true} duration={500}>
            About Me
          </Link>
        </li>

        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link to='resume' smooth={true} duration={500}>
            Resumé
          </Link>
        </li>

        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} 
      className="md:hidden z-40 fixed top-0 right-0 mt-4 mr-4"
      style={{ color: "white" }}
      >
          {!nav ? <FaBars  /> : <FaTimes />}
      </div>


      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'
        }
        style={{ backgroundColor: colors.Background, color: colors.Text }}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
            Resumé
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Navbar;


