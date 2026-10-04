import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import EditorPane from '../components/EditorPane';
import PreviewPane from '../components/PreviewPane';
import DesignPane from '../components/DesignPane';
import { 
  FileText, Download, User, Briefcase, GraduationCap, 
  Settings, Cloud, Eye, Menu, Wrench, Home, LogOut,
  Globe, BookOpen, Star, Folder, Palette
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('personal');
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+1 234 567 8900',
      location: 'New York, USA',
      portfolio: 'myportfolio.com',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
      title: 'Frontend Developer',
      summary: 'Passionate frontend developer with experience building modern web applications.'
    },
    experience: [
      {
        id: '1',
        company: 'Tech Corp',
        position: 'Senior Developer',
        startDate: 'Jan 2021',
        endDate: 'Present',
        description: 'Led the development of a new React-based web application.'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'State University',
        degree: 'BS Computer Science',
        startDate: 'Aug 2016',
        endDate: 'May 2020'
      }
    ],
    skills: [
      { id: '1', name: 'React.js' },
      { id: '2', name: 'Node.js' }
    ],
    languages: [],
    certifications: [],
    workshops: [],
    projects: [],
    template: 'modern',
    design: {
      font: 'sans',
      color: 'blue',
      layout: 'modern',
      headingStyle: 'solid'
    }
  });

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${resumeData.personalInfo.fullName || 'Resume'}_CV`,
  });

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const saveToCloud = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/resumes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resumeData)
      });
      if (res.ok) alert('Resume saved to MongoDB successfully!');
      else alert('Error saving resume to database.');
    } catch (e) {
      alert('Error connecting to backend API.');
    }
  };

  const navItems = [
    { id: 'personal', label: 'Personal Details', icon: User },
    { id: 'summary', label: 'Executive Summary', icon: FileText },
    { id: 'experience', label: 'Professional Experience', icon: Briefcase },
    { id: 'education', label: 'Academic Credentials', icon: GraduationCap },
    { id: 'skills', label: 'Core Competencies', icon: Wrench },
    { id: 'languages', label: 'Languages', icon: Globe },
    { id: 'certifications', label: 'Courses & Certifications', icon: BookOpen },
    { id: 'workshops', label: 'Workshops & Seminars', icon: Star },
    { id: 'projects', label: 'Academic Projects', icon: Folder },
    { id: 'design', label: 'Design & Theme', icon: Palette },
  ];

  return (
    <div className="flex h-screen bg-[#f3f6fa] dark:bg-slate-900 overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Sidebar (Navigation) */}
      <nav className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col shadow-sm z-20 transition-colors">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">
            <FileText className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">CV Nest</h1>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">Resume Builder</p>
          </div>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 shadow-sm' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <item.icon size={18} className={activeTab === item.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'} />
              <span className="font-semibold text-sm">{item.label}</span>
              {activeTab === item.id && (
                <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-8 bg-blue-600 dark:bg-blue-500 rounded-r-full" />
              )}
            </button>
          ))}
        </div>
        
        <div className="p-6 border-t border-slate-100 dark:border-slate-700 space-y-2">
          <button 
            onClick={() => document.documentElement.classList.toggle('dark')} 
            className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-semibold text-sm transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50"
          >
            Toggle Theme
          </button>
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-semibold text-sm transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50">
            <Home size={18} /> Home Page
          </Link>
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 px-4 py-2 text-rose-500 hover:text-rose-600 font-semibold text-sm transition-colors rounded-xl hover:bg-rose-50 dark:hover:bg-rose-500/10">
            <LogOut size={18} /> Log out
          </button>
        </div>
      </nav>

      {/* Center Pane: Editor */}
      <div className="flex-1 flex flex-col h-full bg-white dark:bg-slate-900 relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.03)] dark:shadow-none transition-colors">
        <header className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white capitalize flex items-center gap-2">
            {navItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex gap-3">
            <button 
              onClick={saveToCloud}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
            >
              <Cloud size={16} /> Save Data
            </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              {activeTab === 'design' ? (
                <DesignPane 
                  resumeData={resumeData} 
                  updateResumeData={updateResumeData} 
                />
              ) : (
                <EditorPane 
                  activeTab={activeTab} 
                  resumeData={resumeData} 
                  updateResumeData={updateResumeData} 
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Pane: Live Preview */}
      <div className="w-[45%] h-full bg-[#f8fafc] dark:bg-slate-800 flex flex-col relative overflow-hidden transition-colors">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/50 dark:from-blue-900/20 to-transparent pointer-events-none" />
        
        <header className="px-8 py-5 border-b border-slate-200/50 dark:border-slate-700 flex justify-between items-center bg-[#f8fafc]/80 dark:bg-slate-800/80 backdrop-blur-md z-20">
          <div className="flex items-center gap-2">
            <Eye size={18} className="text-blue-500 dark:text-blue-400" />
            <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 tracking-wide">PREVIEW</h2>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={resumeData.template} 
              onChange={(e) => updateResumeData('template', e.target.value)}
              className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-2 font-medium"
            >
              <option value="modern">Modern Layout</option>
              <option value="classic">Classic Layout</option>
              <option value="minimal">Minimal Layout</option>
              <option value="professional">Professional Layout</option>
              <option value="creative">Creative Layout</option>
              <option value="executive">Executive Layout</option>
            </select>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md shadow-blue-600/20 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              <Download size={16} />
              Export PDF
            </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-8 flex justify-center items-start">
          <div ref={componentRef} className="origin-top scale-[0.85] xl:scale-95 transition-transform">
            <PreviewPane resumeData={resumeData} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
