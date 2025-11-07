
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostChat() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleAddFriend = () => {
    // Simulate adding friend
    alert('Friend request sent!');
  };

  const handleNextChat = () => {
    navigate('/matching');
  };

  const handleGoHome = () => {
    navigate('/mode-select');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-900">Chat Ended</h1>
          <button onClick={handleGoHome} className="text-purple-600 font-medium text-sm">
            Home
          </button>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Chat Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i className="ri-user-line text-2xl text-purple-600"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Anonymous User</h2>
            <p className="text-gray-600 mb-4">Chat duration: 5:42</p>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleAddFriend}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors"
              >
                <i className="ri-user-add-line"></i>
                <span>Add Friend</span>
              </button>
              <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-colors">
                <i className="ri-flag-line"></i>
                <span>Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">Rate this chat</h3>
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ⭐
              </button>
            ))}
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your experience (optional)"
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
            rows={3}
          />
        </div>

        {/* Rewards */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white mb-6">
          <div className="text-center">
            <i className="ri-coin-line text-3xl mb-2"></i>
            <h3 className="font-semibold mb-2">Chat Completed!</h3>
            <p className="text-sm text-white/80 mb-3">You earned 5 coins for this chat</p>
            <div className="bg-white/20 rounded-full px-4 py-2 inline-block">
              <span className="font-bold">+5 Coins</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleNextChat}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl shadow-lg"
          >
            Find Another Chat
          </button>
          <button
            onClick={handleGoHome}
            className="w-full bg-gray-200 text-gray-700 font-semibold py-4 rounded-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
