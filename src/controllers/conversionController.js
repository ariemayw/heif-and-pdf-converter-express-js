const ConversionService = require('../services/conversionService');
const fs = require('fs');
const path = require('path');

class ConversionController {
  async wordToPdf(req, res, next) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const allowedExtensions = ['.doc', '.docx'];
      const fileExt = path.extname(req.file.originalname).toLowerCase();

      if (!allowedExtensions.includes(fileExt)) {
        fs.unlinkSync(req.file.path);
        return res.status(400).json({ 
          error: 'Invalid file type. Only .doc and .docx files are allowed' 
        });
      }

      const pdfBuffer = await ConversionService.convertWordToPdf(req.file.path);

      // Clean up uploaded file
      fs.unlinkSync(req.file.path);

      const filename = path.parse(req.file.originalname).name + '.pdf';

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': pdfBuffer.length
      });

      res.send(pdfBuffer);
    } catch (error) {
      next(error);
    }
  }

  async heifToJpg(req, res, next) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const allowedExtensions = ['.heif', '.heic'];
      const fileExt = path.extname(req.file.originalname).toLowerCase();

      if (!allowedExtensions.includes(fileExt)) {
        fs.unlinkSync(req.file.path);
        return res.status(400).json({ 
          error: 'Invalid file type. Only .heif and .heic files are allowed' 
        });
      }

      const jpgBuffer = await ConversionService.convertHeifToJpg(req.file.path);

      // Clean up uploaded file
      fs.unlinkSync(req.file.path);

      const filename = path.parse(req.file.originalname).name + '.jpg';

      res.set({
        'Content-Type': 'image/jpeg',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': jpgBuffer.length
      });

      res.send(jpgBuffer);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ConversionController();
