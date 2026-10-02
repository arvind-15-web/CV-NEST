import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';

const LinkedinIcon = ({ size = 14, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 14, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ContactItem = ({ icon: Icon, text }) => {
  if (!text) return null;
  return (
    <div className="flex items-center gap-2">
      <Icon size={14} className="opacity-70" />
      <span>{text}</span>
    </div>
  );
};

const SectionHeading = ({ title, design, cMap, centered = false }) => {
  const { headingStyle } = design;
  
  if (headingStyle === 'minimal') {
    return <h2 className={`text-sm font-bold uppercase tracking-[0.2em] mb-6 ${cMap.text} ${centered ? 'text-center' : ''}`}>{title}</h2>;
  }
  if (headingStyle === 'underline') {
    return (
      <div className={`mb-6 ${centered ? 'text-center' : ''}`}>
        <h2 className={`text-sm font-bold uppercase tracking-widest ${cMap.text} border-b-2 ${cMap.border} pb-2 inline-block`}>
          {title}
        </h2>
      </div>
    );
  }
  // Solid style
  return (
    <h2 className={`text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-4 ${cMap.text}`}>
      {centered && <div className={`flex-1 h-0.5 ${cMap.bg} opacity-50`}></div>}
      {title}
      <div className={`flex-1 h-0.5 ${cMap.bg} opacity-50`}></div>
    </h2>
  );
};

const ArraySection = ({ title, data, itemVariants, Component, design, cMap, centered = false }) => {
  if (!data || data.length === 0) return null;
  return (
    <motion.section variants={itemVariants} layout className="mb-10">
      <SectionHeading title={title} design={design} cMap={cMap} centered={centered} />
      <Component data={data} design={design} cMap={cMap} centered={centered} />
    </motion.section>
  );
};

const TagList = ({ data, cMap }) => (
  <div className="flex flex-wrap gap-2.5">
    {data.map((item) => (
      <motion.div layout key={item.id} className={`px-3 py-1.5 text-[14px] font-medium rounded-lg border ${cMap.bg} ${cMap.text} border-current border-opacity-20`}>
        {item.name || 'Item Name'}
      </motion.div>
    ))}
  </div>
);

const SimpleList = ({ data }) => (
  <ul className="list-disc list-inside space-y-1.5 text-[15px] text-slate-700">
    {data.map((item) => (
      <motion.li layout key={item.id}>{item.name}</motion.li>
    ))}
  </ul>
);

const getThemeStyles = (design) => {
  const colorMap = {
    slate: { text: 'text-slate-800', bg: 'bg-slate-100', border: 'border-slate-800', lightText: 'text-slate-600', dot: 'before:bg-slate-400' },
    blue: { text: 'text-blue-800', bg: 'bg-blue-100', border: 'border-blue-900', lightText: 'text-blue-600', dot: 'before:bg-blue-400' },
    emerald: { text: 'text-emerald-800', bg: 'bg-emerald-100', border: 'border-emerald-900', lightText: 'text-emerald-600', dot: 'before:bg-emerald-400' },
    rose: { text: 'text-rose-800', bg: 'bg-rose-100', border: 'border-rose-900', lightText: 'text-rose-600', dot: 'before:bg-rose-400' },
    purple: { text: 'text-purple-800', bg: 'bg-purple-100', border: 'border-purple-900', lightText: 'text-purple-600', dot: 'before:bg-purple-400' }
  };
  const fontMap = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono'
  };
  return { 
    cMap: colorMap[design.color] || colorMap.blue, 
    fontClass: fontMap[design.font] || fontMap.sans 
  };
};

const ModernTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;

  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`border-b-4 ${cMap.border} pb-8 mb-8`}>
        <h1 className="text-5xl font-light tracking-tight text-slate-900 mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className={`text-xl font-medium mb-5 tracking-wide ${cMap.lightText}`}>
          {personalInfo.title || 'Professional Title'}
        </div>
        
        <div className={`flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium ${cMap.bg} ${cMap.text} p-4 rounded-xl border border-current border-opacity-10`}>
          <ContactItem icon={Mail} text={personalInfo.email} />
          <ContactItem icon={Phone} text={personalInfo.phone} />
          <ContactItem icon={MapPin} text={personalInfo.location} />
          <ContactItem icon={LinkIcon} text={personalInfo.portfolio} />
          <ContactItem icon={LinkedinIcon} text={personalInfo.linkedin} />
          <ContactItem icon={GithubIcon} text={personalInfo.github} />
        </div>
      </motion.header>

      {personalInfo.summary && (
        <motion.section variants={itemVariants} layout className="mb-10">
          <SectionHeading title="Executive Summary" design={design} cMap={cMap} />
          <p className="text-slate-700 leading-relaxed text-[15px] whitespace-pre-wrap">{personalInfo.summary}</p>
        </motion.section>
      )}

      {experience.length > 0 && (
        <motion.section variants={itemVariants} layout className="mb-10">
          <SectionHeading title="Professional Experience" design={design} cMap={cMap} />
          <div className="space-y-8">
            {experience.map((exp) => (
              <motion.div layout key={exp.id} className={`relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 ${cMap.dot} before:rounded-full`}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-semibold text-slate-900">{exp.position || 'Position Title'}</h3>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap ml-4">
                    {exp.startDate} {exp.startDate && exp.endDate && '—'} {exp.endDate}
                  </span>
                </div>
                <div className={`text-[15px] font-medium mb-3 ${cMap.lightText}`}>{exp.company || 'Company Name'}</div>
                {exp.description && (
                  <p className="text-[15px] text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {education.length > 0 && (
        <motion.section variants={itemVariants} layout className="mb-10">
          <SectionHeading title="Academic Credentials" design={design} cMap={cMap} />
          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div layout key={edu.id} className={`relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full`}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-semibold text-slate-900">{edu.degree || 'Degree'}</h3>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap ml-4">
                    {edu.startDate} {edu.startDate && edu.endDate && '—'} {edu.endDate}
                  </span>
                </div>
                <div className="text-[15px] text-slate-600">{edu.institution || 'Institution Name'}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-10">
          <ArraySection title="Core Competencies" data={skills} itemVariants={itemVariants} Component={TagList} design={design} cMap={cMap} />
          <ArraySection title="Languages" data={languages} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
          <ArraySection title="Academic Projects" data={projects} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
        </div>
        <div className="space-y-10">
          <ArraySection title="Courses & Certifications" data={certifications} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
          <ArraySection title="Workshops and Seminars" data={workshops} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
        </div>
      </div>
    </div>
  );
};

const ClassicTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;
  
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`text-center border-b-4 ${cMap.border} pb-8 mb-8`}>
        <h1 className="text-5xl font-bold tracking-widest uppercase text-slate-900 mb-4">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        
        <div className={`flex justify-center flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium ${cMap.lightText}`}>
          <ContactItem icon={Mail} text={personalInfo.email} />
          <ContactItem icon={Phone} text={personalInfo.phone} />
          <ContactItem icon={MapPin} text={personalInfo.location} />
          <ContactItem icon={LinkIcon} text={personalInfo.portfolio} />
          <ContactItem icon={LinkedinIcon} text={personalInfo.linkedin} />
          <ContactItem icon={GithubIcon} text={personalInfo.github} />
        </div>
      </motion.header>

      {personalInfo.summary && (
        <motion.section variants={itemVariants} layout className="mb-10">
          <SectionHeading title="Executive Summary" design={design} cMap={cMap} centered={false} />
          <p className="text-slate-800 leading-relaxed text-[15px] whitespace-pre-wrap">{personalInfo.summary}</p>
        </motion.section>
      )}

      {experience.length > 0 && (
        <motion.section variants={itemVariants} layout className="mb-10">
          <SectionHeading title="Professional Experience" design={design} cMap={cMap} centered={false} />
          <div className="space-y-8">
            {experience.map((exp) => (
              <motion.div layout key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[17px] font-bold text-slate-900">{exp.position || 'Position Title'} <span className="font-medium italic">at {exp.company || 'Company'}</span></h3>
                  <span className="text-[14px] font-medium text-slate-600 whitespace-nowrap ml-4">
                    {exp.startDate} {exp.startDate && exp.endDate && '—'} {exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <p className="text-[15px] text-slate-800 leading-relaxed whitespace-pre-wrap mt-2">{exp.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {education.length > 0 && (
        <motion.section variants={itemVariants} layout className="mb-10">
          <SectionHeading title="Academic Credentials" design={design} cMap={cMap} centered={false} />
          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div layout key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[17px] font-bold text-slate-900">{edu.institution || 'Institution Name'}</h3>
                  <span className="text-[14px] font-medium text-slate-600 whitespace-nowrap ml-4">
                    {edu.startDate} {edu.startDate && edu.endDate && '—'} {edu.endDate}
                  </span>
                </div>
                <div className="text-[15px] text-slate-800 italic">{edu.degree || 'Degree'}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-10">
          <ArraySection title="Core Competencies" data={skills} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} centered={false} />
          <ArraySection title="Languages" data={languages} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} centered={false} />
          <ArraySection title="Academic Projects" data={projects} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} centered={false} />
        </div>
        <div className="space-y-10">
          <ArraySection title="Courses & Certifications" data={certifications} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} centered={false} />
          <ArraySection title="Workshops and Seminars" data={workshops} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} centered={false} />
        </div>
      </div>
    </div>
  );
};

const MinimalTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;

  return (
    <div className={`${fontClass} flex`}>
      {/* Sidebar Component */}
      <div className={`w-[32%] ${cMap.bg} p-8 shrink-0 min-h-full`}>
        <motion.h1 variants={itemVariants} className={`text-4xl font-bold tracking-tight mb-2 ${cMap.text}`}>
          {personalInfo.fullName?.split(' ')[0] || 'Your'}<br/>
          {personalInfo.fullName?.split(' ').slice(1).join(' ') || 'Name'}
        </motion.h1>
        <motion.div variants={itemVariants} className={`text-sm font-bold uppercase tracking-widest mb-10 ${cMap.lightText}`}>
          {personalInfo.title || 'Professional Title'}
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4 text-[13px] font-medium text-slate-700 mb-12">
          <ContactItem icon={Mail} text={personalInfo.email} />
          <ContactItem icon={Phone} text={personalInfo.phone} />
          <ContactItem icon={MapPin} text={personalInfo.location} />
          <ContactItem icon={LinkIcon} text={personalInfo.portfolio} />
          <ContactItem icon={LinkedinIcon} text={personalInfo.linkedin} />
          <ContactItem icon={GithubIcon} text={personalInfo.github} />
        </motion.div>

        <div className="space-y-10">
          <ArraySection title="Skills" data={skills} itemVariants={itemVariants} Component={SimpleList} design={{headingStyle: 'minimal'}} cMap={cMap} />
          <ArraySection title="Languages" data={languages} itemVariants={itemVariants} Component={SimpleList} design={{headingStyle: 'minimal'}} cMap={cMap} />
          <ArraySection title="Certifications" data={certifications} itemVariants={itemVariants} Component={SimpleList} design={{headingStyle: 'minimal'}} cMap={cMap} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 pl-12 bg-white">
        {personalInfo.summary && (
          <motion.section variants={itemVariants} layout className="mb-10">
            <SectionHeading title="Profile" design={{headingStyle: 'solid'}} cMap={cMap} />
            <p className="text-slate-700 leading-relaxed text-[14px] whitespace-pre-wrap">{personalInfo.summary}</p>
          </motion.section>
        )}

        {experience.length > 0 && (
          <motion.section variants={itemVariants} layout className="mb-10">
            <SectionHeading title="Experience" design={{headingStyle: 'solid'}} cMap={cMap} />
            <div className="space-y-8">
              {experience.map((exp) => (
                <motion.div layout key={exp.id}>
                  <h3 className={`text-[15px] font-bold ${cMap.text}`}>{exp.position || 'Position'}</h3>
                  <div className="flex justify-between items-baseline mb-2 text-[13px]">
                    <span className="font-semibold text-slate-700">{exp.company || 'Company'}</span>
                    <span className="text-slate-400">
                      {exp.startDate} {exp.startDate && exp.endDate && '—'} {exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-[14px] text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {education.length > 0 && (
          <motion.section variants={itemVariants} layout className="mb-10">
            <SectionHeading title="Education" design={{headingStyle: 'solid'}} cMap={cMap} />
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div layout key={edu.id}>
                  <h3 className={`text-[15px] font-bold ${cMap.text}`}>{edu.degree || 'Degree'}</h3>
                  <div className="flex justify-between items-baseline text-[13px]">
                    <span className="font-semibold text-slate-700">{edu.institution || 'Institution'}</span>
                    <span className="text-slate-400">
                      {edu.startDate} {edu.startDate && edu.endDate && '—'} {edu.endDate}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        <div className="space-y-10">
          <ArraySection title="Projects" data={projects} itemVariants={itemVariants} Component={SimpleList} design={{headingStyle: 'solid'}} cMap={cMap} />
          <ArraySection title="Workshops" data={workshops} itemVariants={itemVariants} Component={SimpleList} design={{headingStyle: 'solid'}} cMap={cMap} />
        </div>
      </div>
    </div>
  );
};


const PreviewPane = ({ resumeData }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const { cMap, fontClass } = getThemeStyles(resumeData.design || { font: 'sans', color: 'blue', headingStyle: 'solid' });

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl shadow-slate-200/50 shrink-0 mx-auto overflow-hidden"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0,0,0,0.02)",
        padding: resumeData.template === 'minimal' ? '0' : '48px'
      }}
    >
      {resumeData.template === 'classic' && <ClassicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'modern' && <ModernTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'minimal' && <MinimalTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
    </motion.div>
  );
};

export default PreviewPane;
