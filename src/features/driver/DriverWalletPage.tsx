import React from 'react';

const DriverWalletPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-lg mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Ví Tài xế</h1>
      
      <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-xl shadow-primary/20 bg-gradient-to-tr from-primary to-primary-container relative overflow-hidden">
         <div className="relative z-10">
           <h2 className="font-sans font-semibold opacity-90 mb-2">Số dư Ký quỹ</h2>
           <div className="font-display font-bold text-4xl">1.250.000 đ</div>
         </div>
         {/* Decoration */}
         <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </div>
      
      <div className="flex gap-4 mt-6">
        <button className="flex-1 py-4 bg-surface-lowest font-sans font-bold text-primary rounded-2xl shadow-sm hover:surface-low transition-colors">Rút tiền</button>
        <button className="flex-1 py-4 bg-surface-lowest font-sans font-bold text-gray-800 rounded-2xl shadow-sm hover:surface-low transition-colors">Nạp thêm</button>
      </div>
      
      <h3 className="font-display font-bold text-xl mt-10 mb-4">Lịch sử giao dịch</h3>
      <div className="space-y-3">
        <div className="bg-surface-lowest p-4 rounded-xl flex justify-between items-center shadow-sm">
           <div>
             <h4 className="font-sans font-semibold">Chuyến xe #1928</h4>
             <p className="font-sans text-sm text-gray-500">14:00 hôm nay</p>
           </div>
           <div className="font-sans font-bold text-[#059669]">+25.000đ</div>
        </div>
        <div className="bg-surface-lowest p-4 rounded-xl flex justify-between items-center shadow-sm">
           <div>
             <h4 className="font-sans font-semibold">Phí ứng trước cửa hàng</h4>
             <p className="font-sans text-sm text-gray-500">13:45 hôm nay</p>
           </div>
           <div className="font-sans font-bold text-[#fb5151]">-150.000đ</div>
        </div>
      </div>
    </div>
  );
};

export default DriverWalletPage;
