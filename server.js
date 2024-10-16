const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

app.use(cors()); // Allows requests from frontend
app.use(express.json()); // Middleware to parse JSON requests

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use the authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);  // Prefix API routes with '/api/auth'

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
