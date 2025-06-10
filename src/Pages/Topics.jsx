import React from 'react'
import bg from '../assets/bg2.png'
import {topics} from '../Components/Data.js'

const Topics = ({mode}) => {
  return (
    <div className={`lg:h-[150vh] h-[120vh] ${mode?"text-[#EFEEE1]":"text-[#161616]"} w-full relative flex items-center justify-between`}>
      <img src={bg} alt="" className={`lg:h-[35rem] h-[20rem] lg:w-[35rem] w-[20rem] ${mode?"drop-shadow-md drop-shadow-purple-700":"drop-shadow-xl drop-shadow-black"}`} />
      
      {/* No scroll on this container */}
      <div className='h-screen lg:backdrop-blur-none backdrop-blur-[8px] w-full flex items-end justify-end absolute top-0'>
        
        {/* Scroll on this yellow div, but scrollbar hidden */}
        <div className='h-full lg:w-[50%] w-full absolute top-0 p-2 pl-5 gap-y-16 pt-20 flex flex-col overflow-y-auto hide-scrollbar'>
          <h1 className='text-3xl font-medium'>Everything You Need to Code with Confidence.</h1>

          {topics.map((elem, index) => (
            <div key={index} className={`lg:w-[70%] w-[90%] relative lg:left-[${elem.x}rem] left-5 flex flex-col gap-y-4`}>
              <h1 className='text-xl font-medium'><span className='relative right-3'>🤗</span>{elem.title}</h1>
              <p className='lg:font-normal font-medium'>{elem.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Topics
