// ✅ GUEST REVIEWS SECTION (Vietnam/Thailand/Bali)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const reviewers = [
  {
    id: 'aarti',
    name: 'Aarti Suresh',
    role: 'Solo traveler from Bengaluru',
    portrait: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622090/aarti1_xkvf6z.jpg',
    images: [
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622092/aarti2_msyt15.jpg',
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622090/aarti3_i4crbf.jpg'
    ],
    review: 'Traveling solo to Vietnam was something I was nervous about, but this trip changed me! I made friends, saw hidden places, and always felt safe. Thanks BookForTravel for making it all so easy and memorable!'
  },
  {
    id: 'karan',
    name: 'Karan & Neha Bhagat',
    role: 'Couple from Pune',
    portrait: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622092/karan1_wzwamu.jpg',
    images: [
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622099/karan2_okntjs.jpg',
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622092/karan3_udhbq8.jpg'
    ],
    review: 'From island hopping in Krabi to Thai street food tours, every moment was magical! BookForTravel planned it like a dream. We didn’t have to stress about anything — just showed up and enjoyed every bit!'
  },
  {
    id: 'nair',
    name: 'The Nair Family',
    role: 'Family from Kochi',
    portrait: 'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622095/nair1_ckzq8x.jpg',
    images: [
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622101/nair2_rucpfl.jpg',
      'https://res.cloudinary.com/drvigtwgm/image/upload/v1750622106/nair3_zt0czd.jpg'
    ],
    review: 'Kids loved the Bali swings and animal parks, we loved the spa and peaceful rice fields! Full family had fun. BookForTravel managed everything smoothly — this was our most stress-free vacation ever.'
  }
];

const GuestReviews = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Guest Experiences & Reviews</h2>

      {/* ✅ Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviewers.map((reviewer) => (
          <div key={reviewer.id} className="bg-white shadow-md rounded-xl p-4 space-y-4 border">
            <div className="flex items-center gap-4">
              <img src={reviewer.portrait} alt={reviewer.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="font-bold">{reviewer.name}</p>
                <p className="text-sm text-gray-500">{reviewer.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{reviewer.review}</p>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: `.next-${reviewer.id}`,
                prevEl: `.prev-${reviewer.id}`
              }}
              loop={true}
              className="relative"
            >
              {reviewer.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`${reviewer.name} Exp ${idx + 1}`} className="w-full h-80 object-cover rounded-md" />
                </SwiperSlide>
              ))}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 z-10">
                <button className={`prev-${reviewer.id} text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center`}>‹</button>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 z-10">
                <button className={`next-${reviewer.id} text-gray-500 bg-white border rounded-full w-6 h-6 text-sm flex items-center justify-center`}>›</button>
              </div>
            </Swiper>
          </div>
        ))}
      </div>

      {/* ✅ Mobile View */}
     <div className="md:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-8 px-2">
        {reviewers.map((reviewer, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-4 min-w-[270px] max-w-[300px] h-[480px] snap-start flex-shrink-0 mx-2 border text-sm">
            <div className="flex items-center gap-4">
              <img src={reviewer.portrait} alt={reviewer.name} className="w-16 h-20 rounded-full object-cover" />
              <div>
                <p className="font-bold text-sm">{reviewer.name}</p>
                <p className="text-xs text-gray-500">{reviewer.role}</p>
              </div>
            </div>
            <p className="text-xs text-gray-700 mt-2 overflow-y-auto max-h-[140px] pr-1">
              {reviewer.review}
            </p>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: `.next-${reviewer.id}`,
                prevEl: `.prev-${reviewer.id}`
              }}
              loop={true}
              className="relative mt-3"
            >
              {reviewer.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`${reviewer.name} Exp ${i + 1}`} className="w-full h-60 object-cover rounded-md" />
                </SwiperSlide>
              ))}
              <div className="absolute top-1/2 left-1 -translate-y-1/2 z-10">
                <button className={`prev-${reviewer.id} text-blue-500 text-6xl w-10 h-10 flex items-center justify-center`}>‹</button>
              </div>
              <div className="absolute top-1/2 right-1 -translate-y-1/2 z-10">
                <button className={`next-${reviewer.id} text-blue-500 text-6xl w-10 h-10 flex items-center justify-center`}>›</button>
              </div>
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestReviews;

