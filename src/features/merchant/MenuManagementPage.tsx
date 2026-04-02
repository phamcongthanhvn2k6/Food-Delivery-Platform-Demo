import React from 'react';

const MenuManagementPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display font-bold text-3xl">Quản lý Thực đơn</h1>
        <button className="px-6 py-3 bg-primary text-white font-sans font-bold rounded-full hover:bg-primary-dim shadow-xl shadow-primary/20">+ Thêm món mới</button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
        <button className="px-6 py-2 bg-gray-900 text-white rounded-full font-sans font-semibold whitespace-nowrap">Pizza Cổ Điển</button>
        <button className="px-6 py-2 bg-surface-lowest text-gray-700 rounded-full font-sans font-semibold whitespace-nowrap hover:bg-surface-low shadow-sm">Thức uống</button>
        <button className="px-6 py-2 bg-surface-lowest text-gray-700 rounded-full font-sans font-semibold whitespace-nowrap hover:bg-surface-low shadow-sm">Món phụ</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Menu Item Card */}
        <div className="bg-surface-lowest p-4 flex gap-4 rounded-3xl shadow-sm border border-transparent hover:shadow-md hover:border-surface-low transition-all">
           <div className="w-24 h-24 bg-surface-low rounded-xl overflow-hidden shrink-0"></div>
           <div className="flex-1 flex flex-col justify-between py-1">
             <div>
               <div className="flex justify-between">
                 <h3 className="font-display font-bold text-xl">Pizza Hải Sản</h3>
                 {/* Toggle Switch */}
                 <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                   <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
                 </div>
               </div>
               <p className="font-sans text-sm text-on-surface-variant line-clamp-1 mt-1">Đế đặc biệt dày, sốt cà chua, nghêu, tôm...</p>
             </div>
             <div className="flex justify-between items-center mt-4">
               <span className="font-sans font-bold text-gray-900">150.000đ</span>
               <button className="text-primary font-sans font-semibold text-sm hover:underline">Chỉnh sửa</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagementPage;
