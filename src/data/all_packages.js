const allPackages = [
    {
        "id": "684c044cdf1797b721c5089d",
        "name": "Vietnam Unveiled: Culture, Caves & Cruises",
        "country": "Vietnam",
        "image": "https://i.postimg.cc/6Qd7qCmW/Vietnam.png",
        "price": 59999,
        "originalPrice": 74999,
        "duration": 7,
        "nights": 6,
        "rating": 4.8,
        "ratingCount": "144",
        "activities": [
            "Hoi An Ancient Town",
            "Golden Bridge (Ba Na Hills)",
            "Halong Bay Cruise"
        ]
    },
    {
        "id": "684c0462df1797b721c5089e",
        "name": "Bali Bliss: Beaches, Temples & Jungle Magic",
        "country": "Indonesia",
        "image": "https://i.postimg.cc/G2d4y9Wk/Bali.png",
        "price": 54999,
        "originalPrice": 69999,
        "duration": 6,
        "nights": 5,
        "rating": 4.8,
        "ratingCount": "146",
        "activities": [
            "Ubud Forest",
            "Tegallalang Rice Terrace",
            "Beach Clubs",
            "Swing Over Jungle"
        ]
    },
    {
        "id": "684c047ddf1797b721c5089f",
        "name": "Thailand Trails: Islands, Temples & Nightlife",
        "country": "Thailand",
        "image": "https://i.postimg.cc/YScGtd8D/Thailand.png",
        "price": 47999,
        "originalPrice": 59999,
        "duration": 5,
        "nights": 6,
        "rating": 4.7,
        "ratingCount": "128",
        "activities": [
            "Phuket",
            "Maya Bay",
            "Big Buddha",
            "Island Snorkeling",
            "Bangla Road"
        ]
    },
    {
        "id": "684c048cdf1797b721c508a0",
        "name": "Dubai Luxe Escape: Dunes, Skyscrapers & Malls",
        "country": "UAE",
        "image": "https://i.postimg.cc/YCLLc5Nm/Dubai.png",
        "price": 58999,
        "originalPrice": 73999,
        "duration": 5,
        "nights": 4,
        "rating": 4.8,
        "ratingCount": "174",
        "activities": [
            "Desert Safari",
            "Burj Khalifa",
            "Dubai Mall",
            "Dhow Cruise"
        ]
    },
    {
        "id": "684c04a1df1797b721c508a1",
        "name": "Sri Lanka Secrets: Scenic Rail & Coastal Trails",
        "country": "Sri Lanka",
        "image": "https://i.postimg.cc/J4nBxDGx/Sri-Lanka.png",
        "price": 44999,
        "originalPrice": 59999,
        "duration": 6,
        "nights": 5,
        "rating": 4.6,
        "ratingCount": "110",
        "activities": [
            "Colombo",
            "Nuwara Eliya Train",
            "Galle Fort",
            "Beaches"
        ]
    },
    {
        "id": "684c04b9df1797b721c508a2",
        "name": "Singapore & Malaysia: Dual Delight Escape",
        "country": "Singapore & Malaysia",
        "image": "https://i.postimg.cc/SNvYvS9h/Singapore-Malaysia.png",
        "price": 58999,
        "originalPrice": 74999,
        "duration": 6,
        "nights": 5,
        "rating": 4.7,
        "ratingCount": "124",
        "activities": [
            "Gardens by the Bay",
            "Sentosa Island",
            "Petronas Towers",
            "Batu Caves"
        ]
    },
    {
        "id": "684c04cadf1797b721c508a3",
        "name": "Japan Essence: Tradition Meets Neon",
        "country": "Japan",
        "image": "https://i.postimg.cc/Vs4CXBL5/Japan.png",
        "price": 89999,
        "originalPrice": 109999,
        "duration": 7,
        "nights": 6,
        "rating": 4.8,
        "ratingCount": "91",
        "activities": [
            "Kyoto Temples",
            "Tokyo Skytree",
            "Cherry Blossoms",
            "Bullet Train"
        ]
    },
    {
        "id": "684c04dbdf1797b721c508a4",
        "name": "Romantic Europe: Castles, Caf\u00e9s & Countryside",
        "country": "Europe",
        "image": "https://i.postimg.cc/Vv7011HX/Europe.png",
        "price": 99999,
        "originalPrice": 129999,
        "duration": 8,
        "nights": 7,
        "rating": 4.9,
        "ratingCount": "168",
        "activities": [
            "Paris",
            "Swiss Alps",
            "Amsterdam Canal Tour",
            "Florence"
        ]
    },
    {
        "id": "684c04ecdf1797b721c508a5",
        "name": "Goa Vibes: Beaches, Shacks & Parties",
        "country": "India",
        "image": "https://i.postimg.cc/fLf02Yc2/Goa.png",
        "price": 19999,
        "originalPrice": 27999,
        "duration": 4,
        "nights": 3,
        "rating": 4.6,
        "ratingCount": "98",
        "activities": [
            "Baga Beach",
            "Dudhsagar Falls",
            "Fort Aguada",
            "Beach Parties"
        ]
    },
    {
        "id": "684c04fddf1797b721c508a6",
        "name": "Masai Mara Magic: Safari & Sunsets",
        "country": "Kenya",
        "image": "https://i.postimg.cc/XqNBTXxV/Masaimara.png",
        "price": 94999,
        "originalPrice": 114999,
        "duration": 5,
        "nights": 4,
        "rating": 4.8,
        "ratingCount": "87",
        "activities": [
            "Big 5 Safari",
            "Savannah Drives",
            "Cultural Village Visit"
        ]
    },
    {
        "id": "684c050edf1797b721c508a7",
        "name": "Azerbaijan Explorer: Baku & Beyond",
        "country": "Azerbaijan",
        "image": "https://i.postimg.cc/cHSnBFnt/Azerbaijan.png",
        "price": 44999,
        "originalPrice": 59999,
        "duration": 5,
        "nights": 4,
        "rating": 4.6,
        "ratingCount": "104",
        "activities": [
            "Flame Towers",
            "Old City Baku",
            "Mud Volcanoes"
        ]
    },
    {
        "id": "684c051fdf1797b721c508a8",
        "name": "Kazakhstan Adventure: Canyons & Cities",
        "country": "Kazakhstan",
        "image": "https://i.postimg.cc/YCTghr23/Kazakhstan.png",
        "price": 55999,
        "originalPrice": 69999,
        "duration": 6,
        "nights": 5,
        "rating": 4.7,
        "ratingCount": "92",
        "activities": [
            "Charyn Canyon",
            "Almaty City Tour",
            "Kok-Tobe Hill"
        ]
    },
    {
        "id": "684c052edf1797b721c508a9",
        "name": "Seychelles Dream Escape: Sand & Serenity",
        "country": "Seychelles",
        "image": "https://i.postimg.cc/1z6FFkfZ/Seychelles.png",
        "price": 79999,
        "originalPrice": 99999,
        "duration": 5,
        "nights": 4,
        "rating": 4.8,
        "ratingCount": "103",
        "activities": [
            "Island Hopping",
            "Snorkeling",
            "Creole Dining",
            "White Sand Beaches"
        ]
    },
    {
        "id": "684c053edf1797b721c508aa",
        "name": "Georgia Wonders: Mountains, Wine & Culture",
        "country": "Georgia",
        "image": "https://i.postimg.cc/SNTcbLwH/Georgia.png",
        "price": 49999,
        "originalPrice": 64999,
        "duration": 6,
        "nights": 5,
        "rating": 4.7,
        "ratingCount": "111",
        "activities": [
            "Tbilisi",
            "Kazbegi Mountains",
            "Wine Tasting",
            "Old Town Walks"
        ]
    },
    {
        "id": "684c054ddf1797b721c508ab",
        "name": "Laos & Cambodia Heritage Unforgettable Trail",
        "country": "Laos & Cambodia",
        "image": "https://i.postimg.cc/4xYVf7Gy/Laos-Cambodia.png",
        "price": 59999,
        "originalPrice": 74999,
        "duration": 7,
        "nights": 6,
        "rating": 4.6,
        "ratingCount": "88",
        "activities": [
            "Angkor Wat",
            "Luang Prabang",
            "Mekong River Cruise"
        ]
    },
    {
        "id": "684c055fdf1797b721c508ac",
        "name": "Bhutan Serenity Escape: Monasteries & Mountains",
        "country": "Bhutan",
        "image": "https://i.postimg.cc/kXXWHYhx/Bhutan.png",
        "price": 47999,
        "originalPrice": 59999,
        "duration": 6,
        "nights": 5,
        "rating": 4.7,
        "ratingCount": "95",
        "activities": [
            "Paro",
            "Thimphu",
            "Tiger\u2019s Nest Hike",
            "Cultural Performances"
        ]
    }
];

export default allPackages;
