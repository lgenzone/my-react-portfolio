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
 
  
 
  return (
    <div
      name="home"
      className="w-full h-screen"
      style={{ backgroundColor: colors.Background }}
    >
      {/* container */}
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundColor: colors.Background }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img src={Avatar} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="font-bold" style={{ color: colors.Text }}>
              Hello! My name is
            </p>
            <h1 className="text-4xl font-bold" style={{ color: colors.Accent }}>
              Lauren Genzone
            </h1>
            <h2 className="text-4xl font-bold" style={{ color: colors.Text }}>
              I'm a Full-Stack Developer
            </h2>
            <div className='pt-6'>

            <button
            className="text-white border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#8884ff] hover:border-[#8884ff]">
          <a href='/about'>About Me</a>
            </button>
          
          

            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home
