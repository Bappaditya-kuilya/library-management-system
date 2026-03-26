// Books routes
const express = require('express');
const router = express.Router();

// GET /books - Get all books
router.get('/', (req, res) => {
    res.json({ message: 'Retrieve all books' });
});

// POST /books - Add a new book
router.post('/', (req, res) => {
    res.json({ message: 'Add a new book' });
});

module.exports = router;