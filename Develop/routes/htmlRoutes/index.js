// must declare path for directory to work
const path = require("path");
const router = require('express').Router();

// router.get, notes.html (reference in-class notes)
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// router.get, index.html (reference in-class notes)
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// export router
module.exports = router;