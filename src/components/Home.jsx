import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import Avatar from '../assets/lauren-circle.png'

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
      <div className='max-w-[1000px] mx-auto px-5 flex flex-col md:flex-row justify-center h-full'>
        <div className='md:w-1/2 flex justify-center items-center'>
          <img src={Avatar} alt='Lauren Genzone' className='w-3/4 md:w-3/5 h-auto rounded-full object-cover'/>
        </div>
        <div className='md:w-1/2 md:pl-10 flex flex-col justify-center'>
          <p className='font-bold' style={{color:colors.Accent}}>Hello! My name is</p>
          <h1 className='text-4xl font-bold' style={{color:colors.Text}}>Lauren Genzone</h1>
          <h2 className='text-4xl font-bold' style={{color:colors.Accent}}>I'm a Full-Stack Web Developer.</h2>
          <p className='text-white'>I'm glad you stopped by. Please have a look around!</p>
          <div>
            <button onClick={handleViewWorkClick} className='text-white border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#8884ff] hover:border-[#8884ff]'>View Work<HiArrowNarrowRight className='ml-3' /></button>
            {showProjects && <Projects />}
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Home
