import React from 'react'
import Avatar from '../assets/IMG_1778.png'

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
                  borderBottom: `4px solid ${colors.Accent}`,
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
              <p>Hi, I'm Lauren Genzone. Say something about yourself here.</p>
            </div>
            <div>
              <p style={{ color: colors.Text }}>
                {" "}
                Talk about yourself as a coder and what you're passionate about.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>  
      </div>
    );
  };

export default About

