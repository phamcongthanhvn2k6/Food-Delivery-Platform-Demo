import React from 'react';

const DriverKYCPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-md mx-auto">
      <h1 className="font-display font-bold text-3xl mb-2 text-gray-900">Xác minh Hồ sơ</h1>
      <p className="font-sans text-on-surface-variant font-medium mb-8">Vui lòng cập nhật đầy đủ giấy tờ để hệ thống xét duyệt tài khoản trước khi bạn có thể nhận đơn.</p>
      
      <div className="space-y-4">
        {/* Approved Item */}
        <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm relative overflow-hidden flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#059669]/10 text-[#059669] rounded-2xl flex items-center justify-center font-bold text-xl">✓</div>
            <div>
              <h3 className="font-sans font-bold text-gray-900 text-lg">Căn cước công dân</h3>
              <p className="font-sans text-sm text-[#059669] font-medium">Đã phê duyệt</p>
            </div>
          </div>
        </div>

        {/* Pending Item */}
        <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm relative overflow-hidden flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#f59e0b]/10 text-[#f59e0b] rounded-2xl flex items-center justify-center font-bold text-xl">⌛</div>
            <div>
              <h3 className="font-sans font-bold text-gray-900 text-lg">Giấy phép lái xe</h3>
              <p className="font-sans text-sm text-[#f59e0b] font-medium">Đang chờ duyệt (1-2 ngày)</p>
            </div>
          </div>
        </div>

        {/* Rejected / Re-upload Item */}
        <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm border-2 border-dashed border-[#fb5151] relative overflow-hidden cursor-pointer hover:bg-surface-low transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#fb5151]/10 text-[#fb5151] rounded-2xl flex items-center justify-center font-bold text-xl mt-1">✗</div>
            <div className="flex-1">
              <h3 className="font-sans font-bold text-gray-900 text-lg">Cà vẹt xe (Bắt buộc)</h3>
              <p className="font-sans text-sm text-[#fb5151] font-medium mb-3">Hình chụp bị mờ chói sáng, vui lòng chụp lại rõ nét hơn.</p>
              <button className="px-5 py-2 bg-[#fb5151] text-white font-sans font-semibold text-sm rounded-xl hover:opacity-90">
                Tải lên lại
              </button>
            </div>
          </div>
        </div>
        
        {/* New Document Placeholder */}
        <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm border-2 border-dashed border-surface-low relative overflow-hidden cursor-pointer hover:bg-surface-low transition-colors flex items-center justify-center">
            <div className="text-center">
               <div className="w-12 h-12 bg-surface-container mx-auto rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mb-2">+</div>
               <p className="font-sans font-semibold text-gray-700">Thêm Giấy khám sức khoẻ (Tuỳ chọn)</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DriverKYCPage;
