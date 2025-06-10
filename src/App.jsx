import React, { useState } from 'react'
import Learning from './Pages/Learning.jsx'
import { Route, Routes } from 'react-router-dom'
import CourseDetails from './Pages/CourseDetails.jsx'
import CourseNo1 from './Pages/CourseNo1.jsx'
import Quiz from './Pages/Quiz.jsx'
import ProgressTracker from './Pages/ProgressTracker.jsx'
import ViewProgress from './Pages/ViewProgress.jsx'
import Footer from './Pages/Footer.jsx'
import Courses from './Pages/Courses.jsx'
import About from './Pages/About.jsx'
const App = () => {
  const [mode, setMode] = useState(false)
  const handleMode = ()=>{
    setMode(!mode)
  }
  return (
    <div className={`${mode?"bg-[#0B0C15] text-[#EFEEE1]":"bg-[#EFEEEA] text-[#161616]"} cursor-default`}>
      <Routes>
        <Route path='/' element = {<Learning handleMode={handleMode} mode={mode}/>}/>
        <Route path='/coursedetail/:projectId' element = {<CourseDetails mode={mode}/>}/>
        <Route path='/courseStart/:projectId/:topic' element = {<CourseNo1 mode={mode}/>}/>
        <Route path='/quiz/:projectId' element={<Quiz mode={mode}/>}/>
        <Route path='/track' element={<ProgressTracker mode={mode}/>}/>
        <Route  path="/viewprogress" element={<ViewProgress mode={mode}/>}/>
        <Route path='/contact' element={<Footer/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App