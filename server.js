// refer to module 11 for beginning a server.js file
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// declare html and api Routes paths
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// express app.use statements (refer to documentation)
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// we need to "use" the routes we declared (refer to module if needed)
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// app.listen always goes at the end of the file
app.listen(PORT, () => {
    console.log(`API server - ${PORT}.`);
});