const express = require('express');
const router = express.Router();
const { sendContactMail } = require('../controllers/contactController');

router.post('/', sendContactMail);

module.exports = router;
