import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, ScrollText, Mail } from 'lucide-react';
import PolicyModal from './PolicyModal';



export default function Footer({ onOpenEnquiryModal = () => {} }) {
  // Now onOpenEnquiryModal is always at least a no-op function

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const navigate = useNavigate();
  const location = useLocation();

  const scrollToHomeSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Wait for Home to load before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

const [showPrivacy, setShowPrivacy] = useState(false);
const [showTerms, setShowTerms] = useState(false);
const [showContact, setShowContact] = useState(false);



  return (
    <footer className="bg-black text-white py-8 px-4 text-sm">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">

        {/* ✅ Company Section with Scroll-to-Top + Popup Trigger */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/about-us" onClick={scrollToTop} className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/hosted-tours" onClick={scrollToTop} className="hover:underline">Hosted Group Packages</Link>
            </li>
            <li>
              <Link to="/register-expert" onClick={scrollToTop} className="hover:underline">Register as Travel Expert</Link>
            </li>
<li>
<button
  onClick={() => {
    scrollToTop();
    onOpenEnquiryModal();
  }}
  className="hover:underline text-left w-full"
>
  Post an Enquiry
</button>


</li>

          </ul>
        </div>

        {/* Discover */}
<div>
  <h4 className="font-semibold mb-2">Discover</h4>
  <ul className="space-y-1">
    <li>
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#travel-stories-section";
        }}
        className="hover:underline"
      >
        Travel Stories
      </Link>
    </li>
    <li>
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#faq-section";
        }}
        className="hover:underline"
      >
        FAQs
      </Link>
    </li>
    <li>
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#reviews-section";
        }}
        className="hover:underline"
      >
        Customer Reviews
      </Link>
    </li>
    <li>
      <p onClick={() => setShowContact(true)} className="cursor-pointer text-sm hover:underline">Contact Us</p>
    </li>
  </ul>
</div>


        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><p onClick={() => setShowPrivacy(true)} className="cursor-pointer text-sm hover:underline">Privacy Policy</p></li>
            <li><p onClick={() => setShowTerms(true)} className="cursor-pointer text-sm hover:underline">Terms of Use</p></li>
          </ul>
        </div>

        {/* Hosted Group Tours */}
        <div className="flex flex-col items-center">
          <li><Link to="/hosted-tours" onClick={scrollToTop} className="hover:underline"> Hosted Group Tours @ ₹49,999!
          </Link>
            </li>
            
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <img src="https://i.postimg.cc/CKZs3jr1/Thailand-thumbnail.jpg" alt="Thailand" className="max-w-[75px] object-contain rounded" />
              <img src="https://i.postimg.cc/mgnQyPZG/Bali-thumbnail.jpg" alt="Bali" className="max-w-[75px] object-contain rounded" />
            </div>
            <div>
              <img src="https://i.postimg.cc/GtjFFztM/BaliVietnam-thumbnail.jpg" alt="Vietnam" className="max-w-[100px] object-contain rounded" />
            </div>
          </div>
        </div>
      </div>

{/* Social Media Icons */}
<div className="text-center text-white mt-6">
  <div className="flex justify-center space-x-4 text-lg mb-4">
    <a
      href="https://www.instagram.com/bookfortravel1/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#00bfa5]"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=61556815423716"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#00bfa5]"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.linkedin.com/company/bookfortravel"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#00bfa5]"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
  </div>
  <p className="text-xs text-gray-400">
    All rights reserved © 2025 bookfortravel.com
  </p>
</div>

<PolicyModal
  isOpen={showPrivacy}
  onClose={() => setShowPrivacy(false)}
  title="Privacy Policy"
  icon={ShieldCheck}
  color="blue"
>
  <ul className="list-disc pl-5 space-y-1">
    <li>Your data is used only to serve your travel needs better.</li>
    <li>We use cookies to improve your experience.</li>
    <li>Your contact info is never sold or misused.</li>
    <li>We may send marketing emails with an easy opt-out.</li>
    <li>All sensitive data is stored securely with industry best practices.</li>
    <li>Contact support@bookfortravel.com for any data/privacy requests.</li>
  </ul>
</PolicyModal>

<PolicyModal
  isOpen={showTerms}
  onClose={() => setShowTerms(false)}
  title="Terms of Use"
  icon={ScrollText}
  color="green"
>
  <ul className="list-decimal pl-5 space-y-1">
    <li>Use our platform responsibly for genuine travel planning.</li>
    <li>We are not liable for third-party services or providers listed.</li>
    <li>By submitting enquiries, you allow us to contact you for trip planning.</li>
    <li>All content is copyrighted. No reuse without permission.</li>
    <li>Abuse of platform will result in immediate access restriction.</li>
  </ul>
</PolicyModal>

<PolicyModal
  isOpen={showContact}
  onClose={() => setShowContact(false)}
  title="Contact Us"
  icon={Mail}
  color="pink"
>
  <p>📞 WhatsApp: +91 8368092034</p>
  <p>📧 Email: samirsingh@bookfortravel.com</p>
  <p>💬 Typical support turnaround: under 6 hours</p>
  <p>We're always here to help and ensure you have the best trip experience!</p>
</PolicyModal>


    </footer>
  );
}
