import React from 'react';

const DriverDashboardPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-8 px-4 flex flex-col items-center">
      {/* Dark theme for Driver Dashboard helps reduce eye strain on the road */}
      <h1 className="font-display font-bold text-2xl mb-8">Trang chủ Tài xế</h1>
      
      {/* Massive Status Toggle */}
      <div className="w-64 h-64 bg-surface-lowest text-gray-900 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform mb-12">
        <div className="w-24 h-24 bg-primary text-white flex items-center justify-center rounded-full text-4xl mb-4 shadow-lg shadow-primary/30">
          ✓
        </div>
        <h2 className="font-display font-bold text-2xl">Đang rảnh</h2>
        <p className="font-sans text-on-surface-variant mt-1">Chạm để Nghỉ ngơi</p>
      </div>
      
      {/* Stats row */}
      <div className="w-full max-w-sm grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-6 rounded-3xl">
           <h3 className="font-sans text-gray-400 text-sm mb-1">Thu nhập Hôm nay</h3>
           <div className="font-display font-bold text-2xl text-[#6c9fff]">350.000đ</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-3xl">
           <h3 className="font-sans text-gray-400 text-sm mb-1">Cuốc xe</h3>
           <div className="font-display font-bold text-2xl">12</div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboardPage;
