import React from 'react'

import cssLogo from '../assets/cssicon.png'
import htmlLogo from '../assets/html5icon.png'
import jsLogo from '../assets/javascripticon.png'
import mongoLogo from '../assets/mongodb.png'
import mysqlLogo from '../assets/mysqlicon.png'
import nodeLogo from '../assets/nodelogo.png'
import reactLogo from '../assets/reactlogoWhite.png'
import githubLogo from '../assets/GithubLogowhite.png'


const colors = {
    "Background": "#020100",
    "Text": "#ffffff",
    "Accent": "#8884ff"
  };
  
const Resume = () => {
  return (
    <div name='skills' style={{backgroundColor: colors.Background}}>
    { /* container */ }
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline' style={{ color: colors.Text, borderBottom: `4px solid ${colors.Accent}`}}>Skills</p>
                <p className='py-4' style={{ color: colors.Text }}>Technologies I have worked with:</p>
            </div>
            { /* grid */ }
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={htmlLogo} alt="HTML icon" />
                    <p className='my-4' style={{ color: colors.Text }}>HTML</p>
                </div>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={cssLogo} alt="CSS icon" />
                    <p className='my-4' style={{ color: colors.Text }}>CSS</p>
                </div>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={jsLogo} alt="Javascript icon" />
                    <p className='my-4' style={{ color: colors.Text }}>Javascript</p>
                </div>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={mongoLogo} alt="MongoDB icon" />
                    <p className='my-4' style={{ color: colors.Text }}>MongoDB</p>
                </div>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={mysqlLogo} alt="MySQL icon" />
                    <p className='my-4' style={{ color: colors.Text }}>MySQL</p>
                </div>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={nodeLogo} alt="Node.js icon" />
                    <p className='my-4' style={{ color: colors.Text }}>Node.js</p>
                </div>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={reactLogo} alt="React icon" />
                    <p className='my-4' style={{ color: colors.Text }}>React</p>
                </div>
                {/* grid item */}
                <div>
                    <img className='w-20 mx-auto' src={githubLogo} alt="GitHub icon" />
                    <p className='my-4' style={{ color: colors.Text }}>GitHub</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Resume;
