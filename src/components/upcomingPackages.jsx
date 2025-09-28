// src/data/upcoming_packages.js
// Note: No `inclusions` field (you provided inclusions for reference).
// `activities` limited to max 4 items and each is at most two words.
// `groupDates` are in long ordinal format as requested.

const upcomingPackages = [
  {
    id: "upc-001",
    name: "Danang & Phu Quoc Group Escape",
    country: "Vietnam",
    image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994168/day7_1_jet3ir.png", // replace with your hosted image URL
    price: 62999,
    originalPrice: 72999,
    duration: 6,
    nights: 5,
    rating: 4.8,
    ratingCount: "87",
    activities: [
      "Golden Bridge",
      "Marble Mountains",
      "Hoi An",
      "Phu Quoc Beaches"
    ],
    groupDates: [
      "21st Nov 25",
      "17th Jan 26"
    ]
  },

  {
    id: "upc-002",
    name: "Vietnam — The North & Central Paradise",
    country: "Vietnam",
    image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994162/day6_2_yyx6ty.png", // replace with your hosted image URL
    price: 84999,
    originalPrice: 94999,
    duration: 8,
    nights: 7,
    rating: 4.9,
    ratingCount: "124",
    activities: [
      "Halong Cruise",
      "Sapa Trek",
      "Fansipan Peak",
      "Hoi An"
    ],
    groupDates: [
      "14th Nov 25",
      "6th Feb 26"
    ]
  },

  {
    id: "upc-003",
    name: "Vietnam Hanoi & Danang Group Escape",
    country: "Vietnam",
    image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1758994158/day4_2_ahl9if.png", // replace with your hosted image URL
    price: 64999,
    originalPrice: 74999,
    duration: 7,
    nights: 6,
    rating: 4.8,
    ratingCount: "92",
    activities: [
      "Halong Cruise",
      "Ninh Binh",
      "Hanoi Tour",
      "Ba Na"
    ],
    groupDates: [
      "14th Dec 25",
      "4th Feb 26"
    ]
  },

  {
    id: "upc-004",
    name: "Thailand Island Group Getaway",
    country: "Thailand",
    image: "https://res.cloudinary.com/drvigtwgm/image/upload/v1759051008/thailand_group_tour_mwwmoi.jpg", // replace with your hosted image URL
    price: 67500,
    originalPrice: 79000,
    duration: 6,
    nights: 5,
    rating: 4.9,
    ratingCount: "315",
    activities: [
      "Phi Phi",
      "Krabi Islands",
      "Big Buddha",
      "Maya Bay"
    ],
    groupDates: [
      "18th Dec 25",
      "15th Feb 26"
    ]
  }
];

export default upcomingPackages;


