import React from 'react';

const DisputeCenterPage = () => {
  return (
    <div className="bg-surface-low min-h-screen pt-8 px-4 max-w-[1400px] mx-auto pb-8">
      <div className="mb-8">
         <h1 className="font-display font-bold text-3xl text-gray-900">Chi tiết Vụ việc #DP-99120</h1>
         <p className="font-sans font-semibold text-[#fb5151]">Trạng thái: Cần Admin Phán quyết Khẩn cấp</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Chat History */}
        <div className="bg-surface-lowest rounded-3xl shadow-sm p-6 flex flex-col h-[700px]">
          <h2 className="font-display font-bold text-xl mb-4 border-b border-surface-low pb-2">Lịch sử Hội thoại</h2>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <div className="bg-primary/10 p-4 rounded-2xl rounded-tl-none font-sans max-w-[85%]">
              <p className="font-bold text-sm text-primary mb-1">Khách hàng</p>
              <p className="text-gray-800">Anh ship làm đổ hết nước canh ra hộp rồi, pizza thì móp méo! Tôi không nhận đâu!</p>
            </div>
            <div className="bg-surface-container p-4 rounded-2xl rounded-tr-none font-sans max-w-[85%] self-end ml-auto">
              <p className="font-bold text-sm text-gray-600 mb-1">Tài xế</p>
              <p className="text-gray-800">Dạ đường xóc quá em lỡ tay đánh lái gấp để né chó. Chị thông cảm nhận giúp em em đền tiền mặt cho chị.</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-2xl rounded-tl-none font-sans max-w-[85%]">
              <p className="font-bold text-sm text-primary mb-1">Khách hàng</p>
              <p className="text-gray-800">Không, tôi báo lên tổng đài!</p>
            </div>
          </div>
        </div>

        {/* Column 2: Evidence Photos */}
        <div className="bg-surface-lowest rounded-3xl shadow-sm p-6 h-[700px] overflow-y-auto">
          <h2 className="font-display font-bold text-xl mb-4 border-b border-surface-low pb-2">Bằng chứng (Evidence)</h2>
          <div className="space-y-4">
             <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center font-sans font-bold text-gray-400 border border-surface-low">
                Ảnh 1: Hộp Pizza bị ẩm móp
             </div>
             <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center font-sans font-bold text-gray-400 border border-surface-low">
                Ảnh 2: Canh đổ ra túi nilon
             </div>
             <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center font-sans font-bold text-gray-400 border border-surface-low">
                Ảnh 3: Zoom cận cảnh
             </div>
          </div>
        </div>

        {/* Column 3: Decision Form */}
        <div className="bg-surface-lowest rounded-3xl shadow-sm p-6 border-2 border-primary/20 h-[700px] flex flex-col">
          <h2 className="font-display font-bold text-xl mb-4 border-b border-surface-low pb-2">Phán Quyết Hệ Thống</h2>
          
          <div className="space-y-4 mb-6 flex-1">
             <label className="flex items-center gap-4 p-4 border-2 border-primary rounded-2xl bg-primary/5 cursor-pointer">
               <input type="radio" name="decision" defaultChecked className="w-5 h-5 accent-primary" />
               <div>
                  <div className="font-sans font-bold text-primary text-lg">Hoàn tiền 100% Khách hàng</div>
                  <div className="font-sans text-sm text-gray-600 mt-1">Trừ tiền vào ví Ký quỹ của Tài xế. Mức phạt: 250,000đ</div>
               </div>
             </label>
             
             <label className="flex items-center gap-4 p-4 border-2 border-surface-low rounded-2xl hover:bg-surface-low/50 cursor-pointer transition-colors">
               <input type="radio" name="decision" className="w-5 h-5 accent-primary" />
               <div>
                  <div className="font-sans font-bold text-gray-800 text-lg">Hoàn tiền 50% Khách hàng</div>
                  <div className="font-sans text-sm text-gray-600 mt-1">Trừ 50% tài xế. Món ăn vẫn có thể dùng được 1 phần.</div>
               </div>
             </label>

             <label className="flex items-center gap-4 p-4 border-2 border-surface-low rounded-2xl hover:bg-[#fb5151]/5 cursor-pointer transition-colors">
               <input type="radio" name="decision" className="w-5 h-5 accent-[#fb5151]" />
               <div>
                  <div className="font-sans font-bold text-[#fb5151] text-lg">Bác bỏ Khiếu nại</div>
                  <div className="font-sans text-sm text-gray-600 mt-1">Lỗi do khách hàng cố tình dàn dựng hoặc lý do không hợp lý.</div>
               </div>
             </label>
             
             <div className="mt-6">
                <p className="font-sans font-semibold text-gray-900 mb-2">Ghi chú Nội bộ (Admin Note):</p>
                <textarea rows={4} className="w-full bg-surface-low rounded-xl p-3 font-sans outline-none focus:ring-2 ring-primary/30" placeholder="Lý do phán quyết..."></textarea>
             </div>
          </div>
          
          <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-dim text-white font-sans font-bold text-xl rounded-2xl shadow-[0_10px_30px_rgba(0,88,187,0.3)] hover:opacity-90">
             XÁC NHẬN THI HÀNH
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisputeCenterPage;
