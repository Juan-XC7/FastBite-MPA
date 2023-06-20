const { recoverData } = require("../../src/controllers/authentication-controller");

function homeRedirect(req, res) {
    window.location.href = "/";
}

module.exports = {
    homeRedirect,
}

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));


