import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import myResume from '../assets/resume2023.pdf' 



const Footer = () => {
  return (
    <div>
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="flex justify-center items-center gap-6">
        <a className='' href='/'>
          <FaLinkedin size={30}/>
        </a>
        <a className='' href='https://github.com/lgenzone'>
          <FaGithub size={30}/>
        </a>
        <a className='' href="mailto: lgenzone@icloud.com">
          <HiOutlineMail size={30}/>
        </a>
        <a className='' href={myResume}>
          <BsFillPersonLinesFill size={30}/>
        </a>
      </div>
    </footer>
  </div>
  
  );
};

export default Footer
