import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/reactlogoWhite.png';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80-px] flex justify-between  items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={ Logo } alt="Logo Image" style={{ width: '50px' }}/>
      </div>

      { /* menu */ }
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      
    { /* hamburger */ }
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

    { /* mobile */ }
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <li className='py-6 text-4xl'>Home</li>
      <li className='py-6 text-4xl'>About Me</li>
      <li className='py-6 text-4xl'>Portfolio</li>
      <li className='py-6 text-4xl'>Contact</li>
      <li className='py-6 text-4xl'>Resume</li>
    </ul>

    { /* social icons */ } 
    <div></div>
    

    </div>
  )
}

export default Navbar
