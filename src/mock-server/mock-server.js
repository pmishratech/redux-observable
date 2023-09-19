// mock-server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const mockData = {
  data: ["Item 1", "Item 2", "Item 3"]
};

// Routes
app.get('/data', (req, res) => {
  res.json(mockData.data);
});

// Start server
app.listen(port, () => {
  console.log(`Mock server is running on http://localhost:${port}`);
});
