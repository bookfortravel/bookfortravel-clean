// src/components/UpcomingPackages.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import upcomingPackages from "./upcomingPackages";


const TrendingPackages = ({ onRequestCallback, onTileClick }) => {
  const navigate = useNavigate();

  // Filters (mobile-only UI will be shown)
  const [selectedDate, setSelectedDate] = useState("All Dates");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  // Build unique date and location options
  const dateOptions = useMemo(() => {
    const dates = new Set();
    upcomingPackages.forEach(p => (p.groupDates || []).forEach(d => dates.add(d)));
    return ["All Dates", ...Array.from(dates)];
  }, []);

  const locationOptions = useMemo(() => {
    const locs = new Set();
    upcomingPackages.forEach(p => locs.add(p.country));
    return ["All Locations", ...Array.from(locs)];
  }, []);

  // Filtered items (only 4 packages exist; still filter if user chooses)
  const filtered = useMemo(() => {
    return upcomingPackages.filter(pkg => {
      const dateMatch =
        selectedDate === "All Dates" || (pkg.groupDates || []).includes(selectedDate);
      const locMatch =
        selectedLocation === "All Locations" || pkg.country === selectedLocation;
      return dateMatch && locMatch;
    });
  }, [selectedDate, selectedLocation]);

  // Only show the given number of tiles (we have 4)
  const items = filtered.slice(0, 4);

  const handleTile = (pkg) => {
    if (typeof onTileClick === "function") {
      onTileClick(pkg);
      return;
    }
    window.scrollTo(0, 0);
    navigate(`/package/${pkg.id}`);
  };

  const handleRequest = (e, pkg) => {
    e.stopPropagation();
    if (typeof onRequestCallback === "function") {
      onRequestCallback(pkg);
    } else {
      console.log("Request Call Back clicked for:", pkg);
    }
  };

  const formatDatesInline = (dates = []) => (dates.length ? dates.join(" • ") : "");

return (
  <section className="max-w-[1300px] mx-auto px-8 py-6">
    {/* Heading */}
    <div className="mb-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Upcoming Hosted Group Tours
      </h2>
    </div>

      {/* Mobile filters: Date & Location — same line */}
      <div className="md:hidden px-0 py-3 flex gap-4 mb-0">
        {/* Date Dropdown */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-75 border border-gray-300 rounded-lg py-2 px-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

          >
            {dateOptions.map(d => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-75 border border-gray-300 rounded-lg py-2 px-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {locationOptions.map(l => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop grid (matches Home.jsx style) */}
      <div className="hidden md:grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map(pkg => (
          <div key={pkg.id} className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div onClick={() => handleTile(pkg)} className="cursor-pointer">
              <img src={pkg.image} alt={pkg.name} className="w-full h-52 object-cover" loading="lazy" />
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold text-gray-800 leading-snug">{pkg.name}</h3>
                <p className="text-sm text-gray-500">{pkg.country}</p>

                <div className="flex justify-between items-center text-sm">
                  <div className="text-gray-800 font-bold">
                    ₹{pkg.price?.toLocaleString('en-IN')}
                    <span className="ml-2 text-gray-400 line-through font-normal">
                      {pkg.originalPrice ? `₹${pkg.originalPrice?.toLocaleString('en-IN')}` : ""}
                    </span>
                  </div>
                  <div className="text-gray-600">{pkg.duration}D / {pkg.nights}N</div>
                </div>

                <div className="flex items-center text-sm text-yellow-500 gap-1">
                  ⭐ <span>{pkg.rating}</span>
                  <span className="text-gray-500">({pkg.ratingCount})</span>
                </div>

                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Activities:</span> {pkg.activities?.slice(0,4).join(', ')}
                </p>

                {pkg.groupDates?.length > 0 && (
                  <div className="mt-2 text-xs text-blue-700 font-medium">
                    Dates: {formatDatesInline(pkg.groupDates)}
                  </div>
                )}
              </div>
            </div>

            <div className="px-4 pb-4">
              <button
                className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-xl transition flex items-center justify-center gap-2 text-md"
                onClick={(e) => handleRequest(e, pkg)}
                aria-label={`Request Call Back for ${pkg.name}`}
              >
                <PhoneCall className="text-yellow-500 w-5 h-5" /> Request Call Back
              </button>
            </div>
          </div>
        ))}
      </div>

{/* Mobile horizontal list — clean, no fades */}
<div className="relative md:hidden pb-10 -mx-12">
  <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px--2">
    {items.map(pkg => (
      <div
        key={pkg._id || pkg.id}
        className="min-w-[280px] max-w-[280px] flex-shrink-0 bg-gray-100 rounded-2xl hover:shadow-sm transition duration-300 overflow-hidden"
      >
        <div onClick={() => handleTile(pkg)} className="cursor-pointer">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-56 object-cover"
            loading="lazy"
          />

          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">{pkg.name}</h3>
            <p className="text-sm text-gray-500">{pkg.country}</p>

            <div className="flex justify-between items-center text-sm">
              <div className="text-gray-800 font-bold">
                ₹{pkg.price?.toLocaleString('en-IN')}
                <span className="ml-2 text-gray-400 line-through font-normal text-xs">
                  {pkg.originalPrice ? `₹${pkg.originalPrice?.toLocaleString('en-IN')}` : ""}
                </span>
              </div>
              <div className="text-gray-600 text-xs">{pkg.duration}D / {pkg.nights}N</div>
            </div>

            <div className="flex items-center text-sm text-yellow-500 gap-1">
              ⭐ <span>{pkg.rating}</span>
              <span className="text-gray-500">({pkg.ratingCount})</span>
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Activities:</span> {pkg.activities?.slice(0,4).join(', ')}
            </p>

            {pkg.groupDates?.length > 0 && (
              <div className="mt-2 text-xs text-blue-700 font-medium">
                {formatDatesInline(pkg.groupDates)}
              </div>
            )}

            <button
              className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-xl transition flex items-center justify-center gap-2 text-md"
              onClick={(e) => { e.stopPropagation(); handleRequest(e, pkg); }}
              aria-label={`Request Call Back for ${pkg.name}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.6a1 1 0 01.7.3l2.4 2.4a1 1 0 010 1.4L9.4 9.4a16.016 16.016 0 006.2 6.2l2.3-2.3a1 1 0 011.4 0l2.4 2.4a1 1 0 01.3.7V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
              </svg>
              Request Call Back
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



    </section>
  );
};

export default TrendingPackages;


