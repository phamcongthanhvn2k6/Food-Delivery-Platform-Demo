import React from 'react';

const PaymentManagementPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-7xl mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Đối soát Giao dịch</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-surface-lowest p-8 rounded-3xl shadow-sm border-l-4 border-primary">
          <h2 className="font-sans font-semibold text-gray-600 mb-2">Chờ thanh toán cho Nhà hàng</h2>
          <div className="font-display font-bold text-4xl text-gray-900">1.240.500.000đ</div>
          <button className="mt-6 px-6 py-3 bg-primary text-white font-sans font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dim">Thực hiện Payout (120 Yêu cầu)</button>
        </div>
        <div className="bg-surface-lowest p-8 rounded-3xl shadow-sm border-l-4 border-secondary">
          <h2 className="font-sans font-semibold text-gray-600 mb-2">Chờ thanh toán cho Tài xế</h2>
          <div className="font-display font-bold text-4xl text-gray-900">45.200.000đ</div>
          <button className="mt-6 px-6 py-3 bg-secondary text-white font-sans font-bold rounded-xl shadow-lg shadow-secondary/20 hover:bg-secondary-dim">Thực hiện Payout (450 Yêu cầu)</button>
        </div>
      </div>

      <div className="bg-surface-lowest p-6 rounded-3xl shadow-sm">
        <h3 className="font-display font-bold text-xl mb-4">Lịch sử Payout gần nhất</h3>
        <div className="space-y-3 font-sans">
          <div className="flex justify-between items-center p-4 bg-surface-low rounded-2xl">
             <div className="font-semibold text-gray-800">Thanh toán theo lô - Khu vực HCM</div>
             <div className="text-gray-500">20/10/2026</div>
             <div className="font-bold text-[#059669]">Hoàn tất</div>
          </div>
          <div className="flex justify-between items-center p-4 bg-surface-low rounded-2xl">
             <div className="font-semibold text-gray-800">Rút tiền thủ công (Tài xế Nguyễn Văn A)</div>
             <div className="text-gray-500">20/10/2026</div>
             <div className="font-bold text-[#059669]">Hoàn tất</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagementPage;
