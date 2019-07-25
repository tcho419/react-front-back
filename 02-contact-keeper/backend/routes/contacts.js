const express = require('express');
const router = express.Router();

// use router for HTTP requests such as GET, POST, PUT (update), and DELETE

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all contacts for a user');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a new contact');
});

// @route   PUT api/contacts/:id
// @desc    Update a specific contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete a specific contact
// @access  Private
router.delete('/:od', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
