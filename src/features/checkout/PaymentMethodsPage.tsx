import React from 'react';

const PaymentMethodsPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-2xl mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Phương thức Thanh toán</h1>
      
      <div className="space-y-4">
        <div className="p-6 bg-primary-container/20 border-2 border-primary rounded-3xl flex justify-between items-center cursor-pointer shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-xl text-xl">💳</div>
            <div>
              <h3 className="font-sans font-semibold text-lg text-gray-900">MoMo</h3>
              <p className="font-sans text-sm text-gray-600">Minh Tuấn - 098****655</p>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
             <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="p-6 bg-surface-lowest border-2 border-transparent rounded-3xl flex justify-between items-center cursor-pointer shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-low text-gray-500 flex items-center justify-center rounded-xl text-xl">💵</div>
            <div>
              <h3 className="font-sans font-semibold text-lg text-gray-900">Tiền mặt</h3>
              <p className="font-sans text-sm text-gray-600">Thanh toán khi nhận hàng</p>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full border-2 border-surface-low"></div>
        </div>
        
        <button className="w-full mt-6 py-4 flex items-center justify-center gap-2 border-2 border-dashed border-primary/40 bg-surface-lowest rounded-3xl font-sans font-semibold text-primary hover:bg-primary/5 transition-colors">
          <span>+ Thêm phương thức khác</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
