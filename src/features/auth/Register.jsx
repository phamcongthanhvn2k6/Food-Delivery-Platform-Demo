import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function Register() {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/auth/register', formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
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
              Join Our Network
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
              Start your <span className="text-blue-600 italic">culinary journey.</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm font-medium leading-relaxed">
              Create an account to manage your kitchen, explore offers, and coordinate deliveries.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Sign Up</h3>
          <p className="text-gray-500 mb-6 font-medium">Create your Culinary Flow account</p>

          {error && <div className="mb-4 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" name="fullName"
                value={formData.fullName} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
                placeholder="John Doe" required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" name="email"
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
                placeholder="name@example.com" required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input 
                type="password" name="password"
                value={formData.password} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
                placeholder="••••••••" required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Select Role</label>
              <select 
                name="role" value={formData.role} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="shipper">Shipper</option>
                <option value="restaurant_owner">Restaurant Owner</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-[#0052cc] mt-4 text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-blue-700 hover:-translate-y-0.5 transform transition flex justify-center items-center gap-2">
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-[15px] text-gray-600 font-bold">
            Already have an account? <Link to="/login" className="text-[#0052cc] hover:underline transition">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
