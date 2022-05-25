const express = require('express');
const router = express.Router();

const {
  createChore,
  getChores,
  updateChore,
  deleteChore,
} = require('../controllers/choreController');

router.route('/').get(getChores).post(createChore);

router.route('/:id').put(updateChore).delete(deleteChore);

module.exports = router;
