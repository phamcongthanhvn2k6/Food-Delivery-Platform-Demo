import React from 'react';

const IncomingOrderPopup = () => {
  // Ideally this is rendered via a Portal as a Modal overlay
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
      
      <div className="relative w-full max-w-sm bg-surface-lowest p-8 rounded-[2.5rem] shadow-2xl animate-bounce-slight border-4 border-primary">
        <div className="animate-pulse bg-[#fb5151] text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg">
          CƠ HỘI MỚI (15s)
        </div>
        
        <h2 className="font-display font-bold text-2xl text-center mb-6 mt-4">Có đơn hàng mới!</h2>
        
        <div className="flex justify-between items-center font-sans border-b-2 border-surface-low border-dashed pb-4 mb-4">
          <span className="text-gray-500 font-semibold">Thu nhập dự kiến</span>
          <span className="text-2xl font-bold text-primary">35.000đ</span>
        </div>
        
        <div className="space-y-4 mb-8">
           <div className="flex items-start gap-4">
             <div className="w-3 h-3 bg-surface-low rounded-full mt-1.5 flex-shrink-0"></div>
             <div>
               <h4 className="font-sans font-bold text-gray-800">Aura Pizza</h4>
               <p className="font-sans text-sm text-gray-500">Cách bạn 1.2km</p>
             </div>
           </div>
           <div className="border-l-2 border-dashed border-surface-low ml-1.5 h-6"></div>
           <div className="flex items-start gap-4">
             <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
             <div>
               <h4 className="font-sans font-bold text-gray-800">Khách Hàng</h4>
               <p className="font-sans text-sm text-gray-500">Cách quán 3.5km</p>
             </div>
           </div>
        </div>
        
        <div className="flex gap-4">
          <button className="flex-1 py-4 rounded-2xl bg-surface-low text-gray-800 font-sans font-bold hover:bg-surface-dim transition-colors">Bỏ qua</button>
          <button className="flex-1 py-4 rounded-2xl bg-primary text-white font-sans font-bold shadow-lg shadow-primary/30 hover:bg-primary-dim transition-colors">Nhận cuốc</button>
        </div>
      </div>
    </div>
  );
};

export default IncomingOrderPopup;
