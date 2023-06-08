const bcrypt = require('bcrypt');
const loginErrors = ""

function login(req, res) {
    res.render('authentication/login.hbs');
}

function register(req, res) {
    res.render('authentication/register.hbs');
}

function storeUser(req, res) {
    const data = req.body;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex .test(data.password);
    
    if (isValidPassword !== true) {
        const loginErrors = "invalid password";
        console.log(loginErrors)
        res.render('authentication/login.hbs', { loginErrors });
        return false;
    }

    console.log('valid password');

    if (data.password !== data.passwordConfirmation) {
        const loginErrors = "Provided passwords don't match";
        console.log(loginErrors)
        res.render('authentication/login.hbs', { loginErrors });
        return false;
    }

    bcrypt.hash(data.password, 12).then(hash => {
        data.password = hash;
        delete data.passwordConfirmation; // Delete the passwordConfirmation property
        console.log(data);
        res.render('home.hbs');
    });

}

module.exports = {
    login,
    register,
    storeUser,
    loginErrors,
}