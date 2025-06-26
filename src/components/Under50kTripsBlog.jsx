// ✅ Blog 1: Best International Trips Under ₹50,000 for Indian Travelers (2025)

import React, { useEffect } from 'react';
import Footer from '../components/Footer';


const Under50kTripsBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800">

      {/* 🔷 Hero Strip with Image and Title */}
      <div className="relative h-[300px] md:h-[450px] w-full">
        <img
          src="https://res.cloudinary.com/drvigtwgm/image/upload/v1750697896/hero1_zgwf5m.jpg"
          alt="Trips Under 50000"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold px-4 text-center">
            Best International Trips Under ₹50,000 for Indian Travelers (2025)
          </h1>
        </div>
      </div>

      {/* 🔷 Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <p>
          Traveling abroad doesn’t have to burn a hole in your wallet. As an Indian traveler in 2025,
          you now have more affordable international options than ever. Whether you’re looking for
          beaches, culture, food, or fun, there’s a perfect destination waiting for you under ₹50,000!
        </p>

        <h2 className="text-2xl font-bold mt-6">1. Vietnam 🇻🇳</h2>
        <p>
          From the bustling streets of Hanoi to the scenic Ha Long Bay and lantern-lit Hoi An,
          Vietnam offers incredible value for budget-conscious travelers.
        </p>
        <ul className="list-disc ml-6">
          <li>Round trip flights from India: ~₹18,000–₹22,000</li>
          <li>Budget stays & street food keep daily expenses around ₹1,500–₹2,000</li>
          <li>Visa: E-visa under ₹1,500</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">2. Thailand 🇹🇭</h2>
        <p>
          A timeless favorite for Indians, Thailand delivers beaches, shopping, and nightlife — all
          without breaking the bank.
        </p>
        <ul className="list-disc ml-6">
          <li>Round trip flights: ~₹14,000–₹20,000</li>
          <li>Visa-free for Indians in 2025!</li>
          <li>Perfect for short trips (4–5 days) under ₹50k including stay and activities</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">3. Sri Lanka 🇱🇰</h2>
        <p>
          Nature, heritage, and a relaxed vibe — Sri Lanka is ideal for a peaceful international getaway
          with a touch of spirituality and wellness.
        </p>
        <ul className="list-disc ml-6">
          <li>Round trip flights from South India: ~₹12,000</li>
          <li>Stay in beach huts or hill resorts: ₹1,000–₹2,000 per night</li>
          <li>Visa on arrival</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">4. Nepal 🇳🇵 & Bhutan 🇧🇹</h2>
        <p>
          Explore the Himalayas, monasteries, and vibrant markets — with minimal visa hassle and close proximity.
        </p>
        <ul className="list-disc ml-6">
          <li>No flight needed — trains or shared taxis work</li>
          <li>No visa needed for Indians</li>
          <li>Perfect for 5–7 day trips under ₹30,000–₹40,000</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">5. Indonesia 🇮🇩 (Bali)</h2>
        <p>
          Bali is trending hard among young Indian travelers. With careful planning, you can enjoy
          temples, volcanoes, and surf scenes within ₹50K.
        </p>
        <ul className="list-disc ml-6">
          <li>Flights: Look out for flash sales under ₹25,000</li>
          <li>Stay in homestays or shared hostels</li>
          <li>Local transport + food: ₹1,200 per day average</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10">Tips to Stick to Budget 💡</h2>
        <ul className="list-disc ml-6">
          <li>Book 3–4 months in advance</li>
          <li>Use budget airlines (AirAsia, Scoot, VietJet)</li>
          <li>Choose shared accommodations (Zostel, Hostels, Airbnb)</li>
          <li>Opt for group travel for better deals</li>
        </ul>

        <p className="mt-6 italic">
          With the right plan, your dream trip abroad is 100% possible even under ₹50,000. Let the world be your classroom in 2025!
        </p>

        {/* 🔷 Author */}
        <p className="mt-10 text-sm text-gray-600 italic">Written by Ankit Sharma, New Delhi</p>

        {/* 🔷 Hashtags */}
        <div className="mt-6 flex flex-wrap gap-2 text-blue-600 text-sm">
          {[
            '#budgettravel', '#under50ktrips', '#cheapinternationaltrips', '#indiantraveler2025',
            '#vietnamfromindia', '#thailandbudgettrip', '#srilankatravel', '#nepaltrip',
            '#bhutanbudget', '#baliunderbudget', '#grouptraveldeals', '#cheapflightsasia',
            '#indiatointernational', '#affordablegetaways', '#travelhacksindia',
            '#studenttravelabroad', '#offbeatinternational', '#solotravelasia',
            '#travelin2025', '#wanderlustindia', '#indianbackpacker', '#affordableasia',
            '#budgetfriendlydestinations', '#weekendinternational', '#passportready'
          ].map(tag => (<span key={tag}>{tag}</span>))}
        </div>
      </div>

      
    </div>
  );
};

export default Under50kTripsBlog;
