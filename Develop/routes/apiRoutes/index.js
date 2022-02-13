const router = require('express').Router();
// refer to noteRoutes within same folder
const noteRoutes = require('./noteRoutes');

// place ".use(noteRoutes); here"
router.use(noteRoutes);

// need to export router declared above
module.exports = router;