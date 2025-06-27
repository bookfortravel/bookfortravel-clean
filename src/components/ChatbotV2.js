// ✅ Final Production ChatbotV2.jsx with Full Inline Destination Data, Dynamic Promo, and Working Flow

import React, { useState, useEffect, useRef } from 'react';

import logo from '../assets/booklogo.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MobileChatbotUX from './MobileChatbotUX';
import DesktopChatLogo from './DesktopChatLogo';
import Lottie from 'lottie-react';
import planeFlyAnimation from '../assets/planeFlyAnimation.json';
import { auth, provider } from '../firebase'; // ✅ Path should be exactly same as App.js
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';








const countryCodes = [  // ✅ Add here
  { code: '+91', label: '🇮🇳 India' },
  { code: '+1', label: '🇺🇸 USA' },
  { code: '+65', label: '🇸🇬 Singapore' },
  { code: '+66', label: '🇹🇭 Thailand' },
  { code: '+84', label: '🇻🇳 Vietnam' },
  { code: '+971', label: '🇦🇪 UAE' },
  { code: '+44', label: '🇬🇧 UK' },
  { code: '+33', label: '🇫🇷 France' }
];

const getConvertedPrice = (priceInINR, currency) => {
  const rates = { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0098, AED: 0.044, JPY: 1.75, SGD: 0.016, THB: 0.44, ZAR: 0.21 };
  const symbols = { INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'د.إ', JPY: '¥', SGD: 'S$', THB: '฿', ZAR: 'R' };
  const converted = priceInINR * (rates[currency] || 1);
  return `${symbols[currency] || ''}${converted.toFixed(0)}`;
};

const base = (name, note, price) => ({ name, note, price });

const getDynamicPromo = (step, tripType, locationType, destination, budget, currency, loading = false) => {
  if (step === 0) return `✨ Explore Vietnam, Bali & Thailand with bookfortravel’s Local Expert-Led Group Packages — starting at just ${getConvertedPrice(49999, currency)}.`;
  if (step === 1 && tripType) {
    const tripPromos = {
      Family: "Family holidays with bookfortravel’s Local Expert-Led Group Packages offer unmatched safety, bonding, and offbeat experiences.",
      Romantic: "Turn your escape into a dream trip with bookfortravel’s Local Expert-Led Group Packages — cozy stays, hidden gems & privacy.",
      Honeymoon: "Turn your escape into a dream trip with bookfortravel’s Local Expert-Led Group Packages — cozy stays, hidden gems & privacy.",
      Friends: "bookfortravel’s Local Expert-Led Group Packages let you and your friends travel smarter — with fun, freedom & unforgettable memories.",
      Group: "bookfortravel’s Local Expert-Led Group Packages let you and your friends travel smarter — with fun, freedom & unforgettable memories.",
      Solo: "bookfortravel’s Local Expert-Led Group Packages make solo travel safe, enriching & full of meaningful connections."
    };
    return `✨ ${tripPromos[tripType]}`;
  }
  if (step === 2 && locationType) {
    const locPromos = {
      Beaches: "Relax by the sea with bookfortravel’s Local Expert-Led Group Packages — explore secret beaches, islands, and local gems.",
      Hilly: "Climb into serenity with bookfortravel’s Local Expert-Led Group Packages — curated hikes, hill stays & breathtaking views.",
      "Nature & Forests": "bookfortravel’s Local Expert-Led Group Packages offer guided jungle trails, riverside stays & deep nature immersion.",
      "Culture & History": "Immerse in heritage with bookfortravel’s Local Expert-Led Group Packages — walk, taste, and live local culture.",
      "City Life": "bookfortravel’s Local Expert-Led Group Packages combine modern comfort with immersive city experiences.",
      "Offbeat & Undiscovered": "bookfortravel’s Local Expert-Led Group Packages uncover unexplored gems with local guides & hidden trails."
    };
    return `✨ ${locPromos[locationType]}`;
  }
  if (step === 3 && destination) {
    const destPromos = {
      Vietnam: "bookfortravel’s Local Expert-Led Group Packages in Vietnam uncover hidden trails, vibrant cities & real cultural insights.",
      Thailand: "Travel Thailand the right way with bookfortravel’s Local Expert-Led Group Packages — beyond Bangkok into real adventure.",
      Bali: "bookfortravel’s Local Expert-Led Group Packages in Bali offer curated stays, local experiences & serene escapades."
    };
    return `✨ ${destPromos[destination] || "bookfortravel’s Local Expert-Led Group Packages in Vietnam, Thailand and Bali offer unmatched value & experiences."}`;
  }
  if (step === 4 && budget) {
    if (budget.includes("<₹50")) return `✨ Yes — bookfortravel’s Local Expert-Led Group Packages to Vietnam, Thailand & Bali start under ₹50K — all-inclusive!`;
    if (budget.includes("₹50,000–1L")) return `✨ bookfortravel’s Local Expert-Led Group Packages give you boutique stays, curated activities & flexibility — under ₹1L.`;
    return `✨ bookfortravel’s Local Expert-Led Group Packages offer premium journeys for discerning travelers — with deep local immersion.`;
  }

  if (step === 5 || loading || step === 6) return "";

  return `✨ bookfortravel’s Hosted Packages = Offbeat, Safe, Experiential — starting at ${getConvertedPrice(49999, currency)}.`;
};

export { base, getConvertedPrice, getDynamicPromo };

// ✅ Fixed fetchItinerary with context access
export const createFetchItinerary = (
  setStep,
  setLoading,
  setItinerary,
  currency,
  tripType,
  locationType,
  destination,
  budget,
  travelDays // ✅ Accept new param
) => {

  return async (selectedTravelTime) => {
    setStep(5);
    setLoading(true);

    const durationInDays = travelDays || 5;

    const budgetMap = {
      "<₹50,000": 49000,
      "₹50,000–1L": 75000,
      "₹1L–1.5L": 125000,
      ">₹1.5L": 160000
    };

    const parsed = parseInt(budget.replace(/[^0-9]/g, ""));
    const budgetAmount = budgetMap[budget] || (parsed < 1000 ? parsed * durationInDays : parsed);

    const prompt = `Prepare a travel itinerary with the following parameters:
- Trip Type: ${tripType}
- Location Type: ${locationType}
- Destination: ${destination}
- Travel Dates: ${selectedTravelTime}
- Duration: ${durationInDays} days
- Budget per person per day: INR ${Math.floor(budgetAmount / durationInDays)} (excluding flights & hotels)

The reply must begin with:
1. A clear summary including No. of Days, Budget (excluding flights/hotels), Travel Month, and Season type (On-season/Off-season).
2. Then show a day-wise itinerary plan (simple version first: city, what to see/do).
3. After that, include day-wise cost breakdown: activity, food, and transport costs.
4. Finally, mention average flight cost and hotel cost separately.
5. Sum all these up and show the Estimated Total Trip Cost (including flights & hotels).

Make the tone crisp, engaging, and useful for decision-making.`;

    try {
      const response = await axios.post("https://bookfortravel-backend.onrender.com/api/generate-itinerary", {
        prompt,
        tripType,
        locationType,
        destination,
        travelTime: selectedTravelTime,
        budgetAmount,
        currency
      });
      setItinerary(response.data.itinerary);
      setStep(6);
    } catch (err) {
      setItinerary("❌ Failed to fetch itinerary. Please try again.");
      setStep(6);
    } finally {
      setLoading(false);
    }
  };
};

const BottomPromoCTA = ({ promo, onTryNow }) => {
  const navigate = useNavigate(); // ✅ use it here inside the component

  return (
    <>
      <p className="mt-4 text-sm text-[#6c63ff] italic">{promo}</p>
      <button
        onClick={() => navigate('/hosted-tours')}
        className="block text-[#00bfa5] underline text-center mb-1"
      >
        🔍 Explore All Hosted Group Packages
      </button>
      <button
        className="mt-2 w-full bg-[#6c63ff] text-white px-4 py-2 rounded font-semibold"
        onClick={onTryNow}
      >
        📞 Try it now
      </button>
    </>
  );
};

export { BottomPromoCTA };


const destinationsByCombo = (tripType, locationType) => {
 const combos = {
    'Family|Hilly': {
      international: [
        base('Vietnam', 'Lush green mountains in North & Central Vietnam, best: Nov–March, Avg. ₹60,000', 60000),
        base('Turkey', 'Cappadocia valleys & mountain towns, best: April–June, Avg. ₹72,000', 72000),
        base('Switzerland', 'Alps & serene towns, best: May–Oct, Avg. ₹95,000', 95000)
      ],
      domestic: [
        base('North East', 'Valleys & monasteries in Meghalaya & Sikkim, best: Oct–April, Avg. ₹39,000', 39000),
        base('Kashmir', 'Snowy hills & shikara rides in Gulmarg, best: Dec–Feb, Avg. ₹42,000', 42000),
        base('Coorg', 'Coffee trails & green slopes, best: Oct–March, Avg. ₹36,000', 36000)
      ]
    },
    'Family|Beaches': {
      international: [
        base('Thailand', 'Calm family beaches in Krabi & Hua Hin, best: Nov–Feb, Avg. ₹55,000', 55000),
        base('Bali', 'Laid-back beach towns like Sanur, best: May–Sept, Avg. ₹58,000', 58000),
        base('Mauritius', 'Family resorts & coral beaches, best: May–Oct, Avg. ₹65,000', 65000)
      ],
      domestic: [
        base('Goa', 'South Goa beaches & family-friendly shacks, best: Oct–March, Avg. ₹38,000', 38000),
        base('Pondicherry', 'Clean beaches & colonial charm, best: Nov–Feb, Avg. ₹35,000', 35000),
        base('Andamans', 'White sand & safe shallow beaches, best: Nov–April, Avg. ₹48,000', 48000)
      ]
    },
    'Family|Nature & Forests': {
      international: [
        base('South Africa', 'Wildlife safaris & green reserves, best: May–Oct, Avg. ₹85,000', 85000),
        base('Borneo', 'Rainforests & orangutans, best: May–Sept, Avg. ₹80,000', 80000),
        base('New Zealand', 'National parks & family hiking, best: Nov–March, Avg. ₹95,000', 95000)
      ],
      domestic: [
        base('Jim Corbett', 'Forest stays & tiger sightings, best: Nov–June, Avg. ₹34,000', 34000),
        base('Wayanad', 'Forests, waterfalls & nature walks, best: Oct–Feb, Avg. ₹36,000', 36000),
        base('Kabini', 'Jungle lodges & family trails, best: Nov–May, Avg. ₹38,000', 38000)
      ]
    },
    'Romantic|City Life': {
      international: [
        base('Paris', 'Charming streets & Eiffel views, best: May–Oct, Avg. ₹1,20,000', 120000),
        base('Dubai', 'Luxury dining & desert romance, best: Nov–Feb, Avg. ₹88,000', 88000),
        base('Singapore', 'Clean, modern & night experiences, best: Nov–April, Avg. ₹59,000', 59000)
      ],
      domestic: [
        base('Udaipur', 'Lake palaces & sunset dinners, best: Oct–Feb, Avg. ₹42,000', 42000),
        base('Jaipur', 'Heritage hotels & vibrant markets, best: Nov–March, Avg. ₹39,000', 39000),
        base('Mumbai', 'City buzz & marine drive, best: Nov–Feb, Avg. ₹36,000', 36000)
      ]
    },
    'Honeymoon|Hilly': {
      international: [
        base('Switzerland', 'Snowy romantic Alps & chalets, best: May–Oct, Avg. ₹95,000', 95000),
        base('Georgia', 'Countryside romance & views, best: May–Sept, Avg. ₹62,000', 62000),
        base('Vietnam', 'Cozy retreats in Da Lat hills, best: Oct–March, Avg. ₹60,000', 60000)
      ],
      domestic: [
        base('Kashmir', 'Snowy romance & gondola rides, best: Dec–Feb, Avg. ₹44,000', 44000),
        base('Manali', 'Cabin stays & mountain views, best: Nov–Feb, Avg. ₹38,000', 38000),
        base('Mussoorie', 'Walks & heritage charm, best: Oct–Feb, Avg. ₹35,000', 35000)
      ]
    },
    'Solo|Beaches': {
      international: [
        base('Vietnam', 'Crystal beaches in Da Nang & Phu Quoc, best: Feb–June, Avg. ₹50,000', 50000),
        base('Bali', 'Surfing & retreat cafes, best: April–Sept, Avg. ₹58,000', 58000),
        base('Sri Lanka', 'Unexplored coastlines & colonial towns, best: Nov–April, Avg. ₹53,000', 53000)
      ],
      domestic: [
        base('Goa', 'Beach cafes & sunsets, best: Oct–March, Avg. ₹38,000', 38000),
        base('Varkala', 'Cliff-side beaches & yoga stays, best: Oct–Feb, Avg. ₹32,000', 32000),
        base('Pondicherry', 'Sea walks & French architecture, best: Nov–Feb, Avg. ₹35,000', 35000)
      ]
    },
    'Solo|City Life': {
      international: [
        base('Singapore', 'Safe city with lots to explore solo, best: Nov–April, Avg. ₹59,000', 59000),
        base('Bangkok', 'Street life, nightlife & solo-friendly, best: Nov–Feb, Avg. ₹52,000', 52000),
        base('Seoul', 'Trendy cafes & culture, best: April–Oct, Avg. ₹70,000', 70000)
      ],
      domestic: [
        base('Mumbai', 'City buzz & sea views, best: Nov–Feb, Avg. ₹36,000', 36000),
        base('Delhi', 'Museums, heritage & cafés, best: Oct–Feb, Avg. ₹33,000', 33000),
        base('Bangalore', 'Urban solo vibe & food, best: Nov–Feb, Avg. ₹32,000', 32000)
      ]
    },
    'Group|Offbeat & Undiscovered': {
      international: [
        base('Vietnam', 'Tribal highlands in Ha Giang, best: Oct–March, Avg. ₹52,000', 52000),
        base('Georgia', 'Mountains, wine & hidden towns, best: May–Sept, Avg. ₹62,000', 62000),
        base('Laos', 'Laidback adventure towns like Vang Vieng, best: Nov–Feb, Avg. ₹50,000', 50000)
      ],
      domestic: [
        base('Meghalaya', 'Living root bridges & caves, best: Nov–April, Avg. ₹41,000', 41000),
        base('Spiti Valley', 'Stunning barren landscapes, best: June–Sept, Avg. ₹45,000', 45000),
        base('Arunachal', 'Remote monasteries & tribes, best: Nov–March, Avg. ₹43,000', 43000)
      ]
    },
  'Friends|Hilly': {
      international: [
        base('Nepal', 'Adventure hikes in Pokhara & Annapurna, best: Oct–April, Avg. ₹48,000', 48000),
        base('Vietnam', 'Bach Ma trails & Da Lat fun, best: Oct–March, Avg. ₹52,000', 52000),
        base('Turkey', 'Cappadocia hikes & valleys, best: May–Oct, Avg. ₹70,000', 70000)
      ],
      domestic: [
        base('Kasol', 'Trek-friendly & scenic, best: Oct–April, Avg. ₹28,000', 28000),
        base('Darjeeling', 'Tea trails & views, best: Nov–Feb, Avg. ₹33,000', 33000),
        base('Mussoorie', 'Walks, markets, & hills, best: Oct–Feb, Avg. ₹30,000', 30000)
      ]
    },
    'Friends|Beaches': {
      international: [
        base('Thailand', 'Fun islands like Koh Phi Phi, best: Nov–March, Avg. ₹53,000', 53000),
        base('Philippines', 'Boracay & nightlife, best: Dec–May, Avg. ₹60,000', 60000),
        base('Bali', 'Beach clubs & cafes, best: May–Sept, Avg. ₹58,000', 58000)
      ],
      domestic: [
        base('Goa', 'Perfect for groups, best: Nov–March, Avg. ₹36,000', 36000),
        base('Gokarna', 'Chill beaches & treks, best: Oct–Feb, Avg. ₹30,000', 30000),
        base('Puri', 'Beaches & temples, best: Nov–Feb, Avg. ₹29,000', 29000)
      ]
    },
    'Friends|Nature & Forests': {
      international: [
        base('Costa Rica', 'Jungles & group eco-tours, best: Dec–April, Avg. ₹75,000', 75000),
        base('Malaysia', 'Taman Negara jungle adventure, best: March–Sept, Avg. ₹52,000', 52000),
        base('Peru', 'Amazon trails & group travel, best: May–Oct, Avg. ₹92,000', 92000)
      ],
      domestic: [
        base('Jim Corbett', 'Wildlife trails & forest lodges, best: Nov–June, Avg. ₹32,000', 32000),
        base('Chikmagalur', 'Coffee plantations & waterfalls, best: Oct–Feb, Avg. ₹34,000', 34000),
        base('Kanha', 'Safari & camping vibes, best: Nov–May, Avg. ₹35,000', 35000)
      ]
    },
    'Friends|Culture & History': {
      international: [
        base('Greece', 'Mythology & ancient cities, best: April–Oct, Avg. ₹88,000', 88000),
        base('Turkey', 'Istanbul bazaars & ruins, best: March–Nov, Avg. ₹72,000', 72000),
        base('Egypt', 'Pyramids & temples, best: Nov–Feb, Avg. ₹85,000', 85000)
      ],
      domestic: [
        base('Varanasi', 'Culture, Ganga & temples, best: Oct–March, Avg. ₹28,000', 28000),
        base('Madurai', 'Temples & cuisine, best: Nov–Feb, Avg. ₹29,000', 29000),
        base('Puri', 'Jagannath temple & beach, best: Nov–Feb, Avg. ₹30,000', 30000)
      ]
    },
    'Friends|City Life': {
      international: [
        base('Dubai', 'Nightlife & shopping, best: Nov–Feb, Avg. ₹70,000', 70000),
        base('Bangkok', 'Street food & clubs, best: Nov–March, Avg. ₹50,000', 50000),
        base('Kuala Lumpur', 'Urban adventure & malls, best: Nov–April, Avg. ₹48,000', 48000)
      ],
      domestic: [
        base('Mumbai', 'Sea, nightlife & buzz, best: Nov–Feb, Avg. ₹35,000', 35000),
        base('Bangalore', 'Breweries & gardens, best: Oct–Feb, Avg. ₹34,000', 34000),
        base('Hyderabad', 'Food & monuments, best: Nov–Feb, Avg. ₹33,000', 33000)
      ]
    },
    'Friends|Offbeat & Undiscovered': {
      international: [
        base('Laos', 'Adventure towns like Vang Vieng, best: Nov–Feb, Avg. ₹50,000', 50000),
        base('Jordan', 'Petra & desert camps, best: Oct–April, Avg. ₹72,000', 72000),
        base('Bhutan', 'Trekking & tradition, best: Oct–May, Avg. ₹65,000', 65000)
      ],
      domestic: [
        base('Tawang', 'Mountain village & culture, best: Nov–April, Avg. ₹38,000', 38000),
        base('Ziro', 'Music, tribes & green, best: Oct–April, Avg. ₹36,000', 36000),
        base('Hampi', 'Ruins & quirky charm, best: Oct–Feb, Avg. ₹32,000', 32000)
      ]
    },
    'Romantic|Hilly': {
      international: [
        base('Switzerland', 'Snowy chalets & mountain views, best: May–Sept, Avg. ₹90,000', 90000),
        base('Austria', 'Alpine towns & nature trails, best: April–Oct, Avg. ₹82,000', 82000),
        base('Vietnam', 'Romantic hill towns like Da Lat, best: Oct–March, Avg. ₹60,000', 60000)
      ],
      domestic: [
        base('Kashmir', 'Snowy gondolas & Shikara rides, best: Dec–Feb, Avg. ₹45,000', 45000),
        base('Manali', 'Mountain cafés & private cabins, best: Nov–Feb, Avg. ₹38,000', 38000),
        base('Munnar', 'Tea estates & peaceful retreats, best: Oct–Feb, Avg. ₹36,000', 36000)
      ]
    },
    'Romantic|Nature & Forests': {
      international: [
        base('Costa Rica', 'Rainforest lodges & river tours, best: Dec–April, Avg. ₹78,000', 78000),
        base('New Zealand', 'Green valleys & lakeside cabins, best: Nov–March, Avg. ₹92,000', 92000),
        base('Canada', 'Forest escapes & wildlife, best: May–Sept, Avg. ₹88,000', 88000)
      ],
      domestic: [
        base('Wayanad', 'Jungle resorts & waterfalls, best: Nov–March, Avg. ₹37,000', 37000),
        base('Kabini', 'Romantic forest lodges, best: Oct–May, Avg. ₹39,000', 39000),
        base('Sundarbans', 'Mangroves & river cruises, best: Dec–Feb, Avg. ₹34,000', 34000)
      ]
    },
    'Romantic|Culture & History': {
      international: [
        base('Italy', 'Historic towns & romantic walks, best: April–Oct, Avg. ₹95,000', 95000),
        base('Morocco', 'Riads & ancient medinas, best: Nov–March, Avg. ₹72,000', 72000),
        base('Japan', 'Temples & gardens, best: March–May, Avg. ₹1,00,000', 100000)
      ],
      domestic: [
        base('Hampi', 'Stone ruins & romantic sunsets, best: Nov–Feb, Avg. ₹34,000', 34000),
        base('Khajuraho', 'Temples & heritage stays, best: Oct–Feb, Avg. ₹35,000', 35000),
        base('Orchha', 'Riverfront palaces & old forts, best: Oct–March, Avg. ₹32,000', 32000)
      ]
    },
    'Romantic|Offbeat & Undiscovered': {
      international: [
        base('Slovenia', 'Lakeside castles & quiet beauty, best: April–Sept, Avg. ₹80,000', 80000),
        base('Bhutan', 'Peaceful monasteries & hikes, best: Oct–May, Avg. ₹68,000', 68000),
        base('Philippines', 'Hidden islands & lagoon stays, best: Dec–May, Avg. ₹74,000', 74000)
      ],
      domestic: [
        base('Ziro Valley', 'Tribal culture & pine forests, best: Oct–April, Avg. ₹36,000', 36000),
        base('Tawang', 'Monastery town & valleys, best: Nov–March, Avg. ₹39,000', 39000),
        base('Majuli', 'River island with unique culture, best: Nov–Feb, Avg. ₹34,000', 34000)
      ]
    },
  'Group|Hilly': {
      international: [
        base('Nepal', 'Hikes in Pokhara & mountain bonding, best: Oct–April, Avg. ₹48,000', 48000),
        base('Vietnam', 'Trekking in Sapa, group-friendly, best: Nov–March, Avg. ₹52,000', 52000),
        base('Georgia', 'Caucasus mountains & wine tours, best: May–Sept, Avg. ₹58,000', 58000)
      ],
      domestic: [
        base('Manali', 'Snow adventure & group stays, best: Dec–Feb, Avg. ₹36,000', 36000),
        base('Tawang', 'Scenic monastery town, best: Nov–March, Avg. ₹38,000', 38000),
        base('Darjeeling', 'Himalayan charm & group walks, best: Oct–Feb, Avg. ₹33,000', 33000)
      ]
    },
    'Group|Beaches': {
      international: [
        base('Thailand', 'Beach fun & full moon parties, best: Nov–March, Avg. ₹52,000', 52000),
        base('Bali', 'Beach clubs & shared villas, best: May–Sept, Avg. ₹58,000', 58000),
        base('Sri Lanka', 'Beaches & ruins, best: Nov–April, Avg. ₹53,000', 53000)
      ],
      domestic: [
        base('Goa', 'Beach vibe & nightlife, best: Nov–March, Avg. ₹38,000', 38000),
        base('Varkala', 'Cliff beaches & bonfires, best: Oct–Feb, Avg. ₹33,000', 33000),
        base('Pondicherry', 'French charm & sea walks, best: Nov–Feb, Avg. ₹32,000', 32000)
      ]
    },
    'Group|Nature & Forests': {
      international: [
        base('Costa Rica', 'Rainforests & eco tours, best: Dec–April, Avg. ₹78,000', 78000),
        base('Peru', 'Amazon & Andes treks, best: May–Oct, Avg. ₹82,000', 82000),
        base('Malaysia', 'Taman Negara jungles, best: March–Sept, Avg. ₹55,000', 55000)
      ],
      domestic: [
        base('Wayanad', 'Forests & waterfalls, best: Oct–March, Avg. ₹34,000', 34000),
        base('Jim Corbett', 'Safari & nature trails, best: Nov–June, Avg. ₹32,000', 32000),
        base('Kanha', 'Jungle lodges & safaris, best: Nov–May, Avg. ₹36,000', 36000)
      ]
    },
    'Group|Culture & History': {
      international: [
        base('Italy', 'Colosseum to canals, best: April–Oct, Avg. ₹95,000', 95000),
        base('Turkey', 'Ruins & hammams, best: March–Nov, Avg. ₹72,000', 72000),
        base('Greece', 'Athens to Santorini, best: May–Oct, Avg. ₹90,000', 90000)
      ],
      domestic: [
        base('Hampi', 'Historic sites & group trails, best: Nov–Feb, Avg. ₹30,000', 30000),
        base('Jaipur', 'Palaces & forts, best: Oct–Feb, Avg. ₹34,000', 34000),
        base('Madurai', 'Temples & cuisine, best: Nov–Feb, Avg. ₹29,000', 29000)
      ]
    },
    'Group|City Life': {
      international: [
        base('Dubai', 'Skyscrapers & desert fun, best: Nov–Feb, Avg. ₹68,000', 68000),
        base('Bangkok', 'Markets & nightlife, best: Nov–March, Avg. ₹52,000', 52000),
        base('Kuala Lumpur', 'Urban exploration & malls, best: Nov–April, Avg. ₹48,000', 48000)
      ],
      domestic: [
        base('Mumbai', 'Urban fun & nightlife, best: Nov–Feb, Avg. ₹36,000', 36000),
        base('Hyderabad', 'Biryani to bazaars, best: Nov–Feb, Avg. ₹34,000', 34000),
        base('Delhi', 'Museums & street food, best: Oct–Feb, Avg. ₹33,000', 33000)
      ]
    },
    'Group|Offbeat & Undiscovered': {
      international: [
        base('Georgia', 'Caucasus trekking & wine, best: May–Sept, Avg. ₹62,000', 62000),
        base('Laos', 'Underrated town life, best: Nov–Feb, Avg. ₹48,000', 48000),
        base('Bhutan', 'Trekking with soul, best: Oct–May, Avg. ₹65,000', 65000)
      ],
      domestic: [
        base('Ziro Valley', 'Music, tribes & peace, best: Oct–April, Avg. ₹36,000', 36000),
        base('Tawang', 'Snowy group escape, best: Nov–March, Avg. ₹38,000', 38000),
        base('Spiti Valley', 'Desert mountains & culture, best: June–Sept, Avg. ₹42,000', 42000)
      ]
    },
    'Honeymoon|Beaches': {
      international: [
        base('Maldives', 'Overwater romance, best: Nov–April, Avg. ₹95,000', 95000),
        base('Bali', 'Private villas & sunsets, best: May–Sept, Avg. ₹58,000', 58000),
        base('Seychelles', 'Pristine sands & exclusivity, best: Oct–May, Avg. ₹85,000', 85000)
      ],
      domestic: [
        base('Goa', 'Beach & chill, best: Nov–March, Avg. ₹39,000', 39000),
        base('Varkala', 'Cliff romance & sunsets, best: Oct–Feb, Avg. ₹35,000', 35000),
        base('Pondicherry', 'French charm by the sea, best: Nov–Feb, Avg. ₹33,000', 33000)
      ]
    },
    'Honeymoon|Nature & Forests': {
      international: [
        base('Costa Rica', 'Rainforest intimacy, best: Dec–April, Avg. ₹78,000', 78000),
        base('New Zealand', 'Lake lodges & green trails, best: Nov–March, Avg. ₹92,000', 92000),
        base('Canada', 'Forest cabins & wildlife, best: May–Sept, Avg. ₹88,000', 88000)
      ],
      domestic: [
        base('Wayanad', 'Romantic retreats in jungle, best: Oct–March, Avg. ₹36,000', 36000),
        base('Kabini', 'Luxury lodges & safaris, best: Oct–May, Avg. ₹38,000', 38000),
        base('Sundarbans', 'Mangrove boat stays, best: Dec–Feb, Avg. ₹34,000', 34000)
      ]
    },
    'Honeymoon|Culture & History': {
      international: [
        base('Italy', 'Rome to Venice tales, best: April–Oct, Avg. ₹95,000', 95000),
        base('Morocco', 'Medina romance, best: Nov–March, Avg. ₹72,000', 72000),
        base('Japan', 'Zen temples & blossoms, best: March–May, Avg. ₹1,00,000', 100000)
      ],
      domestic: [
        base('Hampi', 'Stone ruins & romance, best: Nov–Feb, Avg. ₹34,000', 34000),
        base('Udaipur', 'Lakes & heritage hotels, best: Oct–Feb, Avg. ₹42,000', 42000),
        base('Khajuraho', 'Sculpture & serenity, best: Oct–Feb, Avg. ₹35,000', 35000)
      ]
    },
    'Honeymoon|City Life': {
      international: [
        base('Paris', 'Romantic streets & cafés, best: May–Oct, Avg. ₹1,10,000', 110000),
        base('Dubai', 'Skylines & indulgence, best: Nov–Feb, Avg. ₹88,000', 88000),
        base('Singapore', 'Clean & charming city escape, best: Nov–April, Avg. ₹59,000', 59000)
      ],
      domestic: [
        base('Jaipur', 'Palatial romance, best: Nov–Feb, Avg. ₹39,000', 39000),
        base('Mumbai', 'Coastal charm & buzz, best: Nov–Feb, Avg. ₹36,000', 36000),
        base('Delhi', 'Heritage walks & food, best: Oct–Feb, Avg. ₹33,000', 33000)
      ]
    },
    'Honeymoon|Offbeat & Undiscovered': {
      international: [
        base('Slovenia', 'Lake Bled & castles, best: April–Sept, Avg. ₹80,000', 80000),
        base('Bhutan', 'Silent monasteries & views, best: Oct–May, Avg. ₹68,000', 68000),
        base('Philippines', 'Private islands & lagoons, best: Dec–May, Avg. ₹74,000', 74000)
      ],
      domestic: [
        base('Tawang', 'Snowy village romance, best: Nov–March, Avg. ₹38,000', 38000),
        base('Ziro Valley', 'Music, calm & forest breeze, best: Oct–April, Avg. ₹36,000', 36000),
        base('Majuli', 'Island stays & culture, best: Nov–Feb, Avg. ₹34,000', 34000)
      ]
    },
'Romantic|Beaches': {
    international: [
      base('Bali', 'Private villas & sunset beaches, best: April–Sept, Avg. ₹58,000', 58000),
      base('Maldives', 'Overwater villas & turquoise waters, best: Nov–March, Avg. ₹90,000', 90000),
      base('Thailand', 'Romantic hideaways in Koh Lanta, best: Nov–Feb, Avg. ₹54,000', 54000)
    ],
    domestic: [
      base('Varkala', 'Cliffside beaches & cafes, best: Oct–Feb, Avg. ₹32,000', 32000),
      base('Gokarna', 'Peaceful beaches & yoga stays, best: Nov–Feb, Avg. ₹34,000', 34000),
      base('Alleppey', 'Beach & backwater combo, best: Oct–Feb, Avg. ₹37,000', 37000)
    ]
  },
  'Romantic|City Life': {
    international: [
      base('Paris', 'Charming streets & Eiffel views, best: May–Oct, Avg. ₹1,20,000', 120000),
      base('Dubai', 'Luxury dining & desert romance, best: Nov–Feb, Avg. ₹88,000', 88000),
      base('Singapore', 'Clean, modern & night experiences, best: Nov–April, Avg. ₹59,000', 59000)
    ],
    domestic: [
      base('Udaipur', 'Lake palaces & sunset dinners, best: Oct–Feb, Avg. ₹42,000', 42000),
      base('Jaipur', 'Heritage hotels & vibrant markets, best: Nov–March, Avg. ₹39,000', 39000),
      base('Mumbai', 'City buzz & marine drive, best: Nov–Feb, Avg. ₹36,000', 36000)
    ]
  },
  'Solo|Hilly': {
    international: [
      base('Nepal', 'Solo treks in Pokhara & beyond, best: Oct–April, Avg. ₹45,000', 45000),
      base('Vietnam', 'Sapa solo adventures, best: Nov–March, Avg. ₹52,000', 52000),
      base('Bhutan', 'Peaceful hikes & culture, best: Oct–May, Avg. ₹55,000', 55000)
    ],
    domestic: [
      base('Kasol', 'Backpacker treks & cafes, best: Oct–April, Avg. ₹30,000', 30000),
      base('McLeod Ganj', 'Solo retreats in hills, best: Oct–Feb, Avg. ₹28,000', 28000),
      base('Spiti Valley', 'High-altitude solitude, best: June–Sept, Avg. ₹35,000', 35000)
    ]
  },
  'Solo|Nature & Forests': {
    international: [
      base('Costa Rica', 'Rainforest trails & safaris, best: Dec–April, Avg. ₹72,000', 72000),
      base('Malaysia', 'Jungle solo treks in Borneo, best: May–Sept, Avg. ₹53,000', 53000),
      base('Peru', 'Amazon & Andes fusion, best: May–Oct, Avg. ₹82,000', 82000)
    ],
    domestic: [
      base('Wayanad', 'Forest treks & solitude, best: Oct–Feb, Avg. ₹34,000', 34000),
      base('Kabini', 'Solo jungle stays, best: Oct–May, Avg. ₹35,000', 35000),
      base('Satpura', 'Untouched forest trekking, best: Oct–March, Avg. ₹33,000', 33000)
    ]
  },
  'Solo|Culture & History': {
    international: [
      base('Japan', 'Temples & cultural immersion, best: March–May, Avg. ₹98,000', 98000),
      base('Italy', 'Solo museum hopping & ruins, best: April–Oct, Avg. ₹92,000', 92000),
      base('Turkey', 'Mosques & Roman ruins, best: March–Nov, Avg. ₹68,000', 68000)
    ],
    domestic: [
      base('Varanasi', 'Solo soul-searching by the Ganges, best: Oct–March, Avg. ₹28,000', 28000),
      base('Hampi', 'Ancient vibes & solo bliss, best: Nov–Feb, Avg. ₹30,000', 30000),
      base('Ajanta-Ellora', 'Caves & carvings, best: Oct–Feb, Avg. ₹29,000', 29000)
    ]
  },
  'Family|Culture & History': {
    international: [
      base('Egypt', 'Pyramids, museums & kids’ tales, best: Nov–Feb, Avg. ₹85,000', 85000),
      base('Italy', 'Ancient Rome & Colosseum tours, best: April–Oct, Avg. ₹92,000', 92000),
      base('Turkey', 'Istanbul palaces & bazaars, best: March–Nov, Avg. ₹72,000', 72000)
    ],
    domestic: [
      base('Jaipur', 'Forts, elephants & fun, best: Oct–Feb, Avg. ₹33,000', 33000),
      base('Madurai', 'Temple wonders & stories, best: Nov–Feb, Avg. ₹30,000', 30000),
      base('Hampi', 'Family heritage walk, best: Nov–Feb, Avg. ₹29,000', 29000)
    ]
  },
  'Family|City Life': {
    international: [
      base('Singapore', 'Safe & tech-driven, best: Nov–April, Avg. ₹59,000', 59000),
      base('Dubai', 'Theme parks & shopping, best: Nov–Feb, Avg. ₹68,000', 68000),
      base('Bangkok', 'Street eats & temples, best: Nov–Feb, Avg. ₹50,000', 50000)
    ],
    domestic: [
      base('Delhi', 'Monuments, museums & metro, best: Oct–Feb, Avg. ₹28,000', 28000),
      base('Mumbai', 'Family city fun, best: Nov–Feb, Avg. ₹30,000', 30000),
      base('Hyderabad', 'Ramoji & history, best: Nov–Feb, Avg. ₹29,000', 29000)
    ]
  },
  'Family|Offbeat & Undiscovered': {
    international: [
      base('Bhutan', 'Cultural calm & safe travel, best: Oct–May, Avg. ₹65,000', 65000),
      base('Slovenia', 'Fairytale lakes & safety, best: April–Sept, Avg. ₹78,000', 78000),
      base('Laos', 'Quiet towns & safe stays, best: Nov–Feb, Avg. ₹52,000', 52000)
    ],
    domestic: [
      base('Ziro', 'Tribal life & pine hills, best: Oct–April, Avg. ₹34,000', 34000),
      base('Tawang', 'Snowy monastery charm, best: Nov–March, Avg. ₹36,000', 36000),
      base('Majuli', 'Family river island escape, best: Nov–Feb, Avg. ₹33,000', 33000)
    ]
  },
'Solo|Offbeat & Undiscovered': {
    international: [
      base('Bhutan', 'Peaceful trails & solo-friendly culture, best: Oct–May, Avg. ₹62,000', 62000),
      base('Laos', 'Quiet riverside towns & caves, best: Nov–Feb, Avg. ₹48,000', 48000),
      base('Georgia', 'Historic towns & budget solo fun, best: May–Sept, Avg. ₹58,000', 58000)
    ],
    domestic: [
      base('Spiti Valley', 'Barren beauty & spiritual escape, best: June–Sept, Avg. ₹36,000', 36000),
      base('Ziro Valley', 'Music, tribes & forest vibe, best: Oct–April, Avg. ₹34,000', 34000),
      base('Majuli', 'River island with solo serenity, best: Nov–Feb, Avg. ₹32,000', 32000)
    ]
  }
};

  return combos[`${tripType}|${locationType}`] || { international: [], domestic: [] };
};

export default function ChatbotV2({ currency = 'INR', isOpen, setIsOpen, user, authLoading }) {
  const [step, setStep] = useState(0);
  const [tripType, setTripType] = useState('');
   const [showCustomInput, setShowCustomInput] = useState(false);
  const [budget, setBudget] = useState('');
const [travelDays, setTravelDays] = useState(null);

 const [locationType, setLocationType] = useState('');
  const [destination, setDestination] = useState('');
  const [customDest, setCustomDest] = useState('');
  const [travelTime, setTravelTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState('');
const [showLeadForm, setShowLeadForm] = useState(false);
const [leadName, setLeadName] = useState('');
const [leadPhone, setLeadPhone] = useState('');
const [leadEmail, setLeadEmail] = useState('');
const [leadCountryCode, setLeadCountryCode] = useState('+91');
const [leadSubmitted, setLeadSubmitted] = useState(false);


const fetchItinerary = createFetchItinerary(
    setStep,
    setLoading,
    setItinerary,
    currency,
    tripType,
    locationType,
    destination,
    budget,
    travelDays
  );

 useEffect(() => {
    const opened = sessionStorage.getItem('chatbotOpened');
    if (!opened) {
      setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('chatbotOpened', 'true');
      }, 5000);
    }
  }, []);


  const goBack = () => step > 0 && setStep(step - 1);
  const promo = getDynamicPromo(step, tripType, locationType, destination, budget, currency);
  const destOptions = destinationsByCombo(tripType, locationType);
  const formatDest = (d) => `${d.name} (${d.note}) – from ${getConvertedPrice(d.price, currency)}`;

const handleLeadSubmit = () => {
  const formData = {
    name: leadName,
    phone: leadPhone,
    email: leadEmail,
    tripType,
    locationType,
    destination,
    budget,
    travelTime,
    travelDays,
  };

  submitChatbotLead(formData, setLeadSubmitted, setShowLeadForm);
};

const submitChatbotLead = async (formData, setLeadSubmitted, setShowLeadForm) => {
const fullPhone = `${leadCountryCode.replace('+', '')}${leadPhone}`;
  
const params = new URLSearchParams();
  params.append('source', 'chatbot');
  params.append('name', formData.name || '');
  params.append('phone', formData.phone || '');
  params.append('email', formData.email || '');
  params.append('tripType', formData.tripType || '');
  params.append('locationType', formData.locationType || '');
  params.append('destination', formData.destination || '');
  params.append('budget', formData.budget || '');
  params.append('travelTime', formData.travelTime || '');
  params.append('travelDays', formData.travelDays || '');

  try {
    await fetch("https://script.google.com/macros/s/AKfycbzb9Jgg5FKyUJI4KWDgybMadO-C10aa3zTKL0yGslVw0WtowMLrfuJcauMTh-mykn0IrA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    console.log("✅ Chatbot lead submitted");

    if (setLeadSubmitted) setLeadSubmitted(true);
    if (setShowLeadForm) setShowLeadForm(false);

    setTimeout(() => {
      if (setLeadSubmitted) setLeadSubmitted(false);
    }, 10000);

  } catch (err) {
    console.error("❌ Lead submission error:", err);
    alert("❌ Failed to submit lead. Please try again.");
  }
};

return (
  <>
    {/* ✅ Desktop Chatbot Entry Logo */}
    {!isOpen && <DesktopChatLogo onClick={() => setIsOpen(true)} />}

    {/* ✅ Desktop Chatbot Panel (only if open) */}
    {isOpen && (
      <div className="fixed bottom-5 right-5 z-50 hidden sm:block">
        <div className="w-full max-w-[384px] bg-white shadow-lg rounded-lg border border-gray-300 max-h-[85vh] overflow-y-auto chatbot-slide-in overflow-x-hidden">


          
<div className="bg-black px-4 py-2 flex items-center justify-start rounded-t-lg relative">
  {/* Left-aligned logo */}
  <img src={logo} alt="bookfortravel" className="h-6 z-10 ml-2" />

  {/* ❌ Close Button */}
  <div
    className="absolute right-3 top-2 text-white text-xl cursor-pointer z-20"
    onClick={() => setIsOpen(false)}
  >
    &times;
  </div>

{/* ✈️ Plane Animation (Lottie) */}
<div className="absolute top-[-40px] left-[240px] w-40 h-40 z-10 pointer-events-none overflow-visible">
  <Lottie
    animationData={planeFlyAnimation}
    loop={false}
    autoplay={true}
    className="plane-arc-flight fade-out-lottie"
    style={{
      width: '160px',   // ✅ 2x larger (was 60px before)
      height: '160px',  // ✅ 2x larger
      position: 'absolute',
    }}
  />
</div>







          </div>
      <div className="p-4 text-sm">
            

{step === 0 && (
              <>
<p className="text-center text-sm font-semibold text-gray-700 mb-2">
  📍 Get a day-wise travel itinerary tailored to your needs in just 2 mins!
</p>

                <p>What kind of trip are you planning?</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Romantic', 'Family', 'Honeymoon', 'Group', 'Friends', 'Solo'].map(t => (
                    <button key={t} onClick={() => { setTripType(t); setStep(1); }} className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white">{t}</button>
                  ))}
                </div>
                <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
              </>
            )}

{step === 1 && (
  <>
<div className="flex justify-between items-center gap-2 mb-2">
  <p className="text-sm font-medium whitespace-nowrap">What type of destination do you prefer?</p>
  <button
    onClick={() => {
      setStep(0);
      setTripType('');
      setLocationType('');
      setDestination('');
      setCustomDest('');
      setBudget('');
      setTravelTime('');
      setTravelDays(null);
      setItinerary('');
      setShowLeadForm(false);
      setLeadSubmitted(false);
    }}
    className="text-xs text-blue-600 underline whitespace-nowrap"
  >
    🔄 Start Over
  </button>
</div>


    <div className="flex flex-wrap gap-2">
      {[
        'Hilly',
        'Beaches',
        'Nature & Forests',
        'Culture & History',
        'City Life',
        'Offbeat & Undiscovered'
      ].map(l => (
        <button
          key={l}
          onClick={() => {
            setLocationType(l);
            setStep(2);
          }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {l}
        </button>
      ))}
    </div>

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">⬅ Go Back</button>

    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
)}




{step === 2 && (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">Select your destination:</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <p className="font-semibold mt-2">🌍 International</p>
    <div className="flex flex-wrap gap-2 mt-1">
      {destOptions.international.map((d) => (
        <button
          key={d.name}
          onClick={() => {
            setDestination(d.name);
            setStep(3);
          }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {formatDest(d)}
        </button>
      ))}
    </div>

    <p className="font-semibold mt-3">🇮🇳 Domestic</p>
    <div className="flex flex-wrap gap-2 mt-1">
      {destOptions.domestic.map((d) => (
        <button
          key={d.name}
          onClick={() => {
            setDestination(d.name);
            setStep(3);
          }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {formatDest(d)}
        </button>
      ))}
    </div>

    {!showCustomInput && (
      <button
        onClick={() => setShowCustomInput(true)}
        className="mt-2 text-xs underline text-blue-600"
      >
        Other destination?
      </button>
    )}

    {showCustomInput && (
      <div className="mt-2">
        <input
          type="text"
          value={customDest}
          onChange={(e) => setCustomDest(e.target.value)}
          placeholder="Enter destination"
          className="w-full border px-2 py-1 rounded mb-1"
        />
        <button
          onClick={() => {
            setDestination(customDest);
            setStep(3);
          }}
          className="bg-[#00bfa5] text-white px-3 py-1 rounded w-full"
        >
          Continue
        </button>
      </div>
    )}

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">
      ⬅ Go Back
    </button>

    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
)}
            
{step === 3 && (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">What is your per person budget?</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {["<₹50,000", "₹50,000–1L", "₹1L–1.5L", ">₹1.5L"].map(b => (
        <button
          key={b}
          onClick={() => { setBudget(b); setStep(4); }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {b}
        </button>
      ))}
    </div>

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">⬅ Go Back</button>
    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
)}


            {step === 4 && (!travelDays ? (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">How many days do you plan to travel?</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {[3, 5, 7, 10, 14].map((d) => (
        <button key={d} onClick={() => setTravelDays(d)} className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white">{d} Days</button>
      ))}
    </div>

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">⬅ Go Back</button>
    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
) : (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">When are you planning to travel?</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {["Jun–Aug", "Sep–Oct", "Nov–Dec", "Jan–Mar", "April–May"].map((month) => (
        <button key={month} onClick={() => { setTravelTime(month); fetchItinerary(month); }} className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white">{month}</button>
      ))}
    </div>

    <button onClick={() => setTravelDays(null)} className="mt-3 text-xs underline text-blue-600">⬅ Change Days</button>
    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
))}


            {step === 5 && (
              <>
                <p className="italic text-sm text-gray-700">⏳ Creating your perfect itinerary... please wait (may take upto 45 seconds)</p>
                <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
              </>
            )}

{step === 6 && (
  <>
    <div className="flex justify-between items-start gap-2 mb-2">
      <p className="text-sm font-medium text-[#00bfa5]">
        ✅ Here it is, the perfect Itinerary for you :) Thank you for giving us a chance to help you!
        For further details & queries, click the 📞 Try it now button below and our agent will get back to you ASAP.
        Happy Planning! ✨
      </p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="max-h-60 overflow-y-auto whitespace-pre-line text-sm text-gray-700 mb-4">
      {itinerary}
    </div>

    <div className="sticky bottom-0 bg-white pt-2 pb-3 border-t border-gray-200">
      <p className="text-sm text-[#6c63ff] italic text-center mb-1">
        ✨ Unforgettable Journeys Await! bookfortravel’s Expert-Led Group Tours to Vietnam, Thailand & Bali — starting at just ₹49,999!
      </p>
      <Link to="/hosted-tours" className="block text-[#00bfa5] underline text-center mb-1">
        🔍 Explore All Hosted Group Packages
      </Link>
      <button
        className="mt-2 w-full bg-[#6c63ff] text-white px-4 py-2 rounded font-semibold"
        onClick={() => setShowLeadForm(true)}
      >
        📞 Try it now
      </button>
    </div>
  </>
)}


            {showLeadForm && (
              <div className="bg-[#f5f5f5] p-4 rounded border m-4">
                <p className="font-semibold text-sm mb-2">📞 Get a Callback from Our Travel Expert</p>
                <input type="text" placeholder="Your Name" value={leadName} onChange={(e) => setLeadName(e.target.value)} className="w-full mb-2 p-2 border rounded" />
                <div className="flex gap-2 mb-2">
                  <select value={leadCountryCode} onChange={(e) => setLeadCountryCode(e.target.value)} className="w-1/3 border p-2 rounded">
                    {countryCodes.map(({ code, label }) => (
                      <option key={code} value={code}>{label} ({code})</option>
                    ))}
                  </select>
                  <input type="tel" placeholder="WhatsApp Number" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} className="w-2/3 p-2 border rounded" />
                </div>
                <input type="email" placeholder="Email Address" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} className="w-full mb-2 p-2 border rounded" />
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded w-full" onClick={handleLeadSubmit}>🚀 Request Callback</button>
                <button className="mt-2 text-xs underline text-gray-500" onClick={() => setShowLeadForm(false)}>⬅ Go Back</button>
              </div>
            )}

            {leadSubmitted && (
              <div className="bg-[#e6fffa] border border-[#00bfa5] text-[#00695c] text-sm p-4 rounded m-4 shadow-md">
                ✅ <strong>Thank you!</strong> Your request has been submitted.
                <br />📞 One of our travel experts will contact you within <strong>6 hours</strong>.
               
              </div>
            )}
          </div>
        </div>
    </div>
)}

{/* Mobile View (below sm) */}
<div className="sm:hidden">
  {isOpen && (
    <MobileChatbotUX isOpen={isOpen} setIsOpen={setIsOpen}>
  <div className="w-full max-w-[95vw] mx-auto overflow-x-hidden">

      {/* ✅ This is the actual chatbot logic content shown inside MobileChatbotUX */}

{/* ✈️ Plane Animation (visible on all screens) */}
<div className="absolute top-[-35px] left-[220px] sm:left-[220px] w-36 h-36 z-10 pointer-events-none overflow-visible">
  <Lottie
    animationData={planeFlyAnimation}
    loop={false}
    autoplay={true}
    className="plane-arc-flight fade-out-lottie"
    style={{
      width: '160px',   // Adjust for desktop
      height: '160px',
      position: 'absolute',
    }}
  />
</div>



{step === 0 && (
              <>
<p className="text-center text-sm font-semibold text-gray-700 mb-2">
  📍 Get a day-wise travel itinerary tailored to your needs in just 2 mins!
</p>

                <p>What kind of trip are you planning?</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Romantic', 'Family', 'Honeymoon', 'Group', 'Friends', 'Solo'].map(t => (
                    <button key={t} onClick={() => { setTripType(t); setStep(1); }} className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white">{t}</button>
                  ))}
                </div>
                <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
              </>
            )}

{step === 1 && (
  <>
<div className="flex justify-between items-center gap-2 mb-2">
  <p className="text-sm font-medium whitespace-nowrap">What type of destination do you prefer?</p>
  <button
    onClick={() => {
      setStep(0);
      setTripType('');
      setLocationType('');
      setDestination('');
      setCustomDest('');
      setBudget('');
      setTravelTime('');
      setTravelDays(null);
      setItinerary('');
      setShowLeadForm(false);
      setLeadSubmitted(false);
    }}
    className="text-xs text-blue-600 underline whitespace-nowrap"
  >
    🔄 Start Over
  </button>
</div>


    <div className="flex flex-wrap gap-2">
      {[
        'Hilly',
        'Beaches',
        'Nature & Forests',
        'Culture & History',
        'City Life',
        'Offbeat & Undiscovered'
      ].map(l => (
        <button
          key={l}
          onClick={() => {
            setLocationType(l);
            setStep(2);
          }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {l}
        </button>
      ))}
    </div>

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">⬅ Go Back</button>

    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
)}


{step === 2 && (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">Select your destination:</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <p className="font-semibold mt-2">🌍 International</p>
    <div className="flex flex-wrap gap-2 mt-1">
      {destOptions.international.map(d => (
        <button
          key={d.name}
          onClick={() => {
            setDestination(d.name);
            setStep(3);
          }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {formatDest(d)}
        </button>
      ))}
    </div>

    <p className="font-semibold mt-3">🇮🇳 Domestic</p>
    <div className="flex flex-wrap gap-2 mt-1">
      {destOptions.domestic.map(d => (
        <button
          key={d.name}
          onClick={() => {
            setDestination(d.name);
            setStep(3);
          }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {formatDest(d)}
        </button>
      ))}
    </div>

    {!showCustomInput && (
      <button
        onClick={() => setShowCustomInput(true)}
        className="mt-2 text-xs underline text-blue-600"
      >
        Other destination?
      </button>
    )}

    {showCustomInput && (
      <div className="mt-2">
        <input
          type="text"
          value={customDest}
          onChange={(e) => setCustomDest(e.target.value)}
          placeholder="Enter destination"
          className="w-full border px-2 py-1 rounded mb-1"
        />
        <button
          onClick={() => {
            setDestination(customDest);
            setStep(3);
          }}
          className="bg-[#00bfa5] text-white px-3 py-1 rounded w-full"
        >
          Continue
        </button>
      </div>
    )}

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">
      ⬅ Go Back
    </button>

    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
)}
            {step === 3 && (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">What is your per person budget?</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {["<₹50,000", "₹50,000–1L", "₹1L–1.5L", ">₹1.5L"].map(b => (
        <button
          key={b}
          onClick={() => { setBudget(b); setStep(4); }}
          className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white"
        >
          {b}
        </button>
      ))}
    </div>

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">⬅ Go Back</button>
    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
)}


            {step === 4 && (!travelDays ? (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">How many days do you plan to travel?</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {[3, 5, 7, 10, 14].map((d) => (
        <button key={d} onClick={() => setTravelDays(d)} className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white">{d} Days</button>
      ))}
    </div>

    <button onClick={goBack} className="mt-3 text-xs underline text-blue-600">⬅ Go Back</button>
    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
) : (
  <>
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-sm font-medium whitespace-nowrap">When are you planning to travel?</p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {["Jun–Aug", "Sep–Oct", "Nov–Dec", "Jan–Mar", "April–May"].map((month) => (
        <button key={month} onClick={() => { setTravelTime(month); fetchItinerary(month); }} className="bg-gray-100 px-3 py-1 rounded-full border hover:bg-[#00bfa5] hover:text-white">{month}</button>
      ))}
    </div>

    <button onClick={() => setTravelDays(null)} className="mt-3 text-xs underline text-blue-600">⬅ Change Days</button>
    <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
  </>
))}


            {step === 5 && (
              <>
                <p className="italic text-sm text-gray-700">⏳ Creating your perfect itinerary... please wait (may take upto 45 seconds)</p>
                <BottomPromoCTA promo={promo} onTryNow={() => setShowLeadForm(true)} />
              </>
            )}

{step === 6 && (
  <>
    <div className="flex justify-between items-start gap-2 mb-2">
      <p className="text-sm font-medium text-[#00bfa5]">
        ✅ Here it is, the perfect Itinerary for you :) Thank you for giving us a chance to help you!
        For further details & queries, click the 📞 Try it now button below and our agent will get back to you ASAP.
        Happy Planning! ✨
      </p>
      <button
        onClick={() => {
          setStep(0);
          setTripType('');
          setLocationType('');
          setDestination('');
          setCustomDest('');
          setBudget('');
          setTravelTime('');
          setTravelDays(null);
          setItinerary('');
          setShowLeadForm(false);
          setLeadSubmitted(false);
        }}
        className="text-xs text-blue-600 underline whitespace-nowrap"
      >
        🔄 Start Over
      </button>
    </div>

    <div className="max-h-60 overflow-y-auto whitespace-pre-line text-sm text-gray-700 mb-4">
      {itinerary}
    </div>

    <div className="sticky bottom-0 bg-white pt-2 pb-3 border-t border-gray-200">
      <p className="text-sm text-[#6c63ff] italic text-center mb-1">
        ✨ Unforgettable Journeys Await! bookfortravel’s Expert-Led Group Tours to Vietnam, Thailand & Bali — starting at just ₹49,999!
      </p>
      <Link to="/hosted-tours" className="block text-[#00bfa5] underline text-center mb-1">
        🔍 Explore All Hosted Group Packages
      </Link>
      <button
        className="mt-2 w-full bg-[#6c63ff] text-white px-4 py-2 rounded font-semibold"
        onClick={() => setShowLeadForm(true)}
      >
        📞 Try it now
      </button>
    </div>
  </>
)}


            {showLeadForm && (
              <div className="bg-[#f5f5f5] p-4 rounded border m-4">
                <p className="font-semibold text-sm mb-2">📞 Get a Callback from Our Travel Expert</p>
                <input type="text" placeholder="Your Name" value={leadName} onChange={(e) => setLeadName(e.target.value)} className="w-full mb-2 p-2 border rounded" />
                <div className="flex gap-2 mb-2">
                  <select value={leadCountryCode} onChange={(e) => setLeadCountryCode(e.target.value)} className="w-1/3 border p-2 rounded">
                    {countryCodes.map(({ code, label }) => (
                      <option key={code} value={code}>{label} ({code})</option>
                    ))}
                  </select>
                  <input type="tel" placeholder="WhatsApp Number" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} className="w-2/3 p-2 border rounded" />
                </div>
                <input type="email" placeholder="Email Address" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} className="w-full mb-2 p-2 border rounded" />
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded w-full" onClick={handleLeadSubmit}>🚀 Request Callback</button>
                <button className="mt-2 text-xs underline text-gray-500" onClick={() => setShowLeadForm(false)}>⬅ Go Back</button>
              </div>
            )}

            {leadSubmitted && (
              <div className="bg-[#e6fffa] border border-[#00bfa5] text-[#00695c] text-sm p-4 rounded m-4 shadow-md">
                ✅ <strong>Thank you!</strong> Your request has been submitted.
                <br />📞 One of our travel experts will contact you within <strong>6 hours</strong>.
                <br />💡 Meanwhile, you can explore our <a href="/hosted-packages" className="underline text-[#00bfa5]">Hosted Group Tours</a>.
              </div>
            )}
</div>

    </MobileChatbotUX>
  )}
</div>

  </>
);
};
