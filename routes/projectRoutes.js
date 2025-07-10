const express = require('express');
const router = express.Router();
// const upload = require('../middleware/upload');
const projectController = require('../controllers/projectController');

router.post('/create', projectController.createProject);
router.get('/get/all', projectController.getAllProjects);

module.exports = router;
