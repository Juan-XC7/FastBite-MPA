const { recoverData } = require("../../src/controllers/render_controllers/authentication-controller");

function homeRedirect(req, res) {
    window.location.href = "/";
}

module.exports = {
    homeRedirect,
}