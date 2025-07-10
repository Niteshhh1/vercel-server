const express = require('express');
const router = express.Router();
const {
  subscribeEmail,
  getAllSubscribedEmails
} = require('../controllers/subscriberController');

// User subscribes
router.post('/subscribe', subscribeEmail);

// Admin views all subscribed emails
router.get('/admin/subscribed-emails', getAllSubscribedEmails);

module.exports = router;
