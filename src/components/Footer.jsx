import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import myResume from '../assets/resume-template.pdf' 

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff",
};

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content" style={{ backgroundColor: colors.Background, position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end sm:place-self-center sm:justify-self-center">
          <a href='/'>
            <FaLinkedin size={30}/>
          </a>
          <a href='https://github.com/lgenzone'>
            <FaGithub size={30}/>
          </a>
          <a href="mailto: lgenzone@icloud.com">
            <HiOutlineMail size={30}/>
          </a>
          <a href={myResume}>
            <BsFillPersonLinesFill size={30}/>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
