import React from 'react';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      <div className="w-32 h-32 mb-6 rounded-full bg-surface-low flex items-center justify-center">
        {/* Abstract icon */}
        <svg className="w-12 h-12 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-2">
        Bụng đang đói, giỏ hàng đang trống.
      </h2>
      <p className="font-sans text-on-surface-variant max-w-sm mb-8">
        Hãy lấp đầy giỏ hàng của bạn bằng những món ăn thơm ngon nhất từ các nhà hàng hàng đầu.
      </p>
      <button className="px-8 py-3 rounded-full bg-primary text-white font-sans font-semibold hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20">
        Khám phá Món ngon ngay
      </button>
    </div>
  );
};

export default EmptyCart;
