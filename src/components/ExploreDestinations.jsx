// ExploreDestinations.jsx — Final with Working Arrows + Pagination + Clean Slugs
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

const destinations = [
  { name: "Vietnam", tagline: "Lanterns, Bays & Local Hosts", price: "Starting at ₹49,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625694/Vietnam1_pebeyr.jpg", path: "/vietnam-luxury-escape" },
  { name: "Thailand", tagline: "Islands, Culture & Street Food", price: "Starting at ₹47,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625678/Thailand1_vu3ihp.jpg", path: "/thailand-luxury-escape" },
  { name: "Bali", tagline: "Temples, Swings & Serenity", price: "Starting at ₹54,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625681/Bali1_f6y6re.jpg", path: "/bali-luxury-escape" },
  { name: "Dubai", tagline: "Luxury, Desert & Skyscrapers", price: "Starting at ₹58,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625680/Dubai1_hlyaxj.jpg", path: "/dubai-luxury-escape" },
  { name: "Sri Lanka", tagline: "Beaches, Tea & Train Rides", price: "Starting at ₹44,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625675/Srilanka1_ijj9gh.jpg", path: "/srilanka-luxury-escape" },
  { name: "Singapore + Malaysia", tagline: "Family Fun & Urban Escapes", price: "Starting at ₹58,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625673/Singapore_Malaysia1_bpuwro.jpg", path: "/singapore-malaysia-luxury-escape" },
  { name: "Seychelles", tagline: "Turquoise Waters & Honeymoon Bliss", price: "Starting at ₹79,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625669/Seychelles1_olfthd.jpg", path: "/seychelles-dream-escape" },
  { name: "Europe", tagline: "The Canvas of Your Dreams", price: "Starting at ₹99,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625681/Europe1_qjajqj.jpg", path: "/europe-luxury-escape" },
  { name: "Bhutan", tagline: "Peaceful Monasteries & Mountains", price: "Starting at ₹47,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625679/Bhutan1_irb50y.jpg", path: "/bhutan-serenity-escape" },
  { name: "Azerbaijan", tagline: "Baku, Fire Temples & More", price: "Starting at ₹44,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625676/Azerbaijan1_lgae6g.jpg", path: "/azerbaijan-luxury-escape" },
  { name: "Goa", tagline: "Beach Vibes & Beyond", price: "Starting at ₹19,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625693/Goa1_vmkzij.jpg", path: "/goa-luxury-escape" },
  { name: "Georgia", tagline: "Mountains, Wine & Castles", price: "Starting at ₹49,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625689/Gerogia1_s0oapq.jpg", path: "/georgia-wonders" },
  { name: "Japan", tagline: "Tradition Meets Technology", price: "Starting at ₹89,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625669/Japan1_z6iray.jpg", path: "/japan-luxury-escape" },
  { name: "Masai Mara", tagline: "The Wild African Safari", price: "Starting at ₹94,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625668/Masaimara1_oiryzt.jpg", path: "/masai-mara-luxury-escape" },
  { name: "Kazakhstan", tagline: "Hidden Gems of Central Asia", price: "Starting at ₹55,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625668/Kazakhstan1_qxcubi.jpg", path: "/kazakhstan-luxury-escape" },
  { name: "Laos + Cambodia", tagline: "Mystic Temples & Culture", price: "Starting at ₹59,999", image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1750625665/Laos_Cambodia1_gusuhr.jpg", path: "/laos-cambodia-trail" },
];

const ExploreDestinations = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-4">
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-8">
        Explore Destinations <h2 className="text-2xl md:text-2xl font-bold text-center mb-8">(Swipe Left)
      </h2></h2>

      {/* ✅ Desktop View - Carousel with Arrows & Pagination */}
      <div className="hidden md:block relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          className="rounded-xl"
        >
          {destinations.map((dest, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => { window.scrollTo(0, 0); navigate(dest.path); }}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-[350px] object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end px-6 pb-6">
                  <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
                  <p className="text-white text-sm italic">{dest.tagline}</p>
                  <p className="text-yellow-300 text-sm font-semibold mt-1">{dest.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Mobile View - Flipbook */}
      <div className="md:hidden px-4 py-8">
        <Swiper effect="cards" grabCursor={true} modules={[EffectCards]}>
          {destinations.map((dest, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => { window.scrollTo(0, 0); navigate(dest.path); }}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white flex flex-col justify-end p-6">
                  <p className="text-sm opacity-80">{dest.tagline}</p>
                  <h3 className="text-2xl font-bold mt-1">{dest.name}</h3>
                  <p className="text-yellow-300 font-semibold text-sm mt-1">{dest.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreDestinations;

