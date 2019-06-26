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
    Item.showProducts(w => {
        res.render('list', { lists: w });
        console.log("from list", w);
    });

};
