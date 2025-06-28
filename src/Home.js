import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import PostEnquiryModal from './components/PostEnquiryModal';
import { useNavigate, useLocation } from 'react-router-dom';
import RatingsStrip from './components/RatingsStrip';
import ExplorePackages from './components/ExplorePackages';
import ReadinessChecker from './components/ReadinessChecker';
import GuestReviews from './components/GuestReviews';
import ExploreDestinations from './components/ExploreDestinations';
import HowItWorksSection from './components/HowItWorksSection';
import TrendingBlogTiles from './components/TrendingBlogTiles';
import TravelTipsCarousel from './components/TravelTipsCarousel';
import FAQSection from './components/FAQSection';
import { PhoneCall } from "lucide-react";
import { Helmet } from 'react-helmet';
import WhyCustomersLove from './components/WhyCustomersLove';





const determineTheme = (pkg) => {
  const country = pkg.country?.toLowerCase() || '';

  if (["indonesia", "india", "thailand", "sri lanka", "seychelles"].includes(country)) {
    return "Beaches";
  }

  if (["bhutan", "georgia", "kazakhstan"].includes(country)) {
    return "Mountains";
  }

  if (["vietnam", "japan", "kenya", "laos", "cambodia"].some(c => country.includes(c))) {
    return "Nature & Culture";
  }

  if (["uae", "singapore", "malaysia", "europe", "azerbaijan"].some(c => country.includes(c))) {
    return "City Escape";
  }

  return "City Escape";
};

const Home = ({ currency, blogRef }) => {

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
const [showAll, setShowAll] = useState(false);



  const navigate = useNavigate();

const location = useLocation();

useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Give time for the page to mount
  }
}, [location]);


const [selectedTheme, setSelectedTheme] = useState('All');
const [selectedBudget, setSelectedBudget] = useState('All');

useEffect(() => {
  axios
    .get(`https://bookfortravel-backend.onrender.com/api/packages`)
    .then((res) => {
      const rawPackages = res.data;

      const transformedPackages = rawPackages.map(pkg => ({
        ...pkg, // 🛑 PRESERVES all original fields: name, price, rating etc.
        id: pkg._id,
        theme: determineTheme(pkg),
      }));

      setPackages(transformedPackages);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Failed to fetch packages:', err);
      setLoading(false);
    });
}, [currency]);




const scrollToBlogs = () => {
  blogRef.current?.scrollIntoView({ behavior: 'smooth' });
};


  const handleTileClick = (pkgName) => {
    const routeMap = {
      "Thailand Trails: Islands, Temples & Nightlife": "/thailand-luxury-escape",
      "Dubai Luxe Escape: Dunes, Skyscrapers & Malls": "/dubai-luxury-escape",
      "Vietnam Unveiled: Culture, Caves & Cruises": "/vietnam-luxury-escape", // ✅ New Vietnam route
      "Bali Bliss: Beaches, Temples & Jungle Magic": "/bali-luxury-escape", 
      "Sri Lanka Secrets: Scenic Rail & Coastal Trails": "/srilanka-luxury-escape",
      "Singapore & Malaysia: Dual Delight Escape": "/singapore-malaysia-luxury-escape",
      "Japan Essence: Tradition Meets Neon": "/japan-luxury-escape",
      "Romantic Europe: Castles, Cafés & Countryside": "/europe-luxury-escape",
      "Goa Vibes: Beaches, Shacks & Parties": "/goa-luxury-escape",
      "Masai Mara Magic: Safari & Sunsets": "/masai-mara-luxury-escape",
      "Azerbaijan Explorer: Baku & Beyond": "/azerbaijan-luxury-escape",
"Kazakhstan Adventure: Canyons & Cities": "/kazakhstan-luxury-escape",
"Seychelles Dream Escape: Sand & Serenity": "/seychelles-dream-escape",
"Georgia Wonders: Mountains, Wine & Culture": "/georgia-wonders",
"Laos & Cambodia Heritage Unforgettable Trail": "/laos-cambodia-trail",
"Bhutan Serenity Escape: Monasteries & Mountains": "/bhutan-serenity-escape",


    };

    const matchedRoute = routeMap[pkgName];
    if (matchedRoute) {
      window.scrollTo(0, 0); // ✅ Scroll to top before navigating
      navigate(matchedRoute);
    }
  };

  if (loading) return <p className="text-center py-8">Loading packages...</p>;

const filteredPackages = packages.filter((pkg) => {
  const themeMatch = selectedTheme === 'All' || pkg.theme === selectedTheme;

  let budgetMatch = true;
  if (selectedBudget === 'Under ₹50K') budgetMatch = pkg.price < 50000;
  else if (selectedBudget === '₹50K–₹80K') budgetMatch = pkg.price >= 50000 && pkg.price <= 80000;
  else if (selectedBudget === '₹80K+') budgetMatch = pkg.price > 80000;

  return themeMatch && budgetMatch;
});


  return (
    <>

<Helmet>
  <title>BookForTravel | Hosted Group Tours & Custom Travel Itineraries</title>
  <meta name="description" content="BookForTravel offers curated hosted group tours and personalized holiday packages to Vietnam, Bali, Thailand & more. Plan with AI + Expert Help." />
  <meta name="keywords" content="hosted group tours, AI trip planner, travel expert India, Bali holiday packages, Vietnam tours, Thailand packages, BookForTravel" />
  <meta property="og:title" content="BookForTravel | Expert-Led Travel Planning" />
  <meta property="og:description" content="Explore unforgettable journeys with local hosts. Use our AI itinerary planner and get curated holiday packages across top destinations." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://bookfortravel.com/" />
</Helmet>

 <div className="pb-[60px]">
      <div className="max-w-[1300px] mx-auto px-8 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-4">

           Explore Travel Packages
        </h2>

{/* ✅ THEME FILTER BUTTONS – Only for Desktop */}
<div className="hidden md:flex flex-wrap gap-5 mb-8">
  {['All', 'Beaches', 'Mountains', 'Nature & Culture', 'City Escape'].map(theme => (
    <button
      key={theme}
      onClick={() => setSelectedTheme(theme)}
      className={`px-4 py-2 rounded-full shadow ${
        selectedTheme === theme
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 hover:bg-blue-100 text-gray-700'
      }`}
    >
      {theme}
    </button>
  ))}
</div>

{/* ✅ BUDGET FILTER BUTTONS – Only for Desktop */}
<div className="hidden md:flex flex-wrap gap-3 mb-6">
  {['All', 'Under ₹50K', '₹50K–₹80K', '₹80K+'].map(budget => (
    <button
      key={budget}
      onClick={() => setSelectedBudget(budget)}
      className={`px-4 py-2 rounded-full shadow ${
        selectedBudget === budget
          ? 'bg-green-600 text-white'
          : 'bg-gray-200 hover:bg-green-100 text-gray-700'
      }`}
    >
      {budget}
    </button>
  ))}
</div>



{/* ✅ DESKTOP GRID – Clean & Modern Package Tiles */}
<div className="hidden md:grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {(showAll ? filteredPackages : filteredPackages.slice(0, 8)).map(pkg => (
    <div key={pkg._id} className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Tile Click */}
      <div onClick={() => handleTileClick(pkg.name)} className="cursor-pointer">
        {/* Package Image */}
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-52 object-cover"
        />

        {/* Package Info */}
        <div className="p-4 space-y-1">
          {/* Title & Location */}
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">{pkg.name}</h3>
          <p className="text-sm text-gray-500">{pkg.country}</p>

          {/* Price & Duration */}
          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-800 font-bold">
              ₹{pkg.price.toLocaleString('en-IN')}
              <span className="ml-2 text-gray-400 line-through font-normal">
                ₹{pkg.originalPrice?.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-gray-600">{pkg.duration}D / {pkg.nights}N</div>
          </div>

          {/* Rating */}
          <div className="flex items-center text-sm text-yellow-500 gap-1">
            ⭐ <span>{pkg.rating}</span>
            <span className="text-gray-500">({pkg.ratingCount})</span>
          </div>

          {/* Activities */}
          <p className="text-sm text-gray-700 mt-1">
            <span className="font-semibold">Activities:</span> {pkg.activities?.join(', ')}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-4 pb-4">
        <button
          className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-xl transition flex items-center justify-center gap-2 text-md"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
        >
          <PhoneCall className="text-yellow-500 w-5 h-5" /> Request Call Back
        </button>
      </div>
    </div>
  ))}
</div>

{/* ✅ "View All" Button for Desktop */}
{!showAll && filteredPackages.length > 8 && (
  <div className="hidden md:block text-center mt-6">
    <button
      className="text-gray-800 underline text-base font-medium"
      onClick={() => setShowAll(true)}
    >
      View All Packages
    </button>
  </div>
)}

{/* ✅ MOBILE DROPDOWNS FOR FILTERS */}
<div className="md:hidden px-0 py-3 flex gap-4 mb-0">
  {/* Theme Dropdown */}
  <div className="flex-1">
    <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
    <select
      value={selectedTheme}
      onChange={(e) => setSelectedTheme(e.target.value)}
      className="w-70 border border-gray-300 rounded-lg py-2 px-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {['All', 'Beaches', 'Mountains', 'Nature & Culture', 'City Escape'].map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  </div>

  {/* Budget Dropdown */}
  <div className="flex-1">
    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
    <select
      value={selectedBudget}
      onChange={(e) => setSelectedBudget(e.target.value)}
      className="w-75 border border-gray-300 rounded-lg py-2 px-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      {['All', 'Under ₹50K', '₹50K–₹80K', '₹80K+'].map((budget) => (
        <option key={budget} value={budget}>
          {budget}
        </option>
      ))}
    </select>
  </div>
</div>

{/* ✅ MOBILE PACKAGE TILES – Portrait with Scroll Hint */}
<div className="relative md:hidden pb-10 px-0">
  <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide -ml-4 pr-4">

    {filteredPackages.map(pkg => (
      <div
        key={pkg._id}
        className="min-w-[280px] max-w-[280px] flex-shrink-0 bg-gray-100 rounded-2xl hover:shadow-sm transition duration-300 overflow-hidden"
      >
      {/* Tile Click */}
      <div onClick={() => handleTileClick(pkg.name)} className="cursor-pointer">
        {/* Image */}
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-56 object-cover"
        />

        {/* Info */}
        <div className="p-4 space-y-2">
          {/* Title & Country */}
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">{pkg.name}</h3>
          <p className="text-sm text-gray-500">{pkg.country}</p>

          {/* Price & Duration */}
          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-800 font-bold">
              ₹{pkg.price.toLocaleString('en-IN')}
              <span className="ml-2 text-gray-400 line-through font-normal text-xs">
                ₹{pkg.originalPrice?.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-gray-600 text-xs">{pkg.duration}D / {pkg.nights}N</div>
          </div>

          {/* Rating */}
          <div className="flex items-center text-sm text-yellow-500 gap-1">
            ⭐ <span>{pkg.rating}</span>
            <span className="text-gray-500">({pkg.ratingCount})</span>
          </div>

          {/* Activities */}
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Activities:</span> {pkg.activities?.join(', ')}
          </p>

       {/* CTA Button */}
      
        <button
          className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-xl transition flex items-center justify-center gap-2 text-md"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
        >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.6a1 1 0 01.7.3l2.4 2.4a1 1 0 010 1.4L9.4 9.4a16.016 16.016 0 006.2 6.2l2.3-2.3a1 1 0 011.4 0l2.4 2.4a1 1 0 01.3.7V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
            </svg>
            Request Call Back
          </button>
        </div>
</div>
      </div>
    ))}
  </div>


  {/* ⬅️ Left Gradient Scroll Hint */}
  <div className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />

  {/* ➡️ Right Gradient Scroll Hint */}
  <div className="absolute right-0 top-0 h-full w-0 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />
</div>







<ReadinessChecker />
<ExploreDestinations />


<WhyCustomersLove />


<div id="reviews-section">
  <GuestReviews />
</div>


<HowItWorksSection />


<div id="travel-stories-section">
  <TrendingBlogTiles ref={blogRef} />
</div>

<TravelTipsCarousel />

<div id="faq-section">
  <FAQSection />
</div>

</div>




        
      </div>

      

      {/* ✅ Post Enquiry Modal */}
      <PostEnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>


  );
};



export default Home;
