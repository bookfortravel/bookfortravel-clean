import React, { useEffect, useRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const blogTiles = [
  {
    title: 'Best International Trips Under ₹50,000',
    image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750697912/Tile1_vaxjtk.jpg',
    path: '/under-50k-trips'
  },
  {
    title: 'Top Visa-Free Countries for Indians 2025',
    image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750697897/Tile_2_veyiql.jpg',
    path: '/visa-free-countries'
  },
  {
    title: 'Month-wise Travel Guide for Indians',
    image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750697899/Tile_3_n1zcb0.jpg',
    path: '/monthwise-travel-guide'
  },
  {
    title: 'Hosted Group Tours vs Solo Travel 2025',
    image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750697909/Tile_4_p2ngfa.jpg',
    path: '/group-vs-solo-travel'
  },
  {
    title: 'Top Emerging International Destinations',
    image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750697913/Tile_5_rpjglm.jpg',
    path: '/emerging-destinations-2025'
  }
];

const TrendingBlogTiles = forwardRef((props, blogSectionRef) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Infinite Auto-scroll for mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const tileWidth = 280;
    const scrollTotal = tileWidth * blogTiles.length;

    let scrollPos = 0;
    const interval = setInterval(() => {
      scrollPos += tileWidth;
      container.scrollTo({
        left: scrollPos,
        behavior: 'smooth',
      });

      if (scrollPos >= scrollTotal) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'auto' });
          scrollPos = 0;
        }, 500);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const tileWidth = 280;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -tileWidth : tileWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={blogSectionRef} className="bg-white py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Follow the Latest Trends to Plan Better
      </h2>

      {/* ✅ Desktop View */}
      <div className="hidden md:flex justify-center gap-4 max-w-[1300px] mx-auto px-4">
        {blogTiles.map((tile, index) => (
          <div
            key={index}
            onClick={() => navigate(tile.path)}
            className="cursor-pointer w-1/5 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img src={tile.image} alt={tile.title} className="w-full h-48 object-cover" />
            </div>
            <p className="text-center mt-2 text-sm font-medium text-gray-700">
              {tile.title}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Mobile View – Auto Scroll */}
      <div className="md:hidden relative px-2">
        <div className="flex items-center justify-between px-2 mb-4">
          <button onClick={() => scroll('left')} className="text-xl"><FaChevronLeft /></button>
          <button onClick={() => scroll('right')} className="text-xl"><FaChevronRight /></button>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-1"
        >
          {[...blogTiles, ...blogTiles].map((tile, index) => (
            <div
              key={index}
              onClick={() => navigate(tile.path)}
              className="min-w-[260px] flex-shrink-0 cursor-pointer"
            >
              <div className="rounded-lg shadow-md">
                <img src={tile.image} alt={tile.title} className="w-full h-56 object-cover" />
              </div>
              <p className="text-sm text-center mt-2 font-medium text-gray-700">
                {tile.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default TrendingBlogTiles;
