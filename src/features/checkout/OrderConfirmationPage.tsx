import React from 'react';

const OrderConfirmationPage = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-surface-lowest p-10 rounded-[2rem] text-center shadow-2xl shadow-primary/5 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-container rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-tr from-primary to-primary-container rounded-3xl rotate-12 flex items-center justify-center shadow-lg">
           <div className="-rotate-12 text-white text-4xl">✓</div>
        </div>
        
        <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Tuyệt vời!</h1>
        <p className="font-sans text-on-surface-variant font-medium mb-8">
          Đơn hàng của bạn đang được quán chuẩn bị. Chúc bạn có một bữa ăn ngon miệng.
        </p>
        
        <div className="bg-surface-low rounded-2xl p-4 mb-8">
           <div className="font-sans font-bold text-lg">Mã đơn: #AG-88219</div>
           <div className="font-sans text-sm text-gray-600 mt-1">Giao trong 20 phút nữa</div>
        </div>
        
        <button className="w-full py-4 bg-primary text-white font-sans font-bold text-lg rounded-[1.5rem] hover:opacity-90 shadow-lg shadow-primary/20 transition-opacity">
           Theo dõi đơn hàng
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
