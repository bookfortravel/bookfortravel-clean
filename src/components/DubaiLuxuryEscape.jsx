// ✅ DubaiLuxuryEscape.jsx – FINAL with Hero, Trip Summary, Highlights & Accordion Itinerary + Day-wise Carousel + Summary/Stay/Transfer/Activity Tabs

import React, { useState } from 'react';
import Footer from '../components/Footer';
import PostEnquiryModal from '../components/PostEnquiryModal';
import { FaStar, FaBed, FaUtensils, FaBus, FaBinoculars, FaHotel, FaRoute, FaCheckCircle, FaTimesCircle} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Images
import hero1 from '../assets/dubai-hero1.jpg';
import hero2 from '../assets/dubai-hero2.jpg';
import hero3 from '../assets/dubai-hero3.jpg';
import hero4 from '../assets/dubai-hero4.jpg';
import hero5 from '../assets/dubai-hero5.jpg';
import hero6 from '../assets/dubai-hero6.jpg';

import day1img1 from '../assets/day1-img1.jpg';
import day1img2 from '../assets/day1-img2.jpg';
import day2img1 from '../assets/day2-img1.jpg';
import day2img2 from '../assets/day2-img2.jpg';
import day3img1 from '../assets/day3-img1.jpg';
import day3img2 from '../assets/day3-img2.jpg';
import day4img1 from '../assets/day4-img1.jpg';
import day4img2 from '../assets/day4-img2.jpg';
import day5img1 from '../assets/day5-img1.jpg';
import day5img2 from '../assets/day5-img2.jpg';

const reviewer1 = {
  name: "Riya Bansal",
  role: "Solo traveler from Ahmedabad",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya1_ka4hol.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya2_o4frrj.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya3_kcftbn.jpg"
  ],
  review:
    "Dubai solo trip was so empowering! From Burj Khalifa views to shopping in Deira, I explored it all. BookForTravel’s plan felt super smooth and safe for me. Loved every bit — already thinking of my next one!"
};

const reviewer2 = {
  name: "Kunal & Simran Mehta",
  role: "Couple travelers from Pune",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubaikunal1_idhoyv.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaikunal2_n57ozy.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188324/dubaikunal3_khvhzu.jpg"
  ],
  review:
    "Our Dubai trip was like a dream! Dhow cruise, Miracle Garden, and desert safari — all planned so well. We didn’t worry about anything. Thank you BookForTravel for the most perfect and romantic escape!"
};

const reviewer3 = {
  name: "The Qureshi Family",
  role: "Family travelers from Hyderabad",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi1_wtwwop.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi2_jqvfci.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi3_ciiwgn.jpg"
  ],
  review:
    "Dubai with kids was full of joy and ease. The Frame, Marina, Safari — all were kid-friendly and well managed. Everything was on time. We had so much fun thanks to BookForTravel’s thoughtful planning!"
};


const DubaiLuxuryEscape = () => {
  const [showModal, setShowModal] = useState(false);
  const [openDay, setOpenDay] = useState(null);
  const [activeTab, setActiveTab] = useState('Itinerary');

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-semibold text-lg md:text-xl text-gray-800">{question}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-700 border-t">
          {answer}
        </div>
      )}
    </div>
  );
};


  const itineraryData = [
    {
      day: 'Day 1',
      title: 'Arrival in Dubai | Luxury Yacht Experience',
      description: 'Arrive in Dubai and experience a luxury sunset yacht cruise along the Marina with a hosted dinner.',
      activities: ['Dubai Marina Yacht Tour - Yacht Ride Dubai Sunset Departure'],
      transfers: [
        'Transfer from Dubai International Airport to Luxury Hotel in Dubai',
        'Transfer from Luxury Hotel in Dubai to Dubai Marina',
        'Transfer from Dubai Marina to Luxury Hotel in Dubai'
      ],
      hotel: 'Check-in at Luxury Hotel in Dubai',
      images: [day1img1, day1img2]
    },
    {
      day: 'Day 2',
      title: 'Helicopter Tour | Visit Burj Khalifa and Enjoy Meal',
      description: 'Soar above Dubai’s skyline on a helicopter ride and dine atop Burj Khalifa’s rooftop.',
      activities: [
        'Helicopter Tour Dubai - Iconic Tour Dubai (12 minutes)',
        'Burj Khalifa 124 and 125 Level Tickets With Rooftop Meal'
      ],
      transfers: [
        'Transfer from Luxury Hotel in Dubai to Jumeirah Palms Residence',
        'Transfer from Jumeirah Palms Residence to Luxury Hotel in Dubai',
        'Transfer from Luxury Hotel in Dubai to Burj Khalifa'
      ],
      hotel: '',
      images: [day2img1, day2img2]
    },
    {
      day: 'Day 3',
      title: 'Premium Desert Safari Experience with BBQ Dinner',
      description: 'Feel the thrill of Dubai’s golden desert with VIP Majlis BBQ, dune bashing, and camel rides.',
      activities: ['Desert Safari | Dune Bashing, Camel Rides, BBQ Dinner'],
      transfers: [
        'Transfer from Luxury Hotel in Dubai to Desert Camp Location',
        'Return Transfer from Desert to Luxury Hotel in Dubai'
      ],
      hotel: '',
      images: [day3img1, day3img2]
    },
    {
      day: 'Day 4',
      title: 'Miracle Garden and Dubai Frame Visit',
      description: 'Visit Dubai’s famous Miracle Garden followed by panoramic views from Dubai Frame.',
      activities: ['Dubai Miracle Garden Walk', 'Dubai Frame Entry and Experience'],
      transfers: [
        'Transfer from Luxury Hotel to Miracle Garden',
        'Transfer from Miracle Garden to Dubai Frame',
        'Return Transfer to Hotel'
      ],
      hotel: '',
      images: [day4img1, day4img2]
    },
    {
      day: 'Day 5',
      title: 'Free Day for Leisure + Departure',
      description: 'Enjoy your final morning at leisure or last-minute shopping before departure.',
      activities: ['Free Time at Leisure', 'Optional Last-minute Souvenir Shopping'],
      transfers: ['Hotel Check-out and Transfer to Dubai Airport'],
      hotel: '',
      images: [day5img1, day5img2]
    }
  ];
const renderTabContent = () => {
  switch (activeTab) {
    case 'Itinerary':
      return (
        <div className="space-y-4 mt-6">
          {itineraryData.map((day, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow">
              <details>
                <summary className="bg-gray-100 px-6 py-4 cursor-pointer text-lg font-semibold flex justify-between items-center">
                  <span>{day.day}: {day.title}</span>
                  <span>▼</span>
                </summary>
                <div className="p-4">
                  <p className="mb-3 text-gray-700">{day.description}</p>
                  {/* Carousel */}
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 2500 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="rounded-xl mb-4"
                  >
                    {day.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt={`Activity ${i + 1}`} className="h-[240px] w-full object-cover rounded-xl" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </details>
            </div>
          ))}
        </div>
      );

    case 'Summary':
      return (
        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-bold mb-4">Trip Summary</h3>
          <div className="flex justify-around text-center mb-4">
            <div>
              <FaRoute className="text-blue-500 text-2xl mx-auto mb-1" />
              <p className="font-semibold">12 Transfers</p>
            </div>
            <div>
              <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
              <p className="font-semibold">10 Activities</p>
            </div>
            <div>
              <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
              <p className="font-semibold">5 Nights Stay</p>
            </div>
          </div>

          {itineraryData.map((day, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">{day.day} – {day.title}</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1"><FaBinoculars /> Activities</div>
                  <ul className="list-disc list-inside text-sm">
                    {day.activities.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1"><FaRoute /> Transfers</div>
                  <ul className="list-disc list-inside text-sm">
                    {day.transfers.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1"><FaHotel /> Hotel</div>
                  <p className="text-sm">{day.hotel || '—'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    case 'Activities':
      return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {itineraryData.map((day, index) => (
            <div key={index} className="border p-4 rounded-xl shadow bg-white">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <FaBinoculars className="text-blue-500" /> {day.day}: {day.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                {day.activities.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                loop={true}
                className="rounded-xl"
              >
                {day.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`Activity ${i + 1}`} className="h-[200px] w-full object-cover rounded-xl" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      );

    case 'Stay':
      return (
        <div className="mt-6 space-y-4">
          {itineraryData.map((day, index) => (
            day.hotel && (
              <div key={index} className="flex items-start gap-4 bg-white p-4 border rounded-xl shadow">
                <FaHotel className="text-2xl text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold">{day.day}: {day.title}</h3>
                  <p className="text-sm text-gray-700">{day.hotel}</p>
                </div>
              </div>
            )
          ))}
        </div>
      );

    case 'Transfers':
      return (
        <div className="mt-6 space-y-4">
          {itineraryData.map((day, index) => (
            <div key={index} className="bg-white border rounded-xl p-4 shadow">
              <h3 className="font-semibold mb-2 flex items-center gap-2 text-blue-700">
                <FaRoute /> {day.day}: {day.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {day.transfers.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
};

  const inclusions = [
    '5 nights stay in Dubai with breakfast',
    'Dubai Private Car Charter',
    'Helicopter Tour Dubai – Iconic Tour Dubai (12 minutes)',
    'Dubai Desert Safari with VIP Majlis Experience',
    'Sky View Edge Walk, Dubai',
    'Dubai Marina Yacht Tour – Yacht Ride Dubai Sunset Departure',
    'The View At The Palm Tickets, Dubai – General Admission Ticket: Sunset Hours (Prime Hours)',
    'Burj Khalifa 124 and 125 Level Tickets With Rooftop Meal',
    'Transfer from Dubai International Airport to Luxury Hotel',
    'Transfer from Luxury Hotel to Dubai International Airport'
  ];

  const exclusions = [
    'Expenses of a personal nature.',
    'Meals not mentioned in the itinerary or inclusions',
    'International flight tickets',
    'Visa Charges',
    'Travel Insurance'
  ];

const renderInclusionsExclusions = () => (
  <div className="max-w-[1300px] mx-auto px-4 py-10">
    <h2 className="text-2xl font-bold mb-6">What's inside the package?</h2>
    <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-10 border">
      {/* Inclusions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Inclusions</h3>
        <ul className="space-y-3">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-800 text-sm md:text-base leading-snug">
              <FaCheckCircle className="mt-1.5 text-green-600 text-base md:text-lg flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exclusions */}
      <div className="border-t pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
        <h3 className="text-lg font-semibold mb-4">Exclusions</h3>
        <ul className="space-y-3">
          {exclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-snug">
              <FaTimesCircle className="mt-1.5 text-red-500 text-base md:text-lg flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);



  return (
    <>
      {/* ✅ HERO CAROUSEL SECTION */}
      <div className="w-full relative">
<Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  modules={[Autoplay, Pagination]}
  className="w-full h-[60vh] sm:h-[80vh]"
>
  {[hero1, hero2, hero3, hero4, hero5, hero6].map((img, index) => (
    <SwiperSlide key={index}>
      <img
        src={img}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  ))}
</Swiper>

        {/* ✅ OVERLAY CONTENT - FINAL TUNED STYLING */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
          <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Dubai Luxury Escape</h1>
          <p className="text-[16px] md:text-[18px] mb-2">
            Experience Dubai’s finest — a hosted 5N/6D tour filled with luxury, thrill, and culture.
          </p>

          <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
            <div className="flex items-center gap-2">
              <span className="line-through text-gray-300">INR 88,000</span>
              <span className="text-green-400 font-semibold">INR 75,000</span>
            </div>
            <div className="text-white">⭐ 4.8 (287 reviews)</div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
          >
            📩 Post Enquiry
          </button>
        </div>
      </div>

      {/* ✅ TRIP SUMMARY BADGES */}
      <div className="max-w-[1300px] mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
          <span className="bg-black text-white px-3 py-1 rounded-full">6 Days / 5 Nights</span>
          <div className="flex items-center gap-2 text-gray-700">
            <FaBus /> <span>Transfers</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaBed /> <span>Stay</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaUtensils /> <span>Breakfast</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaBinoculars /> <span>Sightseeing</span>
          </div>
        </div>

        {/* ✅ TRIP HIGHLIGHTS */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Experience an unforgettable honeymoon or luxury escape in Dubai, where breathtaking skyline views, five-star hospitality, and curated hosted experiences create the perfect blend of romance, adventure, and comfort</li>
            <li>Enjoy a thrilling 12-minute helicopter ride soaring above Dubai's most iconic landmarks — from the towering Burj Khalifa and sail-shaped Burj Al Arab to the stunning Jumeirah coastline. Capture Insta-worthy views that few ever witness</li>
            <li>Cruise along Dubai Marina at sunset on a private luxury yacht. Sail past illuminated skyscrapers, sip on refreshing beverages, and enjoy the golden hour glow with your fellow travelers — an evening that feels straight out of a movie</li>
            <li>Dine 124 floors above the city at the Burj Khalifa, with panoramic views of Dubai’s dazzling skyline. Whether it's a romantic dinner or a celebration, the atmosphere and gourmet cuisine make for a truly elevated experience</li>
            <li>Embark on a premium desert safari through the golden dunes of Dubai. Feel the thrill of dune bashing, ride camels under the open sky, and wind down with a BBQ feast under the stars in an exclusive VIP Majlis setup, complete with live entertainment</li>
          </ul>
        </div>
      </div>

{/* ✅ TOP CAROUSEL */}
      <div className="max-w-[1300px] mx-auto mt-10 rounded-xl overflow-hidden relative">

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 2800 }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-xl"
        >

          {[day1img1, day1img2, day2img1, day2img2, day3img1, day3img2, day4img1, day4img2, day5img1, day5img2].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[450px]">
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* ✅ Fixed Label */}
        <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
          6 Days in Dubai
        </div>
      </div>

{/* ✅ ITINERARY TABS + ACCORDION */}
<div className="max-w-[1300px] mx-auto mt-12 px-4">
  <div className="flex gap-3 md:gap-6 mb-4 overflow-x-auto md:overflow-visible scrollbar-hide">
    {['Itinerary', 'Summary', 'Activities', 'Stay', 'Transfers'].map(tab => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 flex-shrink-0 rounded-full text-sm md:text-base font-semibold transition-all duration-200 whitespace-nowrap ${
          activeTab === tab
            ? 'bg-black text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {renderTabContent()}
  {renderInclusionsExclusions()}
</div>


<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  {/* ✅ Desktop View – Grid Layout */}
  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Review Card: Riya Bansal */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya1_ka4hol.jpg" alt="Riya Bansal" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Riya Bansal</p>
          <p className="text-sm text-gray-500">Solo traveler from Ahmedabad</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Dubai solo trip was so empowering! From Burj Khalifa views to shopping in Deira, I explored it all. BookForTravel’s plan felt super smooth and safe for me. Loved every bit — already thinking of my next one!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-riya", prevEl: ".prev-riya" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya2_o4frrj.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya3_kcftbn.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Riya Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-riya text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-riya text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Review Card: Kunal & Simran Mehta */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubaikunal1_idhoyv.jpg" alt="Kunal & Simran Mehta" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Kunal & Simran Mehta</p>
          <p className="text-sm text-gray-500">Couple travelers from Pune</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Our Dubai trip was like a dream! Dhow cruise, Miracle Garden, and desert safari — all planned so well. We didn’t worry about anything. Thank you BookForTravel for the most perfect and romantic escape!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-kunal", prevEl: ".prev-kunal" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaikunal2_n57ozy.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188324/dubaikunal3_khvhzu.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Kunal Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-kunal text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-kunal text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Review Card: The Qureshi Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi1_wtwwop.jpg" alt="The Qureshi Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Qureshi Family</p>
          <p className="text-sm text-gray-500">Family travelers from Hyderabad</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Dubai with kids was full of joy and ease. The Frame, Marina, Safari — all were kid-friendly and well managed. Everything was on time. We had so much fun thanks to BookForTravel’s thoughtful planning!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-qureshi", prevEl: ".prev-qureshi" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi2_jqvfci.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi3_ciiwgn.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Qureshi Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-qureshi text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-qureshi text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>


  {/* ✅ MOBILE REVIEW FIXED SECTION */}
  <div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
    {[{
      name: 'Riya Bansal',
      city: 'Solo traveler from Ahmedabad',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya1_ka4hol.jpg",
      text: `Dubai solo trip was so empowering! From Burj Khalifa views to shopping in Deira, I explored it all. BookForTravel’s plan felt super smooth and safe for me. Loved every bit — already thinking of my next one!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya2_o4frrj.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubairiya3_kcftbn.jpg"
      ],
      id: 'riya'
    }, {
      name: 'Kunal & Simran Mehta',
      city: 'Couple travelers from Pune',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188325/dubaikunal1_idhoyv.jpg",
      text: `Our Dubai trip was like a dream! Dhow cruise, Miracle Garden, and desert safari — all planned so well. We didn’t worry about anything. Thank you BookForTravel for the most perfect and romantic escape!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaikunal2_n57ozy.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188324/dubaikunal3_khvhzu.jpg"
      ],
      id: 'kunal'
    }, {
      name: 'The Qureshi Family',
      city: 'Family travelers from Hyderabad',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi1_wtwwop.jpg",
      text: `Dubai with kids was full of joy and ease. The Frame, Marina, Safari — all were kid-friendly and well managed. Everything was on time. We had so much fun thanks to BookForTravel’s thoughtful planning!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi2_jqvfci.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750188323/dubaiqureshi3_ciiwgn.jpg"
      ],
      id: 'qureshi'
    }].map((review, idx) => (
      <div key={idx} className="bg-white shadow-md rounded-xl p-4 min-w-[270px] max-w-[300px] h-[450px] snap-start flex-shrink-0 mx-2 border text-sm">
        <div className="flex items-center gap-4">
          <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover" />
          <div>
            <p className="font-bold text-sm">{review.name}</p>
            <p className="text-xs text-gray-500">{review.city}</p>
          </div>
        </div>
        <p className="text-xs text-gray-700 mt-2 overflow-y-auto max-h-[140px] pr-1">
          {review.text}
        </p>
        <Swiper modules={[Navigation]} navigation={{ nextEl: `.next-${review.id}`, prevEl: `.prev-${review.id}` }} loop={true} className="relative mt-3">
          {review.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`${review.name} Exp ${i + 1}`} className="w-full h-60 object-cover rounded-md" />
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 left-1 -translate-y-1/2 z-10">
            <button className={`prev-${review.id} text-blue-500 text-6xl w-3 h-3 flex items-center justify-center`}>‹</button>
          </div>
          <div className="absolute top-1/2 right-1 -translate-y-1/2 z-10">
            <button className={`next-${review.id} text-blue-500 text-6xl w-3 h-3 flex items-center justify-center`}>›</button>
          </div>
        </Swiper>
      </div>
    ))}
  </div>
</div>


      {/* ✅ ENQUIRY MODAL */}
 <PostEnquiryModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
        defaultPackage="Dubai Luxury Escape"
      />
{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        question: 'How do I book this trip?',
        answer:
          'Booking is simple. Just click on the "Request Callback" button or fill out the enquiry form. Our travel expert will get in touch within 6 hours to help you finalize your booking and guide you through payment and documentation.'
      },
      {
        question: 'Can I customize this trip based on my needs?',
        answer:
          'Absolutely! All our trips can be personalized. Whether you want to add extra days, change hotels, or modify the activities, our team will work with you to tailor the itinerary to your preferences and budget.'
      },
      {
        question: 'What are the cancellation and refund policies?',
        answer:
          'You may cancel the trip up to 15 days before the start date for a partial refund (after deducting applicable vendor and processing fees). Within 15 days, cancellation charges apply as per the supplier policy. Refunds (if applicable) are processed within 7–10 working days.'
      },
      {
        question: 'What is the payment policy?',
        answer:
          'We require a minimum of 30% advance to reserve your trip. The balance amount can be paid in milestones or 7 days before the travel date. Payment links and receipts are shared directly by our booking team.'
      },
      {
        question: 'Is visa and flight assistance included?',
        answer:
          'Visa and flight services are not included in the base package price, but we do offer assistance upon request. Our team can help with visa processing and provide best-price options for flights from your departure city.'
      }
    ].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>

     
    </>
  );
};

export default DubaiLuxuryEscape;
