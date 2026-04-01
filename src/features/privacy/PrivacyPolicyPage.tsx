import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { title: "Introduction", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "1. Data Collection", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { title: "2. Use of Data", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "3. Data Sharing", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
    { title: "4. Security", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
    { title: "5. Cookies Policy", icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M11 7a2 2 0 100-4 2 2 0 000 4z M5.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M16.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M11 19a2 2 0 100-4 2 2 0 000 4z" }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
            <span className="bg-blue-100/50 text-[#0052cc] text-xs font-bold px-3 py-1 rounded-full border border-blue-200/50 uppercase tracking-widest">LEGAL & COMPLIANCE</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-4">Privacy Policy</h1>
            <p className="text-gray-500 font-medium">Last Updated: October 24, 2023 • Version: 2.4.0</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start relative">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 shrink-0 top-24 sticky hidden md:block border-r border-gray-100 pr-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">TABLE OF CONTENTS</div>
                <ul className="space-y-1">
                   {tabs.map((tab, idx) => (
                      <li key={idx}>
                         <button 
                            onClick={() => setActiveTab(idx)}
                            className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                               activeTab === idx 
                               ? 'bg-[#6b99fb] text-white shadow-md shadow-blue-500/20' 
                               : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                         >
                            <svg className={`w-4 h-4 ${activeTab === idx ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={tab.icon}></path></svg>
                            {tab.title}
                         </button>
                      </li>
                   ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex-1 max-w-3xl border border-gray-100 bg-white shadow-sm p-8 md:p-12 rounded-3xl text-sm leading-relaxed text-gray-600">
               <p className="mb-6 text-base">
                 Welcome to The Kinetic Concierge. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our high-speed logistics and culinary delivery platform.
               </p>
               <p className="mb-10">
                 By accessing or using our Services, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please do not access or use our Services. We may update this policy from time to time, and we will notify you of any changes by posting the new policy on this page.
               </p>

               <h2 className="text-2xl font-extrabold text-gray-900 mb-6">1. Collection of Data</h2>
               <p className="mb-6">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
               
               <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <div className="flex items-center gap-2 mb-3 text-[#0052cc]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        <h4 className="font-bold text-gray-900">Personal Data</h4>
                     </div>
                     <p className="text-xs">Email address, first name and last name, phone number, and delivery address.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <div className="flex items-center gap-2 mb-3 text-[#0052cc]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                        <h4 className="font-bold text-gray-900">Usage & Location</h4>
                     </div>
                     <p className="text-xs">Real-time GPS location data of your delivery or driver status, and IP addresses.</p>
                  </div>
               </div>

               <p className="mb-12">
                  We also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address, browser type, and the pages of our Service that you visit.
               </p>


               <h2 className="text-2xl font-extrabold text-gray-900 mb-6">2. Use of Data</h2>
               <p className="mb-6">The Kinetic Concierge uses the collected data for various purposes:</p>
               <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-3">
                     <div className="w-5 h-5 bg-blue-100 text-[#0052cc] rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
                     <span className="text-gray-700">To provide and maintain our Service, including monitoring the usage of our Service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <div className="w-5 h-5 bg-blue-100 text-[#0052cc] rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
                     <span className="text-gray-700">To notify you about changes to our Service and provide customer support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <div className="w-5 h-5 bg-blue-100 text-[#0052cc] rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
                     <span className="text-gray-700">To allow you to participate in interactive features of our Service when you choose to do so.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <div className="w-5 h-5 bg-blue-100 text-[#0052cc] rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
                     <span className="text-gray-700">To gather analysis or valuable information so that we can improve our Service.</span>
                  </li>
               </ul>

               <h2 className="text-2xl font-extrabold text-gray-900 mb-6">3. Disclosure of Data</h2>
               <p className="mb-6">We may disclose your personal information in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of The Kinetic Concierge, or protect the personal safety of users of the Service or the public.</p>
               
               <div className="mb-12 h-48 w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-inner flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-blue-900/10"></div>
                   <div className="text-[#0052cc]/20 grid grid-cols-6 gap-2 opacity-50 absolute inset-0 text-xs overflow-hidden font-mono p-4 break-all">
                       01100100 01100001 01110100 01100001 01110000 01110010 01101001 01110110 01100001 01100011 01111001 00110001 00110000 00110001
                       01100011 01111001 01110011 01100101 01100011 01110101 01110010 01101001 01110100 01111001 01110000 01110010 01101111
                   </div>
                   <svg className="w-20 h-20 text-[#0052cc]/80 drop-shadow-lg z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 01.567-3.677A2.001 2.001 0 0114 16a1.99 1.99 0 01-1 1.723z"></path></svg>
               </div>


               <h2 className="text-2xl font-extrabold text-gray-900 mb-6">4. Security of Data</h2>
               <p className="mb-6">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
               <p className="mb-12">Our infrastructure utilizes state-of-the-art encryption protocols (AES-256) and frequent security audits to ensure that your "Kinetic" experience remains as safe as it is fast.</p>

               <h2 className="text-2xl font-extrabold text-gray-900 mb-6">5. Cookies and Tracking</h2>
               <p className="mb-6">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.</p>
               <p className="mb-12">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

               
               {/* Contact Block */}
               <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <h4 className="font-extrabold text-gray-900">Still have questions?</h4>
                    <p className="text-xs text-gray-500">Our legal team is available for clarification on any policy points.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-blue-100 text-[#0052cc] px-6 py-2.5 rounded-xl font-bold hover:bg-blue-200 transition">Contact Support</button>
                    <button className="text-[#0052cc] px-6 py-2.5 font-bold hover:bg-gray-50 rounded-xl transition flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                       Download PDF
                    </button>
                  </div>
               </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
