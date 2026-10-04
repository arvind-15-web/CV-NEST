import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TemplateGallery = ({ resumeData, updateResumeData }) => {
  const currentTemplate = resumeData.template || 'modern';

  const templates = [
    { id: 'modern', name: 'Modern', type: 'Clean', desc: 'A clean, standard layout.' },
    { id: 'classic', name: 'Classic', type: 'Traditional', desc: 'Centered header, traditional flow.' },
    { id: 'minimal', name: 'Minimal', type: 'Sidebar', desc: 'Two-column design with a colored sidebar.' },
    { id: 'professional', name: 'Professional', type: 'Corporate', desc: 'Top border, high-density structured layout.' },
    { id: 'creative', name: 'Creative', type: 'Bold', desc: 'Massive colored header block for impact.' },
    { id: 'executive', name: 'Executive', type: 'Dense', desc: 'Grid lines and centered details.' },
    { id: 'compact', name: 'Compact', type: 'Space Saver', desc: 'Very dense, inline information.' },
    { id: 'elegant', name: 'Elegant', type: 'Sophisticated', desc: 'Serif-heavy with double borders.' },
    { id: 'bold', name: 'Bold', type: 'Impactful', desc: 'Huge typography and side-borders.' },
    { id: 'timeline', name: 'Timeline', type: 'Visual', desc: 'Vertical timeline connecting your history.' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Template Gallery</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Choose a professional template for your resume. More complex templates support profile photos!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((tpl) => (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            key={tpl.id}
            onClick={() => updateResumeData('template', tpl.id)}
            className={`relative flex flex-col text-left p-6 rounded-2xl border-2 transition-all ${
              currentTemplate === tpl.id 
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10' 
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-300'
            }`}
          >
            {currentTemplate === tpl.id && (
              <div className="absolute top-4 right-4 text-blue-600 dark:text-blue-400">
                <CheckCircle2 size={24} fill="currentColor" className="text-white dark:text-slate-800" />
              </div>
            )}
            
            {/* Template Preview Mockup */}
            <div className="w-full h-32 bg-slate-100 dark:bg-slate-900 rounded-lg mb-4 overflow-hidden border border-slate-200 dark:border-slate-700 p-2 flex flex-col gap-2">
               {/* Abstract representation of the layout based on type */}
               {tpl.type === 'Sidebar' ? (
                 <div className="flex h-full gap-2">
                   <div className="w-1/3 h-full bg-blue-200 dark:bg-blue-800 rounded"></div>
                   <div className="w-2/3 flex flex-col gap-2">
                     <div className="w-3/4 h-3 bg-slate-300 dark:bg-slate-700 rounded"></div>
                     <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded mt-2"></div>
                     <div className="w-5/6 h-2 bg-slate-200 dark:bg-slate-800 rounded"></div>
                   </div>
                 </div>
               ) : tpl.type === 'Corporate' ? (
                 <div className="w-full h-full flex flex-col gap-2">
                   <div className="w-full h-4 bg-blue-600 rounded-t mb-2"></div>
                   <div className="flex justify-between items-end">
                     <div className="w-1/2 h-4 bg-slate-400 rounded"></div>
                     <div className="w-1/4 h-8 bg-slate-200 rounded"></div>
                   </div>
                   <div className="w-full h-2 bg-slate-200 rounded mt-2"></div>
                 </div>
               ) : (
                 <div className="w-full h-full flex flex-col gap-2 items-center">
                   <div className="w-1/2 h-4 bg-slate-400 dark:bg-slate-600 rounded mt-2"></div>
                   <div className="w-1/3 h-2 bg-blue-300 dark:bg-blue-600 rounded"></div>
                   <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded mt-4"></div>
                   <div className="w-5/6 h-2 bg-slate-200 dark:bg-slate-800 rounded"></div>
                 </div>
               )}
            </div>

            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{tpl.name}</h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">{tpl.type}</span>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{tpl.desc}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;
