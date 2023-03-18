import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-center  items-center px-4 bg-[#0a192f] text-gray-300 nav'>
      { /* menu */ }
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500} >
            Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500} >
            About
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500} >
            Projects
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} >
            Contact
            </Link>
          </li>
        </ul>
      
    { /* hamburger */ }
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

    { /* mobile */ }
    <ul className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center ${!nav ? 'hidden' : ''}`}>
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
