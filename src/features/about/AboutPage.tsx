import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 w-full mx-auto">
        
        {/* About Hero Section */}
        <div className="bg-white px-6 py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
            <div className="md:w-[45%]">
               <span className="bg-pink-100 text-pink-600 text-[10px] font-extrabold px-3 py-1.5 rounded-md uppercase tracking-widest mb-6 inline-block">Connecting Flavors</span>
               <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                 The Soul of the <br/> <span className="text-[#0052cc] italic">City's Kitchen</span>.
               </h1>
               <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed font-medium">
                 Connecting you with the best kitchens in the city. Faster delivery, better taste, and a frictionless glide from chef to table.
               </p>
               <div className="flex gap-4">
                  <button className="bg-[#0052cc] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">
                    Explore Partners
                  </button>
                  <button className="bg-white border-2 border-gray-100 text-gray-600 px-8 py-3.5 rounded-xl font-bold hover:border-gray-300 transition">
                    Read Our Story
                  </button>
               </div>
            </div>
            
            <div className="md:w-[55%] relative">
               <div className="grid grid-cols-2 gap-4 relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-8 border-white transform -rotate-3 z-10">
                     <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop" alt="Chef plating" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl h-[280px] border-8 border-white self-end transform rotate-2 -ml-16 z-20">
                     <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop" alt="Delicious dish" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start">
                    <div className="text-[#0052cc] mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
                    </div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-1">1,200+</div>
                    <div className="text-gray-500 font-medium text-sm">Culinary Partners</div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start">
                    <div className="text-purple-600 mb-4">
                       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-1">450k+</div>
                    <div className="text-gray-500 font-medium text-sm">Active Foodies</div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start">
                    <div className="text-teal-500 mb-4">
                       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-1">24</div>
                    <div className="text-gray-500 font-medium text-sm">Cities Covered</div>
                </div>
            </div>
        </div>

        {/* Mission Statement */}
        <div className="px-6 py-20 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
               Our Mission is <span className="text-[#0052cc]">Kinetic</span>.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
               We believe delivery shouldn't just be about speed; it should be about the <strong className="text-gray-900 border-b border-gray-200 pb-1">preservation of quality</strong>. The Kinetic Concierge was born from a desire to bridge the gap between high-end culinary artistry and the convenience of your doorstep.
            </p>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="lg:w-1/2 flex items-stretch gap-4 w-full h-[500px]">
                 <div className="w-1/2 flex flex-col gap-4">
                    <div className="h-1/2 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                       <img src="https://images.unsplash.com/photo-1542646696-1216503c80e1?q=80&w=500&auto=format&fit=crop" alt="Biker night" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-1/2 rounded-3xl bg-[#0052cc] text-white p-8 flex items-center justify-center shadow-lg transform -rotate-2">
                       <p className="font-serif italic font-medium text-lg text-center leading-relaxed">"Better taste, faster pace."</p>
                    </div>
                 </div>
                 <div className="w-1/2 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500&auto=format&fit=crop" alt="Restaurant spread" className="w-full h-full object-cover" />
                 </div>
              </div>

              <div className="lg:w-1/2">
                 <h2 className="text-3xl font-extrabold text-gray-900 mb-6">The Kinetic Story</h2>
                 <p className="text-gray-500 mb-6 font-medium leading-relaxed text-sm">
                    It started in a small kitchen in downtown Seattle. We saw amazing food losing its magic in standard delivery boxes. We reimagined the logistics—creating a "Concierge" system that treats every order like a masterpiece.
                 </p>
                 <p className="text-gray-500 mb-10 font-medium leading-relaxed text-sm">
                    Today, we partner with the city's most prestigious culinary experts and the fastest, most professional riders to ensure your meal arrives exactly as the chef intended: vibrant, hot, and perfectly presented.
                 </p>

                 <div className="space-y-6">
                    <div className="flex gap-5">
                       <div className="w-10 h-10 bg-blue-100 text-[#0052cc] rounded-xl flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                       </div>
                       <div>
                          <h4 className="font-extrabold text-gray-900 mb-1">Premium Quality Guaranteed</h4>
                          <p className="text-xs text-gray-500">Only top-rated kitchens make our list.</p>
                       </div>
                    </div>
                    <div className="flex gap-5">
                       <div className="w-10 h-10 bg-blue-100 text-[#0052cc] rounded-xl flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                       </div>
                       <div>
                          <h4 className="font-extrabold text-gray-900 mb-1">Kinetic Routing Technology</h4>
                          <p className="text-xs text-gray-500">Intelligent paths for 20% faster delivery.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* CTA Banner */}
        <div className="max-w-7xl mx-auto px-6 py-20">
           <div className="bg-[#0f172a] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
                 Ready to experience the flow?
              </h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
                 Join thousands of others who have upgraded their dining experience with The Kinetic Concierge.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                 <button className="bg-[#0052cc] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition">
                    Get Started Now
                 </button>
                 <button className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition backdrop-blur-sm border border-white/10">
                    Become a Partner
                 </button>
              </div>
           </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
