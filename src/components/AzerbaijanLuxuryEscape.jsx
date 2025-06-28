// ✅ AzerbaijanLuxuryEscape.jsx – Hero, Itinerary & Review Images

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

// ✅ Hero Images – Azerbaijan
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066792/azerbaijan-hero1-oldcity-solo_anlmzt.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066792/azerbaijan-hero2-flametowers-couple_ikxaj5.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066798/azerbaijan-hero3-gobustan-art_faoxaa.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066795/azerbaijan-hero4-mudvolcanoes-family_aqa1qh.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066794/azerbaijan-hero5-ateshgah-solo_tj3yrz.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066823/azerbaijan-hero6-boulevard-dinner_hbztd2.jpg"
];

// ✅ Itinerary Day-wise Images – Azerbaijan (2 per day)
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day1-arrival_gb74mq.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day1-oldcity-eveningwalk_ht30so.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day2-flametowers-couple_ov4fa0.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066806/azerbaijan-day2-heydar-center_csgzgg.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066808/azerbaijan-day3-gobustan-rockart_crhkco.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066811/azerbaijan-day3-mudvolcanoes_juirjy.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066812/azerbaijan-day4-ateshgah-firetemple_ssljpt.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066816/azerbaijan-day4-yanardag-viewing_wouxgg.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066817/azerbaijan-day5-baku-souvenirmarket_x1gyis.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066819/azerbaijan-day5-departure-drop_mw6ay1.jpg"
  ]
};

const AzerbaijanLuxuryEscape = () => {
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

// ✅ Reviewer 1 – Aarav Deshpande (Solo Traveler from Pune)
const reviewer1 = {
  name: "Aarav Deshpande",
  role: "Solo traveler from Pune",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229826/azeraarav1_hdigcj.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229826/azaraarav2_hqh62o.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229827/azeraarav3_ehswdr.jpg"
  ],
  review:
    "Never imagined Azerbaijan would be this peaceful and scenic. Loved Gobustan, Baku nights, and warm people. As a solo traveler, I felt safe and supported. BookForTravel made it all effortless. Truly underrated and unforgettable!"
};

// ✅ Reviewer 2 – Rhea & Siddharth Sharma (Couple from Jaipur)
const reviewer2 = {
  name: "Rhea & Siddharth Sharma",
  role: "Couple from Jaipur",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229834/azerrhea1_tzmt7l.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229839/azrrhea2_foqjre.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229837/azerrhea3_hglc63.jpg"
  ],
  review:
    "From Old City charm to the dazzling Flame Towers, our trip was magical. Perfect mix of romance and culture. BookForTravel made every moment stress-free. Highly recommended for couples wanting something unique and special!"
};

// ✅ Reviewer 3 – The Mehta Family (Family from Hyderabad)
const reviewer3 = {
  name: "The Mehta Family",
  role: "Family from Hyderabad",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229828/azermehta1_zjwfkc.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229827/azermehta2_oaihki.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229833/azermehta3_z8irru.jpg"
  ],
  review:
    "Azerbaijan was a delight for the whole family! The kids loved the gondola rides and cable cars, while we soaked in the local culture. Great hotels, zero hassles. Thank you BookForTravel for a perfectly managed family escape!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Baku & Evening in Old City',
    description: 'Arrive in Baku, meet your local host, and enjoy a relaxing evening exploring Baku’s historic Old City streets and local cafés.',
    activities: [
      'Airport pickup and hotel check-in',
      'Evening guided walk through Old City',
      'Dinner at a traditional Azerbaijani restaurant'
    ],
    transfers: [
      'Airport to Hotel Transfer'
    ],
    hotel: 'Stay at Boutique Hotel in Baku’s Old City',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day1-arrival_gb74mq.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day1-oldcity-eveningwalk_ht30so.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Baku Highlights – Flame Towers & Heydar Aliyev Center',
    description: 'Explore the modern marvels of Baku including panoramic views from Flame Towers and an interactive visit to Heydar Aliyev Center.',
    activities: [
      'Visit Flame Towers & Highland Park',
      'Tour of Heydar Aliyev Center',
      'Stroll along Baku Boulevard'
    ],
    transfers: [
      'Hotel to Flame Towers & Museum Transfer'
    ],
    hotel: 'Stay at Boutique Hotel in Baku’s Old City',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day2-flametowers-couple_ov4fa0.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066806/azerbaijan-day2-heydar-center_csgzgg.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Gobustan Rock Art & Mud Volcanoes',
    description: 'Head out on a full-day trip to explore UNESCO-listed Gobustan Petroglyphs and the natural wonder of bubbling mud volcanoes.',
    activities: [
      'Visit to Gobustan Rock Art Museum',
      'Excursion to Mud Volcanoes',
      'Interactive tour at Museum of Stones'
    ],
    transfers: [
      'Roundtrip SUV Transfer to Gobustan & Volcanoes'
    ],
    hotel: 'Stay at Boutique Hotel in Baku’s Old City',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066808/azerbaijan-day3-gobustan-rockart_crhkco.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066811/azerbaijan-day3-mudvolcanoes_juirjy.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'Absheron Peninsula – Fire Temple & Burning Mountain',
    description: 'Witness Azerbaijan’s fire heritage with visits to the ancient Fire Temple (Ateshgah) and the ever-burning mountain (Yanar Dag).',
    activities: [
      'Visit Ateshgah Fire Temple',
      'View Flames at Yanar Dag',
      'Dinner at a Seaside Boulevard Restaurant'
    ],
    transfers: [
      'Roundtrip Transfer to Absheron Peninsula'
    ],
    hotel: 'Stay at Boutique Hotel in Baku’s Old City',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066812/azerbaijan-day4-ateshgah-firetemple_ssljpt.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066816/azerbaijan-day4-yanardag-viewing_wouxgg.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Souvenir Shopping & Departure',
    description: 'Spend your final morning picking up souvenirs and relaxing before your flight back home.',
    activities: [
      'Explore local souvenir markets',
      'Coffee break at an art café'
    ],
    transfers: [
      'Hotel to Airport Transfer'
    ],
    hotel: '',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066817/azerbaijan-day5-baku-souvenirmarket_x1gyis.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066819/azerbaijan-day5-departure-drop_mw6ay1.jpg"
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
          <p className="font-semibold">8 Transfers</p>
        </div>
        <div>
          <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
          <p className="font-semibold">15+ Activities</p>
        </div>
        <div>
          <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
          <p className="font-semibold">4 Nights Stay</p>
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
  '4 nights stay in centrally located hotels in Baku with daily breakfast',
  'Airport pickup and all local transfers in private vehicles',
  'Evening guided walk through Old City Baku and traditional dinner',
  'Entry tickets and guided tour to Flame Towers & Heydar Aliyev Center',
  'Full-day trip to Gobustan Rock Art & Mud Volcanoes',
  'Day excursion to Ateshgah Fire Temple & Yanar Dag',
  'Cultural dinner experience by the Caspian Sea on Day 4',
  'Local shopping assistance at Baku’s souvenir markets',
  'Dedicated local travel host throughout the trip',
  'Azerbaijan Visa support & documentation assistance'
];

const exclusions = [
  'International flight tickets to and from Baku',
  'Lunch and dinner not mentioned in inclusions',
  'Personal expenses like shopping, spa treatments, and souvenirs',
  'Travel Insurance (recommended for international travel)',
  'Azerbaijan E-Visa fee (payable online via official portal)'
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
  {/* ✅ HERO CAROUSEL SECTION – Europe Tour */}
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
"https://res.cloudinary.com/drvigtwgm/image/upload/v1750066792/azerbaijan-hero1-oldcity-solo_anlmzt.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066792/azerbaijan-hero2-flametowers-couple_ikxaj5.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066798/azerbaijan-hero3-gobustan-art_faoxaa.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066795/azerbaijan-hero4-mudvolcanoes-family_aqa1qh.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066794/azerbaijan-hero5-ateshgah-solo_tj3yrz.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066823/azerbaijan-hero6-boulevard-dinner_hbztd2.jpg"

      ].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Europe Hero Slide ${index + 1}`}
            className="w-full h-full object-cover"
      />
          </SwiperSlide>
        ))}
      </Swiper>

    {/* ✅ OVERLAY CONTENT – Azerbaijan */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
  <h1 className="text-[30px] md:text-[36px] font-bold mb-2">
    Azerbaijan Explorer: Baku & Beyond
  </h1>
  <p className="text-[16px] md:text-[18px] mb-2">
    5 Days of rich history, mud volcanoes & modern wonders across Baku, Gobustan & Absheron Peninsula.
  </p>

  <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
    <div className="flex items-center gap-2">
      <span className="line-through text-gray-300">₹59,999</span>
      <span className="text-green-400 font-semibold">₹44,999</span>
    </div>
    <div className="text-white">⭐ 4.6 (104 reviews)</div>
  </div>

  <button
    onClick={() => setShowModal(true)}
    className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
  >
      📩 Post Enquiry
        </button>
      </div>
    </div>


{/* ✅ TRIP SUMMARY BADGES – AZERBAIJAN */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">5 Days / 4 Nights</span>
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

  {/* ✅ TRIP HIGHLIGHTS – AZERBAIJAN */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Embark on a hosted 5-day journey through Azerbaijan’s vibrant capital and mystic landscapes — from Baku’s glowing skyline and cobbled Old City to surreal mud volcanoes and fire temples, this is a cultural escape led by expert local guides.
      </li>
      <li>
        Wander the historic alleys of Icherisheher, sip traditional Azeri tea near the Flame Towers, and feel the city’s rhythm through bazaars, boulevards, and brilliant architecture.
      </li>
      <li>
        Witness ancient rock carvings at Gobustan, get up-close with bubbling mud volcanoes, and learn stories carved in stone at the open-air museum of human history.
      </li>
      <li>
        Experience the mythical flames of Ateshgah and the glowing hillside of Yanar Dag — where fire meets faith in the heart of the Absheron Peninsula.
      </li>
      <li>
        Unwind with seaside dinners, sunset strolls along Baku Boulevard, and curated shopping experiences before bidding farewell to a land where legends and landscapes intertwine.
    </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Azerbaijan Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day1-arrival_gb74mq.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day1-oldcity-eveningwalk_ht30so.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066802/azerbaijan-day2-flametowers-couple_ov4fa0.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066806/azerbaijan-day2-heydar-center_csgzgg.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066808/azerbaijan-day3-gobustan-rockart_crhkco.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066811/azerbaijan-day3-mudvolcanoes_juirjy.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066812/azerbaijan-day4-ateshgah-firetemple_ssljpt.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066816/azerbaijan-day4-yanardag-viewing_wouxgg.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066817/azerbaijan-day5-baku-souvenirmarket_x1gyis.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750066819/azerbaijan-day5-departure-drop_mw6ay1.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Azerbaijan Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
         />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    5 Days in Azerbaijan
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

{/* ✅ GUEST REVIEWS SECTION – Azerbaijan */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* ✅ Aarav Deshpande */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750229826/azeraarav1_hdigcj.jpg" alt="Aarav Deshpande" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Aarav Deshpande</p>
          <p className="text-sm text-gray-500">Solo traveler from Pune</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Never imagined Azerbaijan would be this peaceful and scenic. Loved Gobustan, Baku nights, and warm people. As a solo traveler, I felt safe and supported. BookForTravel made it all effortless. Truly underrated and unforgettable!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-aarav", prevEl: ".prev-aarav" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229826/azaraarav2_hqh62o.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229827/azeraarav3_ehswdr.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Aarav Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-aarav text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-aarav text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ Rhea & Siddharth Sharma */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750229834/azerrhea1_tzmt7l.jpg" alt="Rhea & Siddharth Sharma" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Rhea & Siddharth Sharma</p>
          <p className="text-sm text-gray-500">Couple from Jaipur</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        From Old City charm to the dazzling Flame Towers, our trip was magical. Perfect mix of romance and culture. BookForTravel made every moment stress-free. Highly recommended for couples wanting something unique !
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rhea", prevEl: ".prev-rhea" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229839/azrrhea2_foqjre.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229837/azerrhea3_hglc63.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rhea Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rhea text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rhea text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ The Mehta Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750229828/azermehta1_zjwfkc.jpg" alt="The Mehta Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Mehta Family</p>
          <p className="text-sm text-gray-500">Family from Hyderabad</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Azerbaijan was a delight for the whole family! The kids loved the gondola rides and cable cars, while we soaked in the local culture. Great hotels, zero hassles. Thank you BookForTravel for a perfectly managed family escape!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-mehta", prevEl: ".prev-mehta" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229827/azermehta2_oaihki.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229833/azermehta3_z8irru.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Mehta Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-mehta text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-mehta text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

  </div>

{/* ✅ Mobile View – Azerbaijan Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Aarav Deshpande',
      city: 'Solo traveler from Pune',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229826/azeraarav1_hdigcj.jpg",
      text: "Never imagined Azerbaijan would be this peaceful and scenic. Loved Gobustan, Baku nights, and warm people. As a solo traveler, I felt safe and supported. BookForTravel made it all effortless. Truly underrated and unforgettable!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229826/azaraarav2_hqh62o.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229827/azeraarav3_ehswdr.jpg"
      ],
      id: 'aarav'
    },
    {
      name: 'Rhea & Siddharth Sharma',
      city: 'Couple from Jaipur',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229834/azerrhea1_tzmt7l.jpg",
      text: "From Old City charm to the dazzling Flame Towers, our trip was magical. Perfect mix of romance and culture. BookForTravel made every moment stress-free. Highly recommended for couples wanting something unique and special!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229839/azrrhea2_foqjre.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229837/azerrhea3_hglc63.jpg"
      ],
      id: 'rhea'
    },
    {
      name: 'The Mehta Family',
      city: 'Family from Hyderabad',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229828/azermehta1_zjwfkc.jpg",
      text: "Azerbaijan was a delight for the whole family! The kids loved the gondola rides and cable cars, while we soaked in the local culture. Great hotels, zero hassles. Thank you BookForTravel for a perfectly managed family escape!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229827/azermehta2_oaihki.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750229833/azermehta3_z8irru.jpg"
      ],
      id: 'mehta'
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
  defaultPackage="Azerbaijan Explorer: Baku & Beyond"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Azerbaijan trip?',
      answer: 'Click the "Post Enquiry" button and our expert will contact you within 6 hours to assist with planning and booking.'
    }, {
      question: 'Can I customize the Azerbaijan itinerary?',
      answer: 'Yes, we offer full customization — including extended stays in Baku, cultural detours, or luxury upgrades like wine tours and local dining.'
    }, {
      question: 'Are flights and visas included in the package?',
      answer: 'Flights and visa fees are not included, but we offer complete assistance in booking discounted international flights and applying for an Azerbaijan e-Visa.'
    }, {
      question: 'Is this trip ideal for families, couples, or solo travelers?',
      answer: 'Absolutely! This hosted tour is perfect for all travel types — whether it’s a romantic escape, a family adventure, or a solo exploration.'
    }, {
      question: 'What’s the booking and cancellation policy?',
      answer: 'Confirm your spot with just 30% advance. Enjoy flexible changes or cancellations up to 15 days before departure — no stress at all.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default AzerbaijanLuxuryEscape;





