function home(req, res) {
    res.render('home.hbs');
}

module.exports = {
    home: home,
}