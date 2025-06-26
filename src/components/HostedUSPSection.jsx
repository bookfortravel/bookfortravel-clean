import React from 'react';

const uspItems = [
  {
    heading: 'Explore the Unexplored Places',
    subtext:
      'Venture off the beaten path with our expert-led hosted tours. Discover lesser-known trails, untouched scenic beauty, and cultural wonders that aren’t found in typical guidebooks. It’s travel redefined and truly immersive from the very first step.',
    image: 'https://i.postimg.cc/Kvpkxrjg/pic-1-explore-the-unexplored-places.jpg',
  },
  {
    heading: 'Meet Local People',
    subtext:
      'Connect on a deeper level with the heart of a place — its people. Experience authentic hospitality, local stories, and shared traditions that bring meaning to your journey and create cultural bonds that go far beyond selfies.',
    image: 'https://i.postimg.cc/xjxTzj2w/pic-2-meet-local-people.jpg',
  },
  {
    heading: 'Travel with a Diversified Group',
    subtext:
      'Enjoy the richness of community while traveling with curious explorers from across the globe. Whether trekking, relaxing, or dining — find laughter, learning, and friendships that make your group travel truly unforgettable.',
    image: 'https://i.postimg.cc/3J070g9G/pic-3-travel-with-a-diverse-group.jpg',
  },
  {
    heading: '24-Hour Local Host',
    subtext:
      'With a dedicated local host by your side 24/7, gain personalized insights, explore hidden corners, and enjoy seamless support throughout your trip. It’s like traveling with a best friend who knows the place inside out.',
    image: 'https://i.postimg.cc/t4hj2pKC/pic-4-24-hour-local-host.jpg',
  },
  {
    heading: 'Experiential Itineraries, Not Generic Tours',
    subtext:
      'Break free from cookie-cutter travel plans. Our curated itineraries include farm stays, cultural immersions, guided trails, and surprise local experiences that help you feel the destination — not just see it.',
    image: 'https://i.postimg.cc/MG58JtZC/pic-5-experiential-itineraries-not-generic-tours.jpg',
  },
  {
    heading: 'Authentic Activities',
    subtext:
      'Cook with locals, walk through remote villages, kayak across secret lagoons, or join native festivals. These moments make your journey meaningful, immersive, and deeply memorable — something guidebooks can never offer.',
    image: 'https://i.postimg.cc/NfRsP6Tc/pic-6-Authentic-Activities.jpg',
  },
];

const HostedUSPSection = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Why Choose <span className="text-black">BookForTravel’s Hosted Group Tours?</span>
      </h2>
      <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12">
        Discover what makes our hosted group experiences truly unforgettable — from real cultural connections to 24-hour local guidance.
      </p>

      <div className="flex flex-col gap-16">
        {uspItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } gap-y-8 md:gap-x-14`}
          >
            <div className="w-full md:w-[50%]">
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-[400px] object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="w-full md:w-[50%] text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-3">{item.heading}</h3>
              <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostedUSPSection;
