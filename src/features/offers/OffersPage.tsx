import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
           <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Curated Savings</h1>
              <p className="text-gray-500 font-medium text-sm">Premium culinary experiences, delivered with precision and exceptional value.</p>
           </div>
           
           <div className="flex bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
              <button className="bg-white shadow-sm rounded-full text-gray-900 px-6 py-2 text-sm font-bold">For You</button>
              <button className="text-gray-500 px-6 py-2 text-sm font-medium hover:text-gray-900 transition">Near You</button>
              <button className="text-gray-500 px-6 py-2 text-sm font-medium hover:text-gray-900 transition">Free Delivery</button>
           </div>
        </div>

        {/* Hero Banners Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
            
            {/* Primary Promo */}
            <div className="lg:col-span-2 relative bg-gray-900 rounded-[32px] overflow-hidden shadow-md flex items-center min-h-[280px]">
               <img src="https://images.unsplash.com/photo-1555507036-ab1d4075cbf3?q=80&w=1000&auto=format&fit=crop" alt="Gourmet food selection" className="absolute inset-0 w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#003d99]/90 to-[#0052cc]/40"></div>
               
               <div className="relative z-10 p-10 md:p-12 max-w-md">
                  <span className="bg-pink-500 text-white text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-md mb-6 inline-block">LIMITED OFFER</span>
                  <h2 className="text-4xl font-extrabold text-white mb-4">Epicurean Week</h2>
                  <p className="text-blue-100 mb-8 font-medium text-sm">Enjoy 50% OFF at all signature Michelin-star partners this weekend.</p>
                  <button className="bg-[#0052cc] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg">
                     Claim Master Voucher
                  </button>
               </div>
            </div>

            {/* Loyalty/Status Card */}
            <div className="bg-gradient-to-br from-[#c4d2ff] to-[#e4eaff] rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between border border-white min-h-[280px]">
               <div>
                  <h3 className="text-xl font-extrabold text-[#003d99] mb-2">Kinetic Gold Status</h3>
                  <p className="text-xs text-blue-900/70 font-medium">Your exclusive pass to unlimited free delivery across all elite restaurants.</p>
               </div>
               
               <div className="mt-8">
                  <div className="text-3xl font-extrabold text-[#003d99] mb-4">FREE <span className="text-xs font-bold text-blue-900/50 uppercase tracking-widest block mt-1">First 30 days</span></div>
                  <button className="w-full bg-[#1e40af] text-white py-3.5 rounded-xl font-bold shadow-md hover:bg-[#1e3a8a] transition">
                     Upgrade Now
                  </button>
               </div>
            </div>
        </div>

        {/* Active Vouchers Section */}
        <div className="mb-14">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                 <span className="w-3 h-3 bg-[#0052cc] rounded-sm inline-block"></span> Active Vouchers
              </h3>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               
               {/* Voucher 1 */}
               <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                  <div className="bg-[#5c7cfa] text-white h-24 flex flex-col items-center justify-center relative shadow-inner">
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                     <span className="text-2xl font-extrabold relative z-10">50k OFF</span>
                     <span className="text-[10px] tracking-widest opacity-80 font-medium relative z-10 uppercase">Premium Order Only</span>
                  </div>
                  <div className="p-6">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052cc] font-bold text-xs flex items-center justify-center border border-blue-100">AG</div>
                        <div>
                           <div className="font-extrabold text-sm text-gray-900 line-clamp-1">Azure Gusto Elite</div>
                           <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Continental Cuisine</div>
                        </div>
                     </div>
                     <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-4">
                        <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Ends in 2 days</div>
                        <button className="bg-[#0052cc] text-white px-5 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-blue-700">Collect</button>
                     </div>
                  </div>
               </div>

               {/* Voucher 2 */}
               <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                  <div className="bg-[#ff922b] text-white h-24 flex flex-col items-center justify-center relative shadow-inner">
                     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
                     <span className="text-2xl font-extrabold relative z-10">30% OFF</span>
                     <span className="text-[10px] tracking-widest opacity-80 font-medium relative z-10 uppercase">Up to 100k discount</span>
                  </div>
                  <div className="p-6">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 font-bold text-xs flex items-center justify-center border border-orange-100">VP</div>
                        <div>
                           <div className="font-extrabold text-sm text-gray-900 line-clamp-1">Veloce Pizza</div>
                           <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Italian Fast</div>
                        </div>
                     </div>
                     <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-4">
                        <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-red-500">Expires Today</span></div>
                        <button className="bg-[#0052cc] text-white px-5 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-blue-700">Collect</button>
                     </div>
                  </div>
               </div>

               {/* Voucher 3 */}
               <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                  <div className="bg-[#cc5de8] text-white h-24 flex flex-col items-center justify-center relative shadow-inner">
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                     <span className="text-2xl font-extrabold relative z-10">FREE DELIV</span>
                     <span className="text-[10px] tracking-widest opacity-90 font-medium relative z-10 uppercase">No Min Value Req</span>
                  </div>
                  <div className="p-6">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 font-bold text-xs flex items-center justify-center border border-pink-100">YN</div>
                        <div>
                           <div className="font-extrabold text-sm text-gray-900 line-clamp-1">Yuzu Noodles</div>
                           <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Pan-Asian Soul</div>
                        </div>
                     </div>
                     <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-4">
                        <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Valid for 5h</div>
                        <button className="bg-gray-800 text-white px-5 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-black">Use</button>
                     </div>
                  </div>
               </div>

               {/* Voucher 4 */}
               <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                  <div className="bg-[#20c997] text-white h-24 flex flex-col items-center justify-center relative shadow-inner">
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                     <span className="text-2xl font-extrabold relative z-10">100k OFF</span>
                     <span className="text-[10px] tracking-widest opacity-80 font-medium relative z-10 uppercase">First Premium Order</span>
                  </div>
                  <div className="p-6">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-teal-50 text-[#20c997] font-bold text-xs flex items-center justify-center border border-teal-100">KC</div>
                        <div>
                           <div className="font-extrabold text-sm text-gray-900 line-clamp-1">Concierge Choice</div>
                           <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Exclusive Selection</div>
                        </div>
                     </div>
                     <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-4">
                        <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Ends in 12 days</div>
                        <button className="bg-[#0052cc] text-white px-5 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-blue-700">Collect</button>
                     </div>
                  </div>
               </div>

               {/* Voucher BOGO */}
               <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                  <div className="bg-[#f06595] text-white h-24 flex flex-col items-center justify-center relative shadow-inner">
                     <span className="text-2xl font-extrabold relative z-10">BOGO</span>
                     <span className="text-[10px] tracking-widest opacity-80 font-medium relative z-10 uppercase">Buy One Get One Free</span>
                  </div>
                  <div className="p-6">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-700 font-bold text-xs flex items-center justify-center border border-pink-100">SK</div>
                        <div>
                           <div className="font-extrabold text-sm text-gray-900 line-clamp-1">Sakura Kitchen</div>
                           <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Traditional Japanese</div>
                        </div>
                     </div>
                     <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-4">
                        <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Ends Tomorrow</div>
                        <button className="bg-[#0052cc] text-white px-5 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-blue-700">Collect</button>
                     </div>
                  </div>
               </div>

               {/* Voucher Expired */}
               <div className="bg-gray-50 rounded-[24px] shadow-none border border-gray-200 overflow-hidden opacity-70">
                  <div className="bg-gray-200 text-gray-500 h-24 flex flex-col items-center justify-center relative border-b border-gray-200">
                     <span className="text-2xl font-extrabold relative z-10">EXPIRED</span>
                     <span className="text-[10px] tracking-widest opacity-80 font-medium relative z-10 uppercase">Seasonal Bonus</span>
                  </div>
                  <div className="p-6">
                     <div className="flex items-center gap-3 mb-6 filter grayscale opacity-60">
                        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 font-bold text-xs flex items-center justify-center">BS</div>
                        <div>
                           <div className="font-extrabold text-sm text-gray-900 line-clamp-1">Burger Station</div>
                           <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">American Grill</div>
                        </div>
                     </div>
                     <div className="flex justify-between items-center mt-auto border-t border-gray-200 pt-4">
                        <div className="text-xs text-red-500/60 font-medium flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Inactive</div>
                        <button className="bg-gray-200 text-gray-400 px-5 py-1.5 rounded-lg text-xs font-bold cursor-not-allowed">Claimed</button>
                     </div>
                  </div>
               </div>

           </div>
        </div>

        {/* Hyper-Local Rewards */}
        <div>
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                 <svg className="w-5 h-5 text-[#0052cc]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                 Hyper-Local Rewards
              </h3>
              <button className="text-sm font-bold text-[#0052cc] hover:underline">View Map View</button>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-5 flex gap-5 items-center hover:shadow-md transition">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                     <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop" alt="Burger" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <span className="text-[#0052cc] text-[10px] font-bold uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded mb-1.5 inline-block">0.3 miles away</span>
                     <h4 className="font-extrabold text-gray-900 text-lg mb-1">Steakhouse Royale</h4>
                     <p className="text-xs text-gray-500 font-medium mb-3">Receive a complimentary signature truffle fries with any order over 200k.</p>
                     <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-200 transition">Claim Reward</button>
                  </div>
               </div>

               <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-5 flex gap-5 items-center hover:shadow-md transition">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                     <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" alt="Salad" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <span className="text-[#0052cc] text-[10px] font-bold uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded mb-1.5 inline-block">1.2 miles away</span>
                     <h4 className="font-extrabold text-gray-900 text-lg mb-1">Green Leaf Cafe</h4>
                     <p className="text-xs text-gray-500 font-medium mb-3">Healthy Morning: 25% OFF all fresh juices and acai bowls before 11:00 AM.</p>
                     <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-200 transition">Claim Reward</button>
                  </div>
               </div>
           </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
