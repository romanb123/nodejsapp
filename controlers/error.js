exports.error = (req, res, next) => {
    res.render('404', { title: 'page not found' });
};