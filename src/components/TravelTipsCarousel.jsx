// ✅ Travel Tips by the Founder – Carousel Section with Popup Video Player

import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const videoTiles = [
  {
    thumbnail: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750706109/thumbnail1_htst70.jpg',
    video: 'https://res.cloudinary.com/drvigtwgm/video/upload/v1750707488/video1_x4cesk.mp4'
  },
  {
    thumbnail: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750706105/thumbnail2_dxt1yh.jpg',
    video: 'https://res.cloudinary.com/drvigtwgm/video/upload/v1750707493/video2_k9cr6p.mp4'
  },
  {
    thumbnail: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750706104/thumbnail3_qqlvxf.jpg',
    video: 'https://res.cloudinary.com/drvigtwgm/video/upload/v1750707486/video3_t62mln.mp4'
  },
  {
    thumbnail: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750706096/thumbnail4_qldhxg.jpg',
    video: 'https://res.cloudinary.com/drvigtwgm/video/upload/v1750707484/video4_ngs1wk.mp4'
  },
  {
    thumbnail: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750706096/thumbnail5_yiwnkj.jpg',
    video: 'https://res.cloudinary.com/drvigtwgm/video/upload/v1750707484/video5_hvglsd.mp4'
  },
];

const TravelTipsCarousel = () => {
  const scrollRef = useRef(null);
  const [popupVideo, setPopupVideo] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft - 10) {
          // Reset to beginning when end is reached
          container.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          // Continue scrolling right
          container.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Renamed this to avoid ESLint "restricted global" error
  const handleScrollDirection = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -240 : 240,
        behavior: 'smooth',
      });
    }
  };



  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">🎥 Travel Tips by the Founder</h2>

      {/* ✅ Desktop View */}
      <div className="hidden md:flex justify-center gap-4 max-w-[1300px] mx-auto px-4">
        {videoTiles.map((tile, idx) => (
          <div key={idx} className="w-1/5 cursor-pointer hover:scale-105 transition" onClick={() => setPopupVideo(tile.video)}>
            <img src={tile.thumbnail} alt="video" className="rounded-lg shadow-md w-full h-80 object-cover" />
          </div>
        ))}
      </div>

      {/* ✅ Mobile View */}
      <div className="md:hidden relative mt-6 px-2">
        <div className="flex items-center justify-between px-2 mb-4">
          <button onClick={() => handleScrollDirection('left')} className="text-xl"><FaChevronLeft /></button>
          <button onClick={() => handleScrollDirection('right')} className="text-xl"><FaChevronRight /></button>
        </div>
        <div ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide px-1">
          {[...videoTiles, ...videoTiles].map((tile, idx) => (
            <div
              key={idx}
              onClick={() => setPopupVideo(tile.video)}
              className="min-w-[220px] flex-shrink-0 cursor-pointer"
            >
              <img
                src={tile.thumbnail}
                alt="video"
                className="rounded-lg shadow-md w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Popup Modal with Native Video */}
      {popupVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white p-2 rounded-lg w-[80%] md:w-[60%] h-[80%] relative flex items-center justify-center">
            <button
              className="absolute top-2 right-3 text-pink-400 text-2xl font-bold z-50"
              onClick={() => setPopupVideo(null)}
            >
              ×
            </button>
            <video controls autoPlay className="w-full h-full rounded-lg">
              <source src={popupVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelTipsCarousel;
