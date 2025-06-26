import React from 'react';
import Footer from './Footer';
import hero1 from '../assets/about/hero-hosted-group.jpg';
import hero2 from '../assets/about/hero-local-experience.jpg';
import AboutInfoSection from './AboutInfoSection';
import storyBg from '../assets/about/storybackground.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const AboutUs = () => {
  const slides = [
    {
      image: hero1,
      headline: 'Travel Beyond the Brochure',
      subtext: 'bookfortravel.com connects you with real travel experts for hosted group tours in Vietnam, Thailand, Bali & more.',
    },
    {
      image: hero2,
      headline: 'Authentic Experiences. Real Connections.',
      subtext: 'Discover local gems, stay with hosts, and create lifelong memories with our curated travel community.',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section with dark mask */}
      <div className="relative w-full bg-black">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-[480px]"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-full w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 px-4">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 drop-shadow-md">{slide.headline}</h1>
                  <p className="text-sm sm:text-lg font-light max-w-3xl drop-shadow-sm">{slide.subtext}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Info Sections: Vision, Mission, About */}
      <AboutInfoSection />

      {/* Story Section */}
{/* Founder’s Story Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat py-16 px-4"
  style={{ backgroundImage: `url(${storyBg})` }}
>
  {/* Light overlay for readability */}
  <div className="absolute inset-0 bg-white bg-opacity-75 z-0" />

  {/* Text content */}
  <div className="relative z-10 max-w-[1200px] mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
      The Story Behind bookfortravel.com — From the Founder Himself!
    </h2>
    <div className="text-lg text-gray-800 leading-loose space-y-6 text-left md:text-justify max-w-5xl mx-auto">
      <p>
        bookfortravel.com isn’t just a website — it’s a personal journey and a mission I’ve been nurturing since 2023. During a trip to Vietnam that year, I witnessed how Indian travelers — despite spending significant money — were left confused, misinformed, and often overcharged. Local scams, poorly planned itineraries, and lack of real-time support made their travel experience feel more stressful than joyful.
      </p>
      <p>
        It hit me hard: Why should someone, after spending so much, have to suffer during what should be the most exciting part of their life — a vacation? And more importantly, why hasn’t anyone fixed this in India yet?
      </p>
      <p>
        That’s when I envisioned a platform that makes travel truly enjoyable — powered by local experts, transparent support, offbeat recommendations, and safe, immersive experiences. Every traveler — whether solo, with family, or in a group — should feel empowered, informed, and cared for.
      </p>
      <p>
        bookfortravel.com is that promise taking shape — one journey, one connection at a time. Today, we’re on a mission to make authentic and expert-led travel the new normal across India and the world.
      </p>
    </div>
  </div>
</section>




   
    </div>
  );
};

export default AboutUs;
