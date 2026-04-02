import React from 'react';

const OrderListPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-6xl mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Đơn hàng trong ngày</h1>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="px-6 py-2 bg-primary-container text-primary-dim font-bold rounded-full">Cần chuẩn bị (4)</button>
        <button className="px-6 py-2 bg-surface-lowest text-gray-600 font-semibold rounded-full shadow-sm hover:bg-surface-low">Đang giao (2)</button>
        <button className="px-6 py-2 bg-surface-lowest text-gray-600 font-semibold rounded-full shadow-sm hover:bg-surface-low">Hoàn tất (32)</button>
      </div>

      <div className="space-y-4">
        {/* Order Row */}
        <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#fb5151]"></div>
          
          <div className="pl-4">
            <h2 className="font-display font-bold text-xl">Đơn #1928 <span className="font-sans font-semibold text-sm text-[#fb5151] ml-2 px-2 py-1 bg-red-50 rounded-lg">Mới</span></h2>
            <p className="font-sans text-on-surface-variant font-medium mt-1">2 món • Khách: Tuấn</p>
          </div>
          
          <div className="font-sans text-sm text-gray-500 md:text-center">
            Cách đây 2 phút
          </div>
          
          <div className="flex gap-3">
             <button className="flex-1 md:flex-none px-6 py-3 bg-surface-low text-gray-800 font-bold rounded-xl hover:bg-surface-dim transition-colors">Từ chối</button>
             <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20">Nhận đơn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
