function updateAccount(req, res) {
    const id = req.params.id;
    const data = req.body;

    req.getConnection((err, connection) => {
        connection.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, rows) => {
            if(err){
                console.log("error");
            }
            res.redirect('/account-management');
        });
    });
}

function updateTask(req, res) {
    const id = req.params.id;
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE tasks SET ? WHERE id = ?', [data, id], (err, rows) => {
            res.redirect('/tasks');
        })
    })
}

module.exports = {
    updateAccount,

}