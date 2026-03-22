import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="md:w-1/2 p-8 md:p-12 bg-[#0052cc] text-white relative flex flex-col justify-center overflow-hidden">
          <div className="absolute top-8 left-8">
            <h1 className="font-bold text-xl tracking-tight">Culinary Flow</h1>
          </div>
          
          <div className="mt-12 z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Back to your culinary journey
            </h2>
            <p className="text-blue-100 mb-10 font-medium leading-relaxed text-lg">
              Don't let a forgotten password interrupt your flow. We'll get you back to managing your kitchen in no time.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                 <div className="bg-white/20 p-2.5 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM12 7a4 4 0 100 8 4 4 0 000-8z"></path></svg>
                 </div>
                 <span className="font-bold">Secure Recovery Process</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                 <div className="bg-white/20 p-2.5 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                 </div>
                 <span className="font-bold">Instant Link Delivery</span>
              </div>
            </div>
          </div>
          
          {/* Decorative shapes to mimic the image abstractly */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-12 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col pt-12">
          <Link to="/login" className="flex items-center gap-2 text-sm font-bold text-[#0052cc] hover:underline w-max mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Login
          </Link>

          <h3 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Forgot Password?</h3>
          <p className="text-gray-500 mb-8 font-medium leading-relaxed">
            Enter the email associated with your account and we'll send you a recovery link.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#0052cc] text-gray-900 placeholder-gray-400 font-medium transition-shadow"
                  placeholder="chef@culinaryflow.com"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>

            <button type="button" className="w-full bg-[#0052cc] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transform transition-all flex justify-center items-center gap-2">
              Send Reset Link
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>

          <div className="mt-8 bg-gray-100 rounded-2xl p-5 flex gap-4 items-start">
             <div className="bg-[#0052cc] text-white rounded-full p-1 mt-0.5 shrink-0">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
             </div>
             <div>
               <h4 className="font-bold text-gray-900 text-sm mb-1">Checking your inbox</h4>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">If you don't receive an email within 5 minutes, please check your spam folder or try another email address.</p>
             </div>
          </div>

          <div className="mt-auto pt-10">
             <p className="text-xs text-gray-400 font-medium">© 2024 Culinary Flow Logistics. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
