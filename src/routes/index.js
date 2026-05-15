const express = require('express');
const router = express.Router();
const conversionRoutes = require('./conversionRoutes');

router.use('/convert', conversionRoutes);

module.exports = router;
