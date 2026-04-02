import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
}

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryInfo, setCategoryInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Decode URI component since it might be passed as e.g. "Bún %2F Phở %2F Mì"
  const categoryName = categoryId ? decodeURIComponent(categoryId) : 'All Categories';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Assuming your backend is json-server on port 3000
        const res = await fetch(`http://localhost:3000/products?category=${encodeURIComponent(categoryName)}`);
        const data = await res.json();
        setProducts(data);

        // Fetch category info
        const catRes = await fetch(`http://localhost:3000/categories?id=${encodeURIComponent(categoryName)}`);
        const catData = await catRes.json();
        if (catData && catData.length > 0) {
          setCategoryInfo(catData[0]);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (categoryName) {
      fetchProducts();
    }
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        
        {/* Category Hero Section */}
        <div className="bg-[#0052cc] rounded-3xl overflow-hidden relative shadow-xl flex flex-col md:flex-row mb-12 min-h-[300px]">
          <div className="p-8 md:p-14 md:w-[60%] relative z-10 flex flex-col justify-center">
            <div className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-bold w-max text-white uppercase tracking-widest mb-4 border border-white/20 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"></path></svg>
              CATEGORY
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Premium <br /> <span className="text-blue-100">{categoryName}</span>
            </h2>
            
            <p className="text-blue-100 text-lg max-w-lg mb-8 font-medium leading-relaxed opacity-90">
              Discover the city's finest dishes delivered hot and fresh straight to your doorstep. Satisfy your cravings with our top-rated collections.
            </p>
          </div>
          
          <div className="md:w-[40%] relative flex items-center justify-center p-8 bg-blue-800/20">
             {/* Decorative background shape */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#003d99] to-[#0052cc] opacity-80 z-0"></div>
             
             {/* Using a representative image for the hero */}
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-[32px] overflow-hidden bg-white shadow-2xl z-10 border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
               {categoryInfo?.imageUrl ? (
                 <img src={categoryInfo.imageUrl} alt={categoryName} className="w-full h-full object-cover" />
               ) : categoryInfo?.icon ? (
                 <i className={`${categoryInfo.icon} text-9xl text-blue-500`}></i>
               ) : (
                 <img src={products.length > 0 ? products[0].imageUrl : "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"} alt={categoryName} className="w-full h-full object-cover" />
               )}
             </div>
          </div>
        </div>

        {/* Filters and List header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-[#0052cc] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-blue-700 transition flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              All Filters
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition flex items-center gap-2">
              Price: $$ <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition flex items-center gap-2">
              Rating: 4.5+ <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition flex items-center gap-2">
              Delivery Time
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition">
              Dietary
            </button>
          </div>
          
          <div className="text-gray-500 font-medium text-sm">
            Showing <span className="font-extrabold text-gray-900">{products.length}</span> results
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0052cc]"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700">No products found for this category.</h3>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg border border-white/20">
                    <span className="text-yellow-500 text-sm">★</span> <span className="text-gray-900">{product.rating}</span>
                  </div>
                  
                  {/* Prep Time Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-bold text-gray-800 shadow-lg border border-white/20 whitespace-nowrap">
                    20-35 min
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-xl font-extrabold text-gray-900 leading-tight">{product.name}</h4>
                    <button className="text-gray-300 hover:text-red-500 transition-colors shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 font-medium mb-5 line-clamp-1">{product.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                      <div className="flex items-center gap-1.5 text-[#0052cc]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> 
                        Free Delivery
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {product.price.toLocaleString('vi-VN')}đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && products.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-200 hover:text-gray-900 transition mb-8 shadow-sm">
              Load More Products
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
