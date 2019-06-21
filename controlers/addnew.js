const Item = require("../modules/prodcts");

exports.newProd = (req, res, next) => {
    var newPro = new Item(req.body.title);
    newPro.addToAll();
    var allprods = newPro.showProducts();
    res.redirect("/list");
};
exports.addProduxt2View = (req, res, next) => {
    res.render('add-product', { title: 'value of this property' });
};

exports.addToList = (req, res, next) => {
    res.render('list', { lists: allprods });
    console.log("from list", allprods);
};
