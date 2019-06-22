const Item = require("../modules/prodcts");

exports.newProd = (req, res, next) => {
    const newPro = new Item(req.body.product);
    console.log(req.body.product);
    newPro.addToAll();
    console.log(newPro);
    res.redirect("/list");
};
exports.addProduxt2View = (req, res, next) => {
    res.render('add-product', { title: 'value of this property' });
};

exports.addToList = (req, res, next) => {
    const all = Item.showProducts();
    res.render('list', { lists: all });
    console.log("from list", all);
};
