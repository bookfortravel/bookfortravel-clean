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

// ✅ Hero Images – Kazakhstan
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084117/hero-kazakhstan-canyon1_gfkhlh.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084115/hero-kazakhstan-almaty-skyline_tqzmub.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084127/hero-kazakhstan-koktobe_jlvj8y.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084123/hero-kazakhstan-culture_ckm12d.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084132/hero-kazakhstan-medeu_vf9d8s.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084118/hero-kazakhstan-arbat_il2ydm.jpg"
];

const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084129/itinerary-kazakhstan-airport_dffgug.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084103/itinerary-kazakhstan-park_hmloga.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084097/itinerary-kazakhstan-cathedral_zg7eyl.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084138/itinerary-kazakhstan-bazaar_yxuepz.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084091/itinerary-kazakhstan-canyonwalk_twfvgt.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084165/itinerary-kazakhstan-canyonpicnic_s1pyql.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084093/itinerary-kazakhstan-koktobe-top_twwigr.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084165/itinerary-kazakhstan-cablecar_ykj2i8.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084094/itinerary-kazakhstan-folkshow_flq4hu.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084096/itinerary-kazakhstan-cuisine_ekub1c.jpg"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084132/itinerary-kazakhstan-arbat_kifrf8.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084129/itinerary-kazakhstan-airport_dffgug.jpg"
  ]
};

const KazakhstanLuxuryEscape = () => {
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

// ✅ Reviewer 1 – Priya Deshmukh (Solo traveler from Mumbai)
const reviewer1 = {
  name: "Priya Deshmukh",
  role: "Solo traveler from Mumbai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231093/kazakpriya1_wcqzj4.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231096/kazakpriya2_p3kwww.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231098/kazakpriya3_f9cae1.jpg"
  ],
  review:
    "Kazakhstan was beyond what I imagined! Charyn Canyon gave me goosebumps. Loved the quiet nature trails, the vibrant markets, and the warm people. BookForTravel’s local host made everything smooth and safe. Perfect for a solo escape!"
};

// ✅ Reviewer 2 – Rahul & Neha Sharma (Couple from Delhi)
const reviewer2 = {
  name: "Rahul & Neha Sharma",
  role: "Couple from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231101/kazakrahul1_ghwhpt.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231096/kazakpriya2_p3kwww.jpg", // TEMP placeholder
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231098/kazakpriya3_f9cae1.jpg"  // TEMP placeholder
  ],
  review:
    "A mix of romance and adventure! From Kok-Tobe to Charyn Canyon, every day was memorable. The sunset views were magical. Our host took great care of us. BookForTravel nailed it — we’ll cherish this trip forever!"
};

// ✅ Reviewer 3 – The Bhardwaj Family (Family from Bangalore)
const reviewer3 = {
  name: "The Bhardwaj Family",
  role: "Family from Bangalore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231082/kazakbhardwaj1_vmohsn.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231082/kazakbhardwaj2_xab0qd.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231092/kazakbhardwaj3_esy0uj.jpg"
  ],
  review:
    "Traveling with kids usually needs extra effort, but this was different. The ice rink, museums, and smooth planning made it stress-free. BookForTravel’s local guide made us feel at home. Truly a memorable family vacation!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Almaty & Leisure Walk',
    description: 'Arrive in Almaty and meet your local host. After check-in, enjoy a light walk through Panfilov Park and soak in the local atmosphere.',
    activities: [
      'Airport pickup and hotel check-in',
      'Evening leisure walk at Panfilov Park',
      'Optional dinner at a local Kazakh eatery'
    ],
    transfers: [
      'Airport to Hotel Transfer'
    ],
    hotel: 'Stay at a centrally located hotel in Almaty',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084129/itinerary-kazakhstan-airport_dffgug.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084103/itinerary-kazakhstan-park_hmloga.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Almaty City Tour – Culture & Markets',
    description: 'Explore iconic landmarks like Zenkov Cathedral, Republic Square, and dive into local life at the vibrant Green Bazaar.',
    activities: [
      'Visit Zenkov Cathedral & Republic Square',
      'Explore Green Bazaar',
      'Evening free for local café hopping'
    ],
    transfers: [
      'Hotel to Cathedral and market transfer'
    ],
    hotel: 'Stay at a centrally located hotel in Almaty',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084097/itinerary-kazakhstan-cathedral_zg7eyl.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084138/itinerary-kazakhstan-bazaar_yxuepz.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Day Trip to Charyn Canyon',
    description: 'Head out for a full-day guided tour to the majestic Charyn Canyon with scenic hikes, photo stops, and a relaxing canyon-side picnic.',
    activities: [
      'Scenic drive to Charyn Canyon',
      'Guided hike through canyon trails',
      'Picnic lunch amidst the cliffs'
    ],
    transfers: [
      'Roundtrip private transfer to Charyn Canyon'
    ],
    hotel: 'Stay at a centrally located hotel in Almaty',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084091/itinerary-kazakhstan-canyonwalk_twfvgt.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084165/itinerary-kazakhstan-canyonpicnic_s1pyql.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Kok-Tobe Hill & Ice Skating at Medeu',
    description: 'Ride the cable car to Kok-Tobe Hill for breathtaking views and continue to Medeu — one of the world’s highest-altitude skating rinks.',
    activities: [
      'Cable car ride to Kok-Tobe Hill',
      'Enjoy panoramic views of Almaty',
      'Ice skating at Medeu (optional)'
    ],
    transfers: [
      'Hotel to Hill & Medeu transfer'
    ],
    hotel: 'Stay at a centrally located hotel in Almaty',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084093/itinerary-kazakhstan-koktobe-top_twwigr.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084165/itinerary-kazakhstan-cablecar_ykj2i8.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Cultural Immersion & Cuisine',
    description: 'Delve into Kazakh culture with a live folk music show and traditional cuisine tasting, followed by a museum visit.',
    activities: [
      'Enjoy a live Kazakh folk show',
      'Taste traditional dishes like Beshbarmak',
      'Visit Museum of National Instruments'
    ],
    transfers: [
      'Hotel to cultural venue and back'
    ],
    hotel: 'Stay at a centrally located hotel in Almaty',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084094/itinerary-kazakhstan-folkshow_flq4hu.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084096/itinerary-kazakhstan-cuisine_ekub1c.jpg"
    ]
  },
  {
    day: 'Day 6',
    title: 'Souvenir Shopping & Departure',
    description: 'Wrap up your journey with a stroll through Arbat Street for souvenirs, followed by airport transfer.',
    activities: [
      'Shopping at Arbat pedestrian street',
      'Final stroll through the local art markets'
    ],
    transfers: [
      'Hotel to Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084132/itinerary-kazakhstan-arbat_kifrf8.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084129/itinerary-kazakhstan-airport_dffgug.jpg"
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
          <p className="font-semibold">5 Nights Stay</p>
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
  '5 nights stay in centrally located hotels in Almaty with daily breakfast',
  'Airport pickup and all transfers in comfortable private vehicles',
  'Evening leisure walk at Panfilov Park with host guidance',
  'Full-day guided Almaty city tour with entry to key landmarks',
  'Day trip to Charyn Canyon with picnic lunch and hiking guide',
  'Cable car ride to Kok-Tobe Hill and optional ice skating at Medeu',
  'Kazakh folk music show and traditional cuisine tasting experience',
  'Visit to Museum of National Instruments with entry included',
  'Shopping time at Arbat Street with local host assistance',
  'Dedicated local host for end-to-end trip support'
];

const exclusions = [
  'International flight tickets to and from Almaty',
  'Lunch and dinner not mentioned in inclusions',
  'Personal expenses like souvenirs, drinks, and tips',
  'Travel Insurance (recommended for international travel)',
  'Kazakhstan Visa fee (if applicable based on nationality)'
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
  {/* ✅ HERO CAROUSEL SECTION – Kazakhstan Tour */}
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
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084117/hero-kazakhstan-canyon1_gfkhlh.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084115/hero-kazakhstan-almaty-skyline_tqzmub.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084127/hero-kazakhstan-koktobe_jlvj8y.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084123/hero-kazakhstan-culture_ckm12d.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084132/hero-kazakhstan-medeu_vf9d8s.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084118/hero-kazakhstan-arbat_il2ydm.jpg"
      ].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Kazakhstan Hero Slide ${index + 1}`}
            className="w-full h-full object-cover"
       />
          </SwiperSlide>
        ))}
      </Swiper>

    {/* ✅ OVERLAY CONTENT – Kazakhstan */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
      <h1 className="text-[30px] md:text-[36px] font-bold mb-2">
        Kazakhstan Adventure: Canyons & Cities
      </h1>
      <p className="text-[16px] md:text-[18px] mb-2">
        6 Days of stunning landscapes, canyon hikes, culture, and cable car views across Almaty, Charyn & Kok-Tobe.
      </p>

      <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-300">₹69,999</span>
          <span className="text-green-400 font-semibold">₹55,999</span>
        </div>
        <div className="text-white">⭐ 4.7 (92 reviews)</div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
      >
        
   📩 Post Enquiry
        </button>
      </div>
    </div>

{/* ✅ TRIP SUMMARY BADGES – KAZAKHSTAN */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">6 Days / 5 Nights</span>
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

  {/* ✅ TRIP HIGHLIGHTS – KAZAKHSTAN */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Embark on a hosted 6-day adventure across Kazakhstan’s most scenic and cultural gems — from the red rock wonders of Charyn Canyon to the vibrant streets of Almaty, guided by local experts throughout.
      </li>
      <li>
        Explore Almaty’s historic icons like Zenkov Cathedral and Republic Square, shop at the buzzing Green Bazaar, and glide above the city via cable car to Kok-Tobe Hill.
      </li>
      <li>
        Hike the stunning Charyn Canyon and enjoy a cliffside picnic as you uncover the country’s raw, untouched beauty carved by nature over millions of years.
      </li>
      <li>
        Experience a cultural deep dive through Kazakh folk performances, national cuisine tasting, and interactive museum visits that bring local traditions to life.
      </li>
      <li>
        From ice skating at Medeu to souvenir hunting along Arbat Street — unwind with curated moments of comfort, culture, and discovery on this unforgettable Central Asian escape.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Kazakhstan Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084129/itinerary-kazakhstan-airport_dffgug.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084103/itinerary-kazakhstan-park_hmloga.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084097/itinerary-kazakhstan-cathedral_zg7eyl.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084138/itinerary-kazakhstan-bazaar_yxuepz.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084091/itinerary-kazakhstan-canyonwalk_twfvgt.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084165/itinerary-kazakhstan-canyonpicnic_s1pyql.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084093/itinerary-kazakhstan-koktobe-top_twwigr.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084165/itinerary-kazakhstan-cablecar_ykj2i8.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084094/itinerary-kazakhstan-folkshow_flq4hu.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084096/itinerary-kazakhstan-cuisine_ekub1c.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084132/itinerary-kazakhstan-arbat_kifrf8.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750084129/itinerary-kazakhstan-airport_dffgug.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Kazakhstan Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    6 Days in Kazakhstan
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

    {/* ✅ Priya Deshmukh */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750231093/kazakpriya1_wcqzj4.jpg" alt="Priya Deshmukh" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Priya Deshmukh</p>
          <p className="text-sm text-gray-500">Solo traveler from Mumbai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Kazakhstan was beyond what I imagined! Charyn Canyon gave me goosebumps. Loved the quiet nature trails, and the warm people. BookForTravel’s local host made everything smooth and safe. Perfect for a solo escape!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-priya", prevEl: ".prev-priya" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231096/kazakpriya2_p3kwww.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231098/kazakpriya3_f9cae1.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Priya Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-priya text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-priya text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ Rahul & Neha Sharma */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750231101/kazakrahul1_ghwhpt.jpg" alt="Rahul & Neha Sharma" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rahul & Neha Sharma</p>
          <p className="text-sm text-gray-500">Couple from Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        A mix of romance and adventure! From Kok-Tobe to Charyn Canyon, every day was memorable. The sunset views were magical. Our host took great care of us. BookForTravel nailed it — we’ll cherish this trip forever!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rahul", prevEl: ".prev-rahul" }} loop={true} className="relative">
        {[
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231106/kazakrahul3_al3opm.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231103/kazakrahul2_ph6lt8.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rahul Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rahul text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rahul text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ Bhardwaj Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750231082/kazakbhardwaj1_vmohsn.jpg" alt="The Bhardwaj Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Bhardwaj Family</p>
          <p className="text-sm text-gray-500">Family from Bangalore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Traveling with kids usually needs extra effort, but this was different. The ice rink, museums, and smooth planning made it stress-free. BookForTravel’s local guide made us feel at home. Truly a memorable family vacation!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-bhardwaj", prevEl: ".prev-bhardwaj" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231082/kazakbhardwaj2_xab0qd.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231092/kazakbhardwaj3_esy0uj.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Bhardwaj Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-bhardwaj text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-bhardwaj text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

  </div>




<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[{
    name: "Priya Deshmukh",
    city: "Solo traveler from Mumbai",
    avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231093/kazakpriya1_wcqzj4.jpg",
    text: "Kazakhstan was beyond what I imagined! Charyn Canyon gave me goosebumps. Loved the quiet nature trails,  and the warm people. BookForTravel’s local host made everything smooth and safe. Perfect for a solo escape!",
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231096/kazakpriya2_p3kwww.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231098/kazakpriya3_f9cae1.jpg"
    ],
    id: 'priya'
  }, {
    name: "Rahul & Neha Sharma",
    city: "Couple from Delhi",
    avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231101/kazakrahul1_ghwhpt.jpg",
    text: "A mix of romance and adventure! From Kok-Tobe to Charyn Canyon, every day was memorable. The sunset views were magical. Our host took great care of us. BookForTravel nailed it — we’ll cherish this trip forever!",
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231106/kazakrahul3_al3opm.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231103/kazakrahul2_ph6lt8.jpg"
    ],
    id: 'rahulneha'
  }, {
    name: "The Bhardwaj Family",
    city: "Family from Bangalore",
    avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231082/kazakbhardwaj1_vmohsn.jpg",
    text: "Traveling with kids usually needs extra effort, but this was different. The ice rink, museums, and smooth planning made it stress-free. BookForTravel’s local guide made us feel at home. Truly a memorable family vacation!",
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231082/kazakbhardwaj2_xab0qd.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750231092/kazakbhardwaj3_esy0uj.jpg"
    ],
    id: 'bhardwaj'
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
  defaultPackage="Kazakhstan Adventure: Canyons & Cities"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        question: 'How do I book this Kazakhstan trip?',
        answer: 'Click the "Post Enquiry" button and our expert will contact you within 6 hours to assist with personalized planning and booking.'
      },
      {
        question: 'Can I customize the Kazakhstan itinerary?',
        answer: 'Yes, we offer full customization — whether you want to extend your stay, add adventure activities, or explore other cities like Nur-Sultan.'
      },
      {
        question: 'Are flights and visas included in the package?',
        answer: 'Flights and visa fees are not included, but we offer full support in booking economical flights and applying for Kazakhstan’s e-Visa (if required).'
      },
      {
        question: 'Is this trip suitable for families, couples, or solo travelers?',
        answer: 'Absolutely! Our hosted Kazakhstan tours are designed for all travel types — from adventurous solo travelers to romantic couples and family groups.'
      },
      {
        question: 'What’s the booking and cancellation policy?',
        answer: 'Reserve your spot with just 30% advance. Enjoy free modifications or cancellations up to 15 days before departure — flexible and secure.'
      }
    ].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default KazakhstanLuxuryEscape;




