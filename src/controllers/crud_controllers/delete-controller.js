function deleteUser(req, res) {
    const id = req.body.id;

    req.getConnection((err, connection) => {
        connection.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
            if(err) {
                err.json(err);
            }
            res.redirect('/account-management');
        });
    });
}

function deleteProduct(req, res) {
    const id = req.body.id;

    req.getConnection((err, connection) => {
        connection.query('DELETE FROM products WHERE id = ?', [id], (err, rows) =>{
            if(err){
                err.json(err)
            }
            res.redirect("/product-management");
        });
    });
}


module.exports = {
    deleteUser,
    deleteProduct,
    
}