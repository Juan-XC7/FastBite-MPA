function renderWorkerPanel(req, res) {
    res.render('workers/worker-panel.hbs');
}

function renderAdminPanel(req, res) {
    res.render('admin/admin-panel.hbs');
}

module.exports = {
    renderAdminPanel,
    renderWorkerPanel,
}