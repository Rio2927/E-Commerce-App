const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({ email, password: hashedPassword });

    res.status(201).json({ message: "User created successfully!" });
};

exports.login = async (req, res) => {
    const { email, pw } = req.body;
    const existingUser = await Admin.findOne({ email });

    if (!existingUser) {
        return res.json({ previousUser: false, message: "No user exists" });
    }

    const credentialsMatch = await bcrypt.compare(pw, existingUser.password);
    
    if (!credentialsMatch) {
        return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY, { expiresIn: "1h" });

    return res.json({ previousUser: true, message: "Login successful", token });
};

