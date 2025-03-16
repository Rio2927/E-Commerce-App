const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes')
require("dotenv").config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Database Connection
connectDB();


// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/mobileRoutes'));
app.use('/api', require('./routes/footwearRoutes'));



// Use Routes
app.use('/contact', contactRoutes); // Mount the Contact Route

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port = ${PORT}`);
});
