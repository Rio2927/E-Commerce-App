const Footwear = require('../models/footwear');

exports.getFootwear = async (req, res) => {
    try {
        const footwear = await Footwear.find({});
        res.json(footwear);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addFootwear = async (req, res) => {
    try {
        if (!req.body.brand || !req.body.model || !req.body.release_date) {
            return res.status(400).json({ message: "Please add all the fields" });
        }

        const newFootwear = await Footwear.create(req.body);
        res.status(201).json({ message: "Footwear added successfully", footwear: newFootwear });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.deleteFootwear = async (req, res) => {
    try {
        if (!req.body.brand || !req.body.model || !req.body.release_date) {
            return res.status(400).json({ message: "Please add all the fields" });
        }

        const deletedFootwear = await Footwear.deleteOne(req.body);

        if (deletedFootwear.deletedCount === 0) {
            return res.status(404).json({ message: "No matching footwear found" });
        }

        res.status(200).json({ message: "Footwear deleted successfully", footwear: deletedFootwear });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
