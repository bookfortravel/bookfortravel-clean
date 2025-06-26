import React, { useState, useEffect } from 'react';
import enquiryIcon from '../assets/Enquiry.png';
import registerIcon from '../assets/Registerasexpert.png';
import loginIcon from '../assets/Login.png';
import hostedIcon from '../assets/Hostedtours.png';
import chatbotLogo from '../assets/Chatbotlogo.png';
 


const MobileBottomNav = ({ onEnquiry, onRegister, onHostedTours, onChatbot }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = (index, callback) => {
    setActiveIndex(index);
    callback();
  };

  const bounceEffect = (index) => activeIndex === index ? 'animate-bounce-press glow' : '';
  const underlineClass = "absolute -bottom-1 h-[2px] w-6 bg-blue-500 rounded transition-all duration-300";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

const iconClass = "h-11 w-11 mb-0.5 transition-transform duration-150";



  return (
   <div
  className={`fixed bottom-0 left-0 right-0 h-[64px] bg-white z-50 shadow-md flex justify-around items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
  style={{ willChange: 'transform' }}
>




      <div className="flex justify-around w-full">
        {[
          { icon: enquiryIcon, label: 'Enquiry', callback: onEnquiry },
          { icon: hostedIcon, label: 'Hosted Tours', callback: onHostedTours },
          { icon: registerIcon, label: 'Expert Register', callback: onRegister },
          { icon: chatbotLogo, label: 'Plan my Trip', callback: onChatbot }
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-sm font-medium relative"
            onClick={() => handleClick(i, item.callback)}
          >
<img src={item.icon} alt={item.label} className={`${iconClass} ${bounceEffect(i)}`} />

            {item.label !== '' && (
  <span className={`${activeIndex === i ? 'text-blue-600 font-semibold' : ''}`}>
    {item.label}
  </span>
)}

            {activeIndex === i && <div className={underlineClass}></div>}
          </div>
        ))}
      </div>
{/* ✅ Mobile WhatsApp Button */}




    </div>


  );
};

export default MobileBottomNav;



