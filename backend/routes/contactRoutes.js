const express = require('express');
const router = express.Router();
const Lead = require('../models/contact');
const { sendMail } = require('../utils/mailer');

router.post('/', async (req, res) => {
    const { email, phone } = req.body;
    
    if (!email || !phone) {
        return res.status(400).json({ message: "Email and Phone are required" });
    }

    try {
        console.log("Email:", email);
        console.log("Phone:", phone);
        
        const previewUrl = await sendMail(email);
        await Lead.create({ email, contact: phone });
        res.status(201).json({ message: "Data Received", email, phone, URL: previewUrl });
    } catch (error) {
        res.status(500).json({ message: "Error processing request", error: error.message });
    }
});

module.exports = router;
