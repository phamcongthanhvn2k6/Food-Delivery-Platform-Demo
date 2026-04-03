import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { logout } from '../store/authSlice';

export default function Header() {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-[#0052cc] font-extrabold text-xl tracking-tight">Culinary Flow</Link>
        <nav className="hidden md:flex gap-8">
          <Link to="/" className={`${location.pathname === '/' ? 'text-[#0052cc] border-b-2 border-[#0052cc] pb-1 font-bold' : 'text-gray-500 font-semibold hover:text-gray-900 transition'}`}>Browse</Link>
          <Link 
            to={user?.role === 'MERCHANT' ? '/merchant/orders' : (user?.role === 'CUSTOMER' ? '/customer/orders' : '/login')} 
            className={`${location.pathname.includes('/orders') ? 'text-[#0052cc] border-b-2 border-[#0052cc] pb-1 font-bold' : 'text-gray-500 font-semibold hover:text-gray-900 transition'}`}
          >
            Orders
          </Link>
          <Link to="/offers" className={`${location.pathname.startsWith('/offers') ? 'text-[#0052cc] border-b-2 border-[#0052cc] pb-1 font-bold' : 'text-gray-500 font-semibold hover:text-gray-900 transition'}`}>Offers</Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="text" placeholder="Search for pizza..." className="bg-transparent border-none outline-none text-sm w-48 text-gray-900 placeholder-gray-400" />
        </div>

        {/* Cart Icon */}
        <button 
          onClick={() => navigate('/checkout')}
          className="text-gray-500 hover:text-gray-900 relative transition-transform active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white flex items-center justify-center text-[10px] font-bold rounded-full border border-white pulse">2</span>
        </button>

        {/* Bell Icon */}
        <button 
          onClick={() => navigate('/notifications')}
          className="text-gray-500 hover:text-gray-900 relative transition-transform active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        {/* User Avatar & Dropdown */}
        <div className="flex items-center gap-3 relative group">
           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0052cc] font-bold overflow-hidden cursor-pointer shadow-sm border border-blue-200">
             {user?.fullName?.charAt(0) || 'U'}
           </div>
           
           <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <div className="px-4 py-2 border-b border-gray-100 mb-1">
                <p className="text-sm font-bold text-gray-900 truncate">{user?.fullName || 'Guest'}</p>
                <p className="text-xs text-gray-500 truncate">{user?.role || 'User'}</p>
              </div>
              <Link 
                to={user?.role === 'MERCHANT' ? '/merchant/settings' : '/customer/profile'} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-50"
              >
                Profile
              </Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 font-bold hover:bg-red-50">Log out</button>
           </div>
        </div>
      </div>
    </header>
  );
}
