const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/contact', contactRoutes);

// Error handler middleware
app.use(errorHandler);

// Serve React frontend production build (dist folder)
app.use(express.static(path.join(__dirname, '../dist')));

// SPA fallback route — serves index.html on non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;
