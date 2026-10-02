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
      <Icon size={14} className="text-slate-600" />
      <span>{text}</span>
    </div>
  );
};

const SectionHeading = ({ title }) => (
  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-4">
    {title}
    <div className="flex-1 h-px bg-slate-200"></div>
  </h2>
);

const ArraySection = ({ title, data, itemVariants, Component }) => {
  if (!data || data.length === 0) return null;
  return (
    <motion.section variants={itemVariants} layout className="mb-10">
      <SectionHeading title={title} />
      <Component data={data} />
    </motion.section>
  );
};

const TagList = ({ data }) => (
  <div className="flex flex-wrap gap-2.5">
    {data.map((item) => (
      <motion.div layout key={item.id} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-[14px] font-medium rounded-lg border border-blue-100">
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

const ModernTemplate = ({ resumeData }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <motion.header variants={itemVariants} className="border-b-2 border-slate-900 pb-8 mb-8">
        <h1 className="text-5xl font-light tracking-tight text-slate-900 mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="text-xl text-blue-600 font-medium mb-5 tracking-wide">
          {personalInfo.title || 'Professional Title'}
        </div>
        
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
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
          <SectionHeading title="Executive Summary" />
          <p className="text-slate-700 leading-relaxed text-[15px] whitespace-pre-wrap">{personalInfo.summary}</p>
        </motion.section>
      )}

      {experience.length > 0 && (
        <motion.section variants={itemVariants} layout className="mb-10">
          <SectionHeading title="Professional Experience" />
          <div className="space-y-8">
            {experience.map((exp) => (
              <motion.div layout key={exp.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-400 before:rounded-full">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-semibold text-slate-900">{exp.position || 'Position Title'}</h3>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap ml-4">
                    {exp.startDate} {exp.startDate && exp.endDate && '—'} {exp.endDate}
                  </span>
                </div>
                <div className="text-[15px] text-blue-600 font-medium mb-3">{exp.company || 'Company Name'}</div>
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
          <SectionHeading title="Academic Credentials" />
          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div layout key={edu.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full">
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
          <ArraySection title="Core Competencies" data={skills} itemVariants={itemVariants} Component={TagList} />
          <ArraySection title="Languages" data={languages} itemVariants={itemVariants} Component={SimpleList} />
          <ArraySection title="Academic Projects" data={projects} itemVariants={itemVariants} Component={SimpleList} />
        </div>
        <div className="space-y-10">
          <ArraySection title="Courses & Certifications" data={certifications} itemVariants={itemVariants} Component={SimpleList} />
          <ArraySection title="Workshops and Seminars" data={workshops} itemVariants={itemVariants} Component={SimpleList} />
        </div>
      </div>
    </>
  );
};

const ClassicTemplate = ({ resumeData }) => {
  const { personalInfo, experience, education, skills, languages, certifications, workshops, projects } = resumeData;
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const ClassicHeading = ({ title }) => (
    <h2 className="text-lg font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-4">
      {title}
    </h2>
  );

  return (
    <div className="font-serif">
      <motion.header variants={itemVariants} className="text-center mb-8 border-b-2 border-slate-900 pb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wider text-slate-900 mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700 font-medium">
          {personalInfo.email && <ContactItem icon={Mail} text={personalInfo.email} />}
          {personalInfo.phone && <ContactItem icon={Phone} text={personalInfo.phone} />}
          {personalInfo.location && <ContactItem icon={MapPin} text={personalInfo.location} />}
          {personalInfo.portfolio && <ContactItem icon={LinkIcon} text={personalInfo.portfolio} />}
          {personalInfo.linkedin && <ContactItem icon={LinkedinIcon} text={personalInfo.linkedin} />}
          {personalInfo.github && <ContactItem icon={GithubIcon} text={personalInfo.github} />}
        </div>
      </motion.header>

      {personalInfo.summary && (
        <motion.section variants={itemVariants} layout className="mb-8">
          <ClassicHeading title="Executive Summary" />
          <p className="text-slate-800 leading-relaxed text-[15px] whitespace-pre-wrap">{personalInfo.summary}</p>
        </motion.section>
      )}

      {experience.length > 0 && (
        <motion.section variants={itemVariants} layout className="mb-8">
          <ClassicHeading title="Professional Experience" />
          <div className="space-y-6">
            {experience.map((exp) => (
              <motion.div layout key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[16px] font-bold text-slate-900">{exp.position || 'Position Title'} <span className="font-normal italic">at {exp.company || 'Company'}</span></h3>
                  <span className="text-[15px] font-medium text-slate-600 whitespace-nowrap ml-4">
                    {exp.startDate} {exp.startDate && exp.endDate && '—'} {exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <ul className="list-disc list-outside ml-5 text-[15px] text-slate-800 space-y-1">
                    {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line}</li>)}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {education.length > 0 && (
        <motion.section variants={itemVariants} layout className="mb-8">
          <ClassicHeading title="Academic Credentials" />
          <div className="space-y-4">
            {education.map((edu) => (
              <motion.div layout key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[16px] font-bold text-slate-900">{edu.institution || 'Institution'}</h3>
                  <span className="text-[15px] font-medium text-slate-600 whitespace-nowrap ml-4">
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
        <div>
          {skills?.length > 0 && (
            <motion.section variants={itemVariants} layout className="mb-6">
              <ClassicHeading title="Core Competencies" />
              <div className="text-[15px] text-slate-800">{skills.map(s => s.name).join(', ')}</div>
            </motion.section>
          )}
          {languages?.length > 0 && (
            <motion.section variants={itemVariants} layout className="mb-6">
              <ClassicHeading title="Languages" />
              <div className="text-[15px] text-slate-800">{languages.map(s => s.name).join(', ')}</div>
            </motion.section>
          )}
          {projects?.length > 0 && (
            <motion.section variants={itemVariants} layout className="mb-6">
              <ClassicHeading title="Academic Projects" />
              <ul className="list-disc list-inside text-[15px] text-slate-800">
                {projects.map(p => <li key={p.id}>{p.name}</li>)}
              </ul>
            </motion.section>
          )}
        </div>
        <div>
          {certifications?.length > 0 && (
            <motion.section variants={itemVariants} layout className="mb-6">
              <ClassicHeading title="Certifications" />
              <ul className="list-disc list-inside text-[15px] text-slate-800">
                {certifications.map(p => <li key={p.id}>{p.name}</li>)}
              </ul>
            </motion.section>
          )}
          {workshops?.length > 0 && (
            <motion.section variants={itemVariants} layout className="mb-6">
              <ClassicHeading title="Workshops & Seminars" />
              <ul className="list-disc list-inside text-[15px] text-slate-800">
                {workshops.map(p => <li key={p.id}>{p.name}</li>)}
              </ul>
            </motion.section>
          )}
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

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl shadow-slate-200/50 p-12 shrink-0 mx-auto"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0,0,0,0.02)"
      }}
    >
      {resumeData.template === 'classic' ? <ClassicTemplate resumeData={resumeData} /> : <ModernTemplate resumeData={resumeData} />}
    </motion.div>
  );
};

export default PreviewPane;
