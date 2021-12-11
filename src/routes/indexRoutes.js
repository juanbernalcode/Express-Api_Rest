const express = require('express');

const router = express.Router();




// --- definiendo la ruta / de la api----
router.get('/', (req, res) => {
    res.send('Express - Api REST');
})

router.get('/info', (req, res) => {
    const info = new Date();
    res.send(info);
    res.send('length')
});


module.exports = router