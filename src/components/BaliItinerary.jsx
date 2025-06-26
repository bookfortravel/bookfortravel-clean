import React, { useEffect } from 'react';

const BaliItinerary = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="relative w-full max-w-5xl h-[90vh] overflow-y-auto bg-white shadow-lg rounded-xl p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 text-4xl font-bold hover:text-black z-50"
        >
          ×
        </button>

        <h1 className="text-3xl font-bold mb-4 text-purple-700">🇮🇩 Bali Hosted Group Tour – 7D/6N Itinerary</h1>
        <p className="mb-2 text-lg font-medium text-gray-600">Theme: <span className="text-gray-800">Spiritual Forest Walks • Cultural Immersion • Local Hosts</span></p>
        <p className="mb-4">Starting from <span className="font-bold">₹52,999</span> per person</p>
        <p className="mb-6 italic">Inclusions: Boutique stays, spiritual activities, all breakfasts, 3 local dinners, guided day tours, host support, airport transfers.</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-green-700">🛬 Day 1: Arrival in Ubud – The Soul of Bali</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pickup from airport by your Bali cultural host</li>
              <li>Check-in to a serene eco-stay overlooking rice terraces</li>
              <li>Evening forest welcome walk through Campuhan Ridge</li>
              <li>Traditional Balinese welcome dinner at a local family courtyard</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🧘‍♀️ Day 2: Morning Yoga & Temple Rituals</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Sunrise yoga with a Balinese instructor</li>
              <li>Visit to Pura Tirta Empul for a water purification ceremony</li>
              <li>Group discussion on Tri Hita Karana philosophy</li>
              <li>Optional Balinese massage or café hopping</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🌾 Day 3: Village Life & Local Cooking</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Trip to Sidemen Valley for a farming and harvesting experience</li>
              <li>Interactive cooking session in a village kitchen</li>
              <li>Cultural dance workshop and photo session in Balinese attire</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🌿 Day 4: Munduk Forest Trail & Waterfalls</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Hike through Munduk forest and waterfalls</li>
              <li>Meditative jungle walk and picnic lunch</li>
              <li>Return to Ubud for a peaceful retreat night</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🏝️ Day 5: Coastal Shift – Canggu Exploration</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Transfer to Canggu and check-in at a surfer-style homestay</li>
              <li>Sunset walk at Echo Beach and chill session</li>
              <li>Bonfire with music and Balinese snacks</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🛕 Day 6: Tanah Lot & Sunset Blessing</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Morning leisure or café trail</li>
              <li>Visit Tanah Lot Temple for sea-side sunset ritual</li>
              <li>Candlelight dinner with community family host</li>
              <li>Group reflection: "What Bali gave me"</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">✈️ Day 7: Departure & Gratitude</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Optional morning forest meditation</li>
              <li>Host-assisted airport drop</li>
              <li>Support for extended plans if needed</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <h3 className="text-xl font-bold text-purple-800 mb-2">✅ Why BookForTravel’s Hosted Bali Experience?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Guided by local hosts — experience the soul of Bali, not just the sights</li>
            <li>Stay in handpicked eco-retreats and homestays</li>
            <li>Spiritual, slow travel with deep cultural immersion</li>
            <li>Meet like-minded travelers and make lasting memories</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BaliItinerary;
