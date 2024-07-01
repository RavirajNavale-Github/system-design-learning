const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
// Endpoint to simulate SSRF
app.post('/fetch-url', async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the URL');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});