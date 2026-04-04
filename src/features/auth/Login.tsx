import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/authSlice';
import { supabase } from '../../services/supabaseClient';



import srcAnhGa from '../../assets/Galogin.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      // 1. Sign in with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (authError) throw authError;

      const session = authData.session;
      const authUser = authData.user;

      if (!session) throw new Error("No session created");

      // 2. Fetch additional profile info from public.users (role, fullname)
      const { data: profile, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();
      
      // If no profile found in public.users, we use a default role
      const userPayload = {
        id: authUser.id,
        email: authUser.email,
        fullName: profile?.fullname || authUser.user_metadata?.full_name || 'User',
        role: profile?.role || 'CUSTOMER',
        avatarUrl: profile?.avatarurl || authUser.user_metadata?.avatar_url
      };


      dispatch(loginSuccess({ 
        user: userPayload, 
        token: session.access_token 
      }));
      
      // Navigate based on Role
      if (userPayload.role === 'ADMIN') navigate('/admin/dashboard');
      else if (userPayload.role === 'MERCHANT') navigate('/merchant/dashboard');
      else if (userPayload.role === 'DRIVER') navigate('/driver/dashboard');
      else navigate('/'); // CUSTOMER
      
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 relative flex flex-col justify-center">
          <div className="absolute top-8 left-8">
            <h1 className="text-blue-600 font-bold text-xl tracking-tight">Culinary Flow</h1>
          </div>
          
          <div className="mt-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm">
              Azure Gusto Experience
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
              Seamlessly guiding your <span className="text-blue-600 italic">culinary journey.</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm font-medium leading-relaxed">
              Join our network of premium food experiences. Precision delivery meets editorial taste.
            </p>
          </div>
          
          {/* Decorative image placeholder (would use real URL) */}
          <div className="w-4/5 h-48 rounded-2xl shadow-2xl mt-auto ml-auto -mr-8 -mb-4 overflow-hidden relative border-[6px] border-white">
            <img src={srcAnhGa} alt="anhga" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <div className="absolute top-8 right-8 cursor-pointer text-gray-400 hover:text-gray-600 transition">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>

          <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h3>
          <p className="text-gray-500 mb-8 font-medium">Log in to your Culinary Flow account</p>

          {error && <div className="mb-4 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 font-medium transition-shadow"
                  placeholder="name@example.com"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-sm text-blue-600 font-bold hover:text-blue-700 transition">Forgot password?</Link>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 font-medium transition-shadow"
                  placeholder="••••••••"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM12 7a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 text-blue-600 bg-gray-50 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="remember" className="ml-3 text-sm font-bold text-gray-600">Remember me for 30 days</label>
            </div>

            <button type="submit" className="w-full bg-[#0052cc] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transform transition-all flex justify-center items-center gap-2">
              Login
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>

          <div className="mt-8 relative flex items-center justify-center">
            <hr className="w-full border-gray-200" />
            <span className="absolute bg-white px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 font-bold text-gray-700 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> 
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 font-bold text-gray-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.76 1.54-.05 2.81.65 3.54 1.76-3.1 1.83-2.6 5.92.4 7.06-.7 1.75-1.57 3.36-2.6 4.11zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              Apple
            </button>
          </div>

          <p className="mt-8 text-center text-[15px] text-gray-600 font-bold">
            Don't have an account? <Link to="/register" className="text-[#0052cc] hover:underline transition">Sign up for free</Link>
          </p>

        </div>
      </div>
    </div>
  );
}
