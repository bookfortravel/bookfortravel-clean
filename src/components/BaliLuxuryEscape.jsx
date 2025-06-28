// ✅ BaliLuxuryEscape.jsx – with Hero, Trip Summary, Highlights & Accordion Itinerary + Day-wise Carousel + Summary/Stay/Transfer/Activity Tabs

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
import hero1 from '../assets/bali-hero6.jpg';
import hero2 from '../assets/bali-hero5.jpg';
import hero3 from '../assets/bali-hero4.jpg';
import hero4 from '../assets/bali-hero3.jpg';
import hero5 from '../assets/bali-hero2.jpg';
import hero6 from '../assets/bali-hero1.jpg';

// ✅ Itinerary Images
import day1img1 from '../assets/bali-day1-arrival.jpg';
import day1img2 from '../assets/bali-day1-ubudmarket.jpg';
import day2img1 from '../assets/bali-day2-ricefield.jpg';
import day2img2 from '../assets/bali-day2-templecliff.jpg';
import day3img1 from '../assets/bali-day3-waterfall.jpg';
import day3img2 from '../assets/bali-day3-village.jpg';
import day4img1 from '../assets/bali-day4-beachclub.jpg';
import day4img2 from '../assets/bali-day4-sunsetdinner.jpg';
import day5img1 from '../assets/bali-day5-nusacliff.jpg';
import day5img2 from '../assets/bali-day5-snorkeling.jpg';

const reviewer1 = {
  name: "Rupal Singh",
  role: "Solo traveler from Ahmedabad",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179672/balirupal1_girnfw.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179671/balirupal2_p1izzl.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179672/balirupal3_ceohoq.png"
  ],
  review:
    "As a solo traveler, Bali felt like freedom. I explored rice terraces, met friendly locals, and even visited sacred monkey forests. BookForTravel made it safe and easy. Their team planned everything perfectly!"
};

const reviewer2 = {
  name: "Vikram & Sheetal Khurana",
  role: "Couple travelers from Noida",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balivikram1_e0d9yv.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balivikram2_qz8bvk.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179680/balivikram3_feyyj8.png"
  ],
  review:
    "Our Bali trip was a romantic escape! Sunset at Jimbaran Beach and exploring the Gates of Heaven felt unreal. BookForTravel gave us the best host, great hotels, and zero hassle. Loved it!"
};

const reviewer3 = {
  name: "The Nair Family",
  role: "Family travelers from Kochi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balinair1_s5djhh.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179682/balinair2_sz4c9i.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balinair3_v6w8wq.png"
  ],
  review:
    "Bali with kids was incredible. Waterbom park was a blast, and Tanah Lot temple views were magical. BookForTravel made the trip smooth, safe, and fun for our family. Highly recommended!"
};

const BaliLuxuryEscape = () => {
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
    title: 'Arrival in Bali | Explore Ubud Market',
    description: 'Arrive in Bali and transfer to Ubud. Enjoy a relaxed walk around Ubud Market and take in Balinese art and culture.',
    activities: [
      'Arrival in Bali and Private Airport Transfer',
      'Visit Ubud Market & Nearby Temples',
      'Stroll Through Art Shops & Cafes'
    ],
    transfers: [
      'Ngurah Rai Airport to Ubud Hotel Transfer',
      'Local Evening Transfers in Ubud'
    ],
    hotel: 'Check-in at Cultural Boutique Hotel in Ubud',
    images: [day1img1, day1img2]
  },
  {
    day: 'Day 2',
    title: 'Rice Terraces & Cliff Temples',
    description: 'Discover the iconic Tegallalang Rice Terraces and visit cliffside temples offering stunning ocean views.',
    activities: [
      'Walk Through Tegallalang Rice Terraces',
      'Visit Tirta Empul Temple',
      'Catch Sunset at Uluwatu Temple'
    ],
    transfers: [
      'Ubud to Central Bali Transfer',
      'Evening Transfer to Uluwatu Stay'
    ],
    hotel: 'Check-in at Oceanview Resort in Uluwatu',
    images: [day2img1, day2img2]
  },
  {
    day: 'Day 3',
    title: 'Hidden Waterfalls & Cultural Village Walk',
    description: 'Explore Bali’s natural beauty with waterfall hikes and guided walks through traditional Balinese villages.',
    activities: [
      'Visit Tegenungan or Tukad Cepung Waterfall',
      'Village Walk with Local Guide',
      'Experience Balinese Farming Life'
    ],
    transfers: [
      'Hotel to Waterfall Transfer',
      'Local Transfers to Villages'
    ],
    hotel: 'Stay at Tranquil Countryside Villa',
    images: [day3img1, day3img2]
  },
  {
    day: 'Day 4',
    title: 'Beach Clubs & Sunset Dinner',
    description: 'Relax at Bali’s premium beach clubs and enjoy a romantic sunset dinner by the sea.',
    activities: [
      'Access to Premium Beach Club (e.g., Finns or Potato Head)',
      'Sunbathe, Swim & Cocktail Time',
      'Candlelight Dinner by the Ocean'
    ],
    transfers: [
      'Transfers to Seminyak/Canggu Beach Club',
      'Evening Transfer to Dinner Venue'
    ],
    hotel: 'Stay at Boutique Beach Resort',
    images: [day4img1, day4img2]
  },
  {
    day: 'Day 5',
    title: 'Nusa Penida Day Trip + Snorkeling Adventure',
    description: 'Take a speedboat to Nusa Penida for dramatic cliffs, turquoise waters, and snorkeling in vibrant reefs.',
    activities: [
      'Speedboat Transfer to Nusa Penida',
      'Visit Kelingking Cliff & Broken Beach',
      'Snorkeling at Crystal Bay or Manta Bay'
    ],
    transfers: [
      'Hotel to Harbor & Boat Transfers',
      'On-island Transfers in Nusa Penida'
    ],
    hotel: 'Return & Stay at Luxury Hotel in Seminyak',
    images: [day5img1, day5img2]
  },
  {
    day: 'Day 6',
    title: 'Relaxation & Departure',
    description: 'Spend your final morning relaxing at your resort or shopping for souvenirs before your departure.',
    activities: [
      'Morning Leisure Time & Poolside Relaxation',
      'Shopping at Local Markets or Beach Walk'
    ],
    transfers: ['Hotel Check-out & Transfer to Bali Airport'],
    hotel: '',
    images: []
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
  '5 nights stay in Bali with daily breakfast',
  'Airport pickup and intercity transfers in private car',
  'Visit to Ubud Monkey Forest, Rice Terraces, and Tegenungan Waterfall',
  'Beach Club access and sunset dinner experience',
  'Full-day Nusa Penida island tour with snorkeling',
  'Traditional Balinese temple and culture tour',
  'All sightseeing with English-speaking driver',
  'Premium stay in 4-star resorts across Ubud and Seminyak',
  'Assistance from Local Host throughout the trip',
  'Indonesia Visa Support & Documentation Assistance'
];

const exclusions = [
  'International flight tickets to and from Bali',
  'Lunch and dinners not mentioned in the inclusions',
  'Personal expenses like spa, shopping, and tips',
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
  <title>Bali Hosted Tour | Group Package with Local Experts at ₹49,999</title>
  <meta name="description" content="BookForTravel offers a Bali Hosted Tour with local guides, Ubud jungle stays, beaches, temples, and personalized itinerary starting at ₹49,999." />
  <meta name="keywords" content="Bali hosted tour, Bali group trip, Ubud package, Bali itinerary, Bali under 50K, Bali holiday from India" />
  <meta property="og:title" content="Bali Group Travel with Local Hosts | BookForTravel" />
  <meta property="og:description" content="Experience Bali with our hosted group tours — cultural immersion, nature stays, and local connections included." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://bookfortravel.com/bali-tour" />
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
        <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Bali Bliss Getaway</h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          Experience Ubud, Temples & Beaches in this 5N/6D curated local-hosted journey.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 69,999</span>
            <span className="text-green-400 font-semibold">INR 54,999</span>
          </div>
          <div className="text-white">⭐ 4.8 (146 reviews)</div>
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
        Embark on the ultimate hosted 6-day escape to Bali — where lush jungles, volcanic cliffs, and golden beaches come together in a seamless blend of nature, culture, and luxury — all guided by local experts for an authentic island experience.
      </li>
      <li>
        Explore the cultural heart of Ubud with visits to the Sacred Monkey Forest, traditional village markets, and scenic jungle swings overlooking rice terraces — a peaceful yet adventurous start to your journey.
      </li>
      <li>
        Witness the magic of Bali’s temple trails — from the cliffside serenity of Uluwatu to the lakeside calm of Ulun Danu — as your host unveils the legends, rituals, and spiritual essence of Balinese life.
      </li>
      <li>
        Lounge at Bali’s iconic beach clubs, enjoy sunset seafood dinners along the coast, and dance under the stars — curated perfectly with your host to match your travel style, whether relaxed or lively.
      </li>
      <li>
        From snorkeling near Nusa Penida’s coral reefs to soaking in jungle waterfalls and savoring local cuisine — this hosted itinerary ensures comfort, discovery, and unforgettable memories at every step.
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
    6 Days in Bali
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
{/* ✅ GUEST REVIEWS SECTION – Fully Responsive (Bali) */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences from Bali</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Rupal Singh */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750179672/balirupal1_girnfw.png" alt="Rupal Singh" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rupal Singh</p>
          <p className="text-sm text-gray-500">Solo Traveler – Ahmedabad</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        As a solo traveler, Bali felt like freedom. I explored rice terraces, met friendly locals, and even visited sacred monkey forests. BookForTravel made it safe and easy. Their team planned everything perfectly!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rupal", prevEl: ".prev-rupal" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179671/balirupal2_p1izzl.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179672/balirupal3_ceohoq.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rupal Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rupal text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>



        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rupal text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>


        </div>
      </Swiper>
    </div>

    {/* Vikram & Sheetal Khurana */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balivikram1_e0d9yv.png" alt="Vikram & Sheetal Khurana" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Vikram & Sheetal Khurana</p>
          <p className="text-sm text-gray-500">Couple Trip – Noida</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Our Bali trip was a romantic escape! Sunset at Jimbaran Beach and exploring the Gates of Heaven felt unreal. BookForTravel gave us the best host, great hotels, and zero hassle. Loved it!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-vikram", prevEl: ".prev-vikram" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balivikram2_qz8bvk.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179680/balivikram3_feyyj8.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Vikram Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-vikram text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-vikram text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>


        </div>
      </Swiper>
    </div>

    {/* The Nair Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balinair1_s5djhh.png" alt="The Nair Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Nair Family</p>
          <p className="text-sm text-gray-500">Family Trip – Kochi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Bali with kids was incredible. Waterbom park was a blast, and Tanah Lot temple views were magical. BookForTravel made the trip smooth, safe, and fun for our family. Highly recommended!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-nair", prevEl: ".prev-nair" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179682/balinair2_sz4c9i.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balinair3_v6w8wq.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Nair Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-nair text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-nair text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>

{/* ✅ Mobile View – Bali Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Rupal Singh',
      city: 'Ahmedabad, India',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179672/balirupal1_girnfw.png",
      text: `As a solo Indian traveler, Bali felt peaceful and magical. I explored temples, nature, and cafes without any stress. BookForTravel ensured safe travel, great stays, and lovely cultural experiences. I'm truly grateful.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179671/balirupal2_p1izzl.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179672/balirupal3_ceohoq.png"
      ],
      id: 'rupal'
    },
    {
      name: 'Vikram & Sheetal Khurana',
      city: 'Noida, India',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balivikram1_e0d9yv.png",
      text: `Bali gave us unforgettable couple moments. Sunset dinners, beaches, and temples created a dream trip. BookForTravel’s attention to detail, smooth bookings, and host support made everything special. We’ll travel again!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balivikram2_qz8bvk.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179680/balivikram3_feyyj8.png"
      ],
      id: 'vikram'
    },
    {
      name: 'The Nair Family',
      city: 'Kochi, India',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balinair1_s5djhh.png",
      text: `We had a fantastic family vacation in Bali! The kids loved the activities, and we enjoyed the local food and temples. BookForTravel’s host helped us every step. Super smooth, super fun, would love to travel again!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179682/balinair2_sz4c9i.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750179668/balinair3_v6w8wq.png"
      ],
      id: 'nair'
    }
  ].map((review, idx) => (
    <div key={idx} className="bg-white shadow-md rounded-xl p-4 min-w-[270px] max-w-[300px] h-[450px] snap-start flex-shrink-0 mx-2 border text-sm">
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
  defaultPackage="Bali Bliss: Beaches, Temples & Jungle Magic"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Bali trip?',
      answer: 'Click on the "Post Enquiry" button and our local expert will reach out within 6 hours to assist you personally.'
    }, {
      question: 'Can I customize my Bali itinerary?',
      answer: 'Absolutely! We offer flexible itineraries — from relaxing beach days to active adventures and wellness retreats.'
    }, {
      question: 'Are flights and visa included?',
      answer: 'Flights and visa are not included by default, but we help you with end-to-end guidance at the lowest cost.'
    }, {
      question: 'Is this trip suitable for families and honeymooners?',
      answer: 'Yes! We curate experiences specially tailored for families, couples, and even solo travelers looking for serenity.'
    }, {
      question: 'What’s the payment and cancellation policy?',
      answer: 'A 30% advance is required for confirmation. You can make free changes up to 15 days before departure.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default BaliLuxuryEscape;





