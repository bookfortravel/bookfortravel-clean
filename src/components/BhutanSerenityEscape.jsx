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

// ✅ Bhutan Tour Hero Images
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262426/hero1_vu51ex.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262428/hero2_jlqznq.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262430/hero3_gudrez.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262434/hero4_kkr3ln.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262435/hero5_xcgdgs.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262438/hero6_tbjku8.jpg"
];

// ✅ Bhutan Tour Itinerary Images
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276451/day1-1_xstpeh.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276451/day1-2_quhgg6.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276456/day1-3_qnaqq2.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750300258/Gemini_Generated_Image_pkaogopkaogopkao_pdewel.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276461/day2-2_upglhd.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276465/day2-3_jv4s2i.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276467/day3-1_lqv26x.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276471/day3-2_at4ymq.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276473/day3-3_dimpsj.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276476/day4-1_jbvdsm.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276478/day4-2_jwabcb.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276448/day5-1_l53jbr.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276448/day5-2_jgcd4d.jpg"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276506/day6-1_xwhax0.jpg"
    
  ]
};

const BhutanSerenityEscape = () => {
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

// ✅ Reviewer 1 – Aanya (Solo traveler from Pune)
const reviewer1 = {
  name: "Aanya",
  role: "Solo traveler from Pune",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262382/aanya1_istb9v.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262383/aanya2_ftdxax.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262385/aanya3_pvhqkc.jpg"
  ],
  review:
    "Bhutan gave me a sense of calm I didn’t know I needed. From quiet monasteries to lush valleys, it was magical. Traveling solo felt safe and wholesome. Full marks to BookForTravel for making it all so effortless and beautiful!"
};

// ✅ Reviewer 2 – Arjun & Neha (Couple from Bengaluru)
const reviewer2 = {
  name: "Arjun & Neha",
  role: "Couple from Bengaluru",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262385/arjun1_mfihz7.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262390/arjun2_oql3pb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262391/arjun3_d6hrwr.jpg"
  ],
  review:
    "Bhutan felt like a dream for both of us. We loved the nature, food, and the peace. It was the perfect romantic break from city life. BookForTravel handled everything with care — we had zero stress and only good vibes!"
};

// ✅ Reviewer 3 – The Sharma Family (Family from Gurgaon)
const reviewer3 = {
  name: "The Sharma Family",
  role: "Family from Gurgaon",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262440/sharma1_lkbup3.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262444/sharma2_xd8ypb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262447/sharma3_uo9qug.jpg"
  ],
  review:
    "Bhutan was such a refreshing trip for our family. The kids enjoyed nature walks, and we felt safe and relaxed. It was scenic, spiritual, and serene. Big thanks to BookForTravel for making our holiday so special and memorable!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Paro & Transfer to Thimphu',
    descriptionLabel: 'Description 1',
    description: 'Arrive at Paro Airport and transfer to Thimphu, the capital city. En route, visit the Tamchog Lhakhang Iron Bridge. Evening free to explore the local market.',
    activities: [
      'Paro Airport arrival & transfer to Thimphu',
      'Visit Tamchog Lhakhang Iron Bridge',
      'Explore Thimphu local markets in evening'
    ],
    transfers: ['Airport to Thimphu Private Transfer'],
    hotel: 'Stay at a Premium Hotel in Thimphu',
    images: [
       "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276451/day1-1_xstpeh.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276451/day1-2_quhgg6.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276456/day1-3_qnaqq2.jpg"

    ]
  },
  {
    day: 'Day 2',
    title: 'Thimphu Sightseeing & Transfer to Punakha',
    descriptionLabel: 'Description 2',
    description: 'Visit Thimphu’s key sights like Buddha Dordenma and Memorial Chorten. Cross Dochula Pass for Himalayan views. Reach Punakha and relax by the river.',
    activities: [
      'Buddha Dordenma, Memorial Chorten, Takin Reserve',
      'Scenic drive via Dochula Pass',
      'Evening river walk in Punakha'
    ],
    transfers: ['Thimphu to Punakha Private Drive'],
    hotel: 'Stay at a Riverside Resort in Punakha',
    images: [
         "https://res.cloudinary.com/drvigtwgm/image/upload/v1750300258/Gemini_Generated_Image_pkaogopkaogopkao_pdewel.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276461/day2-2_upglhd.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276465/day2-3_jv4s2i.jpg"

    ]
  },
  {
    day: 'Day 3',
    title: 'Punakha Dzong & Local Village Life',
    descriptionLabel: 'Description 3',
    description: 'Visit the iconic Punakha Dzong and take a short hike to Chimi Lhakhang, the fertility temple. Enjoy a traditional lunch at a village home.',
    activities: [
      'Explore Punakha Dzong and riverside views',
      'Walk to Chimi Lhakhang Monastery',
      'Traditional lunch with a Bhutanese family'
    ],
    transfers: ['Sightseeing in Private Cab'],
    hotel: 'Stay at a Riverside Resort in Punakha',
    images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276467/day3-1_lqv26x.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276471/day3-2_at4ymq.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276473/day3-3_dimpsj.jpg"

    ]
  },
  {
    day: 'Day 4',
    title: 'Drive to Paro via Simtokha Dzong',
    descriptionLabel: 'Description 4',
    description: 'On your return drive to Paro, stop at Simtokha Dzong and enjoy scenic mountain roads. Evening is free for café hopping and rest.',
    activities: [
      'Visit Simtokha Dzong – Bhutan’s oldest fortress',
      'Drive through mountain passes to Paro',
      'Leisure time at Paro cafés'
    ],
    transfers: ['Punakha to Paro Drive'],
    hotel: 'Stay at a Boutique Hotel in Paro',
    images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276476/day4-1_jbvdsm.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276478/day4-2_jwabcb.jpg"

    ]
  },
  {
    day: 'Day 5',
    title: 'Tiger’s Nest Hike – Highlight of Bhutan',
    descriptionLabel: 'Description 5',
    description: 'Start early for the famous hike to Taktsang (Tiger’s Nest) Monastery. End with a hot stone bath experience to relax after the trek.',
    activities: [
      'Hike to Taktsang (Tiger’s Nest) Monastery',
      'Panoramic valley views from cliffside temple',
      'Optional traditional hot stone bath'
    ],
    transfers: ['Hotel to Trailhead Transfer'],
    hotel: 'Stay at a Boutique Hotel in Paro',
    images: [
       "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276448/day5-1_l53jbr.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276448/day5-2_jgcd4d.jpg"

    ]
  },
  {
    day: 'Day 6',
    title: 'Departure from Paro',
    descriptionLabel: 'Description 6',
    description: 'Wrap up your Bhutan adventure and depart with unforgettable memories of monasteries, mountains, and warm hospitality.',
    activities: [
      'Breakfast and final shopping',
      'Check-out and airport drop'
    ],
    transfers: ['Paro Hotel to Airport Transfer'],
    hotel: '',
    images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276506/day6-1_xwhax0.jpg"
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
  '6 nights stay in handpicked boutique hotels across Thimphu, Punakha, and Paro with daily breakfast',
  'All airport pickups, intercity transfers, and sightseeing in a private vehicle',
  'Scenic Dochula Pass visit, river rafting in Punakha, and Tiger’s Nest Monastery trek',
  'Cultural exploration of Buddha Dordenma, Tashichho Dzong, and Punakha Dzong',
  'Day trip to Chele La Pass with local picnic and nature walks',
  'Guided local market visits and traditional handicraft village tour',
  'Authentic Bhutanese cooking session and cultural folk performance in Paro',
  'Daily bottled water, welcome dinner in Thimphu, and farewell meal in Paro',
  'Dedicated English-speaking Bhutanese guide throughout the journey',
  '24x7 support from BookForTravel’s expert Bhutan travel team and pre-travel documentation'
];

const exclusions = [
  'International flights to and from Bhutan (Paro Airport)',
  'Lunches and dinners unless specified in the inclusions',
  'Travel insurance (highly recommended for all Bhutan tours)',
  'Any optional activities such as hot stone bath or adventure add-ons',
  'Visa processing fee, personal expenses, and tipping for guides or drivers'
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
  {/* ✅ HERO CAROUSEL SECTION – Bhutan Serenity Escape */}
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
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262426/hero1_vu51ex.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262428/hero2_jlqznq.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262430/hero3_gudrez.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262434/hero4_kkr3ln.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262435/hero5_xcgdgs.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262438/hero6_tbjku8.jpg"
      ].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Bhutan Hero Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* ✅ OVERLAY CONTENT – Bhutan Serenity Escape */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
      <h1 className="text-[30px] md:text-[36px] font-bold mb-2">
        Bhutan Serenity Escape: Monasteries & Mountains
      </h1>
      <p className="text-[16px] md:text-[18px] mb-2">
        6 Days of cultural bliss, spiritual calm, and Himalayan beauty — experience the heart of Bhutan with us.
      </p>

      <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-300">₹62,999</span>
          <span className="text-green-400 font-semibold">₹47,999</span>
        </div>
        <div className="text-white">⭐ 4.8 (102 reviews)</div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
      >
        📩 Post Enquiry
      </button>
    </div>
  </div>

  
{/* ✅ TRIP SUMMARY BADGES – BHUTAN SERENITY ESCAPE */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">6 Days / 5 Nights</span>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBus /> <span>All Scenic Transfers</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBed /> <span>Mountain Retreats & Boutique Hotels</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaUtensils /> <span>Daily Breakfast & Local Cuisine</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBinoculars /> <span>Monasteries, Passes & Culture Walks</span>
    </div>
  </div>

  {/* ✅ TRIP HIGHLIGHTS – BHUTAN SERENITY ESCAPE */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Embark on the ultimate hosted 6-day escape to Bhutan — where snow-capped mountains, prayer flags, and sacred monasteries unfold in harmony, guided by locals who reveal the country’s deepest spiritual secrets.
      </li>
      <li>
        Climb to the legendary Tiger’s Nest Monastery perched on a cliff — an awe-inspiring trek that rewards you with divine views and soulful stillness.
      </li>
      <li>
        Witness the golden hour over Punakha Dzong, where Bhutanese architecture, river confluences, and quiet monastic chants create a postcard-perfect moment.
      </li>
      <li>
        Walk through peaceful villages in Paro and Thimphu, exchanging smiles with locals and browsing vibrant weekend markets full of handwoven fabrics and prayer wheels.
      </li>
      <li>
        Indulge in Bhutanese cuisine with a local cooking session, and end your day with a traditional hot stone bath — reviving both body and spirit amidst Himalayan charm.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Bhutan Itinerary Images */}
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
       "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276451/day1-1_xstpeh.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276451/day1-2_quhgg6.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276456/day1-3_qnaqq2.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750300258/Gemini_Generated_Image_pkaogopkaogopkao_pdewel.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276461/day2-2_upglhd.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276465/day2-3_jv4s2i.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276467/day3-1_lqv26x.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276471/day3-2_at4ymq.jpg",
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750276473/day3-3_dimpsj.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276476/day4-1_jbvdsm.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276478/day4-2_jwabcb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276448/day5-1_l53jbr.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276448/day5-2_jgcd4d.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750276506/day6-1_xwhax0.jpg"

    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Bhutan Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    6 Days in Bhutan
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

    {/* ✅ Aanya */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750262382/aanya1_istb9v.jpg" alt="Aanya" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Aanya</p>
          <p className="text-sm text-gray-500">Solo traveler from Pune</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Bhutan gave me a sense of calm I didn’t know I needed. From quiet monasteries to lush valleys, it was magical. Traveling solo felt safe and wholesome. Full marks to BookForTravel for making it all so effortless and beautiful!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-aanya", prevEl: ".prev-aanya" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262383/aanya2_ftdxax.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262385/aanya3_pvhqkc.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Aanya Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-aanya text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-aanya text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ Arjun & Neha */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750262385/arjun1_mfihz7.jpg" alt="Arjun & Neha" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Arjun & Neha</p>
          <p className="text-sm text-gray-500">Couple from Bengaluru</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Bhutan felt like a dream for both of us. We loved the nature, food, and the peace. It was the perfect romantic break from city life. BookForTravel handled everything with care — we had zero stress and only good vibes!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-arjun", prevEl: ".prev-arjun" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262390/arjun2_oql3pb.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262391/arjun3_d6hrwr.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Arjun Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-arjun text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-arjun text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ Sharma Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750262440/sharma1_lkbup3.jpg" alt="The Sharma Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Sharma Family</p>
          <p className="text-sm text-gray-500">Family from Gurgaon</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Bhutan was such a refreshing trip for our family. The kids enjoyed nature walks, and we felt safe and relaxed. It was scenic, spiritual, and serene. Big thanks to BookForTravel for making our holiday so special and memorable!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-sharma", prevEl: ".prev-sharma" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262444/sharma2_xd8ypb.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262447/sharma3_uo9qug.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Sharma Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-sharma text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-sharma text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

  </div>


{/* ✅ MOBILE VIEW – Laos & Cambodia Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: "Aanya",
      city: "Solo traveler from Pune",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262382/aanya1_istb9v.jpg",
      text: "Bhutan gave me a sense of calm I didn’t know I needed. From quiet monasteries to lush valleys, it was magical. Traveling solo felt safe and wholesome. Full marks to BookForTravel for making it all so effortless and beautiful!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262383/aanya2_ftdxax.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262385/aanya3_pvhqkc.jpg"
      ],
      id: "aanya"
    },
    {
      name: "Arjun & Neha",
      city: "Couple from Bengaluru",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262385/arjun1_mfihz7.jpg",
      text: "Bhutan felt like a dream for both of us. We loved the nature, food, and the peace. It was the perfect romantic break from city life. BookForTravel handled everything with care — we had zero stress and only good vibes!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262390/arjun2_oql3pb.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262391/arjun3_d6hrwr.jpg"
      ],
      id: "arjun"
    },
    {
      name: "The Sharma Family",
      city: "Family from Gurgaon",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262440/sharma1_lkbup3.jpg",
      text: "Bhutan was such a refreshing trip for our family. The kids enjoyed nature walks, and we felt safe and relaxed. It was scenic, spiritual, and serene. Big thanks to BookForTravel for making our holiday so special and memorable!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262444/sharma2_xd8ypb.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750262447/sharma3_uo9qug.jpg"
      ],
      id: "sharma"
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

{/* ✅ ENQUIRY MODAL – BHUTAN */}
<PostEnquiryModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  defaultPackage="Bhutan Serenity Escape: Monasteries & Mountains"
/>

{/* ✅ FAQ SECTION – BHUTAN */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        question: 'How do I book this Bhutan Serenity Escape tour?',
        answer: 'Click the "Post Enquiry" button and our Bhutan travel expert will connect with you within 6 hours to help you with bookings, permits, and customizations.'
      },
      {
        question: 'Can I make changes to this itinerary?',
        answer: 'Yes! You can extend the stay, include more hikes, add luxury resort upgrades, or explore more cities like Punakha based on your preferences.'
      },
      {
        question: 'Are flights and permits included?',
        answer: 'International flights are not included. However, we assist with flight bookings and handle Bhutan’s permit arrangements and documentation for you.'
      },
      {
        question: 'Is Bhutan safe for solo travelers or families?',
        answer: 'Absolutely. Bhutan is peaceful, welcoming, and ideal for solo travelers, couples, and families. All trips include private guides and curated experiences.'
      },
      {
        question: 'What is the booking and cancellation policy?',
        answer: 'Secure your spot with 30% advance. Enjoy flexible cancellations or rescheduling up to 15 days before your travel date.'
      }
    ].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default BhutanSerenityEscape;
