
interface ChatHeaderProps {
  onNext: () => void;
  onReport: () => void;
  connectionTime: string;
  coins: number;
}

export default function ChatHeader({ onNext, onReport, connectionTime, coins }: ChatHeaderProps) {
  return (
    <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
        <div>
          <div className="font-medium">Anonymous User</div>
          <div className="text-xs text-gray-400">Connected • {connectionTime}</div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded-full">
          <i className="ri-coin-line text-yellow-400 text-sm"></i>
          <span className="text-xs font-medium">{coins}</span>
        </div>
        
        <button
          onClick={onReport}
          className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center hover:bg-red-500/30 transition-colors"
        >
          <i className="ri-flag-line text-red-400 text-sm"></i>
        </button>
        
        <button
          onClick={onNext}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
