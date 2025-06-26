import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">
          <Link to="/">BookForTravel</Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link to="/hosted-tours" className="hover:underline">Hosted Tours</Link>
          <Link to="/register-expert" className="hover:underline">Register as Travel Expert</Link>
          <Link to="/post-enquiry" className="hover:underline">Post an Enquiry</Link>
          <Link to="/blogs" className="hover:underline">Blogs</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

