import React from "react";

const colors = {
  Background: "#020100",
  Text: "#ffffff",
  Accent: "#8884ff",
};

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-base-200" style={{ backgroundColor: colors.Background }}>
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold inline mb-4" style={{ color: colors.Text, borderBottom: `4px solid ${colors.Accent}`}}>About Me</h1>
            <p className="py-6" style={{ color: colors.Text }}>With a passion for web development and a keen eye for detail, I'm dedicated to creating intuitive, functional, and visually appealing applications.</p>
            <p className="py-6" style={{ color: colors.Text }}>When I'm not coding, you can find me carving some fresh powder 🏂  or dancing to some funky tunes! 🪩 </p>
            <p className="py-6" style={{ color: colors.Text }}>I'm always looking for new challenges and opportunities to expand my horizons, and I'm eager to see where my journey as a developer takes me next!</p>
            <div className='pt-2 flex justify-center items-center'>
              <button className="text-white border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#8884ff] hover:border-[#8884ff]">
                <a href='/projects'>Projects</a>
              </button>
            </div>
          </div>
      </div>
    </div>
      
  </div>
  );
};

export default About;
