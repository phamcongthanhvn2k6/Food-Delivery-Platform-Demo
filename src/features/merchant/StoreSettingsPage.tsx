import React from 'react';

const StoreSettingsPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-background min-h-screen max-w-7xl mx-auto pt-8 px-4 gap-8">
      {/* Sidebar Tabs */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <nav className="flex md:flex-col gap-2 font-sans font-semibold">
          <button className="px-4 py-3 text-left rounded-xl bg-primary text-white">Thông tin chung</button>
          <button className="px-4 py-3 text-left rounded-xl text-on-surface-variant hover:bg-surface-low">Thời gian hoạt động</button>
          <button className="px-4 py-3 text-left rounded-xl text-on-surface-variant hover:bg-surface-low">Tài khoản ngân hàng</button>
        </nav>
      </aside>

      {/* Form Content */}
      <main className="flex-1 bg-surface-lowest p-8 rounded-3xl shadow-sm">
        <h2 className="font-display font-bold text-2xl mb-8">Thông tin chung</h2>
        
        {/* Image Upload */}
        <div className="mb-8 p-10 border-2 border-dashed border-primary/30 rounded-2xl bg-surface-low/50 text-center hover:bg-surface-low transition-colors cursor-pointer">
          <p className="font-sans text-primary font-semibold">Kéo thả ảnh bìa hoặc nhấn để tải lên</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="block font-sans text-sm font-semibold mb-2 text-gray-700">Tên nhà hàng</label>
            <input type="text" className="w-full bg-surface-low px-4 py-3 rounded-lg font-sans outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" defaultValue="Aura Pizza" />
          </div>
          <div>
            <label className="block font-sans text-sm font-semibold mb-2 text-gray-700">Địa chỉ</label>
            <input type="text" className="w-full bg-surface-low px-4 py-3 rounded-lg font-sans outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" defaultValue="123 Đường Tôn Đức Thắng, Q1" />
          </div>
          <div>
            <button className="px-8 py-3 bg-primary text-white font-sans font-semibold rounded-xl hover:bg-primary-dim transition-colors mt-4">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoreSettingsPage;
