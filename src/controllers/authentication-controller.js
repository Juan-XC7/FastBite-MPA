function login(req, res) {
    res.render('authentication/login.hbs');
}

function register(req, res) {
    res.render('authentication/register.hbs');
}


module.exports = {
    login: login,
    register: register,
}