import React from 'react';

const AccountSettingsPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-2xl mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Cài đặt Tài khoản</h1>
      
      <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm space-y-6">
        <div>
          <label className="block font-sans text-sm text-on-surface-variant mb-2">Tên hiển thị</label>
          <input className="w-full font-sans font-semibold text-lg px-4 py-3 bg-surface-low rounded-xl outline-none focus:ring-2 ring-primary/20" defaultValue="Minh Tuấn" />
        </div>
        <div>
          <label className="block font-sans text-sm text-on-surface-variant mb-2">Số điện thoại</label>
          <input className="w-full font-sans font-semibold text-lg px-4 py-3 bg-surface-low rounded-xl outline-none focus:ring-2 ring-primary/20" defaultValue="0988776655" />
        </div>
        <div>
          <label className="block font-sans text-sm text-on-surface-variant mb-2">Email</label>
          <input className="w-full font-sans font-semibold text-lg px-4 py-3 bg-surface-low rounded-xl outline-none focus:ring-2 ring-primary/20" defaultValue="tuan@example.com" />
        </div>
        <button className="w-full py-4 mt-4 bg-primary text-white font-sans font-semibold rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all">
          Lưu thay đổi
        </button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
