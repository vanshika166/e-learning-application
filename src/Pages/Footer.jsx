import React from 'react'

const Footer = ({mode}) => {

    const backtoTop = ()=>{
        window.scrollTo({top:0, behavior:"smooth"})
    }

  return (
    <div className={` h-screen w-full  relative flex flex-col ${mode?"text-[#EFEEE1]":"text-[#161616]"} items-center justify-center`}>

        <div  className='lg:w-[90%] h-[40%] w-full flex lg:flex-row flex-col justify-between pl-8 lg:pr-20 pr-10 items-center lg:p-4 p-2'>
            <h1 className='lg:w-[45%] w-full text-2xl'>Start exploring our beginner-friendly courses designed to help you build real projects, step-by-step.</h1>
            <div className='flex items-center justify-between lg:text-xl text-md relative lg:bottom-0 bottom-[2rem] gap-x-8'>
                <button>Explore Courses and Start Learning!</button>
                
            </div>
        </div>

        <div className=' h-[2px] w-[90%] bg-purple-800'></div>

        <div className='w-[90%] h-[10rem] flex items-center justify-between p-2'>
            <div className='w-[25%] lg:block hidden  ml-8 flex flex-col gap-y-5'>
                <h1 className='text-3xl'>Eduspark</h1>
                <p className='text-sm'>Our goal is simple — to make tech learning accessible, interactive, and fun for everyone.</p>
            </div>

            <div className='flex flex-col gap-y-5  lg:p-0 px-6 mr-8'>
                <h1 className='lg:text-2xl text-3xl'>Stay Connected</h1>
                <div className='flex relative lg:left-0 left-4 lg:gap-x-10 gap-x-16 lg:text-2xl text-3xl'>
               <a href="https://www.linkedin.com/in/vanshika-kashyap/" target='blank'><i class="fa-brands fa-linkedin-in hover:text-purple-700 transition duration-200 hover:scale-125"></i></a> 
               <a href="https://github.com/vanshika166" target='blank'><i class="fa-brands fa-square-github hover:text-purple-700 transition duration-200 hover:scale-125"></i></a> 
                <a href="https://www.facebook.com/" target='blank'><i class="fa-brands fa-square-facebook hover:text-purple-700 transition duration-200 hover:scale-125"></i></a>
                </div>
            </div>
        </div>

        <div className=' h-[2px] w-[90%] bg-purple-800'></div>

    <footer className='lg:w-[90%] w-full  mt-16 flex mb-5 lg:flex-row flex-col lg:p-0 p-2 justify-between items-center lg:gap-x-0 gap-y-2'>
        <h1 className='lg:text-start text-center'>Built with 💻 and ❤️ by passionate learners, for passionate learners.</h1>
        <h1>© 2025 Eduspark. All rights reserved.</h1>
    </footer>

    <button onClick={()=>backtoTop()} className='absolute bottom-5 right-10'>Back to Top <span className='text-purple-600 animate-pulse font-bold'>↟</span></button>
    </div>
  )
}

export default Footer
