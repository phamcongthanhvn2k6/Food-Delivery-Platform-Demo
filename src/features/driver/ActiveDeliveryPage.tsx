import React from 'react';

const ActiveDeliveryPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white relative overflow-hidden">
      {/* Map placeholder in background */}
      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center opacity-50">
        <span className="font-display font-bold tracking-widest text-gray-700">MAP VIEW</span>
      </div>

      {/* Floating Info Card at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="bg-surface-lowest text-gray-900 rounded-[2.5rem] p-6 shadow-2xl">
           <div className="flex justify-between items-center mb-6">
             <div className="px-4 py-1 bg-primary-container text-primary-dim rounded-full font-sans font-bold text-sm">
               Đang lấy hàng
             </div>
             <div className="font-sans font-bold text-on-surface-variant">Làm xong trong 5:00</div>
           </div>
           
           <h2 className="font-display font-bold text-2xl mb-1">Aura Pizza</h2>
           <p className="font-sans text-gray-600 mb-6">123 Nam Kỳ Khởi Nghĩa, Q3</p>
           
           <div className="flex gap-4">
             <button className="w-16 h-16 bg-surface-low rounded-2xl flex items-center justify-center text-2xl hover:bg-surface-dim transition-colors">
               💬
             </button>
             <button className="flex-1 bg-primary text-white font-sans font-bold text-xl rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dim transition-colors flex items-center justify-center">
               Đã đến nơi
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveDeliveryPage;
