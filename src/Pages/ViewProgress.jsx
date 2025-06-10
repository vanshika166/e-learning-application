import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewProgress = ({ mode }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeChapter, setActiveChapter] = useState("");

    const data = location.state?.courseData;

    const firstChapter = data.syllabus[0].topic;

       // if the course isn't started yet:
    if (!data || !Array.isArray(data.completed)) {
       return (
            <div className={`min-h-screen ${mode ? "bg-gradient-to-br from-[#7124C9] via-[#5153A6] to-[#0D0C00]" : "bg-gradient-to-br from-indigo-400 to-purple-600"} flex justify-center items-center font-sans`}>
                <div className={`${mode ? "bg-black text-white" : "bg-white text-black"} lg:rounded-3xl rounded-none md:rounded-2xl shadow-2xl px-12 py-6 w-full max-w-2xl text-center`}>
                    <h2 className="text-4xl font-bold text-purple-700 mb-2">{data.name}</h2>
                    <p className="text-gray-500 mb-6 text-lg">{data.slug}</p>
                    <div className="text-center text-lg text-gray-500 mb-6">
                        You haven’t started this course yet.<br />Once you begin, your progress will be shown here.
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between mb-1 text-sm text-gray-600">
                            <span>Progress</span>
                            <span>0%</span>
                        </div>
                        <div className="w-full bg-indigo-100 rounded-full h-4 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full" style={{ width: `0%` }}></div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 text-[16px] px-2 mb-4 text-gray-500">
                        <div>
                            <span className="font-semibold text-indigo-700">Course Duration: </span>{data.duration}
                        </div>
                        <div onClick={() => navigate(`/coursestart/${data.id}/${encodeURIComponent(firstChapter)}`)}>
                            <span className="font-semibold text-indigo-700 hover:bg-indigo-500 hover:text-white rounded-sm cursor-pointer px-3 py-1">Start learning</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        const checkLesson = data.completed.find((elem) => elem.active === true);
        if (checkLesson) {
            setActiveChapter(checkLesson.topic);
        }
    }, [data.completed]);



    const activeChapterIndex = data.completed.find((chap) => chap.active);
    const activeTopic = activeChapterIndex ? activeChapterIndex.topic : data.completed[0]?.topic;
    const percentage = Math.ceil((data.chaptersCompleted / data.totalChapters) * 100);
    // Normal progress UI
    return (
        <div className={`min-h-screen ${mode ? "bg-gradient-to-br from-[#7124C9] via-[#5153A6] to-[#0D0C00]" : "bg-gradient-to-br from-indigo-400 to-purple-600"} flex justify-center items-center font-sans`}>
            <div className={`${mode ? "bg-black text-white" : "bg-white text-black"} lg:rounded-3xl rounded-none md:rounded-2xl shadow-2xl px-12 py-2 w-full max-w-2xl text-center`}>
                <h2 className="text-4xl font-bold text-purple-700 mb-2">{data.name}</h2>
                <p className="text-gray-500 mb-6 text-lg">{data.slug}</p>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <span className="block text-indigo-600 font-semibold text-lg">Chapters Completed</span>
                        <span className="inline-block bg-indigo-100 text-indigo-700 rounded-xl px-4 py-1 font-bold mt-1">{data.chaptersCompleted} / {data.totalChapters}</span>
                    </div>
                    <div>
                        <span className="block text-purple-600 font-semibold text-lg">Active Chapter</span>
                        <span className="inline-block bg-purple-100 text-purple-700 rounded-xl px-4 py-1 font-bold mt-1">{activeChapter}</span>
                    </div>
                </div>
                <div className="mb-8 text-left">
                    <div className="font-semibold text-purple-700 mb-2 text-lg">Syllabus</div>
                    <div className="max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                        <ol className="pl-6 space-y-2">
                            {data.completed.map((lesson, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-7 h-7 flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full font-bold mr-3">{lesson.lesson}</span>
                                    <span className="font-semibold text-indigo-700">{lesson.topic}</span>
                                    <span className={`ml-auto text-xs ${lesson.completed ? "text-green-600" : "text-red-600"} font-medium`}>
                                        {lesson.completed ? "Completed" : "Not Completed"}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between mb-1 text-sm text-gray-600">
                        <span>Progress</span>
                        <span>{percentage}%</span>
                    </div>
                    <div className="w-full bg-indigo-100 rounded-full h-4 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                </div>
                <div className="flex justify-between mt-4 text-[16px] px-2 mb-4 text-gray-500">
                    <div>
                        <span className="font-semibold text-indigo-700">Course Duration: </span>{data.duration}
                    </div>
                    <div onClick={() => navigate(`/coursestart/${data.id}/${encodeURIComponent(activeTopic)}`)}>
                        <span className="font-semibold text-indigo-700 hover:bg-indigo-500 hover:text-white rounded-sm cursor-pointer px-3 py-1">Continue learning</span>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styling */}
            <style>
                {`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #a5b4fc;
                    border-radius: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                `}
            </style>
        </div>
    );
};

export default ViewProgress;
