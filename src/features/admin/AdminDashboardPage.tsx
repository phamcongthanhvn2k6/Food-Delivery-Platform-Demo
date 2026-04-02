import React from 'react';

const AdminDashboardPage = () => {
  return (
    <div className="bg-surface-container-low min-h-screen pt-8 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface-lowest p-6 rounded-3xl shadow-sm self-start">
         <h2 className="font-display font-bold text-xl mb-6 text-primary">Hệ thống Admin</h2>
         <nav className="font-sans text-on-surface-variant flex flex-col gap-4">
           <a href="#" className="font-semibold text-primary">Tổng quan</a>
           <a href="#">Tài khoản</a>
           <a href="#">Đối tác</a>
           <a href="#">Giao dịch</a>
           <a href="#">Shipper</a>
         </nav>
      </aside>

      {/* Main Stats */}
      <main className="flex-1 space-y-8">
         <h1 className="font-display font-bold text-3xl">Tổng quan Nền tảng</h1>
         
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
             { label: 'Người dùng', val: '124,500', color: 'text-primary' },
             { label: 'Đối tác', val: '1,250', color: 'text-secondary' },
             { label: 'Tài xế', val: '3,420', color: 'text-tertiary' },
             { label: 'GMV (Tháng)', val: '45.5 Tỷ', color: 'text-gray-900' }
           ].map((s, i) => (
             <div key={i} className="bg-surface-lowest p-6 rounded-[2rem] shadow-sm">
               <h3 className="font-sans text-sm text-on-surface-variant mb-1">{s.label}</h3>
               <div className={`font-display font-bold text-2xl ${s.color}`}>{s.val}</div>
             </div>
           ))}
         </div>

         {/* Latest Alerts */}
         <div className="bg-surface-lowest p-8 rounded-[2.5rem] shadow-sm">
           <h2 className="font-display font-bold text-xl mb-6">Cảnh báo hệ thống</h2>
           <div className="space-y-4">
             <div className="flex items-center gap-4 bg-[#fb5151]/10 p-4 rounded-2xl">
               <div className="w-10 h-10 bg-[#fb5151] rounded-full flex items-center justify-center text-white">!</div>
               <div>
                 <h4 className="font-sans font-bold text-[#fb5151]">Tỷ lệ huỷ đơn tăng bất thường</h4>
                 <p className="font-sans text-sm text-gray-700">Khu vực Quận 1 đang có 15% cuốc xe bị huỷ.</p>
               </div>
             </div>
             <div className="flex items-center gap-4 bg-primary/10 p-4 rounded-2xl">
               <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">i</div>
               <div>
                 <h4 className="font-sans font-bold text-primary">Có 12 hồ sơ nhà hàng mới</h4>
                 <p className="font-sans text-sm text-gray-700">Đang chờ phê duyệt trên hệ thống.</p>
               </div>
             </div>
           </div>
         </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
