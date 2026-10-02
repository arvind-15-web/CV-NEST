import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50/50 -z-10" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100"
      >
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
              <FileText className="text-white" size={24} />
            </div>
            <span className="text-3xl font-bold text-slate-800">CV Nest</span>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 text-center mb-2 flex items-center justify-center gap-2">
          Welcome back <span className="text-2xl animate-wave origin-bottom-right inline-block">👋</span>
        </h2>
        <p className="text-slate-500 text-center mb-8 font-medium">Log in to continue building your resume.</p>

        <button 
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-[15px] hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm mb-6"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">or sign in with email</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-600 uppercase tracking-wide">Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm placeholder:text-slate-400 font-medium"
              placeholder="you@example.com"
            />
          </div>
          
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-600 uppercase tracking-wide">Password</label>
              <Link to="/forgot-password" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">Forgot?</Link>
            </div>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm placeholder:text-slate-400 font-medium"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 mt-4"
          >
            Sign in <ArrowRight size={20} />
          </button>
        </form>

        <p className="text-center text-slate-500 font-medium mt-8">
          Don't have an account? <Link to="/" className="text-blue-600 font-bold hover:text-blue-700 transition-colors">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
