
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CoinStore() {
  const navigate = useNavigate();
  const [coins, setCoins] = useState(250);

  const coinPackages = [
    { id: 1, coins: 100, price: 0.99, bonus: 0, popular: false },
    { id: 2, coins: 500, price: 4.99, bonus: 50, popular: true },
    { id: 3, coins: 1000, price: 9.99, bonus: 150, popular: false },
    { id: 4, coins: 2500, price: 19.99, bonus: 500, popular: false },
    { id: 5, coins: 5000, price: 39.99, bonus: 1500, popular: false }
  ];

  const premiumFeatures = [
    { name: 'Premium Filters', price: 2.99, icon: 'ri-filter-line' },
    { name: 'No Ads', price: 4.99, icon: 'ri-close-circle-line' },
    { name: 'Priority Matching', price: 1.99, icon: 'ri-vip-crown-line' }
  ];

  const handlePurchase = (packageItem: any) => {
    // Simulate purchase
    setCoins(prev => prev + packageItem.coins + packageItem.bonus);
    alert(`Purchased ${packageItem.coins + packageItem.bonus} coins!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center">
            <i className="ri-arrow-left-line text-xl text-gray-600"></i>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Coin Store</h1>
          <div className="flex items-center space-x-1">
            <i className="ri-coin-line text-yellow-500"></i>
            <span className="font-medium text-gray-900">{coins}</span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Current Balance */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white mb-6">
          <div className="text-center">
            <i className="ri-coin-line text-4xl mb-2"></i>
            <h2 className="text-2xl font-bold mb-1">{coins} Coins</h2>
            <p className="text-white/80">Your current balance</p>
          </div>
        </div>

        {/* Coin Packages */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Buy Coins</h3>
          <div className="space-y-3">
            {coinPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl p-4 shadow-sm border-2 ${
                  pkg.popular ? 'border-purple-500' : 'border-transparent'
                } relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <i className="ri-coin-line text-2xl text-yellow-500"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {pkg.coins} Coins
                        {pkg.bonus > 0 && (
                          <span className="text-green-600 text-sm ml-1">+{pkg.bonus} Bonus</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        Total: {pkg.coins + pkg.bonus} coins
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePurchase(pkg)}
                    className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-purple-700 transition-colors"
                  >
                    ${pkg.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Features */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Premium Features</h3>
          <div className="space-y-3">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className={`${feature.icon} text-purple-600`}></i>
                    </div>
                    <span className="font-medium text-gray-900">{feature.name}</span>
                  </div>
                  <button className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-xl text-sm hover:bg-purple-700 transition-colors">
                    ${feature.price}/mo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earn Free Coins */}
        <div className="bg-green-50 rounded-2xl p-4 border-2 border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Earn Free Coins</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-green-700">Watch Ad</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                +10 Coins
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-700">Daily Login</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                +5 Coins
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-700">Complete Chat</span>
              <span className="text-green-600 text-sm">+5 Coins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
