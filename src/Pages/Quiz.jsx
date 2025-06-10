import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { coursescard } from '../Components/Data.js'

const Quiz = ({ mode }) => {
  const [question, setQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [answerStatus, setAnswerStatus] = useState(null)
  const [finish, setFinish] = useState(false)
  const { projectId } = useParams()
  const navigate = useNavigate()

  const data = coursescard.find((elem) => String(elem.id) === projectId)
  const quizdata = data.questions
  console.log(quizdata)
  const handleAnswer = (option) => {
    setSelectedOption(option)
    if (option === quizdata[question].answer) {
      setAnswerStatus("correct")
      setScore((prev) => prev + 1)
    } else {
      setAnswerStatus("incorrect")
    }
  }

  const handleNext = () => {
    setQuestion((prev) => prev + 1)
    setAnswerStatus(null)
    setSelectedOption(null)
    if (question == quizdata.length-1) {
      setFinish(true)
    }
  }

  return (
    <div className={`h-screen w-full ${mode ? "bg-[#161616]" : "bg-[#EFEEE1]"} flex items-center justify-center`}>

      {!finish ? <div className={`lg:h-[90%] h-[95%] w-[95%] lg:w-[50%] ${mode ? "bg-black text-white" : "bg-[#EFEEE1] text-black"} rounded-2xl flex flex-col gap-y-8 relative shadow-xl p-8 shadow-black`}>
        <div className='h-[0.5rem] w-[full] bg-[#775ba7]'></div>
        <p>Question {question + 1}/20</p>
        <h2 className='lg:text-3xl text-[1.3rem] font-medium'>{quizdata[question].question}</h2>
        <div className='flex flex-col gap-y-7'>

          {quizdata[question].options.map((option, index) => {
            let optionClass = "hover:bg-[#7F5DDA] text-[1.2rem] transition-colors duration-150 px-2 py-2 rounded-md"
            if (selectedOption) {
              if (option === quizdata[question].answer) {
                optionClass = "bg-green-400 text-black px-2 py-2 rounded-md"
              } else if (option === selectedOption) {
                optionClass = "bg-red-400 text-black px-2 py-2 rounded-md"
              }
            }
            return (
              <h2
                onClick={() => handleAnswer(option)}
                key={index}
                className='text-xl cursor-pointer'>
                <span className='font-bold pr-5'>{index + 1}.</span>
                <span className={optionClass}>{option}</span>
              </h2>
            )
          })}
        </div>

        <button onClick={() => handleNext()} className='bg-[#7F5DDA] hover:bg-[#5d4b89] lg:p-2 p-1 rounded-md lg:text-2xl text-xl font-medium'>{question === quizdata.length-1 ? "Finish" : "Next"}</button>
      </div> : <div className=' h-[90%] lg:w-[50%] w-[90%] bg-[#7748DD] text-white p-6 gap-y-8 rounded-4xl flex flex-col items-center justify-center'>
        <h1 className='lg:text-5xl text-3xl font-semibold'>Congratulations</h1>
        <p className='text-xl font-medium text-center'>You passed all the requirements for the course continue the hard work!</p>
        <button onClick={()=>navigate("/")} className='p-2 px-3 text-black font-medium hover:bg-[#EFEEE1] bg-white rounded-md'>Back to home</button>
      </div>}




    </div>
  )
}

export default Quiz
