function renderProductManagement(req, res) {
    res.render('admin/product-management/product-management.hbs');
}

function renderProductCreation(req, res) {
    res.render('admin/product-management/product-creation.hbs');
}

function renderProductEdition(req, res) {
    res.render('admin/product-management/product-edition.hbs');
}


module.exports = {
    renderProductManagement,
    renderProductCreation,
    renderProductEdition,

}