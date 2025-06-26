// ✅ EuropeLuxuryEscape.jsx – Hero, Itinerary & Review Images

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

// ✅ Hero Images – Europe
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015059/europe-hero1-paris-cafe_zk78ou.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015060/europe-hero2-swiss-bridge_aurp6q.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015061/europe-hero3-amsterdam-canal_ou7yis.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015063/europe-hero4-swiss-meadow_rappeb.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015063/europe-hero5-florence-duomo_i5oozl.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015076/europe-hero6-paris-rooftop_x9e001.jpg"
];

// ✅ Itinerary Day-wise Images – Europe (2 per day)
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015449/europe-act1-arrival_ctlkwh.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015065/europe-act2-seine-cruise_d9b9p0.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015066/europe-act3-louvre_qtc8sq.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015067/europe-act4-latin-quarter_f2ypnu.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015070/europe-act5-swiss-train_yjhdtc.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015072/europe-act6-lucerne-lake_ffyjlh.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015073/europe-act7-titlis-view_o7hgoo.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015074/europe-act8-glacier-fun_kngk7y.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015053/europe-act9-amsterdam-bike_dkpb8b.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015054/europe-act10-cheese-tasting_q1hguv.jpg"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015053/europe-act11-van-gogh_gos5lj.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015055/europe-act12-jordaan-cafe_tfx9yn.jpg"
  ],
  day7: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015056/europe-act13-florence-duomo_ebz0zy.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015057/europe-act14-cooking-class_zbty2c.jpg"
  ],
  day8: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015055/europe-act15-market-browsing_qfqajl.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015057/europe-act16-departure-wave_gqsekd.jpg"
  ]
};

const EuropeLuxuryEscape = () => {
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

// ✅ Reviewer 1 – Rhea Sharma (Solo Traveler from Delhi)
const reviewer1 = {
  name: "Rhea Sharma",
  role: "Solo traveler from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223155/europerhea1_hkpun4.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223159/europerhea2_zritg1.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223160/europerhea3_i34nlh.jpg"
  ],
  review:
    "Exploring Europe solo was a long-time dream, and BookForTravel made it super easy! Swiss Alps were breathtaking, Amsterdam felt like a postcard. Met other Indian travelers too – felt safe, planned, and full paisa vasool. 10/10!"
};

// ✅ Reviewer 2 – Aarav & Myra Desai (Couple from Mumbai)
const reviewer2 = {
  name: "Aarav & Myra Desai",
  role: "Couple travelers from Mumbai",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223138/europeaarav1_kgtksy.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223138/europeaarav2_qdq5n4.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223139/europeaarav3_n5n09v.jpg"
  ],
  review:
    "Our Europe honeymoon was magical! Paris nights, Venice gondolas, and that dreamy Eiffel kiss. The planning was so smooth — BookForTravel team even suggested hidden spots. Romantic, classy, and stress-free throughout. Forever grateful!"
};

// ✅ Reviewer 3 – The Basu Family (Family from Kolkata)
const reviewer3 = {
  name: "The Basu Family",
  role: "Family from Kolkata",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223150/europebasu1_t6enhw.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223151/europebasu2_ylz06k.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223154/europebasu3_jc1hkf.jpg"
  ],
  review:
    "We traveled with kids and parents – full family trip! From London Eye to Colosseum, everything was well arranged. BookForTravel ensured Indian food spots & smooth logistics. Best part – no visa tension. Just full family masti!"
};
const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Paris & Eiffel Tower Evening',
    description: 'Arrive in Paris and check into your boutique hotel near the Eiffel Tower. In the evening, enjoy a romantic Seine River cruise and explore Montmartre’s cafés.',
    activities: [
      'Private Airport Pickup from Charles de Gaulle',
      'Evening Cruise on the Seine River',
      'Parisian Café Crawl in Montmartre'
    ],
    transfers: [
      'Airport to Paris Hotel Transfer',
      'Evening Transfer to Eiffel Area'
    ],
    hotel: 'Stay at Boutique Hotel near Eiffel Tower, Paris',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015449/europe-act1-arrival_ctlkwh.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015065/europe-act2-seine-cruise_d9b9p0.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Paris Museums & Hidden Alleys',
    description: 'Visit the Louvre for a guided art tour and wander the literary lanes of the Latin Quarter. End the day with a candlelit dinner in a cellar bistro.',
    activities: [
      'Guided Louvre Art Tour',
      'Explore the Latin Quarter & Bookshops',
      'Candlelight Dinner in a Medieval Cellar'
    ],
    transfers: [
      'Metro Day Pass (Zone 1–2)',
      'Evening Bistro Transfer (Optional)'
    ],
    hotel: 'Stay at Boutique Hotel near Eiffel Tower, Paris',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015066/europe-act3-louvre_qtc8sq.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015067/europe-act4-latin-quarter_f2ypnu.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Swiss Alps – Lucerne & Lakeside Stroll',
    description: 'Take a scenic train ride from Paris to Lucerne. In the evening, enjoy a lakeside walk and traditional Swiss fondue dinner.',
    activities: [
      'Scenic Train from Paris to Lucerne',
      'Walk Along Lake Lucerne & Chapel Bridge',
      'Swiss Fondue Dinner at a Local Guesthouse'
    ],
    transfers: [
      'Paris Hotel to Station Transfer',
      'Lucerne Station to Hotel Transfer'
    ],
    hotel: 'Stay at a Lakeside Chalet in Lucerne',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015070/europe-act5-swiss-train_yjhdtc.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015072/europe-act6-lucerne-lake_ffyjlh.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Jungfrau/Titlis Snow Day Adventure',
    description: 'Take a full-day snow adventure to Jungfrau or Mount Titlis. Enjoy cable cars, snow activities, and panoramic views of the Swiss Alps.',
    activities: [
      'Visit to Jungfrau or Mount Titlis',
      'Snow Park Activities & Glacier Views',
      'Alpine Dinner in Swiss Chalet'
    ],
    transfers: [
      'Round Trip Transfers to Snow Station',
      'Hotel Pickup & Drop'
    ],
    hotel: 'Stay at a Lakeside Chalet in Lucerne',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015073/europe-act7-titlis-view_o7hgoo.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015074/europe-act8-glacier-fun_kngk7y.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Amsterdam Arrival – Bikes, Cheese & Canals',
    description: 'Arrive in Amsterdam via train. Enjoy a Dutch bike ride, cheese tasting, and a canal cruise at sunset.',
    activities: [
      'Dutch-Style Bike Tour',
      'Cheese & Wine Cellar Tasting',
      'Sunset Canal Cruise with Local Snacks'
    ],
    transfers: [
      'Lucerne to Amsterdam Train Transfer',
      'Station to Hotel Transfer'
    ],
    hotel: 'Stay at Canal-Facing Boutique Hotel in Amsterdam',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015053/europe-act9-amsterdam-bike_dkpb8b.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015054/europe-act10-cheese-tasting_q1hguv.jpg"
    ]
  },
  {
    day: 'Day 6',
    title: 'Art & Cafés – Van Gogh & Jordaan',
    description: 'Explore the Van Gogh Museum and spend the afternoon in Jordaan’s cafes and flower markets.',
    activities: [
      'Visit to Van Gogh Museum',
      'Café Crawl in Jordaan District',
      'Walk through Flower Market & Canal Sights'
    ],
    transfers: [
      'Tram Day Pass in Amsterdam'
    ],
    hotel: 'Stay at Canal-Facing Boutique Hotel in Amsterdam',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015053/europe-act11-van-gogh_gos5lj.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015055/europe-act12-jordaan-cafe_tfx9yn.jpg"
    ]
  },
  {
    day: 'Day 7',
    title: 'Florence Arrival – Cathedrals & Cuisine',
    description: 'Travel to Florence and explore Piazza del Duomo. Enjoy a hands-on pasta-making session followed by a Tuscan dinner.',
    activities: [
      'Walk Through Piazza del Duomo',
      'Hands-On Pasta Making Workshop',
      'Dinner with Wine Pairing'
    ],
    transfers: [
      'Amsterdam to Florence High-Speed Train',
      'Florence Station to Hotel Transfer'
    ],
    hotel: 'Stay at a Historic Boutique Hotel in Florence',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015056/europe-act13-florence-duomo_ebz0zy.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015057/europe-act14-cooking-class_zbty2c.jpg"
    ]
  },
  {
    day: 'Day 8',
    title: 'Market Mornings & Departure',
    description: 'Spend your final morning exploring local markets and relaxing before your airport transfer.',
    activities: [
      'Explore Florence Leather & Fruit Markets',
      'Relax at a Rooftop Café or Garden'
    ],
    transfers: [
      'Florence Hotel to Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015055/europe-act15-market-browsing_qfqajl.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015057/europe-act16-departure-wave_gqsekd.jpg"
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
          <p className="font-semibold">16+ Activities</p>
        </div>
        <div>
          <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
          <p className="font-semibold">7 Nights Stay</p>
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
  '7 nights stay across Paris, Lucerne, Amsterdam & Florence with daily breakfast',
  'Airport pickup and all intercity travel via scenic trains (Paris–Lucerne–Amsterdam–Florence)',
  'Romantic Seine River cruise and guided art tour at the Louvre',
  'Full-day snow experience to Jungfrau or Mount Titlis in Switzerland',
  'Bike tour, cheese tasting, and canal cruise in Amsterdam',
  'Visit to Van Gogh Museum and café crawl in Jordaan district',
  'Hands-on Tuscan pasta-making class with dinner in Florence',
  'All local transfers via private cabs or day passes',
  'Dedicated assistance from European Travel Host throughout the trip',
  'Europe Visa support & documentation assistance'
];

const exclusions = [
  'International flight tickets to and from Europe',
  'Lunch and dinner not mentioned in inclusions',
  'Personal expenses like shopping, spa treatments, and souvenirs',
  'Travel Insurance (mandatory for Schengen visa)',
  'Europe Visa fee (payable directly at VFS or consulate)'
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
    {/* ✅ HERO CAROUSEL SECTION */}
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
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015059/europe-hero1-paris-cafe_zk78ou.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015060/europe-hero2-swiss-bridge_aurp6q.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015061/europe-hero3-amsterdam-canal_ou7yis.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015063/europe-hero4-swiss-meadow_rappeb.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015063/europe-hero5-florence-duomo_i5oozl.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015076/europe-hero6-paris-rooftop_x9e001.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Europe Slide ${index + 1}`}
              className="w-full h-full object-cover"
             />
          </SwiperSlide>
        ))}
      </Swiper>


      {/* ✅ OVERLAY CONTENT */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
        <h1 className="text-[30px] md:text-[36px] font-bold mb-2">Romantic Europe: Castles, Cafés & Countryside</h1>
        <p className="text-[16px] md:text-[18px] mb-2">
          8 Days across Paris, Swiss Alps, Amsterdam & Florence — a dreamy escape with handpicked experiences.
        </p>

        <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-300">INR 1,29,999</span>
            <span className="text-green-400 font-semibold">INR 99,999</span>
          </div>
          <div className="text-white">⭐ 4.9 (168 reviews)</div>
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
      <FaBus /> <span>Scenic Transfers</span>
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
        Embark on a hosted 8-day European dream across Paris, Lucerne, Amsterdam, and Florence — where candlelit cafés, snowy peaks, and centuries-old cathedrals blend into one romantic journey curated by local travel experts.
      </li>
      <li>
        Cruise under moonlit bridges in Paris, explore the Louvre’s timeless masterpieces, and stroll through the book-lined streets of Montmartre with the Eiffel Tower lighting your path.
      </li>
      <li>
        Wake up to alpine views in Lucerne, ride scenic Swiss trains, and stand atop Mount Titlis with snowflakes in your hair — a winter postcard brought to life.
      </li>
      <li>
        Pedal past tulips in Amsterdam, sip aged Dutch cheese in 400-year-old cellars, and explore the soul of Van Gogh amidst canals and coffee shops.
      </li>
      <li>
        Craft handmade pasta with locals in Florence, gaze at Renaissance domes, and unwind in rooftop cafés overlooking the Tuscan skyline — all part of a beautifully immersive and expertly hosted escape.
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Europe Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015449/europe-act1-arrival_ctlkwh.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015065/europe-act2-seine-cruise_d9b9p0.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015066/europe-act3-louvre_qtc8sq.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015067/europe-act4-latin-quarter_f2ypnu.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015070/europe-act5-swiss-train_yjhdtc.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015072/europe-act6-lucerne-lake_ffyjlh.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015073/europe-act7-titlis-view_o7hgoo.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015074/europe-act8-glacier-fun_kngk7y.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015053/europe-act9-amsterdam-bike_dkpb8b.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015054/europe-act10-cheese-tasting_q1hguv.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015053/europe-act11-van-gogh_gos5lj.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015055/europe-act12-jordaan-cafe_tfx9yn.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015056/europe-act13-florence-duomo_ebz0zy.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015057/europe-act14-cooking-class_zbty2c.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015055/europe-act15-market-browsing_qfqajl.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750015057/europe-act16-departure-wave_gqsekd.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Europe Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    8 Days in Europe
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

{/* ✅ GUEST REVIEWS SECTION – Europe Tour */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Rhea Sharma */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750223155/europerhea1_hkpun4.jpg" alt="Rhea Sharma" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rhea Sharma</p>
          <p className="text-sm text-gray-500">Solo traveler – Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Solo trip to Europe felt safe, fun, and full paisa vasool! BookForTravel made everything smooth — from Swiss Alps to Amsterdam canals. Loved meeting other Indian travelers too. Felt like a dream but super easy thanks to their planning!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rhea", prevEl: ".prev-rhea" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223159/europerhea2_zritg1.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223160/europerhea3_i34nlh.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rhea Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rhea text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rhea text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* Aarav & Myra Desai */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750223138/europeaarav1_kgtksy.jpg" alt="Aarav & Myra Desai" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Aarav & Myra Desai</p>
          <p className="text-sm text-gray-500">Couple travelers – Mumbai</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
      Our honeymoon was magical! Eiffel Tower, Venice gondola rides, and candlelight dinners – everything was straight out of a movie. BookForTravel planned even the tiniest details. No stress, just romance and memories. Truly dreamy and perfect!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-aarav", prevEl: ".prev-aarav" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223138/europeaarav2_qdq5n4.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223139/europeaarav3_n5n09v.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Aarav Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-aarav text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-aarav text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* The Basu Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750223150/europebasu1_t6enhw.jpg" alt="The Basu Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Basu Family</p>
          <p className="text-sm text-gray-500">Family – Kolkata</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
      Europe with kids and grandparents could’ve been tough, but BookForTravel handled it all! From Indian food to comfy stays near sights, everything was sorted. London Eye to Rome, it was masti, laughter, and family time like never before!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-basu", prevEl: ".prev-basu" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223151/europebasu2_ylz06k.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223154/europebasu3_jc1hkf.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Basu Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-basu text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">‹</button>

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-basu text-blue-500 bg-full w-6 h-6 text-6xl flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>

{/* ✅ Mobile View – Europe Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Rhea Sharma',
      city: 'Solo traveler – Delhi',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223155/europerhea1_hkpun4.jpg",
      text: `Solo trip to Europe felt safe, fun, and full paisa vasool! BookForTravel made everything smooth — from Swiss Alps to Amsterdam canals. Just Loved meeting other Indian travelers too on this trip. Felt like a dream but super easy thanks to their planning!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223159/europerhea2_zritg1.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223160/europerhea3_i34nlh.jpg"
      ],
      id: 'rhea'
    },
    {
      name: 'Aarav & Myra Desai',
      city: 'Couple travelers – Mumbai',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223138/europeaarav1_kgtksy.jpg",
      text: `Our honeymoon was magical! Eiffel Tower, Venice gondola rides, and candlelight dinners – everything was straight out of a movie. BookForTravel planned even the tiniest details. No stress, just romance and memories. Truly dreamy and perfect!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223138/europeaarav2_qdq5n4.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223139/europeaarav3_n5n09v.jpg"
      ],
      id: 'aarav'
    },
    {
      name: 'The Basu Family',
      city: 'Family from Kolkata',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223150/europebasu1_t6enhw.jpg",
      text: `Europe with kids and grandparents could’ve been tough, but BookForTravel handled it all! From Indian food to comfy stays near sights, everything was sorted. London Eye to Rome, it was masti, laughter, and family time like never before!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223151/europebasu2_ylz06k.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750223154/europebasu3_jc1hkf.jpg"
      ],
      id: 'basu'
    }
  ].map((review, idx) => (
    <div key={idx} className="bg-white shadow-md rounded-xl p-4 min-w-[270px] max-w-[300px] h-[490px] snap-start flex-shrink-0 mx-2 border text-sm">
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
        navigation={{ nextEl: `.next-${review.id}`, prevEl: `.prev-${review.id}` }}
        loop={true}
        className="relative mt-3"
      >
        {review.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`${review.name} Exp ${i + 1}`}
              className="w-full h-60 object-cover rounded-md"
            />
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
  defaultPackage="Romantic Europe: Castles, Cafés & Countryside"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Europe trip?',
      answer: 'Click the "Post Enquiry" button and our expert will contact you within 6 hours to assist with planning and booking.'
    }, {
      question: 'Can I customize the Europe itinerary?',
      answer: 'Yes, we offer custom experiences — from romantic upgrades and offbeat stays to flexible routes and additional destinations.'
    }, {
      question: 'Are flights and visas included in the package?',
      answer: 'Flights and visa fees are not included, but we provide full assistance in booking discounted flights and supporting your Schengen visa application.'
    }, {
      question: 'Is this package ideal for couples and solo travelers?',
      answer: 'Absolutely! The Europe tour is perfect for romantic escapes, solo adventures, and even small family holidays.'
    }, {
      question: 'What’s the booking and cancellation policy?',
      answer: 'Secure your spot with just a 30% advance. Free modifications or cancellations are allowed up to 15 days before departure.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default EuropeLuxuryEscape;






