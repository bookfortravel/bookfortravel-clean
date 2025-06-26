// ✅ Final Updated RegisterAsExpert with Final Testimonial Fixes and Visual Enhancements

import React, { useRef, useState } from 'react';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Shruti Jhangu, Delhi',
    img: 'https://i.postimg.cc/DzwvphpL/Shruti-testimonial.jpg',
    text: 'I received excellent leads from bookfortravel within a week of registering. The platform is easy to use, highly effective, and helps me stand out as an expert in a competitive space. I love the curated exposure it gives me to travelers genuinely interested in local experiences and expert-led holidays.'
  },
  {
    name: 'Ang, Vietnam',
    img: 'https://i.postimg.cc/zDKrj3D4/Ang-Vietnam-Testimonial.jpg',
    text: 'Hosting curated group tours through bookfortravel has helped me expand my travel business across borders with high-intent leads. The quality of travelers is amazing and I’ve been able to scale with repeat group bookings. Their platform is smooth, intuitive, and highly targeted.'
  },
  {
    name: 'Haanuk, Vietnam',
    img: 'https://i.postimg.cc/ydRwvrK0/Vietnam-Guide-Haanuk-Testimonial.jpg',
    text: 'I love working with bookfortravel. Their team and customers value authenticity, and I’ve made lifelong connections through hosted packages. I now receive inquiries weekly from travelers looking for unique Vietnam itineraries and curated small group journeys.'
  }
];

const RegisterAsExpert = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', description: '', type: '', countryCode: '+91'
  });

  const handleScrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const phoneFull = `${formData.countryCode}${formData.phone}`.replace('+', '');
      const payload = new URLSearchParams({
        source: 'Registerasexpert', name: formData.name, phone: phoneFull,
        email: formData.email, tripType: '', locationType: '', destination: '',
        budget: '', message: formData.description, expertType: formData.type
      });
      const res = await fetch('https://script.google.com/macros/s/AKfycbzb9Jgg5FKyUJI4KWDgybMadO-C10aa3zTKL0yGslVw0WtowMLrfuJcauMTh-mykn0IrA/exec', { method: 'POST', body: payload });
      if (!res.ok) throw new Error('Failed');
      alert('Thanks! We will get back to you soon.');
      setFormData({ name: '', phone: '', email: '', description: '', type: '', countryCode: '+91' });
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
  };

  const slides = [
    {
      image: 'https://i.postimg.cc/Cx8s2ytP/Hostwithtour.jpg',
      headline: 'Become a Travel Expert with Global Reach',
      subtext: 'Connect with real travelers, offer curated packages, and grow your business.',
      cta: 'Register Now'
    },
    {
      image: 'https://i.postimg.cc/NGrS107S/Hero-image-2.jpg',
      headline: 'List Group Tours, Build a Trusted Profile',
      subtext: 'Join India’s first curated travel expert marketplace and stand out from the crowd.',
      cta: 'Start Today'
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 6000 }} loop className="h-[480px]">
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-full w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="max-w-[1300px] mx-auto px-6 text-white text-center">
                <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">{slide.headline}</h1>
                <p className="text-lg mb-6 animate-fadeInUp">{slide.subtext}</p>
                <button onClick={handleScrollToForm} className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:brightness-105 transition">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Join bookfortravel?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">{['🚀 Access 1000s of Real Travel Leads', '🌍 Build & List Your Own Packages', '🤝 Trusted Brand + Local Connect', '💼 Minimal Commission, Full Control'][i]}</h3>
              <p>{['Connect with high-intent travelers seeking curated trips.', 'Offer group tours, niche itineraries, and host-led experiences.', 'Join a growing platform trusted for authenticity and safety.', 'Set your own pricing, respond to leads, and retain control.'][i]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Success Stories</h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
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
                  <img src={t.img} alt={t.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4" />
                  <div className="flex justify-center mb-3 text-yellow-400 text-xl">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <p className="text-[1.375rem] leading-relaxed text-gray-700 mb-4">{t.text}</p>
                  <div className="font-semibold text-sm">{t.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-prev text-gray-400 text-2xl absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer">&#10094;</div>
          <div className="custom-swiper-next text-gray-400 text-2xl absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">&#10095;</div>
        </div>
      </section>

      <section className="py-4 px-4">
        <div className="w-full max-w-5xl mx-auto">
          <img src="https://i.postimg.cc/ZR0zNtJc/how-it-works-3.jpg" alt="How It Works" className="w-full h-auto object-contain scale-[0.75]" />
        </div>
      </section>

      <section ref={formRef} className="bg-purple-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Become a Travel Expert Today</h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" className="border p-3 rounded-xl w-full" required />
          <div className="flex gap-2">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="border p-3 rounded-xl">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+84">🇻🇳 +84</option>
              <option value="+66">🇹🇭 +66</option>
            </select>
            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className="border p-3 rounded-xl w-full" required />
          </div>
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className="border p-3 rounded-xl w-full" required />
          <select name="type" value={formData.type} onChange={handleChange} className="border p-3 rounded-xl w-full" required>
            <option value="">What best describes you?</option>
            <option value="DMC">Boutique DMC</option>
            <option value="Guide">Local Guide</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Other">Other</option>
          </select>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Tell us about your expertise" className="border p-3 rounded-xl w-full" rows="4"></textarea>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition w-fit mx-auto">Submit</button>
        </form>
      </section>

      
    </div>
  );
};

export default RegisterAsExpert;



