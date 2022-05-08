const router = require('express').Router();

router.get('/notes', (req, res) => {
    store
    // get notes, convert to JSON
        .getNotes().then((notes) => {
            return res.json(notes);
        })
        // error handler
        .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    store
    // post/add note, then convert note to JSON
        .addNote(req.body).then((note) => res.json(note))
        // error handler
        .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
    store
    // delete note by id
        .removeNote(req.params.id).then(() => res.json({ ok: true }))
        // error handler
        .catch((err) => res.status(500).json(err));
});

module.exports = router;