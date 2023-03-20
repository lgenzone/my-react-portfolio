import React from 'react'
import bringPopcorn from '../assets/bringPopcorn.png'
import getFit from '../assets/getFit.png'
import Placeholder from '../assets/placeholder_image.png'

const colors = {
    "Background": "#020100",
    "Text": "#ffffff",
    "Accent": "#8884ff"
  };

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full m:h-screen"
      style={{ backgroundColor: colors.Background, color: colors.Text, margin: 'auto', textAlign: 'center'}}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center items-center">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline"
            style={{
              color: colors.Text,
              borderBottom: `4px solid ${colors.Accent}`,
            }}
          >
            Projects
          </p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* grid item */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${bringPopcorn})` }}
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold flex justify-center items-center text-white tracking-wider h-full">
                Bring Popcorn!
              </span>
              <div className="pt-8 text-center">
                <a href="https://nbadraun.github.io/Bring-Popcorn/">
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/NBADRAUN/Bring-Popcorn">
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${getFit})` }}>
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold flex justify-center items-center text-white tracking-wider h-full">
              GetFit
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a href="https://github.com/Jelenarog/Workout-planner">
                <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Github Repo
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* grid item */}
        <div className="group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${Placeholder})` }}>
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold flex justify-center items-center text-white tracking-wider h-full">
            Project #3
          </span>
          <p><i>Coming Soon</i></p>
          <div className="pt-8 text-center">
            <a href="/">
              <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href="/">
              <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Github Repo
              </button>
            </a>
          </div>
        </div>
      </div>
        

        </div>
      </div>
    </div>
  );
}

export default Projects;
