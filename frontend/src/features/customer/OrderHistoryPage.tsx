import React from 'react';

const OrderHistoryPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-4xl mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Lịch sử Đơn hàng</h1>
      <div className="space-y-4">
        {/* Item placeholder */}
        <div className="bg-surface-lowest p-6 rounded-2xl flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent">
          <div className="w-20 h-20 bg-surface-low rounded-xl"></div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
               <h2 className="font-display font-bold text-xl">Aura Pizza</h2>
               <span className="font-sans font-semibold text-primary">Giao thành công</span>
            </div>
            <p className="font-sans text-on-surface-variant text-sm mt-1">1x Pizza Hải Sản, 1x Nước ngọt...</p>
            <div className="font-sans text-sm mt-4 text-gray-500">20 Thg 10 • 200.000đ</div>
          </div>
          <div className="flex sm:flex-col justify-end gap-3 sm:gap-2">
            <button className="px-6 py-2 bg-primary text-white font-sans font-semibold rounded-full hover:bg-primary-dim">Đặt lại</button>
            <button className="px-6 py-2 bg-surface-low text-gray-700 font-sans font-semibold rounded-full hover:bg-surface-dim">Đánh giá</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
