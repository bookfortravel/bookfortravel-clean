// ✅ VietnamLuxuryEscape.jsx – with Hero, Trip Summary, Highlights & Accordion Itinerary + Day-wise Carousel + Summary/Stay/Transfer/Activity Tabs

import React, { useState } from 'react';
import Footer from '../components/Footer';
import PostEnquiryModal from '../components/PostEnquiryModal';
import {
  FaStar, FaBed, FaUtensils, FaBus,
  FaBinoculars, FaHotel, FaRoute,
  FaCheckCircle, FaTimesCircle
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Helmet } from 'react-helmet';

// ✅ Hero Images
import hero1 from '../assets/vietnam-hero1.jpg';
import hero2 from '../assets/vietnam-hero2.jpg';
import hero3 from '../assets/vietnam-hero3.jpg';
import hero4 from '../assets/vietnam-hero4.jpg';
import hero5 from '../assets/vietnam-hero5.jpg';
import hero6 from '../assets/vietnam-hero6.jpg';

// ✅ Itinerary Images
import day1img1 from '../assets/vietnam-day1-hoianlanterns.jpg';
import day1img2 from '../assets/vietnam-day1-hoianmarket.jpg';
import day2img1 from '../assets/vietnam-day2-goldenbridge.jpg';
import day2img2 from '../assets/vietnam-day2-danangbeach.jpg';
import day3img1 from '../assets/vietnam-day3-tranganboat.jpg';
import day3img2 from '../assets/vietnam-day3-hikingview.jpg';
import day4img1 from '../assets/vietnam-day4-halongcruise.jpg';
import day4img2 from '../assets/vietnam-day4-kayakinghalong.jpg';
import day5img1 from '../assets/vietnam-day5-hanoilake.jpg';
import day5img2 from '../assets/vietnam-day5-oldquarter.jpg';
import day6img1 from '../assets/vietnam-day6-vietnammarket.jpg';
import day6img2 from '../assets/vietnam-day6-airportdeparture.jpg';

const reviewer1 = {
  name: "Anjali Mehra",
  role: "Solo traveler from Bangalore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159432/Vietnamanjali1_ylgbr3.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159432/Vietnamanjali2_qyetuo.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159433/Vietnamanjlai3_yq4hmy.jpg"
  ],
  review:
    "Vietnam was magical for me as a solo traveler. From the chaos of Hanoi markets to the peace of Ha Long Bay, I loved every bit. The group was fun and the planning was perfect! Would love to travel with bookfortravel again :)"
};

const reviewer2 = {
  name: "Rishi Malhotra",
  role: "Couple traveler from Jaipur",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159443/vietnamrishi1_pm1jym.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159426/vietnamrishi2_nf2fkl.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159423/vietnamrishi3_wompsh.jpg"
  ],
  review:
    "We wanted something unique for our couple getaway and Vietnam delivered. Golden Bridge was surreal, and Hoi An at night was like a dream. Big shoutout to BookForTravel for such great memories!"
};

const reviewer3 = {
  name: "Tanya & Rohit Sinha",
  role: "Family travelers from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159424/vietnamtanya1_woajd4.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159424/vietnamtanya2_g0co2z.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159445/vietnamtanya3_j1j0ou.jpg"
  ],
  review:
    "Vietnam with our little one was such a smooth and memorable trip. From cruising the Mekong to exploring tunnels, everything was perfectly organized. Loved the care and ease of BookForTravel!"
};

const VietnamLuxuryEscape = () => {
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
    title: 'Arrival in Da Nang | Lantern Walk in Hoi An',
    description: 'Arrive in Da Nang and transfer to Hoi An. Explore the lantern-lit Old Town and visit vibrant markets in the evening.',
    activities: [
      'Explore Hoi An Old Town',
      'Evening Lantern Walk along Thu Bon River',
      'Local Market Visit & Street Food Sampling'
    ],
    transfers: [
      'Da Nang Airport to Hoi An Hotel Transfer',
      'Evening Local Transfers in Hoi An'
    ],
    hotel: 'Check-in at Boutique Hotel in Hoi An',
    images: [day1img1, day1img2]
  },
  {
    day: 'Day 2',
    title: 'Ba Na Hills & Golden Bridge + My Khe Beach',
    description: 'Morning trip to Ba Na Hills to walk the iconic Golden Bridge. Evening relaxation at My Khe Beach.',
    activities: [
      'Ba Na Hills Cable Car Ride',
      'Walk the Golden Bridge',
      'Relax at My Khe Beach'
    ],
    transfers: [
      'Hoi An Hotel to Ba Na Hills',
      'Transfer to Da Nang Hotel after sightseeing'
    ],
    hotel: 'Check-in at Seaside Hotel in Da Nang',
    images: [day2img1, day2img2]
  },
  {
    day: 'Day 3',
    title: 'Ninh Binh: Nature + Caves + Hiking',
    description: 'Fly to Hanoi and drive to Ninh Binh. Enjoy boat ride through Trang An caves and light hiking in lush landscapes.',
    activities: [
      'Scenic Boat Ride at Trang An',
      'Light Hiking to Viewpoints',
      'Photography in Limestone Valleys'
    ],
    transfers: [
      'Morning Flight from Da Nang to Hanoi',
      'Private Transfer from Hanoi to Ninh Binh',
      'Evening Transfer to Hanoi Hotel'
    ],
    hotel: 'Check-in at Modern Hotel in Hanoi',
    images: [day3img1, day3img2]
  },
  {
    day: 'Day 4',
    title: 'Halong Bay Overnight Cruise + Kayaking',
    description: 'Depart early for Halong Bay. Board a luxury cruise with kayaking, sunset views, and onboard meals.',
    activities: [
      'Cruise through Halong Bay',
      'Kayaking in Limestone Caves',
      'Onboard Vietnamese Dinner & Sunset Deck Experience'
    ],
    transfers: [
      'Hanoi to Halong Bay Transfer',
      'Onboard Transfers on Cruise'
    ],
    hotel: 'Overnight Stay on Halong Cruise',
    images: [day4img1, day4img2]
  },
  {
    day: 'Day 5',
    title: 'Hanoi City Tour: Lakes, Markets & Old Quarter',
    description: 'Return from cruise and enjoy city exploration in Hanoi — Hoan Kiem Lake, French Quarter, and local cafes.',
    activities: [
      'Visit Hoan Kiem Lake & Ngoc Son Temple',
      'Walk the French Quarter & Local Markets',
      'Evening Cafe Hopping in Old Quarter'
    ],
    transfers: [
      'Halong to Hanoi Return Transfer',
      'Evening Local Transfers in Hanoi'
    ],
    hotel: 'Stay at Boutique Hotel in Hanoi',
    images: [day5img1, day5img2]
  },
  {
    day: 'Day 6',
    title: 'Vietnamese Market Visit + Departure',
    description: 'Enjoy a relaxed morning exploring a traditional Vietnamese market. Proceed for your departure flight.',
    activities: [
      'Vietnamese Market Visit',
      'Last-minute Local Shopping & Relaxation'
    ],
    transfers: ['Hotel Check-out & Transfer to Hanoi Airport'],
    hotel: '',
    images: [day6img1, day6img2]
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
              <p className="font-semibold">13 Transfers</p>
            </div>
            <div>
              <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
              <p className="font-semibold">12 Activities</p>
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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {itineraryData.filter(day => day.hotel).map((day, index) => (
            <div key={index} className="border p-4 rounded-xl shadow bg-white">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <FaHotel className="text-yellow-500" /> {day.day}: {day.title}
              </h3>
              <p className="text-sm text-gray-700">{day.hotel}</p>
            </div>
          ))}
        </div>
      );

    case 'Transfers':
      return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {itineraryData.map((day, index) => (
            <div key={index} className="border p-4 rounded-xl shadow bg-white">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <FaRoute className="text-purple-500" /> {day.day}: {day.title}
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
  '5 nights stay in Vietnam with daily breakfast',
  'Airport transfers and internal travel in AC vehicle',
  'Halong Bay Day Cruise with lunch and kayaking',
  'Hanoi City Tour including Ho Chi Minh Mausoleum and Old Quarter walk',
  'Ninh Binh Tour – Tam Coc Boat Ride and Mua Caves hike',
  'Visit to local night markets and lakeside cafes',
  'Local SIM Card and daily water bottles',
  'Stay in premium 4-star hotels in Hanoi and Ninh Binh',
  'Assistance by Local Host throughout the trip',
  'Vietnam Visa Support & Documentation Assistance'
];

const exclusions = [
  'International flight tickets to and from Vietnam',
  'Meals not mentioned in the inclusions',
  'Personal expenses like tips, laundry, shopping, etc.',
  'Travel Insurance',
  'Visa Fee (if applicable, payable directly)'
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
<Helmet>
  <title>Vietnam Group Tour | Local Hosted Package Starting at ₹49,999</title>
  <meta name="description" content="Explore Vietnam’s hidden gems with BookForTravel’s Hosted Group Tour. Includes local guide, immersive stays, day-wise itinerary, and expert planning." />
  <meta name="keywords" content="Vietnam group tour, Vietnam hosted package, Hanoi, Ha Long Bay, curated Vietnam itinerary, Vietnam under 50K" />
  <meta property="og:title" content="Vietnam Group Tour by BookForTravel" />
  <meta property="og:description" content="Curated Vietnam group travel with local host. Book now for immersive experiences at the best value." />
</Helmet>

    {/* ✅ HERO CAROUSEL SECTION */}
   <div className="w-full relative z-0 pt-12">
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

      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
        <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Vietnam Cultural Escape</h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          Experience Hanoi, Halong Bay & Ninh Binh in this 5N/6D curated local-hosted journey.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 74,000</span>
            <span className="text-green-400 font-semibold">INR 61,500</span>
          </div>
          <div className="text-white">⭐ 4.8 (289 reviews)</div>
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
  <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
    <li>
      Uncover the best of Vietnam in this hosted 6-day journey — from the cultural charm of Hanoi to the magical limestone seascape of Halong Bay and the serene countryside of Ninh Binh — all guided by local experts for a deeply immersive experience.
    </li>
    <li>
      Cruise through the UNESCO-listed Halong Bay on a premium day boat with lunch on board, kayaking adventures, and panoramic views of towering limestone cliffs — a surreal natural wonder that truly lives up to its reputation.
    </li>
    <li>
      Walk through the Old Quarter of Hanoi, explore its vibrant street food culture, and visit historical landmarks like Hoan Kiem Lake and the Temple of Literature — all while guided by your friendly local host who shares hidden stories of the city.
    </li>
    <li>
      Take a journey through time in Ninh Binh — cruise on bamboo boats in Tam Coc, hike to the stunning Mua Caves viewpoint, and ride through paddy fields and karst formations — Vietnam’s countryside at its most scenic and serene.
    </li>
    <li>
      Enjoy a seamless, well-balanced trip with comfortable stays, curated sightseeing, cultural immersion, and free time to explore — perfect for solo travelers, couples, and families seeking an offbeat yet safe and hosted travel experience.
  </li>
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
    6 Days in Vietnam
  </div>
</div>

{/* ✅ ITINERARY TABS */}
<div className="max-w-[1300px] mx-auto mt-12 px-4">
  <div className="flex gap-3 md:gap-6 mb-4 overflow-x-auto md:overflow-visible scrollbar-hide">
    {['Itinerary', 'Summary', 'Activities', 'Stay', 'Transfers'].map(tab => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 flex-shrink-0 rounded-full text-sm md:text-base font-semibold transition-all duration-200 whitespace-nowrap ${
          activeTab === tab ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {renderTabContent()}
  {renderInclusionsExclusions()}
</div>

{/* ✅ GUEST REVIEWS SECTION – Vietnam */} 

<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences from Vietnam</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Anjali Mehra */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750159432/Vietnamanjali1_ylgbr3.jpg" alt="Anjali Mehra" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Anjali Mehra</p>
          <p className="text-sm text-gray-500">Solo Traveler – Bangalore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Vietnam was magical for me as a solo traveler. From the chaos of Hanoi markets to the peace of Ha Long Bay, I loved every bit. The group was fun and the planning was perfect! Would love to travel with bookfortravel again :)
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-anjali", prevEl: ".prev-anjali" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159432/Vietnamanjali2_qyetuo.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159433/Vietnamanjlai3_yq4hmy.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Anjali Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-anjali text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-anjali text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Rishi Malhotra */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750159443/vietnamrishi1_pm1jym.jpg" alt="Rishi Malhotra" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rishi Malhotra</p>
          <p className="text-sm text-gray-500">Couple Trip – Jaipur</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        We wanted something unique for our couple getaway and Vietnam delivered. Golden Bridge was surreal, and Hoi An at night was dreamy. BookForTravel made everything smooth and memorable!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rishi", prevEl: ".prev-rishi" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159426/vietnamrishi2_nf2fkl.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159423/vietnamrishi3_wompsh.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rishi Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rishi text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rishi text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Tanya & Rohit Sinha */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750159424/vietnamtanya1_woajd4.jpg" alt="Tanya & Rohit Sinha" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Tanya & Rohit Sinha</p>
          <p className="text-sm text-gray-500">Family Trip – Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Vietnam with our little one was a joy. Cruising through Mekong and exploring Cu Chi tunnels was fun and hassle-free. BookForTravel’s host made everything smooth and stress-free!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-tanya", prevEl: ".prev-tanya" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159424/vietnamtanya2_g0co2z.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750159445/vietnamtanya3_j1j0ou.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Tanya Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-tanya text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-tanya text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>
 
{/* ✅ Mobile View – Vietnam Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[{
    name: 'Anjali Mehra',
    city: 'Bangalore, India',
    avatar: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159432/Vietnamanjali1_ylgbr3.jpg',
    text: `Vietnam was magical for me as a solo traveler. From the chaos of Hanoi markets to the peace of Ha Long Bay, I loved every bit. The group was fun and the planning was perfect! Would love to travel with bookfortravel again :)`,
    images: [
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159432/Vietnamanjali2_qyetuo.jpg',
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159433/Vietnamanjlai3_yq4hmy.jpg'
    ],
    id: 'anjali'
  }, {
    name: 'Rishi Malhotra',
    city: 'Jaipur, India',
    avatar: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159443/vietnamrishi1_pm1jym.jpg',
    text: `We wanted something unique for our couple getaway and Vietnam delivered. Golden Bridge was surreal, and Hoi An was like a dream. BookForTravel made everything smooth and memorable!`,
    images: [
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159426/vietnamrishi2_nf2fkl.jpg',
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159423/vietnamrishi3_wompsh.jpg'
    ],
    id: 'rishi'
  }, {
    name: 'Tanya & Rohit Sinha',
    city: 'Delhi, India',
    avatar: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159424/vietnamtanya1_woajd4.jpg',
    text: `Vietnam with our little one was such a smooth and memorable trip. From cruising the Mekong to Cu Chi tunnels, everything was perfectly organized. Loved the care and ease of BookForTravel!`,
    images: [
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159424/vietnamtanya2_g0co2z.jpg',
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750159445/vietnamtanya3_j1j0ou.jpg'
    ],
    id: 'tanya'
  }].map((review, idx) => (
    <div key={idx} className="bg-white shadow-md rounded-xl p-4 min-w-[270px] max-w-[300px] h-[450px] snap-start flex-shrink-0 mx-2 border text-sm">
      <div className="flex items-center gap-4">
        <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
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
  defaultPackage="Vietnam Cultural Escape"
/>


{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this trip?',
      answer: 'Click on the "Post Enquiry" button and our expert will reach out within 6 hours to confirm your details.'
    }, {
      question: 'Can I extend the trip or change activities?',
      answer: 'Yes! We offer full customization on itinerary, duration, and inclusions — based on your preferences.'
    }, {
      question: 'Are flights and visa included?',
      answer: 'No, but we provide full assistance with visa and flight bookings at the best rates.'
    }, {
      question: 'Is this suitable for honeymooners and solo travelers?',
      answer: 'Yes, we customize the vibe and pace to suit all — whether romantic, family, or solo exploration.'
    }, {
      question: 'What are the payment and refund policies?',
      answer: '30% advance for confirmation. Free changes up to 15 days before travel. Refunds processed within 7–10 days.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default VietnamLuxuryEscape;
