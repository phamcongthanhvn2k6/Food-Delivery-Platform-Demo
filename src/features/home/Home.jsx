import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';

export default function Home() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-12">
          <h1 className="text-[#0052cc] font-extrabold text-xl tracking-tight">Culinary Flow</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-[#0052cc] font-bold border-b-2 border-[#0052cc] pb-1">Browse</a>
            <a href="#" className="text-gray-500 font-semibold hover:text-gray-900 transition">Offers</a>
            <a href="#" className="text-gray-500 font-semibold hover:text-gray-900 transition">Orders</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-gray-900 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="flex items-center gap-3 relative group">
             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0052cc] font-bold overflow-hidden cursor-pointer shadow-sm border border-blue-200">
               {user?.fullName?.charAt(0) || 'U'}
             </div>
             
             {/* Dropdown menu */}
             <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <div className="px-4 py-2 border-b border-gray-100 mb-1">
                  <p className="text-sm font-bold text-gray-900 truncate">{user?.fullName}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.role}</p>
                </div>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 font-bold hover:bg-red-50">Log out</button>
             </div>
          </div>
          
          <button className="bg-[#0052cc] text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            Cart
          </button>
        </div>
      </header>

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
            {['Pizza', 'Sushi', 'Burgers', 'Desserts', 'Beverages', 'Healthy'].map((cat, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition border border-gray-100 shadow-sm group">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition text-[#0052cc]">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14H7v-2h2v2zm0-4H7V7h2v3zm4 4h-2v-2h2v2zm0-4h-2V7h2v3z"></path></svg>
                </div>
                <span className="font-bold text-gray-700">{cat}</span>
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
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition group">
              <div className="relative h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop" alt="Pizza" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                  <span className="text-yellow-500">★</span> 4.8
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0052cc] text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Partner
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-extrabold text-gray-900">The Dough Atelier</h4>
                  <span className="font-bold text-[#0052cc]">$20-40</span>
                </div>
                <p className="text-sm text-gray-500 font-medium mb-4">Italian • Pizza • High-end</p>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 15-25 min</div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> $0.99 Fee</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition group">
              <div className="relative h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop" alt="Sushi" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                  <span className="text-yellow-500">★</span> 4.9
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Popular
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-extrabold text-gray-900">Umi No Kaze</h4>
                  <span className="font-bold text-[#0052cc]">$45-80</span>
                </div>
                <p className="text-sm text-gray-500 font-medium mb-4">Japanese • Sushi • Sea Food</p>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 30-45 min</div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> $2.50 Fee</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition group">
              <div className="relative h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" alt="Burger" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                  <span className="text-yellow-500">★</span> 4.6
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-extrabold text-gray-900">Prime Stack Burger</h4>
                  <span className="font-bold text-[#0052cc]">$15-30</span>
                </div>
                <p className="text-sm text-gray-500 font-medium mb-4">American • Burgers • Grill</p>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 20-30 min</div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> $1.50 Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-extrabold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Partner with Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Deliver with Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-gray-900 mb-4">Install App</h4>
            <div className="space-y-3">
              <button className="w-full bg-gray-900 text-white rounded-xl py-2 px-4 flex items-center gap-3 hover:bg-black transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.76 1.54-.05 2.81.65 3.54 1.76-3.1 1.83-2.6 5.92.4 7.06-.7 1.75-1.57 3.36-2.6 4.11zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Download on the</div>
                  <div className="text-sm font-extrabold leading-tight">App Store</div>
                </div>
              </button>
              <button className="w-full bg-gray-900 text-white rounded-xl py-2 px-4 flex items-center gap-3 hover:bg-black transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 01-.634-1.356V3.17c0-.528.214-1.056.633-1.356zm10.941 11.235l2.254 2.254-10.45 6.012 8.196-8.266zm.83-1.018l2.677-2.677a2 2 0 010 2.828l-2.677-2.677-2.607-2.607a2 2 0 010 2.828l2.607 2.607zm-1.03-3.041L6.155 3.54l10.449 6.012-2.254 2.254-8.196-8.266z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Get it on</div>
                  <div className="text-sm font-extrabold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>© 2024 Culinary Flow. Kinetic Concierge Service.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
            <a href="#" className="hover:text-gray-600 transition">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
