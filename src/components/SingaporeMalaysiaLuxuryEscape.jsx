// ✅ SingaporeMalaysiaLuxuryEscape.jsx – Hero, Itinerary & Review Images

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

// ✅ Hero Images – Singapore + Malaysia
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987763/malaysia-hero4-petronas-couple_mbpnqw.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987762/singapore-hero1-marina-couple_vnshy4.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987761/malaysia-hero6-genting-cablecar_yohbtq.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987772/singapore-hero3-sentosa-skyride_nfmgty.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987760/malaysia-hero5-batucaves-tourists_w5tzub.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987767/singapore-hero2-universal_hwu4ce.jpg"
];

// ✅ Itinerary Day-wise Images
const itineraryImages = {
  day1: [
    "https://i.postimg.cc/wvqSxG4z/singaporemalaysia-day1-airport.jpg",
    "https://i.postimg.cc/7LMFkkVX/singaporemalaysia-day1-marinabay.jpg"
  ],
  day2: [
    "https://i.postimg.cc/Xv0RmJwp/singaporemalaysia-day2-merlion.jpg",
    "https://i.postimg.cc/tTB8sN8x/singaporemalaysia-day2-universal.jpg"
  ],
  day3: [
    "https://i.postimg.cc/Y0VV3qr2/singaporemalaysia-day3-sentosa-cablecar.jpg",
    "https://i.postimg.cc/rsz3xtLY/singaporemalaysia-day3-skyride.jpg"
  ],
  day4: [
    "https://i.postimg.cc/28bg5vG1/singaporemalaysia-day4-crossborder.jpg",
    "https://i.postimg.cc/SNB3Ys1D/singaporemalaysia-day4-genting.jpg"
  ],
  day5: [
    "https://i.postimg.cc/nLkPW1FP/singaporemalaysia-day5-batucaves.jpg",
    "https://i.postimg.cc/nhq54J6Z/singaporemalaysia-day5-petronas.jpg"
  ],
  day6: [
    "https://i.postimg.cc/bv85L5hn/singaporemalaysia-day6-airport-departure.jpg",
    "https://i.postimg.cc/Hxkh17js/singaporemalaysia-day6-shopping.jpg"
  ]
};


const SingaporeMalaysiaLuxuryEscape = () => {
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

// ✅ Reviewer 1 – Neha Arora (Solo Traveler from Indore)
const reviewer1 = {
  name: "Neha Arora",
  role: "Solo traveler from Indore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192559/singaporeneha1_afdyx3.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192558/singaporeneha2_wdvc34.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192557/singaporeneha3_hzeqdd.jpg"
  ],
  review:
    "As a solo traveler, I felt completely safe and free. Sentosa, Gardens by the Bay, and shopping in KL were absolute highlights. I even made friends at Universal Studios – such a memorable trip with BookForTravel!"
};

// ✅ Reviewer 2 – Amit & Swati Deshpande (Couple from Nagpur)
const reviewer2 = {
  name: "Amit & Swati Deshpande",
  role: "Couple from Nagpur",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeamit1_oow9wz.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeamit2_smuils.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192558/singaporeamit3_xhzxzw.jpg"
  ],
  review:
    "A perfect romantic getaway! The cable car rides, night safari, and Marina Bay views were magical. Loved every curated moment of our tour. BookForTravel made our honeymoon feel truly special and effortless."
};

// ✅ Reviewer 3 – The Iyer Family (Family from Chennai)
const reviewer3 = {
  name: "The Iyer Family",
  role: "Family from Chennai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192556/singaporeiyer1_wp8ojo.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192556/singaporeiyer2_b2isss.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeiyer3_gfcbzx.jpg"
  ],
  review:
    "Our kids had a blast at Universal and the Night Safari! Everything was planned to perfection — hotels, transfers, guides. Singapore & Malaysia became the most comfortable and exciting family trip we've had so far!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Singapore & Marina Bay Evening',
    description: 'Arrive at Changi Airport and check into your hotel. In the evening, enjoy a relaxed walk and light show at Marina Bay Sands.',
    activities: [
      'Private Airport Pickup from Changi Airport',
      'Evening at Marina Bay Sands',
      'Spectra Light & Water Show Viewing'
    ],
    transfers: [
      'Airport to Hotel Transfer',
      'Evening Transfer to Marina Bay'
    ],
    hotel: 'Stay at a 4-star City Hotel in Singapore',
    images: [
      "https://i.postimg.cc/wvqSxG4z/singaporemalaysia-day1-airport.jpg",
      "https://i.postimg.cc/7LMFkkVX/singaporemalaysia-day1-marinabay.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'City Tour & Universal Studios',
    description: 'Begin with a morning city tour including Merlion Park and Chinatown, followed by an afternoon at Universal Studios Singapore.',
    activities: [
      'Singapore City Tour: Merlion, Chinatown, Little India',
      'Full Access to Universal Studios',
      'Dinner at Malaysian Food Street'
    ],
    transfers: [
      'Hotel to Universal Studios Transfer',
      'Return to Hotel'
    ],
    hotel: 'Stay at a 4-star City Hotel in Singapore',
    images: [
      "https://i.postimg.cc/Xv0RmJwp/singaporemalaysia-day2-merlion.jpg",
      "https://i.postimg.cc/tTB8sN8x/singaporemalaysia-day2-universal.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Sentosa Adventures & Cable Car Ride',
    description: 'Take a cable car to Sentosa Island, enjoy thrilling rides and panoramic views with optional beach time or Skyride.',
    activities: [
      'Sentosa Cable Car Experience',
      'Skyride & Luge Adventure',
      'Optional Time at Siloso Beach'
    ],
    transfers: [
      'Hotel to Sentosa Round Trip',
      'Intra-Island Shuttle Transfers'
    ],
    hotel: 'Stay at a 4-star City Hotel in Singapore',
    images: [
      "https://i.postimg.cc/Y0VV3qr2/singaporemalaysia-day3-sentosa-cablecar.jpg",
      "https://i.postimg.cc/rsz3xtLY/singaporemalaysia-day3-skyride.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Cross Border to Malaysia & Genting Highlands',
    description: 'Cross into Malaysia and ascend Genting Highlands via scenic cable car. Enjoy entertainment zones or casino visit.',
    activities: [
      'Cross Border Travel to Malaysia',
      'Genting Cable Car Ride',
      'Visit Indoor Theme Park or Casino'
    ],
    transfers: [
      'Singapore to Genting via A/C Coach',
      'Cable Car to Genting Resort'
    ],
    hotel: 'Stay at a Premium Resort in Genting Highlands',
    images: [
      "https://i.postimg.cc/28bg5vG1/singaporemalaysia-day4-crossborder.jpg",
      "https://i.postimg.cc/SNB3Ys1D/singaporemalaysia-day4-genting.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Kuala Lumpur City Tour & Twin Towers',
    description: 'Explore KL’s culture and architecture — visit Batu Caves, Independence Square, and end the day at Petronas Towers.',
    activities: [
      'Visit Batu Caves',
      'Kuala Lumpur City Tour',
      'Sunset Photos at Petronas Towers'
    ],
    transfers: [
      'Genting to KL Transfer',
      'KL Sightseeing Coach'
    ],
    hotel: 'Stay at a 4-star Hotel in Kuala Lumpur',
    images: [
      "https://i.postimg.cc/nLkPW1FP/singaporemalaysia-day5-batucaves.jpg",
      "https://i.postimg.cc/nhq54J6Z/singaporemalaysia-day5-petronas.jpg"
    ]
  },
  {
    day: 'Day 6',
    title: 'Local Markets & Departure from KL Airport',
    description: 'Shop for souvenirs in Kuala Lumpur’s local markets or malls, and proceed to the airport for your return flight.',
    activities: [
      'Morning Visit to Central Market or Pavilion Mall',
      'Buy Local Chocolates, Snacks & Souvenirs'
    ],
    transfers: [
      'Hotel to KLIA Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://i.postimg.cc/bv85L5hn/singaporemalaysia-day6-airport-departure.jpg",
      "https://i.postimg.cc/Hxkh17js/singaporemalaysia-day6-shopping.jpg"
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
  '5 nights stay in Singapore & Malaysia with daily breakfast',
  'Airport pickup and intercity travel in private AC vehicle',
  'Singapore city tour covering Marina Bay Sands, Merlion, and Gardens by the Bay',
  'Visit to Sentosa Island with Cable Car & SEA Aquarium entry',
  'Night Safari or River Wonders Experience in Singapore',
  'Guided tour of Kuala Lumpur including Petronas Towers & Batu Caves',
  'Day trip to Genting Highlands with Cable Car Ride',
  'Cultural and shopping experience at Bukit Bintang and Little India',
  'Assistance from Local Travel Host throughout the trip',
  'Visa Support & Documentation Assistance for Singapore and Malaysia'
];

const exclusions = [
  'International flight tickets to and from Singapore/Malaysia',
  'Meals not mentioned in inclusions (lunch/dinner)',
  'Personal expenses like shopping, spa, and entertainment shows',
  'Travel Insurance (highly recommended)',
  'Visa Fee (payable directly during application)'
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
{/* ✅ HERO CAROUSEL SECTION – Singapore + Malaysia */}
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
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987763/malaysia-hero4-petronas-couple_mbpnqw.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987762/singapore-hero1-marina-couple_vnshy4.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987761/malaysia-hero6-genting-cablecar_yohbtq.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987772/singapore-hero3-sentosa-skyride_nfmgty.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987760/malaysia-hero5-batucaves-tourists_w5tzub.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749987767/singapore-hero2-universal_hwu4ce.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={`Singapore-Malaysia Slide ${index + 1}`}
          className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>






      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
        <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Singapore & Malaysia Luxury Escape</h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          6 Days of skyline marvels, tropical adventures & cross-country luxury – hosted by our local expert.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 72,999</span>
            <span className="text-green-400 font-semibold">INR 59,999</span>
          </div>
          <div className="text-white">⭐ 4.8 (87 reviews)</div>
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
        Experience the best of Singapore and Malaysia in 6 unforgettable days — from ultra-modern skylines to lush highlands and cultural gems — hosted by a local expert ensuring seamless travel and insider experiences.
      </li>
      <li>
        Begin your journey in Singapore: marvel at Marina Bay Sands, explore Gardens by the Bay, and dive into thrills at Universal Studios before crossing into Malaysia’s vibrant cultural tapestry.
      </li>
      <li>
        Discover Kuala Lumpur’s iconic Petronas Towers, stroll through the colorful Batu Caves, and ride the scenic cable car to Genting Highlands for cool mountain air and adventure.
      </li>
      <li>
        From Sentosa’s beach vibes to Chinatown’s local flavors and the bustling street markets of KL, this trip fuses city life, nature, and rich heritage into one perfectly curated itinerary.
      </li>
      <li>
        With every detail taken care of — from luxury stays to expert-guided sightseeing — this escape offers the comfort, fun, and immersive connection only a hosted tour can deliver.
      </li>
    </ul>
  </div>
</div>
{/* ✅ TOP CAROUSEL – Singapore & Malaysia Itinerary Images */}
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
      "https://i.postimg.cc/wvqSxG4z/singaporemalaysia-day1-airport.jpg",
      "https://i.postimg.cc/7LMFkkVX/singaporemalaysia-day1-marinabay.jpg",
      "https://i.postimg.cc/Xv0RmJwp/singaporemalaysia-day2-merlion.jpg",
      "https://i.postimg.cc/tTB8sN8x/singaporemalaysia-day2-universal.jpg",
      "https://i.postimg.cc/Y0VV3qr2/singaporemalaysia-day3-sentosa-cablecar.jpg",
      "https://i.postimg.cc/rsz3xtLY/singaporemalaysia-day3-skyride.jpg",
      "https://i.postimg.cc/28bg5vG1/singaporemalaysia-day4-crossborder.jpg",
      "https://i.postimg.cc/SNB3Ys1D/singaporemalaysia-day4-genting.jpg",
      "https://i.postimg.cc/nLkPW1FP/singaporemalaysia-day5-batucaves.jpg",
      "https://i.postimg.cc/nhq54J6Z/singaporemalaysia-day5-petronas.jpg",
      "https://i.postimg.cc/bv85L5hn/singaporemalaysia-day6-airport-departure.jpg",
      "https://i.postimg.cc/Hxkh17js/singaporemalaysia-day6-shopping.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Singapore-Malaysia Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>


  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    6 Days in Singapore & Malaysia
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

{/* ✅ GUEST REVIEWS SECTION – Singapore & Malaysia */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Neha Arora */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750192559/singaporeneha1_afdyx3.jpg" alt="Neha Arora" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Neha Arora</p>
          <p className="text-sm text-gray-500">Solo traveler from Indore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        As a solo traveler, I felt completely safe and free. Sentosa, Gardens by the Bay, and shopping in KL were absolute highlights. I even made friends at Universal Studios – such a memorable trip with BookForTravel!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-neha", prevEl: ".prev-neha" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192558/singaporeneha2_wdvc34.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192557/singaporeneha3_hzeqdd.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Neha Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-neha text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-neha  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>


        </div>
      </Swiper>
    </div>

    {/* Amit & Swati Deshpande */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeamit1_oow9wz.jpg" alt="Amit & Swati Deshpande" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Amit & Swati Deshpande</p>
          <p className="text-sm text-gray-500">Couple from Nagpur</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        A perfect romantic getaway! The cable car rides, night safari, and Marina Bay views were magical. Loved every curated moment of our tour. BookForTravel made our honeymoon feel truly special and effortless.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-amit", prevEl: ".prev-amit" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeamit2_smuils.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192558/singaporeamit3_xhzxzw.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Amit Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-amit text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-amit  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>


        </div>
      </Swiper>
    </div>

    {/* The Iyer Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750192556/singaporeiyer1_wp8ojo.jpg" alt="The Iyer Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Iyer Family</p>
          <p className="text-sm text-gray-500">Family from Chennai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Our kids had a blast at Universal and the Night Safari! Everything was planned to perfection — hotels, transfers, guides. Singapore & Malaysia became the most comfortable and exciting family trip we've had so far!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-iyer", prevEl: ".prev-iyer" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192556/singaporeiyer2_b2isss.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeiyer3_gfcbzx.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Iyer Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-iyer text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-iyer  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>


        </div>
      </Swiper>
    </div>
  </div>


{/* ✅ Mobile View – Singapore & Malaysia Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Neha Arora',
      city: 'Solo traveler from Indore',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192559/singaporeneha1_afdyx3.jpg",
      text: `As a solo traveler, I felt completely safe and free. Sentosa, Gardens by the Bay, and shopping in KL were absolute highlights. I even made friends at Universal Studios – such a memorable trip with BookForTravel!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192558/singaporeneha2_wdvc34.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192557/singaporeneha3_hzeqdd.jpg"
      ],
      id: 'neha'
    },
    {
      name: 'Amit & Swati Deshpande',
      city: 'Couple from Nagpur',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeamit1_oow9wz.jpg",
      text: `A perfect romantic getaway! The cable car rides, night safari, and Marina Bay views were magical. Loved every curated moment of our tour. BookForTravel made our honeymoon feel truly special and effortless.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeamit2_smuils.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192558/singaporeamit3_xhzxzw.jpg"
      ],
      id: 'amit'
    },
    {
      name: 'The Iyer Family',
      city: 'Family from Chennai',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192556/singaporeiyer1_wp8ojo.jpg",
      text: `Our kids had a blast at Universal and the Night Safari! Everything was planned to perfection — hotels, transfers, guides. Singapore & Malaysia became the most comfortable and exciting family trip we've had so far!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192556/singaporeiyer2_b2isss.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750192555/singaporeiyer3_gfcbzx.jpg"
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
  defaultPackage="Singapore + Malaysia Luxury Escape: Skylines, Islands & Culture Trails"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Singapore + Malaysia tour?',
      answer: 'Click the "Post Enquiry" button and one of our local travel experts will connect with you within 6 hours to assist you end-to-end.'
    }, {
      question: 'Is it possible to customize this itinerary?',
      answer: 'Yes! We can personalize everything — whether it’s adding Sentosa activities, Malaysian islands, or hotel upgrades.'
    }, {
      question: 'Does the package include flights and visa?',
      answer: 'Flights and visa are not included in the base package, but we offer full assistance for the lowest flight fares and documentation.'
    }, {
      question: 'Is it good for honeymooners and families?',
      answer: 'Yes! This is one of our most popular dual-country itineraries for couples, families, and solo explorers.'
    }, {
      question: 'What is your payment and cancellation policy?',
      answer: 'You pay 30% to reserve your spot. Flexible cancellation or date modification available up to 15 days prior.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default SingaporeMalaysiaLuxuryEscape;







