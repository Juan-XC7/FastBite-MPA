const bcrypt = require('bcrypt');
const loginErrors = ""

function login(req, res) {
    res.render('authentication/login.hbs');
}

function register(req, res) {
    res.render('authentication/register.hbs');
}

function validatePassword(password, passwordConfirmation) {
    const acceptablePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValidPassword = acceptablePassword.test(password);

    if (!isValidPassword) {
        const loginErrors = "invalid password";
        console.log(loginErrors + '1');
        return loginErrors;
    }

    if (password !== passwordConfirmation) {
        const loginErrors = "Provided passwords don't match";
        console.log(loginErrors);
        return loginErrors;
    }

    return true;
}

function storeUser(req, res) {
    const data = req.body
    const passwordStatus = validatePassword(data.password, data.passwordConfirmation);

    if (passwordStatus !== true) {
        return;
    }

    bcrypt.hash(data.password, 12).then(hash => {
        delete data.passwordConfirmation; // Delete the passwordConfirmation property
        data.password = hash;
    });

    req.getConnection((err, connection) => {
        delete data.passwordConfirmation;
        console.log(data);
        connection.query('INSERT INTO users SET ?', [ data ], (err, rows) => {
            res.redirect('/register');
        });
    });

    console.log('successful registration')
}

module.exports = {
    login,
    register,
    storeUser,
    loginErrors,
    validatePassword,
}

res.render('authentication/register.hbs', { passwordStatus });
