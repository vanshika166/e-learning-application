import bg from '../assets/bg4.png'
import {coursescard} from '../Components/Data.js'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const Courses = ({mode}) => {


  const navigate = useNavigate()

  const handleKnowMore = (projectId)=>{
    navigate(`/coursedetail/${projectId}`)
  }

  return (
    <div className={`lg:h-[120vh] h-[220vh] md:h-[150vh] w-full relative p-8 flex items-center justify-center ${mode ? "text-[#EFEEE1] bg-[#161616]" : "text-[#161616] bg-[#EFEEE1]"}`}>
      <img src={bg} alt="" className={`lg:h-[35rem] h-[20rem] lg:w-[35rem] w-[20rem] object-cover  ${mode ? "drop-shadow-lg drop-shadow-purple-700" : "drop-shadow-xl drop-shadow-black"}`}  />
      {/*course cards div */}
      <div className='h-full w-full absolute gap-y-20 flex flex-col lg:p-0 p-6 items-center justify-center inset-0'>
        <motion.h1
          initial = {{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className={`lg:text-6xl md:text-5xl text-4xl text-center font-medium relative lg:bottom-[10rem] bottom-[-1rem]`}>
          Free Courses to learn from
        </motion.h1>
        {/* course card box */}
        <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-x-10 gap-y-5'>
          {coursescard.map((elem,index)=>(
            <motion.div
              initial = {{y:100,opacity:0}}
              whileInView={{y:0,opacity:1}}
              viewport={{once:true}}
              transition={{duration:0.5,delay:index*0.25}}
              key={index}
              className={`lg:h-[25rem] md:h-[30rem] h-[25rem] lg:w-[20rem] md:w-[35rem] overflow-hidden w-[16rem] ${mode ? "bg-[#232135] text-[#EFEEE1]" : "bg-white text-[#161616]"} p-2 shadow-2xl shadow-black gap-y-2 flex flex-col`}
            >
              <img src={elem.img} alt="" className='w-full h-[50%] object-cover' />
              <h1 className={`lg:text-2xl md:text-2xl text-lg ${mode ? "text-[#EFFFE1]" : "text-[#161616]"}`}>{elem.hero.title}</h1>
              <h1 className='lg:text-lg md:text-xl text-md font-medium'>Level: <span className='font-normal text-md'>{elem.hero.level}</span></h1>
              <h1 className='lg:text-lg md:text-xl text-md font-medium'>Duration: <span className='font-normal text-md'>{elem.hero.duration}</span></h1>
              <button onClick={()=>handleKnowMore(elem.slug)} className='bg-purple-800 text-white lg:p-2 md:p-2 p-1 rounded-md relative lg:top-0 md:top-4 top-0 hover:bg-purple-700'>Know more</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
