import React from 'react';

const InventoryControlPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display font-bold text-3xl">Quản lý Kho & Tạm ngưng Món</h1>
        <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dim text-white font-sans font-bold text-lg rounded-2xl shadow-xl shadow-primary/30">
          Lưu thay đổi
        </button>
      </div>
      
      <p className="font-sans text-gray-600 mb-8 max-w-2xl font-medium">Tắt tạm thời các món ăn đã hết nguyên liệu để tránh việc dội đơn. Bạn có thể tự mở lại bật tay hoặc cài đặt tự động mở lại vào sáng hôm sau.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Item */}
        <div className="bg-surface-lowest p-5 rounded-3xl shadow-sm flex items-start gap-4 transition-all">
           <div className="w-20 h-20 bg-surface-low rounded-2xl shrink-0"></div>
           <div className="flex-1">
             <div className="flex justify-between items-start">
                <h3 className="font-display font-bold text-lg text-gray-900">Pizza Hải Sản Nướng</h3>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
             </div>
             <p className="font-sans text-sm text-gray-500 mt-1">Đang bán</p>
             <p className="font-sans font-bold text-primary mt-2">150.000đ</p>
           </div>
        </div>

        {/* Out of Stock (Disabled) Item */}
        <div className="bg-surface-container opacity-60 p-5 rounded-3xl flex items-start gap-4 transition-all relative border border-dashed border-gray-400">
           {/* Badge Overlay */}
           <div className="absolute -top-3 left-6 bg-gray-800 text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
             ĐANG TẠM NGƯNG
           </div>
           
           <div className="w-20 h-20 bg-gray-400 rounded-2xl shrink-0"></div>
           <div className="flex-1">
             <div className="flex justify-between items-start">
                <h3 className="font-display font-bold text-lg text-gray-700 line-through">Tôm Hùm Alaska</h3>
                <div className="w-12 h-6 bg-gray-400 rounded-full relative cursor-pointer shadow-inner">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
             </div>
             <p className="font-sans text-sm text-red-700 font-bold mt-1">Hết nguyên liệu</p>
             
             <div className="mt-4 p-2 bg-gray-300 rounded-xl flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-gray-700">Tự động mở bán lại vào 8h sáng mai</span>
                <span className="text-xs font-bold px-2 py-1 bg-white rounded-md cursor-pointer">Sửa</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryControlPage;
