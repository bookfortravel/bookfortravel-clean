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

// ✅ Hero Images – Japan
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988105/japan-hero3-mountfuji-lake_ih0bwd.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988107/japan-hero5-bamboo-couple_m872ec.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988112/japan-hero2-tokyo-skytree-night_fmtg6j.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988106/japan-hero1-cherryblossom-kimono_joc98g.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988107/japan-hero4-bullettrain-fuji_ipiifl.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988134/japan-hero6-gion-evening_pgkwrx.jpg"
];

// ✅ Itinerary Day-wise Images
const itineraryImages = {
  day1: [
    "https://i.postimg.cc/zf0GNBnX/japan-day1-airport-cab.jpg",
    "https://i.postimg.cc/wvMTjpV5/japan-day1-shibuya-arrival.jpg"
  ],
  day2: [
    "https://i.postimg.cc/9MkX4n86/japan-day2-sensoji-temple.jpg",
    "https://i.postimg.cc/0jJk70hb/japan-day2-tokyo-skytree.jpg"
  ],
  day3: [
    "https://i.postimg.cc/7Pp7dsHt/japan-day3-cherrybridge-walk.jpg",
    "https://i.postimg.cc/BZ8Hh901/japan-day3-kimono-blossoms.jpg"
  ],
  day4: [
    "https://i.postimg.cc/t7QXkVHD/japan-day4-bullettrain-mountfuji.jpg",
    "https://i.postimg.cc/HkbrqdZV/japan-day4-shinkansen-inside.jpg"
  ],
  day5: [
    "https://i.postimg.cc/G2m9TYcy/japan-day5-bamboo-forest.jpg",
    "https://i.postimg.cc/1zHfzMZS/japan-day5-golden-pavilion.jpg"
  ],
  day6: [
    "https://i.postimg.cc/7LD5DddX/japan-day6-fushimiinari-torii.jpg",
    "https://i.postimg.cc/JnY0Nnnd/japan-day6-kyoto-foodmarket.jpg"
  ],
  day7: [
    "https://i.postimg.cc/qqtRjT6B/japan-day7-airport-farewell.jpg",
    "https://i.postimg.cc/hvHGY5VL/japan-day7-japanstreet-shopping.jpg"
  ]
};

const JapanLuxuryEscape = () => {
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

// ✅ Reviewer 1 – Aanya Joshi (Solo Traveler from Bangalore)
const reviewer1 = {
  name: "Aanya Joshi",
  role: "Solo traveler from Bangalore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221755/japanaanya1_b9dsln.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221756/japanaanya2_blel7n.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221755/japanaanya3_hgqsqu.jpg"
  ],
  review:
    "I always dreamt of walking under cherry blossoms in a kimono – and Japan delivered! BookForTravel made my solo trip super smooth and fun. Safe hotels, local help, and the sushi tours – full paisa vasool experience!"
};

// ✅ Reviewer 2 – Raghav & Sneha Kapoor (Couple from Delhi)
const reviewer2 = {
  name: "Raghav & Sneha Kapoor",
  role: "Couple from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japanraghav1_hkg7kq.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221764/japanraghav2_ttdghi.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221765/japanraghav3_boxk1o.jpg"
  ],
  review:
    "Every moment in Japan felt straight out of a Yash Raj film! Mt. Fuji views, Kyoto streets, and those ramen nights — all perfectly planned. BookForTravel gave us a dream honeymoon, without any tension or surprises!"
};

// ✅ Reviewer 3 – The Nair Family (Family from Kochi)
const reviewer3 = {
  name: "The Nair Family",
  role: "Family from Kochi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japannair1_dkoivf.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japannair2_qy6d0d.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221758/japannair3_b65wm8.jpg"
  ],
  review:
    "Japan was a wonderland for our family. Bullet train rides, robot cafes, and Osaka Castle — our kids were thrilled! BookForTravel took care of every detail, so we just enjoyed. Full marks for this family-friendly trip!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Tokyo & Shibuya Vibes',
    description: 'Arrive in Tokyo and transfer to your hotel. Spend the evening exploring the iconic Shibuya Crossing and nearby local eateries.',
    activities: [
      'Private Airport Pickup from Haneda/Narita Airport',
      'Evening Visit to Shibuya Crossing',
      'Dinner at Local Izakaya Bar'
    ],
    transfers: [
      'Tokyo Airport to Hotel Transfer',
      'Evening Transfer to Shibuya & Back'
    ],
    hotel: 'Stay at a Boutique Hotel in Shinjuku, Tokyo',
    images: [
      "https://i.postimg.cc/zf0GNBnX/japan-day1-airport-cab.jpg",
      "https://i.postimg.cc/wvMTjpV5/japan-day1-shibuya-arrival.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Tokyo Highlights – Sensoji & Skytree',
    description: 'Begin your Japan adventure with a visit to Tokyo’s oldest temple – Sensoji. Later, enjoy panoramic city views from Tokyo Skytree.',
    activities: [
      'Morning Visit to Sensoji Temple & Nakamise Street',
      'Tokyo Skytree Observation Deck Experience',
      'Explore Asakusa Traditional Markets'
    ],
    transfers: [
      'Hotel to Asakusa Transfer',
      'Asakusa to Tokyo Skytree Shuttle'
    ],
    hotel: 'Stay at a Modern Hotel in Asakusa, Tokyo',
    images: [
      "https://i.postimg.cc/9MkX4n86/japan-day2-sensoji-temple.jpg",
      "https://i.postimg.cc/0jJk70hb/japan-day2-tokyo-skytree.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Cherry Blossom Walk & Kimono Experience',
    description: 'Walk under blooming sakura trees and take part in a kimono photoshoot with Mount Fuji or traditional bridges as your backdrop.',
    activities: [
      'Hanami Walk under Cherry Blossom Trees',
      'Kimono Rental & Traditional Photoshoot',
      'Evening Cultural Tour or Local Food Crawl'
    ],
    transfers: [
      'Hotel to Park/Bridge Location Transfer',
      'Return Transfer after Evening Stroll'
    ],
    hotel: 'Stay at a Heritage Ryokan in Tokyo',
    images: [
      "https://i.postimg.cc/7Pp7dsHt/japan-day3-cherrybridge-walk.jpg",
      "https://i.postimg.cc/BZ8Hh901/japan-day3-kimono-blossoms.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Bullet Train to Kyoto & Mount Fuji Views',
    description: 'Experience the Shinkansen bullet train journey to Kyoto while enjoying glimpses of Mount Fuji along the way.',
    activities: [
      'Board the Shinkansen from Tokyo Station',
      'Catch Panoramic Views of Mount Fuji',
      'Onboard Bento & Scenic Window Moments'
    ],
    transfers: [
      'Hotel to Tokyo Station Transfer',
      'Shinkansen Ride to Kyoto'
    ],
    hotel: 'Stay at a 4-Star Hotel in Gion, Kyoto',
    images: [
      "https://i.postimg.cc/t7QXkVHD/japan-day4-bullettrain-mountfuji.jpg",
      "https://i.postimg.cc/HkbrqdZV/japan-day4-shinkansen-inside.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Bamboo Forest & Golden Pavilion',
    description: 'Visit the iconic Arashiyama Bamboo Grove and marvel at the Zen beauty of Kinkaku-ji, the Golden Pavilion.',
    activities: [
      'Walk through Arashiyama Bamboo Forest',
      'Visit to the Golden Pavilion (Kinkaku-ji)',
      'Explore Kyoto’s Artisan Shops'
    ],
    transfers: [
      'Hotel to Arashiyama Transfer',
      'Evening Return via Kyoto Streets'
    ],
    hotel: 'Stay at a Zen-Inspired Hotel in Kyoto',
    images: [
      "https://i.postimg.cc/G2m9TYcy/japan-day5-bamboo-forest.jpg",
      "https://i.postimg.cc/1zHfzMZS/japan-day5-golden-pavilion.jpg"
    ]
  },
  {
    day: 'Day 6',
    title: 'Fushimi Inari Shrine & Food Market',
    description: 'Climb the famous red torii gates of Fushimi Inari and taste Kyoto’s best street foods at Nishiki Market.',
    activities: [
      'Fushimi Inari Taisha Shrine Hike',
      'Local Delicacies at Nishiki Food Market',
      'Evening Free Time in Gion'
    ],
    transfers: [
      'Hotel to Fushimi Inari Transfer',
      'Return from Nishiki to Hotel'
    ],
    hotel: 'Stay at a Boutique Stay near Nishiki Market',
    images: [
      "https://i.postimg.cc/7LD5DddX/japan-day6-fushimiinari-torii.jpg",
      "https://i.postimg.cc/JnY0Nnnd/japan-day6-kyoto-foodmarket.jpg"
    ]
  },
  {
    day: 'Day 7',
    title: 'Shopping & Farewell',
    description: 'Enjoy some last-minute shopping and soak in the vibes of Japan before your flight home.',
    activities: [
      'Shopping for Japanese Souvenirs',
      'Coffee Break at a Manga Cafe',
      'Airport Drop-off with Assistance'
    ],
    transfers: [
      'Kyoto to Osaka/Tokyo Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://i.postimg.cc/qqtRjT6B/japan-day7-airport-farewell.jpg",
      "https://i.postimg.cc/hvHGY5VL/japan-day7-japanstreet-shopping.jpg"
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
          <p className="font-semibold">12 Transfers</p>
        </div>
        <div>
          <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
          <p className="font-semibold">14 Activities</p>
        </div>
        <div>
          <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
          <p className="font-semibold">6 Nights Stay</p>
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
  '6 nights stay in Japan with daily breakfast at 3/4-star hotels',
  'Airport pickup and all intercity transfers via private vehicle and bullet trains',
  'Tokyo city tour including Senso-ji Temple, Shibuya Crossing & Skytree',
  'Full-day guided excursion to Mt. Fuji & Lake Kawaguchi',
  'Cultural experiences including kimono dress-up and tea ceremony',
  'Bullet train ride from Tokyo to Kyoto with scenic views',
  'Kyoto heritage tour covering Fushimi Inari Shrine, Kinkaku-ji, and Gion District',
  'Day trip to Nara with visits to Nara Deer Park & Todai-ji Temple',
  'Assistance from English-speaking local travel host throughout the journey',
  'Japan Visa Support & Documentation Assistance'
];

const exclusions = [
  'International flight tickets to and from Japan',
  'Meals not included in the package (lunch/dinner)',
  'Entry fees to optional attractions and experiences not mentioned',
  'Personal expenses like shopping, drinks, and souvenirs',
  'Travel Insurance (strongly recommended)',
  'Japan Visa Fee (payable at the time of application)'
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
    {/* ✅ HERO CAROUSEL SECTION – JAPAN */}
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
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988105/japan-hero3-mountfuji-lake_ih0bwd.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988107/japan-hero5-bamboo-couple_m872ec.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988112/japan-hero2-tokyo-skytree-night_fmtg6j.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988106/japan-hero1-cherryblossom-kimono_joc98g.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988107/japan-hero4-bullettrain-fuji_ipiifl.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1749988134/japan-hero6-gion-evening_pgkwrx.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Japan Slide ${index + 1}`}
              className="w-full h-full object-cover"
                />
          </SwiperSlide>
        ))}
      </Swiper>


      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
        <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Japan Luxury Escape</h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          7 Days of temples, cherry blossoms & vibrant city life – all hosted by our Japan expert.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 89,999</span>
            <span className="text-green-400 font-semibold">INR 74,999</span>
          </div>
          <div className="text-white">⭐ 4.9 (128 reviews)</div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
        >
          📩 Post Enquiry
        </button>
      </div>
    </div>


{/* ✅ TRIP SUMMARY BADGES – JAPAN */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">7 Days / 6 Nights</span>
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

  {/* ✅ TRIP HIGHLIGHTS – JAPAN */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Immerse yourself in the magic of Japan — a 7-day journey from neon-lit cityscapes to serene shrines, where every step reveals rich culture, futuristic marvels, and timeless beauty — all hosted by our local expert.
      </li>
      <li>
        Begin your adventure in Tokyo, where ancient temples meet towering skyscrapers. Experience vibrant nightlife, iconic landmarks, and sushi tasting in the heart of the city.
      </li>
      <li>
        Ride the bullet train to Kyoto to explore golden pavilions, zen gardens, and geisha alleys. Marvel at the Fushimi Inari Shrine and its thousand red gates during a spiritual walk.
      </li>
      <li>
        Unwind in Hakone with a scenic lake cruise and rejuvenating onsen spa, as Mount Fuji’s silhouette frames your journey with poetic grace and postcard-worthy views.
      </li>
      <li>
        Curated with seamless transfers, guided experiences, and premium stays — this Japan escape blends tradition, technology, and tranquility for a truly unforgettable hosted trip.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Japan Itinerary Images */}
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
"https://i.postimg.cc/zf0GNBnX/japan-day1-airport-cab.jpg",
"https://i.postimg.cc/wvMTjpV5/japan-day1-shibuya-arrival.jpg",
"https://i.postimg.cc/9MkX4n86/japan-day2-sensoji-temple.jpg",
"https://i.postimg.cc/0jJk70hb/japan-day2-tokyo-skytree.jpg",
"https://i.postimg.cc/7Pp7dsHt/japan-day3-cherrybridge-walk.jpg",
"https://i.postimg.cc/BZ8Hh901/japan-day3-kimono-blossoms.jpg",
"https://i.postimg.cc/t7QXkVHD/japan-day4-bullettrain-mountfuji.jpg",
"https://i.postimg.cc/HkbrqdZV/japan-day4-shinkansen-inside.jpg",
"https://i.postimg.cc/G2m9TYcy/japan-day5-bamboo-forest.jpg",
"https://i.postimg.cc/1zHfzMZS/japan-day5-golden-pavilion.jpg",
"https://i.postimg.cc/7LD5DddX/japan-day6-fushimiinari-torii.jpg",
"https://i.postimg.cc/JnY0Nnnd/japan-day6-kyoto-foodmarket.jpg",
"https://i.postimg.cc/qqtRjT6B/japan-day7-airport-farewell.jpg",
"https://i.postimg.cc/hvHGY5VL/japan-day7-japanstreet-shopping.jpg"

    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img src={img} alt={`Japan Itinerary Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>


  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    7 Days in Japan
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

{/* ✅ GUEST REVIEWS SECTION – Fully Responsive (Japan) */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Aanya Joshi */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750221755/japanaanya1_b9dsln.jpg" alt="Aanya Joshi" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Aanya Joshi</p>
          <p className="text-sm text-gray-500">Solo traveler from Bangalore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        I always dreamt of walking under cherry blossoms in a kimono – and Japan delivered! BookForTravel made my solo trip super smooth and fun. Safe hotels, local help, and the sushi tours – full paisa vasool experience!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-aanya", prevEl: ".prev-aanya" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221756/japanaanya2_blel7n.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221755/japanaanya3_hgqsqu.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Aanya Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-aanya  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-aanya text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>

        </div>
      </Swiper>
    </div>

    {/* Raghav & Sneha Kapoor */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japanraghav1_hkg7kq.jpg" alt="Raghav & Sneha" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Raghav & Sneha Kapoor</p>
          <p className="text-sm text-gray-500">Couple from Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Every moment in Japan felt straight out of a Yash Raj film! Mt. Fuji views, Kyoto streets, and those ramen nights — all perfectly planned. BookForTravel gave us a dream honeymoon, without any tension or surprises!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-raghav", prevEl: ".prev-raghav" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221764/japanraghav2_ttdghi.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221765/japanraghav3_boxk1o.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Raghav & Sneha Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-raghav  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-raghav text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>

        </div>
      </Swiper>
    </div>

    {/* The Nair Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japannair1_dkoivf.jpg" alt="The Nair Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Nair Family</p>
          <p className="text-sm text-gray-500">Family from Kochi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Japan was a wonderland for our family. Bullet train rides, robot cafes, and Osaka Castle — our kids were thrilled! BookForTravel took care of every detail, so we just enjoyed. Full marks for this family-friendly trip!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-nair", prevEl: ".prev-nair" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japannair2_qy6d0d.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221758/japannair3_b65wm8.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Nair Family Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-nair  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-nair text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>

        </div>
      </Swiper>
    </div>
  </div>



{/* ✅ Mobile View – Japan Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Aanya Joshi',
      city: 'Bangalore, India',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221755/japanaanya1_b9dsln.jpg",
      text: `I always dreamt of walking under cherry blossoms in a kimono – and Japan delivered! BookForTravel made my solo trip super smooth and fun. Safe hotels, local help, and the sushi tours – full paisa vasool experience!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221756/japanaanya2_blel7n.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221755/japanaanya3_hgqsqu.jpg"
      ],
      id: 'aanya'
    },
    {
      name: 'Raghav & Sneha Kapoor',
      city: 'Delhi, India',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japanraghav1_hkg7kq.jpg",
      text: `Every moment in Japan felt straight out of a Yash Raj film! Mt. Fuji views, Kyoto streets, and those ramen nights — all perfectly planned. BookForTravel gave us a dream honeymoon, without any tension or surprises!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221764/japanraghav2_ttdghi.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221765/japanraghav3_boxk1o.jpg"
      ],
      id: 'raghavsneha'
    },
    {
      name: 'The Nair Family',
      city: 'Kochi, India',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japannair1_dkoivf.jpg",
      text: `Japan was a wonderland for our family. Bullet train rides, robot cafes, and Osaka Castle — our kids were thrilled! BookForTravel took care of every detail, so we just enjoyed. Full marks for this family-friendly trip!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221757/japannair2_qy6d0d.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750221758/japannair3_b65wm8.jpg"
      ],
      id: 'nairfamily'
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
  defaultPackage="Japan Luxury Escape: Cherry Blossoms, Temples & Bullet Trains"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Japan trip?',
      answer: 'Click the "Post Enquiry" button and our Japan travel expert will call you within 6 hours to help you plan and confirm.'
    }, {
      question: 'Can I customize the Japan itinerary?',
      answer: 'Yes! You can choose to add experiences like Mount Fuji hikes, themed cafés, or cultural stays — fully personalized.'
    }, {
      question: 'Are bullet train passes included?',
      answer: 'We offer options with or without the JR Pass. Our team will recommend the best rail pass based on your travel route.'
    }, {
      question: 'Is Japan safe for solo or first-time travelers?',
      answer: 'Extremely safe. Plus, our hosted packages ensure additional comfort with curated guides and local assistance throughout.'
    }, {
      question: 'What’s the booking and cancellation policy?',
      answer: 'Secure your spot with a 30% payment. Enjoy free modifications or cancellation up to 15 days before the trip.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>

</>
);
};

export default JapanLuxuryEscape;



