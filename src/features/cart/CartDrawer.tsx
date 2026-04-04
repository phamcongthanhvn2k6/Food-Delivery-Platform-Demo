import React from 'react';

const CartDrawer = () => {
  // Drawer state could be managed via props or context
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Panel */}
      <div className="relative w-full max-w-md bg-surface-lowest h-full shadow-2xl flex flex-col transform transition-transform shadow-[-8px_0_24px_rgba(0,88,187,0.06)]">
        <div className="p-6">
          <h2 className="font-display font-bold text-2xl">Giỏ hàng của bạn</h2>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-6">
          {/* Item */}
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-surface-low rounded-xl"></div>
            <div className="flex-1">
              <h3 className="font-sans font-semibold text-gray-800">Pizza Hải Sản</h3>
              <p className="font-sans text-on-surface-variant text-sm">Cỡ Lớn • Đế mỏng</p>
            </div>
            <div className="font-semibold text-primary">150k</div>
          </div>
        </div>

        {/* Checkout Footer */}
        <div className="p-6 bg-surface-lowest">
           <div className="flex justify-between font-sans mb-4">
             <span className="text-on-surface-variant">Tổng cộng</span>
             <span className="font-bold text-gray-900 text-lg">150.000đ</span>
           </div>
           <button className="w-full py-4 rounded-[1.5rem] bg-gradient-to-r from-primary to-primary-dim text-white font-sans font-semibold hover:opacity-95 transition-opacity">
             Thanh toán ngay
           </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
