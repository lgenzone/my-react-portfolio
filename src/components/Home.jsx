import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'

import Projects from './Projects'

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};


const Home = () => {
    const [showProjects, setShowProjects] = useState(false)
    const handleViewWorkClick = () => {
      setShowProjects(true);
    }
 
  return (
    <div name='home' className='w-full h-screen' style={{backgroundColor: colors.Background}}>

    {/* container */} 
    <div className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full'>
        <p className='accent-color'>Hello! My name is</p>
        <h1 className='text-4xl font-bold text-[#8892b0]'>Lauren Genzone</h1>
        <h2 className='text-4xl font-bold text-pink-200'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
        
            <button onClick={handleViewWorkClick} className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work<HiArrowNarrowRight className='ml-3' /></button>
            {showProjects && <Projects />}
        </div>

    </div>   

 
     
    </div>
  )
}

export default Home
