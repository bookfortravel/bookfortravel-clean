import React, { useEffect } from 'react';

const VietnamItinerary = ({ isOpen, onClose }) => {
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

        <h1 className="text-3xl font-bold mb-2 text-purple-700">🇻🇳 Vietnam Hosted Group Tour – 7D/6N Itinerary</h1>
        <p className="text-lg font-medium text-gray-600 mb-4">Theme: <span className="text-gray-800">Farmstays, Local Hosts, & Unexplored Trails</span></p>
        <p className="text-md mb-4">Starting from <span className="font-semibold">₹49,999 per person</span></p>
        <p className="mb-6">Inclusions: Stay, local transport, all breakfasts, 3 lunches, 2 dinners, guided activities, airport pickup/drop</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-green-700">🛬 Day 1: Arrival in Hanoi – Warm Welcome by Local Host</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pickup from airport by your 24x7 Vietnamese host</li>
              <li>Check-in at a charming eco-farmstay on the outskirts of Hanoi</li>
              <li>Evening village walk and traditional tea ceremony with locals</li>
              <li>Group dinner hosted by a Vietnamese family in their courtyard</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">⛰️ Day 2: Hidden Trails of Ba Vi National Park</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Local breakfast: sticky rice and tropical fruits</li>
              <li>Guided hike in Ba Vi’s lesser-known forest trails</li>
              <li>Visit an organic herbal farm and bee-keeping tour</li>
              <li>Sunset group circle at a jungle-view homestay</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🚲 Day 3: Countryside Immersion – Cycling & Cooking</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cycle through paddy fields and lotus ponds</li>
              <li>Hands-on cooking session: make your own Pho</li>
              <li>Relax at eco-lodge with a group bonfire night</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🏞️ Day 4: Transfer to Ninh Binh – Vietnam’s Hidden Gem</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Scenic drive to Ninh Binh ("Halong Bay on land")</li>
              <li>Stay in a hidden bungalow surrounded by limestone karsts</li>
              <li>Sampan boat ride through untouched caves and tunnels</li>
              <li>Homemade dinner at a local-run guesthouse</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🛶 Day 5: Nature, Temples & Local Stories</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Morning trek to Mua Caves viewpoint</li>
              <li>Guided storytelling at Bich Dong Pagoda with a monk</li>
              <li>Optional village hike or local café hopping</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🏖️ Day 6: Offbeat Halong Bay (No Cruise Crowds)</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Day trip to lesser-known Halong Bay spot</li>
              <li>Kayaking, cave exploration, and seafood lunch</li>
              <li>Farewell group dinner & cultural dance show</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">✈️ Day 7: Departure with Stories & Friendships</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Morning walk or last-minute shopping</li>
              <li>Group photo & feedback circle</li>
              <li>Drop to airport with host-assisted checkout</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <h3 className="text-xl font-bold text-purple-800 mb-2">✅ Why BookForTravel’s Hosted Group Tour?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Stay in handpicked farmstays & eco-homestays</li>
            <li>Travel with a local expert host — your friend & translator</li>
            <li>Explore offbeat places, not just touristy stops</li>
            <li>Make real connections with locals and fellow travelers</li>
            <li>No rush, no tourist traps — just authentic travel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VietnamItinerary;