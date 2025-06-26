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


const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239069/hero1_ddxvug.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239073/hero2_lnjc0f.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239074/hero3_osani9.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239076/hero4_atkj1w.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239079/hero5_xm6gzm.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239082/hero6_z1ina5.jpg"
];


const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239050/day1-1_fzswkm.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239048/day1-2_lrp7sg.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239054/day2-1_uq8nav.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239055/day2-2_sbwhba.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239057/day3-1_yj0occ.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239060/day3-2_vnrcy4.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239061/day4-1_r6q52p.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239064/day4-2_bbidjz.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239065/day5-1_yvkfwq.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239068/day5-2_ouxmsh.jpg"
  ]
};

const SeychellesDreamEscape = () => {
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

// ✅ Reviewer 1 – Sneha Kulkarni (Solo Traveler from Bangalore)
const reviewer1 = {
  name: "Sneha Kulkarni",
  role: "Solo traveler from Bangalore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239606/sneha1_eutzng.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239612/sneha2_sxrmgd.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239613/sneha3_vcgzps.jpg"
  ],
  review:
    "Traveling solo to Seychelles was the best decision I’ve made this year! Everything from beaches to local food felt warm and welcoming. BookForTravel took care of all the details, making it so smooth. I came back with a full heart and sun-kissed memories."
};

// ✅ Reviewer 2 – Ankit & Roshni Mehra (Couple from Mumbai)
const reviewer2 = {
  name: "Ankit & Roshni Mehra",
  role: "Couple from Mumbai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239046/ankit1_wnjrne.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239047/ankit2_dw3mec.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239049/ankit3_cbstja.jpg"
  ],
  review:
    "We wanted a peaceful yet romantic break and Seychelles was perfect! The island hopping and beach dinners were dreamy. BookForTravel gave us a curated and hassle-free experience. Totally loved the planning and personal touches throughout the trip!"
};

// ✅ Reviewer 3 – The Iyer Family (Family from Chennai)
const reviewer3 = {
  name: "The Iyer Family",
  role: "Family from Chennai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239083/iyer1_qc0s6f.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239086/iyer2_zvawcb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239589/iyer3_cjc2gz.jpg"
  ],
  review:
    "Seychelles with kids turned out to be a fabulous idea! The beach activities were safe, cultural walks were fun, and everything was well planned. Thanks to BookForTravel, we could just relax and enjoy. Every family deserves a trip like this!"
};
const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Mahé & Beach Walk',
    description: 'Arrive in Mahé, meet your local host, and unwind with a serene beach walk at Beau Vallon as you soak in the tropical vibes of Seychelles.',
    activities: [
      'Airport pickup and hotel check-in',
      'Evening beach walk at Beau Vallon',
      'Relax at your beachfront resort'
    ],
    transfers: [
      'Airport to Resort Transfer'
    ],
    hotel: 'Stay at a Beachfront Resort in Mahé',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239050/day1-1_fzswkm.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239048/day1-2_lrp7sg.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Island Hopping – Praslin & La Digue',
    description: 'Experience Seychelles by sea with a full-day island hopping tour to Praslin and La Digue. Visit Anse Lazio and cycle through lush island paths.',
    activities: [
      'Ferry to Praslin & La Digue',
      'Anse Lazio Beach visit',
      'Cycle tour through La Digue village'
    ],
    transfers: [
      'Roundtrip Ferry Transfers to Islands'
    ],
    hotel: 'Stay at a Beachfront Resort in Mahé',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239054/day2-1_uq8nav.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239055/day2-2_sbwhba.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Snorkeling & Marine Exploration',
    description: 'Discover Seychelles’ marine beauty with a guided snorkeling trip in Sainte Anne Marine Park. Perfect for spotting tropical fish and vibrant reefs.',
    activities: [
      'Boat tour of Sainte Anne Marine Park',
      'Snorkeling with gear included',
      'Picnic lunch on a small island'
    ],
    transfers: [
      'Hotel to Jetty and Boat Transfers'
    ],
    hotel: 'Stay at a Beachfront Resort in Mahé',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239057/day3-1_yj0occ.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239060/day3-2_vnrcy4.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Creole Culture & Local Crafts',
    description: 'Immerse yourself in Creole life with a guided cultural day—explore spice gardens, taste local dishes, and shop at traditional craft markets.',
    activities: [
      'Creole cuisine tasting tour',
      'Visit to spice garden & distillery',
      'Craft shopping at local markets'
    ],
    transfers: [
      'Private Transfers for Sightseeing'
    ],
    hotel: 'Stay at a Beachfront Resort in Mahé',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239061/day4-1_r6q52p.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239064/day4-2_bbidjz.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Beach Time & Departure',
    description: 'Enjoy a slow morning at the beach, capture final memories with a photo session, and head to the airport with hearts full of joy.',
    activities: [
      'Free time at the beach',
      'Farewell photoshoot by the sea'
    ],
    transfers: [
      'Resort to Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239065/day5-1_yvkfwq.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239068/day5-2_ouxmsh.jpg"
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
          <p className="font-semibold">8 Transfers</p>
        </div>
        <div>
          <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
          <p className="font-semibold">14+ Activities</p>
        </div>
        <div>
          <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
          <p className="font-semibold">4 Nights Stay</p>
        </div>
      </div>

      {itineraryData.map((day, index) => (
        <div key={index} className="border rounded-lg p-4">
          <h4 className="font-semibold text-lg mb-2">{day.day} – {day.title}</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-1">
                <FaBinoculars /> Activities
              </div>
              <ul className="list-disc list-inside text-sm">
                {day.activities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold mb-1">
                <FaRoute /> Transfers
              </div>
              <ul className="list-disc list-inside text-sm">
                {day.transfers.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold mb-1">
                <FaHotel /> Hotel
              </div>
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
  '4 nights stay in scenic beachfront resorts with daily breakfast',
  'Airport pickup and all inter-island transfers by private vehicle & ferry',
  'Leisure beach walk at Beau Vallon and cultural immersion',
  'Full-day guided Island Hopping tour to Praslin & La Digue',
  'Snorkeling experience at Sainte Anne Marine National Park',
  'Creole food tasting and visit to local spice garden & crafts market',
  'Evening Creole dinner and live cultural music on Day 4',
  'Farewell photo session and assistance with local souvenirs',
  '24x7 support from BookForTravel’s local host in Seychelles',
  'Seychelles Visa guidance and documentation assistance'
];

const exclusions = [
  'International flights to and from Seychelles',
  'Lunch and dinner not explicitly mentioned above',
  'Personal expenses like shopping, spa treatments, and tips',
  'Travel Insurance (strongly recommended for international trips)',
  'Visa fee and any entry charges not listed under inclusions'
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
return(
<>
  {/* ✅ HERO CAROUSEL SECTION – Seychelles Dream Escape */}
  <div className="w-full relative">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="w-full h-[60vh] sm:h-[80vh]"
    >
      {[
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239069/hero1_ddxvug.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239073/hero2_lnjc0f.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239074/hero3_osani9.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239076/hero4_atkj1w.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239079/hero5_xm6gzm.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239082/hero6_z1ina5.jpg"
      ].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Seychelles Hero Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* ✅ OVERLAY CONTENT – Seychelles */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
      <h1 className="text-[30px] md:text-[36px] font-bold mb-2">
        Seychelles Dream Escape: Sand & Serenity
      </h1>
      <p className="text-[16px] md:text-[18px] mb-2">
        5 Days of island hopping, white sand beaches, snorkeling & Creole flavors with local flair.
      </p>

      <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-300">₹99,999</span>
          <span className="text-green-400 font-semibold">₹79,999</span>
        </div>
        <div className="text-white">⭐ 4.8 (103 reviews)</div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
      >
        📩 Post Enquiry
      </button>
    </div>
  </div>



{/* ✅ TRIP SUMMARY BADGES – SEYCHELLES */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">5 Days / 4 Nights</span>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBus /> <span>Private Transfers</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBed /> <span>Stay</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaUtensils /> <span>Breakfast</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBinoculars /> <span>Island Activities</span>
    </div>
  </div>

  {/* ✅ TRIP HIGHLIGHTS – SEYCHELLES */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Set off on a hosted 5-day tropical escape across Seychelles — where powdery white beaches, turquoise waters, and vibrant Creole culture meet serene island life and immersive adventures.
      </li>
      <li>
        Wander the soft shores of Beau Vallon, savor the sunset by the Indian Ocean, and stroll through Mahé’s colorful markets for a taste of local flavors and rhythms.
      </li>
      <li>
        Hop across the iconic islands of Praslin and La Digue, discover Anse Lazio’s postcard beauty, and cycle through palm-lined trails past granite cliffs and quiet coves.
      </li>
      <li>
        Snorkel in crystal-clear waters at Sainte Anne Marine Park, spot exotic fish and coral reefs, and feel the calm of the ocean as your boat cruises through the tropics.
      </li>
      <li>
        Dive into Creole heritage with guided culinary experiences, local craft markets, and laid-back beach mornings before bidding goodbye to this Indian Ocean paradise.
      </li>
    </ul>
  </div>
</div>


{/* ✅ TOP CAROUSEL – Seychelles Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239050/day1-1_fzswkm.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239048/day1-2_lrp7sg.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239054/day2-1_uq8nav.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239055/day2-2_sbwhba.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239057/day3-1_yj0occ.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239060/day3-2_vnrcy4.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239061/day4-1_r6q52p.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239064/day4-2_bbidjz.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239065/day5-1_yvkfwq.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239068/day5-2_ouxmsh.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Seychelles Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    5 Days in Seychelles
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

{/* ✅ GUEST REVIEWS SECTION – Seychelles */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* ✅ Sneha Kulkarni */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750239606/sneha1_eutzng.jpg" alt="Sneha Kulkarni" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Sneha Kulkarni</p>
          <p className="text-sm text-gray-500">Solo traveler from Bangalore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Traveling solo to Seychelles was the best decision I’ve made this year! Everything from beaches to local food felt warm and welcoming. BookForTravel took care of all the details, making it so smooth. I came back with a full heart and sun-kissed memories.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-sneha", prevEl: ".prev-sneha" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750239612/sneha2_sxrmgd.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239613/sneha3_vcgzps.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Sneha Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-sneha text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-sneha text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ Ankit & Roshni Mehra */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750239046/ankit1_wnjrne.jpg" alt="Ankit & Roshni Mehra" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Ankit & Roshni Mehra</p>
          <p className="text-sm text-gray-500">Couple from Mumbai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        We wanted a peaceful yet romantic break and Seychelles was perfect! The island hopping and beach dinners were dreamy. BookForTravel gave us a curated and hassle-free experience. Totally loved the planning and personal touches throughout the trip!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-ankit", prevEl: ".prev-ankit" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750239047/ankit2_dw3mec.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239049/ankit3_cbstja.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Ankit Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-ankit text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-ankit text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ The Iyer Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750239083/iyer1_qc0s6f.jpg" alt="The Iyer Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Iyer Family</p>
          <p className="text-sm text-gray-500">Family from Chennai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Seychelles with kids turned out to be a fabulous idea! The beach activities were safe, cultural walks were fun, and everything was well planned. Thanks to BookForTravel, we could just relax and enjoy. Every family deserves a trip like this!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-iyer", prevEl: ".prev-iyer" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750239086/iyer2_zvawcb.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239589/iyer3_cjc2gz.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Iyer Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-iyer text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-iyer text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>




<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Sneha Kulkarni',
      city: 'Solo traveler from Bangalore',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239606/sneha1_eutzng.jpg",
      text: "Traveling solo to Seychelles was the best decision I’ve made this year! Everything from beaches to local food felt warm and welcoming. BookForTravel took care of all the details, making it so smooth. I came back with a full heart and sun-kissed memories.",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239612/sneha2_sxrmgd.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239613/sneha3_vcgzps.jpg"
      ],
      id: 'sneha'
    },
    {
      name: 'Ankit & Roshni Mehra',
      city: 'Couple from Mumbai',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239046/ankit1_wnjrne.jpg",
      text: "We wanted a peaceful yet romantic break and Seychelles was perfect! The island hopping and beach dinners were dreamy. BookForTravel gave us a curated and hassle-free experience. Totally loved the planning and personal touches throughout the trip!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239047/ankit2_dw3mec.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239049/ankit3_cbstja.jpg"
      ],
      id: 'ankit'
    },
    {
      name: 'The Iyer Family',
      city: 'Family from Chennai',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239083/iyer1_qc0s6f.jpg",
      text: "Seychelles with kids turned out to be a fabulous idea! The beach activities were safe, cultural walks were fun, and everything was well planned. Thanks to BookForTravel, we could just relax and enjoy. Every family deserves a trip like this. Would to travel gain with bookfortravel:)",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239086/iyer2_zvawcb.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750239589/iyer3_cjc2gz.jpg"
      ],
      id: 'iyer'
    }
  ].map((review, idx) => (
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
  defaultPackage="Seychelles Dream Escape: Sand & Serenity"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        question: 'How do I book this Seychelles trip?',
        answer: 'Click the "Post Enquiry" button and our expert will contact you within 6 hours to assist with planning and booking.'
      },
      {
        question: 'Can I customize this Seychelles itinerary?',
        answer: 'Absolutely! You can add island stays, extend your trip, upgrade hotels, or personalize it with diving, honeymoon setups, and more.'
      },
      {
        question: 'Are flights and visas included?',
        answer: 'Flights and visa fees are not included, but we offer full support in booking flights and guiding you through the Seychelles Visa-Free entry process for Indians.'
      },
      {
        question: 'Is this package good for couples, solo travelers, or families?',
        answer: 'Yes! It’s perfect for all — honeymooners, solo beach lovers, and families seeking a serene island escape with activities for all ages.'
      },
      {
        question: 'What’s the booking and cancellation policy?',
        answer: 'Book with just 30% advance. Enjoy flexible changes or cancellations up to 15 days before your departure — worry-free travel guaranteed.'
      }
    ].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default SeychellesDreamEscape;




