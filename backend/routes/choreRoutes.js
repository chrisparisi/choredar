const express = require('express');
const router = express.Router();

const {
  createChore,
  getChores,
  updateChore,
  deleteChore,
} = require('../controllers/choreController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getChores).post(protect, createChore);

router.route('/:id').put(protect, updateChore).delete(protect, deleteChore);

module.exports = router;
