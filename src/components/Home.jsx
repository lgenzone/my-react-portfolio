import React from 'react';
import Avatar from '../assets/lauren-circle.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Home = () => { 
  return (
    <div name="home" className="w-full h-screen" style={{ backgroundColor: colors.Background }}>
      {/* container */}
      <div
        className="flex justify-center items-center min-h-screen bg-base-200"
        style={{ backgroundColor: colors.Background }}
      >
        <div className="flex justify-center items-center flex-col lg:flex-row">
          {/* avatar */}
          <div className="pr-10">
            <img src={Avatar} alt="Lauren Genzone" className="max-w-sm shadow-2xl" />
          </div>
          {/* text */}
          <div>
              <div>
                <p className="font-bold" style={{ color: colors.Text }}>
                  Hello! My name is
                </p>
                <h1 className="text-4xl font-bold" style={{ color: colors.Accent }}>
                  Lauren Genzone
                </h1>
                
              <div className='pt-6 text-button-container'>

                <h2 className="text-4xl font-bold" style={{ color: colors.Text }}>
                I'm a Full-Stack Developer
                </h2>
                <div className="pt-6">
                  {/* View Work button */}
                  <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                    <button
                      className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#8884ff] hover:border-[#8884ff]">
                      View Work
                      <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                      </span>
                    </button>
                  </Link>

                  </div>


                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
