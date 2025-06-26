import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroBanner = forwardRef((props, ref) => {
  const slides = [
    {
      image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750331960/homeexclusive_zroifp.jpg',
      headline: 'Discover places beyond brochures.',
      subtext: 'Embark on our newly launched Local-Hosted Group Tours to Vietnam, Thailand & Bali — starting from just ₹49,999.',
    },
    {
      image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750334340/Gemini_Generated_Image_p8b9g3p8b9g3p8b9_w0a4x7.png',
      headline: 'Create Unforgettable Stories with the Locals.',
      subtext: 'Connect with expert local hosts and explore hidden gems, real cultures, and unforgettable stories.',
    },
    {
      image: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750276471/day3-2_at4ymq.jpg',
      headline: 'Live the destination, not just visit it.',
      subtext: 'Experience authentic, hosted travel with locals by your side — 24/7.',
    },
  ];

  return (
    <div className="relative w-full bg-black" ref={ref}>
      <style>
        {`
          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .slide-up {
            animation: slideUp 1.2s ease-out forwards;
          }
        `}
      </style>

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
              className="relative h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Black tint overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Slide content */}
              <div className="relative z-20 max-w-[1300px] mx-auto px-6 sm:px-10 text-white text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight slide-up">
                  {slide.headline}
                </h1>
                <p className="text-base sm:text-lg font-light leading-relaxed slide-up">
                  {slide.subtext}
                </p>

                {idx === 0 && (
                  <Link to="/hosted-tours">
                    <button className="mt-6 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:brightness-105 transition duration-300 slide-up">
                      Explore Now
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default HeroBanner;
