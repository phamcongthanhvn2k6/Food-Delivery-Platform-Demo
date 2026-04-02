import React from 'react';

const ShipperManagementPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display font-bold text-3xl">Quản lý Shipper</h1>
        <div className="flex gap-4">
          <input type="text" placeholder="Tìm theo tên, biển số..." className="bg-surface-lowest px-6 py-3 rounded-full shadow-sm outline-none font-sans min-w-[300px]" />
          <button className="px-6 py-3 bg-primary text-white font-sans font-bold rounded-full">Lọc</button>
        </div>
      </div>

      <div className="bg-surface-lowest rounded-3xl p-6 shadow-sm">
        <table className="w-full text-left font-sans text-sm">
          <thead className="border-b-2 border-surface-low text-on-surface-variant">
            <tr>
              <th className="pb-4 font-semibold">Tài xế</th>
              <th className="pb-4 font-semibold">Biển số</th>
              <th className="pb-4 font-semibold">Trạng thái</th>
              <th className="pb-4 font-semibold">Đánh giá</th>
              <th className="pb-4 font-semibold text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-low/50">
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="hover:bg-surface-low/30 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-container rounded-full text-primary flex items-center justify-center font-bold">TX</div>
                    <div>
                      <div className="font-bold text-gray-900">Nguyễn Văn A</div>
                      <div className="text-gray-500 text-xs">0988***123</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 font-semibold text-gray-700">59-B1 123.45</td>
                <td className="py-4">
                  <span className="px-3 py-1 bg-[#059669]/10 text-[#059669] rounded-full text-xs font-bold">Đang chạy</span>
                </td>
                <td className="py-4 font-bold">4.9 ★</td>
                <td className="py-4 text-right">
                  <button className="text-primary font-semibold hover:underline">Chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipperManagementPage;
