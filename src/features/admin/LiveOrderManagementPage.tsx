import React from 'react';

const LiveOrderManagementPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <h1 className="font-display font-bold text-3xl mb-8 w-full text-left">Giám sát Đơn hàng (Live)</h1>
      
      {/* Map visualization placeholder */}
      <div className="w-full h-[600px] bg-surface-lowest rounded-3xl shadow-sm relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[#e0e3e4] opacity-50"></div>
        <div className="text-center z-10">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="font-display font-bold text-2xl text-gray-600">Bản đồ Giám sát Thời gian thực</h2>
          <p className="font-sans text-gray-500">Hiển thị đường đi của 2,451 đơn hàng đang di chuyển.</p>
        </div>

        {/* Floating status */}
        <div className="absolute top-6 left-6 bg-surface-lowest p-6 rounded-2xl shadow-lg font-sans">
          <div className="font-bold text-lg mb-4">Real-time Metrics</div>
          <div className="space-y-3">
             <div className="flex justify-between gap-8">
               <span className="text-gray-600">Đang giao</span>
               <span className="font-bold text-primary">2,451</span>
             </div>
             <div className="flex justify-between gap-8">
               <span className="text-gray-600">Giao trễ</span>
               <span className="font-bold text-[#fb5151]">12</span>
             </div>
             <div className="flex justify-between gap-8">
               <span className="text-gray-600">Chưa có xế</span>
               <span className="font-bold text-secondary">42</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOrderManagementPage;
