const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Chore = require('../models/choreModel');

// @desc Get chores
// @route GET /api/v1/chores
// @access Private
const getChores = asyncHandler(async (req, res) => {
  const chores = await Chore.find({ user: req.user })
    .populate('user', 'name email')
    .exec();

  res.status(200).json(chores);
});

// @desc Create chore
// @route POST /api/v1/chores
// @access Private
const createChore = asyncHandler(async (req, res) => {
  if (!req.body.task || !req.body.day) {
    res.status(400);
    throw new Error('Please fill out all information');
  }

  if (req.body.users) {
    const extraUsers = await User.find({ email: req.body.users });

    let chore;

    chore = await Chore.create({
      user: [req.user.id, extraUsers[0]._id],
      task: req.body.task,
      day: req.body.day,
    });
  } else {
    chore = await Chore.create({
      user: req.user.id,
      task: req.body.task,
      day: req.body.day,
    });
  }

  res.status(200).json(chore);
});

// @desc Update chores
// @route PUT /api/v1/chores/id
// @access Private
const updateChore = asyncHandler(async (req, res) => {
  const chore = await Chore.findById(req.params.id);

  if (req.body.user == '') {
    req.body.user = req.user.id;
  } else if (req.body.user) {
    const extraUsers = await User.find({ email: req.body.user });
    req.body.user = [req.user.id, extraUsers[0]._id];
  }

  if (!chore) {
    res.status(400);
    throw new Error('Chore does not exist');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Confrim user is attached to chore
  if (!chore.user.includes(req.user.id)) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedChore = await Chore.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedChore);
});

// @desc Delete chore
// @route DELETE /api/v1/chores/id
// @access Private
const deleteChore = asyncHandler(async (req, res) => {
  const chore = await Chore.findById(req.params.id);

  if (!chore) {
    res.status(400);
    throw new Error('Chore does not exist');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Confrim user is attached to chore
  if (!chore.user.includes(req.user.id)) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await chore.remove();

  res.status(200).json('Chore deleted');
});

module.exports = { getChores, createChore, updateChore, deleteChore };
