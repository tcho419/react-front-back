const express = require('express');
const router = express.Router();

// use router for HTTP requests such as GET, POST, PUT (update), and DELETE

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
