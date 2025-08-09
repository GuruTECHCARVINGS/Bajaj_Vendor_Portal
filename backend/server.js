const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Dummy users with types
const users = [
  { email: 'vendor@bajaj.com', password: 'vendorpass', type: 'vendor' },
  { email: 'buyer@bajaj.com', password: 'buyerpass', type: 'buyer' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password, type } = req.body;
  const user = users.find(u => u.email === email && u.password === password && u.type === type);

  if (user) {
    res.json({ message: `Login successful for ${type}`, status: 'success' });
  } else {
    res.status(401).json({ message: 'Invalid credentials or user type', status: 'fail' });
  }
});
app.get('/', (req, res) => {
  res.send('Welcome to the Bajaj Vendor Portal API');
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});