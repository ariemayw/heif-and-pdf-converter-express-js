const express = require('express');
const cors = require('cors');
const conversionRoutes = require('./routes/conversionRoutes');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use('/convert', conversionRoutes);

module.exports = app; // ← export only, no app.listen()