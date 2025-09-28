// ✅ VietnamHanoiDanang.jsx – Hero, Itinerary & Review Images

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

// ✅ Hero Images – Vietnam Tour
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov1_dml8rn.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov3_awiz1k.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov5_ezhdkh.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov6_ynteg8.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov2_viplt1.png",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov4_fud4nk.png"
];

// ✅ Itinerary Day-wise Images
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904262/day1_1_xjwjkr.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904259/day1_2_vdfty4.png"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904260/day2_1_y0komh.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904260/day2_2_d9xemj.png"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904261/day3_1_ejhezm.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day3_2_sycai1.png"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day4_1_j6ydyn.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day4_2_ayopgi.png"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904254/day5_1_bvdkdp.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/day5_2_nrmebo.png"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904255/day6_1_fn5bob.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904252/day6_2_gygik4.png"
  ],
  day7: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904255/day7_1_nlytn4.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904253/day7_2_ktke5k.png"
  ]
};

const VietnamHanoiDanang = () => {
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

// ✅ Reviewer 1 – Neha Verma (Solo Traveler from Delhi)
const reviewer1 = {
  name: "Neha Verma",
  role: "Solo traveler from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/neha_1_hujiw5.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904252/neha_2_d3j5bl.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/neha_3_wygu61.png"
  ],
  review:
    "Exploring Vietnam alone felt safe, exciting and deeply refreshing. From lantern-lit Hanoi streets to kayaking in Ha Long Bay, every moment was magical. BookForTravel made my solo trip smooth, fun, and unforgettable!"
};

// ✅ Reviewer 2 – Rohan & Priya Mehta (Couple from Mumbai)
const reviewer2 = {
  name: "Rohan & Priya Mehta",
  role: "Couple from Mumbai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905176/rohan1_arvwbj.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905179/rohan2_ejjlqr.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905179/rohan3_l7zl2g.png"
  ],
  review:
    "A dreamy romantic escape! Sunset views on Ha Long Bay, lantern walks in Hoi An, and the Golden Bridge were pure magic. Every detail was handled perfectly — BookForTravel made our Vietnam honeymoon effortless and special."
};

// ✅ Reviewer 3 – Sharma Family (Family from Bangalore)
const reviewer3 = {
  name: "Sharma Family",
  role: "Family from Bangalore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905180/sharma1_tsd6vm.png",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905177/sharma2_ygbdkk.png",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905177/sharma3_t2prtw.png"
  ],
  review:
    "Vietnam was a joy for our family! The kids loved Ba Na Hills, while we enjoyed Hanoi’s culture and Ninh Binh’s landscapes. Hotels, transfers, guides — all seamless. BookForTravel turned our family holiday into pure happiness."
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Hanoi & Half-day City Tour',
    description: 'Arrive at Noi Bai International Airport and transfer to your hotel. Afternoon city tour covering Tran Quoc Pagoda, Temple of Literature, and Hoa Lo Prison.',
    activities: [
      'Private Airport Pickup from Noi Bai International Airport',
      'Visit Tran Quoc Pagoda on West Lake',
      'Explore Temple of Literature & Hoa Lo Prison',
      'Optional Cyclo Ride or Water Puppet Show'
    ],
    transfers: [
      'Airport to Hotel Transfer',
      'Evening City Tour Transfers'
    ],
    hotel: 'Stay at a 4-star Hotel in Hanoi',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904262/day1_1_xjwjkr.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904259/day1_2_vdfty4.png"
    ]
  },
  {
    day: 'Day 2',
    title: 'Ninh Binh – Ancient Capital & Boat Ride',
    description: 'Enjoy a full-day tour to Ninh Binh with cycling, a traditional Vietnamese lunch, a boat trip through Tam Coc or Trang An, and hike up Mua Cave for panoramic views.',
    activities: [
      'Morning Transfer to Ninh Binh',
      'Cycling to Hoa Lu Ancient Capital',
      'Boat Trip through Tam Coc or Trang An',
      'Climb Mua Cave viewpoint for 360° views'
    ],
    transfers: [
      'Hanoi to Ninh Binh Round Trip',
      'Intra-day Transfers'
    ],
    hotel: 'Stay at a 4-star Hotel in Hanoi',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904260/day2_1_y0komh.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904260/day2_2_d9xemj.png"
    ]
  },
  {
    day: 'Day 3',
    title: 'Ha Long Bay – Luxury Overnight Cruise',
    description: 'Board a luxury cruise at Tuan Chau Harbor. Visit Surprise Cave and Titop Island, enjoy a sunset cooking class, barbecue dinner, and optional squid fishing.',
    activities: [
      'Transfer to Tuan Chau Harbor',
      'Cruise Welcome Drink & Safety Briefing',
      'Explore Sung Sot (Surprise) Cave',
      'Titop Island Visit & Beach Time',
      'Evening Cooking Class & Barbecue Dinner'
    ],
    transfers: [
      'Hanoi to Ha Long Bay Transfer',
      'Cruise Transfers'
    ],
    hotel: 'Stay at a 5-star Luxury Cruise Cabin',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904261/day3_1_ejhezm.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day3_2_sycai1.png"
    ]
  },
  {
    day: 'Day 4',
    title: 'Ha Long Bay – Kayaking & Return to Hanoi',
    description: 'Start with sunrise on the bay, visit a Pearl Farm, enjoy kayaking, then check out after onboard lunch before returning to Hanoi.',
    activities: [
      'Sunrise on Ha Long Bay',
      'Visit Local Pearl Farm',
      'Kayaking in Calm Waters',
      'Final Cruise Lunch before Checkout'
    ],
    transfers: [
      'Cruise to Hanoi Transfer'
    ],
    hotel: 'Stay at a 4-star Hotel in Hanoi',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day4_1_j6ydyn.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day4_2_ayopgi.png"
    ]
  },
  {
    day: 'Day 5',
    title: 'Fly to Danang – Son Tra, Marble Mountains & Hoi An',
    description: 'Morning flight to Danang, visit Linh Ung Pagoda at Son Tra Peninsula, explore Marble Mountains, and enjoy lantern-lit evening in Hoi An.',
    activities: [
      'Morning Flight to Danang',
      'Visit Linh Ung Pagoda – Son Tra Peninsula',
      'Marble Mountains Exploration',
      'Hoi An Lantern Town & Japanese Bridge'
    ],
    transfers: [
      'Airport Pickup in Danang',
      'City Tour & Hoi An Transfers'
    ],
    hotel: 'Stay at a 4-star Hotel in Danang',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904254/day5_1_bvdkdp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/day5_2_nrmebo.png"
    ]
  },
  {
    day: 'Day 6',
    title: 'Ba Na Hills – Golden Bridge & Fantasy Park',
    description: 'Enjoy Ba Na Hills with a cable car ride, visit the Golden Bridge, French Village, Fantasy Park, and have a buffet lunch at a 4★ restaurant.',
    activities: [
      'Cable Car Ride to Ba Na Hills',
      'Walk on Golden Bridge',
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904255/day6_1_fn5bob.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904252/day6_2_gygik4.png"
    ]
  },
  {
    day: 'Day 7',
    title: 'Departure from Danang',
    description: 'Transfer to Danang International Airport according to your flight time.',
    activities: [
      'Breakfast at Hotel',
      'Private Airport Transfer'
    ],
    transfers: [
      'Hotel to Danang Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904255/day7_1_nlytn4.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904253/day7_2_ktke5k.png"
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
  '5 nights stay in 4★ hotels + 1 night on a 5★ cruise with daily breakfast',
  'Airport pickup and drop as per itinerary',
  'Half-day Hanoi city tour including Tran Quoc Pagoda, Temple of Literature & Hoa Lo Prison',
  'Day trip to Ninh Binh with cycling, sampan boat ride at Tam Coc/Trang An & Mua Cave hike',
  'Overnight luxury cruise in Ha Long Bay with kayaking & cooking class',
  'Guided visit to Pearl Farm, Sung Sot Cave & Titop Island in Ha Long Bay',
  'Excursion to Marble Mountains, Linh Ung Pagoda & Hoi An lantern-lit evening walk',
  'Day trip to Ba Na Hills with Golden Bridge, French Village & Fantasy Park entry',
  'All sightseeing tours and transfers on seat-in-coach (SIC) or group basis',
  'English-speaking local guide during tours',
  '24/7 customer support during the trip'
];

const exclusions = [
  'International flight tickets to and from Vietnam',
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
    {/* ✅ HERO CAROUSEL SECTION – Vietnam */}
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
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov1_dml8rn.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov3_awiz1k.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov5_ezhdkh.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov6_ynteg8.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov2_viplt1.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758885614/herov4_fud4nk.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Vietnam Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>


{/* ✅ OVERLAY CONTENT */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[500px] text-white text-center w-[90%]">
  <h1 className="text-[32px] md:text-[38px] font-bold mb-2">Vietnam Hanoi & Danang Group Escape</h1>
  <p className="text-[16px] md:text-[18px] mb-2">
    7 Days of culture, limestone bays & coastal highlights – Hosted by our local expert.
  </p>

  <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
    <div className="flex items-center gap-2">
      <span className="line-through text-gray-300">INR 74,999</span>
      <span className="text-green-400 font-semibold">INR 64,999</span>
    </div>
    <div className="text-white">⭐ 4.8 (92 reviews)</div>
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
    <span className="bg-black text-white px-3 py-1 rounded-full">7 Days / 6 Nights</span>
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
        Experience the essence of Vietnam in 7 immersive days — from Hanoi’s history to Ha Long’s emerald bays and Danang’s coastal charm — guided by our expert host.
      </li>
      <li>
        Begin in Hanoi: explore Tran Quoc Pagoda, Temple of Literature, and bustling Old Quarter before a scenic day trip to Ninh Binh with boat rides and cave hikes.
      </li>
      <li>
        Cruise through Ha Long Bay on a luxury vessel, kayak among limestone cliffs, visit Surprise Cave, and enjoy an onboard cooking class with sunset views.
      </li>
      <li>
        Discover Danang’s Marble Mountains, Linh Ung Pagoda, and lantern-lit Hoi An, then ascend Ba Na Hills for the iconic Golden Bridge and French Village.
      </li>
      <li>
        With handpicked stays, guided sightseeing, group camaraderie, and 24/7 support, this hosted escape blends culture, adventure, and comfort seamlessly.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Vietnam Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904262/day1_1_xjwjkr.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904259/day1_2_vdfty4.png",
      // Day 2
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904260/day2_1_y0komh.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904260/day2_2_d9xemj.png",
      // Day 3
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904261/day3_1_ejhezm.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day3_2_sycai1.png",
      // Day 4
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day4_1_j6ydyn.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904256/day4_2_ayopgi.png",
      // Day 5
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904254/day5_1_bvdkdp.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/day5_2_nrmebo.png",
      // Day 6
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904255/day6_1_fn5bob.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904252/day6_2_gygik4.png",
      // Day 7
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904255/day7_1_nlytn4.png",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904253/day7_2_ktke5k.png"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Vietnam Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    7 Days in Vietnam — Hanoi • Ha Long • Danang
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

{/* ✅ GUEST REVIEWS SECTION – Vietnam */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Neha Verma */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/neha_1_hujiw5.png" alt="Neha Verma" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Neha Verma</p>
          <p className="text-sm text-gray-500">Solo traveler from Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Exploring Vietnam alone felt safe, exciting and deeply refreshing. From lantern-lit Hanoi streets to kayaking in Ha Long Bay, every moment was magical. BookForTravel made my solo trip smooth, fun, and unforgettable!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-neha", prevEl: ".prev-neha" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904252/neha_2_d3j5bl.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/neha_3_wygu61.png"
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

    {/* Rohan & Priya Mehta */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758905176/rohan1_arvwbj.png" alt="Rohan & Priya Mehta" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rohan & Priya Mehta</p>
          <p className="text-sm text-gray-500">Couple from Mumbai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        A dreamy romantic escape! Sunset views on Ha Long Bay, lantern walks in Hoi An, and the Golden Bridge were pure magic. Every detail was handled perfectly — BookForTravel made our Vietnam honeymoon effortless and special.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rohan", prevEl: ".prev-rohan" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905179/rohan2_ejjlqr.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905179/rohan3_l7zl2g.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rohan Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rohan text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rohan  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Sharma Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1758905180/sharma1_tsd6vm.png" alt="Sharma Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Sharma Family</p>
          <p className="text-sm text-gray-500">Family from Bangalore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Vietnam was a joy for our family! The kids loved Ba Na Hills, while we enjoyed Hanoi’s culture and Ninh Binh’s landscapes. Hotels, transfers, guides — all seamless. BookForTravel turned our family holiday into pure happiness.
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-sharma", prevEl: ".prev-sharma" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905177/sharma2_ygbdkk.png",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905177/sharma3_t2prtw.png"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Sharma Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-sharma text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-sharma  text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>


{/* ✅ Mobile View – Vietnam Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Neha Verma',
      city: 'Solo traveler from Delhi',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/neha_1_hujiw5.png",
      text: `Exploring Vietnam alone felt safe, exciting and deeply refreshing. From lantern-lit Hanoi streets to kayaking in Ha Long Bay, every moment was magical. BookForTravel made my solo trip smooth, fun, and unforgettable!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904252/neha_2_d3j5bl.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758904251/neha_3_wygu61.png"
      ],
      id: 'neha'
    },
    {
      name: 'Rohan & Priya Mehta',
      city: 'Couple from Mumbai',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905176/rohan1_arvwbj.png",
      text: `A dreamy romantic escape! Sunset views on Ha Long Bay, lantern walks in Hoi An, and the Golden Bridge were pure magic. Every detail was handled perfectly — BookForTravel made our Vietnam honeymoon effortless and special.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905179/rohan2_ejjlqr.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905179/rohan3_l7zl2g.png"
      ],
      id: 'rohan'
    },
    {
      name: 'Sharma Family',
      city: 'Family from Bangalore',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905180/sharma1_tsd6vm.png",
      text: `Vietnam was a joy for our family! The kids loved Ba Na Hills, while we enjoyed Hanoi’s culture and Ninh Binh’s landscapes. Hotels, transfers, guides — all seamless. BookForTravel turned our family holiday into pure happiness.`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905177/sharma2_ygbdkk.png",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1758905177/sharma3_t2prtw.png"
      ],
      id: 'sharma'
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
  defaultPackage="Vietnam — Hanoi, Ha Long & Danang: 7D/6N Hosted Group Tour"
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
      answer: 'Yes! We can personalize everything — whether it’s adding extra days in Hoi An, private transfers, or hotel upgrades.'
    }, {
      question: 'Does the package include flights and visa?',
      answer: 'International flights and visa are not included in the base package, but we offer full assistance for finding the best fares and documentation support.'
    }, {
      question: 'Is it suitable for honeymooners and families?',
      answer: 'Yes! This is a popular hosted itinerary for couples, families, and solo travelers — with activities and pacing that suit all groups.'
    }, {
      question: 'What is your payment and cancellation policy?',
      answer: 'You pay 30% to reserve your spot. Flexible cancellation or date modification available up to 15 days prior to departure.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>

</>
);
};

export default VietnamHanoiDanang;



