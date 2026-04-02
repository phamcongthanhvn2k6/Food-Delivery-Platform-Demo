import React from 'react';

const CommissionSettingsPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-5xl mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Cấu hình Nền tảng & Phân Quyền</h1>

      {/* Commission Tuning */}
      <div className="bg-surface-lowest p-8 rounded-[2.5rem] shadow-sm mb-8">
        <h2 className="font-display font-bold text-2xl mb-2 text-gray-900">Điều chỉnh Chiết Khấu (Commission)</h2>
        <p className="font-sans text-gray-600 mb-8 font-medium">Bảng tỷ giá chiết khấu % trên mỗi đơn hàng thu từ Nhà hàng đối tác.</p>
        
        <div className="space-y-8">
           <div className="bg-surface-low p-6 rounded-3xl flex flex-col md:flex-row md:items-center gap-6 border-l-4 border-primary">
             <div className="md:w-1/3">
               <h3 className="font-sans font-bold text-xl">Tier: Phổ thông</h3>
               <p className="font-sans text-sm text-gray-500 mt-1">Áp dụng cho quán lẻ, quán nhỏ</p>
             </div>
             <div className="flex-1 flex items-center gap-6">
                <input type="range" min="0" max="30" step="0.5" defaultValue="22.5" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="font-display font-bold text-3xl text-primary w-24 text-right">22.5%</div>
             </div>
           </div>

           <div className="bg-surface-low p-6 rounded-3xl flex flex-col md:flex-row md:items-center gap-6 border-l-4 border-[#059669]">
             <div className="md:w-1/3">
               <h3 className="font-sans font-bold text-xl">Tier: Chuỗi lớn</h3>
               <p className="font-sans text-sm text-gray-500 mt-1">Áp dụng KFC, McDonald's...</p>
             </div>
             <div className="flex-1 flex items-center gap-6">
                <input type="range" min="0" max="30" step="0.5" defaultValue="15.0" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#059669]" />
                <div className="font-display font-bold text-3xl text-[#059669] w-24 text-right">15.0%</div>
             </div>
           </div>
        </div>
      </div>

      {/* RBAC Roles */}
      <div className="bg-surface-lowest p-8 rounded-[2.5rem] shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display font-bold text-2xl text-gray-900">Phân quyền Bảo mật (RBAC)</h2>
          <button className="px-5 py-2 font-sans font-bold bg-gray-900 text-white rounded-xl">+ Tạo Role mới</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#b31b25]/20 bg-[#fb5151]/5 p-6 rounded-3xl relative overflow-hidden">
            <h3 className="font-sans font-bold text-xl text-[#b31b25] mb-2">Super Admin</h3>
            <p className="font-sans text-sm text-gray-700 mb-4">Toàn quyền truy cập. Edit tiền, khóa user, setup chiết khấu.</p>
            <div className="font-sans text-xs font-bold bg-white px-3 py-1 inline-block rounded-lg shadow-sm">Có 2 User</div>
          </div>
          
          <div className="border border-primary/20 bg-primary/5 p-6 rounded-3xl">
            <h3 className="font-sans font-bold text-xl text-primary mb-2">Support Staff</h3>
            <p className="font-sans text-sm text-gray-700 mb-4">Xử lý khiếu nại Dispute, Refund tối đa 500k, Mở khóa tài xế.</p>
            <div className="font-sans text-xs font-bold bg-white px-3 py-1 inline-block rounded-lg shadow-sm">Có 45 User</div>
          </div>
          
          <div className="border border-surface-container bg-surface-low p-6 rounded-3xl">
            <h3 className="font-sans font-bold text-xl text-gray-800 mb-2">QA Agent</h3>
            <p className="font-sans text-sm text-gray-700 mb-4">Chỉ được Quyền Xem (View-Only). Xem Reports, Log chat.</p>
            <div className="font-sans text-xs font-bold bg-white px-3 py-1 inline-block rounded-lg shadow-sm">Có 120 User</div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-surface-low text-right">
           <button className="px-10 py-4 bg-primary text-white font-sans font-bold text-xl rounded-2xl shadow-xl hover:bg-primary-dim">
             LƯU TOÀN BỘ CẤU HÌNH
           </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionSettingsPage;
