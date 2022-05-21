const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Chore = require('../models/choreModel');

// @desc Get chores
// @route GET /api/v1/chores
// @access Private
const getChores = asyncHandler(async (req, res) => {});

// @desc Create chore
// @route POST /api/v1/chores
// @access Private
const createChore = asyncHandler(async (req, res) => {
  if (!req.body.task || !req.body.day) {
    console.log(req.body);
    res.status(400);
    throw new Error('Please fill out all information');
  }

  const chore = await Chore.create({
    user: req.body.user,
    task: req.body.task,
    day: req.body.day,
  });

  res.status(200).json(chore);
});

module.exports = { getChores, createChore };
