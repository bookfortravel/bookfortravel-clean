// ✅ DanangPhuquoc.jsx – Hero, Itinerary & Review Images

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

// ✅ Hero Images – Da Nang & Phu Quoc
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965176/herob1_u3wqts.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965175/herob2_lwbk8r.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965174/herob3_nnlihy.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965173/herob5_xcsl2v.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965173/herob4_l058lw.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965173/herob6_hsmopz.png"
];

// ✅ Itinerary Day-wise Images (Da Nang → Phu Quoc)
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965136/day1-1_ynxiel.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965133/day1-2_q2ewtk.png"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965133/day2-1_syrcyp.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965130/day2-2_r3vdeo.png"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965129/day3-1_ld8owq.png",
    // using the available alternate image as second image for day3
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965130/day2-2_r3vdeo.png"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965128/day4-1_gswwo4.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965127/day4-2_jjchoy.png"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965127/day5-1_qkfmvn.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965120/day5-2_czntx4.png"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965122/day6-1_s7jk16.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965121/day6-2_ylg3lb.png"
  ]
};

const DanangPhuquoc = () => {
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

// ✅ Reviewer 1 – Ananya Sen (Solo Traveler)
const reviewer1 = {
  name: "Ananya Sen",
  role: "Solo traveler from Kolkata",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965120/ananya_1_lvbas1.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965119/ananya2_payivy.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965119/ananya3_h5jexw.png"
  ],
  review:
    "Exploring Vietnam alone felt safe, exciting and deeply refreshing. From lantern-lit Hanoi streets to kayaking in Ha Long Bay, every moment was magical. BookForTravel made my solo trip smooth, fun, and unforgettable!"
};

// ✅ Reviewer 2 – Arjun & Meera Nair (Couple from Kochi)
const reviewer2 = {
  name: "Arjun & Meera Nair",
  role: "Couple from Kochi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/arjun1_jsesqr.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/arjun2_w3othg.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965112/arjun3_rkt5k4.png"
  ],
  review:
    "A dreamy romantic escape! Sunset views on Ha Long Bay, lantern walks in Hoi An, and the Golden Bridge were pure magic. Every detail was handled perfectly — BookForTravel made our Vietnam honeymoon effortless and special."
};

// ✅ Reviewer 3 – Patel Family (Family from Ahmedabad)
const reviewer3 = {
  name: "Patel Family",
  role: "Family from Ahmedabad",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/patel1_h3wxau.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/patel2_fudzlb.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965112/patel3_e6sbyh.png"
  ],
  review:
    "Vietnam was a joy for our family! The kids loved Ba Na Hills, while we enjoyed Hanoi’s culture and Ninh Binh’s landscapes. Hotels, transfers, guides — all seamless. BookForTravel turned our family holiday into pure happiness."
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Danang – Son Tra Peninsula & Marble Mountains',
    description: 'Arrive in Danang, transfer to hotel, then visit Linh Ung Pagoda on Son Tra Peninsula and explore Marble Mountains before evening at leisure.',
    activities: [
      'Private Airport Pickup from Danang International Airport',
      'Visit Linh Ung Pagoda – Son Tra Peninsula',
      'Explore Marble Mountains & Stone Carving Village',
      'Evening Free at Leisure'
    ],
    transfers: [
      'Airport to Hotel Transfer',
      'City Tour Transfers'
    ],
    hotel: 'Stay at a 4-star Hotel in Danang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965136/day1-1_ynxiel.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965133/day1-2_q2ewtk.png"
    ]
  },
  {
    day: 'Day 2',
    title: 'Ba Na Hills – Golden Bridge & Fantasy Park',
    description: 'Take a cable car to Ba Na Hills, walk across the Golden Bridge, explore French Village and Fantasy Park, with buffet lunch included.',
    activities: [
      'Cable Car Ride to Ba Na Hills',
      'Walk across Golden Bridge',
      'Explore French Village',
      'Visit Fantasy Park Amusement Zone',
      'Buffet Lunch at 4★ Restaurant'
    ],
    transfers: [
      'Hotel to Ba Na Hills Transfer',
      'Return to Danang Hotel'
    ],
    hotel: 'Stay at a 4-star Hotel in Danang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965133/day2-1_syrcyp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965130/day2-2_r3vdeo.png"
    ]
  },
  {
    day: 'Day 3',
    title: 'Hoi An Ancient Town Tour',
    description: 'Morning free, later visit Hoi An Ancient Town with highlights including Japanese Covered Bridge, Chinese Assembly Hall, and lantern-lit streets.',
    activities: [
      'Hoi An Ancient Town Exploration',
      'Japanese Covered Bridge Visit',
      'Fukien Assembly Hall',
      'Lantern-Lit Street Walk'
    ],
    transfers: [
      'Danang to Hoi An Round Trip'
    ],
    hotel: 'Stay at a 4-star Hotel in Danang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965129/day3-1_ld8owq.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965130/day2-2_r3vdeo.png" // reused
    ]
  },
  {
    day: 'Day 4',
    title: 'Fly to Phu Quoc – Beaches & Relaxation',
    description: 'Morning flight to Phu Quoc. Upon arrival, transfer to hotel and enjoy the beach or optional water activities.',
    activities: [
      'Morning Flight to Phu Quoc',
      'Private Airport Pickup in Phu Quoc',
      'Relax at Hotel or Beach',
      'Optional Water Activities'
    ],
    transfers: [
      'Danang Hotel to Airport Transfer',
      'Phu Quoc Airport to Hotel Transfer'
    ],
    hotel: 'Stay at a 4-star Hotel in Phu Quoc',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965128/day4-1_gswwo4.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965127/day4-2_jjchoy.png"
    ]
  },
  {
    day: 'Day 5',
    title: 'Phu Quoc Island Tour',
    description: 'Full-day Phu Quoc sightseeing covering local villages, beaches, pepper farms, and optional cable car ride to Hon Thom Island.',
    activities: [
      'Visit Local Fishing Villages',
      'Explore Pepper Farms',
      'Relax at Phu Quoc Beaches',
      'Optional Hon Thom Cable Car Ride'
    ],
    transfers: [
      'Full-Day Island Sightseeing Transfers'
    ],
    hotel: 'Stay at a 4-star Hotel in Phu Quoc',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965127/day5-1_qkfmvn.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965120/day5-2_czntx4.png"
    ]
  },
  {
    day: 'Day 6',
    title: 'Departure from Phu Quoc',
    description: 'Free time at leisure until your transfer to Phu Quoc Airport for departure.',
    activities: [
      'Breakfast at Hotel',
      'Free Time Until Departure',
      'Private Airport Transfer'
    ],
    transfers: [
      'Hotel to Phu Quoc Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965122/day6-1_s7jk16.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965121/day6-2_ylg3lb.png"
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
  '5 nights stay in 4★ hotels with daily breakfast',
  'Airport pickup and drop as per itinerary',
  'Visit Son Tra Peninsula (Linh Ung Pagoda) & Marble Mountains in Danang',
  'Day trip to Ba Na Hills with Golden Bridge, French Village & Fantasy Park entry',
  'Guided evening tour of Hoi An Ancient Town with Japanese Bridge & lantern-lit streets',
  'Domestic flight assistance between Danang and Phu Quoc (tickets not included)',
  'Full-day Phu Quoc sightseeing covering local villages, pepper farms & beaches',
  'All sightseeing tours and transfers on seat-in-coach (SIC) or group basis',
  'English-speaking local guide during tours',
  '24/7 customer support during the trip'
];

const exclusions = [
  'International and domestic flight tickets to and within Vietnam',
  'Meals not mentioned in inclusions (lunch/dinner)',
  'Personal expenses like shopping, spa, or additional shows',
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
    {/* ✅ HERO CAROUSEL SECTION – Danang + Phu Quoc */}
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
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965176/herob1_u3wqts.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965175/herob2_lwbk8r.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965174/herob3_nnlihy.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965173/herob5_xcsl2v.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965173/herob4_l058lw.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965173/herob6_hsmopz.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Danang-PhuQuoc Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
        <h1 className="text-[32px] md:text-[38px] font-bold mb-2">
          Danang & Phu Quoc Group Escape
        </h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          6 Days of golden bridges, lantern towns & tropical beaches – Hosted by our local expert.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 72,999</span>
            <span className="text-green-400 font-semibold">INR 62,999</span>
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
        Discover Vietnam’s coastal and island charm in 6 enriching days — from Danang’s cultural gems to the serene beaches of Phu Quoc — guided by our expert host.
      </li>
      <li>
        Start your journey in Danang with visits to Linh Ung Pagoda and Marble Mountains, followed by the lantern-lit magic of Hoi An Ancient Town.
      </li>
      <li>
        Ride the cable car to Ba Na Hills, walk the Golden Bridge, explore French Village, and enjoy fun-filled adventures at Fantasy Park.
      </li>
      <li>
        Fly to Phu Quoc for sun-kissed beaches, fishing villages, pepper farms, and the option of Vietnam’s longest cable car ride to Hon Thom Island.
      </li>
      <li>
        With curated stays, seamless transfers, guided sightseeing, and 24/7 support, this hosted escape balances relaxation, culture, and adventure perfectly.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Danang + Phu Quoc Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965136/day1-1_ynxiel.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965133/day1-2_q2ewtk.png",
      // Day 2
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965133/day2-1_syrcyp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965130/day2-2_r3vdeo.png",
      // Day 3
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965129/day3-1_ld8owq.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965130/day2-2_r3vdeo.png", // reused
      // Day 4
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965128/day4-1_gswwo4.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965127/day4-2_jjchoy.png",
      // Day 5
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965127/day5-1_qkfmvn.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965120/day5-2_czntx4.png",
      // Day 6
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965122/day6-1_s7jk16.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965121/day6-2_ylg3lb.png"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Danang-PhuQuoc Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    6 Days in Vietnam — Danang • Hoi An • Phu Quoc
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

{/* ✅ GUEST REVIEWS SECTION – Danang & Phu Quoc */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Ananya Sen */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758965120/ananya_1_lvbas1.png" alt="Ananya Sen" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Ananya Sen</p>
          <p className="text-sm text-gray-500">Solo traveler from Kolkata</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Exploring Vietnam alone felt safe, exciting and deeply refreshing. From lantern-lit Hanoi streets to kayaking in Ha Long Bay, every moment was magical. BookForTravel made my solo trip smooth, fun, and unforgettable!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-ananya", prevEl: ".prev-ananya" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965119/ananya2_payivy.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965119/ananya3_h5jexw.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Ananya Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-ananya text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-ananya text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Arjun & Meera Nair */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/arjun1_jsesqr.png" alt="Arjun & Meera Nair" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Arjun & Meera Nair</p>
          <p className="text-sm text-gray-500">Couple from Kochi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        A dreamy romantic escape! Sunset views on Ha Long Bay, lantern walks in Hoi An, and the Golden Bridge were pure magic. Every detail was handled perfectly — BookForTravel made our Vietnam honeymoon effortless and special.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-arjun", prevEl: ".prev-arjun" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/arjun2_w3othg.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965112/arjun3_rkt5k4.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Arjun Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-arjun text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-arjun text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Patel Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/patel1_h3wxau.png" alt="Patel Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Patel Family</p>
          <p className="text-sm text-gray-500">Family from Ahmedabad</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Vietnam was a joy for our family! The kids loved Ba Na Hills, while we enjoyed Hanoi’s culture and Ninh Binh’s landscapes. Hotels, transfers, guides — all seamless. BookForTravel turned our family holiday into pure happiness.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-patel", prevEl: ".prev-patel" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/patel2_fudzlb.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965112/patel3_e6sbyh.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Patel Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-patel text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-patel text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>

{/* ✅ Mobile View – Danang & Phu Quoc Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Ananya Sen',
      city: 'Solo traveler from Kolkata',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965120/ananya_1_lvbas1.png",
      text: `Exploring Vietnam alone felt safe, exciting and deeply refreshing. From lantern-lit Hanoi streets to kayaking in Ha Long Bay, every moment was magical. BookForTravel made my solo trip smooth, fun, and unforgettable!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965119/ananya2_payivy.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965119/ananya3_h5jexw.png"
      ],
      id: 'ananya'
    },
    {
      name: 'Arjun & Meera Nair',
      city: 'Couple from Kochi',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/arjun1_jsesqr.png",
      text: `A dreamy romantic escape! Sunset views on Ha Long Bay, lantern walks in Hoi An, and the Golden Bridge were pure magic. Every detail was handled perfectly — BookForTravel made our Vietnam honeymoon effortless and special.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/arjun2_w3othg.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965112/arjun3_rkt5k4.png"
      ],
      id: 'arjun'
    },
    {
      name: 'Patel Family',
      city: 'Family from Ahmedabad',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/patel1_h3wxau.png",
      text: `Vietnam was a joy for our family! The kids loved Ba Na Hills, while we enjoyed Hanoi’s culture and Ninh Binh’s landscapes. Hotels, transfers, guides — all seamless. BookForTravel turned our family holiday into pure happiness.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965113/patel2_fudzlb.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758965112/patel3_e6sbyh.png"
      ],
      id: 'patel'
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
  defaultPackage="Vietnam — Danang & Phu Quoc: 6D/5N Hosted Group Tour"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Vietnam tour?',
      answer: 'Click the "Post Enquiry" button and one of our local travel experts will connect with you within 6 hours to assist you end-to-end.'
    }, {
      question: 'Is it possible to customize this itinerary?',
      answer: 'Yes! We can personalize everything — whether it’s adding extra days in Phu Quoc, private transfers, or hotel upgrades.'
    }, {
      question: 'Does the package include flights and visa?',
      answer: 'International and domestic flights plus visa are not included in the base package, but we offer full assistance for best fares and documentation support.'
    }, {
      question: 'Is it suitable for honeymooners and families?',
      answer: 'Yes! This itinerary is designed for couples, families, and solo travelers — with activities and relaxation time that suit all groups.'
    }, {
      question: 'What is your payment and cancellation policy?',
      answer: 'You pay ₹5,000 per person as a token during the booking window. Flexible cancellation or date modification is available up to 15 days prior to departure.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>

</>
);
};

export default DanangPhuquoc;


