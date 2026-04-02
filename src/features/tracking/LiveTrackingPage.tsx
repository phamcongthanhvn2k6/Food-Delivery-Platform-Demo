import React from 'react';

const LiveTrackingPage = () => {
  return (
    <div className="flex bg-background h-screen overflow-hidden">
      {/* Sidebar Info - Glassmorphism */}
      <div className="w-full md:w-96 relative z-10 bg-surface-lowest/80 backdrop-blur-md shadow-2xl h-full p-8 flex flex-col">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary-container text-primary-dim font-sans font-semibold text-sm rounded-full mb-4">
            Đang giao hàng
          </span>
          <h1 className="font-display font-bold text-3xl">Đơn hàng #1928</h1>
          <p className="font-sans text-on-surface-variant mt-2">Dự kiến giao: 14:30 hôm nay</p>
        </div>

        {/* Timeline (no strong borders) */}
        <div className="flex-1 space-y-6">
          <div className="flex gap-4 opacity-50">
             <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
             <div>
               <h3 className="font-sans font-semibold">Nhà hàng đã nhận đơn</h3>
               <p className="text-sm font-sans">14:00</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="w-4 h-4 rounded-full bg-primary mt-1 animate-pulse"></div>
             <div>
               <h3 className="font-sans font-semibold text-primary">Tài xế đang lấy đồ ăn</h3>
               <p className="text-sm font-sans text-on-surface-variant">Tài xế Nguyễn Văn A đang tại Aura Pizza</p>
             </div>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-surface-low relative">
         <div className="absolute inset-0 flex items-center justify-center font-display text-gray-400">
           Bản đồ hiển thị tại đây
         </div>
      </div>
    </div>
  );
};

export default LiveTrackingPage;
