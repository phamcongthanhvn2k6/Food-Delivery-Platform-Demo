import React from 'react';

const ReviewManagementPage = () => {
  return (
    <div className="flex bg-background min-h-screen max-w-7xl mx-auto pt-8 px-4">
      {/* Left Sidebar Summary */}
      <aside className="w-64 flex-shrink-0 pr-8 hidden md:block border-r border-surface-low border-opacity-50">
         <h2 className="font-display font-bold text-xl mb-6">Đánh giá</h2>
         <div className="mb-8">
           <div className="text-5xl font-display font-bold text-gray-900">4.8</div>
           <p className="font-sans text-on-surface-variant text-sm mt-1">trên 5 sao</p>
         </div>
         {/* Bar Chart placeholder */}
         <div className="space-y-2">
            {[5,4,3,2,1].map(star => (
              <div key={star} className="flex items-center gap-2 text-sm font-sans text-gray-600">
                <span>{star}★</span>
                <div className="flex-1 h-2 bg-surface-low rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{width: `${star * 20}%`}}></div>
                </div>
              </div>
            ))}
         </div>
      </aside>

      {/* Main Reviews List */}
      <main className="flex-1 md:pl-8">
        <div className="space-y-6">
          {/* Review Card */}
          <div className="bg-surface-lowest p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-semibold font-sans">N*** A</div>
                <div className="text-sm font-sans text-on-surface-variant">2 ngày trước</div>
              </div>
              <div className="text-primary font-bold tracking-widest">★★★★★</div>
            </div>
            <p className="font-sans text-gray-800 mb-4">
              Pizza rất ngon, đế mỏng giòn và nhiều phô mai. Sẽ ủng hộ quán dài dài!
            </p>
            
            {/* Merchant Reply Box */}
            <div className="bg-surface-low p-4 rounded-xl ml-4">
              <p className="font-sans text-sm text-gray-700">
                <strong>Phản hồi từ quán:</strong> Cảm ơn bạn đã ủng hộ Aura Pizza! Chúc bạn một ngày vui vẻ.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewManagementPage;
