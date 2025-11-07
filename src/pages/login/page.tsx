
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/mode-select');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
            <i className="ri-video-chat-line text-2xl text-purple-600"></i>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
            Welcome Back!
          </h1>
          <p className="text-white/80">Connect with people worldwide</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="text"
                placeholder="Username or Email"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          <button
            onClick={handleQuickLogin}
            disabled={isLoading}
            className="w-full bg-white text-purple-600 font-semibold py-3 rounded-xl hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <span>Connecting...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>

          <div className="mt-4 text-center">
            <button className="text-white/80 text-sm hover:text-white">
              Forgot Password?
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleQuickLogin}
            className="bg-white/20 backdrop-blur-lg text-white font-semibold py-3 px-8 rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
          >
            Quick Start as Guest
          </button>
        </div>

        <div className="mt-6 text-center text-white/60 text-xs">
          <p>By continuing, you agree to our Terms & Privacy Policy</p>
          <p className="mt-1">🔞 Must be 18+ to use this service</p>
        </div>
      </div>
    </div>
  );
}
