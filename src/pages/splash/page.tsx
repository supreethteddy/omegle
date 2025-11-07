
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <i className="ri-video-chat-line text-4xl text-purple-600"></i>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
          RandomConnect
        </h1>
        
        <p className="text-xl text-white/90 mb-8">
          Chat. Match. Play. Earn.
        </p>
        
        <div className="flex justify-center space-x-4 text-white/80">
          <div className="flex items-center space-x-2">
            <i className="ri-video-line text-lg"></i>
            <span className="text-sm">Video</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-mic-line text-lg"></i>
            <span className="text-sm">Voice</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-chat-3-line text-lg"></i>
            <span className="text-sm">Text</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 flex space-x-1">
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}
