import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Footer = () => {
  return (
    <div>
     { /* social icons */ } 
    <div className='' style={{backgroundColor: colors.Background}}>
    <ul className='flex justify-center items-center'>
      <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a className='flex justify-between items-center w-full text-white' href="/">
          Linkedin <FaLinkedin size={30}/>
        </a>
      </li>
      <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-white' href="https://github.com/lgenzone">
          GitHub<FaGithub size={30}/>
        </a>
      </li>
      <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
        <a className='flex justify-between items-center w-full text-white' href="mailto: lgenzone@icloud.com">
          Email<HiOutlineMail size={30}/>
        </a>
      </li>
      <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
        <a className='flex justify-between items-center w-full text-white' href="/">
          Resume <BsFillPersonLinesFill size={30}/>
        </a>
      </li>
    </ul>
    </div>

    </div>
  )
}

export default Footer
