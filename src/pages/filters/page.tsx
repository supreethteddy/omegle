
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Filters() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    gender: '',
    country: '',
    interests: [] as string[],
    ageRange: [18, 35]
  });

  const genders = ['Any', 'Male', 'Female', 'Non-binary'];
  const countries = ['Any', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Brazil'];
  const interests = ['Gaming', 'Music', 'Movies', 'Sports', 'Travel', 'Food', 'Art', 'Technology', 'Books', 'Fitness'];

  const handleInterestToggle = (interest: string) => {
    setFilters(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleStartMatching = () => {
    navigate('/matching');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate('/mode-select')} className="w-8 h-8 flex items-center justify-center">
            <i className="ri-arrow-left-line text-xl text-gray-600"></i>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Filters</h1>
          <button className="text-purple-600 font-medium text-sm">Reset</button>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-6">
        {/* Gender Filter */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Gender Preference</h3>
          <div className="grid grid-cols-2 gap-2">
            {genders.map((gender) => (
              <button
                key={gender}
                onClick={() => setFilters(prev => ({ ...prev, gender }))}
                className={`py-3 px-4 rounded-xl border-2 transition-colors ${
                  filters.gender === gender
                    ? 'border-purple-500 bg-purple-50 text-purple-600'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        {/* Country Filter */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Country</h3>
          <div className="relative">
            <select
              value={filters.country}
              onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))}
              className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none appearance-none bg-white"
            >
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* Age Range */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Age Range</h3>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">18</span>
            <div className="flex-1 relative">
              <input
                type="range"
                min="18"
                max="65"
                value={filters.ageRange[1]}
                onChange={(e) => setFilters(prev => ({ ...prev, ageRange: [18, parseInt(e.target.value)] }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${((filters.ageRange[1] - 18) / (65 - 18)) * 100}%, #E5E7EB ${((filters.ageRange[1] - 18) / (65 - 18)) * 100}%, #E5E7EB 100%)`
                }}
              />
            </div>
            <span className="text-sm text-gray-600">65</span>
          </div>
          <div className="text-center mt-2">
            <span className="text-purple-600 font-medium">18 - {filters.ageRange[1]} years</span>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`py-2 px-4 rounded-full border-2 transition-colors text-sm ${
                  filters.interests.includes(interest)
                    ? 'border-purple-500 bg-purple-50 text-purple-600'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Filters */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Premium Filters</h3>
              <p className="text-sm text-white/80">Location, verified users & more</p>
            </div>
            <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-full text-sm">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleStartMatching}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          Start Matching
        </button>
      </div>
    </div>
  );
}
