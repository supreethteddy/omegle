
interface Gift {
  id: number;
  name: string;
  icon: string;
  cost: number;
  rarity: 'common' | 'rare' | 'epic';
}

interface GiftModalProps {
  coins: number;
  onSendGift: (gift: Gift) => void;
  onClose: () => void;
}

export default function GiftModal({ coins, onSendGift, onClose }: GiftModalProps) {
  const gifts: Gift[] = [
    { id: 1, name: 'Rose', icon: '🌹', cost: 10, rarity: 'common' },
    { id: 2, name: 'Heart', icon: '❤️', cost: 15, rarity: 'common' },
    { id: 3, name: 'Coffee', icon: '☕', cost: 20, rarity: 'common' },
    { id: 4, name: 'Pizza', icon: '🍕', cost: 25, rarity: 'rare' },
    { id: 5, name: 'Diamond', icon: '💎', cost: 50, rarity: 'epic' },
    { id: 6, name: 'Crown', icon: '👑', cost: 100, rarity: 'epic' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50">
      <div className="w-full bg-white rounded-t-3xl p-6 max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Send a Gift</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <i className="ri-close-line text-gray-600"></i>
          </button>
        </div>

        <div className="flex items-center justify-between mb-4 p-3 bg-yellow-50 rounded-xl">
          <div className="flex items-center space-x-2">
            <i className="ri-coin-line text-yellow-500"></i>
            <span className="font-medium text-gray-900">Your Coins</span>
          </div>
          <span className="text-xl font-bold text-yellow-600">{coins}</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {gifts.map((gift) => (
            <button
              key={gift.id}
              onClick={() => onSendGift(gift)}
              disabled={coins < gift.cost}
              className={`p-4 rounded-xl border-2 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${getRarityColor(gift.rarity)}`}
            >
              <div className="text-3xl mb-2">{gift.icon}</div>
              <div className="text-sm font-medium text-gray-900 mb-1">{gift.name}</div>
              <div className="flex items-center justify-center space-x-1">
                <i className="ri-coin-line text-yellow-500 text-xs"></i>
                <span className="text-xs font-medium text-gray-600">{gift.cost}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button className="text-purple-600 font-medium text-sm hover:text-purple-700">
            Need more coins? Buy now →
          </button>
        </div>
      </div>
    </div>
  );
}
