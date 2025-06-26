import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [tripType, setTripType] = useState('');
  const [destination, setDestination] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep(0);
      setTripType('');
      setDestination('');
      setResponse('');
    }
  };

  const handleTripType = (type) => {
    setTripType(type);
    setStep(1);
  };

  const handleDestinationSubmit = async () => {
    if (!destination) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/itinerary-chat', {
  tripType,
  destination
});
      setResponse(res.data.itinerary);
      setStep(2);
    } catch (err) {
      setResponse("Sorry, we couldn't generate an itinerary right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-[#00bfa5] text-white p-3 rounded-full shadow-lg"
        onClick={toggleChat}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {isOpen && (
        <div className="w-80 bg-white shadow-2xl rounded-lg p-4 mt-2 border border-gray-300">
          {!response && (
            <>
              <h3 className="text-lg font-semibold mb-2">Plan your trip with us!</h3>
              {step === 0 && (
                <>
                  <p className="mb-2">What type of trip are you planning?</p>
                  <div className="flex flex-wrap gap-2">
                    {['Romantic', 'Family', 'Honeymoon', 'Friends', 'Group', 'Solo'].map((type) => (
                      <button
                        key={type}
                        className="border border-[#00bfa5] text-[#00bfa5] px-3 py-1 rounded-full text-sm hover:bg-[#00bfa5] hover:text-white transition"
                        onClick={() => handleTripType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && (
                <div className="mt-4">
                  <p className="mb-2">Where do you want to go?</p>
                  <input
                    type="text"
                    placeholder="e.g. Bali, Vietnam"
                    className="w-full border px-3 py-2 rounded-md text-sm"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <button
                    className="bg-[#00bfa5] text-white w-full mt-2 px-4 py-2 rounded text-sm"
                    onClick={handleDestinationSubmit}
                    disabled={loading}
                  >
                    {loading ? "Generating..." : "Get Itinerary"}
                  </button>
                </div>
              )}
            </>
          )}

          {response && (
            <div className="overflow-y-auto max-h-96 whitespace-pre-wrap text-sm text-gray-800">
              {response}
              <button
                className="mt-4 w-full bg-[#6c63ff] text-white font-semibold py-2 px-4 rounded hover:bg-[#5a52d6] transition"
                onClick={() => setShowForm(true)}
              >
                📞 Contact Our Expert Now
              </button>
            </div>
          )}

          {/* Callback Form */}
          {showForm && (
            <div className="mt-4 text-sm">
              <p className="mb-2 font-semibold">Request a Callback:</p>
              <input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded mb-2" />
              <input type="text" placeholder="Phone Number" className="w-full border px-3 py-2 rounded mb-2" />
              <input type="text" placeholder="Email (optional)" className="w-full border px-3 py-2 rounded mb-2" />
              <button className="bg-[#00bfa5] text-white w-full px-4 py-2 rounded">Submit</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;

