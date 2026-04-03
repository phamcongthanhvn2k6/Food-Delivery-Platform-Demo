import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UserProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-12 px-4 max-w-2xl w-full mx-auto text-center pb-20">
        <div className="w-32 h-32 bg-primary-container rounded-full mx-auto mb-6 flex items-center justify-center font-display text-4xl text-primary font-bold shadow-xl shadow-primary/10">MT</div>
        <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Minh Tuấn</h1>
        <p className="font-sans text-on-surface-variant text-lg">Hạng Titan • 4220 điểm</p>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
           <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm text-left border border-gray-50 hover:shadow-md transition">
             <h3 className="font-sans text-on-surface-variant text-sm mb-1">Voucher của tôi</h3>
             <div className="font-display font-bold text-2xl">12 mã</div>
           </div>
           <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm text-left border border-gray-50 hover:shadow-md transition">
             <h3 className="font-sans text-on-surface-variant text-sm mb-1">Đánh giá</h3>
             <div className="font-display font-bold text-2xl">24 lần</div>
           </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <button className="w-full bg-white p-5 rounded-3xl flex justify-between items-center shadow-sm hover:bg-gray-50 transition border border-gray-100 group">
             <span className="font-sans font-semibold text-lg text-gray-800">Cài đặt Tài khoản</span>
             <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="w-full bg-white p-5 rounded-3xl flex justify-between items-center shadow-sm hover:bg-red-50 transition border border-red-50 text-[#fb5151]">
             <span className="font-sans font-semibold text-lg">Đăng xuất</span>
             <span className="text-red-400">🚪</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
