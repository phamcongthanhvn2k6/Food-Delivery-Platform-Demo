import React from 'react';

const MerchantDashboardPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar Placeholder */}
      <aside className="w-full md:w-64 bg-surface-lowest p-6 rounded-3xl shadow-sm self-start">
         <h2 className="font-display font-bold text-xl mb-6">Aura Pizza</h2>
         <nav className="font-sans text-on-surface-variant flex flex-col gap-4">
           <a href="#" className="font-semibold text-primary">Tổng quan</a>
           <a href="#">Thực đơn</a>
           <a href="#">Đơn hàng</a>
           <a href="#">Đánh giá</a>
           <a href="#">Tài chính</a>
         </nav>
      </aside>

      {/* Main Stats */}
      <main className="flex-1 space-y-6">
         <h1 className="font-display font-bold text-3xl mb-8">Dashboard</h1>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-primary text-white p-6 rounded-[2rem] shadow-lg shadow-primary/20">
             <h3 className="font-sans text-primary-container text-sm">Doanh thu hôm nay</h3>
             <div className="font-display font-bold text-3xl mt-2">12.5tr</div>
           </div>
           <div className="bg-surface-lowest p-6 rounded-[2rem] shadow-sm">
             <h3 className="font-sans text-on-surface-variant text-sm">Đơn thành công</h3>
             <div className="font-display font-bold text-3xl mt-2 text-gray-900">42</div>
           </div>
           <div className="bg-surface-lowest p-6 rounded-[2rem] shadow-sm relative overflow-hidden">
             <h3 className="font-sans text-on-surface-variant text-sm relative z-10">Đánh giá trung bình</h3>
             <div className="font-display font-bold text-3xl mt-2 text-gray-900 relative z-10">4.8★</div>
             <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#fb5151] rounded-full blur-2xl opacity-10"></div>
           </div>
         </div>

         {/* Chart Placeholder */}
         <div className="bg-surface-lowest p-8 rounded-[2rem] shadow-sm mt-8">
           <h2 className="font-display font-bold text-xl mb-6">Biểu đồ Doanh thu (Tuần)</h2>
           <div className="h-64 flex items-end gap-4">
             {[40, 60, 30, 80, 50, 90, 100].map((h, i) => (
               <div key={i} className="flex-1 bg-primary-container/30 rounded-t-xl relative group hover:bg-primary transition-colors cursor-pointer" style={{height: `${h}%`}}>
                 {/* Tooltip */}
                 <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded-lg font-sans transition-opacity whitespace-nowrap">
                   Ngày {i+2}
                 </div>
               </div>
             ))}
           </div>
         </div>
      </main>
    </div>
  );
};

export default MerchantDashboardPage;
