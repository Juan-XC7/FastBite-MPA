function accountManagement(req, res) {
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM users', (err, users) => {
            if(err) {
                res.json(err);
            }
            res.render('admin/account-management/account-management.hbs', { users });
        });
    });
}



function productManagement(req, res) {
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM products', (err, products) => {
            if(err) {
                res.json(err);
            }
            res.render('admin/product-management/product-management.hbs', { products });
        });
    });
}

function accountCreation(req, res) {
    res.render('admin/account-management/account-creation.hbs');
}

function accountEdition(req, res) {
    res.render('admin/account-management/account-edition.hbs');
}

function login(req, res) {
    res.render('authentication/login.hbs');
}

function register(req, res) {
    res.render('authentication/register.hbs');
}

function home(req, res) {
    res.render('home.hbs');
}

function workerPanel(req, res) {
    res.render('workers/worker-panel.hbs');
}

function adminPanel(req, res) {
    res.render('admin/admin-panel.hbs');
}

function productManagement(req, res) {
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM products', (err, products) => {
            if(err) {
                res.json(err);
            }
            res.render('admin/product-management/product-management.hbs', { products });
        });
    });
}


function productCreation(req, res) {
    res.render('admin/product-management/product-creation.hbs');
}

function productEdition(req, res) {
    res.render('admin/product-management/product-edition.hbs');
}


module.exports = {
    accountManagement,
    accountCreation,
    accountEdition,
    login,
    register,
    home,
    adminPanel,
    workerPanel,
    productManagement,
    productCreation,
    productEdition,


}