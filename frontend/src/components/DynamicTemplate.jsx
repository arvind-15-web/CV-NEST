import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import { ContactItem, SectionHeading, ArraySection, TagList, SimpleList } from './PreviewPane'; // We need to export these from PreviewPane

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

// This is a highly flexible template that can generate dozens of variations
export const DynamicTemplate = ({ resumeData, design, cMap, fontClass, itemVariants, config }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;
  const { 
    headerBg = 'transparent', 
    headerAlign = 'left', 
    sidebar = 'none', 
    photoPos = 'hidden',
    borderStyle = 'none' 
  } = config;

  const renderContact = () => (
    <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium ${headerBg !== 'transparent' ? 'text-white opacity-90' : cMap.lightText} ${headerAlign === 'center' ? 'justify-center' : ''}`}>
      <ContactItem icon={Mail} text={personalInfo.email} />
      <ContactItem icon={Phone} text={personalInfo.phone} />
      <ContactItem icon={MapPin} text={personalInfo.location} />
      <ContactItem icon={LinkIcon} text={personalInfo.portfolio} />
      <ContactItem icon={LinkedinIcon} text={personalInfo.linkedin} />
      <ContactItem icon={GithubIcon} text={personalInfo.github} />
    </div>
  );

  const renderHeader = () => (
    <motion.header variants={itemVariants} className={`
      ${headerBg === 'solid' ? cMap.bg : headerBg === 'dark' ? 'bg-slate-900 text-white' : ''} 
      ${borderStyle === 'top' ? `border-t-[16px] ${cMap.border}` : borderStyle === 'bottom' ? `border-b-4 ${cMap.border}` : ''}
      p-8 mb-8 flex flex-col md:flex-row gap-6 ${headerAlign === 'center' ? 'items-center text-center' : 'items-start'}
    `}>
      {photoPos === 'left' && personalInfo.photo && (
        <img src={personalInfo.photo} className="w-24 h-24 rounded-full object-cover shrink-0 border-4 border-white shadow" alt="" />
      )}
      
      <div className={`flex-1 ${headerAlign === 'center' ? 'w-full' : ''}`}>
        <h1 className={`text-4xl font-bold tracking-tight mb-2 ${headerBg === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {personalInfo.fullName}
        </h1>
        <div className={`text-xl mb-4 ${headerBg === 'dark' ? 'text-slate-300' : cMap.text}`}>
          {personalInfo.title}
        </div>
        {renderContact()}
      </div>

      {photoPos === 'right' && personalInfo.photo && (
        <img src={personalInfo.photo} className="w-24 h-24 rounded-full object-cover shrink-0 border-4 border-white shadow" alt="" />
      )}
    </motion.header>
  );

  const renderMainContent = () => (
    <div className="space-y-8">
      {personalInfo.summary && (
        <motion.section variants={itemVariants}>
          <SectionHeading title="Profile" design={design} cMap={cMap} centered={headerAlign === 'center'} />
          <p className="text-[14px] leading-relaxed text-slate-700 whitespace-pre-wrap">{personalInfo.summary}</p>
        </motion.section>
      )}

      {experience.length > 0 && (
        <motion.section variants={itemVariants}>
          <SectionHeading title="Experience" design={design} cMap={cMap} />
          <div className="space-y-6">
            {experience.map(exp => (
              <div key={exp.id} className="relative">
                <h3 className={`text-[16px] font-bold ${cMap.text}`}>{exp.position}</h3>
                <div className="flex justify-between items-baseline mb-2 text-sm text-slate-600 font-medium">
                  <span>{exp.company}</span>
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[14px] text-slate-700 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {education.length > 0 && (
        <motion.section variants={itemVariants}>
          <SectionHeading title="Education" design={design} cMap={cMap} />
          <div className="space-y-4">
            {education.map(edu => (
              <div key={edu.id}>
                <h3 className={`text-[15px] font-bold ${cMap.text}`}>{edu.degree}</h3>
                <div className="flex justify-between items-baseline text-sm text-slate-600 font-medium">
                  <span>{edu.institution}</span>
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );

  const renderSidebarContent = () => (
    <div className="space-y-8">
      <ArraySection title="Skills" data={skills} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
      <ArraySection title="Languages" data={languages} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
      <ArraySection title="Projects" data={projects} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
      <ArraySection title="Certifications" data={certifications} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
    </div>
  );

  return (
    <div className={`${fontClass}`}>
      {headerBg === 'solid' || headerBg === 'dark' ? (
        <div className="-mx-12 -mt-12 mb-8">
           {renderHeader()}
        </div>
      ) : renderHeader()}

      <div className={`px-2 ${sidebar !== 'none' ? 'flex gap-8' : ''}`}>
        {sidebar === 'left' && (
          <div className={`w-1/3 shrink-0 p-6 rounded-xl ${cMap.bg} bg-opacity-30`}>
            {renderSidebarContent()}
          </div>
        )}
        
        <div className={sidebar !== 'none' ? 'w-2/3' : 'w-full'}>
          {renderMainContent()}
          {sidebar === 'none' && (
             <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-slate-200">
               <div className="space-y-8">
                 <ArraySection title="Skills" data={skills} itemVariants={itemVariants} Component={TagList} design={design} cMap={cMap} />
                 <ArraySection title="Languages" data={languages} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
               </div>
               <div className="space-y-8">
                 <ArraySection title="Projects" data={projects} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
                 <ArraySection title="Certifications" data={certifications} itemVariants={itemVariants} Component={SimpleList} design={design} cMap={cMap} />
               </div>
             </div>
          )}
        </div>

        {sidebar === 'right' && (
          <div className={`w-1/3 shrink-0 p-6 rounded-xl border-2 ${cMap.border} border-opacity-10`}>
            {renderSidebarContent()}
          </div>
        )}
      </div>
    </div>
  );
};
