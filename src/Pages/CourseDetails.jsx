import React, { useEffect } from 'react';
import banner from '../assets/bg5.png';
import banner2 from '../assets/bg6.png';
import banner3 from '../assets/bg7.png';
import banner4 from '../assets/bg8.png';
import { coursescard } from '../Components/Data.js'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-scroll'


const Badge = ({ label }) => (
  <span className="bg-slate-300 px-2 py-1 rounded-sm text-sm whitespace-nowrap">{label}</span>
);

const CourseDetails = ({ mode }) => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])




  const handleStartNow = (projectId,topic) => {
    navigate(`/coursestart/${projectId}/${topic}`)

    const storedCourses = JSON.parse(localStorage.getItem("myCourses")) || []

    // course object ko mutate karte hue active ko true set karo
    course.active = true;
    // course.syllabus.completed = true;

    const coursedata = {
      id: course.id,
      name: course.coursename,
      overview: course.smalldes,
      syllabus: course.syllabus,
      duration: course.hero.duration,
      img: course.img,
      active: course.active,
      slug:course.hero.subtitle,
      completed:course.syllabus.completed,
      totalChapters: course.lessons ? course.lessons.length : 0,
      chaptersCompleted: 0
    }
    const alreadyStoredCourse = storedCourses.some((elem)=>elem.id === projectId)
    if(!alreadyStoredCourse){
      storedCourses.push(coursedata)
    }
    localStorage.setItem("myCourses", JSON.stringify(storedCourses));

  }


  const { projectId, topic} = useParams()
  const course = coursescard.find((card) => card.slug === projectId)




  return (
    <div className={`w-full text-black ${mode ? "bg-[#0B0C15]" : "bg-[#EFEEEA]"} font-sans`}>
      {/* HERO */}
      <section className={`relative flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 lg:px-16 py-12 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <div className="w-full lg:w-3/5 flex flex-col gap-5">
          <h1 className="text-3xl text-[#5D34A3] font-bold">EduSpark</h1>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            {course.coursename}
          </h2>
          <p className={`text-lg lg:text-xl ${mode ? "text-gray-300" : "text-gray-800"} max-w-prose`}>{course.hero.subtitle}</p>
          <div className={`flex gap-2 flex-wrap items-center ${mode ? "text-gray-800" : "text-gray-800"}`}>
            {course.hero.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
          <p className={`text-md ${mode ? "text-gray-300" : "text-gray-800"}`}>
            {course.hero.level.split('→').join('|').trim()} &nbsp;|&nbsp; {course.hero.duration} &nbsp;|&nbsp; {course.hero.lessons} lessons
          </p>
          <div className="flex gap-4 mt-4">
            <button onClick={() => handleStartNow(course.id,course.syllabus[0].topic)} className="bg-[#5D34A3] text-white px-5 py-3 rounded-sm shadow-lg hover:scale-105 transition-transform">
              {course.hero.primaryCTA}
            </button>
            <Link to='syllabus' scroll={true} duration={800} offset={70}>
              <button className="bg-transparent border border-[#5D34A3] text-[#5D34A3] px-5 py-3 rounded-sm hover:bg-[#5D34A3] hover:text-white transition-colors">
                {course.hero.secondaryCTA}
              </button>
            </Link>
          </div>
        </div>
        <img src={banner} alt="JavaScript course banner" className={`w-full max-w-md h-auto object-cover rounded-2xl ${mode ? "drop-shadow-lg drop-shadow-purple-800" : "drop-shadow-xl drop-shadow-black"}`} />
      </section>
      {/* ABOUT SECTION */}
      <section className={`px-6 lg:px-16 py-12 flex flex-col gap-6 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h3 className="text-3xl font-bold">About this Course:</h3>
        <p>{course.about.description}</p>
        <ul className={`list-disc list-inside grid gap-2 ${mode ? "text-gray-300" : "text-gray-800"}`}>
          {course.about.learning_outcomes.map((elem, index) => {
            return <li key={index}>{elem}</li>
          })}
        </ul>
      </section>

      {/* KEY BENEFITS: */}
      <section className={`px-6 lg:px-16 relative py-12 flex flex-col gap-6 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <img src={banner2} alt="" className={`absolute z-10 h-[20rem] w-[20rem] lg:block md:hidden hidden lg:right-[-1rem] right-28  bottom-[-12px] ${mode ? "drop-shadow-lg drop-shadow-purple-600" : "drop-shadow-xl drop-shadow-black"}`} />
        <h3 className="text-3xl font-bold">Key Benefits:</h3>
        <ul className={`list-disc list-inside grid gap-2 ${mode ? "text-gray-300" : "text-gray-800"}`}>
          {course.about.key_benefits.map((elem, index) => {
            return <li key={index}>{elem}</li>
          })}
        </ul>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className={`px-6 lg:px-16 py-12 flex flex-col gap-6 ${mode ? "bg-black" : "bg-white"} ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h3 className="text-3xl font-bold">What You Will Learn</h3>
        <ul className={`grid gap-3 list-disc list-inside ${mode ? "text-gray-300" : "text-gray-800"}`}>
          {course.whatYouWillLearn.map((elem, idx) => {
            return <li key={idx}>{elem}</li>
          })}
        </ul>
      </section>

      {/* SKILLS GAINED */}
      <section className={`px-6 lg:px-16 py-12 flex flex-col gap-6 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h3 className="text-3xl font-bold">Skills You Will Gain</h3>
        <div className={`${mode ? "text-gray-800" : "text-gray-800"} flex flex-wrap gap-4`}>
          {course.skillsYouWillGain.map((skill) => (
            <Badge key={skill} label={skill} />
          ))}
        </div>
      </section>

      {/* prerequisites */}
      <section className={`px-6 lg:px-16 py-12 flex flex-col gap-6 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h3 className="text-3xl font-bold">prerequisites:</h3>
        <ul className={`grid gap-3 list-disc list-inside ${mode ? "text-gray-300" : "text-gray-800"}`}>
          {course.prerequisites.map((elem, idx) => {
            return <li key={idx}>{elem}</li>
          })}
        </ul>

        <h1 className='text-xl font-medium'>Includes: <span className='text-md font-normal'>Chapters & challenges | JS cheat‑sheet</span></h1>
      </section>

      {/* Syllabus */}
      <section id='syllabus' className={`px-6 relative lg:px-16 py-12 flex flex-col gap-6 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h1 className="text-3xl font-bold">Content We cover in this course:</h1>
        <ul className={`grid gap-3 list-disc list-inside ${mode ? "text-gray-300" : "text-gray-800"}`}>
          {course.syllabus.map((elem, index) => {
            return <li key={index}>{`${elem.topic}, ${elem.skills}`}</li>
          })}
        </ul>
        <img src={banner3} alt="" className={`absolute lg:block md:block hidden lg:h-[25rem] md:h-[20rem] lg:w-[25rem] md:w-[20rem] object-cover right-5 top-20 ${mode ? "drop-shadow-md drop-shadow-purple-600" : "drop-shadow-xl drop-shadow-black"}`} />
      </section>

      {/* Project */}
      <section className={`px-6 lg:px-16 py-12 flex flex-col gap-6 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h1 className="text-3xl font-bold">Project we will cover in this course:</h1>
        <h1 className="text-xl font-bold">{course.project.title}</h1>
        <p>{course.project.description}</p>

      </section>

      {/* why nedd this  */}

      <div className={`flex relative items-end justify-end ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <img src={banner4} alt="" className={`absolute lg:block md:block hidden lg:h-[25rem] md:h-[20rem] lg:w-[25rem] md:w-[20rem] object-cover lg:left-5 md:left-[-10px] top-3 ${mode ? "drop-shadow-md drop-shadow-purple-700" : "drop-shadow-xl drop-shadow-black"}`} />
        <section className="px-6 lg:px-16 py-12 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Why You Need This Course</h1>
          <div className="grid gap-6">
            {course.why.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-[#5D34A3]">Pain: {item.pain}</h2>
                <p className={`${mode ? "text-gray-300" : "text-gray-800"}`}>Solution: {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* frequently asked question */}
      <section className={`px-6 lg:px-16 py-12 flex flex-col gap-6 ${mode ? "bg-black" : "bg-white"} ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <div className="grid gap-6">
          {course.faq.map((faq, index) => (
            <details key={index} className="border border-gray-300 rounded-md p-4">
              <summary className="text-xl font-semibold text-[#5D34A3] cursor-pointer">
                {faq.q}
              </summary>
              <p className={`${mode ? "text-gray-300" : "text-black"} mt-2`}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={`px-6 lg:px-16 py-12 flex flex-col gap-6 ${mode ? "text-[#EFEEE1]" : "text-[#161616]"}`}>
        <h1 className="text-3xl font-bold">Course outcome:</h1>
        <p className={`${mode ? "text-gray-300" : "text-black"} mt-2`}>{course.about.course_outcome}</p>

        <p className='text-xl font-medium'>{course.footerCTA}</p>
      </section>


      {/* footer */}
      <footer className="bg-[#5D34A3] text-white px-6 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">EduSpark</h2>
            <p className="text-sm max-w-prose">
              Empowering learners worldwide with high-quality, interactive courses. Start your journey today and unlock your potential.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-sm flex flex-col gap-2">
              <li><button onClick={()=>navigate("/")} className="hover:underline">Home</button></li>
              <li><button onClick={()=>navigate("/about")} className="hover:underline">Overview</button></li>
              <li><button className="hover:underline">FAQs</button></li>
              <li><button onClick={()=>navigate("/contact")} className="hover:underline">Contact Us</button></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <i class="fa-brands fa-github text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} EduSpark. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default CourseDetails;
