const router = require('express').Router();
// refer to createNewNote from lib/notes file
const { createNewNote} = require('../../lib/notes');
// refer to notes from db.json file
const { notes } = require('../../db/db.json');

// create GET route
router.get('/notes', (req, res) => {
    // results from user input is "notes"
    let results = notes;
    // "jsonify" the results
    res.json(results);
});

// create POST route
router.post('/notes', (req, res) => {
    // stringify the "notes" request body
    req.body.id = notes.length.toString();
    console.log(notes);

    // declare note in order to create a new note
    const note = createNewNote(req.body, notes);
});

module.exports = router;