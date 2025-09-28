// HanoiSapaDanang.jsx
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

// ✅ Hero Images – Hanoi • Sapa • Danang
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994171/herod1_sikfuz.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994174/herod2_dwsjcq.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994173/herod3_iawrys.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994176/herod4_ulmdaa.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994174/herod5_kafcw6.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994177/herod6_vu2ouu.png"
];

// ✅ Itinerary Day-wise Images (Hanoi → Sapa → Halong → Danang)
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994180/day1_1_cejo5c.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994182/day1_2_xpkxwq.png"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994184/day2_1_j9krbr.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994185/day2_2_yk28xd.png"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994149/day3_1_y1cdyc.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994150/day3_2_lpoxxg.png"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994159/day4_1_vdepfz.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994158/day4_2_ahl9if.png"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994158/day5_1_xiaesp.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994151/day5_2_iplqpq.png"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994157/day6_1_em6tlp.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994162/day6_2_yyx6ty.png"
  ],
  day7: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994168/day7_1_jet3ir.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994167/day7_2_nlhlr7.png"
  ],
  day8: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994169/day8_1_libtrq.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994166/day8_2_k2d9tj.png"
  ]
};

const Hanoisapadanang = () => {
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
          <span className="text-left font-semibold text-lg md:text-xl text-gray-800">
            {question}
          </span>
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

// ✅ Reviewer 1 – Priya Kulkarni (Solo Traveler)
const reviewer1 = {
  name: "Priya Kulkarni",
  role: "Solo traveler from Pune",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994143/priya1_aw5xdr.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994143/priya2_nsjn6x.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994178/Priya3_swsuat.jpg"
  ],
  review:
    "Traveling alone to Hanoi, Sapa and Halong Bay was empowering and magical. From misty Fansipan views to evenings on the cruise deck, I felt safe, cared for and inspired. BookForTravel made my solo journey stress-free and unforgettable!"
};

// ✅ Reviewer 2 – Swati & Laxmi (Sisters from Delhi)
const reviewer2 = {
  name: "Swati & Laxmi",
  role: "Sisters from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994178/swati_laxmi1_fowuie.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994152/swati_laxmi2_deddqk.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994149/swati_laxmi3_us2zrp.png"
  ],
  review:
    "Our sister’s getaway was incredible! Trekking to Cat Cat Village, lantern-lit Hoi An nights and the Golden Bridge were unforgettable highlights. The planning was seamless, and BookForTravel gave us the perfect blend of culture, fun and comfort."
};

// ✅ Reviewer 3 – Garg Family (Ladies’ Family Group from Lucknow)
const reviewer3 = {
  name: "Garg Family",
  role: "Ladies’ family group from Lucknow",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994150/Garg1_jg5klw.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994161/garg2_caswhk.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994165/garg3_vrhua0.png"
  ],
  review:
    "Exploring Vietnam together as a family of women felt safe, vibrant and joyful. Ba Na Hills thrilled the kids, while we adored Hanoi’s Old Quarter and Halong sunsets. With BookForTravel’s smooth arrangements, it was a holiday full of laughter."
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Hanoi',
    description: 'Arrive in Hanoi, meet our representative, transfer to hotel in the Old Quarter and enjoy a free evening to explore Hoan Kiem Lake and local streets.',
    activities: [
      'Private Airport Pickup from Noi Bai International Airport',
      'Check-in at 4★ Hotel in Hanoi Old Quarter',
      'Explore Hoan Kiem Lake & Old Quarter',
      'Evening Free at Leisure'
    ],
    transfers: [
      'Airport to Hotel Transfer'
    ],
    hotel: 'Stay at a 4-star Hotel in Hanoi',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994180/day1_1_cejo5c.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994182/day1_2_xpkxwq.png"
    ]
  },
  {
    day: 'Day 2',
    title: 'Hanoi → Sapa – Cat Cat Village',
    description: 'Morning transfer to Sapa. Trek to Cat Cat Village to experience H’mong culture, waterfalls and a French Hydraulic Station.',
    activities: [
      'Coach Transfer from Hanoi to Sapa',
      'Lunch at Local Restaurant',
      'Guided Trek to Cat Cat Village',
      'Dinner & Free Evening in Sapa Town'
    ],
    transfers: [
      'Hanoi to Sapa Transfer',
      'Local Tour Transfers'
    ],
    hotel: 'Stay at a 4-star Hotel in Sapa',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994184/day2_1_j9krbr.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994185/day2_2_yk28xd.png"
    ]
  },
  {
    day: 'Day 3',
    title: 'Sapa – Fansipan Peak → Hanoi',
    description: 'Ride the Muong Hoa Funicular and Fansipan Cable Car to the Roof of Indochina. Return to Hanoi by evening.',
    activities: [
      'Morning Coffee & Breakfast',
      'Muong Hoa Funicular Ride',
      'Fansipan Cable Car & Summit Visit',
      'Return to Hanoi by Coach'
    ],
    transfers: [
      'Sapa to Hanoi Transfer'
    ],
    hotel: 'Stay at a 4-star Hotel in Hanoi',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994149/day3_1_y1cdyc.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994150/day3_2_lpoxxg.png"
    ]
  },
  {
    day: 'Day 4',
    title: 'Hanoi → Halong Bay Cruise',
    description: 'Transfer to Halong Bay and board a 5★ luxury cruise for sightseeing, swimming, and onboard activities.',
    activities: [
      'Transfer to Tuan Chau Wharf',
      'Board 5★ Luxury Cruise with Welcome Drink',
      'Seafood Lunch Onboard',
      'Kayaking & Swimming',
      'Sunset Party & Vietnamese Cooking Class'
    ],
    transfers: [
      'Hanoi to Halong Bay Transfer'
    ],
    hotel: 'Overnight on a 5★ Luxury Cruise',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994159/day4_1_vdepfz.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994158/day4_2_ahl9if.png"
    ]
  },
  {
    day: 'Day 5',
    title: 'Halong Bay → Hanoi → Danang',
    description: 'Morning Tai Chi and cave visit. Disembark, return to Hanoi, collect luggage, and fly to Danang.',
    activities: [
      'Tai Chi Session on Deck',
      'Visit Dark & Bright Cave',
      'Early Lunch & Disembarkation',
      'Return Transfer to Hanoi',
      'Evening Flight to Danang'
    ],
    transfers: [
      'Halong Bay to Hanoi Transfer',
      'Flight from Hanoi to Danang',
      'Danang Airport to Hotel Transfer'
    ],
    hotel: 'Stay at a 4-star Hotel in Danang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994158/day5_1_xiaesp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994151/day5_2_iplqpq.png"
    ]
  },
  {
    day: 'Day 6',
    title: 'Danang – Monkey Mountain, Marble Mountain & Hoi An',
    description: 'Explore Son Tra Peninsula, Linh Ung Pagoda, Marble Mountains, Cam Thanh Coconut Jungle and lantern-lit Hoi An Ancient Town.',
    activities: [
      'Visit Son Tra Peninsula (Monkey Mountain)',
      'Explore Marble Mountains',
      'Basket Boat Ride in Cam Thanh Coconut Jungle',
      'Walking Tour of Hoi An Ancient Town'
    ],
    transfers: [
      'Danang City & Hoi An Transfers'
    ],
    hotel: 'Stay at a 4-star Hotel in Danang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994157/day6_1_em6tlp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994162/day6_2_yyx6ty.png"
    ]
  },
  {
    day: 'Day 7',
    title: 'Ba Na Hills – Golden Bridge',
    description: 'Cable car to Ba Na Hills, walk the Golden Bridge, explore French Village, gardens and Fantasy Park.',
    activities: [
      'Cable Car Ride to Ba Na Hills',
      'Walk across Golden Bridge',
      'Explore Le Jardin Gardens',
      'French Village & Fantasy Park',
      'Buffet Lunch at Ba Na Hills'
    ],
    transfers: [
      'Danang to Ba Na Hills Round Trip'
    ],
    hotel: 'Stay at a 4-star Hotel in Danang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994168/day7_1_jet3ir.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994167/day7_2_nlhlr7.png"
    ]
  },
  {
    day: 'Day 8',
    title: 'Departure from Danang',
    description: 'Enjoy breakfast at the hotel before your transfer to Danang Airport for departure.',
    activities: [
      'Breakfast at Hotel',
      'Hotel Check-Out',
      'Private Airport Transfer'
    ],
    transfers: [
      'Hotel to Danang Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994169/day8_1_libtrq.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994166/day8_2_k2d9tj.png"
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
  '7 nights stay in 4★ hotels with daily breakfast',
  '1 night stay on a 5★ luxury Halong Bay cruise with all meals',
  'Private airport pickup and drop in Hanoi & Danang',
  'Return transfers from Hanoi to Sapa with guided Cat Cat Village trek',
  'Fansipan Peak experience with funicular & cable car tickets included',
  'Full-day Halong Bay cruise with kayaking, cave visit & onboard activities',
  'Guided day tour of Monkey Mountain, Marble Mountain & Cam Thanh Coconut Jungle',
  'Evening walking tour of Hoi An Ancient Town with Japanese Bridge & lantern-lit streets',
  'Day trip to Ba Na Hills with Golden Bridge, French Village & Fantasy Park entry',
  'All sightseeing tours and transfers on seat-in-coach (SIC) or group basis',
  'English-speaking local guide during group tours',
  '24/7 customer support during the trip'
];

const exclusions = [
  'International and domestic flight tickets (Hanoi ↔ Danang) not included',
  'Meals not mentioned in inclusions (certain lunches/dinners)',
  'Personal expenses like shopping, spa, or optional activities',
  'Travel Insurance (strongly recommended)',
  'Vietnam Visa Fee (payable separately)',
  'Tips for guides/drivers (optional)'
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
    {/* ✅ HERO CAROUSEL SECTION – Hanoi • Sapa • Danang */}
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
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994171/herod1_sikfuz.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994174/herod2_dwsjcq.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994173/herod3_iawrys.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994176/herod4_ulmdaa.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994174/herod5_kafcw6.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994177/herod6_vu2ouu.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Hanoi-Sapa-Danang Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
        <h1 className="text-[32px] md:text-[38px] font-bold mb-2">
          Vietnam- The North & Central Paradise 
        </h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          8 Days of Hanoi, Sapa, Halong Bay & Danang – Hosted by our local expert.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 94,999</span>
            <span className="text-green-400 font-semibold">INR 84,999</span>
          </div>
          <div className="text-white">⭐ 4.9 (124 reviews)</div>
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
    <span className="bg-black text-white px-3 py-1 rounded-full">8 Days / 7 Nights</span>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBus /> <span>Transfers</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBed /> <span>Stay</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaUtensils /> <span>Meals</span>
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
        Experience Vietnam’s best in 8 days — from Hanoi’s Old Quarter and Sapa’s misty peaks to Halong Bay’s cruises and Danang’s golden bridges.
      </li>
      <li>
        Begin in Hanoi with a warm welcome, exploring Hoan Kiem Lake and the vibrant Old Quarter streets steeped in tradition and charm.
      </li>
      <li>
        Journey to Sapa for a trek to Cat Cat Village, ride the Fansipan cable car, and enjoy sweeping mountain views at the Roof of Indochina.
      </li>
      <li>
        Sail through Halong Bay on a 5★ luxury cruise with kayaking, cave exploration, sunset decks, Tai Chi mornings, and local cooking classes.
      </li>
      <li>
        Conclude in Danang with Monkey Mountain, Marble Mountains, Hoi An Ancient Town, and Ba Na Hills — blending culture, nature, and leisure seamlessly.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Hanoi • Sapa • Danang Itinerary Images */}
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
      // Day 1
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994180/day1_1_cejo5c.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994182/day1_2_xpkxwq.png",
      // Day 2
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994184/day2_1_j9krbr.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994185/day2_2_yk28xd.png",
      // Day 3
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994149/day3_1_y1cdyc.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994150/day3_2_lpoxxg.png",
      // Day 4
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994159/day4_1_vdepfz.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994158/day4_2_ahl9if.png",
      // Day 5
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994158/day5_1_xiaesp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994151/day5_2_iplqpq.png",
      // Day 6
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994157/day6_1_em6tlp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994162/day6_2_yyx6ty.png",
      // Day 7
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994168/day7_1_jet3ir.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994167/day7_2_nlhlr7.png",
      // Day 8
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994169/day8_1_libtrq.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994166/day8_2_k2d9tj.png"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Hanoi-Sapa-Danang Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    8 Days in Vietnam — Hanoi • Sapa • Halong Bay • Danang
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

{/* ✅ GUEST REVIEWS SECTION – Hanoi • Sapa • Danang */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Priya Kulkarni */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758994143/priya1_aw5xdr.jpg" alt="Priya Kulkarni" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Priya Kulkarni</p>
          <p className="text-sm text-gray-500">Solo traveler from Pune</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Traveling alone to Hanoi, Sapa and Halong Bay was empowering and magical. From misty Fansipan views to evenings on the cruise deck, I felt safe, cared for and inspired. BookForTravel made my solo journey stress-free and unforgettable!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-priya", prevEl: ".prev-priya" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994143/priya2_nsjn6x.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994178/Priya3_swsuat.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Priya Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-priya text-blue-500 bg-full w-8 h-8 text-2xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-priya text-blue-500 bg-full w-8 h-8 text-2xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Swati & Laxmi */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758994178/swati_laxmi1_fowuie.png" alt="Swati & Laxmi" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Swati & Laxmi</p>
          <p className="text-sm text-gray-500">Sisters from Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Our sister’s getaway was incredible! Trekking to Cat Cat Village, lantern-lit Hoi An nights and the Golden Bridge were unforgettable highlights. The planning was seamless, and BookForTravel gave us the perfect blend of culture, fun and comfort.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-swati", prevEl: ".prev-swati" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994152/swati_laxmi2_deddqk.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994149/swati_laxmi3_us2zrp.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Swati & Laxmi Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-swati text-blue-500 bg-full w-8 h-8 text-2xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-swati text-blue-500 bg-full w-8 h-8 text-2xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Garg Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758994150/Garg1_jg5klw.png" alt="Garg Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Garg Family</p>
          <p className="text-sm text-gray-500">Ladies’ family group from Lucknow</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Exploring Vietnam together as a family of women felt safe, vibrant and joyful. Ba Na Hills thrilled the kids, while we adored Hanoi’s Old Quarter and Halong sunsets. With BookForTravel’s smooth arrangements, it was a holiday full of laughter.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-garg", prevEl: ".prev-garg" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994161/garg2_caswhk.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994165/garg3_vrhua0.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Garg Family Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-garg text-blue-500 bg-full w-8 h-8 text-2xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-garg text-blue-500 bg-full w-8 h-8 text-2xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>

{/* ✅ Mobile View – Hanoi • Sapa • Danang Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Priya Kulkarni',
      city: 'Solo traveler from Pune',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994143/priya1_aw5xdr.jpg",
      text: `Traveling alone to Hanoi, Sapa and Halong Bay was empowering and magical. From misty Fansipan views to evenings on the cruise deck, I felt safe, cared for and inspired. BookForTravel made my solo journey stress-free and unforgettable!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994143/priya2_nsjn6x.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994178/Priya3_swsuat.jpg"
      ],
      id: 'priya'
    },
    {
      name: 'Swati & Laxmi',
      city: 'Sisters from Delhi',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994178/swati_laxmi1_fowuie.png",
      text: `Our sister’s getaway was incredible! Trekking to Cat Cat Village, lantern-lit Hoi An nights and the Golden Bridge were unforgettable highlights. The planning was seamless, and BookForTravel gave us the perfect blend of culture, fun and comfort.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994152/swati_laxmi2_deddqk.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994149/swati_laxmi3_us2zrp.png"
      ],
      id: 'swati'
    },
    {
      name: 'Garg Family',
      city: 'Ladies’ family group from Lucknow',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994150/Garg1_jg5klw.png",
      text: `Exploring Vietnam together as a family of women felt safe, vibrant and joyful. Ba Na Hills thrilled the kids, while we adored Hanoi’s Old Quarter and Halong sunsets. With BookForTravel’s smooth arrangements, it was a holiday full of laughter.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994161/garg2_caswhk.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994165/garg3_vrhua0.png"
      ],
      id: 'garg'
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
  defaultPackage="Vietnam — Hanoi, Sapa, Halong Bay & Danang: 8D/7N Ground Package"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Vietnam tour?',
      answer: 'Click the "Post Enquiry" button and one of our local travel experts will connect with you to assist end-to-end, typically within a few hours.'
    }, {
      question: 'Is it possible to customize this itinerary?',
      answer: 'Yes — we can personalize the trip by adding nights, upgrading hotels, switching cruise options, or arranging private transfers.'
    }, {
      question: 'Are flights and visa included in the price?',
      answer: 'No. The quoted price is ground-only (4★ hotels + 5★ cruise). International and domestic flights, plus visa fees, are not included.'
    }, {
      question: 'Is this itinerary suitable for families and solo travellers?',
      answer: 'Absolutely — the program has a balanced pace with optional activities so couples, families and solo travellers can all enjoy it.'
    }, {
      question: 'What is your payment and cancellation policy?',
      answer: 'A token amount (e.g., ₹5,000 per person) secures your slot during the booking window. Flexible cancellations or date changes are available up to 15 days before departure.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>

</>
);
};

export default Hanoisapadanang;



