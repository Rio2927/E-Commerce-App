const Mobile = require('../models/mobile'); 

exports.getMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find({});
        res.json(mobiles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addMobile = async (req, res) => {
    try {
        if (!req.body.brand || !req.body.model || !req.body.release_date) {
            return res.status(400).json({ message: "Please add all the fields" });
        }

        const newMobile = await Mobile.create(req.body);
        res.status(201).json({ message: "Mobile added successfully", mobile: newMobile });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.deleteMobile = async (req, res) => {
    try {
        if (!req.body.brand || !req.body.model || !req.body.release_date) {
            return res.status(400).json({ message: "Please add all the fields" });
        }

        const deletedMobile = await Mobile.deleteOne(req.body);

        if (deletedMobile.deletedCount === 0) {
            return res.status(404).json({ message: "No matching mobile found" });
        }

        res.status(200).json({ message: "Mobile deleted successfully", mobile: deletedMobile });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
