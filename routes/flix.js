const express = require('express');
const router = express.Router();
const flixCtrl = require('../controllers/flix');

router.get('/', flixCtrl.index);

module.exports = router;