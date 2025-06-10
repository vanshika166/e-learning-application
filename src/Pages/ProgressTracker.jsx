import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProgressTracker = ({ mode }) => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [fav, setFav] = useState(false);

  // 1. Initialize favorites as dictionary key by course ID
  const [favorite, setFavorite] = useState(() => {
    const fav = localStorage.getItem("favoriteCourses");
    const data = JSON.parse(localStorage.getItem("myCourses")) || [];

    if (fav) {
      try {
        const parsed = JSON.parse(fav);
        // Convert old array format to dictionary if needed
        if (Array.isArray(parsed)) {
          const newFavDict = {};
          parsed.forEach((isFav, index) => {
            if (data[index]) {
              newFavDict[data[index].id] = isFav;
            }
          });
          return newFavDict;
        }
        return parsed;
      } catch (e) {
        return {};
      }
    }
    return {};
  });
  const location = useLocation()
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("myCourses")) || [];

  // 2. Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favoriteCourses", JSON.stringify(favorite));
  }, [favorite]);

  const handleAll = () => { setAll(true); setActive(false); setCompleted(false); setFav(false); }
  const handleActive = () => { setAll(false); setActive(true); setCompleted(false); setFav(false); }
  const handleFavorite = () => { setAll(false); setActive(false); setCompleted(false); setFav(true); }
  const handleCompleted = () => { setAll(false); setActive(false); setCompleted(true); setFav(false); }

  // 3. Toggle favorite using course ID instead of index
  const handleFav = (courseId) => {
    setFavorite(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  return (
    <div className={`min-h-screen w-full ${mode ? 'bg-[#161616] text-black' : 'bg-gradient-to-b from-[#EFEEE1] to-[#D4D3C9]'}`}>
      <div className='h-[4rem] w-full flex items-center p-4 border-b-[1px] border-gray-300'>
        <h1
          onClick={() => navigate('/')}
          className="text-2xl cursor-pointer text-purple-600 font-extrabold"
        >
          EduSpark
        </h1>
      </div>
      <div className='h-[3rem] py-2 px-4 flex items-center w-full'>
        <h1 className={`${mode ? "text-white" : "text-black"} lg:text-4xl text-2xl font-medium`}>My courses</h1>
      </div>

      {/* category */}
      <div className='lg:h-[2rem] h-[1.5rem] lg:text-lg text-xs py-2 lg:px-4 px-1 flex lg:gap-x-8 gap-x-1 items-center w-full bg-gray-300'>
        <button onClick={() => handleAll()} className={`cursor-pointer ${all ? "bg-[#784CDC] text-white" : "bg-transparent"} lg:ml-4 ml-2 hover:bg-[#784CDC] lg:p-1 p-0 lg:px-3 px-1 hover:text-white`}>All</button>
        <button onClick={() => handleActive()} className={`cursor-pointer ${active ? "bg-[#784CDC] text-white" : "bg-transparent"} ml-4 hover:bg-[#784CDC] p-1 px-3 hover:text-white`}>Active</button>
        <button onClick={() => handleCompleted()} className={`cursor-pointer ${completed ? "bg-[#784CDC] text-white" : "bg-transparent"} ml-4 hover:bg-[#784CDC] p-1 px-3 hover:text-white`}>Completed</button>
        <button onClick={() => handleFavorite()} className={`cursor-pointer ${fav ? "bg-[#784CDC] text-white" : "bg-transparent"} ml-4 hover:bg-[#784CDC] p-1 px-3 hover:text-white`}>Favorite</button>
      </div>

      {/* course containers */}
      <div className='w-full flex flex-col gap-y-6 p-4'>

        {/* containers */}
        {data && data.length > 0 ? (
          data
            .filter(elem => {
              if (all) return true;
              if (active) return elem.status === "active";
              if (completed) return elem.status === "completed";
              if (fav) return favorite[elem.id];
              return true;
            })
            .map((elem) => (
              <div key={elem.id} className='lg:h-[12rem] md:h-[40rem] h-[37rem] flex lg:flex-row flex-col lg:w-[80%] w-full bg-[#cbbded] p-2 lg:items-center items-start'>
                <img src={elem.img} alt="" className='lg:h-[98%] md:h-[60%] h-[50%] lg:w-[23%] w-full rounded-sm' />
                <div className='h-full lg:w-[75%] w-full p-2 px-4 flex flex-col gap-y-4'>
                  <h1 className='text-2xl font-medium'>{elem.name}</h1>
                  <p>{elem.overview}</p>

                  <div className='flex lg:flex-row flex-col justify-between gap-2 w-full items-center px-2 '>
                    <div className='flex gap-x-4'>
                      <h1
                        onClick={() => {
                          // Defensive checks
                          const hasSyllabus = Array.isArray(elem.syllabus) && elem.syllabus.length > 0;
                          const hasCompleted = Array.isArray(elem.completed) && elem.completed.length > 0;
                          let activeTopic = "";

                          if (hasCompleted) {
                            const activeChapter = elem.completed.find(chap => chap.active);
                            activeTopic = activeChapter ? activeChapter.topic : (hasSyllabus ? elem.syllabus[0].topic : "");
                          } else {
                            activeTopic = hasSyllabus ? elem.syllabus[0].topic : "";
                          }

                          if (activeTopic) {
                            navigate(`/coursestart/${elem.id}/${encodeURIComponent(activeTopic)}`);
                          } else {
                            alert("No chapters available in this course!");
                          }
                        }}
                        className='bg-[#ae97e4] py-1 lg:px-3 px-1 rounded-sm hover:bg-[#784CDC] cursor-pointer'
                      >
                        Continue learning
                      </h1>
                      <h1 onClick={() => {
                        navigate("/viewprogress", { state: { courseData: elem } });
                        console.log(elem)
                        }} className='bg-[#ae97e4] py-1 px-3 rounded-sm hover:bg-[#784CDC] cursor-pointer'>View Progress</h1>
                    </div>
                    <i
                      onClick={() => handleFav(elem.id)}
                      className={`fa-solid fa-heart text-2xl relative lg:top-0 top-3 ${favorite[elem.id] ? "text-[#784CDC]" : "text-white"}`}
                    ></i>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className='h-[50%] w-full flex items-center justify-center text-3xl'> <h1>No courses selected</h1></div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;