// components/RatingsStrip.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const RatingsStrip = () => {
  return (
    <div className="bg-white border-t border-b py-3 px-4 shadow-sm">
      <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap text-sm sm:text-base text-gray-800 text-center sm:text-left">


        {/* ✅ Desktop View: Trust + Google + TripAdvisor */}
        <div className="hidden sm:flex justify-center gap-4">
          {/* Trust Badge */}
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            <span>Trusted by 1000+ travelers in 16 countries</span>
          </div>

          {/* Divider */}
          <span className="text-gray-300">|</span>

          {/* Google Rating */}
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750351119/googlelogo_r1u98l.jpg"
              alt="Google"
              className="h-7 w-20"
            />
            <span className="text-yellow-500 text-lg">★★★★★</span>
          </div>

          {/* Divider */}
          <span className="text-gray-300">|</span>

          {/* TripAdvisor Rating */}
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750351119/tripadvisorlogo_zgcj0r.jpg"
              alt="TripAdvisor"
              className="h-7 w-22"
            />
            <span className="text-yellow-500 text-lg">★★★★★</span>
          </div>
        </div>

        {/* ✅ Mobile View: Google + TripAdvisor only */}
        <div className="flex sm:hidden justify-center items-center gap-6">
          {/* Google Rating */}
          <div className="flex items-center gap-1">
            <img
              src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750351119/googlelogo_r1u98l.jpg"
              alt="Google"
              className="h-6 w-18"
            />
            <span className="text-yellow-500 text-sm">★★★★★</span>
          </div>

          {/* TripAdvisor Rating */}
          <div className="flex items-center gap-1">
            <img
              src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750351119/tripadvisorlogo_zgcj0r.jpg"
              alt="TripAdvisor"
              className="h-6 w-21"
            />
            <span className="text-yellow-500 text-sm">★★★★★</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RatingsStrip;
