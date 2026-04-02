import React from 'react';

const AccountManagementPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display font-bold text-3xl">Quản lý Tài khoản</h1>
        <button className="px-6 py-3 bg-gray-900 text-white font-sans font-bold rounded-full">+ Tạo Admin mới</button>
      </div>

      <div className="bg-surface-lowest rounded-3xl p-6 flex flex-col md:flex-row gap-8 shadow-sm">
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-surface-low pr-6 pb-6 md:pb-0 font-sans space-y-4">
           <div className="font-bold text-primary cursor-pointer">Người dùng (124K)</div>
           <div className="text-gray-500 font-semibold cursor-pointer hover:text-gray-900">Quản trị viên (12)</div>
           <div className="text-gray-500 font-semibold cursor-pointer hover:text-gray-900">Bị khoá (450)</div>
        </div>
        
        <div className="flex-1">
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-surface-low rounded-2xl hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-surface-low rounded-full"></div>
                  <div>
                    <h4 className="font-sans font-bold text-gray-900">Người dùng ẩn danh #{i}</h4>
                    <p className="font-sans text-sm text-gray-500">Tham gia 2 tháng trước</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-sans font-semibold rounded-lg bg-surface-low text-gray-700 hover:bg-surface-dim">Khoá</button>
                  <button className="px-4 py-2 text-sm font-sans font-semibold rounded-lg text-primary hover:bg-primary/5">Lịch sử</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManagementPage;
