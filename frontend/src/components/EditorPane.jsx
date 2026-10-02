import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, GripVertical } from 'lucide-react';

const InputField = ({ label, type = "text", ...props }) => (
  <div className="space-y-1.5 w-full">
    <label className="text-[13px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</label>
    {type === "textarea" ? (
      <textarea 
        {...props}
        className="w-full px-4 py-3 bg-[#f8fafc] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all resize-none shadow-sm placeholder:text-slate-400 text-slate-800 dark:text-slate-100"
      />
    ) : (
      <input 
        type={type} 
        {...props}
        className="w-full px-4 py-3 bg-[#f8fafc] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm placeholder:text-slate-400 text-slate-800 dark:text-slate-100"
      />
    )}
  </div>
);

const EditorPane = ({ activeTab, resumeData, updateResumeData }) => {
  
  const handlePersonalInfo = (e) => {
    updateResumeData('personalInfo', { ...resumeData.personalInfo, [e.target.name]: e.target.value });
  };

  const addItem = (section, defaultObj) => {
    updateResumeData(section, [
      ...resumeData[section], 
      { id: Date.now().toString(), ...defaultObj }
    ]);
  };

  const updateItem = (section, id, field, value) => {
    updateResumeData(section, resumeData[section].map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const removeItem = (section, id) => {
    updateResumeData(section, resumeData[section].filter(item => item.id !== id));
  };

  if (activeTab === 'personal') {
    return (
      <div className="space-y-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Enter your personal details to display at the top of your resume.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" name="fullName" value={resumeData.personalInfo.fullName} onChange={handlePersonalInfo} placeholder="e.g. John Doe" />
          <InputField label="Professional Title" name="title" value={resumeData.personalInfo.title} onChange={handlePersonalInfo} placeholder="e.g. Software Engineer" />
          <InputField label="Email Address" type="email" name="email" value={resumeData.personalInfo.email} onChange={handlePersonalInfo} placeholder="e.g. john@example.com" />
          <InputField label="Phone Number" type="tel" name="phone" value={resumeData.personalInfo.phone} onChange={handlePersonalInfo} placeholder="e.g. +1 234 567 890" />
          <InputField label="Location" name="location" value={resumeData.personalInfo.location} onChange={handlePersonalInfo} placeholder="e.g. San Francisco, CA" />
          <InputField label="Portfolio URL" name="portfolio" value={resumeData.personalInfo.portfolio} onChange={handlePersonalInfo} placeholder="e.g. myportfolio.com" />
          <InputField label="LinkedIn" name="linkedin" value={resumeData.personalInfo.linkedin} onChange={handlePersonalInfo} placeholder="e.g. linkedin.com/in/johndoe" />
          <InputField label="GitHub" name="github" value={resumeData.personalInfo.github} onChange={handlePersonalInfo} placeholder="e.g. github.com/johndoe" />
        </div>
      </div>
    );
  }

  if (activeTab === 'summary') {
    return (
      <div className="space-y-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Write a brief executive summary of your career and skills.</p>
        <InputField type="textarea" label="Executive Summary" name="summary" value={resumeData.personalInfo.summary} onChange={handlePersonalInfo} rows="8" placeholder="Brief overview of your career..." />
      </div>
    );
  }

  if (activeTab === 'experience') {
    return (
      <div className="space-y-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">List your professional experience, starting with the most recent.</p>
        
        <div className="space-y-6">
          <AnimatePresence>
            {resumeData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, height: 0 }}
                className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm group hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
              >
                <div className="absolute top-4 left-4 cursor-move text-slate-300 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <GripVertical size={20} />
                </div>
                <div className="absolute top-4 right-4">
                  <button onClick={() => removeItem('experience', exp.id)} className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <h3 className="text-[13px] font-bold text-slate-400 mb-5 uppercase tracking-wide ml-8">Role {index + 1}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ml-8">
                  <InputField label="Company" value={exp.company} onChange={(e) => updateItem('experience', exp.id, 'company', e.target.value)} placeholder="Company Name" />
                  <InputField label="Job Title" value={exp.position} onChange={(e) => updateItem('experience', exp.id, 'position', e.target.value)} placeholder="e.g. Product Manager" />
                  <InputField label="Start Date" value={exp.startDate} onChange={(e) => updateItem('experience', exp.id, 'startDate', e.target.value)} placeholder="MM/YYYY" />
                  <InputField label="End Date" value={exp.endDate} onChange={(e) => updateItem('experience', exp.id, 'endDate', e.target.value)} placeholder="Present" />
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Description</label>
                    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                      <div className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-2 flex gap-1">
                        <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 font-serif font-bold w-8 h-8 flex items-center justify-center">B</button>
                        <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 font-serif italic w-8 h-8 flex items-center justify-center">I</button>
                        <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 font-serif underline w-8 h-8 flex items-center justify-center">U</button>
                        <div className="w-px h-5 bg-slate-300 dark:bg-slate-600 my-auto mx-1"></div>
                        <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 font-bold w-8 h-8 flex items-center justify-center">⋮¯</button>
                        <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 font-bold w-8 h-8 flex items-center justify-center">½¯</button>
                      </div>
                      <textarea 
                        value={exp.description} 
                        onChange={(e) => updateItem('experience', exp.id, 'description', e.target.value)} 
                        rows="4" 
                        placeholder="Key responsibilities and achievements..."
                        className="w-full p-4 bg-transparent focus:outline-none resize-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <button 
            onClick={() => addItem('experience', { company: '', position: '', startDate: '', endDate: '', description: '' })}
            className="w-full py-4 bg-blue-50/50 dark:bg-blue-500/10 border-2 border-dashed border-blue-200 dark:border-blue-500/30 rounded-2xl text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} /> Add Experience
          </button>
        </div>
      </div>
    );
  }

  if (activeTab === 'education') {
    return (
      <div className="space-y-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Add your educational background.</p>
        
        <div className="space-y-6">
          <AnimatePresence>
            {resumeData.education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, height: 0 }}
                className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm group hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
              >
                <div className="absolute top-4 left-4 cursor-move text-slate-300 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <GripVertical size={20} />
                </div>
                <div className="absolute top-4 right-4">
                  <button onClick={() => removeItem('education', edu.id)} className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <h3 className="text-[13px] font-bold text-slate-400 mb-5 uppercase tracking-wide ml-8">Degree {index + 1}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ml-8">
                  <InputField label="Institution" value={edu.institution} onChange={(e) => updateItem('education', edu.id, 'institution', e.target.value)} placeholder="University or School" />
                  <InputField label="Degree" value={edu.degree} onChange={(e) => updateItem('education', edu.id, 'degree', e.target.value)} placeholder="e.g. BS Computer Science" />
                  <InputField label="Start Date" value={edu.startDate} onChange={(e) => updateItem('education', edu.id, 'startDate', e.target.value)} placeholder="MM/YYYY" />
                  <InputField label="End Date" value={edu.endDate} onChange={(e) => updateItem('education', edu.id, 'endDate', e.target.value)} placeholder="MM/YYYY" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <button 
            onClick={() => addItem('education', { institution: '', degree: '', startDate: '', endDate: '' })}
            className="w-full py-4 bg-blue-50/50 dark:bg-blue-500/10 border-2 border-dashed border-blue-200 dark:border-blue-500/30 rounded-2xl text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} /> Add Education
          </button>
        </div>
      </div>
    );
  }

  const renderSimpleArrayEditor = (tabId, label, itemName, placeholder) => {
    if (activeTab === tabId) {
      return (
        <div className="space-y-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{label}</p>
          <div className="space-y-4">
            <AnimatePresence>
              {resumeData[tabId].map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, height: 0 }}
                  className="relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm flex items-center gap-4 group hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="cursor-move text-slate-300 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-opacity">
                    <GripVertical size={20} />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text"
                      value={item.name}
                      onChange={(e) => updateItem(tabId, item.id, 'name', e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
                      placeholder={placeholder}
                    />
                  </div>
                  <div>
                    <button onClick={() => removeItem(tabId, item.id)} className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <button 
              onClick={() => addItem(tabId, { name: '' })}
              className="w-full py-4 bg-blue-50/50 dark:bg-blue-500/10 border-2 border-dashed border-blue-200 dark:border-blue-500/30 rounded-2xl text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Plus size={20} /> Add {itemName}
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const arrayRender = 
    renderSimpleArrayEditor('skills', 'Highlight your core skills and technologies.', 'Skill', 'e.g. JavaScript, React') ||
    renderSimpleArrayEditor('languages', 'List languages you can speak or write.', 'Language', 'e.g. English (Native), Spanish (Fluent)') ||
    renderSimpleArrayEditor('certifications', 'Add your relevant courses and certifications.', 'Certification', 'e.g. AWS Certified Solutions Architect') ||
    renderSimpleArrayEditor('workshops', 'Add workshops and seminars you attended or hosted.', 'Workshop', 'e.g. Advanced Web Security Seminar 2023') ||
    renderSimpleArrayEditor('projects', 'Add key academic or personal projects.', 'Project', 'e.g. E-Commerce Platform (React, Node.js)');
    
  if (arrayRender) return arrayRender;

  return null;
};

export default EditorPane;
