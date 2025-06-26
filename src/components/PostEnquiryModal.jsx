import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaUsers, FaCheckCircle, FaTimes, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const countryCodes = [
  { code: '+91', label: '🇮🇳 India' },
  { code: '+1', label: '🇺🇸 USA' },
  { code: '+65', label: '🇸🇬 Singapore' },
  { code: '+66', label: '🇹🇭 Thailand' },
  { code: '+84', label: '🇻🇳 Vietnam' },
  { code: '+971', label: '🇦🇪 UAE' },
  { code: '+44', label: '🇬🇧 UK' },
  { code: '+33', label: '🇫🇷 France' },
];

const PostEnquiryModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    exploring: false,
    fromCity: '',
    travelDate: 'Anytime',
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
    groupSize: '',
    message: '',
    fixedDate: '',
    flexibleMonth: ''
  });
 const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
const isMobile = useMediaQuery('(max-width: 768px)');
const location = useLocation();

const navigate = useNavigate();



  const destinationRef = useRef(null);
  const fromCityRef = useRef(null);
const modalRef = useRef(null);


  useEffect(() => {
    const loadAutocomplete = () => {
      if (window.google?.maps?.places) {
        const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationRef.current);
        destinationAutocomplete.addListener("place_changed", () => {
          const place = destinationAutocomplete.getPlace();
          setFormData(prev => ({ ...prev, destination: place.formatted_address || place.name }));
        });

        const fromCityAutocomplete = new window.google.maps.places.Autocomplete(fromCityRef.current);
        fromCityAutocomplete.addListener("place_changed", () => {
          const place = fromCityAutocomplete.getPlace();
          setFormData(prev => ({ ...prev, fromCity: place.formatted_address || place.name }));
        });
      } else {
        setTimeout(loadAutocomplete, 500);
      }
    };
    loadAutocomplete();
  }, []);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validateStep = () => {
    const newError = {};
    if (step === 1) {
      if (!formData.destination) newError.destination = 'Destination is required';
      if (!formData.fromCity) newError.fromCity = 'Departure city is required';
    } else if (step === 2) {
      if (!formData.name) newError.name = 'Name is required';
      if (!formData.phone) newError.phone = 'Phone number is required';
      if (!formData.groupSize) newError.groupSize = 'Group size is required';
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

 const handleNext = () => {
    if (validateStep()) setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    const travelDate =
      formData.travelDate === "Fixed" ? formData.fixedDate :
      formData.travelDate === "Flexible" ? formData.flexibleMonth :
      "Anytime";

    const fullPhone = `${formData.countryCode}${formData.phone}`;

    const params = new URLSearchParams();
    params.append('source', 'website');
    params.append('destination', formData.destination);
    params.append('fromCity', formData.fromCity);
    params.append('travelDate', travelDate);
    params.append('name', formData.name);
    params.append('phone', fullPhone);
    params.append('email', formData.email);
    params.append('groupSize', formData.groupSize);
    params.append('message', formData.message);


    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzb9Jgg5FKyUJI4KWDgybMadO-C10aa3zTKL0yGslVw0WtowMLrfuJcauMTh-mykn0IrA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (response.ok) {
        setSuccessMessage("✅ Your enquiry has been submitted. Our travel expert will contact you shortly!");
        setTimeout(() => {
          setSuccessMessage('');
          onClose();
        }, 3500);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
    }
  };

  const handleFixedDateChange = (e) => {
    setFormData({ ...formData, fixedDate: e.target.value });
  };

  const handleFlexibleMonthChange = (e) => {
    setFormData({ ...formData, flexibleMonth: e.target.value });
  };

return (
  <div
    ref={modalRef}
    className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center"
    style={{ overflowY: 'auto' }} // ✅ allows scrolling if modal content exceeds viewport
  >
    <div
      className={`bg-white ${
        isMobile
          ? 'w-full max-h-[95vh] overflow-y-auto rounded-t-3xl p-4'
          : 'rounded-xl shadow-xl w-[90%] max-w-5xl flex overflow-hidden relative'
      }`}
      style={
        !isMobile
          ? {
              backgroundImage:
                "url('https://i.postimg.cc/j53pFRLN/background-post-an-enquiry.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maxHeight: '90vh', // ✅ limits modal height
              overflowY: 'auto', // ✅ scroll inside modal
            }
          : {}
      }
    >
      {/* ❌ Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-md z-50 hover:bg-gray-100"
      >
        <FaTimes className="h-4 w-4" />
      </button>

        {/* 🖥️ Desktop Left Panel */}
        {!isMobile && (
          <div className="w-1/2 bg-black bg-opacity-70 text-white p-6 border-r border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Let Our Experts Design a Package for You!</h2>
            <ol className="space-y-3">
              <li>1. Tell us your travel preferences</li>
              <li>2. Get free quotes from verified experts</li>
              <li>3. Compare, customize & book easily</li>
            </ol>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3"><FaCheckCircle className="text-green-400" /><span>10,000+ Trips Completed</span></div>
              <div className="flex items-center gap-3"><FaUsers className="text-green-400" /><span>1,000+ Verified Travel Experts</span></div>
              <div className="flex items-center gap-3"><FaCheckCircle className="text-green-400" /><span>Stringent Quality Control</span></div>
              <div className="flex items-center gap-3"><FaCheckCircle className="text-green-400" /><span>Experiential Local Tours & Farmstays</span></div>
              <div className="flex items-center gap-3"><FaCheckCircle className="text-green-400" /><span>Trusted by 20,000+ travelers across 25+ countries</span></div>
            </div>

            <div className="mt-8 text-lg font-semibold flex items-center gap-2">
              <FaPhone /> Call us: +91-83680-92034
            </div>

            <div className="mt-6 p-4 bg-purple-700 bg-opacity-20 rounded-lg">
              🌏 <strong>Don’t miss:</strong> Explore Hosted Group Packages to <strong>Vietnam, Thailand & Bali</strong> starting at just ₹49,999!
            </div>
          </div>
        )}

        {/* 🧾 Right Panel (Form) */}
        <div className={`${isMobile ? 'w-full bg-white p-4 h-full overflow-y-auto' : 'w-1/2 p-6 bg-white bg-opacity-95 flex flex-col justify-between'}`}>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            {successMessage && (
              <div className="text-green-600 font-semibold text-center mt-2">
                {successMessage}
              </div>
            )}

            {step === 1 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Where do you want to go?</h3>
<div className="relative">
  <input
    type="text"
    name="destination"
    ref={destinationRef}
    value={formData.destination}
    onChange={handleChange}
    className="w-full border p-2 rounded placeholder-transparent"
    placeholder=""
  />
  {!formData.destination && (
    <div className="absolute top-2 left-3 text-gray-400 text-sm pointer-events-none">
      <Typewriter
        options={{
          strings: ['Destination', 'Vietnam', 'Bali', 'Thailand'],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20,
        }}
      />
    </div>
  )}
</div>

                {error.destination && <p className="text-red-600 text-sm">{error.destination}</p>}

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="exploring"
                    checked={formData.exploring}
                    onChange={handleChange}
                  />
                  I am exploring destinations
                </label>

                <input
                  type="text"
                  name="fromCity"
                  placeholder="Your Departure City"
                  ref={fromCityRef}
                  value={formData.fromCity}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {error.fromCity && <p className="text-red-600 text-sm">{error.fromCity}</p>}

                <div className="flex gap-2">
                  {['Fixed', 'Flexible', 'Anytime'].map((type) => (
                    <label key={type} className="flex-1 text-sm">
                      <input
                        type="radio"
                        name="travelDate"
                        value={type}
                        checked={formData.travelDate === type}
                        onChange={handleChange}
                      />{' '}
                      {type}
                      {type === 'Fixed' && formData.travelDate === 'Fixed' && (
                        <input type="date" className="w-full mt-1 border p-1 rounded" onChange={handleFixedDateChange} />
                      )}
                      {type === 'Flexible' && formData.travelDate === 'Flexible' && (
                        <input type="month" className="w-full mt-1 border p-1 rounded" onChange={handleFlexibleMonthChange} />
                      )}
                    </label>
                  ))}
                </div>

                <button type="button" onClick={handleNext} className="w-full bg-orange-500 text-white py-2 rounded font-semibold">
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Tell us a bit more</h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {error.name && <p className="text-red-600 text-sm">{error.name}</p>}

                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-1/3 border p-2 rounded"
                  >
                    {countryCodes.map(({ code, label }) => (
                      <option key={code} value={code}>{label} ({code})</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-2/3 border p-2 rounded"
                  />
                </div>
                {error.phone && <p className="text-red-600 text-sm">{error.phone}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Select Group Size</option>
                  <option value="1-2">1–2</option>
                  <option value="3-5">3–5</option>
                  <option value="6-10">6–10</option>
                  <option value="10+">10+</option>
                </select>
                {error.groupSize && <p className="text-red-600 text-sm">{error.groupSize}</p>}

                <textarea
                  name="message"
                  placeholder="Any specific requests or details?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                ></textarea>

                <div className="flex justify-between items-center">
                  <button type="button" onClick={() => setStep(1)} className="text-sm text-gray-600 flex items-center gap-1">
                    <FaArrowLeft /> Back
                  </button>
                  <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded font-semibold">
                    Submit Enquiry
                  </button>
                </div>
              </>
            )}
          </form>
{isMobile && (
  <>
{/* How It Works Section */}
<div className="bg-white p-4 rounded-xl shadow-md mb-4">
  <img
    src="https://i.postimg.cc/7hcYpfHr/quote-flow.jpg"
    alt="Quote flow"
    className="w-full max-w-xs mx-auto object-contain"
  />
</div>

{/* Hosted Group Tours Section */}
<div
  onClick={() => {
    const tile = document.getElementById('hosted-tile');
    tile.classList.add('animate-tapPop');
    setTimeout(() => {
      tile.classList.remove('animate-tapPop');
      navigate('/hosted-tours');
    }, 300);
  }}
  id="hosted-tile"
  className="bg-white p-4 rounded-xl shadow-md mb-4 text-center cursor-pointer transition-transform"
>
  <h4 className="text-[15px] font-semibold text-black-700 mb-2">
    Hosted Group Tours @<span className="text-black-600 font-bold">₹49,999!</span>
  </h4>
  <div className="flex justify-center gap-2 mb-2">
    <img
      src="https://i.postimg.cc/CKZs3jr1/Thailand-thumbnail.jpg"
      alt="Thailand"
      className="w-[70px] h-auto object-cover rounded"
    />
    <img
      src="https://i.postimg.cc/mgnQyPZG/Bali-thumbnail.jpg"
      alt="Bali"
      className="w-[70px] h-auto object-cover rounded"
    />
  </div>
  <div>
    <img
      src="https://i.postimg.cc/GtjFFztM/BaliVietnam-thumbnail.jpg"
      alt="Vietnam"
      className="w-[90px] h-auto object-cover rounded mx-auto"
    />
  </div>
</div>


 </>
)}


          {/* Optional bottom image (desktop only) */}
          {!isMobile && (
            <div className="mt-4 text-center w-full">
              <img
                src="https://i.postimg.cc/7hcYpfHr/quote-flow.jpg"
                alt="How it works flow"
                className="w-full max-h-48 object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostEnquiryModal;




