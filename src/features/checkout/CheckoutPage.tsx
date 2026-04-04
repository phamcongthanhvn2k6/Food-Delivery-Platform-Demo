import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { removeItem, updateQuantity } from '../../store/cartSlice';

const CheckoutPage = () => {
  const { items, totalAmount, totalQuantity } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deliveryFee = items.length > 0 ? 15000 : 0;
  const finalTotal = totalAmount + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-64 h-64 mb-8 bg-surface-low rounded-full flex items-center justify-center text-8xl grayscale opacity-50">🛒</div>
          <h2 className="font-display font-bold text-3xl mb-4 text-gray-900">Giỏ hàng của bạn đang trống</h2>
          <p className="font-sans text-gray-500 mb-8 max-w-md">Hãy chọn những món ăn ngon nhất để lấp đầy chiếc bụng đói của bạn nhé!</p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-primary text-white font-sans font-bold rounded-2xl shadow-lg hover:bg-primary-dim transition-all"
          >
            Quay lại trang chủ
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-8 px-4 max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-8 pb-12">
        {/* Left Column: List of items */}
        <div className="flex-1 space-y-6">
          <h1 className="font-display font-bold text-3xl mb-4">Chi tiết Giỏ hàng</h1>
          
          <div className="space-y-4">
            {items.map((item: any, idx: number) => (
              <section key={`${item.id}-${idx}`} className="bg-surface-lowest p-5 rounded-3xl shadow-sm border border-gray-50 flex gap-4 items-start">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-2xl object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-display font-bold text-lg text-gray-900">{item.name}</h3>
                    <button 
                      onClick={() => dispatch(removeItem({ id: item.id, options: item.options }))}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                  
                  {/* Options */}
                  <div className="text-xs text-on-surface-variant font-medium mt-1 flex flex-wrap gap-x-3">
                    {item.options.size && <span>Size: {item.options.size}</span>}
                    {item.options.extraToppings && item.options.extraToppings.length > 0 && (
                      <span>Toppings: {item.options.extraToppings.join(', ')}</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center bg-surface-low rounded-lg p-1">
                      <button 
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch(updateQuantity({ id: item.id, options: item.options, quantity: item.quantity - 1 }));
                          } else {
                            dispatch(removeItem({ id: item.id, options: item.options }));
                          }
                        }}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white rounded-md transition"
                      >−</button>
                      <span className="w-8 text-center font-bold text-sm text-gray-900">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(updateQuantity({ id: item.id, options: item.options, quantity: item.quantity + 1 }))}
                        className="w-8 h-8 flex items-center justify-center text-gray-900 hover:bg-white rounded-md transition"
                      >+</button>
                    </div>
                    <span className="font-display font-bold text-lg text-primary">{item.totalPrice.toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Delivery Details */}
          <section className="bg-surface-lowest p-6 rounded-3xl shadow-sm border border-gray-50 mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-display font-semibold text-xl">Thông tin Giao hàng</h2>
              <button className="text-primary font-sans font-semibold">Thay đổi</button>
            </div>
            <p className="font-sans font-semibold text-gray-800">Minh Tuấn • 0988776655</p>
            <p className="font-sans text-gray-600 mt-1">123 Đường Nam Kỳ Khởi Nghĩa, Quận 3, TP. Hồ Chí Minh</p>
          </section>
        </div>

        {/* Right Column: Summary */}
        <aside className="w-full md:w-96 bg-surface-lowest p-6 rounded-3xl shadow-sm self-start sticky top-24 border border-gray-50">
          <h2 className="font-display font-bold text-2xl mb-6">Tóm tắt đơn hàng ({totalQuantity} món)</h2>
          <div className="space-y-4 mb-6 relative">
            <div className="flex justify-between font-sans">
               <span className="text-gray-800 font-medium">Tạm tính</span>
               <span className="font-bold">{totalAmount.toLocaleString('vi-VN')}đ</span>
            </div>
            <div className="flex justify-between font-sans">
               <span className="text-gray-800 font-medium">Phí giao hàng</span>
               <span className="font-bold">{deliveryFee.toLocaleString('vi-VN')}đ</span>
            </div>
            <div className="w-full border-t-2 border-dashed border-surface-low my-4"></div>
            <div className="flex justify-between font-sans items-center">
               <span className="font-bold text-gray-900 text-lg">Tổng cộng</span>
               <span className="font-display font-bold text-2xl text-primary">{finalTotal.toLocaleString('vi-VN')}đ</span>
            </div>
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-white font-sans font-bold text-lg rounded-[1.5rem] shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.98]">
            Xác nhận Đặt hàng
          </button>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
