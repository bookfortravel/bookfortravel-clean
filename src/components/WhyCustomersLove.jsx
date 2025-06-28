import React from "react";
import {
  FaMapMarkedAlt,
  FaUserFriends,
  FaRobot,
  FaUserTie,
  FaHeart,
} from "react-icons/fa";

const WhyBookForTravelHero = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-2 py-20 pt-16 pb-6">
	
      {/* ✅ Section Heading */}
      <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center gap-0 px-2 py-0">
        Why Travellers Love Us ?       </h2>

      {/* ✅ Desktop Layout */}
      <div className="hidden md:flex justify-center items-center gap-6">
        {/* Girl */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750399677/Adobe_Express_-_file_mj1mcp.png"
            alt="AI Host"
            className="w-[280px] object-contain -mt-6"
          />
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-2 gap-4 max-w-[760px]">
          <div className="flex items-start gap-4 bg-white shadow-md border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all">
            <div className="bg-gray-100 text-pink-600 p-4 rounded-full text-3xl">
              <FaMapMarkedAlt />
            </div>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Experience destinations with immersive activities, not generic tours.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white shadow-md border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all">
            <div className="bg-gray-100 text-pink-600 p-4 rounded-full text-3xl">
              <FaUserTie />
            </div>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Real travel experts who offer personalised planning and support throughout.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white shadow-md border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all">
            <div className="bg-gray-100 text-pink-600 p-4 rounded-full text-3xl">
              <FaRobot />
            </div>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Our Human+Tech combo creates stress-free, smartly-optimised trips.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white shadow-md border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all">
            <div className="bg-gray-100 text-pink-600 p-4 rounded-full text-3xl">
              <FaUserFriends />
            </div>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Meet like-minded travellers & make lifelong memories with curated groups.
            </p>
          </div>
        </div>
      </div>

{/* ✅ Final Mobile Layout – Bigger Girl, Tight Spacing */}
<div className="md:hidden bg-gray-100 shadow-md border border-gray-200 rounded-xl p-20 hover:shadow-lg flex flex-row items-start justify-start px-0 pt-4 pb-4 -mt-2 ml-0">
  {/* Girl – Bigger, tighter */}
  <div className="w-[50%] flex justify-start items-start pt-1.5 space-y-6 -ml-6">
    <img
      src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750399677/Adobe_Express_-_file_mj1mcp.png"
      alt="AI Host"
      className="w-[165px] object-contain -ml-2"
    />
  </div>

  {/* Text Points – tighter spacing */}
  <div className="w-[65%] flex flex-col justify-start space-y-4 -ml-8">
    <div className="flex items-start gap-3">
      <FaMapMarkedAlt className="text-pink-600 text-4xl mt-1" />
      <p className="text-[15px] text-gray-800 font-medium leading-snug text-left">
        Experiential Itineraries, not generic Tours
      </p>
    </div>

    <div className="flex items-start gap-3">
      <FaUserTie className="text-pink-600 text-4xl mt-1" />
      <p className="text-[15px] text-gray-800 font-medium leading-snug text-left">
        Travel Experts as Hosts and 'Go-to-pal'
      </p>
    </div>

    <div className="flex items-start gap-3">
      <FaRobot className="text-pink-600 text-4xl mt-1" />
      <p className="text-[15px] text-gray-800 font-medium leading-snug text-left">
        Human+Tech Combo for Trip Planning
      </p>
    </div>
  </div>
</div>


    </div>
  );
};

export default WhyBookForTravelHero;
