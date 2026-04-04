import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 w-full mx-auto pb-20">
        
        {/* Hero Section */}
        <div className="bg-white px-6 py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
            <div className="md:w-1/2">
               <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                 Grow your <br/> business <span className="text-[#0052cc]">with speed.</span>
               </h1>
               <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
                 Join the most efficient delivery network. Whether you're a local restaurant or looking for flexible earning, The Kinetic Concierge moves with you.
               </p>
               <div className="flex gap-4">
                  <button className="bg-[#0052cc] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition flex items-center gap-2">
                    Join as Partner <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                  <button className="bg-blue-100/50 text-[#0052cc] px-8 py-3.5 rounded-xl font-bold hover:bg-blue-100 transition">
                    Become a Rider
                  </button>
               </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
               <div className="absolute inset-0 bg-[#009688]/10 rounded-full blur-3xl transform scale-150"></div>
               <div className="bg-[#00a896] text-white rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10 transform rotate-2 aspect-square flex items-center justify-center flex-col shadow-[#00a896]/30">
                  <div className="border-[6px] border-white/20 rounded-full p-8 relative">
                     <span className="text-xl font-bold tracking-[0.2em] relative z-10 block whitespace-nowrap" style={{ transform: 'rotate(-10deg)' }}>KINETIC CONCIERGE</span>
                     <svg className="w-24 h-24 text-white mx-auto my-6 opacity-90" fill="currentColor" viewBox="0 0 24 24"><path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v2a1 1 0 0 0 2 0V9h4v2a1 1 0 0 0 2 0V9h2v10z"></path></svg>
                     <span className="text-xl font-bold tracking-[0.2em] relative z-10 block text-center" style={{ transform: 'rotate(-5deg)' }}>SYSTEM</span>
                  </div>
               </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-8">
           
           {/* Add your restaurant */}
           <div className="flex-1 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-[#0052cc] rounded-xl flex items-center justify-center mb-8">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Add your restaurant</h3>
              <p className="text-gray-500 mb-8 max-w-sm">Tap into our massive local customer base and let us handle the logistics while you focus on the cooking.</p>
              
              <ul className="space-y-6 mb-10">
                 <li className="flex gap-4">
                    <div className="w-6 h-6 bg-[#0052cc] text-white rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">✓</div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">Reach more customers</h4>
                       <p className="text-xs text-gray-500 mt-1">Boost your sales by appearing in front of thousands of hungry locals every day.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <div className="w-6 h-6 bg-[#0052cc] text-white rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">✓</div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">Seamless Integration</h4>
                       <p className="text-xs text-gray-500 mt-1">Our simple merchant portal syncs with your existing POS system in minutes.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <div className="w-6 h-6 bg-[#0052cc] text-white rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">✓</div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">Smart Analytics</h4>
                       <p className="text-xs text-gray-500 mt-1">Get deep insights into your most popular dishes and peak order times.</p>
                    </div>
                 </li>
              </ul>
              <button className="w-full bg-[#0052cc] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition">Register Your Kitchen</button>
           </div>

           {/* Sign up to deliver */}
           <div className="flex-1 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-8">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" /> </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Sign up to deliver</h3>
              <p className="text-gray-500 mb-8 max-w-sm">Be your own boss. Enjoy the freedom to earn whenever you want with the industry's best delivery rates.</p>
              
              <ul className="space-y-6 mb-10">
                 <li className="flex gap-4">
                    <div className="w-6 h-6 bg-[#0052cc] text-white rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">✓</div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">Flexible schedule</h4>
                       <p className="text-xs text-gray-500 mt-1">Work whenever it suits you. No fixed hours, no minimum commitments.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <div className="w-6 h-6 bg-[#0052cc] text-white rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">✓</div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">Quick Payouts</h4>
                       <p className="text-xs text-gray-500 mt-1">Track your earnings in real-time and cash out daily whenever you need it.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <div className="w-6 h-6 bg-[#0052cc] text-white rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">✓</div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">Premium Gear</h4>
                       <p className="text-xs text-gray-500 mt-1">Get access to high-quality thermal bags and safety equipment designed for speed.</p>
                    </div>
                 </li>
              </ul>
              <button className="w-full bg-[#3f51b5] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#303f9f] transition">Start Riding Today</button>
           </div>
        </div>

        {/* Voices of the Network */}
        <div className="bg-gray-100 py-24">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Voices of the Network</h2>
              <p className="text-gray-500 mb-12">Join thousands of partners already growing with The Kinetic Concierge.</p>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 
                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-white/60 hover:shadow-md transition">
                    <div className="text-[#0052cc]/20 text-6xl font-serif mb-4 leading-none h-10">"</div>
                    <p className="text-sm font-medium text-gray-600 mb-8 italic">"Kinetic increased our delivery volume by 40% in the first three months. The tablet interface is so intuitive our staff didn't even need training."</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Sarah Chen" className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-sm">Sarah Chen</h4>
                          <p className="text-xs text-gray-500">Owner, The Green Bistro</p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-white/60 hover:shadow-md transition">
                    <div className="text-[#0052cc]/20 text-6xl font-serif mb-4 leading-none h-10">"</div>
                    <p className="text-sm font-medium text-gray-600 mb-8 italic">"I love the flexibility. As a student, being able to log on between lectures and make some extra cash for rent is exactly what I needed."</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Marcus Wright" className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-sm">Marcus Wright</h4>
                          <p className="text-xs text-gray-500">Premier Rider (500+ Deliveries)</p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-white/60 hover:shadow-md transition">
                    <div className="text-[#0052cc]/20 text-6xl font-serif mb-4 leading-none h-10">"</div>
                    <p className="text-sm font-medium text-gray-600 mb-8 italic">"The mapping technology is lightyears ahead. I waste less time finding addresses and more time making money. It is truly kinetic."</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" alt="Elena Rodriguez" className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-sm">Elena Rodriguez</h4>
                          <p className="text-xs text-gray-500">Logistics Partner</p>
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
