// ✅ ThailandLuxuryEscape.jsx – FINAL with Hero, Trip Summary, Highlights & Accordion Itinerary + Day-wise Carousel + Summary/Stay/Transfer/Activity Tabs

import React, { useState } from 'react';
import Footer from '../components/Footer';
import PostEnquiryModal from '../components/PostEnquiryModal';
import { FaStar, FaBed, FaUtensils, FaBus, FaBinoculars, FaHotel, FaRoute, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Helmet } from 'react-helmet';

// ✅ Hero Images
import hero1 from '../assets/thailand-hero1.jpg';
import hero2 from '../assets/thailand-hero2.jpg';
import hero3 from '../assets/thailand-hero3.jpg';
import hero4 from '../assets/thailand-hero4.jpg';
import hero5 from '../assets/thailand-hero5.jpg';
import hero6 from '../assets/thailand-hero6.jpg';

// ✅ Itinerary Images
import day1img1 from '../assets/thailand-day1-patongbeach.jpg';
import day1img2 from '../assets/thailand-day1-banglaroad.jpg';
import day2img1 from '../assets/thailand-day2-mayabay-aerial.jpg';
import day2img2 from '../assets/thailand-day2-vikingcave-snorkel.jpg';
import day3img1 from '../assets/thailand-day3-bigbuddha.jpg';
import day3img2 from '../assets/thailand-day3-promthep-sunset.jpg';
import day4img1 from '../assets/thailand-day4-railaybeach.jpg';
import day4img2 from '../assets/thailand-day4-krabiresort-couple.jpg';
import day5img1 from '../assets/thailand-day5-speedboat-tour.jpg';
import day5img2 from '../assets/thailand-day5-podaisland-snorkel.jpg';

const reviewer1 = {
  name: "Ishita Verma",
  role: "Solo traveler from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandishita1_xmyqbz.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandishita2_wl7mje.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandishita3_c7ximb.jpg"
  ],
  review:
    "Thailand was just wow! As a solo traveler, I explored temples, markets, and island tours without any worry. The group felt like friends. BookForTravel’s planning made me feel safe and excited every day!"
};

const reviewer2 = {
  name: "Aryan & Mitali Gupta",
  role: "Couple travelers from Mumbai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandaryan1_xdkwer.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandaryan2_jk9the.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandaryan3_i9mqli.jpg"
  ],
  review:
    "Our Thailand honeymoon was unforgettable. From sunset beach walks to floating market fun, everything was perfectly timed. Loved how BookForTravel handled all the little things. We felt pampered and stress-free the whole time!"
};

const reviewer3 = {
  name: "The Iyer Family",
  role: "Family travelers from Chennai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer1_jl5e29.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer2_bsu59m.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer3_hpphhg.jpg"
  ],
  review:
    "Thailand with our kids was a delight. The elephant sanctuary and cultural show were big hits. Everything was smooth, thanks to BookForTravel’s expert planning. Our kids are already asking when we’ll go next!"
};


const ThailandGroupGetaway = () => {
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
      title: 'Arrival in Phuket | Patong Beach + Bangla Road',
      description: 'Arrive in Phuket, check-in, relax at Patong Beach and explore vibrant nightlife at Bangla Road.',
      activities: ['Patong Beach Sunset Walk', 'Nightlife Experience at Bangla Road'],
      transfers: [
        'Phuket Airport to Hotel Transfer',
        'Evening Transfer to Patong Beach',
        'Return Transfer from Patong to Hotel'
      ],
      hotel: 'Check-in at 4-Star Hotel in Phuket',
      images: [day1img1, day1img2]
    },
    {
      day: 'Day 2',
      title: 'Phi Phi Islands + Maya Bay + Snorkeling',
      description: 'Explore Phi Phi Islands, visit Maya Bay, snorkel at Viking Cave, and enjoy island lunch.',
      activities: [
        'Phi Phi Island Hopping Tour',
        'Snorkeling near Viking Cave',
        'Lunch on Island Beach'
      ],
      transfers: [
        'Hotel to Pier Transfer',
        'Speedboat Transfers between Islands',
        'Return to Hotel from Pier'
      ],
      hotel: '',
      images: [day2img1, day2img2]
    },
    {
      day: 'Day 3',
      title: 'Big Buddha + Promthep Sunset Point',
      description: 'Visit the iconic Big Buddha, temple exploration, and sunset at Promthep Cape viewpoint.',
      activities: ['Visit Big Buddha Temple', 'Promthep Cape Sunset Photo Tour'],
      transfers: [
        'Hotel to Big Buddha Temple',
        'Transfer to Promthep Cape',
        'Return to Hotel'
      ],
      hotel: '',
      images: [day3img1, day3img2]
    },
    {
      day: 'Day 4',
      title: 'Ferry to Krabi | Railay Beach Sunset',
      description: 'Take a scenic ferry to Krabi, check into resort, relax at Railay Beach.',
      activities: ['Ferry Cruise to Krabi', 'Relaxation at Railay Beach'],
      transfers: [
        'Phuket Hotel to Ferry Terminal',
        'Ferry to Krabi',
        'Krabi Pier to Resort Transfer'
      ],
      hotel: 'Check-in at Beachfront Resort in Krabi',
      images: [day4img1, day4img2]
    },
    {
      day: 'Day 5',
      title: 'Four Island Tour + Snorkeling',
      description: 'Full-day tour of Krabi’s top islands — Chicken, Poda, Tup, Phra Nang Cave — with snorkeling.',
      activities: ['4-Island Speedboat Tour', 'Snorkeling at Coral Reefs', 'Picnic Lunch on the Beach'],
      transfers: [
        'Resort to Krabi Pier',
        'Island Hopping Speedboat Transfers',
        'Return to Resort'
      ],
      hotel: '',
      images: [day5img1, day5img2]
    },
    {
      day: 'Day 6',
      title: 'Leisure Time + Departure',
      description: 'Enjoy a relaxing morning, optional spa or shopping before departure.',
      activities: ['Spa Session (Optional)', 'Leisure Walk / Last Minute Shopping'],
      transfers: ['Hotel Check-out & Transfer to Krabi Airport'],
      hotel: '',
      images: [day4img2] // reused Krabi resort image for farewell
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
              <p className="font-semibold">11 Activities</p>
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
  '5 nights stay in Thailand with breakfast',
  'Airport transfers and inter-city transfers in AC private vehicle',
  'Phi Phi Island Tour with lunch and snorkeling',
  'Phuket City Tour including Big Buddha and Promthep Cape sunset point',
  'Krabi 4-Island Tour by Speedboat with snorkeling gear',
  'Evening leisure time at Patong Beach and Bangla Road',
  'Visit to Maya Bay, Viking Cave and Poda Island',
  'Stay in premium beachfront resort in Krabi and central hotel in Phuket',
  'Assistance by Local Host throughout the trip',
  'Thailand Visa Support & Documentation Assistance'
];

const exclusions = [
  'International flight tickets to and from Thailand',
  'Meals not mentioned in the inclusions',
  'Personal expenses like tips, laundry, shopping, etc.',
  'Travel Insurance',
  'Visa Fee (to be paid directly at application)'
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
  <title>Thailand Group Tour | Hosted Bangkok & Phuket Package at ₹49,999</title>
  <meta name="description" content="Join BookForTravel’s Thailand Hosted Group Tour with local hosts and expert guides. Explore Bangkok, Phuket, Krabi & more with day-wise curated itinerary." />
  <meta name="keywords" content="Thailand group tour, Bangkok package, Phuket travel, Krabi itinerary, Thailand under 50000, hosted tour Thailand" />
  <meta property="og:title" content="Thailand Hosted Tour | BookForTravel" />
  <meta property="og:description" content="Curated Thailand tour with expert hosts, immersive stays, and day-wise itinerary across Bangkok, Phuket, and more." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://bookfortravel.com/thailand-tour" />
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
          <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Thailand Island Getaway</h1>
          <p className="text-[16px] md:text-[18px] mb-2">
            Discover Phuket, Krabi & Phi Phi with a 5N/6D hosted tour packed with tropical bliss.
          </p>

          <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
            <div className="flex items-center gap-2">
              <span className="line-through text-gray-300">INR 79,000</span>
              <span className="text-green-400 font-semibold">INR 67,500</span>
            </div>
            <div className="text-white">⭐ 4.9 (315 reviews)</div>
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
    Discover the perfect blend of tropical adventure and curated comfort in Thailand — from stunning island landscapes and vibrant nightlife to warm Thai hospitality and expert-guided group experiences that promise memories for a lifetime.
  </li>
  <li>
    Cruise through the emerald waters of Phi Phi Islands on a private speedboat. Witness iconic spots like Maya Bay, snorkel among colorful coral reefs, and relax on white sandy beaches — a cinematic island escape with your travel tribe.
  </li>
  <li>
    Catch the golden sunset at Promthep Cape or Patong Beach, guided by your local host. The serene views, ocean breeze, and evening colors create the ideal moment to reflect, bond, and unwind in Thailand’s most picturesque corners.
  </li>
  <li>
    Immerse yourself in Thai culture with visits to iconic temples, vibrant street markets, and local food spots in Phuket and Krabi. With a local guide by your side, explore beyond tourist traps and uncover the real spirit of Thailand.
  </li>
  <li>
    Experience the perfect mix of adventure and leisure — from snorkeling in hidden lagoons and exploring limestone cliffs, to relaxing at a luxury beachfront resort with like-minded travelers and personalized service throughout your journey.
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
          6 Days in Thailand
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

{/* ✅ GUEST REVIEWS SECTION – Thailand (Fully Responsive) */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Ishita Verma */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandishita1_xmyqbz.jpg" alt="Ishita Verma" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Ishita Verma</p>
          <p className="text-sm text-gray-500">Solo Traveler – Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Thailand was just wow! As a solo traveler, I explored temples, markets, and island tours without any worry. The group felt like friends. BookForTravel’s planning made me feel safe and excited every day!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-ishita", prevEl: ".prev-ishita" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandishita2_wl7mje.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandishita3_c7ximb.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Ishita Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-ishita text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-ishita text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Aryan & Mitali Gupta */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandaryan1_xdkwer.jpg" alt="Aryan & Mitali Gupta" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Aryan & Mitali Gupta</p>
          <p className="text-sm text-gray-500">Couple – Mumbai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Our Thailand honeymoon was unforgettable. From sunset beach walks to floating market fun, everything was perfectly timed. Loved how BookForTravel handled all the little things. We felt stress-free the whole time!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-aryan", prevEl: ".prev-aryan" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandaryan2_jk9the.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandaryan3_i9mqli.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Aryan Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-aryan text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-aryan text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* The Iyer Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer1_jl5e29.jpg" alt="The Iyer Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Iyer Family</p>
          <p className="text-sm text-gray-500">Family – Chennai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Thailand with our kids was a delight. The elephant sanctuary and cultural show were big hits. Everything was smooth, thanks to BookForTravel’s expert planning. Our kids are already asking when we’ll go next!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-iyer", prevEl: ".prev-iyer" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer2_bsu59m.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer3_hpphhg.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Iyer Exp ${index + 1}`} className="w-full h-60 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-iyer text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-iyer text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>



{/* ✅ Mobile View – Thailand Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[{
    name: 'Ishita Verma',
    city: 'Solo traveler from Delhi',
    avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandishita1_xmyqbz.jpg",
    text: `Thailand was just wow! As a solo traveler, I explored temples, markets, and island tours without any worry. The group felt like friends. BookForTravel’s planning made me feel safe and excited every day!`,
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandishita2_wl7mje.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandishita3_c7ximb.jpg"
    ],
    id: 'ishita'
  }, {
    name: 'Aryan & Mitali Gupta',
    city: 'Couple travelers from Mumbai',
    avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandaryan1_xdkwer.jpg",
    text: `Our Thailand honeymoon was unforgettable. From sunset beach walks to floating market fun, everything was perfectly timed. Loved how BookForTravel handled all the little things. We felt pampered and stress-free the whole time!`,
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185410/thailandaryan2_jk9the.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185411/thailandaryan3_i9mqli.jpg"
    ],
    id: 'aryan'
  }, {
    name: 'The Iyer Family',
    city: 'Family travelers from Chennai',
    avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer1_jl5e29.jpg",
    text: `Thailand with our kids was a delight. The elephant sanctuary and cultural show were big hits. Everything was smooth, thanks to BookForTravel’s expert planning. Our kids are already asking when we’ll go next!`,
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer2_bsu59m.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750185409/thailandiyer3_hpphhg.jpg"
    ],
    id: 'iyer'
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
          <button className={`prev-${review.id} text-gray-500 text-4xl w-3 h-3 flex items-center justify-center`}>‹</button>
        </div>
        <div className="absolute top-1/2 right-1 -translate-y-1/2 z-10">
          <button className={`next-${review.id} text-gray-500 text-4xl w-3 h-3 flex items-center justify-center`}>›</button>
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
        defaultPackage="Thailand Island Getaway"
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

export default ThailandGroupGetaway;

