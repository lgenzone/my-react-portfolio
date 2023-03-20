import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll'

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-center  items-center px-4 text-gray-300 nav' style={{backgroundColor: colors.Background}}>
      { /* menu */ }
        <ul className='hidden md:flex'>
          <li>
            <Link activeClass='text-[#8884ff]' to='home' spy={true} smooth={true} duration={500} >
            Home
            </Link>
          </li>
          <li>
            <Link activeClass='text-[#8884ff]' to='about' spy={true} smooth={true} duration={500} >
            About
            </Link>
          </li>
          <li>
            <Link activeClass='text-[#8884ff]' to='projects' spy={true} smooth={true} duration={500} >
            Projects
            </Link>
          </li>
          <li>
            <Link activeClass='text-[#8884ff]' to='contact' spy={true} smooth={true} duration={500} >
            Contact
            </Link>
          </li>
        </ul>
      
    { /* hamburger */ }
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

    { /* mobile */ }
    <ul className={`absolute top-0 left-0 w-full h-screen bg-[#020100] flex flex-col justify-center items-center ${!nav ? 'hidden' : ''}`}>
    <li className='py-6 text-4xl'>
      <Link onClick={handleClick} to='home' smooth={true} duration={500}>
      Home
      </Link> 
    </li>
    <li className='py-6 text-4xl'>
      <Link onClick={handleClick} to='about' smooth={true} duration={500} >
      About
      </Link>
    </li>
    <li className='py-6 text-4xl'>
      <Link onClick={handleClick} to='projects' smooth={true} duration={500} >
      Projects
      </Link>
    </li>
    <li className='py-6 text-4xl'>
      <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
      Contact
      </Link>
    </li>
  </ul>

    
  </div>
  )
}

export default Navbar
