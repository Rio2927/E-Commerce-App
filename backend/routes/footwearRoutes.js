const express = require('express');
const router = express.Router();
const footwearController = require('../controllers/footwearController');

router.get('/footwear', footwearController.getFootwear);
router.post('/footwear', footwearController.addFootwear);
router.delete('/footwear', footwearController.deleteFootwear);

module.exports = router;
