import React from 'react';
import { motion } from 'framer-motion';
import { DynamicTemplate } from './DynamicTemplate';
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

export const ContactItem = ({ icon: Icon, text }) => {
  if (!text) return null;
  return (
    <div className="flex items-center gap-2">
      <Icon size={14} className="opacity-70" />
      <span>{text}</span>
    </div>
  );
};

export const SectionHeading = ({ title, design, cMap, centered = false }) => {
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

export const ArraySection = ({ title, data, itemVariants, Component, design, cMap, centered = false }) => {
  if (!data || data.length === 0) return null;
  return (
    <motion.section variants={itemVariants} layout className="mb-10">
      <SectionHeading title={title} design={design} cMap={cMap} centered={centered} />
      <Component data={data} design={design} cMap={cMap} centered={centered} />
    </motion.section>
  );
};

export const TagList = ({ data, cMap }) => (
  <div className="flex flex-wrap gap-2.5">
    {data.map((item) => (
      <motion.div layout key={item.id} className={`px-3 py-1.5 text-[14px] font-medium rounded-lg border ${cMap.bg} ${cMap.text} border-current border-opacity-20`}>
        {item.name || 'Item Name'}
      </motion.div>
    ))}
  </div>
);

export const SimpleList = ({ data }) => (
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
    mono: 'font-mono',
    inter: 'font-inter',
    lato: 'font-lato',
    montserrat: 'font-montserrat',
    oswald: 'font-oswald',
    playfair: 'font-playfair',
    poppins: 'font-poppins'
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
      <motion.header variants={itemVariants} className={`border-b-4 ${cMap.border} pb-8 mb-8 flex justify-between items-end`}>
        <div>
          <h1 className="text-5xl font-light tracking-tight text-slate-900 mb-2">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <div className={`text-xl font-medium mb-5 tracking-wide ${cMap.lightText}`}>
            {personalInfo.title || 'Professional Title'}
          </div>
        </div>
        {personalInfo.photo && (
          <img src={personalInfo.photo} alt="Profile" className={`w-28 h-28 object-cover rounded-2xl border-2 ${cMap.border} mb-5 shrink-0`} />
        )}
      </motion.header>
      <div className={`flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium ${cMap.bg} ${cMap.text} p-4 rounded-xl border border-current border-opacity-10 mb-8`}>
          <ContactItem icon={Mail} text={personalInfo.email} />
          <ContactItem icon={Phone} text={personalInfo.phone} />
          <ContactItem icon={MapPin} text={personalInfo.location} />
          <ContactItem icon={LinkIcon} text={personalInfo.portfolio} />
          <ContactItem icon={LinkedinIcon} text={personalInfo.linkedin} />
          <ContactItem icon={GithubIcon} text={personalInfo.github} />
        </div>
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
      <motion.header variants={itemVariants} className={`text-center border-b-4 ${cMap.border} pb-8 mb-8 flex flex-col items-center`}>
        {personalInfo.photo && (
          <img src={personalInfo.photo} alt="Profile" className={`w-24 h-24 object-cover rounded-full mb-4 border-2 ${cMap.border}`} />
        )}
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
        {personalInfo.photo && (
          <motion.img variants={itemVariants} src={personalInfo.photo} alt="Profile" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg mb-6" />
        )}
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


const CreativeTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`-mt-12 -mx-12 p-12 mb-8 ${cMap.bg}`}>
        <h1 className={`text-5xl font-bold tracking-tight mb-2 ${cMap.text}`}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className={`text-xl font-medium mb-6 tracking-wide ${cMap.lightText}`}>
          {personalInfo.title || 'Professional Title'}
        </div>
        <div className={`flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium ${cMap.text} opacity-80`}>
          <ContactItem icon={Mail} text={personalInfo.email} />
          <ContactItem icon={Phone} text={personalInfo.phone} />
          <ContactItem icon={MapPin} text={personalInfo.location} />
          <ContactItem icon={LinkIcon} text={personalInfo.portfolio} />
          <ContactItem icon={LinkedinIcon} text={personalInfo.linkedin} />
          <ContactItem icon={GithubIcon} text={personalInfo.github} />
        </div>
      </motion.header>
      <div className="px-2">
        {personalInfo.summary && (
          <motion.section variants={itemVariants} layout className="mb-10">
            <SectionHeading title="Executive Summary" design={design} cMap={cMap} />
            <p className="text-slate-700 leading-relaxed text-[15px] whitespace-pre-wrap">{personalInfo.summary}</p>
          </motion.section>
        )}
        {/* Reuse structure from ModernTemplate for the rest, simplified for brevity */}
        <ModernTemplate resumeData={{...resumeData, personalInfo: {}}} design={design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />
      </div>
    </div>
  );
};

const ProfessionalTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`border-t-[16px] ${cMap.border} pt-8 pb-6 mb-8 flex justify-between items-end`}>
        <div className="flex items-center gap-6">
          {personalInfo.photo && (
            <img src={personalInfo.photo} alt="Profile" className={`w-24 h-24 object-cover rounded shadow-md shrink-0 border-2 ${cMap.border}`} />
          )}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-1">
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <div className={`text-lg font-bold uppercase tracking-widest ${cMap.lightText}`}>
              {personalInfo.title || 'Professional Title'}
            </div>
          </div>
        </div>
        <div className="text-right text-sm font-medium text-slate-600 space-y-1">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
          <div>{personalInfo.location}</div>
          <div className={`font-bold ${cMap.text}`}>{personalInfo.portfolio}</div>
        </div>
      </motion.header>
      {/* Rest relies on standard layout */}
      <ModernTemplate resumeData={{...resumeData, personalInfo: {}}} design={design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />
    </div>
  );
};

const ExecutiveTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo } = resumeData;
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`text-center border-y-2 ${cMap.border} py-6 mb-8`}>
        <h1 className="text-3xl font-light tracking-widest uppercase text-slate-900 mb-4">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className={`flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-wider font-bold ${cMap.text}`}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span>|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </motion.header>
      <ClassicTemplate resumeData={{...resumeData, personalInfo: {}}} design={design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />
    </div>
  );
};


const CompactTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo } = resumeData;
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`flex justify-between items-center border-b-2 ${cMap.border} pb-4 mb-6`}>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{personalInfo.fullName}</h1>
        <div className={`text-right text-xs font-medium space-x-3 ${cMap.text}`}>
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
      </motion.header>
      <ClassicTemplate resumeData={{...resumeData, personalInfo: {}}} design={design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />
    </div>
  );
};

const ElegantTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo } = resumeData;
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`text-center border-double border-b-8 ${cMap.border} pb-8 mb-10`}>
        <h1 className="text-5xl font-serif italic tracking-wide text-slate-900 mb-3">{personalInfo.fullName}</h1>
        <div className={`text-lg font-serif tracking-widest ${cMap.lightText} mb-4`}>{personalInfo.title}</div>
        <div className={`flex justify-center gap-6 text-sm font-medium ${cMap.text} uppercase tracking-widest`}>
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
        </div>
      </motion.header>
      <ClassicTemplate resumeData={{...resumeData, personalInfo: {}}} design={design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />
    </div>
  );
};

const BoldTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo } = resumeData;
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className={`${cMap.bg} ${cMap.border} border-l-8 p-10 mb-10`}>
        <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-2 uppercase">{personalInfo.fullName}</h1>
        <div className={`text-2xl font-bold ${cMap.text} mb-6 uppercase tracking-tight`}>{personalInfo.title}</div>
        <div className={`grid grid-cols-2 gap-4 text-sm font-bold ${cMap.lightText}`}>
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
          <div>{personalInfo.location}</div>
          <div>{personalInfo.portfolio}</div>
        </div>
      </motion.header>
      <ModernTemplate resumeData={{...resumeData, personalInfo: {}}} design={design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />
    </div>
  );
};

const TimelineTemplate = ({ resumeData, design, cMap, fontClass, itemVariants }) => {
  const { personalInfo } = resumeData;
  return (
    <div className={fontClass}>
      <motion.header variants={itemVariants} className="mb-12">
        <h1 className={`text-5xl font-bold tracking-tight mb-2 ${cMap.text}`}>{personalInfo.fullName}</h1>
        <div className="text-xl font-medium text-slate-500 mb-4">{personalInfo.title}</div>
        <div className="flex gap-4 text-sm text-slate-600 font-medium border-l-4 pl-4 border-slate-200">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
          <div>{personalInfo.location}</div>
        </div>
      </motion.header>
      <div className={`border-l-2 ${cMap.border} pl-8 ml-2 space-y-12`}>
         <ModernTemplate resumeData={{...resumeData, personalInfo: {}}} design={design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />
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
        padding: (resumeData.template === 'minimal' || resumeData.template === 'creative') ? '0' : '48px'
      }}
    >
      {resumeData.template === 'classic' && <ClassicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'modern' && <ModernTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'minimal' && <MinimalTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'professional' && <ProfessionalTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'creative' && <CreativeTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'executive' && <ExecutiveTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'compact' && <CompactTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'elegant' && <ElegantTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'bold' && <BoldTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      {resumeData.template === 'timeline' && <TimelineTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} />}
      
      {/* 20 Dynamic Templates */}
      {resumeData.template === 'tech' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'dark', headerAlign: 'left', sidebar: 'right', photoPos: 'left' }} />}
      {resumeData.template === 'academic' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerAlign: 'center', sidebar: 'left', borderStyle: 'bottom' }} />}
      {resumeData.template === 'startup' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ borderStyle: 'top', sidebar: 'right', photoPos: 'right' }} />}
      {resumeData.template === 'designer' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'solid', headerAlign: 'center', sidebar: 'none', photoPos: 'left' }} />}
      {resumeData.template === 'engineer' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ borderStyle: 'bottom', sidebar: 'left', photoPos: 'right' }} />}
      {resumeData.template === 'manager' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'solid', headerAlign: 'left', sidebar: 'none', photoPos: 'right' }} />}
      {resumeData.template === 'freelance' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'dark', headerAlign: 'center', sidebar: 'none', photoPos: 'center' }} />}
      {resumeData.template === 'analyst' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ borderStyle: 'bottom', sidebar: 'right' }} />}
      {resumeData.template === 'consultant' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'dark', headerAlign: 'center', sidebar: 'none', photoPos: 'center' }} />}
      {resumeData.template === 'medical' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerAlign: 'center', sidebar: 'left' }} />}
      {resumeData.template === 'legal' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ borderStyle: 'top', headerAlign: 'center', sidebar: 'right' }} />}
      {resumeData.template === 'marketing' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'dark', sidebar: 'left', photoPos: 'right' }} />}
      {resumeData.template === 'sales' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'solid', sidebar: 'right', photoPos: 'left' }} />}
      {resumeData.template === 'developer' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'dark', sidebar: 'none', photoPos: 'left' }} />}
      {resumeData.template === 'finance' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ borderStyle: 'top', sidebar: 'none' }} />}
      {resumeData.template === 'teacher' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'solid', sidebar: 'left' }} />}
      {resumeData.template === 'writer' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerAlign: 'center', sidebar: 'none', photoPos: 'right' }} />}
      {resumeData.template === 'artist' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ headerBg: 'solid', sidebar: 'none', photoPos: 'left' }} />}
      {resumeData.template === 'researcher' && <DynamicTemplate resumeData={resumeData} design={resumeData.design} cMap={cMap} fontClass={fontClass} itemVariants={itemVariants} config={{ borderStyle: 'bottom', sidebar: 'left' }} />}
    </motion.div>
  );
};

export default PreviewPane;
