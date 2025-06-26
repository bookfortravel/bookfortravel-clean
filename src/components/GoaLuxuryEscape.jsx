

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

// ✅ Hero Images – Goa
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020113/goa-hero1-beach-shack-party_lkr76v.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020115/goa-hero2-dudhsagar-falls_ymvokl.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020118/goa-hero3-candlelight-dinner_hgbnha.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020124/goa-hero4-anjuna-market_gdxaav.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020121/goa-hero5-sunrise-meditation_v59trb.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020122/goa-hero6-beach-party-night_xmwzfe.jpg"
];

// ✅ Itinerary Day-wise Images – Goa (2 per day)
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020107/goa-act1-airport-arrival_u2n6fa.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020105/goa-act2-baga-sunset-drinks_vos9hs.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020106/goa-act3-dudhsagar-jeep_wetuef.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020108/goa-act4-spice-plantation_nrqfil.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020117/goa-act5-fort-aguada_bmxjt9.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020115/goa-act7-anjuna-market_qhlzkw.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020111/goa-act8-sunrise-yoga_cpr4hs.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020107/goa-act6-beach-party_mdb7d4.jpg"
  ]
};



const GoaLuxuryEscape = () => {
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

// ✅ Reviewer 1 – Aditi Chauhan (Solo Traveler from Delhi)
const reviewer1 = {
  name: "Aditi Chauhan",
  role: "Solo traveler from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225684/goaaditi1_o8stny.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225684/goaaditi2_a3kqfc.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225686/goaaditi3_s5twnm.jpg"
  ],
  review:
    "As a solo girl traveler, Goa felt like freedom! Morning cafés near Anjuna, flea markets, and peaceful beach walks were the highlights. Safe, smooth, and super fun – thank you BookForTravel for giving me this perfect solo break!"
};

// ✅ Reviewer 2 – Rahul & Sneha Jain (Couple from Jaipur)
const reviewer2 = {
  name: "Rahul & Sneha Jain",
  role: "Couple travelers from Jaipur",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225701/goarahul1_osrtdo.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225703/goarahul2_t3umw5.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225705/goarahul3_ja540k.jpg"
  ],
  review:
    "From beach sunsets to cute bike rides and delicious seafood – Goa was made for couples like us. Everything was planned so well, we didn’t worry about a thing. Loved every second – thanks BookForTravel for this romantic escape!"
};

// ✅ Reviewer 3 – The Patil Family (Family from Pune)
const reviewer3 = {
  name: "The Patil Family",
  role: "Family from Pune",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225695/goapatil1_msyrop.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225696/goapatil2_xz5b2t.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225698/goapatil3_hncojx.jpg"
  ],
  review:
    "We went with our kids and parents — full family trip! Dolphin spotting, fort visits, and fun Goan meals made memories for a lifetime. Everything was smooth, safe, and desi-family friendly. BookForTravel team was fantastic!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Goa & Beachfront Welcome',
    description: 'Arrive in Goa and check into your resort near Baga Beach. Relax with sunset drinks and light music on the beach.',
    activities: [
      'Airport Pickup from Goa Dabolim Airport',
      'Welcome Drinks at Baga Beach Shack',
      'Sunset Beach Walk & Chill Vibes'
    ],
    transfers: [
      'Airport to Baga Resort Transfer'
    ],
    hotel: 'Stay at Beach Resort near Baga Beach',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020107/goa-act1-airport-arrival_u2n6fa.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020105/goa-act2-baga-sunset-drinks_vos9hs.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Adventure Day – Dudhsagar & Spice Trail',
    description: 'Head out for an adventure to Dudhsagar Falls via jeep followed by a cultural visit to a local spice plantation with Goan lunch.',
    activities: [
      'Dudhsagar Falls Jeep Safari',
      'Spice Plantation Guided Tour',
      'Traditional Goan Lunch in the Plantation Garden'
    ],
    transfers: [
      'Roundtrip Transfers from Resort'
    ],
    hotel: 'Stay at Beach Resort near Baga Beach',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020106/goa-act3-dudhsagar-jeep_wetuef.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020108/goa-act4-spice-plantation_nrqfil.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Culture & Forts – Aguada & Anjuna Market',
    description: 'Explore Fort Aguada in the morning followed by a vibrant shopping and café-hopping session at Anjuna Flea Market.',
    activities: [
      'Visit to Fort Aguada & Lighthouse',
      'Shopping at Anjuna Flea Market',
      'Café Time at Artisanal Beach Cafés'
    ],
    transfers: [
      'Morning & Afternoon Transfers'
    ],
    hotel: 'Stay at Beach Resort near Baga Beach',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020117/goa-act5-fort-aguada_bmxjt9.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020115/goa-act7-anjuna-market_qhlzkw.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Yoga Morning & Beach Party Sendoff',
    description: 'Start the day with sunrise yoga by the beach. Enjoy a free afternoon before heading for a lively farewell beach party.',
    activities: [
      'Sunrise Yoga by the Beach',
      'Free Time for Shopping or Massage',
      'Evening Beach Party with Live DJ & Drinks'
    ],
    transfers: [
      'Evening Transfer to Party Venue'
    ],
    hotel: 'Stay at Beach Resort near Baga Beach',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020111/goa-act8-sunrise-yoga_cpr4hs.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020107/goa-act6-beach-party_mdb7d4.jpg"
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
          <p className="font-semibold">6 Transfers</p>
        </div>
        <div>
          <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
          <p className="font-semibold">10+ Activities</p>
        </div>
        <div>
          <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
          <p className="font-semibold">3 Nights Stay</p>
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
  '3 nights premium resort stay near Baga Beach with daily breakfast',
  'Airport pickup and drop in private AC vehicle',
  'North Goa sightseeing tour – Baga, Calangute, Fort Aguada & Anjuna Market',
  'Day trip to Dudhsagar Waterfalls and Spice Plantation with lunch',
  'Evening beach party experience with curated entry to top shack or club',
  'Sunrise yoga session by the beach (optional)',
  'Private local guide for full-day sightseeing',
  'All internal transfers in comfortable AC vehicle',
  'Dedicated trip manager for local assistance & coordination',
  'GST, tolls, and all local taxes included'
];

const exclusions = [
  'Flight or train tickets to and from Goa',
  'Lunch and dinner (except day 2 lunch at plantation)',
  'Personal expenses such as shopping or club entries not in package',
  'Any adventure activities not listed in inclusions',
  'Travel insurance or medical coverage (optional)'
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
    {/* ✅ HERO CAROUSEL SECTION – GOA TOUR */}
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
 "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020113/goa-hero1-beach-shack-party_lkr76v.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020115/goa-hero2-dudhsagar-falls_ymvokl.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020118/goa-hero3-candlelight-dinner_hgbnha.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020124/goa-hero4-anjuna-market_gdxaav.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020121/goa-hero5-sunrise-meditation_v59trb.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020122/goa-hero6-beach-party-night_xmwzfe.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Goa Slide ${index + 1}`}
              className="w-full h-full object-cover"
          />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
        <h1 className="text-[30px] md:text-[36px] font-bold mb-2">Goa Vibes: Beaches, Shacks & Parties</h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          4 Days of sun, sand, forts, waterfalls & vibrant nights — an unforgettable tropical escape.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 27,999</span>
            <span className="text-green-400 font-semibold">INR 19,999</span>
          </div>
          <div className="text-white">⭐ 4.6 (98 reviews)</div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
        >
          📩 Post Enquiry
        </button>
      </div>
    </div>


{/* ✅ TRIP SUMMARY BADGES – GOA */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">4 Days / 3 Nights</span>
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
      <FaBinoculars /> <span>Sightseeing</span>
    </div>
  </div>

  {/* ✅ TRIP HIGHLIGHTS – GOA */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Embark on a vibrant 4-day Goan getaway through beaches, forts, waterfalls, and sunset parties — curated by local travel hosts to blend tropical serenity with vibrant nightlife in one refreshing escape.
      </li>
      <li>
        Stroll barefoot across Baga’s golden sands, explore Portuguese-era Fort Aguada, and dip into emerald pools beneath Dudhsagar’s majestic waterfall.
      </li>
      <li>
        Soak in the energy of Goa’s iconic beach shacks, groove to DJ beats at night parties, and wake up to tranquil yoga sessions surrounded by coconut palms.
      </li>
      <li>
        Wander through Anjuna’s flea markets bursting with local colors, sip on cashew feni at hidden taverns, and discover Goan spice plantations rich in aroma and heritage.
      </li>
      <li>
        Unwind in boutique stays by the sea, where sun-kissed mornings, cultural trails, and warm local hosts redefine your coastal holiday — one memorable moment at a time.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Goa Itinerary Images */}
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
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750020107/goa-act1-airport-arrival_u2n6fa.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020105/goa-act2-baga-sunset-drinks_vos9hs.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020106/goa-act3-dudhsagar-jeep_wetuef.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020108/goa-act4-spice-plantation_nrqfil.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020117/goa-act5-fort-aguada_bmxjt9.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020115/goa-act7-anjuna-market_qhlzkw.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020111/goa-act8-sunrise-yoga_cpr4hs.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750020107/goa-act6-beach-party_mdb7d4.jpg",


    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Goa Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />

        </div>
      </SwiperSlide>
    ))}
  </Swiper>


  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    4 Days in Goa
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
    {/* Aditi Chauhan */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750225684/goaaditi1_o8stny.jpg" alt="Aditi Chauhan" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Aditi Chauhan</p>
          <p className="text-sm text-gray-500">Solo traveler from Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        As a solo girl traveler, Goa felt like freedom! Morning cafés near Anjuna, flea markets, and peaceful beach walks were the highlights. Safe, smooth, and super fun – thank you BookForTravel for giving me this perfect solo break!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-aditi", prevEl: ".prev-aditi" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750225684/goaaditi2_a3kqfc.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225686/goaaditi3_s5twnm.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Aditi Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-aditi text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-aditi text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Rahul & Sneha Jain */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750225701/goarahul1_osrtdo.jpg" alt="Rahul & Sneha Jain" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rahul & Sneha Jain</p>
          <p className="text-sm text-gray-500">Couple travelers from Jaipur</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        From beach sunsets to cute bike rides and delicious seafood – Goa was made for couples like us. Everything was planned so well, we didn’t worry about a thing. Loved every second – thanks BookForTravel.com!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rahul", prevEl: ".prev-rahul" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750225703/goarahul2_t3umw5.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225705/goarahul3_ja540k.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rahul Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rahul text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rahul text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Patil Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750225695/goapatil1_msyrop.jpg" alt="The Patil Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Patil Family</p>
          <p className="text-sm text-gray-500">Family from Pune</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        We went with our kids and parents — full family trip! Dolphin spotting, fort visits, and fun Goan meals made memories for a lifetime. Everything was smooth, safe, and desi-family friendly. BookForTravel team was fantastic!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-patil", prevEl: ".prev-patil" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750225696/goapatil2_xz5b2t.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225698/goapatil3_hncojx.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Patil Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-patil text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
</div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-patil text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>


{/* ✅ Mobile View – Goa Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: "Aditi Chauhan",
      city: "Solo traveler from Delhi",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225684/goaaditi1_o8stny.jpg",
      text: `As a solo girl traveler, Goa felt like freedom! Morning cafés near Anjuna, flea markets, and peaceful beach walks were the highlights. Safe, smooth, and super fun – thank you BookForTravel for giving me this perfect solo break!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225684/goaaditi2_a3kqfc.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225686/goaaditi3_s5twnm.jpg"
      ],
      id: 'aditi'
    },
    {
      name: "Rahul & Sneha Jain",
      city: "Couple travelers from Jaipur",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225701/goarahul1_osrtdo.jpg",
      text: `From beach sunsets to cute bike rides and delicious seafood – Goa was made for couples like us. Everything was planned so well, we didn’t worry about a thing. Loved every second – thanks BookForTravel.com!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225703/goarahul2_t3umw5.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225705/goarahul3_ja540k.jpg"
      ],
      id: 'rahulsneha'
    },
    {
      name: "The Patil Family",
      city: "Family from Pune",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225695/goapatil1_msyrop.jpg",
      text: `We went with our kids and parents — full family trip! Dolphin spotting, fort visits, and fun Goan meals made memories for a lifetime. Everything was smooth, safe, and desi-family friendly. BookForTravel team was fantastic!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225696/goapatil2_xz5b2t.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750225698/goapatil3_hncojx.jpg"
      ],
      id: 'patil'
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
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.next-${review.id}`,
          prevEl: `.prev-${review.id}`,
        }}
        loop={true}
        className="relative mt-3"
      >
        {review.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`${review.name} Exp ${i + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-1 -translate-y-1/2 z-10">
          <button className={`prev-${review.id} text-blue-500 text-6xl w-10 h-10 flex items-center justify-center`}>
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-1 -translate-y-1/2 z-10">
          <button className={`next-${review.id} text-blue-500 text-6xl w-10 h-10 flex items-center justify-center`}>
            ›
          </button>
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
  defaultPackage="Goa Vibes: Beaches, Shacks & Parties"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Goa trip?',
      answer: 'Click the "Post Enquiry" button and our travel expert will get in touch within 6 hours to help you plan and book your trip.'
    }, {
      question: 'Can I customize the Goa itinerary?',
      answer: 'Yes! From private beach dinners to exploring offbeat waterfalls, we offer full customization based on your travel style.'
    }, {
      question: 'Are flights included in this Goa package?',
      answer: 'Flights are not included, but we’ll assist you in booking the best available flights at competitive rates.'
    }, {
      question: 'Is this Goa trip suitable for solo or couple travelers?',
      answer: 'Yes! Whether you’re planning a solo getaway or a romantic escape, our Goa itinerary fits all types of travelers.'
    }, {
      question: 'What’s the payment and cancellation policy?',
      answer: 'Book with just 30% advance. Enjoy free date changes or full refund up to 10 days before departure.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default GoaLuxuryEscape;




