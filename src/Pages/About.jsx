import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = ({mode}) => {

  const navigate = useNavigate()
  return (
    <section
      className={`w-full min-h-screen rounded-t-4xl relative bottom-[5rem] px-6 sm:px-10 py-24 flex flex-col items-center justify-center text-center transition-colors duration-300 ${
        mode ? "bg-[#1A1A2E] text-[#EFEEE1]" : "bg-[#F9F9F9] text-[#161616]"
      }`}
    >
      <div className="max-w-4xl w-full flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span
            className={`uppercase tracking-widest text-xs font-bold ${
              mode ? "text-[#7135DE]" : "text-[#7135DE]"
            }`}
          >
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-2">
            Empowering Your Tech Journey
          </h2>
        </div>
        <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-6">
          At <span className="font-bold text-[#7135DE]">EduSpark</span>, we’re on a mission to make quality tech education accessible to everyone.<br />
          Because learning to code should feel <span className="font-semibold">empowering</span>, not overwhelming.
        </p>
        <div
          className={`rounded-3xl shadow-lg px-6 py-8 max-w-2xl w-full ${
            mode
              ? "bg-[#23234A] border border-[#2D2D5A]"
              : "bg-white border border-[#E5E7EB]"
          }`}
        >
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            We believe anyone can become a confident coder — no matter their background or experience level.
            Our platform offers:
          </p>
          <ul className="text-left list-disc list-inside space-y-2 mb-4">
            <li>
              <span className="font-semibold text-[#7135DE]">Interactive lessons</span> that make learning fun and practical.
            </li>
            <li>
              <span className="font-semibold text-[#7135DE]">Real-world projects</span> to build your portfolio.
            </li>
            <li>
              <span className="font-semibold text-[#7135DE]">Beginner-friendly guidance</span> every step of the way.
            </li>
          </ul>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Let’s code the future, together.</span>{" "}
            <span className="text-[#7135DE] font-bold">🚀</span>
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={()=>navigate("/courses")}
            className={`px-8 py-3 rounded-full font-semibold shadow transition-all duration-200 ${
              mode
                ? "bg-[#7135DE] text-white hover:bg-[#5a28b5]"
                : "bg-[#7135DE] text-white hover:bg-[#5a28b5]"
            }`}
          >
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default About