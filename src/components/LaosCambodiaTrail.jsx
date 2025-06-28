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

// ✅ Laos & Cambodia Tour Hero Images
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255583/hero1_bq9qja.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255587/hero2_ykc9iv.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255590/hero3_pvqkiz.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255591/hero4_v4zqrw.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255593/hero5_gfkmxf.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255593/hero6_xhcsad.jpg"
];

// ✅ Laos & Cambodia Tour Itinerary Images
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255620/day1-1_ci6cyc.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255625/day1-2_gjyrfl.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255626/day2-1_rku1nb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255632/day2-2_enhxxn.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255630/day3-1_fmqxyn.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255635/day3-2_omdurt.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255636/day4-1_yuom3z.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255637/day4-2_vszpus.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255586/day5-1_etnheo.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255588/day5-2_ecmqk3.jpg"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255585/day6-1_zmz0uz.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255588/day6-2_wfdbuu.jpg"
  ]
};

const LaosCambodiaTrail = () => {
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

// ✅ Reviewer 1 – Sneha Pillai (Solo traveler from Kochi)
const reviewer1 = {
  name: "Sneha Pillai",
  role: "Solo traveler from Kochi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255606/sneha1_yrwvbx.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255614/sneha2_irybav.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255640/sneha3_dwo0qg.jpg"
  ],
  review:
    "This trip changed everything for me. Luang Prabang’s calm vibes and Angkor’s mystery gave me peace and purpose. As a solo traveler, I felt cared for and safe. BookForTravel nailed every detail — can’t wait to plan my next escape!"
};

// ✅ Reviewer 2 – Raj & Nisha Agarwal (Couple from Delhi)
const reviewer2 = {
  name: "Raj & Nisha Agarwal",
  role: "Couple from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255602/raj1_vgomzi.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255603/raj2_joyqo5.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255607/raj3_rfcmzw.jpg"
  ],
  review:
    "From the Mekong cruise to the sunrise at Angkor Wat, this was a journey we’ll never forget. Perfect mix of romance, adventure, and culture. Every day was thoughtfully planned by BookForTravel. We came back with smiles and stories!"
};

// ✅ Reviewer 3 – The Dasgupta Family (Family from Kolkata)
const reviewer3 = {
  name: "The Dasgupta Family",
  role: "Family from Kolkata",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255614/dasgupta1_o3cv1g.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255617/dasgupta2_v63dzm.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255618/dasgupta3_rho3j2.jpg"
  ],
  review:
    "Our kids loved every part — the waterfalls, the village visits, and the cooking class! We felt truly immersed in Laos and Cambodia’s charm. BookForTravel made it so easy and smooth. Family travel just became our new favourite thing!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Luang Prabang (Laos)',
    descriptionLabel: 'Description 1',
    description: 'Arrive in Luang Prabang and relax after hotel check-in. In the evening, hike Mount Phousi for a golden sunset and panoramic city views.',
    activities: [
      'Airport pickup and hotel check-in',
      'Evening hike to Mount Phousi for sunset',
      'Free time to explore nearby cafes'
    ],
    transfers: ['Airport to Hotel Transfer'],
    hotel: 'Stay at a Boutique Hotel in Luang Prabang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255620/day1-1_ci6cyc.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255625/day1-2_gjyrfl.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Luang Prabang Heritage & Kuang Si Falls',
    descriptionLabel: 'Description 2',
    description: 'Begin with the alms-giving ceremony at sunrise. Then visit the stunning Kuang Si Falls and end your day at the bustling Night Market.',
    activities: [
      'Alms-giving ceremony and temple visits',
      'Kuang Si Waterfalls & nature trail',
      'Local dinner & Night Market shopping'
    ],
    transfers: ['Private Sightseeing Transfers'],
    hotel: 'Stay at a Boutique Hotel in Luang Prabang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255626/day2-1_rku1nb.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255632/day2-2_enhxxn.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Mekong River Cruise to Pak Ou Caves',
    descriptionLabel: 'Description 3',
    description: 'Cruise along the Mekong River, visit the sacred Pak Ou Caves filled with Buddha statues, and explore a traditional weaving village.',
    activities: [
      'Boat ride on the Mekong River',
      'Visit Pak Ou Caves and temples',
      'Explore local village & weaving center'
    ],
    transfers: ['Hotel to Pier and Cruise Transfer'],
    hotel: 'Stay at a Boutique Hotel in Luang Prabang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255630/day3-1_fmqxyn.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255635/day3-2_omdurt.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Flight to Siem Reap (Cambodia)',
    descriptionLabel: 'Description 4',
    description: 'Fly to Siem Reap, unwind at your hotel, and enjoy a cultural evening with a traditional Khmer dinner and Apsara dance performance.',
    activities: [
      'Flight from Luang Prabang to Siem Reap',
      'Check-in and rest at hotel',
      'Khmer dinner & Apsara dance show'
    ],
    transfers: ['Airport Transfers in Both Cities'],
    hotel: 'Stay at a Heritage Hotel in Siem Reap',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255636/day4-1_yuom3z.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255637/day4-2_vszpus.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Angkor Wat Sunrise & Temples',
    descriptionLabel: 'Description 5',
    description: 'Start your day early at Angkor Wat for a breathtaking sunrise, followed by visits to Bayon, Ta Prohm, and a local village walk.',
    activities: [
      'Sunrise visit to Angkor Wat',
      'Explore Bayon & Ta Prohm temples',
      'Village walk and photo breaks'
    ],
    transfers: ['Private Temple Tour Transfers'],
    hotel: 'Stay at a Heritage Hotel in Siem Reap',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255586/day5-1_etnheo.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255588/day5-2_ecmqk3.jpg"
    ]
  },
  {
    day: 'Day 6',
    title: 'Floating Village & Khmer Cooking',
    descriptionLabel: 'Description 6',
    description: 'Explore the floating life of Tonle Sap Lake, then enjoy a hands-on Khmer cooking class and end the day with a sunset dinner.',
    activities: [
      'Boat ride to Tonle Sap Floating Village',
      'Hands-on Khmer cooking experience',
      'Sunset dinner and farewell ceremony'
    ],
    transfers: ['Lake Cruise & Activity Transfers'],
    hotel: 'Stay at a Heritage Hotel in Siem Reap',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255585/day6-1_zmz0uz.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255588/day6-2_wfdbuu.jpg"
    ]
  },
  {
    day: 'Day 7',
    title: 'Spa Morning & Departure',
    descriptionLabel: 'Description 7',
    description: 'Enjoy a relaxing spa treatment or market visit before your return flight, closing your trip with comfort and cultural reflections.',
    activities: [
      'Spa or local shopping time',
      'Hotel check-out and transfer'
    ],
    transfers: ['Hotel to Airport Transfer'],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255583/hero1_bq9qja.jpg", // Used as a visual wrap-up
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255593/hero6_xhcsad.jpg"   // Optional: end slide
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
          <p className="font-semibold">9 Transfers</p>
        </div>
        <div>
          <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
          <p className="font-semibold">15+ Activities</p>
        </div>
        <div>
          <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
          <p className="font-semibold">6 Nights Stay</p>
        </div>
      </div>

      {itineraryData.map((day, index) => (
        <div key={index} className="border rounded-lg p-4">
          <h4 className="font-semibold text-lg mb-2">
            {day.descriptionLabel} – {day.title}
          </h4>
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
  '6 nights stay in well-rated hotels across Luang Prabang and Siem Reap with daily breakfast',
  'All airport pickups and intercity transfers including flight from Laos to Cambodia',
  'Guided Mekong River cruise to Pak Ou Caves and village tour',
  'Daily sightseeing tours with private vehicle and local English-speaking guide',
  'Entry tickets to Angkor Wat, Bayon Temple, and Tonle Sap floating village',
  'Cultural experiences including the Apsara dance show and Khmer cooking class',
  'Visit to Kuang Si Falls, night market, and traditional weaving village in Laos',
  'Daily water bottles, welcome dinner in Luang Prabang, and sunset dinner in Siem Reap',
  '24x7 support from BookForTravel’s expert team during the entire trip',
  'Visa support documents and pre-travel assistance for Laos and Cambodia'
];

const exclusions = [
  'International flights to and from Southeast Asia',
  'Lunches and dinners unless mentioned in the inclusions',
  'Optional experiences like spa treatments or private photography',
  'Travel insurance (strongly recommended for all international tours)',
  'Visa fees, personal expenses, and any tipping for local guides or drivers'
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
    {/* ✅ HERO CAROUSEL SECTION – Laos & Cambodia Heritage */}
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
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750505806/hero1_bq9qja.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750505806/hero2_ykc9iv.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750505806/hero3_pvqkiz.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750505806/hero4_v4zqrw.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750505806/hero5_gfkmxf.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750505806/hero6_xhcsad.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Laos Cambodia Hero Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ OVERLAY CONTENT – Laos & Cambodia */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
        <h1 className="text-[30px] md:text-[36px] font-bold mb-2">
          Laos & Cambodia Heritage: Unforgettable Trail
        </h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          7 Days of Angkor Wat, Luang Prabang, Mekong Cruise & more — experience Southeast Asia like never before.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">₹74,999</span>
            <span className="text-green-400 font-semibold">₹59,999</span>
          </div>
          <div className="text-white">⭐ 4.6 (88 reviews)</div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
        >
          📩 Post Enquiry
        </button>
      </div>
    </div>
  
{/* ✅ TRIP SUMMARY BADGES – LAOS & CAMBODIA */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">7 Days / 6 Nights</span>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBus /> <span>Private Transfers</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBed /> <span>Hotels & Boutique Stays</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaUtensils /> <span>Breakfast & Local Meals</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBinoculars /> <span>Temples, River Cruise & Culture</span>
    </div>
  </div>

  {/* ✅ TRIP HIGHLIGHTS – LAOS & CAMBODIA */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Watch the golden sunrise over Angkor Wat’s ancient spires — a surreal moment etched in time, surrounded by misty jungles and the sacred silence of Cambodia’s past.
      </li>
      <li>
        Cruise along the Mekong River to discover mystical Pak Ou Caves, where thousands of Buddha statues sit quietly inside limestone cliffs — a spiritual pause in nature’s arms.
      </li>
      <li>
        Stroll through Luang Prabang’s UNESCO streets at dawn to witness the revered Alms Giving ceremony — an experience that connects you to the soul of Laos.
      </li>
      <li>
        Explore floating villages on the Tonlé Sap Lake, where wooden homes drift with the water, and everyday life flows with the rhythm of the great lake.
      </li>
      <li>
        Savor a traditional Khmer cooking class and dine under candlelight after a cultural Apsara dance show — blending flavor, performance, and heartfelt heritage in one evening.
      </li>
    </ul>
  </div>
</div>


{/* ✅ TOP CAROUSEL – Laos & Cambodia Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260890/day1-1_ci6cyc.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260890/day1-2_gjyrfl.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260891/day2-1_rku1nb.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260891/day2-2_enhxxn.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260891/day3-1_fmqxyn.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260891/day3-2_omdurt.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260892/day4-1_yuom3z.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260892/day4-2_vszpus.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260892/day5-1_etnheo.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260892/day5-2_ecmqk3.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260892/day6-1_zmz0uz.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750260892/day6-2_wfdbuu.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Laos & Cambodia Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    7 Days in Laos & Cambodia
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


<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* ✅ Sneha Pillai */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750255606/sneha1_yrwvbx.jpg" alt="Sneha Pillai" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Sneha Pillai</p>
          <p className="text-sm text-gray-500">Solo traveler from Kochi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        This trip changed everything for me. Luang Prabang’s calm vibes and Angkor’s mystery gave me peace and purpose. As a solo traveler, I felt cared for and safe. BookForTravel nailed every detail — can’t wait to plan my next escape!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-sneha", prevEl: ".prev-sneha" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750255614/sneha2_irybav.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255640/sneha3_dwo0qg.jpg"].map((img, index) => (
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

    {/* ✅ Raj & Nisha Agarwal */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750255602/raj1_vgomzi.jpg" alt="Raj & Nisha Agarwal" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Raj & Nisha Agarwal</p>
          <p className="text-sm text-gray-500">Couple from Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        From the Mekong cruise to the sunrise at Angkor Wat, this was a journey we’ll never forget. Perfect mix of romance, adventure, and culture. Every day was thoughtfully planned by BookForTravel. We came back with smiles and stories!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-agarwal", prevEl: ".prev-agarwal" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750255603/raj2_joyqo5.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255607/raj3_rfcmzw.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Agarwal Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-agarwal text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-agarwal text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ The Dasgupta Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750255614/dasgupta1_o3cv1g.jpg" alt="The Dasgupta Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Dasgupta Family</p>
          <p className="text-sm text-gray-500">Family from Kolkata</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Our kids loved every part — the waterfalls, the village visits, and the cooking class! We felt truly immersed in Laos and Cambodia’s charm. BookForTravel made it so easy and smooth. Family travel just became our new favourite thing!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-dasgupta", prevEl: ".prev-dasgupta" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750255617/dasgupta2_v63dzm.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255618/dasgupta3_rho3j2.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Dasgupta Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-dasgupta text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-dasgupta text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>



{/* ✅ MOBILE VIEW – Laos & Cambodia Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Sneha Pillai',
      city: 'Solo traveler from Kochi',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255606/sneha1_yrwvbx.jpg",
      text: "This trip changed everything for me. Luang Prabang’s calm vibes and Angkor’s mystery gave me peace and purpose. As a solo traveler, I felt cared for and safe. BookForTravel nailed every detail , it was amazing— can’t wait to plan my next escape!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255614/sneha2_irybav.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255640/sneha3_dwo0qg.jpg"
      ],
      id: 'sneha'
    },
    {
      name: 'Raj & Nisha Agarwal',
      city: 'Couple from Delhi',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255602/raj1_vgomzi.jpg",
      text: "From the Mekong cruise to the sunrise at Angkor Wat, this was a journey we’ll never forget. Perfect mix of romance, adventure, and culture. Every day was thoughtfully planned by BookForTravel. We came back with smiles and stories. Would love to Travel again :)",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255603/raj2_joyqo5.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255607/raj3_rfcmzw.jpg"
      ],
      id: 'raj'
    },
    {
      name: 'The Dasgupta Family',
      city: 'Family from Kolkata',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255614/dasgupta1_o3cv1g.jpg",
      text: "Our kids loved every part — the waterfalls, the village visits, and the cooking class! We felt truly immersed in Laos and Cambodia’s charm. BookForTravel made it so easy and smooth. Family travel just became our new favourite thing!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255617/dasgupta2_v63dzm.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750255618/dasgupta3_rho3j2.jpg"
      ],
      id: 'dasgupta'
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

{/* ✅ ENQUIRY MODAL – LAOS & CAMBODIA */}
<PostEnquiryModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  defaultPackage="Laos & Cambodia Heritage: Unforgettable Trail"
/>

{/* ✅ FAQ SECTION – LAOS & CAMBODIA */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        question: 'How can I book this Laos & Cambodia tour?',
        answer: 'Click on the "Post Enquiry" button and our expert will reach out within 6 hours to guide you with bookings, visa, and customizations.'
      },
      {
        question: 'Can I customize this package?',
        answer: 'Absolutely! You can extend your stay, add islands like Koh Rong, include cooking classes, luxury resorts, or temple trails based on your interests.'
      },
      {
        question: 'Are flights and visa included in the price?',
        answer: 'International flights and visa are not included. But our team provides full assistance for affordable flights and visa documentation support for both countries.'
      },
      {
        question: 'Is this tour suitable for solo travelers or families?',
        answer: 'Yes! Whether you’re a solo explorer, a couple, or a family, this tour offers history, nature, culture, and memorable activities for all.'
      },
      {
        question: 'What is the payment and cancellation policy?',
        answer: 'Book with just 30% advance. Enjoy peace of mind with flexible rescheduling or cancellations up to 15 days before departure.'
      }
    ].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default LaosCambodiaTrail;
