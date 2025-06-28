import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../assets/booklogo.jpg';
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { FiSearch } from "react-icons/fi"; // Feather Search Icon

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

const MobileTopBar = ({ blogRef }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToBlog = () => {
    if (blogRef?.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await fetch("https://script.google.com/macros/s/AKfycbzb9Jgg5FKyUJI4KWDgybMadO-C10aa3zTKL0yGslVw0WtowMLrfuJcauMTh-mykn0IrA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event?.target) return;
      if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [menuOpen, showDropdown]);

  return (
    <div className="fixed top-0 z-50 w-full bg-black text-white px-3 py-2 flex items-center justify-between sm:hidden">

      {/* Logo */}
      <Link to="/" onClick={scrollToTop} className="flex-shrink-0">
        <img src={logo} alt="bookfortravel" className="h-8 w-auto" />
      </Link>

      {/* 🔍 Typewriter Search Box */}
      <div ref={dropdownRef} className="flex-1 min-w-0 px-2 relative">
        <div
          className="w-35 h-7 flex items-center justify-between text-sm bg-gray-800 text-white rounded-full px-4 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
<span className="flex items-center gap-2">
  <FiSearch className="text-lg text-white-600" />
  <span className="truncate">
    <Typewriter
      words={["Destination", // Generic fallback
          "Vietnam", "Bali", "Thailand", "Destination",
          "Dubai", "Sri Lanka", "Destination",
          "Singapore", "Japan", "Destination",
          "Europe", "Goa", "Destination",
          "Masai Mara", "Azerbaijan", "Destination",
          "Kazakhstan", "Seychelles", "Destination",
          "Georgia", "Laos", "Bhutan"
]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={60}
      deleteSpeed={40}
      delaySpeed={1500}
    />
  </span>
</span>
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {showDropdown && (
          <div className="absolute mt-2 w-full bg-white text-black rounded shadow z-[100] max-h-[250px] overflow-y-auto">
            {destinations.map((dest) => (
              <div
                key={dest.label}
                className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                onClick={() => {
                  navigate(dest.route);
                  setShowDropdown(false);
                }}
              >
                {dest.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hamburger */}
      <div ref={menuRef} className="relative flex-shrink-0">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute top-12 right-0 w-56 bg-white text-black rounded shadow z-50">
            {user && (
              <p className="px-4 py-3 text-sm text-gray-600 text-center border-b">
                Hey <span className="font-medium text-black">{user.displayName?.split(" ")[0]}</span>!
              </p>
            )}

            <Link to="/" onClick={() => { scrollToTop(); setMenuOpen(false); }} className="block px-4 py-2 hover:bg-gray-100">Home</Link>

            {!user ? (
              <button onClick={() => { handleLogin(); setMenuOpen(false); }} className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                Login / Signup
              </button>
            ) : (
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                Logout
              </button>
            )}

            <Link to="/about-us" onClick={() => { scrollToTop(); setMenuOpen(false); }} className="block px-4 py-2 hover:bg-gray-100">About Us</Link>

<a
  href="#"
  onClick={() => {
    setMenuOpen(false);
    navigate("/"); // Step 1: Navigate to home

    // Step 2: Delay to allow homepage to load, then scroll
    setTimeout(() => {
      scrollToBlog();
    }, 300); // You can increase to 500ms if needed
  }}
  className="block px-4 py-2 hover:bg-gray-100"
>
  Blogs
</a>

            
            <Link to="/hosted-tours" onClick={() => { scrollToTop(); setMenuOpen(false); }} className="block px-4 py-2 hover:bg-gray-100">Hosted Group Tours</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileTopBar;

