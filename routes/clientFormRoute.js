const express = require('express');
const router = express.Router();
const { createClientForm, getAllClientRequests } = require('../controllers/clientFormDetails');

// POST /api/client-request
router.post('/form', createClientForm);
router.get('/admin/all', getAllClientRequests);

module.exports = router;

