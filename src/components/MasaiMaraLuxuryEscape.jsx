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

// ✅ Hero Images – Masai Mara
const heroImages = [
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052493/masai-hero1-jeep-couple-sunset_exsq4c.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052497/masai-hero2-giraffes-plains_r8q4he.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052460/masai-hero4-migration-aerial_nibva7.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052497/masai-hero6-morning-jeep-river_gbvy2e.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052462/masai-activity1-luxury-camp_tkvdfk.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052461/masai-hero5-maasai-village_tnt3we.jpg"
];

// ✅ Itinerary Day-wise Images – Masai Mara (2 per day)
const itineraryImages = {
  day1: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052462/masai-activity1-luxury-camp_tkvdfk.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052493/masai-hero1-jeep-couple-sunset_exsq4c.jpg"
  ],
  day2: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052461/masai-activity2-sunset-drive_hfu1x2.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052465/masai-activity3-lions-drive_n5cgq6.jpg"
  ],
  day3: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052466/masai-activity4-cheetah-sighting_sbprwk.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052461/masai-hero5-maasai-village_tnt3we.jpg"
  ],
  day4: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052467/masai-hero3-bush-dinner_vnbxrv.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052471/masai-activity5-maasai-tools_sswrje.jpg"
  ],
  day5: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052486/masai-activity7-picnic-breakfast_eap45e.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052490/masai-activity9-firepit-stars_qyhidx.jpg"
  ]
};



const MasaiMaraLuxuryEscape = () => {
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

// ✅ Reviewer 1 – Aarav Mehta (Solo traveler from Delhi)
const reviewer1 = {
  name: "Aarav Mehta",
  role: "Solo traveler from Delhi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227555/masaiaarav1_ahmc8r.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227563/masaiaarav2_mlnch9.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227565/masaiaarav3_hmuf3c.jpg"
  ],
  review:
    "Masai Mara was unreal! First time seeing lions and zebras in real life, not on TV. The tent stay was superb, and the silence of the jungle at night gave me goosebumps. Big shoutout to BookForTravel for making it safe and hassle-free!"
};

// ✅ Reviewer 2 – Meera & Kunal Shah (Couple from Ahmedabad)
const reviewer2 = {
  name: "Meera & Kunal Shah",
  role: "Couple from Ahmedabad",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227565/masaimeera1_pbhjiq.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227568/masaimeera2_uwypuh.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227572/masaimeera3_xkx4t1.jpg"
  ],
  review:
    "From lion spotting to a magical bush dinner under the stars, everything felt like a movie. Our guide was so warm and knew everything! Masai Mara is now our top trip. BookForTravel, thank you for the seamless and romantic experience!"
};

// ✅ Reviewer 3 – The Nair Family (Family from Kochi)
const reviewer3 = {
  name: "The Nair Family",
  role: "Family from Kochi",
  portrait: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227572/masainair1_oxsyrj.jpg",
  images: [
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227573/masainair2_jsehjx.jpg",
    "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227581/masainair3_ozngki.jpg"
  ],
  review:
    "Best family trip ever! Our kids loved the giraffes and hippos, while we enjoyed the tribal village and Maasai dance. Everything was so well arranged by BookForTravel. Truly safe, comfortable and full of once-in-a-lifetime moments!"
};

const itineraryData = [
  {
    day: 'Day 1',
    title: 'Arrival in Masai Mara & Scenic Drive',
    description: 'Arrive at Masai Mara via road from Nairobi. Enjoy a scenic drive through the Great Rift Valley and settle into your luxury camp.',
    activities: [
      'Pickup from Nairobi Airport or Hotel',
      'Scenic Drive through Rift Valley',
      'Evening Welcome Brief & Sunset Views'
    ],
    transfers: [
      'Private Transfer to Masai Mara Camp'
    ],
    hotel: 'Stay at Luxury Safari Camp',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052493/masai-hero1-jeep-couple-sunset_exsq4c.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052462/masai-activity1-luxury-camp_tkvdfk.jpg"
    ]
  },
  {
    day: 'Day 2',
    title: 'Sunset Safari & Bush Dinner',
    description: 'Head out for your first game drive to witness wildlife at golden hour. In the evening, enjoy a traditional bush dinner under the stars.',
    activities: [
      'Sunset Game Drive in Open Jeep',
      'Wildlife Spotting: Lions, Elephants, Zebras',
      'Exclusive Bush Dinner with Bonfire'
    ],
    transfers: [
      'Camp to Safari Trail & Back'
    ],
    hotel: 'Stay at Luxury Safari Camp',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052461/masai-activity2-sunset-drive_hfu1x2.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052467/masai-hero3-bush-dinner_vnbxrv.jpg"
    ]
  },
  {
    day: 'Day 3',
    title: 'Big 5 Safari & Cultural Village',
    description: 'Start early for a full-day Big 5 Safari. Post lunch, engage in a heartwarming cultural visit to a traditional Maasai village.',
    activities: [
      'Morning Safari – Big 5 Spotting',
      'Visit to Maasai Village with Local Guide',
      'Cultural Activities & Dance Performance'
    ],
    transfers: [
      'Jeep Transfers All Day'
    ],
    hotel: 'Stay at Luxury Safari Camp',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052465/masai-activity3-lions-drive_n5cgq6.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052471/masai-activity6-dance-village_hyu2fm.jpg"
    ]
  },
  {
    day: 'Day 4',
    title: 'River Safari & Picnic Breakfast',
    description: 'Enjoy a unique morning jeep drive along the Mara River followed by a bush picnic breakfast. Spend the afternoon relaxing or taking optional walks.',
    activities: [
      'Sunrise Jeep Safari near River',
      'Picnic Breakfast in the Bush',
      'Optional Nature Walk or Camp Chill Time'
    ],
    transfers: [
      'Morning Safari Jeep Transfer'
    ],
    hotel: 'Stay at Luxury Safari Camp',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052497/masai-hero6-morning-jeep-river_gbvy2e.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052486/masai-activity7-picnic-breakfast_eap45e.jpg"
    ]
  },
  {
    day: 'Day 5',
    title: 'Farewell Safari & Departure',
    description: 'A final sunrise drive before checking out. Stop for last wildlife sightings and group photos before heading back to Nairobi.',
    activities: [
      'Early Morning Wildlife Safari',
      'Group Photos & Farewell Moments',
      'Drive back to Nairobi'
    ],
    transfers: [
      'Camp to Nairobi Drop-off'
    ],
    hotel: '—',
    images: [
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052488/masai-activity8-zebra-crossing_x8k3pr.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052492/masai-activity10-group-goodbye_ibfvak.jpg"
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
          <p className="font-semibold">5 Transfers</p>
        </div>
        <div>
          <FaBinoculars className="text-green-600 text-2xl mx-auto mb-1" />
          <p className="font-semibold">10+ Activities</p>
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
  '4 nights luxury safari lodge stay with all meals included',
  'Airport pickup and drop from Nairobi in private 4x4 vehicle',
  'Daily game drives in Masai Mara with certified safari guide',
  'Sunset drive with champagne sundowner in the savannah',
  'Visit to authentic Maasai cultural village with local interaction',
  'All national park entry fees and permits',
  'Complimentary binoculars and wildlife checklist during drives',
  '24/7 on-ground trip coordinator for safety and logistics',
  'Evening bonfire sessions with storytelling and local music',
  'All local taxes, service charges, and conservation fees included'
];

const exclusions = [
  'International flight tickets to and from Nairobi',
  'Visa charges and travel insurance',
  'Personal expenses such as souvenirs or tips',
  'Optional hot air balloon safari experience',
  'Any meals or activities not explicitly mentioned in the inclusions'
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
  {/* ✅ HERO CAROUSEL SECTION – MASAI MARA TOUR */}
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
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052493/masai-hero1-jeep-couple-sunset_exsq4c.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052497/masai-hero2-giraffes-plains_r8q4he.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052460/masai-hero4-migration-aerial_nibva7.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052497/masai-hero6-morning-jeep-river_gbvy2e.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052462/masai-activity1-luxury-camp_tkvdfk.jpg",
  "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052461/masai-hero5-maasai-village_tnt3we.jpg"
      ].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Masai Mara Slide ${index + 1}`}
            className="w-full h-full object-cover"
        />
          </SwiperSlide>
        ))}
      </Swiper>

    {/* ✅ OVERLAY CONTENT */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-20 p-4 rounded-lg shadow-xl max-w-[550px] text-white text-center w-[90%]">
      <h1 className="text-[30px] md:text-[36px] font-bold mb-2">Masai Mara Magic: Safari & Sunsets</h1>
      <p className="text-[16px] md:text-[18px] mb-2">
        5 Days of thrilling safaris, Big 5 spotting, cultural immersion & luxury stays in the wild.
      </p>

      <div className="flex justify-between items-center gap-1 text-[16px] md:text-[18px]">
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-300">INR 1,14,999</span>
          <span className="text-green-400 font-semibold">INR 94,999</span>
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

{/* ✅ TRIP SUMMARY BADGES – MASAI MARA */}
<div className="max-w-[1300px] mx-auto px-4 py-6">
  <div className="flex flex-wrap items-center gap-4 justify-start text-sm md:text-base">
    <span className="bg-black text-white px-3 py-1 rounded-full">5 Days / 4 Nights</span>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBus /> <span>Private Safari Transfers</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBed /> <span>Luxury Lodge Stay</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaUtensils /> <span>All Meals</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <FaBinoculars /> <span>Daily Game Drives</span>
    </div>
  </div>

  {/* ✅ TRIP HIGHLIGHTS – MASAI MARA */}
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-3">Trip Highlights</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
      <li>
        Experience the thrill of the African wilderness with 5 days of immersive safaris, luxury lodge stays, and golden savannah sunsets curated by local Maasai hosts.
      </li>
      <li>
        Spot the Big 5 on daily game drives through the legendary Masai Mara Reserve — lions, elephants, rhinos, leopards, and buffalo in their natural habitat.
      </li>
      <li>
        Witness magical sunrises over rolling plains, enjoy evening bonfires under the stars, and dine with views of grazing giraffes and zebras.
      </li>
      <li>
        Explore authentic Maasai villages for cultural storytelling, traditional dances, and insights into tribal life passed down for generations.
      </li>
      <li>
        Stay in boutique jungle lodges where panoramic decks, bush breakfasts, and curated experiences create an unforgettable luxury-in-the-wild escape.
   
      </li>
    </ul>
  </div>
</div>

{/* ✅ TOP CAROUSEL – Masai Mara Itinerary Images */}
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
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052461/masai-activity2-sunset-drive_hfu1x2.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052462/masai-activity1-luxury-camp_tkvdfk.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052465/masai-activity3-lions-drive_n5cgq6.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052466/masai-activity4-cheetah-sighting_sbprwk.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052471/masai-activity5-maasai-tools_sswrje.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052471/masai-activity6-dance-village_hyu2fm.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052486/masai-activity7-picnic-breakfast_eap45e.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052488/masai-activity8-zebra-crossing_x8k3pr.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052490/masai-activity9-firepit-stars_qyhidx.jpg",
      "https://res.cloudinary.com/drvigtwgm/image/upload/v1750052492/masai-activity10-group-goodbye_ibfvak.jpg"
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[450px]">
          <img
            src={img}
            alt={`Masai Mara Itinerary Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Fixed Label */}
  <div className="absolute bottom-4 left-6 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-semibold z-50">
    5 Days in Masai Mara
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


{/* ✅ GUEST REVIEWS SECTION – Fully Responsive (Masai Mara Tour – Updated Reviewers) */}
<div className="max-w-[1300px] mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

  {/* ✅ Desktop View – Grid Layout */}
  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* ✅ Aarav Mehta */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750227555/masaiaarav1_ahmc8r.jpg" alt="Aarav Mehta" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Aarav Mehta</p>
          <p className="text-sm text-gray-500">Solo traveler from Delhi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Masai Mara was unreal! First time seeing lions and zebras in real life, not on TV. The tent stay was superb, and the silence of the jungle at night gave me goosebumps. Big shoutout to BookForTravel for making it safe and hassle-free!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-aarav", prevEl: ".prev-aarav" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227563/masaiaarav2_mlnch9.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227565/masaiaarav3_hmuf3c.jpg"
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

    {/* ✅ Meera & Kunal Shah */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750227565/masaimeera1_pbhjiq.jpg" alt="Meera & Kunal Shah" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">Meera & Kunal Shah</p>
          <p className="text-sm text-gray-500">Couple from Ahmedabad</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        From lion spotting to a magical bush dinner under the stars, everything felt like a movie. Our guide was so warm and knew everything! Masai Mara is now our top trip. BookForTravel, thank you for the seamless and romantic experience!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-meerakunal", prevEl: ".prev-meerakunal" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227568/masaimeera2_uwypuh.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227572/masaimeera3_xkx4t1.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`MeeraKunal Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-meerakunal text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-meerakunal text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

    {/* ✅ The Nair Family */}
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750227572/masainair1_oxsyrj.jpg" alt="The Nair Family" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-bold">The Nair Family</p>
          <p className="text-sm text-gray-500">Family from Kochi</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Best family trip ever! Our kids loved the giraffes and hippos, while we enjoyed the tribal village and Maasai dance. Everything was so well arranged by BookForTravel. Truly safe, comfortable and full of once-in-a-lifetime moments!
      </p>
      <Swiper modules={[Navigation]} navigation={{ nextEl: ".next-nair", prevEl: ".prev-nair" }} loop={true} className="relative">
        {[
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227573/masainair2_jsehjx.jpg",
          "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227581/masainair3_ozngki.jpg"
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`NairFamily Exp ${index + 1}`} className="w-full h-80 object-cover rounded-md" />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
          <button className="prev-nair text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">‹</button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
          <button className="next-nair text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center">›</button>
        </div>
      </Swiper>
    </div>

  </div>

{/* ✅ Mobile View – Masai Mara Reviews Horizontal Scroll (Updated Reviewers) */}
<div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2">
  {[
    {
      name: "Aarav Mehta",
      city: "Solo traveler from Delhi",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227555/masaiaarav1_ahmc8r.jpg",
      text: `Masai Mara was unreal! First time seeing lions and zebras in real life, not on TV. The tent stay was superb, and the silence of the jungle at night gave me goosebumps. Big shoutout to BookForTravel for making it safe and hassle-free!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227563/masaiaarav2_mlnch9.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227565/masaiaarav3_hmuf3c.jpg"
      ],
      id: 'aarav'
    },
    {
      name: "Meera & Kunal Shah",
      city: "Couple from Ahmedabad",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227565/masaimeera1_pbhjiq.jpg",
      text: `From lion spotting to a magical bush dinner under the stars, everything felt like a movie. Our guide was so warm and knew everything! Masai Mara is now our top trip. BookForTravel, thank you for the seamless and romantic experience!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227568/masaimeera2_uwypuh.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227572/masaimeera3_xkx4t1.jpg"
      ],
      id: 'meerakunal'
    },
    {
      name: "The Nair Family",
      city: "Family from Kochi",
      avatar: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227572/masainair1_oxsyrj.jpg",
      text: `Best family trip ever! Our kids loved the giraffes and hippos, while we enjoyed the tribal village and Maasai dance. Everything was so well arranged by BookForTravel. Truly safe, comfortable and full of once-in-a-lifetime moments!`,
      images: [
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227573/masainair2_jsehjx.jpg",
        "https://res.cloudinary.com/drvigtwgm/image/upload/v1750227581/masainair3_ozngki.jpg"
      ],
      id: 'nair'
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
  defaultPackage="Masai Mara Magic: Safari & Sunsets"
/>

{/* ✅ FAQ SECTION */}
<div className="max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[{
      question: 'How do I book this Masai Mara safari?',
      answer: 'Click the "Post Enquiry" button and our African travel expert will get in touch within 6 hours to help you plan and book your trip.'
    }, {
      question: 'Is this safari safe for families and solo travelers?',
      answer: 'Absolutely! All our safaris include experienced local guides, verified stays, and round-the-clock support for your safety and comfort.'
    }, {
      question: 'Are international flights included?',
      answer: 'International flights are not included in the base package, but we assist in booking the best available flights on request.'
    }, {
      question: 'What kind of accommodations are included?',
      answer: 'You’ll stay in luxury tented camps and lodges with full-board meals and stunning wildlife views — truly immersive and premium.'
    }, {
      question: 'Can I customize the Masai Mara itinerary?',
      answer: 'Yes! From hot air balloon safaris to Maasai village experiences, we can tailor the trip based on your preferences and budget.'
    }].map((item, index) => (
      <FAQItem key={index} question={item.question} answer={item.answer} />

    ))}
  </div>
</div>


</>
);
};

export default MasaiMaraLuxuryEscape;











