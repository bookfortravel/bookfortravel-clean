// ✅ SrilankaLuxuryEscape.jsx – Hero, Itinerary & Review Images

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

// ✅ Hero Images – Sri Lanka
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987416/srilanka-hero4_yw8nce.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987415/srilanka-hero5_sanzk9.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987412/srilanka-hero3_mhgasr.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987409/srilanka-hero1_gz31vj.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987414/srilanka-hero6_feucwb.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987418/srilanka-hero2_sodsuh.jpg"
];


const SrilankaLuxuryEscape = () => {
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

const reviewer1 = {
  name: "Nikita Sharma",
  role: "Solo traveler from Jaipur",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita1_fvisyu.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita2_wcstja.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita3_wljehu.jpg"
  ],
  review:
    "As a solo female traveler, Sri Lanka surprised me in the best way. I explored Sigiriya, train rides, and coastal towns — all smoothly planned by BookForTravel. Felt safe, relaxed, and came back with so many memories!"
};

const reviewer2 = {
  name: "Rohit & Naina Verma",
  role: "Couple from Lucknow",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankarohit1_imqzux.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190589/srilankarohit2_zi8msd.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190589/srilankarohit3_sestrv.jpg"
  ],
  review:
    "Our Sri Lanka honeymoon was just perfect! From Galle sunsets to tea plantations in Nuwara Eliya, it was super romantic. Thanks to BookForTravel, the plan was seamless, and we got time to enjoy each moment together!"
};

const reviewer3 = {
  name: "The Menon Family",
  role: "Family from Kochi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon1_j5ursf.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon2_stjzxh.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon3_tjxniz.jpg"
  ],
  review:
    "Family trip to Sri Lanka turned out amazing! Kids loved the elephants and beaches. Everything — from cab to stays — was well arranged. BookForTravel really made our vacation peaceful, joyful, and super comfortable."
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Colombo & Galle Face Sunset',
    description: 'Arrive in Colombo and transfer to the hotel. Spend the evening enjoying a sunset walk along Galle Face Green and trying local street food.',
    activities: [
      'Private Airport Pickup from Colombo Airport',
      'Evening Walk at Galle Face Green',
      'Try Sri Lankan Street Food Delicacies'
    ],
    transfers: [
      'Colombo Airport to City Hotel Transfer',
      'Evening Transfer to Galle Face'
    ],
    hotel: 'Stay at Colonial Heritage Hotel in Colombo',
    images: [
      "https://i.postimg.cc/HLrpnKhb/srilanka-day1-galleface.jpg",
      "https://i.postimg.cc/cL41y679/srilanka-day1-streetfood.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Scenic Highlands – Tea Gardens & Train Ride',
    description: 'Travel to the highlands of Nuwara Eliya, walk through tea plantations and take a breathtaking train ride through the hills.',
    activities: [
      'Visit to Tea Plantations in Nuwara Eliya',
      'Experience Ceylon Tea Making',
      'Take the Famous Train Ride to Ella'
    ],
    transfers: [
      'Colombo to Nuwara Eliya Transfer',
      'Nuwara Eliya to Ella Train Ride'
    ],
    hotel: 'Stay at a Hill Country Retreat in Ella',
    images: [
      "https://i.postimg.cc/vZqYQM3Q/srilanka-day2-teaplantation.jpg",
      "https://i.postimg.cc/zf4qgjs6/srilanka-day2-trainride.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Little Adam’s Peak & Nine Arch Bridge',
    description: 'Hike up to Little Adam’s Peak for panoramic views, followed by a scenic photo session at the iconic Nine Arch Bridge.',
    activities: [
      'Guided Hike to Little Adam’s Peak',
      'Relax at a Cafe near the Bridge',
      'Free Time in Ella’s Boutique Markets'
    ],
    transfers: [
      'Hotel to Hiking Trail Transfer',
      'Return to Hotel via Ella Town'
    ],
    hotel: 'Stay at Scenic Mountain Hotel in Ella',
    images: [
      "https://i.postimg.cc/2jQC1n29/srilanka-day3-littleadamspeak.jpg",
      "https://i.postimg.cc/rskchpF9/srilanka-day3-ninearch.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Galle Fort & Beach Leisure in Unawatuna',
    description: 'Explore colonial Galle Fort, its cafes and boutiques, and unwind at Unawatuna Beach with optional water activities.',
    activities: [
      'Guided Walking Tour of Galle Fort',
      'Beach Time at Unawatuna',
      'Try Water Sports or Beach Cafe Lunch'
    ],
    transfers: [
      'Ella to Galle Transfer',
      'Galle to Unawatuna Transfer'
    ],
    hotel: 'Stay at a Beach Resort in Unawatuna',
    images: [
      "https://i.postimg.cc/4dtsbcZd/srilanka-day4-gallefort.jpg",
      "https://i.postimg.cc/J058SWsC/srilanka-day4-unawatuna.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Spa, Bonfire Dinner & Culture Night',
    description: 'Indulge in a rejuvenating spa experience, followed by a traditional dinner with bonfire and Sri Lankan music.',
    activities: [
      'Ayurvedic Spa Session or Massage',
      'Cultural Night with Sri Lankan Music',
      'Dinner by Bonfire at the Resort'
    ],
    transfers: [
      'Hotel to Spa Venue Transfer',
      'Evening Return to Resort'
    ],
    hotel: 'Stay at Wellness Resort near Galle',
    images: [
      "https://i.postimg.cc/Njzc3DjF/srilanka-day5-bonfiredinner.jpg",
      "https://i.postimg.cc/W13VYCjx/srilanka-day5-spa.jpg"
    ]
  },
  {
    day: 'Day 6',
    title: 'Local Shopping & Departure',
    description: 'Spend the morning exploring local shops or relaxing by the beach before heading to the airport for your departure.',
    activities: [
      'Souvenir Shopping in Colombo',
      'Relaxation Time at Resort or Cafe'
    ],
    transfers: [
      'Unawatuna to Colombo Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://i.postimg.cc/bNL8TpXQ/srilanka-day6-airport.jpg",
      "https://i.postimg.cc/vmxsbn4z/srilanka-day6-shopping.jpg"
    ]
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
          <p className="font-semibold">10 Transfers</p>
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
                    <img
                      src={img}
                      alt={`Activity ${i + 1}`}
                      className="h-[200px] w-full object-cover rounded-xl"
                    />
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
  '5 nights stay in Sri Lanka with daily breakfast',
  'Airport pickup and all intercity transfers in a private AC vehicle',
  'Colombo city tour including Galle Face Green and local markets',
  'Scenic train ride from Nuwara Eliya to Ella',
  'Guided hike to Little Adam’s Peak and Nine Arch Bridge',
  'Beach visit to Unawatuna with time for relaxation and swimming',
  'Cultural visit to Galle Fort and lighthouse area',
  'Bonfire dinner and spa session at luxury resort',
  'Assistance from Local Travel Host throughout the trip',
  'Sri Lanka Visa Support & Documentation Assistance'
];

const exclusions = [
  'International flight tickets to and from Sri Lanka',
  'Meals not mentioned in inclusions (lunch/dinner)',
  'Personal expenses like shopping, spa, and souvenirs',
  'Travel Insurance (recommended)',
  'Sri Lanka Visa Fee (payable directly at application)'
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
<div className="w-full relative z-0 pt-12">
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="w-full h-[60vh] sm:h-[80vh]"
  >
    {[
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987416/srilanka-hero4_yw8nce.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987415/srilanka-hero5_sanzk9.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987412/srilanka-hero3_mhgasr.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987409/srilanka-hero1_gz31vj.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987414/srilanka-hero6_feucwb.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987418/srilanka-hero2_sodsuh.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={`Sri Lanka Slide ${index + 1}`}
          className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>




      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
        <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Sri Lanka Luxury Escape</h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          6 Days of tea plantations, cultural gems & tropical beaches – hosted by our local expert.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 64,999</span>
            <span className="text-green-400 font-semibold">INR 49,999</span>
          </div>
          <div className="text-white">⭐ 4.9 (102 reviews)</div>
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
      Embark on the ultimate hosted 6-day journey across Sri Lanka — where misty highlands, golden beaches, and ancient heritage blend into an unforgettable escape — all curated with the warmth and wisdom of your local host.
    </li>
    <li>
      Begin in vibrant Colombo with a sunset stroll along Galle Face Green, savoring street bites and the city’s coastal rhythm before heading into Sri Lanka’s cultural and natural heartlands.
    </li>
    <li>
      Traverse rolling tea plantations, board the world-famous train to Ella, and hike Little Adam’s Peak for panoramic views that stretch beyond the horizon — serenity and adventure in perfect balance.
    </li>
    <li>
      Discover the charm of Galle Fort’s colonial lanes and unwind on the palm-lined shores of Unawatuna — where bonfire dinners and ocean breezes set the stage for coastal bliss.
    </li>
    <li>
      With every moment hosted — from curated activities and seamless transfers to warm hospitality — this Sri Lankan escape promises a deeply personal and truly immersive travel experience.
      </li>
    </ul>
  </div>
</div>


{/* ✅ TOP CAROUSEL – Sri Lanka Itinerary Images */}
<div className="max-w-[1300px] mx-auto mt-10 rounded-xl overflow-hidden relative">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{ delay: 2800 }}
    loop={true}
    pagination={{ clickable: true }}
    navigation={true}
    className="rounded-xl"
  >
    {[
      "https://i.postimg.cc/HLrpnKhb/srilanka-day1-galleface.jpg",
      "https://i.postimg.cc/cL41y679/srilanka-day1-streetfood.jpg",
      "https://i.postimg.cc/vZqYQM3Q/srilanka-day2-teaplantation.jpg",
      "https://i.postimg.cc/zf4qgjs6/srilanka-day2-trainride.jpg",
      "https://i.postimg.cc/2jQC1n29/srilanka-day3-littleadamspeak.jpg",
      "https://i.postimg.cc/rskchpF9/srilanka-day3-ninearch.jpg",
      "https://i.postimg.cc/4dtsbcZd/srilanka-day4-gallefort.jpg",
      "https://i.postimg.cc/J058SWsC/srilanka-day4-unawatuna.jpg",
      "https://i.postimg.cc/Njzc3DjF/srilanka-day5-bonfiredinner.jpg",
      "https://i.postimg.cc/W13VYCjx/srilanka-day5-spa.jpg",
      "https://i.postimg.cc/bNL8TpXQ/srilanka-day6-airport.jpg",
      "https://i.postimg.cc/vmxsbn4z/srilanka-day6-shopping.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img src={img} alt={`Sri Lanka Itinerary Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    6 Days in Sri Lanka
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

{/* ✅ GUEST REVIEWS SECTION – Fully Responsive (Sri Lanka) */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Nikita Sharma */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita1_fvisyu.jpg" alt="Nikita Sharma" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Nikita Sharma</p>
          <p className="text-sm text-gray-500">Solo traveler from Jaipur</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        As a solo female traveler, Sri Lanka surprised me in the best way. I explored Sigiriya, train rides, and coastal towns — all smoothly planned by BookForTravel. Felt safe, relaxed, and came back with so many memories!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-nikita", prevEl: ".prev-nikita" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita2_wcstja.jpg","https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita3_wljehu.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Nikita Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-nikita text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-nikita text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Rohit & Naina Verma */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankarohit1_imqzux.jpg" alt="Rohit & Naina Verma" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rohit & Naina Verma</p>
          <p className="text-sm text-gray-500">Couple from Lucknow</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Our Sri Lanka honeymoon was just perfect! From Galle sunsets to tea plantations in Nuwara Eliya, it was super romantic. Thanks to BookForTravel, the plan was seamless, and we got time to enjoy each moment together!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-verma", prevEl: ".prev-verma" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750190589/srilankarohit2_zi8msd.jpg","https://res.cloudinary.com/drvigtwgm/image/upload/v1750190589/srilankarohit3_sestrv.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Verma Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-verma text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-verma text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* The Menon Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon1_j5ursf.jpg" alt="The Menon Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Menon Family</p>
          <p className="text-sm text-gray-500">Family from Kochi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Family trip to Sri Lanka turned out amazing! Kids loved the elephants and beaches. Everything — from cab to stays — was well arranged. BookForTravel really made our vacation peaceful, joyful, and super comfortable.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-menon", prevEl: ".prev-menon" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon2_stjzxh.jpg","https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon3_tjxniz.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Menon Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-menon text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-menon text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>


{/* ✅ Mobile View – Sri Lanka Reviews Horizontal Scroll */}
  <div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
    {[{
      name: "Nikita Sharma",
      city: "Solo traveler from Jaipur",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita1_fvisyu.jpg",
      text: "As a solo female traveler, Sri Lanka surprised me in the best way. I explored Sigiriya, train rides, and coastal towns — all smoothly planned by BookForTravel. Felt safe, relaxed, and came back with so many memories!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita2_wcstja.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankanikita3_wljehu.jpg"
      ],
      id: 'nikita'
    }, {
      name: "Rohit & Naina Verma",
      city: "Couple from Lucknow",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190588/srilankarohit1_imqzux.jpg",
      text: "Our Sri Lanka honeymoon was just perfect! From Galle sunsets to tea plantations in Nuwara Eliya, it was super romantic. Thanks to BookForTravel, the plan was seamless, and we got time to enjoy each moment together!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190589/srilankarohit2_zi8msd.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190589/srilankarohit3_sestrv.jpg"
      ],
      id: 'verma'
    }, {
      name: "The Menon Family",
      city: "Family from Kochi",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon1_j5ursf.jpg",
      text: "Family trip to Sri Lanka turned out amazing! Kids loved the elephants and beaches. Everything — from cab to stays — was well arranged. BookForTravel really made our vacation peaceful, joyful, and super comfortable.",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon2_stjzxh.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750190587/srilankamenon3_tjxniz.jpg"
      ],
      id: 'menon'
    }].map((review, idx) => (
      <div key={idx} className="bg-white shadow-md rounded-xl p-4 min-w-[270px] max-w-[300px] h-[480px] snap-start flex-shrink-0 mx-2 border text-sm">
        <div className="flex items-center gap-4">
          <img src={review.avatar} alt={review.name} className="w-16 h-20 rounded-full object-cover" />
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
            <button className={`prev-${review.id} text-blue-500 text-6xl w-10 h-10 flex items-center justify-center`}>‹</button>
          </div>
          <div className="absolute top-1/2 right-1 -translate-y-1/2 z-10">
            <button className={`next-${review.id} text-blue-500 text-6xl w-10 h-10 flex items-center justify-center`}>›</button>
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
  defaultPackage="Sri Lanka Luxury Escape: Tea Valleys, Beaches & Colonial Trails"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Sri Lanka trip?',
      answer: 'Click the "Post Enquiry" button and our local expert will reach out to you within 6 hours for complete guidance.'
    }, {
      question: 'Can I customize the Sri Lanka itinerary?',
      answer: 'Yes, we offer curated customizations — from wellness retreats to cultural trails and family-friendly options.'
    }, {
      question: 'Are flights and visa services included?',
      answer: 'Flights and visa fees are not part of the base package, but we assist with documentation and the lowest available deals.'
    }, {
      question: 'Is this trip suitable for couples and families?',
      answer: 'Absolutely! Our hosted packages offer a perfect mix of romantic escapes, family bonding, and solo adventures.'
    }, {
      question: 'What’s the payment and cancellation policy?',
      answer: 'Pay 30% to confirm your booking. You can modify or cancel with no charges up to 15 days before your departure.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default SrilankaLuxuryEscape;





