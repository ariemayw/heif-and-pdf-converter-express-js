const express = require('express');
const router = express.Router();
const { upload } = require('../middlewares/upload');
const ConversionController = require('../controllers/conversionController');

// Word to PDF conversion
router.post('/word-to-pdf', upload.single('file'), ConversionController.wordToPdf);

// HEIF to JPG conversion
router.post('/heif-to-jpg', upload.single('file'), ConversionController.heifToJpg);

module.exports = router;
