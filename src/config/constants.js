module.exports = {
  ALLOWED_WORD_EXTENSIONS: ['.doc', '.docx'],
  ALLOWED_IMAGE_EXTENSIONS: ['.heif', '.heic'],
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  SUPPORTED_FORMATS: {
    word: ['doc', 'docx'],
    image: ['heif', 'heic']
  }
};
