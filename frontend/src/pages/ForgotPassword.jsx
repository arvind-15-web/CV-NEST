import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, ArrowLeft, Send } from 'lucide-react';

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    setEmailSent(true);
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50/50 -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
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

        {emailSent ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Check your email</h2>
            <p className="text-slate-500 font-medium pb-4">
              We've sent password reset instructions to your email address.
            </p>
            <p className="text-sm text-slate-400">Redirecting to login...</p>
          </motion.div>
        ) : (
          <motion.div>
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">Reset Password</h2>
            <p className="text-slate-500 text-center mb-8 font-medium">Enter your email and we'll send you a reset link.</p>

            <form onSubmit={handleReset} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm placeholder:text-slate-400 font-medium"
                  placeholder="you@example.com"
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 mt-4"
              >
                Send Reset Link
              </button>
            </form>
          </motion.div>
        )}

        <div className="mt-8 text-center">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowLeft size={16} /> Back to login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
