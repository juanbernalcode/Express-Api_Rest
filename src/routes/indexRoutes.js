const express = require('express');

const router = express.Router();




// --- definiendo la ruta / de la api----
router.get('/', (req, res) => {
    res.send('Express - Api REST');
})


module.exports = router