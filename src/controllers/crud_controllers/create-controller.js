const bcrypt = require('bcrypt');
const { validatePassword } = require('../authentication-controller.js');



function storeUser(req, res) {
    const data = req.body;
    const isValidPassword = validatePassword(data.password, data.passwordConfirmation);
    const loginErrors = validatePassword(data.password, data.passwordConfirmation);

    if (isValidPassword !== true) {
        res.render('admin/account-management/account-creation.hbs', { loginErrors });
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

function storeProduct(req, res) {
    const data = req.body;

    req.getConnection((err, connection) => {
        connection.query('INSERT INTO products SET ?', [ data ], (err, rows) => {
            res.redirect('/product-creation');
        });
    });
}

module.exports = {
    storeUser,
    storeProduct,
        
}