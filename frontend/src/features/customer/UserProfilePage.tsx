import React from 'react';

const UserProfilePage = () => {
  return (
    <div className="bg-background min-h-screen pt-12 px-4 max-w-2xl mx-auto text-center">
      <div className="w-32 h-32 bg-primary-container rounded-full mx-auto mb-6 flex items-center justify-center font-display text-4xl text-primary font-bold shadow-xl shadow-primary/10">MT</div>
      <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Minh Tuấn</h1>
      <p className="font-sans text-on-surface-variant text-lg">Hạng Titan • 4220 điểm</p>
      
      <div className="grid grid-cols-2 gap-4 mt-8">
         <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm text-left">
           <h3 className="font-sans text-on-surface-variant text-sm mb-1">Voucher của tôi</h3>
           <div className="font-display font-bold text-2xl">12 mã</div>
         </div>
         <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm text-left">
           <h3 className="font-sans text-on-surface-variant text-sm mb-1">Đánh giá</h3>
           <div className="font-display font-bold text-2xl">24 lần</div>
         </div>
      </div>
      
      <div className="mt-8">
        <button className="w-full bg-surface-lowest p-5 rounded-2xl flex justify-between items-center shadow-sm hover:surface-low transition-colors mb-4">
           <span className="font-sans font-semibold text-lg text-gray-800">Cài đặt Tài khoản</span>
           <span className="text-gray-400">→</span>
        </button>
        <button className="w-full bg-surface-lowest p-5 rounded-2xl flex justify-between items-center shadow-sm hover:surface-low transition-colors text-[#fb5151]">
           <span className="font-sans font-semibold text-lg text-[#fb5151]">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage;
