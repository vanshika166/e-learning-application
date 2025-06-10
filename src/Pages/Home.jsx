import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import bg from '../assets/bg1.png'
import {motion} from 'framer-motion'

const Home = ({handleMode,mode}) => {
  return (
    <div className={`h-screen relative cursor-default w-full flex overflow-hidden items-center justify-end ${mode?"bg-gradient-to-r from-[#7031df] to-[#080808] to-[#9D6FED] text-[#EFEEE1]":"bg-gradient-to-r from-[#7031df] to-[#b2a9c4] to-[#9D6FED] text-[#161616]"} transition-all duration-700`}>
      <motion.img
      initial = {{x:1000}}
      animate = {{x:0}}
      transition={{duration:0.8}}
      src={bg} alt="" className=' lg:h-[36rem] h-[20rem] lg:w-[36rem] w-[20rem] relative  lg:right-[5rem] right-[2rem] drop-shadow-xl drop-shadow-black' />

        <div className='h-full w-full lg:backdrop-blur-none  backdrop-blur-[5px] absolute inset-0 items-center flex flex-col justify-between'>
          {/* top toggles.. */}
          <motion.div
          initial = {{opacity:0,y:-100}}
          animate = {{opacity:1,y:0}}
          transition={{duration:0.8,delay:0.5}}
          className='w-full flex items-center justify-between relative lg:top-0 top-5 p-2 pr-5 pl-5'>
            <h1 className='text-2xl font-medium'>Eduspark</h1>
            <button onClick={handleMode} className='relative lg:right-5 right-5 lg:text-md md:text-xl text-lg'> mode</button>
          </motion.div>

    <div className='absolute top-[25%] left-6 flex flex-col gap-y-4'>
      <h1 className='lg:text-5xl md:text-5xl text-4xl'>Welcome To the EDUSPARK</h1>
      <div>
        <h1 className='lg:text-xl md:text-2xl text-lg lg:font-normal font-medium relative lg:right-0 right-2'>"Master New Skills with Structured</h1>
        <h1 className='lg:text-xl md:text-2xl text-lg relative lg:left-10 left-2'>Courses and Visual Progress Tracking."</h1>
      </div>
    </div>

          <Navbar mode = {mode}/>
        </div>

    </div>
  )
}

export default Home
