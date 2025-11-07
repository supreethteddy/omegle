
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModeSelect() {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<string>('');

  const modes = [
    {
      id: 'video',
      title: 'Video Chat',
      description: 'Face-to-face conversations',
      icon: 'ri-video-line',
      gradient: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      id: 'voice',
      title: 'Voice Chat',
      description: 'Audio-only conversations',
      icon: 'ri-mic-line',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'text',
      title: 'Text Chat',
      description: 'Message-based conversations',
      icon: 'ri-chat-3-line',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'mystery',
      title: 'Mystery Mode',
      description: 'Avatar + voice until reveal',
      icon: 'ri-question-line',
      gradient: 'from-purple-500 to-pink-600',
      new: true
    }
  ];

  const handleModeSelect = (modeId: string) => {
    setSelectedMode(modeId);
    setTimeout(() => {
      navigate('/filters');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate('/login')} className="w-8 h-8 flex items-center justify-center">
            <i className="ri-arrow-left-line text-xl text-gray-600"></i>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Choose Chat Mode</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-coin-line text-xl text-yellow-500"></i>
            <span className="text-sm font-medium text-gray-900 ml-1">250</span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="text-center mb-6">
          <p className="text-gray-600">Select your preferred chat experience</p>
        </div>

        <div className="space-y-4">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => handleModeSelect(mode.id)}
              className={`w-full p-6 rounded-2xl shadow-lg transition-all duration-300 transform ${
                selectedMode === mode.id ? 'scale-95' : 'hover:scale-105'
              }`}
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div className={`bg-gradient-to-r ${mode.gradient} rounded-2xl p-6 text-white relative overflow-hidden`}>
                {mode.popular && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                {mode.new && (
                  <div className="absolute top-2 right-2 bg-pink-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className={`${mode.icon} text-2xl`}></i>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold mb-1">{mode.title}</h3>
                    <p className="text-white/80 text-sm">{mode.description}</p>
                  </div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-arrow-right-line text-lg"></i>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <i className="ri-robot-line text-white text-lg"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">AI Companion</h4>
              <p className="text-sm text-gray-600">Chat with AI when no users available</p>
            </div>
            <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
