import React from 'react';

const SearchResultsPage = () => {
  return (
    <div className="flex bg-background min-h-screen max-w-7xl mx-auto pt-8">
      {/* Sidebar Filters */}
      <aside className="w-64 flex-shrink-0 px-6 hidden md:block">
        <h2 className="font-display font-bold text-xl mb-6">Bộ lọc</h2>
        
        <div className="mb-6">
          <h3 className="font-sans font-semibold mb-3">Khoảng giá</h3>
          <input type="range" className="w-full accent-primary" />
        </div>
        
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-sans font-semibold">Ăn chay</h3>
          <div className="w-10 h-6 bg-surface-low rounded-full"></div>
        </div>
      </aside>

      {/* Main Results */}
      <main className="flex-1 px-4 md:px-0">
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Tìm kiếm món ăn, nhà hàng..." 
            className="w-full px-6 py-4 bg-surface-lowest rounded-2xl border-none focus:ring-4 focus:ring-primary/20 shadow-sm outline-none font-sans"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card placeholder */}
          <div className="bg-surface-lowest rounded-[1rem] shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer border border-transparent">
            <div className="h-48 bg-surface-low w-full relative">
               <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold">4.8★</div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold text-lg">Urban Grill</h3>
              <p className="font-sans text-on-surface-variant text-sm mt-1">20-30 phút • Phí giao 15k</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;
