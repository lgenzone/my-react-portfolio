import React, { useState } from 'react';
import BringPopcorn from '../assets/bringPopcorn.png';
import getFit from '../assets/getFit.png';
import Placeholder from '../assets/placeholder_image.png';
import codeQuiz from '../assets/codeQuiz.png';
import fiveDayForecast from '../assets/weatherDashboard.png';
import teamProfileGen from '../assets/teamProfileGen.png';
import FarmersMarket from '../assets/farmers-market-mobile.png';

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState("");

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  return (
    <div
      name="projects"
      className="flex items-center p-4 justify-center min-h-screen"
      style={{
        backgroundColor: colors.Background,
        color: colors.Text,
        margin: "auto",
        textAlign: "center"
      }}
    >
      <div className="max-w-full mx-auto p-4 flex flex-col w-full h-full justify-center items-center">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* grid item */}
          <div
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center content-div ${activeProject === "bringPopcorn" ? "bg-opacity-100" : "bg-opacity-50"}`}
            style={{ backgroundImage: `url(${BringPopcorn})` }}
            onClick={() => handleProjectClick("bringPopcorn")}
          >
            <div className={`opacity-0 group-hover:opacity-100 ${activeProject === "BringPopcorn" ? "opacity-100" : "opacity-0"}`}>
              <span className="flex justify-center items-center text-white tracking-wider h-full">
                Bring Popcorn uses third-party APIs to provide movie-related data in one place, reducing the need for multiple apps.
              </span>
              <div className="pt-2 text-center">
                <a href="https://nbadraun.github.io/Bring-Popcorn/">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/NBADRAUN/Bring-Popcorn">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          

          {/* grid item */}
          <div
            className="group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center content-div"
            style={{ backgroundImage: `url(${getFit})` }}
          >
            <div className={`opacity-0 group-hover:opacity-100 ${activeProject === "getFit" ? "opacity-100" : "opacity-0"}`}>
              <span className="flex justify-center items-center text-white tracking-wider h-full">
              GetFit is a fitness app that uses MVC paradigm and various softwares to store and manipulate user exercise data, allowing users achieve their fitness goals.
              </span>
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jelenarog/Workout-planner">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            className="group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center content-div"
            style={{ backgroundImage: `url(${FarmersMarket})` }}
          >
            <div className={`opacity-0 group-hover:opacity-100 ${activeProject === "Placeholder" ? "opacity-100" : "opacity-0"}`}>
              <span className="flex justify-center items-center text-white tracking-wider h-full">
                Farmer's Market
              </span>
              <p>
              A MERN application that connects local producers with consumers who are looking for fresh and high-quality produce and products.
              </p>
              <div className="pt-2 text-center">
                <a href="/https://farmermarket.herokuapp.com/">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Demo
                  </button>
                </a>
                <a href="/https://github.com/lgenzone/Farmers-Market">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            className="group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center content-div"
            style={{ backgroundImage: `url(${codeQuiz})` }}
          >
            <div className={`opacity-0 group-hover:opacity-100 ${activeProject === "codeQuiz" ? "opacity-100" : "opacity-0"}`}>
              <span className="flex justify-center items-center text-white tracking-wider h-full">
              JavaScript code quiz is a timed quiz that tests your JavaScript knowledge. Wrong answers lead to time penalties. After completing the quiz, enter your initials to save your score to the high scores page.
              </span>
              <div className="pt-2 text-center">
                <a href="https://lgenzone.github.io/code-quiz/">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lgenzone/code-quiz">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            className="group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center content-div"
            style={{ backgroundImage: `url(${fiveDayForecast})` }}
          >
            <div className={`opacity-0 group-hover:opacity-100 ${activeProject === "fiveDayForecast" ? "opacity-100" : "opacity-0"}`}>
              <span className="flex justify-center items-center text-white tracking-wider h-full">
              The Five Day Forecast is a travel app that displays temperature, humidity, and wind speed for a specified city. It uses a third-party API to retrieve weather data and helps users plan their trips accordingly.
              </span>
              <div className="pt-2 text-center">
                <a href="https://lgenzone.github.io/five-day-weather-forecast/">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lgenzone/five-day-weather-forecast">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            className="group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center content-div"
            style={{ backgroundImage: `url(${teamProfileGen})` }}
          >
            <div className={`opacity-0 group-hover:opacity-100 ${activeProject === "teamProfileGen" ? "opacity-100" : "opacity-0"}`}>
              <span className="flex justify-center items-center text-white tracking-wider h-full">
              A command-line program that handles a company's employee database using Node.js, Inquirer, and MySQL.
              </span>
              <div className="pt-8 text-center">
                <a href="https://drive.google.com/file/d/1p1so7VG4ZV6E7HS4jjOTFIklwaSb0cwK/view">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lgenzone/team-profile-generator">
                  <button className="text-center rounded-sm px-4 py-2 m-2 bg-white text-gray-700" style={{borderRadius: "50px"}}>
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