const express = require('express');
const router = express.Router();



router.get('/api/persons', (req, res) => {
    res.send('my phonebook');
});

module.exports = router;