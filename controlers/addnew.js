const Item = require("../modules/prodcts");

exports.newProd = (req, res, next) => {
    const newPro = new Item(null, req.body.title, req.body.price, req.body.description);
    console.log(newPro);
    newPro.addToAll().then(() => {
        res.redirect("/list");
    }).catch(err => {
        console.log(err);
    });

};
exports.idproduct = (req, res, next) => {
    const isd = req.params.productid;
    console.log("params         " + req.params.productid);
    let theprod = Item.showOnePronuct(isd);
    console.log("theprod         " + theprod);
    res.render('oneprod', { prod: theprod });
};
exports.addProduxt2View = (req, res, next) => {
    res.render('add-product', { title: 'value of this property' });
};

exports.addToList = (req, res, next) => {
    Item.showProducts().then((e) => {
        console.log(e[0]);
        res.render('list', { we: e[0] });
    });
};
