import React from 'react'


const colors = {
    "Background": "#020100",
    "Text": "#ffffff",
    "Accent": "#8884ff"
};

const About = () => {
  
    return (
      <div
        name="about"
        
        className="w-full h-screen"
        style={{
          backgroundColor: colors.Background,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p
                className="text-4xl font-bold inline"
                style={{
                  color: colors.Text,
                  borderBottom: `4px solid ${colors.Accent}`
                }}
              >
                About Me
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div
              className="sm:text-right text-4xl font-bold"
              style={{ color: colors.Text }}
            >
              <p>👋 Hi, I'm Lauren.</p>
              <p>It's nice to meet you!</p>
            </div>
            <div>
              <p style={{ color: colors.Text }}>
                With a passion for web development and a keen eye for detail,
                I'm dedicated to creating intuitive, functional, and visually
                appealing applications!
                
                When I'm not coding, you can find me carving some fresh powder
                🏂  or dancing to some funky tunes! 🪩 
                I'm always looking for new challenges and opportunities to
                expand my horizons, and I'm eager to see where my journey as a
                developer takes me next!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default About

