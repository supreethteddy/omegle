
interface VideoContainerProps {
  isVideoEnabled: boolean;
  isAudioEnabled: boolean;
  onToggleVideo: () => void;
  onToggleAudio: () => void;
  onOpenGifts: () => void;
  onOpenGame: () => void;
}

export default function VideoContainer({
  isVideoEnabled,
  isAudioEnabled,
  onToggleVideo,
  onToggleAudio,
  onOpenGifts,
  onOpenGame
}: VideoContainerProps) {
  return (
    <div className="relative bg-gray-900 h-64">
      {/* Other User Video */}
      <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
        {isVideoEnabled ? (
          <img
            src="https://readdy.ai/api/search-image?query=Young%20person%20smiling%20in%20video%20call%2C%20friendly%20face%2C%20good%20lighting%2C%20webcam%20quality%2C%20realistic%20portrait%20photography%2C%20natural%20expression%2C%20casual%20clothing%2C%20modern%20background&width=375&height=256&seq=other-user-video&orientation=landscape"
            alt="Other user"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
            <i className="ri-user-line text-3xl text-white"></i>
          </div>
        )}

        {/* AI Moderation Overlay */}
        <div className="absolute top-2 left-2 bg-red-500/90 text-white px-2 py-1 rounded text-xs font-medium opacity-0 hover:opacity-100 transition-opacity">
          🤖 AI Monitoring
        </div>

        {/* Your Video (Picture-in-Picture) */}
        <div className="absolute bottom-4 right-4 w-20 h-28 bg-gray-700 rounded-lg overflow-hidden border-2 border-white/20">
          {isVideoEnabled ? (
            <img
              src="https://readdy.ai/api/search-image?query=Person%20in%20video%20call%2C%20mirror%20selfie%20view%2C%20webcam%20perspective%2C%20good%20lighting%2C%20friendly%20expression%2C%20casual%20setting%2C%20realistic%20portrait&width=80&height=112&seq=my-video-pip&orientation=portrait"
              alt="You"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <i className="ri-user-line text-white text-lg"></i>
            </div>
          )}
        </div>

        {/* Control Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
          <button
            onClick={onToggleVideo}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isVideoEnabled ? 'bg-white/20 text-white' : 'bg-red-500 text-white'
            }`}
          >
            <i className={`${isVideoEnabled ? 'ri-video-line' : 'ri-video-off-line'} text-lg`}></i>
          </button>
          
          <button
            onClick={onToggleAudio}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isAudioEnabled ? 'bg-white/20 text-white' : 'bg-red-500 text-white'
            }`}
          >
            <i className={`${isAudioEnabled ? 'ri-mic-line' : 'ri-mic-off-line'} text-lg`}></i>
          </button>
          
          <button
            onClick={onOpenGifts}
            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
          >
            <i className="ri-gift-line text-lg"></i>
          </button>
          
          <button
            onClick={onOpenGame}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
          >
            <i className="ri-gamepad-line text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
