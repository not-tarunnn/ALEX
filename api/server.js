const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// Age API
app.get('/api/age', (req, res) => {
  const birthYear = parseInt(req.query.year);
  if (!birthYear || birthYear > new Date().getFullYear()) {
    return res.status(400).json({ error: "Invalid year" });
  }
  const age = new Date().getFullYear() - birthYear;
  res.json({ age });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
