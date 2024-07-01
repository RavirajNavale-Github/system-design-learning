const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Use Helmet to set various HTTP headers for security
app.use(helmet());

// Set X-Frame-Options header to DENY
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

// Set Content Security Policy
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "frame-ancestors 'self' https://trusted.com;"
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Iframe Protection with Express');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});