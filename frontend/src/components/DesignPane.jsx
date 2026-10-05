import React from 'react';
import { motion } from 'framer-motion';
import { Type, Layout, Palette, Type as TypeIcon } from 'lucide-react';

const DesignPane = ({ resumeData, updateResumeData }) => {
  const { design } = resumeData;

  const updateDesign = (key, value) => {
    updateResumeData('design', { ...design, [key]: value });
  };

  const fonts = [
    { id: 'sans', name: 'Modern Sans', class: 'font-sans' },
    { id: 'serif', name: 'Elegant Serif', class: 'font-serif' },
    { id: 'inter', name: 'Inter', class: 'font-inter' },
    { id: 'lato', name: 'Lato', class: 'font-lato' },
    { id: 'montserrat', name: 'Montserrat', class: 'font-montserrat' },
    { id: 'oswald', name: 'Oswald', class: 'font-oswald' },
    { id: 'playfair', name: 'Playfair', class: 'font-playfair' },
    { id: 'poppins', name: 'Poppins', class: 'font-poppins' }
  ];

  const colors = [
    { id: 'slate', hex: '#475569', label: 'Slate' },
    { id: 'blue', hex: '#2563eb', label: 'Royal' },
    { id: 'emerald', hex: '#059669', label: 'Emerald' },
    { id: 'rose', hex: '#e11d48', label: 'Rose' },
    { id: 'purple', hex: '#7c3aed', label: 'Purple' }
  ];

  const layouts = [
    { id: 'modern', name: 'Modern', desc: 'Clean, side-by-side header' },
    { id: 'classic', name: 'Classic', desc: 'Centered, traditional flow' },
    { id: 'compact', name: 'Compact', desc: 'Dense, space-saving' }
  ];

  const headerStyles = [
    { id: 'solid', name: 'Solid Bar' },
    { id: 'underline', name: 'Underline' },
    { id: 'minimal', name: 'Minimal' }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Design Studio</h2>
        <p className="text-slate-500 dark:text-slate-400">Customize the visual appearance of your resume with our unique, professional presets.</p>
      </div>

      {/* Fonts Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold mb-4">
          <TypeIcon size={18} /> Typography
        </div>
        <div className="grid grid-cols-3 gap-4">
          {fonts.map(font => (
            <button
              key={font.id}
              onClick={() => updateDesign('font', font.id)}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                design.font === font.id 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400' 
                  : 'border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              <span className={`text-2xl ${font.class}`}>Aa</span>
              <span className="text-xs font-semibold">{font.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Colors Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold mb-4">
          <Palette size={18} /> Accent Color
        </div>
        <div className="flex flex-wrap gap-4">
          {colors.map(color => (
            <button
              key={color.id}
              onClick={() => updateDesign('color', color.id)}
              className={`w-14 h-14 rounded-2xl border-4 transition-all flex items-center justify-center ${
                design.color === color.id 
                  ? 'border-slate-800 dark:border-white scale-110 shadow-lg' 
                  : 'border-transparent hover:scale-105'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.label}
            >
              {design.color === color.id && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 bg-white rounded-full opacity-80" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Header Styles Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold mb-4">
          <Layout size={18} /> Section Headings
        </div>
        <div className="grid grid-cols-3 gap-4">
          {headerStyles.map(style => (
            <button
              key={style.id}
              onClick={() => updateDesign('headingStyle', style.id)}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${
                design.headingStyle === style.id 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400' 
                  : 'border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {/* Visual representation of header style */}
              <div className="w-full flex flex-col items-center gap-1 opacity-60">
                {style.id === 'solid' && <div className="w-full h-4 bg-current rounded-md"></div>}
                {style.id === 'underline' && <><div className="w-3/4 h-2 bg-current rounded-md"></div><div className="w-full h-0.5 bg-current rounded-full mt-1"></div></>}
                {style.id === 'minimal' && <div className="w-1/2 h-2 bg-current rounded-md tracking-[0.2em] uppercase"></div>}
              </div>
              <span className="text-xs font-semibold">{style.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Font Size Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold mb-4">
          <Type size={18} /> Font Size (Content)
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl">
          {['small', 'medium', 'large'].map((size) => (
            <button
              key={size}
              onClick={() => updateDesign('fontSize', size)}
              className={`flex-1 py-3 text-sm font-bold capitalize transition-all rounded-lg ${
                (design.fontSize || 'medium') === size 
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <span className={size === 'small' ? 'text-xs' : size === 'large' ? 'text-base' : 'text-sm'}>Aa</span> {size}
            </button>
          ))}
        </div>
      </section>

    </div>
  );
};

export default DesignPane;
