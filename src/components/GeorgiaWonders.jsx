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

// ✅ Georgia Tour Hero Images
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243562/hero1_ziqtxw.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243569/hero2_zd2qqw.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243571/hero3_odqtqi.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243572/hero4_mnm7ek.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243575/hero5_dnoqgy.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243579/hero6_rjxlan.jpg"
];

// ✅ Georgia Tour Itinerary Images
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273685/day1-1_djjmid.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273686/day1-2_yz8y9k.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273687/day2-1_bo1dju.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273693/day2-2_qa84ff.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273695/day3-1_rkeqwq.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273699/day3-2_febwnn.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273701/day4-1_wn05u5.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273706/day4-2_lnyebb.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273708/day5-1_ca6zbb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273713/day5-2_wvopvf.jpg"
  ],
  day6: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273714/day6-1_qlvm7p.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273719/day6-2_bjgcto.jpg"
  ]
};

const GeorgiaWonders = () => {
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

// ✅ Reviewer 1 – Sneha Kulkarni (Solo Traveler from Bangalore)
const reviewer1 = {
  name: "Sneha Kulkarni",
  role: "Solo traveler from Bangalore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243591/sneha1_lticaq.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243592/sneha2_rjxivv.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243596/sneha3_lmu25g.jpg"
  ],
  review:
    "Georgia felt like a dream! As a solo woman traveler, I felt safe, welcomed, and amazed by every corner — from Old Tbilisi to Kazbegi. The BookForTravel team made my entire journey smooth, soulful, and full of heartfelt memories. Highly recommend!"
};

// ✅ Reviewer 2 – Abhishek & Isha Rao (Couple from Pune)
const reviewer2 = {
  name: "Abhishek & Isha Rao",
  role: "Couple from Pune",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243524/Abhishek1_ycrixi.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243525/Abhishek2_vfxro7.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243527/Abhishek3_dotbah.jpg"
  ],
  review:
    "Georgia was the perfect romantic escape we never knew we needed. From the scenic wine regions to cosy mountain stays — every day was magic. BookForTravel planned it all with such love, care, and balance. We came back with stories for life!"
};

// ✅ Reviewer 3 – The Menon Family (Family from Bangalore)
const reviewer3 = {
  name: "The Menon Family",
  role: "Family from Bangalore",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243581/menon1_hehf8j.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243585/menon2_gckyxp.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243586/menon3_ce0x84.jpg"
  ],
  review:
    "Travelling to Georgia with our kids was such a refreshing experience! From cable rides to mountain drives and food walks in Tbilisi, it was a joy ride. BookForTravel ensured we had fun with zero stress. A family trip we’ll always treasure!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Tbilisi & Night Stroll',
    description: 'Land in Tbilisi, meet your host, and enjoy a relaxed evening walk through Old Tbilisi lit up with charm and history.',
    activities: [
      'Airport pickup and hotel check-in',
      'Evening stroll through Old Town',
      'Leisure time at Freedom Square'
    ],
    transfers: ['Airport to Hotel Transfer'],
    hotel: 'Stay in a Boutique Hotel in Tbilisi',
    images: [
         "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273685/day1-1_djjmid.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273686/day1-2_yz8y9k.jpg"

    ]
  },
  {
    day: 'Day 2',
    title: 'Tbilisi City & Narikala Fortress',
    description: 'Explore Tbilisi’s highlights including Narikala Fortress, sulfur baths, and panoramic cable car views over the city.',
    activities: [
      'Ride the Tbilisi cable car',
      'Visit Narikala Fortress & Mother Georgia',
      'Explore sulfur bath district & Meidan Bazaar'
    ],
    transfers: ['Private Transfers for City Sightseeing'],
    hotel: 'Stay in a Boutique Hotel in Tbilisi',
    images: [
         "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273687/day2-1_bo1dju.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273693/day2-2_qa84ff.jpg"

    ]
  },
  {
    day: 'Day 3',
    title: 'Kazbegi & Gergeti Trinity Church',
    description: 'Drive along the Georgian Military Highway to the stunning Kazbegi region. Visit the Gergeti Trinity Church with breathtaking views.',
    activities: [
      'Stop at Ananuri Fortress',
      'Cross Jvari Pass',
      '4x4 ride to Gergeti Trinity Church'
    ],
    transfers: ['Tbilisi to Kazbegi (via private vehicle)'],
    hotel: 'Overnight at a Scenic Hotel in Kazbegi',
    images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273695/day3-1_rkeqwq.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273699/day3-2_febwnn.jpg"

    ]
  },
  {
    day: 'Day 4',
    title: 'Wine Tasting in Kakheti',
    description: 'Discover Georgia’s wine country. Enjoy tastings, vineyard walks, and local cuisine in the beautiful Kakheti region.',
    activities: [
      'Visit Sighnaghi — city of love',
      'Wine tastings at family-run wineries',
      'Explore Bodbe Monastery'
    ],
    transfers: ['Kazbegi to Kakheti Day Trip'],
    hotel: 'Stay at a Vineyard Hotel in Kakheti',
    images: [
     "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273701/day4-1_wn05u5.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273706/day4-2_lnyebb.jpg"

    ]
  },
  {
    day: 'Day 5',
    title: 'Uplistsikhe Caves & Gori',
    description: 'Step into Georgia’s ancient past at Uplistsikhe cave town. Also visit Gori, the birthplace of Stalin, and its local museum.',
    activities: [
      'Explore Uplistsikhe cave city',
      'Stalin Museum in Gori',
      'Lunch at a rustic roadside dhaba'
    ],
    transfers: ['Private Day Trip from Tbilisi'],
    hotel: 'Return to Boutique Hotel in Tbilisi',
    images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273708/day5-1_ca6zbb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273713/day5-2_wvopvf.jpg"

    ]
  },
  {
    day: 'Day 6',
    title: 'Markets, Mementos & Departure',
    description: 'Spend your final day at the local markets. Grab souvenirs, enjoy brunch at a street cafe, and head to the airport.',
    activities: [
      'Dry Bridge Flea Market',
      'Brunch at a traditional Georgian café'
    ],
    transfers: ['Hotel to Airport Transfer'],
    hotel: '',
    images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273714/day6-1_qlvm7p.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273719/day6-2_bjgcto.jpg"

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
          <p className="font-semibold">14+ Activities</p>
        </div>
        <div>
          <FaHotel className="text-yellow-500 text-2xl mx-auto mb-1" />
          <p className="font-semibold">4 Nights Stay</p>
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
  '5 nights stay in well-rated city and mountain view hotels with breakfast',
  'Airport pickup, private transfers for all day tours and intercity travel',
  'Evening guided walk in Tbilisi’s Old Town with local host',
  'Cable car ride to Narikala Fortress and sulphur bath experience',
  'Day trip to Kazbegi with visits to Ananuri, Gudauri, and Gergeti Church',
  'Kazbegi local hike or optional paragliding with lunch in village home',
  'Full-day Kakheti wine region tour with vineyard tastings and local cuisine',
  'Visit to flea markets and time for shopping in Tbilisi’s Dry Bridge area',
  '24x7 support from BookForTravel’s local host in Georgia',
  'Georgia visa documentation support and travel planning assistance'
];

const exclusions = [
  'International flights to and from Georgia',
  'Lunches and dinners unless specified in inclusions',
  'Paragliding or other adventure activities not listed above',
  'Travel insurance (recommended for all international trips)',
  'Visa fees or entry charges to specific attractions, if any'
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
  {/* ✅ HERO CAROUSEL SECTION – Georgia Wonders */}
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
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243562/hero1_ziqtxw.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243569/hero2_zd2qqw.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243571/hero3_odqtqi.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243572/hero4_mnm7ek.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243575/hero5_dnoqgy.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243579/hero6_rjxlan.jpg"
      ].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Georgia Hero Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* ✅ OVERLAY CONTENT – Georgia */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
      <h1 className="text-[30px] md:text-[36px] font-bold mb-2">
        Georgia Wonders: Mountains, Wine & Culture
      </h1>
      <p className="text-[16px] md:text-[18px] mb-2">
        6 Days of Tbilisi charm, Kazbegi peaks, Kakheti vineyards & local flavors with your host.
      </p>

      <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-300">₹64,999</span>
          <span className="text-green-400 font-semibold">₹49,999</span>
        </div>
        <div className="text-white">⭐ 4.7 (111 reviews)</div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="bg-yellow-300 text-black text-l px-4 py-1.5 mt-3 rounded-full hover:bg-yellow-300 transition font-semibold scale-[1.05]"
      >
        📩 Post Enquiry
      </button>
    </div>
  </div>


{/* ✅ TRIP SUMMARY BADGES – GEORGIA */}
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
      <FaBinoculars /> <span>Mountain & Wine Activities</span>
    </div>
  </div>

  {/* ✅ TRIP HIGHLIGHTS – GEORGIA */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Set off on a hosted 6-day adventure through Georgia — where snow-capped Caucasus peaks, winding vineyards, and ancient stone towns meet heartfelt hospitality and rustic charm.
      </li>
      <li>
        Walk through Tbilisi’s old town lanes, cross the Peace Bridge, soak in sulphur bath traditions, and gaze at city views from Narikala’s historic heights.
      </li>
      <li>
        Journey to the dramatic Kazbegi Mountains via Gudauri and Ananuri, stopping for snowy landscapes, local lunches, and breathtaking sights like the Gergeti Trinity Church.
      </li>
      <li>
        Explore the wine-soaked Kakheti region with vineyard visits, homemade tastings, and time in Sighnaghi — the city of love perched over dreamy Georgian valleys.
      </li>
      <li>
        Capture markets, monasteries, and warm village smiles in your final strolls before flying home with a heart full of stories and the soulful spirit of Georgia.
      </li>
    </ul>
  </div>
</div>



{/* ✅ TOP CAROUSEL – Georgia Itinerary Images */}
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
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273685/day1-1_djjmid.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273686/day1-2_yz8y9k.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273687/day2-1_bo1dju.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273693/day2-2_qa84ff.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273695/day3-1_rkeqwq.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273699/day3-2_febwnn.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273701/day4-1_wn05u5.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273706/day4-2_lnyebb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273708/day5-1_ca6zbb.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273713/day5-2_wvopvf.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273714/day6-1_qlvm7p.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750273719/day6-2_bjgcto.jpg"

    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Georgia Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    6 Days in Georgia
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

{/* ✅ GUEST REVIEWS SECTION – Georgia */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* ✅ Sneha Kulkarni */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750243591/sneha1_lticaq.jpg" alt="Sneha Kulkarni" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Sneha Kulkarni</p>
          <p className="text-sm text-gray-500">Solo traveler from Bangalore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Georgia felt like a dream! As a solo woman traveler, I felt safe, welcomed, and amazed by every corner — from Old Tbilisi to Kazbegi. The BookForTravel team made my entire journey smooth, soulful, and full of heartfelt memories. Highly recommend!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-sneha", prevEl: ".prev-sneha" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750243592/sneha2_rjxivv.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243596/sneha3_lmu25g.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Sneha Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-sneha text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-sneha text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ Abhishek & Isha Rao */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750243524/Abhishek1_ycrixi.jpg" alt="Abhishek & Isha Rao" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Abhishek & Isha Rao</p>
          <p className="text-sm text-gray-500">Couple from Pune</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Georgia was the perfect romantic escape we never knew we needed. From the scenic wine regions to cosy mountain stays — every day was magic. BookForTravel planned it all with such love, care, and balance. We came back with stories for life!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-rao", prevEl: ".prev-rao" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750243525/Abhishek2_vfxro7.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243527/Abhishek3_dotbah.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Rao Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-rao text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-rao text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ The Menon Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750243581/menon1_hehf8j.jpg" alt="The Menon Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Menon Family</p>
          <p className="text-sm text-gray-500">Family from Bangalore</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Travelling to Georgia with our kids was such a refreshing experience! From cable rides to mountain drives and food walks in Tbilisi, it was a joy ride. BookForTravel ensured we had fun with zero stress. A family trip we’ll always treasure! Would love to travel again :)
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-menon", prevEl: ".prev-menon" }} loop={true} className="relative">
        {["https://res.cloudinary.com/drvigtwgm/image/upload/v1750243585/menon2_gckyxp.jpg", "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243586/menon3_ce0x84.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Menon Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-menon text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-menon text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>
  </div>



{/* ✅ MOBILE VIEW – Georgia Reviews Horizontal Scroll */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: 'Sneha Kulkarni',
      city: 'Solo traveler from Bangalore',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243591/sneha1_lticaq.jpg",
      text: "Georgia felt like a dream! As a solo woman traveler, I felt safe, welcomed, and amazed by every corner — from Old Tbilisi to Kazbegi. The BookForTravel team made my entire journey smooth, soulful, and full of heartfelt memories. Highly recommend!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243592/sneha2_rjxivv.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243596/sneha3_lmu25g.jpg"
      ],
      id: 'sneha'
    },
    {
      name: 'Abhishek & Isha Rao',
      city: 'Couple from Pune',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243524/Abhishek1_ycrixi.jpg",
      text: "Georgia was the perfect romantic escape we never knew we needed. From the scenic wine regions to cosy mountain stays — every day was magic. BookForTravel planned it all with such love, care, and balance. We came back with stories for life!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243525/Abhishek2_vfxro7.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243527/Abhishek3_dotbah.jpg"
      ],
      id: 'abhishek'
    },
    {
      name: 'The Menon Family',
      city: 'Family from Bangalore',
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243581/menon1_hehf8j.jpg",
      text: "Travelling to Georgia with our kids was such a refreshing experience! From cable rides to mountain drives and food walks in Tbilisi, it was a joy ride. BookForTravel ensured we had fun with zero stress. A family trip we’ll always treasure!",
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243585/menon2_gckyxp.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750243586/menon3_ce0x84.jpg"
      ],
      id: 'menon'
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
  defaultPackage="Georgia Wonders: Mountains, Wine & Culture"
/>

{/* ✅ FAQ SECTION – GEORGIA */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        question: 'How do I book this Georgia tour?',
        answer: 'Click the "Post Enquiry" button and our expert will call you within 6 hours to help with planning, bookings, and customizations.'
      },
      {
        question: 'Is this Georgia package customizable?',
        answer: 'Yes! You can extend your stay, upgrade to luxury hotels, include hot springs, paragliding, or winery experiences tailored to your style.'
      },
      {
        question: 'Are flights and visa included?',
        answer: 'International flights and visa are not included. However, our team will assist you with the best flight deals and complete Georgia e-visa support.'
      },
      {
        question: 'Is Georgia a good destination for couples or families?',
        answer: 'Definitely! Georgia offers romantic mountain escapes, family-friendly activities, and rich culture — perfect for all traveler types.'
      },
      {
        question: 'What’s the advance and cancellation policy?',
        answer: 'Book with 30% advance. Enjoy stress-free plans with flexible rescheduling or cancellations up to 15 days before departure.'
      }
    ].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />
    ))}
  </div>
</div>


</>
);
};

export default GeorgiaWonders;
