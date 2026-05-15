# Document Converter Backend API

Backend service for converting Word documents to PDF and HEIF images to JPG.

## Features

- Word (.doc, .docx) to PDF conversion
- HEIF/HEIC to JPG conversion
- MVC architecture
- File upload handling
- Error handling middleware

## Prerequisites

- Node.js 16+ (recommended 18+)
- LibreOffice installed on server (for Word to PDF conversion)

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
NODE_ENV=development
UPLOAD_DIR=uploads
OUTPUT_DIR=output
MAX_FILE_SIZE=10485760
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/health`
- Returns API status

### Word to PDF
- **POST** `/api/convert/word-to-pdf`
- Content-Type: `multipart/form-data`
- Body: `file` (Word document)
- Returns: PDF file

### HEIF to JPG
- **POST** `/api/convert/heif-to-jpg`
- Content-Type: `multipart/form-data`
- Body: `file` (HEIF/HEIC image)
- Returns: JPG file

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Custom middleware
│   ├── models/         # Data models (if needed)
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── server.js       # Entry point
├── uploads/            # Temporary upload directory
├── output/             # Output directory
├── .env                # Environment variables
└── package.json        # Dependencies
```

## Deployment Notes

For Render or Railway deployment:
1. Install LibreOffice in the container
2. Add build command: `apt-get install -y libreoffice`
3. Ensure write permissions for uploads/ and output/ directories

## License

MIT
