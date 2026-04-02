import React from 'react';

const OrderRatingPage = () => {
  return (
    <div className="bg-background min-h-screen pt-12 px-4 max-w-xl mx-auto text-center">
      <div className="w-24 h-24 bg-surface-low rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-sm">
        🍕
      </div>
      <h1 className="font-display font-bold text-3xl mb-2 text-gray-900">Aura Pizza</h1>
      <p className="font-sans text-on-surface-variant font-semibold">Đơn hàng #AG-88219 • Giao lúc 14:30</p>
      
      <div className="mt-10 bg-surface-lowest p-8 rounded-[2rem] shadow-sm">
         <h2 className="font-display font-semibold text-xl mb-6">Bạn cảm thấy món ăn thế nào?</h2>
         <div className="flex justify-center gap-4 text-4xl mb-8">
           <span className="cursor-pointer text-gray-300 hover:scale-110 transition-transform">★</span>
           <span className="cursor-pointer text-gray-300 hover:scale-110 transition-transform">★</span>
           <span className="cursor-pointer text-gray-300 hover:scale-110 transition-transform">★</span>
           <span className="cursor-pointer text-gray-300 hover:scale-110 transition-transform">★</span>
           <span className="cursor-pointer text-gray-300 hover:scale-110 transition-transform">★</span>
         </div>
         
         <textarea 
           rows={4} 
           placeholder="Hãy chia sẻ thêm trải nghiệm của bạn (tùy chọn)"
           className="w-full rounded-2xl bg-surface-low border-transparent focus:ring-2 font-sans focus:ring-primary/20 p-4 mb-6 resize-none outline-none"
         ></textarea>
         
         <button className="w-full py-4 rounded-[1.5rem] bg-primary text-white font-sans font-bold text-lg hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20">
           Gửi Đánh giá
         </button>
      </div>
    </div>
  );
};

export default OrderRatingPage;
