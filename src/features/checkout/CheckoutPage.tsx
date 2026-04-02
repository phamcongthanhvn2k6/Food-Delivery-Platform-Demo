import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="bg-background min-h-screen pt-8 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        <h1 className="font-display font-bold text-3xl mb-4">Thanh toán & Giao hàng</h1>
        
        {/* Address */}
        <section className="bg-surface-lowest p-6 rounded-3xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display font-semibold text-xl">Địa chỉ Giao hàng</h2>
            <button className="text-primary font-sans font-semibold">Thay đổi</button>
          </div>
          <p className="font-sans font-semibold text-gray-800">Minh Tuấn • 0988776655</p>
          <p className="font-sans text-gray-600 mt-1">123 Đường Nam Kỳ Khởi Nghĩa, Quận 3, TP. Hồ Chí Minh</p>
        </section>

        {/* Courier options */}
        <section className="bg-surface-lowest p-6 rounded-3xl shadow-sm">
          <h2 className="font-display font-semibold text-xl mb-4">Tuỳ chọn Giao hàng</h2>
          <div className="border border-primary bg-primary/5 rounded-2xl p-4 flex justify-between items-center cursor-pointer mb-3">
             <div className="font-sans font-semibold text-primary">Giao tiêu chuẩn (15-30ph)</div>
             <div className="font-sans font-bold">15.000đ</div>
          </div>
          <div className="border border-surface-low bg-surface-low/30 rounded-2xl p-4 flex justify-between items-center cursor-pointer">
             <div className="font-sans font-semibold text-gray-600">Giao Hoả tốc (Dưới 15ph)</div>
             <div className="font-sans font-bold">35.000đ</div>
          </div>
        </section>
      </div>

      {/* Right Column: Summary */}
      <aside className="w-full md:w-96 bg-surface-lowest p-6 rounded-3xl shadow-sm self-start sticky top-8">
        <h2 className="font-display font-bold text-2xl mb-6">Đơn hàng (3 món)</h2>
        <div className="space-y-4 mb-6 relative">
          <div className="flex justify-between font-sans">
             <span className="text-gray-800">Tạm tính</span>
             <span className="font-semibold">300.000đ</span>
          </div>
          <div className="flex justify-between font-sans">
             <span className="text-gray-800">Phí giao hàng</span>
             <span className="font-semibold">15.000đ</span>
          </div>
          <div className="w-full border-t-2 border-dashed border-surface-low my-4"></div>
          <div className="flex justify-between font-sans items-center">
             <span className="font-bold text-gray-900 text-lg">Tổng cộng</span>
             <span className="font-display font-bold text-2xl text-primary">315.000đ</span>
          </div>
        </div>
        <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-white font-sans font-bold text-lg rounded-[1.5rem] shadow-xl hover:shadow-primary/30 transition-all">
          Xác nhận Đặt hàng
        </button>
      </aside>
    </div>
  );
};

export default CheckoutPage;
