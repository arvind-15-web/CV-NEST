import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false, // For now, no auth
  },
  title: {
    type: String,
    default: 'My Resume',
  },
  personalInfo: {
    fullName: String,
    email: String,
    phone: String,
    location: String,
    portfolio: String,
    linkedin: String,
    github: String,
    title: String,
    summary: String,
  },
  experience: [{
    company: String,
    position: String,
    startDate: String,
    endDate: String,
    description: String,
  }],
  education: [{
    institution: String,
    degree: String,
    startDate: String,
    endDate: String,
  }],
  skills: [{ name: String }],
  languages: [{ name: String }],
  certifications: [{ name: String }],
  workshops: [{ name: String }],
  projects: [{ name: String }],
  template: { type: String, default: 'modern' }
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;
