const express = require('express');
const router = express.Router();

const { createChore, getChores } = require('../controllers/choreController');

router.route('/').get(getChores).post(createChore);

module.exports = router;
