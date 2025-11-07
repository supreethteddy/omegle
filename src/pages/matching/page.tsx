
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Matching() {
  const navigate = useNavigate();
  const [isMatching, setIsMatching] = useState(true);
  const [matchProgress, setMatchProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatchProgress(prev => {
        if (prev >= 100) {
          setIsMatching(false);
          setTimeout(() => {
            navigate('/chat');
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleCancel = () => {
    navigate('/filters');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {isMatching ? (
          <>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto relative">
                <div className="w-32 h-32 border-4 border-white/30 rounded-full"></div>
                <div 
                  className="absolute top-0 left-0 w-32 h-32 border-4 border-white border-t-transparent rounded-full animate-spin"
                  style={{ animationDuration: '1s' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="ri-search-line text-4xl text-white"></i>
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">
              Finding Your Match
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              Connecting you with someone awesome...
            </p>

            <div className="w-full max-w-xs mx-auto mb-8">
              <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-300 ease-out"
                  style={{ width: `${matchProgress}%` }}
                ></div>
              </div>
              <div className="text-center mt-2">
                <span className="text-white/80 text-sm">{matchProgress}% Complete</span>
              </div>
            </div>

            <div className="space-y-3 text-white/80 text-sm mb-8">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Scanning for active users...</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span>Applying your filters...</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span>Finding the perfect match...</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
                <i className="ri-check-line text-6xl text-green-500"></i>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">
              Match Found!
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              Connecting you now...
            </p>

            <div className="flex justify-center space-x-1">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </>
        )}

        <button
          onClick={handleCancel}
          className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
        >
          Cancel
        </button>
      </div>

      {/* Stats */}
      <div className="absolute bottom-8 left-4 right-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">1.2K</div>
              <div className="text-xs text-white/70">Online Now</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">45s</div>
              <div className="text-xs text-white/70">Avg Wait</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-white/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
