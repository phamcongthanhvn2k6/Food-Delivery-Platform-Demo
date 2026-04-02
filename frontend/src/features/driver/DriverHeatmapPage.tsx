import React from 'react';

const DriverHeatmapPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Map Background Placeholder */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
         <div className="text-gray-600 font-display font-bold text-4xl tracking-widest">BẢN ĐỒ GIAO THÔNG</div>
         
         {/* Heatmap Red/Orange zones */}
         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#fb5151] rounded-full blur-[80px] opacity-60"></div>
         <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#f59e0b] rounded-full blur-[100px] opacity-50"></div>
         {/* Green low demand zone */}
         <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#059669] rounded-full blur-[60px] opacity-30"></div>
      </div>

      {/* Top Bar with SOS */}
      <div className="relative z-10 p-6 flex justify-between items-start">
         <div className="bg-surface-lowest/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20">
            <span className="font-sans font-bold text-gray-900">Nhu cầu Hiện tại:</span>
            <span className="font-sans font-bold text-[#fb5151] ml-2 tracking-wide">RẤT CAO</span>
         </div>
         
         {/* SOS Button */}
         <button className="w-16 h-16 bg-[#b31b25] text-white rounded-full flex items-center justify-center text-xl font-bold uppercase shadow-[0_8px_32px_rgba(179,27,37,0.5)] hover:scale-110 transition-transform">
           SOS
         </button>
      </div>

      {/* Bottom Sheet Recommendation */}
      <div className="relative z-10 mt-auto">
         <div className="bg-surface-lowest rounded-t-[2.5rem] p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] mx-2 border border-white/50 backdrop-blur-xl">
             <div className="w-16 h-1.5 bg-surface-low rounded-full mx-auto mb-6"></div>
             
             <h2 className="font-display font-bold text-2xl text-gray-900 mb-2">Đề xuất di chuyển</h2>
             <p className="font-sans text-lg text-gray-700 mb-6 font-medium">Hãy di chuyển về phía <span className="font-bold text-primary">Phố đi bộ Nguyễn Huệ</span>, khu vực này đang có hơn 45 đơn hàng chờ tài xế.</p>
             
             <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-4 flex justify-between items-center mb-6">
                <span className="font-sans font-bold text-primary">Phí ship khu vực này</span>
                <span className="font-display font-bold text-2xl text-primary">x1.5</span>
             </div>
             
             <button className="w-full py-4 bg-primary text-white font-sans font-bold text-xl rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary-dim transition-colors">
                Dẫn đường ngay
             </button>
         </div>
      </div>
    </div>
  );
};

export default DriverHeatmapPage;
