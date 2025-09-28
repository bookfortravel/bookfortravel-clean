import React, { useState, useRef, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

import logo from './assets/booklogo.jpg';
import ChatbotV2 from './components/ChatbotV2';
import PostEnquiryModal from './components/PostEnquiryModal';
import RegisterAsExpert from './components/RegisterAsExpert';
import HostedTours from './components/HostedTours';
import Home from './Home';
import HeroBanner from './HeroBanner';
import VietnamItinerary from './components/VietnamItinerary';
import ThailandItinerary from './components/ThailandItinerary';
import BaliItinerary from './components/BaliItinerary';
import AboutUs from './components/AboutUs';
import MobileTopBar from './components/MobileTopBar';
import MobileBottomNav from './components/MobileBottomNav';
import DubaiLuxuryEscape from './components/DubaiLuxuryEscape';
import ThailandLuxuryEscape from './components/ThailandLuxuryEscape'; 
import VietnamLuxuryEscape from './components/VietnamLuxuryEscape';
import BaliLuxuryEscape from './components/BaliLuxuryEscape'; 
import SrilankaLuxuryEscape from './components/SrilankaLuxuryEscape';
import SingaporeMalaysiaLuxuryEscape from './components/SingaporeMalaysiaLuxuryEscape';
import JapanLuxuryEscape from './components/JapanLuxuryEscape';
import EuropeLuxuryEscape from './components/EuropeLuxuryEscape';
import GoaLuxuryEscape from './components/GoaLuxuryEscape';
import MasaiMaraLuxuryEscape from './components/MasaiMaraLuxuryEscape'; // Adjust path if different
import AzerbaijanLuxuryEscape from './components/AzerbaijanLuxuryEscape';
import KazakhstanLuxuryEscape from './components/KazakhstanLuxuryEscape';
import SeychellesDreamEscape from './components/SeychellesDreamEscape';
import GeorgiaWonders from './components/GeorgiaWonders';
import LaosCambodiaTrail from "./components/LaosCambodiaTrail";
import BhutanSerenityEscape from './components/BhutanSerenityEscape';
import VietnamHanoiDanang from './components/VietnamHanoiDanang';
import DanangPhuquoc from './components/DanangPhuquoc';
import Hanoisapadanang from './components/hanoisapadanang';
import ThailandGroupGetaway from './components/ThailandGroupGetaway';


import Footer from './components/Footer';

import RatingsStrip from './components/RatingsStrip';
import WhyCustomersLove from './components/WhyCustomersLove';
import Under50kTripsBlog from './components/Under50kTripsBlog';
import VisaFreeCountriesBlog from './components/VisaFreeCountriesBlog';
import MonthwiseTravelBlog from './components/MonthwiseTravelBlog';
import GroupVsSoloBlog from './components/GroupVsSoloBlog';
import EmergingDestinationsBlog from './components/EmergingDestinationsBlog';
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "./firebase"; // Adjust path if needed



const destinations = [
  { label: "Vietnam", route: "/vietnam-luxury-escape" },
  { label: "Thailand", route: "/thailand-luxury-escape" },
  { label: "Bali", route: "/bali-luxury-escape" },
  { label: "Dubai", route: "/dubai-luxury-escape" },
  { label: "Sri Lanka", route: "/srilanka-luxury-escape" },
  { label: "Singapore + Malaysia", route: "/singapore-malaysia-luxury-escape" },
  { label: "Japan", route: "/japan-luxury-escape" },
  { label: "Europe", route: "/europe-luxury-escape" },
  { label: "Goa", route: "/goa-luxury-escape" },
  { label: "Masai Mara", route: "/masai-mara-luxury-escape" },
  { label: "Azerbaijan", route: "/azerbaijan-luxury-escape" },
  { label: "Kazakhstan", route: "/kazakhstan-luxury-escape" },
  { label: "Seychelles", route: "/seychelles-dream-escape" },
  { label: "Georgia", route: "/georgia-wonders" },
  { label: "Laos + Cambodia", route: "/laos-cambodia-trail" },
  { label: "Bhutan", route: "/bhutan-serenity-escape" },
];





const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
 const rotatingDestinations = destinations.map(dest => dest.label);
const dropdownRef = useRef(null);
const heroRef = useRef(null);
 const blogRef = useRef(null); // ✅ THIS LINE FIXES THE ERROR


useEffect(() => {
  if (isChatbotOpen) {
    setIsChatbotOpen(false);
  }
}, [location.pathname]);


const [user, setUser] = useState(null);

const [authLoading, setAuthLoading] = useState(true);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      setUser(null);
      localStorage.removeItem("user");
    }
    setAuthLoading(false); // ✅ Ensure this gets updated
  });

  return () => unsubscribe();
}, []);



let loginInProgress = false;

const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Store user login in Google Sheet
    await fetch("https://script.google.com/macros/s/AKfycbzb9Jgg5FKyUJI4KWDgybMadO-C10aa3zTKL0yGslVw0WtowMLrfuJcauMTh-mykn0IrA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        source: "userLogin",
        name: user.displayName || "",
        email: user.email || "",
        loginTime: new Date().toLocaleString()
      })
    });

    console.log("User login stored in Google Sheet!");
  } catch (error) {
    console.error("Login error:", error);
  }
};



const handleLogout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout failed", error);
  }
};

  const currencies = [
    { label: "INR - ₹", value: "INR" },
    { label: "USD - $", value: "USD" },
    { label: "EUR - €", value: "EUR" },
    { label: "GBP - £", value: "GBP" },
    { label: "AED - د.إ", value: "AED" },
    { label: "JPY - ¥", value: "JPY" },
    { label: "SGD - S$", value: "SGD" },
    { label: "THB - ฿", value: "THB" },
    { label: "ZAR - R", value: "ZAR" }
  ];
useEffect(() => {
  const handleClickOutside = (event) => {
    if (!event?.target) return;

    // Dropdown close logic
    if (
      showDropdown &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }

    // Menu close logic
    if (
      menuOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  // Use capture to catch early
  document.addEventListener("click", handleClickOutside, true);

  return () => {
    document.removeEventListener("click", handleClickOutside, true);
  };
}, [showDropdown, menuOpen]);

  useEffect(() => {
    setShowModal(false); 
  }, [location.key]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

return (
  <>
<div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto">
<div className="flex flex-col min-h-screen bg-white">
    <div className="sm:hidden">

      <MobileTopBar blogRef={blogRef} onHamburgerClick={() => setMenuOpen(!menuOpen)} />
    </div>

      <header className="bg-black shadow sticky top-0 z-50 hidden sm:block">
        <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between text-white gap-4 flex-wrap">
          <div className="flex items-center gap-10">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="BookForTravel Logo" className="h-10 w-auto object-contain cursor-pointer" />
            </Link>
            <button
              className="bg-white text-black font-semibold px-3 py-1 rounded text-sm hover:bg-gray-200 transition"
              onClick={() => { scrollToTop(); setShowModal(true); }}
            >
              📩 Post an Enquiry
            </button>
            <Link to="/register-expert" onClick={scrollToTop}>
              <button className="bg-white text-black font-semibold px-3 py-1 rounded text-sm hover:bg-gray-200 transition">
                Register as Travel Expert
              </button>
            </Link>
          </div>

<div ref={dropdownRef} className="relative w-full sm:w-[32%]">
  {/* 🔍 Search Bar Trigger with Typewriter */}
  <div
    className="flex items-center bg-gray-800 px-3 py-2 rounded-md cursor-pointer"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    <span className="text-white text-sm flex-grow truncate">
      Search for{" "}
      <Typewriter
        words={[
          "Destination", // Generic fallback
          "Vietnam", "Bali", "Thailand", "Destination",
          "Dubai", "Sri Lanka", "Destination",
          "Singapore + Malaysia", "Japan", "Destination",
          "Europe", "Goa", "Destination",
          "Masai Mara", "Azerbaijan", "Destination",
          "Kazakhstan", "Seychelles", "Destination",
          "Georgia", "Laos + Cambodia", "Bhutan"
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </span>

    {/* ▼ Icon */}
    <span className="text-white ml-2">▼</span>
  </div>

  {/* 🔽 Dropdown List */}
  {showDropdown && (
    <div className="absolute z-50 mt-1 w-full bg-white text-black rounded shadow-md max-h-[300px] overflow-y-auto">
      {destinations.map((dest) => (
        <div
          key={dest.label}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          onClick={() => {
            navigate(dest.route);
            setSelectedCountry(dest.label);
            setShowDropdown(false);
          }}
        >
          {dest.label}
        </div>
      ))}
    </div>
  )}
</div>

<div className="flex items-center gap-4">
  {user ? (
    <>
      <p className="text-white text-sm hidden sm:block">Hi, {user.displayName?.split(' ')[0]}</p>
      <button
        onClick={handleLogout}
        className="bg-white text-black font-normal px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition"
      >
        Logout
      </button>
    </>
  ) : (
    <button
      onClick={handleLogin}
      className="bg-white text-black font-normal px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition"
    >
      Login / Signup
    </button>
  )}
</div>

            <div className="relative" ref={menuRef}>
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => { scrollToTop(); setMenuOpen(false); }}>Home</Link>
                 
                  <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100" onClick={() => { scrollToTop(); setMenuOpen(false); }}>About Us</Link>
                  <a
  href="#"
  className="block px-4 py-2 hover:bg-gray-100"
  onClick={(e) => {
    e.preventDefault(); // Prevents default anchor jump
    blogRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the hamburger menu
  }}
>
 Blogs
</a>

                  <Link to="/hosted-tours" className="block px-4 py-2 hover:bg-gray-100" onClick={() => { scrollToTop(); setMenuOpen(false); }}>Hosted Group Tours</Link>
                </div>
              )}
            </div>
          </div>
        
      </header>
<main className="flex-grow">

<a
  href="https://wa.me/918368092034"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 left-3 z-50 md:hidden bg-green-200 hover:bg-green-400 text-white p-2 rounded-full shadow-lg transition-all duration-300"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    className="w-5 h-5"
/>
</a>

      <Routes>

<Route path="/hosted-tours" element={<HostedTours />} />
        <Route path="/register-expert" element={<RegisterAsExpert />} />
        <Route path="/vietnam-itinerary" element={<VietnamItinerary />} />
        <Route path="/thailand-itinerary" element={<ThailandItinerary />} />
        <Route path="/bali-itinerary" element={<BaliItinerary />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dubai-luxury-escape" element={<DubaiLuxuryEscape />} />
        <Route path="/thailand-luxury-escape" element={<ThailandLuxuryEscape />} />
        <Route path="/vietnam-luxury-escape" element={<VietnamLuxuryEscape />} />
        <Route path="/bali-luxury-escape" element={<BaliLuxuryEscape />} />
        <Route path="/srilanka-luxury-escape" element={<SrilankaLuxuryEscape />} />
        <Route path="/singapore-malaysia-luxury-escape" element={<SingaporeMalaysiaLuxuryEscape />} />
        <Route path="/japan-luxury-escape" element={<JapanLuxuryEscape />} />
        <Route path="/europe-luxury-escape" element={<EuropeLuxuryEscape />} />
        <Route path="/goa-luxury-escape" element={<GoaLuxuryEscape />} />
        <Route path="/masai-mara-luxury-escape" element={<MasaiMaraLuxuryEscape />} />
        <Route path="/azerbaijan-luxury-escape" element={<AzerbaijanLuxuryEscape currency={currency} />} />
        <Route path="/kazakhstan-luxury-escape" element={<KazakhstanLuxuryEscape />} />
        <Route path="/seychelles-dream-escape" element={<SeychellesDreamEscape />} />
        <Route path="/georgia-wonders" element={<GeorgiaWonders />} />
<Route path="/laos-cambodia-trail" element={<LaosCambodiaTrail />} />
<Route path="/bhutan-serenity-escape" element={<BhutanSerenityEscape currency={currency} />} />
<Route path="/vietnam-hanoi-danang" element={<VietnamHanoiDanang />} />
<Route path="/danang-phuquoc" element={<DanangPhuquoc />} />
<Route path="/hanoi-sapa-danang" element={<Hanoisapadanang />} />
<Route path="/thailand-group-getaway" element={<ThailandGroupGetaway />} />


<Route path="/under-50k-trips" element={<Under50kTripsBlog />} />
<Route path="/visa-free-countries" element={<VisaFreeCountriesBlog />} />
<Route path="/monthwise-travel-guide" element={<MonthwiseTravelBlog />} />
<Route path="/group-vs-solo-travel" element={<GroupVsSoloBlog />} />
<Route path="/emerging-destinations-2025" element={<EmergingDestinationsBlog />} />
<Route path="/" element={
  <>
    <HeroBanner heroRef={heroRef} />
    <RatingsStrip />
    
    <Home currency={currency} blogRef={blogRef} />  {/* ✅ Pass both props here */}
  </>
} />



      </Routes>
<div className="pb-[0px] px-2 py-0">
  {/* This is a spacer to push content above the fixed bottom nav */}
</div>


</main>

 

<ChatbotV2
  isOpen={isChatbotOpen}
  setIsOpen={setIsChatbotOpen}
/>


      {showModal && (
        <PostEnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
<Footer onOpenEnquiryModal={() => setShowModal(true)} />

   

 <div className="sm:hidden">
        <MobileBottomNav
  onEnquiry={() => {
    scrollToTop();
    setIsChatbotOpen(false);           // close chatbot
    setShowModal((prev) => !prev);     // toggle enquiry form
  }}
  onRegister={() => {
    scrollToTop();
    setIsChatbotOpen(false);           // close chatbot
    setShowModal(false);               // close enquiry form
    navigate('/register-expert');
  }}
  onHostedTours={() => {
    scrollToTop();
    setIsChatbotOpen(false);           // close chatbot
    setShowModal(false);               // close enquiry form
    if (location.pathname === '/hosted-tours') {
      navigate('/');
      setTimeout(() => navigate('/hosted-tours'), 0);
    } else {
      navigate('/hosted-tours');
    }
  }}
  onChatbot={() => {
    scrollToTop();
    setShowModal(false);               // close enquiry form
    setIsChatbotOpen(prev => !prev);   // toggle chatbot
  }}
/>

      </div>
{/* ✅ Desktop WhatsApp Button */}
<a
  href="https://wa.me/918368092034"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg items-center gap-2"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    className="w-8 h-8"
  />
  
</a>

</div>
</div>

    </>
  );
};


export default App;

