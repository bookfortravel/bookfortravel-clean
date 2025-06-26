// HowItWorksSection.jsx — With Horizontal Scroll on Mobile
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const steps = [
  { title: 'Select Destination', img: 'https://i.postimg.cc/htcn9ChZ/Select-Destination-logo.jpg', desc: 'Tell us where you want to go and your interests.' },
  { title: 'Get Itinerary', img: 'https://i.postimg.cc/Y2FBTcWy/Get-itinerary-logo.jpg', desc: 'Receive curated plans from local experts instantly.' },
  { title: 'Talk to Expert', img: 'https://i.postimg.cc/1zXLHbSB/Talk-to-expert-logo.jpg', desc: 'Speak with a real host to clarify or customize.' },
  { title: 'Travel with Group', img: 'https://i.postimg.cc/1Xh2ytq7/Travel-with-Group-logo.jpg', desc: 'Join like-minded travelers on a hosted group trip.' },
  { title: 'Share & Refer', img: 'https://i.postimg.cc/BbTyb05S/Share-and-refer-logo.jpg', desc: 'Refer friends and earn rewards or discounts.' },
];

const HowItWorksSection = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-200 shadow-md border border-gray-400 rounded-xl py-14 px-6 mt-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 mt-0">How It Works</h2>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid max-w-[1200px] mx-auto grid-cols-5 gap-6 text-center">
        {steps.map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <img src={s.img} alt={s.title} className="h-20 w-20 mx-auto mb-5 rounded-full border border-gray-200" />
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-base text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>

{/* ✅ Mobile Horizontal Scroll */}
<div className="md:hidden relative mb-5 mt-10">
  {/* Left Arrow */}
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
    onClick={() => scroll('left')}
  >
    <FaChevronLeft />
  </button>

  {/* Scrollable Steps */}
  <div
    ref={scrollRef}
    className="flex overflow-x-auto gap-6 scrollbar-hide px-[calc(50%-128px)]" // centers 256px wide cards
  >
    {steps.map((s, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 h-64 w-64 bg-white px-8 py-6 rounded-lg shadow-md text-center"
      >
        <img
          src={s.img}
          alt={s.title}
          className="h-16 w-16 mx-auto mb-0 rounded-full border border-gray-200"
        />
        <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
        <p className="text-lg text-gray-600">{s.desc}</p>
      </div>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
    onClick={() => scroll('right')}
  >
    <FaChevronRight />
  </button>
</div>

    </div>
  );
};

export default HowItWorksSection;

