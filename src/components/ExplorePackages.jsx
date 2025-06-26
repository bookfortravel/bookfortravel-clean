import React, { useState } from 'react';

const themes = ['All', 'Beaches', 'Mountains', 'Nature & Culture', 'City Escape'];
const budgets = ['All', 'Under ₹50K', '₹50K–₹80K', '₹80K+'];

const ExplorePackages = ({ packages }) => {
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');

  const filterPackages = () => {
    return packages.filter((pkg) => {
      const themeMatch = selectedTheme === 'All' || pkg.theme === selectedTheme;

      const budget = pkg.price;
      let budgetMatch = true;
      if (selectedBudget === 'Under ₹50K') budgetMatch = budget < 50000;
      else if (selectedBudget === '₹50K–₹80K') budgetMatch = budget >= 50000 && budget <= 80000;
      else if (selectedBudget === '₹80K+') budgetMatch = budget > 80000;

      return themeMatch && budgetMatch;
    });
  };

  const filteredPackages = filterPackages();

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">🧳 Explore Packages</h2>

      {/* ✅ DESKTOP FILTER STRIP */}
      <div className="hidden md:block text-center mb-8">
        <p className="text-xl font-semibold mb-4">Let us help you find the perfect trip</p>

        {/* Theme Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-4 py-2 rounded-full shadow-md transition ${
                selectedTheme === theme
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-blue-100 text-gray-700'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>

        {/* Budget Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {budgets.map((budget) => (
            <button
              key={budget}
              onClick={() => setSelectedBudget(budget)}
              className={`px-4 py-2 rounded-full shadow-md transition ${
                selectedBudget === budget
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 hover:bg-green-100 text-gray-700'
              }`}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ MOBILE FILTERS */}
      <div className="md:hidden flex flex-col gap-4 mb-6">
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option disabled>Select Theme</option>
          {themes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <select
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option disabled>Select Budget</option>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* ✅ DESKTOP PACKAGE GRID */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="border rounded-xl shadow hover:shadow-xl transition bg-white">
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-xl">{pkg.title}</h3>
              <p className="text-sm text-gray-600">{pkg.subtitle}</p>
              <p className="font-semibold text-green-600">{pkg.priceFormatted}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MOBILE SCROLLING PACKAGE CARDS */}
      <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory px-2 -mx-2 pb-4">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="min-w-[250px] flex-shrink-0 bg-white border rounded-xl shadow snap-start"
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover rounded-t-xl" />
            <div className="p-3 space-y-1">
              <h3 className="font-bold text-base">{pkg.title}</h3>
              <p className="text-xs text-gray-600">{pkg.subtitle}</p>
              <p className="font-semibold text-green-600 text-sm">{pkg.priceFormatted}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePackages;

