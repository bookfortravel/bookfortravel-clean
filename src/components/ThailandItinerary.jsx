import React, { useEffect } from 'react';

const ThailandItinerary = ({ isOpen, onClose }) => {
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

        <h1 className="text-3xl font-bold mb-2 text-purple-700">🇹🇭 Thailand Hosted Group Tour – 6D/5N Itinerary</h1>
        <p className="text-lg font-medium text-gray-600 mb-4">Theme: <span className="text-gray-800">Cooking with Locals • Island Walks • Group Fun</span></p>
        <p className="text-md mb-4">Starting from <span className="font-semibold">₹47,999 per person</span></p>
        <p className="mb-6">Inclusions: Boutique stay, inter-island transport, local host, all breakfasts, 2 cooking sessions, 3 cultural experiences, airport pickup/drop</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-green-700">🛬 Day 1: Arrival in Phuket – Thai Welcome & Sunset Ritual</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Airport pickup by your dedicated Thai group host</li>
              <li>Check-in at a boutique resort near Kata Beach</li>
              <li>Group orientation & welcome mocktail by the sea</li>
              <li>Sunset meditation walk at Windmill Viewpoint</li>
              <li>Optional night market visit with your host</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🍲 Day 2: Thai Cooking Class & Cultural Exchange</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Traditional Thai breakfast – Kai Jeow and herbal tea</li>
              <li>Group cooking session in countryside home: Pad Thai & Tom Kha</li>
              <li>Lunch what you cook with the local family</li>
              <li>Evening storytelling with your host about Thai village life</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🏝️ Day 3: Island Hopping – Coral Walks & Snorkeling</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Boat to Koh Racha – clear waters, fewer crowds</li>
              <li>Walk through coconut groves & secret island trails</li>
              <li>Snorkeling experience with provided gear</li>
              <li>Thai BBQ dinner & bonfire beach night</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🚲 Day 4: Old Town Phuket & Hidden Trails</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Morning cycle through Old Phuket Town</li>
              <li>Hidden temple visit & café trail with guide</li>
              <li>Sunset walk along Laem Singh coastal path</li>
              <li>Optional: join local music or dance event at a bar</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">🧘 Day 5: Nature, Wellness & Thai Spirituality</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Group meditation at mountain monastery</li>
              <li>Ethical visit to remote elephant care center</li>
              <li>Thai herbal spa kit-making with a local</li>
              <li>Farewell dinner with classical Thai performance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700">✈️ Day 6: Departure – But Not Goodbye</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Early breakfast and reflection circle</li>
              <li>Host-assisted drop to airport or onward help</li>
              <li>Group photo and contact exchange</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <h3 className="text-xl font-bold text-purple-800 mb-2">✅ Why BookForTravel’s Hosted Group Tour?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Stay in boutique family-run resorts & peaceful homestays</li>
            <li>Enjoy cultural insights from your personal Thai host</li>
            <li>Experience lesser-known beaches and villages</li>
            <li>Join a diverse group and make lifelong friends</li>
            <li>Feel safe, supported, and truly immersed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThailandItinerary;
