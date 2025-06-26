import React from 'react';
import visionImage from '../assets/about/Vision.jpg';
import missionImage from '../assets/about/Mission.jpg';
import aboutImage from '../assets/about/about.jpg';

const infoItems = [
  {
    heading: 'Our Vision',
    subtext:
      'To become India’s largest Travel Expert Marketplace and the go-to brand for holiday planning with local insights, safety, and ease. At bookfortravel, we aim to redefine travel by making it expert-led, immersive, and hassle-free — enabling every traveler to explore both Indian and international destinations with confidence.',
    image: visionImage,
  },
  {
    heading: 'Our Mission',
    subtext:
      'Our mission is simple — to empower every traveler across the globe to explore any destination to its fullest. Through curated experiences, real-time expert assistance, and locally rooted journeys, bookfortravel ensures that no matter where you go, you go with clarity, excitement, and confidence.',
    image: missionImage,
  },
  {
    heading: 'About bookfortravel.com',
    subtext:
      'bookfortravel.com is a dynamic Travel Expert Marketplace designed to bridge the gap between travelers and verified travel partners. We bring everything under one roof — expert-led tours, immersive itineraries, personalized consultations, and authentic local activities. Whether you’re planning a holiday to Thailand, Himachal, or Turkey, our platform helps you experience it the way it’s meant to be.',
    image: aboutImage,
  },
];

const AboutInfoSection = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-16">
      <div className="flex flex-col gap-16">
        {infoItems.map((item, index) => (
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

export default AboutInfoSection;

