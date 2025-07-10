const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
  try {
    const { name,image,description } = req.body;

    const newProject = new Project({ name, image, description });
    await newProject.save();

    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (err) {
    console.error(" Error saving project:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};
