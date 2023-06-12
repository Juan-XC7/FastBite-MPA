function renderUserAccountManagement(req, res) {
    res.render('admin/account-management/user-account-management.hbs');
}

function renderUserAccountCreation(req, res) {
    res.render('admin/account-management/user-account-creation.hbs');
}

function renderUserAccountEdition(req, res) {
    res.render('admin/account-management/user-account-edition.hbs');
}


module.exports = {
    renderUserAccountEdition,
    renderUserAccountCreation,
    renderUserAccountManagement,

}