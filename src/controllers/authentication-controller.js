const bcrypt = require('bcrypt');
const loginErrors = ""

function renderLogin(req, res) {
    res.render('authentication/login.hbs');
}

function renderRegister(req, res) {
    res.render('authentication/register.hbs');
}

function validatePassword(password, passwordConfirmation) {
    const acceptablePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValidPassword = acceptablePassword.test(password);

    if (!isValidPassword) {
        const loginErrors = "invalid password";
        console.log(loginErrors);
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
    const data = req.body;
    const isValidPassword = validatePassword(data.password, data.passwordConfirmation);
    const loginErrors = validatePassword(data.password, data.passwordConfirmation);

    if (isValidPassword !== true) {
        res.render('authentication/register.hbs', { loginErrors });
        return;
    }

    bcrypt.hash(data.password, 12).then(hash => {
        delete data.passwordConfirmation; // Delete the passwordConfirmation property
        data.password = hash;

        req.getConnection((err, connection) => {
            delete data.passwordConfirmation;
            console.log(data);
            connection.query('INSERT INTO users SET ?', [ data ], (err, rows) => {
                res.redirect('/');
            });
        });
        console.log('successful registration');
    });
}


function recoverData(req, res) {
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM users', (err, rows) => {
            console.log(connection);
        });
    });
}


module.exports = {
    renderLogin,
    renderRegister,
    storeUser,
    loginErrors,
    validatePassword,
    recoverData,
}
