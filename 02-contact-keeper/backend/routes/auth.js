const express = require('express');
const router = express.Router();

// use router for HTTP requests such as GET, POST, PUT (update), and DELETE

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route   POST api/auth
// @desc    Authenticate user, get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
