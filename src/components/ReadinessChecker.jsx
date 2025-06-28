import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { X } from 'lucide-react';
import travelData from '../data/full_travel_widget_dataset.json';

const destinationsList = [
  'Vietnam', 'Thailand', 'Bali', 'Dubai', 'Sri Lanka', 'Singapore', 'Malaysia', 'Japan', 'Europe', 'Nepal',
  'Abu Dhabi', 'Azerbaijan', 'Kazakhstan', 'USA', 'Georgia', 'Bhutan', 'Maldives', 'Turkey', 'South Africa', 'UK', 'Seychelles'
];

const monthsList = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const ReadinessChecker = () => {
  const [destination, setDestination] = useState('');
  const [month, setMonth] = useState('');
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
      const timer = setTimeout(() => setShowResult(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showResult]);

  const handleCheck = () => {
    const match = travelData.find(
      (item) => item.destination === destination && item.month === month
    );
    setResult(match || null);
    setShowResult(true);
  };

  return (
<>
<div className="hidden md:block">
  <section className="relative shadow-md border bg-gray-100 border-gray-200 rounded-xl p-10 hover:shadow-lg flex flex-col md:flex-row items-start justify-start max-w-[1300px] mx-auto my-10">



     
{/* ✅ Desktop Version – only visible on md and above */}
<div className="hidden md:flex relative z-10 max-w-[1300px] mx-auto px-20 py-15 flex-col md:flex-row items-left justify-left gap--2">
  {/* 👩 Girl Image */}
  <div className="w-full md:w-[280px] flex justify-center md:justify-start">
    <img
      src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750571802/Adobe_Express_-_file_1_vdyiul.png"
      alt="Travel Guide Girl"
     	 className="w-[200px] md:w-[250px] object-contain"
    />
  </div>

  {/* 🧭 Widget Content */}
  <div className="flex-1 max-w-xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-center">
      Destination Readiness Checker
    </h2>
    <p className="text-center md:text-center text-lg mb-6 text-gray-700">
      Wondering if it's the right time to travel? Let’s find out.
    </p>

    {/* 🔽 Dropdowns */}
    <div className="grid grid-cols-1 px-20 py-15 md:grid-cols-2 gap-4 mb-6">
      {/* Destination Dropdown */}
      <div className="relative">
        <div
          onClick={() => {
            setShowDestDropdown(!showDestDropdown);
            setShowMonthDropdown(false);
          }}
          className="flex items-center justify-between p-3 rounded-lg border bg-white text-base cursor-pointer"
        >
          <span className="text-gray-700 truncate">
            {destination ? (
              destination
            ) : (
              <>
                Choose{' '}
                <span className="inline text-purple-600">
                  <Typewriter
                    words={[
                      'Destination', 'Vietnam', 'Thailand', 'Bali', 'Dubai', 'Sri Lanka',
                      'Singapore', 'Malaysia', 'Japan', 'Europe', 'Nepal', 'Abu Dhabi',
                      'Azerbaijan', 'Kazakhstan', 'USA', 'Georgia', 'Bhutan', 'Maldives',
                      'Turkey', 'South Africa', 'UK', 'Seychelles'
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1200}
                  />
                </span>
              </>
            )}
          </span>
          <span className="ml-2">▼</span>
        </div>
        {showDestDropdown && (
          <div className="absolute z-10 w-full bg-white border rounded shadow-md mt-1 max-h-60 overflow-y-auto">
            {destinationsList.map((dest) => (
              <div
                key={dest}
                onClick={() => {
                  setDestination(dest);
                  setShowDestDropdown(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {dest}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Month Dropdown */}
      <div className="relative">
        <div
          onClick={() => {
            setShowMonthDropdown(!showMonthDropdown);
            setShowDestDropdown(false);
          }}
          className="flex items-center justify-between p-3 rounded-lg border bg-white text-base cursor-pointer"
        >
          <span className="text-gray-700 truncate">
            {month || 'Choose Month'}
          </span>
          <span className="ml-2">▼</span>
        </div>
        {showMonthDropdown && (
          <div className="absolute z-10 w-full bg-white border rounded shadow-md mt-1 max-h-60 overflow-y-auto">
            {monthsList.map((m) => (
              <div
                key={m}
                onClick={() => {
                  setMonth(m);
                  setShowMonthDropdown(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {m}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    {/* CTA Button */}
    <div className="px-20 py-15 gap-6 mb-15">
      <div className="text-center px-20 py-15 md:text-center mb-10">
        <button
          onClick={handleCheck}
          className="bg-pink-600 hover:bg-pink-800 text-white px-8 py-2 rounded-xl text-lg shadow flex items-right gap-10 mx-auto md:mx-0"
        >
          🔍 Check Readiness
        </button>
      </div>
    </div>

    {/* Output */}
    {showResult && result && (
      <div
        ref={resultRef}
        className="relative bg-white rounded-xl shadow-xl p-4 space-y-2 text-gray-800 text-sm leading-normal"
      >
        <button
          onClick={() => setShowResult(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          <X size={20} />
        </button>

        <h3 className="text-lg font-bold mb-1 text-purple-700">
          ✈️ Travel Readiness for {result.destination} in {result.month}
        </h3>

        <p>🛂 <strong>Visa:</strong> {result.visa}</p>
        <p>🌤️ <strong>Weather:</strong> {result.weather}</p>
        <p>📅 <strong>Season:</strong> {result.season}</p>
        <p>👥 <strong>Footfall:</strong> {result.footfall}</p>
        <p>✈️ <strong>Avg Flight:</strong> {result.flightDetails}</p>

        <div className="mt-2 font-semibold text-sm">
          ✅ <strong>Final Verdict:</strong>{' '}
          {result.recommended
            ? `👍 Yes, ${result.month} is a great month to visit ${result.destination}!`
            : `⚠️ Not an ideal time to visit ${result.destination} in ${result.month}.`}
        </div>
      </div>
    )}

    {showResult && !result && (
      <p className="text-center text-red-600 font-medium" ref={resultRef}>
        ⚠️ No data found for this selection. Try a different combination.
      </p>
    )}
  </div>
</div>
</section>
</div>

{/* ✅ Mobile Version – only visible on small screens */}
{/* ✅ Mobile Version – only visible on small screens */}
<div className="md:hidden px-0 py-6">
  {/* 🧭 Title above the widget box */}
  <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
     Destination Readiness Checker
  </h2>

  {/* 🌸 Pink Widget Card */}
  <div className="bg-pink-100 rounded-2xl shadow-md px-4 py-4 flex flex-col items-center gap-3 relative">
    {/* 👧 Girl Image */}
    <img
      src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750615413/Adobe_Express_-_file_2_zlrbip.png"
      alt="Travel Girl"
      className="w-[250px] h-auto object-contain"
    />

    {/* 🧾 Content Section */}
    <div className="w-full">
      <p className="text-[14px] text-gray-700 mb-3 text-center">
        <strong>Wondering if it's the right time to travel? Let’s find out.</strong>
      </p>

{/* Destination Dropdown */}
<div className="relative mb-2">
  <select
    className="w-full bg-white border border-gray-300 rounded-xl py-2 px-3 text-sm text-purple-600 font-medium"
    value={destination}
    onChange={(e) => setDestination(e.target.value)}
  >
    {/* 👇 This only shows when nothing is selected — NOT in dropdown */}
    {destination === '' && (
      <option value="" disabled hidden>
        Choose{' '}
        {/* ✅ Typewriter effect visible here */}
        {` `}<Typewriter
          words={['Destination', ...destinationsList]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </option>
    )}

    {/* ✅ Actual destinations in dropdown */}
    {destinationsList.map((dest) => (
      <option key={dest} value={dest}>
        {dest}
      </option>
    ))}
  </select>
</div>


      {/* Month Dropdown */}
      <div className="relative mb-3">
        <select
          className="w-full bg-white border border-gray-300 rounded-xl py-2 px-3 text-sm"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="" disabled>
            Choose Month
          </option>
          {monthsList.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* CTA Full Width */}
    <button
      onClick={handleCheck}
      className="w-full bg-pink-600 text-white text-m font-semibold py-2 rounded-xl flex items-center justify-center gap-2 mt-2"
    >
      🔍 Check Your Trip Readiness
    </button>
  </div>

  {/* 📍 Output Box */}
  {showResult && result && (
    <div
      ref={resultRef}
      className="mt-6 bg-white rounded-xl shadow-xl p-4 space-y-2 text-gray-800 text-sm leading-normal"
    >
      <button
        onClick={() => setShowResult(false)}
        className="absolute top-2 right-4 text-gray-500 hover:text-red-500"
      >
        <X size={18} />
      </button>

      <h3 className="text-base font-bold mb-1 text-purple-700">
        ✈️ Travel Readiness for {result.destination} in {result.month}
      </h3>

      <p>🛂 <strong>Visa:</strong> {result.visa}</p>
      <p>🌤️ <strong>Weather:</strong> {result.weather}</p>
      <p>📅 <strong>Season:</strong> {result.season}</p>
      <p>👥 <strong>Footfall:</strong> {result.footfall}</p>
      <p>✈️ <strong>Avg Flight:</strong> {result.flightDetails}</p>

      <div className="mt-2 font-semibold text-sm">
        ✅ <strong>Final Verdict:</strong>{' '}
        {result.recommended
          ? `👍 Yes, ${result.month} is a great month to visit ${result.destination}!`
          : `⚠️ Not an ideal time to visit ${result.destination} in ${result.month}.`}
      </div>
    </div>
  )}

  {showResult && !result && (
    <p className="text-center text-red-600 font-medium mt-4" ref={resultRef}>
      ⚠️ No data found for this selection. Try a different combination.
    </p>
  )}
</div>



</>


     
  );
};

export default ReadinessChecker;
