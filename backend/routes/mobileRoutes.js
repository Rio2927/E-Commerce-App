const express = require('express');
const { getMobiles, addMobile, deleteMobile } = require('../controllers/mobileController');
const router = express.Router();

router.get('/mobiles', getMobiles);
router.post('/mobiles', addMobile);
router.delete('/mobiles', deleteMobile);

module.exports = router;
