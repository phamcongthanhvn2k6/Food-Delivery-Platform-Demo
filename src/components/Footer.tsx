import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[#0052cc] font-extrabold text-xl tracking-tight mb-4">Culinary Flow</h4>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Connecting you with the best kitchens in the city. Faster delivery, better taste.
          </p>
        </div>
        
        <div>
          <h4 className="font-extrabold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-3 text-sm font-medium text-gray-500">
            <li><Link to="/about" className="hover:text-gray-900 transition">About Us</Link></li>
            <li><Link to="/support" className="hover:text-gray-900 transition">Help Center</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-900 transition">Privacy Policy</Link></li>
            <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-extrabold text-gray-900 mb-4">Partner</h4>
          <ul className="space-y-3 text-sm font-medium text-gray-500">
            <li><Link to="/partner" className="hover:text-gray-900 transition">Add your restaurant</Link></li>
            <li><Link to="/partner" className="hover:text-gray-900 transition">Sign up to deliver</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-extrabold text-gray-900 mb-4">Mobile App</h4>
          <div className="space-y-3">
            <button className="w-40 bg-gray-900 text-white rounded-lg py-2 px-3 flex items-center gap-2 hover:bg-black transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.76 1.54-.05 2.81.65 3.54 1.76-3.1 1.83-2.6 5.92.4 7.06-.7 1.75-1.57 3.36-2.6 4.11zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              <div className="text-left">
                <div className="text-[8px] text-gray-300 font-bold uppercase tracking-wider">Download on the</div>
                <div className="text-xs font-extrabold leading-tight">App Store</div>
              </div>
            </button>
            <button className="w-40 bg-gray-900 text-white rounded-lg py-2 px-3 flex items-center gap-2 hover:bg-black transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 01-.634-1.356V3.17c0-.528.214-1.056.633-1.356zm10.941 11.235l2.254 2.254-10.45 6.012 8.196-8.266zm.83-1.018l2.677-2.677a2 2 0 010 2.828l-2.677-2.677-2.607-2.607a2 2 0 010 2.828l2.607 2.607zm-1.03-3.041L6.155 3.54l10.449 6.012-2.254 2.254-8.196-8.266z"/></svg>
              <div className="text-left">
                <div className="text-[8px] text-gray-300 font-bold uppercase tracking-wider">Get it on</div>
                <div className="text-xs font-extrabold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 flex justify-center text-xs text-gray-400 font-medium tracking-wide">
        <p>© 2024 Culinary Flow. Kinetic Concierge Service.</p>
      </div>
    </footer>
  );
}
