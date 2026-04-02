import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Category {
  id: string;
  name: string;
  type: string;
  icon?: string;
  imageUrl?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
}

export default function Home() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Fetch categories
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(data => setCategories(data.slice(0, 12))) // display up to 12 categories
      .catch(err => console.error(err));

    // Fetch popular products (we will just take top rated or random ones)
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then((data: Product[]) => {
        // Sort by rating or shuffle, here we sort by rating and take top 6
        const sorted = data.sort((a, b) => b.rating - a.rating);
        setPopularProducts(sorted.slice(0, 6));
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <div className="bg-[#0052cc] rounded-3xl overflow-hidden relative shadow-xl flex flex-col md:flex-row mb-12">
          <div className="p-8 md:p-14 md:w-2/3 relative z-10 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Cravings delivered to <br/> your <span className="text-blue-200">doorstep.</span>
            </h2>
            
            <div className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row items-center gap-2 shadow-lg mb-4 max-w-2xl">
              <div className="flex items-center gap-2 px-4 py-2 sm:w-1/3">
                <svg className="w-5 h-5 text-[#0052cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div className="text-sm hidden lg:block">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Current Location</p>
                  <p className="font-bold text-gray-900 truncate w-32">40.7128° N, 74.0060° W</p>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
              
              <div className="flex items-center flex-1 px-4 py-2">
                 <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                 <input type="text" placeholder="Search for sushi, pizza, or rest..." className="w-full bg-transparent border-none outline-none text-gray-900 font-medium placeholder-gray-400" />
              </div>
              
              <button className="bg-[#0052cc] text-white w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition self-stretch">
                Find Food
              </button>
            </div>
          </div>
          
          <div className="md:w-1/3 relative hidden md:block">
             <div className="absolute inset-0 bg-yellow-50 transform translate-x-12 rotate-[-5deg] scale-125 z-0"></div>
             {/* Use an image placeholder similar to the salad bowl */}
             <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" alt="Healthy Bowl" className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-[120%] h-auto rounded-full shadow-2xl z-10 border-8 border-white object-cover" style={{ aspectRatio: '1/1' }}/>
          </div>
        </div>

        {/* Browse by Category */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-extrabold text-gray-900">Browse by Category</h3>
            <a href="#" className="text-sm font-bold text-[#0052cc] hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.length > 0 ? categories.map((cat) => (
              <div 
                key={cat.id} 
                onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
                className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition border border-gray-100 shadow-sm group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-full overflow-hidden flex items-center justify-center group-hover:bg-blue-50 transition text-[#0052cc]">
                   {cat.imageUrl ? (
                     <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover" />
                   ) : cat.icon ? (
                     <i className={`${cat.icon} text-xl`}></i>
                   ) : cat.type === 'food' ? (
                     <span className="text-2xl">🍽️</span>
                   ) : (
                     <span className="text-2xl">🥤</span>
                   )}
                </div>
                <span className="font-bold text-gray-700 text-center text-sm">{cat.name}</span>
              </div>
            )) : ['Pizza', 'Sushi', 'Burgers', 'Desserts', 'Beverages', 'Healthy'].map((cat, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-3 border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center hover:bg-blue-50 transition text-gray-300">
                   <div className="animate-pulse w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banners */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg flex flex-col justify-center min-h-[180px]">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold w-max uppercase tracking-wider mb-4 border border-white/20">Limited Offer</span>
            <h3 className="text-3xl font-extrabold mb-4 leading-tight">Get 50% OFF on your <br/> first 3 orders</h3>
            <button className="bg-white text-purple-600 w-max px-6 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition shadow-sm">Claim Now</button>
            <div className="absolute -right-4 -bottom-4 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg flex flex-col justify-center min-h-[180px]">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold w-max uppercase tracking-wider mb-4 border border-white/20">Free Delivery</span>
            <h3 className="text-3xl font-extrabold mb-4 leading-tight">Unlimited free <br/> delivery with Plus</h3>
            <button className="bg-[#0043a6] border border-blue-400/30 text-white w-max px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-sm">Subscribe Now</button>
            
            <svg className="absolute right-8 bottom-8 w-32 h-32 text-white/10" viewBox="0 0 24 24" fill="currentColor"><path d="M1 4h20v2H1zm0 4h20v2H1zm0 4h20v2H1zm0 4h20v2H1z"/></svg>
          </div>
        </div>

        {/* Popular Near You */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Popular Near You</h3>
              <p className="text-gray-500 text-sm font-medium">Discover the best culinary spots within 5 miles</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg></button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {popularProducts.map((product) => (
              <div 
                key={product.id} 
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                    <span className="text-yellow-500">★</span> {product.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h4 className="text-lg font-extrabold text-gray-900 line-clamp-1">{product.name}</h4>
                    <span className="font-bold text-[#0052cc] whitespace-nowrap">{product.price.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-4 line-clamp-1">{product.description}</p>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-600 mt-auto">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 20-30 min</div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Free Ship</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
