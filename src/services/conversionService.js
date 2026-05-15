const fs = require('fs').promises;
const heicConvert = require('heic-convert');

// For Word to PDF, we'll use docx-pdf which uses LibreOffice
// OR use an alternative approach with officegen or docx-pdf-converter
const docxConverter = require('docx-pdf');
const util = require('util');
const docxToPdf = util.promisify(docxConverter);

class ConversionService {
  async convertWordToPdf(filePath) {
    try {
      const outputPath = filePath.replace(/\.(docx?|DOCX?)$/, '.pdf');
      
      // Convert using docx-pdf
      await docxToPdf(filePath, outputPath);
      
      // Read the generated PDF
      const pdfBuffer = await fs.readFile(outputPath);
      
      // Clean up the temporary PDF file
      await fs.unlink(outputPath);
      
      return pdfBuffer;
    } catch (error) {
      console.error('Word to PDF conversion error:', error);
      throw new Error('Failed to convert Word document to PDF. Make sure LibreOffice is installed.');
    }
  }

  async convertHeifToJpg(filePath) {
    try {
      const inputBuffer = await fs.readFile(filePath);
      
      const jpgBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9
      });
      
      return jpgBuffer;
    } catch (error) {
      console.error('HEIF to JPG conversion error:', error);
      throw new Error('Failed to convert HEIF image to JPG');
    }
  }
}

module.exports = new ConversionService();