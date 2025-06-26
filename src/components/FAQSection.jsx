// 📁 File: FAQSection.jsx

import React, { useState } from 'react';

const faqs = [
  {
    question: "What is a Hosted Group Tour?",
    answer: "A Hosted Group Tour includes a local host or expert who guides your group through handpicked experiences, making your trip safer, smoother, and more memorable."
  },
  {
    question: "Can I customize my travel package?",
    answer: "Absolutely. All our packages can be customized by travel experts to suit your dates, budget, and preferences."
  },
  {
    question: "What is the advantage of booking through BookForTravel?",
    answer: "BookForTravel connects you with verified travel experts who offer curated itineraries, unbeatable local experiences, and personalized support — all at the best prices."
  },
  {
    question: "Are these tours suitable for solo travellers or couples?",
    answer: "Yes! Hosted tours are ideal for solo travellers, couples, and groups alike. You'll meet like-minded people and share memorable experiences together."
  },
  {
    question: "Do I need a visa for international packages?",
    answer: "Visa requirements vary by country. Our experts guide you on visa processes, and many destinations offer Visa on Arrival or E-Visa for Indian passport holders."
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-xl text-gray-500">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600 text-sm md:text-base">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

