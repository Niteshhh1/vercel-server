const express = require('express');
const router = express.Router();
// const upload = require('../middleware/upload');
const { createClient, getAllClients } = require('../controllers/clientController');

router.post('/create',createClient);
router.get('/get/all', getAllClients);
module.exports = router;