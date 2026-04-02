import React from 'react';

const MonthlyReportsPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display font-bold text-3xl">Báo cáo Tài chính</h1>
        <select className="bg-surface-lowest border-none outline-none font-sans font-bold px-4 py-2 rounded-xl shadow-sm cursor-pointer">
          <option>Tháng 10, 2026</option>
          <option>Tháng 09, 2026</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Tổng doanh thu', val: '450.500.000đ', color: 'text-primary' },
          { label: 'Chiết khấu nền tảng', val: '90.100.000đ', color: 'text-[#fb5151]' },
          { label: 'Thực nhận', val: '360.400.000đ', color: 'text-[#059669]' },
          { label: 'Lượt huỷ', val: '12 đơn', color: 'text-gray-900' }
        ].map((stat, i) => (
          <div key={i} className="bg-surface-lowest p-6 rounded-3xl shadow-sm">
            <h3 className="font-sans text-on-surface-variant font-semibold text-sm mb-2">{stat.label}</h3>
            <div className={`font-display font-bold text-2xl ${stat.color}`}>{stat.val}</div>
          </div>
        ))}
      </div>

      {/* Placeholder table for list of daily details */}
      <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm overflow-hidden">
        <h2 className="font-display font-bold text-xl mb-6">Chi tiết từng ngày</h2>
        <div className="w-full overflow-x-auto">
           <div className="min-w-[600px]">
             <div className="flex font-sans text-on-surface-variant text-sm border-b-2 border-surface-low pb-3 mb-3">
               <div className="flex-1">Ngày</div>
               <div className="flex-1 text-center">Số đơn</div>
               <div className="flex-1 text-right">Tổng giao dịch</div>
             </div>
             {[20, 19, 18].map(day => (
               <div key={day} className="flex font-sans font-semibold text-gray-900 py-3 border-b border-surface-low/50 hover:bg-surface-low/30 transition-colors">
                 <div className="flex-1">{day}/10/2026</div>
                 <div className="flex-1 text-center">45</div>
                 <div className="flex-1 text-right">15.000.000đ</div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReportsPage;
