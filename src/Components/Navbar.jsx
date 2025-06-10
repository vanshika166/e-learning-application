import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-scroll'

const Navbar = ({mode}) => {
const navigate = useNavigate()


  return (
    <div className={`h-[3rem] flex items-center justify-around lg:fixed md:fixed fixed lg:bottom-4 bottom-24 lg:w-[50%] lg:text-md text-sm w-[98%] z-[1000] rounded-full ${mode?"bg-[#EFEEE1] text-[#0B0C15]":"bg-[#0B0C15] text-[#EFEEE1]"}`}>
      <Link to='home' scroll={true} duration={800} offset={70}>
        <h1 className='hover:text-purple-400'>Home</h1>
        </Link>
      <Link to='about' scroll={true} duration={800} offset={70}>
        <h1 className='hover:text-purple-400'>About</h1>
        </Link> 
        <Link to='topics' scroll={true} duration={800} offset={70}>
        <h1 className='hover:text-purple-400'>Topics</h1>
        </Link>
        <Link to='courses' scroll={true} duration={800} offset={70}>
        <h1 className='hover:text-purple-400'>Courses</h1>
        </Link>
        <Link onClick={()=>navigate("/track")} to='trackProgress' scroll={true} duration={800} offset={70}>
        <h1 className='hover:text-purple-400'>My Courses</h1>
        </Link>
        <Link to='footer' scroll={true} duration={800} offset={70}>
        <h1 className='hover:text-purple-400'>Contact</h1>
        </Link>
    </div>
  )
}

export default Navbar
