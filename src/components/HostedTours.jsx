import React, { useState } from 'react';
import Footer from './Footer';
import HostedUSPSection from './HostedUSPSection';
import VietnamItinerary from './VietnamItinerary';
import ThailandItinerary from './ThailandItinerary';
import BaliItinerary from './BaliItinerary';
import PostEnquiryModal from './PostEnquiryModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiPhoneCall } from 'react-icons/fi';
import HowItWorksSection from './HowItWorksSection';
import { Helmet } from 'react-helmet';

const testimonials = [
  {
    name: 'Anjali Gupta, Delhi',
    img: 'https://i.postimg.cc/76T8LgxY/testimonial-1-Anjali-Gupta-Delhi.jpg',
    quote: 'Our Vietnam group tour was the best decision! From breathtaking landscapes to home-cooked meals and cultural insights from our host — every detail was perfect. I made lifelong friends and unforgettable memories. Highly recommend bookfortravel for authentic and safe travel experiences.',
  },
  {
    name: 'Jennifer, Kerala',
    img: 'https://i.postimg.cc/0y5TSg84/testimonial-2-jennifer-Kerela.jpg',
    quote: 'Thailand felt like home thanks to our amazing host. From snorkeling adventures to late-night chats, I never felt like a tourist. The group was warm and fun — we bonded over every meal. bookfortravel made this so seamless and magical!',
  },
  {
    name: 'Radha, Rajasthan',
    img: 'https://i.postimg.cc/KjrWKfCF/testimonial-3-radha-rajasthan.jpg',
    quote: 'Bali was serene, soulful, and absolutely stunning. I joined solo but left with 12 new friends. Our guide was more like a local buddy — helping us discover hidden gems I’d never find alone. I’m already planning my next hosted tour!',
  },
  {
    name: 'Preeti Mondal, Pune',
    img: 'https://i.postimg.cc/Y03X29mC/testimonial-5-preeti-mondal-bangalore.jpg',
    quote: 'Being a solo female traveler, safety was my priority. With bookfortravel’s hosted tours, I felt safe, seen, and so supported. The community vibe and itinerary design were top-notch. This was the most stress-free trip I’ve ever had.',
  },
  {
    name: 'Priyansh Jain, Gurgaon',
    img: 'https://i.postimg.cc/k56hNqLT/testimonial-4-rajeev-malhotra-Chandigarh.jpg',
    quote: 'I took the Bali hosted package with my wife and it turned out to be the best vacation we’ve had in years. Great company, amazing food, perfect balance of rest and adventure. Hats off to bookfortravel for such an incredible experience!',
  },
];

const faqs = [
  {
    question: 'What is a Hosted Group Tour on bookfortravel?',
    answer: 'Hosted Group Tours are curated travel experiences led by a local expert. These trips include immersive activities, handpicked stays, and the chance to travel with like-minded explorers. Our host is with you 24/7 to ensure a safe and unforgettable journey.'
  },
  {
    question: 'Can I join solo or do I need a group?',
    answer: 'Absolutely! Over 70% of our travelers join solo. You’ll be part of a warm, friendly group and make instant connections. It’s ideal for solo travelers, couples, and small groups alike.'
  },
  {
    question: 'Are these trips suitable for families or seniors?',
    answer: 'Yes. Each itinerary mentions the ideal traveler type. While most trips suit all ages, we also have slow-paced and family-friendly departures. Reach out and we’ll recommend the right fit.'
  },
  {
    question: 'How is bookfortravel different from a travel agency?',
    answer: 'We don’t sell generic packages. Every trip is designed by real local experts and led by hosts who live the experience with you — it’s cultural, safe, and truly immersive.'
  },
  {
    question: 'What’s included in the price?',
    answer: 'Most hosted trips include boutique stays, guided activities, breakfast, airport transfers, and a dedicated host. Check each itinerary for full inclusions.'
  },
  {
    question: 'How do I know upcoming group tour dates?',
    answer: 'We announce fixed group tours every month. Submit your enquiry and we’ll call you with next departures and matching options based on your travel dates and interests.'
  },
];

const FAQSection = () => (
  <section className="bg-gray-50 py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">What Travelers Often Ask Us</h2>
      <div className="divide-y divide-gray-300 border border-gray-200 rounded-lg bg-white">
        {faqs.map((faq, index) => (
          <details key={index} className="group py-5 px-6 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg text-gray-800">
              {faq.question}
              <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const HostedTours = () => {
  const [showVietnam, setShowVietnam] = useState(false);
  const [showThailand, setShowThailand] = useState(false);
  const [showBali, setShowBali] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [prefillDestination, setPrefillDestination] = useState('');
  const [prefillMessage, setPrefillMessage] = useState('');

  const slides = [
    {
      image: 'https://i.postimg.cc/wBXDYrN6/hero-strip-background-1.jpg',
      headline: 'Immersive Group Journeys with Expert Local Hosts',
      subtext: 'Explore Vietnam, Thailand & Bali with like-minded travelers and 24/7 local guidance.',
    },
    {
      image: 'https://i.postimg.cc/hPNmznbD/hero-strip-background-2.jpg',
      headline: 'Beyond Generic Tours — Real Experiences Await You',
      subtext: 'Uncover farmstays, nature trails, cultural gems and more through our curated hosted trips.',
    },
  ];

  const packages = [
    {
      country: 'Vietnam',
      image: 'https://i.postimg.cc/cHJGGVzY/Image-1-Vietnam-Hosted-Tour.jpg',
      price: 49999,
      duration: '7 Days / 6 Nights',
      rating: '4.6 (102 reviews)',
      activities: ['Farmstays', 'Local Hosts', 'Unexplored Trails'],
      openModal: () => setShowVietnam(true),
    },
    {
      country: 'Thailand',
      image: 'https://i.postimg.cc/L8RH00mk/Image-2-Thailand-Hosted-Tour.jpg',
      price: 47999,
      duration: '6 Days / 5 Nights',
      rating: '4.7 (89 reviews)',
      activities: ['Island Walks', 'Thai Cooking', 'Snorkeling'],
      openModal: () => setShowThailand(true),
    },
    {
      country: 'Bali',
      image: 'https://i.postimg.cc/B6d35mhK/Image-3-Bali-Hosted-Tour.jpg',
      price: 52999,
      duration: '7 Days / 6 Nights',
      rating: '4.8 (113 reviews)',
      activities: ['Yoga', 'Cultural Immersion', 'Forest Walks'],
      openModal: () => setShowBali(true),
    },
  ];

  return (
    <>
<Helmet>
  <title>Hosted Group Tours | Vietnam, Thailand & Bali with Local Hosts</title>
  <meta name="description" content="Join BookForTravel’s Hosted Group Tours starting at ₹49,999. Experience Vietnam, Thailand, and Bali with local hosts, immersive activities, and offbeat stays." />
  <meta name="keywords" content="hosted tours Vietnam, group tours Bali, Thailand local tour, BookForTravel curated travel, immersive travel packages" />
  <meta property="og:title" content="Hosted Group Tours by BookForTravel" />
  <meta property="og:description" content="Explore Vietnam, Bali & Thailand in curated groups with 24x7 local hosts and unmatched experiences." />
</Helmet>

      <div className="relative w-full bg-black">
        <style>{`
          html { scroll-behavior: smooth; }
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .slide-up { animation: slideUp 1.2s ease-out forwards; }
        `}</style>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-[480px]"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="max-w-[1300px] mx-auto px-6 sm:px-10 text-white text-center">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight slide-up">{slide.headline}</h1>
                  <p className="text-sm sm:text-lg font-light leading-relaxed slide-up">{slide.subtext}</p>
                  <a href="#hosted-packages">
                    <button className="mt-6 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:brightness-105 transition duration-300 slide-up">
                      Explore Packages
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="bg-gray-50 py-20 px-6 sm:px-10 md:px-20">

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
            navigation={{ nextEl: '.custom-swiper-next', prevEl: '.custom-swiper-prev' }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={50}
            slidesPerView={1}
            className="max-w-3xl mx-auto"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white shadow-xl rounded-xl px-6 py-8 text-center relative">
                  <img src={t.img} alt={t.name} className="w-32 h-32 mx-auto object-cover mb-4 rounded-xl" />
                  <div className="flex justify-center mb-3 text-yellow-400 text-xl">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">{t.quote}</p>
                  <div className="font-semibold text-sm">{t.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-prev text-gray-400 text-2xl absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer">&#10094;</div>
          <div className="custom-swiper-next text-gray-400 text-2xl absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">&#10095;</div>
        </div>
      </section>

      <HostedUSPSection />

      <div id="hosted-packages" className="max-w-[1300px] mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Hosted Packages</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {packages.map((p, idx) => (
    <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img src={p.image} alt={p.country} className="w-full h-56 object-cover rounded-t-2xl" />
      </div>

      {/* Text Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{p.country} Hosted Tour</h3>
        <p className="text-purple-700 font-semibold text-lg">₹{p.price.toLocaleString()}</p>
        <p className="text-sm text-gray-600">{p.duration}</p>
        <p className="text-yellow-600 text-sm font-medium">⭐ {p.rating}</p>

        <div className="text-sm text-gray-700">
          <span className="font-semibold">Activities:</span> {p.activities.join(', ')}
        </div>

        <div className="flex flex-col gap-2 pt-3">
          <button
            onClick={p.openModal}
            className="bg-purple-600 text-white text-sm py-2 rounded-full hover:bg-purple-700 transition"
          >
            View Sample Itinerary
          </button>
          <button
            onClick={() => {
              setPrefillDestination(p.country);
              setPrefillMessage(`I want to know more about ${p.country} Group Tour.\n\n📅 Next 2 Group Tours Departing in August — Limited Seats Available! Let us know your travel date preference.`);
              setShowEnquiry(true);
            }}
            className="bg-gray-100 text-gray-800 text-sm py-2 rounded-full hover:bg-gray-200 transition flex items-center justify-center gap-2"
          >
            <FiPhoneCall className="text-red-500" />
            Request Callback
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      {showVietnam && <VietnamItinerary isOpen={showVietnam} onClose={() => setShowVietnam(false)} />}
      {showThailand && <ThailandItinerary isOpen={showThailand} onClose={() => setShowThailand(false)} />}
      {showBali && <BaliItinerary isOpen={showBali} onClose={() => setShowBali(false)} />}
      {showEnquiry && (
        <PostEnquiryModal
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
          sourcePage="hosted"
        />
      )}

      <HowItWorksSection />
      <FAQSection />
      
    </>
  );
};

export default HostedTours;

