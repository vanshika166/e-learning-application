import React, { useEffect, useState, useRef } from 'react'
import { coursescard } from '../Components/Data.js'
import { useNavigate, useParams } from 'react-router-dom'

const CourseNo1 = ({ mode }) => {
  const [lesson, setLesson] = useState(0)
  const { projectId, topic } = useParams()
  const [courseData, setCourseData] = useState(null)
  const navigate = useNavigate()
  const data = coursescard.find((elem) => String(elem.id) === projectId)
  const chapters = data.lessons
  const container = useRef(null)
  const localData = JSON.parse(localStorage.getItem("myCourses"))
  // console.log(localData)
  const id = localData.find((elem) => elem.id.toString() === projectId)

  useEffect(() => {
    setCourseData(data)
    // console.log(data)
  }, [])



  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = 0;
    }

    if (id && Array.isArray(id.completed) && id.completed.length > 0) {
      const lastItem = id.completed[id.completed.length - 1];
      if (lastItem.completed === true) {
        setCourseData((prev) => ({
          ...prev,
          completed: true
        }));
      }
    }
  }, [lesson]);

  // console.log(courseData)

  useEffect(() => {
    // Set lesson index from topic param if present
    if (topic) {
      const foundIndex = chapters.findIndex(chap => chap.topic === topic);
      if (foundIndex !== -1) setLesson(foundIndex);
    }
    // eslint-disable-next-line
  }, [topic]);

  const handleNext = () => {
    if (lesson < chapters.length - 1) {
      const nextLesson = lesson + 1;
      setLesson(nextLesson);
      navigate(`/courseStart/${projectId}/${encodeURIComponent(chapters[nextLesson].topic)}`);
    }
    const storedCourses = JSON.parse(localStorage.getItem("myCourses"))
    const currentCourse = storedCourses.find((elem) => elem.id.toString() === projectId.toString())

    if (currentCourse) {
      const updatedSyllabus = currentCourse.syllabus.map((item, index) => {
        if (index < lesson) {
          return { ...item, completed: true, active: false }
        } else if (index === lesson) {
          return { ...item, completed: true, active: false }
        } else if (index === lesson + 1) {
          return { ...item, active: true }
        } else {
          return item;
        }
      });


      const update = {
        ...currentCourse,
        chaptersCompleted: currentCourse.chaptersCompleted < currentCourse.totalChapters ? (currentCourse.chaptersCompleted || 0) + 1 : currentCourse.chaptersCompleted,
        completed: updatedSyllabus,
        status : "active"
      }

      const updatedCourses = storedCourses.map((elem) => {
        return elem.id.toString() === currentCourse.id.toString() ? update : elem
      })

      localStorage.setItem("myCourses", JSON.stringify(updatedCourses))
    }


  }

  const handlePrev = () => {
    if (lesson > 0) {
      setLesson((prev) => prev - 1)
    }
  }

  const handleStartQuiz = () => {
  const storedCourses = JSON.parse(localStorage.getItem("myCourses"))
  const currentCourse = storedCourses.find((elem) => elem.id.toString() === projectId.toString())

  if (currentCourse) {
    const updatedSyllabus = currentCourse.syllabus.map((item, index) => {
      // Mark all lessons as completed and inactive
      return { ...item, completed: true, active: false }
    })

    const update = {
      ...currentCourse,
      chaptersCompleted: currentCourse.totalChapters, // All chapters completed
      completed: updatedSyllabus,
      status: "completed" // Optional: mark course as completed
    }

    const updatedCourses = storedCourses.map((elem) => {
      return elem.id.toString() === currentCourse.id.toString() ? update : elem
    })

    localStorage.setItem("myCourses", JSON.stringify(updatedCourses))
    if(updatedCourses.status === "completed"){
      JSON.parse(localStorage.getItem("completedCourses")) || []
      localStorage.setItem("completedCourses",JSON.stringify(updatedCourses))
    }
    
    }

  navigate(`/quiz/${projectId}`)
}


  return (
    <div className={`h-screen w-full ${mode ? "bg-[#161616]" : "bg-[#EFEEE1]"} flex items-center relative overflow-hidden justify-center`}>
      <div
        ref={container}
        className={`relative z-10 h-[95%] w-[90%] rounded-2xl p-8 overflow-auto flex flex-col gap-8 shadow-xl ${mode ? "bg-black text-[#EFEEE1] shadow-slate-800" : "bg-[#f3f3e9] text-[#161616] shadow-black"
          }`}
      >
        {/* Topic Title */}

        <h1 className='bg-[#9D6FED] p-5 text-center text-3xl font-semibold'>Chapter No {chapters[lesson].lesson}</h1>
        <h1 className="text-4xl font-bold underline">{chapters[lesson].topic}</h1>

        {/* Topic Description */}
        <p className="text-lg leading-relaxed">{chapters[lesson].description}</p>

        {/* Lesson Elements */}
        {chapters[lesson].elements.map((elem, index) => (
          <div key={index} className="flex flex-col gap-3 border-l-4 border-[#9D6FED] pl-4 mt-4">
            <h2 className="text-2xl font-semibold">▶  {elem.name}</h2>
            <p className="text-base">{elem.description}</p>
            <h4 className="text-xl font-medium mt-2">Example:</h4>
            {typeof elem.example === 'object' ? (
              Object.entries(elem.example).map(([key, code]) => (
                <div key={key}>
                  <p className="font-bold text-gray-700">{key.toUpperCase()}</p>
                  <pre className="bg-white text-gray-800 p-3 rounded-md font-mono text-sm whitespace-pre-line">{code}</pre>
                </div>
              ))
            ) : (
              <p className="bg-white text-gray-800 p-3 rounded-md font-mono text-sm whitespace-pre-line">{elem.example}</p>
            )}


            <h4 className="text-xl font-medium mt-2">Usage:</h4>
            <p className="text-base">{elem.usage}</p>
          </div>
        ))}

        {/* Practice */}
        <div className="mt-6">
          <h4 className="text-xl font-medium">Practice:</h4>
          <p className="text-base">{chapters[lesson].practice}</p>
        </div>

        {/* Quiz time */}
        {lesson === data.lessons.length - 1 ? <div>
          <button onClick={handleStartQuiz} className={`px-6 py-2 rounded-md text-lg font-medium transition ${lesson === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#9D6FED] hover:bg-[#775ba7] text-white"
            }`}>Start Quiz</button>
        </div> : null}

        {/* Navigation Buttons */}
        <div className="flex lg:flex-row flex-col gap-2 justify-between items-center mt-10">
          <button
            onClick={handlePrev}
            disabled={lesson === 0}
            className={`px-6 py-2 rounded-md text-lg font-medium transition ${lesson === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#9D6FED] hover:bg-[#775ba7] text-white"
              }`}
          >
            Previous Lesson
          </button>
          <button
            onClick={handleNext}
            disabled={lesson === data.lessons.length - 1}
            className={`px-10 py-2 rounded-md text-lg font-medium transition ${lesson === data.lessons.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#9D6FED] hover:bg-[#775ba7] text-white"
              }`}
          >
            Next Lesson
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseNo1;
