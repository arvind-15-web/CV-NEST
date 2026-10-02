import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, Sparkles, LayoutTemplate, PenTool, Download as DownloadIcon } from 'lucide-react';

const TemplateMockup = ({ name, title, accentClass, layout }) => (
  <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
    <div className={`h-32 ${accentClass} relative`}>
      {layout === 'split' && <div className="absolute left-0 top-0 w-1/3 h-full bg-black/10"></div>}
      <div className="absolute bottom-4 left-6">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md mb-2 flex items-center justify-center border border-white/30">
          <UserIcon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-white font-bold text-sm">{name}</h3>
        <p className="text-white/80 text-[10px] uppercase tracking-wider">{title}</p>
      </div>
    </div>
    <div className="p-6 space-y-4">
      <div className="space-y-2">
        <div className="h-2 bg-slate-100 rounded w-1/4"></div>
        <div className="h-2 bg-slate-100 rounded w-full"></div>
        <div className="h-2 bg-slate-100 rounded w-5/6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-slate-100 rounded w-1/3"></div>
        <div className="h-2 bg-slate-100 rounded w-full"></div>
        <div className="h-2 bg-slate-100 rounded w-4/6"></div>
      </div>
      <div className="pt-4 border-t border-slate-50 flex gap-2">
        <div className="h-4 w-12 bg-blue-50 rounded-full"></div>
        <div className="h-4 w-16 bg-blue-50 rounded-full"></div>
        <div className="h-4 w-10 bg-blue-50 rounded-full"></div>
      </div>
    </div>
  </div>
);

const UserIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
            <FileText className="text-white" size={20} />
          </div>
          <span className="text-2xl font-bold text-slate-800">CV Nest</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-slate-600 font-semibold hover:text-slate-900 transition-colors">Log in</Link>
          <Link to="/dashboard" className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
            Start building
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles size={16} /> Free Online Resume Builder
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
          >
            Build a <span className="text-blue-600">job-winning</span> resume for free.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-xl text-slate-600 font-medium"
          >
            <p className="flex items-center gap-3"><CheckCircle className="text-emerald-500" /> Your first resume is 100% free forever.</p>
            <p className="flex items-center gap-3"><CheckCircle className="text-emerald-500" /> Unlimited downloads. No hidden fees.</p>
            <p className="flex items-center gap-3"><CheckCircle className="text-emerald-500" /> ATS-friendly templates.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <Link to="/dashboard" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1">
              Get started for free <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-3xl opacity-20 -z-10 transform translate-x-10 translate-y-10"></div>
          <div className="bg-white p-2 rounded-[2rem] shadow-2xl border border-slate-100 transform hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" alt="Resume Preview" className="rounded-[1.5rem] w-full object-cover h-[600px] opacity-90" />
            
            <div className="absolute -left-12 top-24 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">99</div>
              <div>
                <p className="text-sm font-bold text-slate-900">ATS Score</p>
                <p className="text-xs text-slate-500">Perfectly optimized</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Choose Templates Section */}
      <section className="bg-white py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Choose from 100+ Resume Templates
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Our <Link to="/dashboard" className="text-blue-600 font-semibold underline underline-offset-4 cursor-pointer hover:text-blue-800 transition-colors">free resume templates</Link> help you create a professional resume that stands out.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TemplateMockup name="Daniel Mercer" title="VP of Sales" accentClass="bg-slate-900" layout="standard" />
            <TemplateMockup name="Lena Hoffmann" title="Operations Manager" accentClass="bg-emerald-800" layout="standard" />
            <TemplateMockup name="Matteo Ricci" title="Head of Operations" accentClass="bg-blue-800" layout="split" />
            <TemplateMockup name="Yassine Ben" title="Sales Manager" accentClass="bg-teal-900" layout="split" />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-slate-50 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Create a professional resume in minutes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              CV Nest makes it easy to create and edit your resume. Here's how it works:
            </motion.p>
          </div>

          <div className="space-y-40">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col gap-6">
                  <div className="flex gap-4 border-b border-slate-100 pb-4 overflow-x-auto">
                    <div className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold whitespace-nowrap">All Templates</div>
                    <div className="px-4 py-2 text-slate-500 rounded-full text-sm font-bold whitespace-nowrap border border-slate-200">Simple</div>
                    <div className="px-4 py-2 text-slate-500 rounded-full text-sm font-bold whitespace-nowrap border border-slate-200">Modern</div>
                    <div className="px-4 py-2 text-slate-500 rounded-full text-sm font-bold whitespace-nowrap border border-slate-200">Creative</div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="h-64 bg-slate-50 rounded-xl border-2 border-blue-500 shadow-lg shadow-blue-500/20 relative overflow-hidden">
                      <div className="h-16 bg-blue-900 w-full"></div>
                      <div className="p-4 space-y-2"><div className="h-2 w-3/4 bg-slate-200 rounded"></div><div className="h-2 w-full bg-slate-200 rounded"></div></div>
                      <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1"><CheckCircle size={16}/></div>
                    </div>
                    <div className="h-64 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                       <div className="h-16 bg-emerald-800 w-full"></div>
                       <div className="p-4 space-y-2"><div className="h-2 w-3/4 bg-slate-200 rounded"></div><div className="h-2 w-full bg-slate-200 rounded"></div></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">1. Choose a template</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Select one of CV Nest's professionally designed resume templates or design your own resume template and save it.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 relative">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                      <div className="h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 flex items-center">
                        <span className="text-slate-700 font-medium">John Doe</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Professional Title</label>
                      <div className="h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 flex items-center">
                        <span className="text-slate-700 font-medium">Regional Sales Manager</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                      <div className="h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 flex items-center">
                        <span className="text-slate-700 font-medium">john.doe@domain.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Photo Element */}
                  <div className="absolute top-12 right-12 text-center">
                    <label className="text-xs font-bold text-slate-400 uppercase block mb-2">Photo</label>
                    <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">2. Add your experience</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Fill your resume with content. We'll guide you along the way. You can also preview your progress in real-time as you type.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col gap-8">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">Columns</label>
                    <div className="flex gap-4">
                      <div className="flex-1 py-4 border-2 border-blue-500 rounded-xl flex flex-col items-center justify-center gap-2 bg-blue-50/50">
                         <div className="w-8 h-1 bg-blue-500 rounded"></div>
                         <div className="w-8 h-1 bg-blue-500 rounded"></div>
                         <div className="w-8 h-1 bg-blue-500 rounded"></div>
                         <span className="text-xs font-bold text-blue-700 mt-2">One</span>
                      </div>
                      <div className="flex-1 py-4 border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 opacity-50">
                         <div className="flex gap-1 w-8"><div className="w-1/2 h-1 bg-slate-400 rounded"></div><div className="w-1/2 h-1 bg-slate-400 rounded"></div></div>
                         <div className="flex gap-1 w-8"><div className="w-1/2 h-1 bg-slate-400 rounded"></div><div className="w-1/2 h-1 bg-slate-400 rounded"></div></div>
                         <div className="flex gap-1 w-8"><div className="w-1/2 h-1 bg-slate-400 rounded"></div><div className="w-1/2 h-1 bg-slate-400 rounded"></div></div>
                         <span className="text-xs font-bold text-slate-500 mt-2">Two</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">Subtitle style</label>
                    <div className="flex gap-4">
                      <div className="flex-1 py-3 border border-slate-200 rounded-xl text-center text-sm font-medium text-slate-600">Normal</div>
                      <div className="flex-1 py-3 border border-slate-200 rounded-xl text-center text-sm font-bold text-slate-600">Bold</div>
                      <div className="flex-1 py-3 border-2 border-blue-500 rounded-xl text-center text-sm italic text-blue-700 bg-blue-50/50">Italic</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">3. Customize layout & design</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Adjust layout and design until your resume feels like you. CV Nest gives you full control while keeping things incredibly easy.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 relative"
              >
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex gap-4 h-80 overflow-hidden relative">
                  <div className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl transform -rotate-6 translate-y-4 shadow-lg p-2">
                     <div className="w-full h-8 bg-slate-200 rounded mb-4"></div>
                     <div className="space-y-2"><div className="h-1 bg-slate-200 rounded"></div><div className="h-1 bg-slate-200 rounded"></div></div>
                  </div>
                  <div className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl transform -translate-y-2 shadow-2xl z-10 p-2 border-t-4 border-t-blue-500">
                     <div className="w-full h-8 bg-slate-200 rounded mb-4 flex items-center justify-center"><UserIcon className="w-4 h-4 text-slate-400" /></div>
                     <div className="space-y-2"><div className="h-1.5 bg-slate-300 rounded w-3/4 mx-auto"></div><div className="h-1 bg-slate-200 rounded w-1/2 mx-auto"></div></div>
                  </div>
                  <div className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl transform rotate-6 translate-y-8 shadow-lg p-2">
                     <div className="w-full h-8 bg-slate-200 rounded mb-4"></div>
                     <div className="space-y-2"><div className="h-1 bg-slate-200 rounded"></div><div className="h-1 bg-slate-200 rounded"></div></div>
                  </div>
                  
                  {/* Floating success toast */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-3 w-max z-20">
                    <div className="bg-emerald-500 text-white rounded p-1"><CheckCircle size={18} /></div>
                    <span className="font-bold text-slate-800">Resume successfully downloaded</span>
                  </div>
                </div>
              </motion.div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">4. Download unlimited PDFs</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Your resume draft is automatically saved in your account. Update and download unlimited PDFs whenever you need.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
