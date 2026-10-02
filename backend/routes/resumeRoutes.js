import express from 'express';
import Resume from '../models/Resume.js';

const router = express.Router();

// GET all resumes
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single resume
router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE new resume
router.post('/', async (req, res) => {
  const resume = new Resume(req.body);
  try {
    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE resume
router.put('/:id', async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE resume
router.delete('/:id', async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
