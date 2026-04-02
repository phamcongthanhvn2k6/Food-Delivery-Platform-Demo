import React from 'react';

const RestaurantProfilePage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Header / Cover */}
      <div className="h-64 bg-primary-container relative">
        <div className="absolute -bottom-12 left-8 w-24 h-24 bg-surface-lowest rounded-xl shadow-lg border-4 border-surface-lowest"></div>
      </div>
      
      {/* Main Content */}
      <div className="pt-16 px-8 max-w-7xl mx-auto">
        <h1 className="font-display font-bold text-4xl text-gray-900 mb-2">Aura Pizza</h1>
        <p className="font-sans text-on-surface-variant mb-8">Italian • Pizza • 4.8★</p>
        
        {/* Menu Grid */}
        <h2 className="font-display font-semibold text-2xl mb-6">Phổ biến nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Menu Item placeholder */}
          <div className="bg-surface-lowest flex rounded-2xl shadow-sm hover:shadow-md transition-shadow p-3">
            <div className="flex-1 pr-4">
              <h3 className="font-sans font-semibold text-lg text-gray-800">Pizza Hải Sản</h3>
              <p className="font-sans text-on-surface-variant text-sm line-clamp-2 mt-1">Sốt cà chua, phô mai mozzarella, tôm, mực, nghêu.</p>
              <div className="mt-3 font-semibold text-primary">150.000đ</div>
            </div>
            <div className="w-28 h-28 bg-surface-low rounded-xl flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProfilePage;
