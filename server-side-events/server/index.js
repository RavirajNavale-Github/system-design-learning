const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors())

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  // Send an initial event
  res.write(`data: Connected\n\n`);

  // Send a new message every second
  setInterval(() => {
    const message = `data: ${new Date().toLocaleTimeString()}\n\n`;
    res.write(message);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
