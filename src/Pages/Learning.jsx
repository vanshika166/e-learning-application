import React from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Topics from './Topics.jsx'
import Courses from './Courses.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-scroll'

const learning = ({handleMode,mode}) => {
  return (
    <div className={`${mode?"bg-[#0B0C15] text-[#EFEEE1]":"bg-[#EFEEEA] text-[#161616]"}`}>
      <section id='home'>
      <Home handleMode= {handleMode} mode = {mode}/>
      </section>
      <section id='about'>
      <About mode={mode}/>
      </section>
      <section id='topics'>
      <Topics mode={mode}/>
      </section>
      <section id='courses'>
      <Courses mode={mode}/>
      </section>
      <section id='footer'>
      <Footer mode={mode}/>
      </section>
      {/* <ProgressTracker mode = {mode}/> */}
      {/* <Loader/> */}
      
    </div>
  )
}

export default learning
