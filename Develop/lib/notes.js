const fs = require('fs');
// must declare path for directory to work
const path = require('path');

// function to create a new note
function createNewNote(body, notes) {
    const note = body;
    // need to push the new note in order to GET it later
    notes.push(note);
    
    // write file, use JSON.stringify
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify({notes}, null, 2)
    )
    // return the note created
    return note;
};

// export createNewNote (use brackets per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
module.exports = { createNewNote };


// figure out heroku info