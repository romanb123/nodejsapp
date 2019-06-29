const Item = require("../modules/prodcts");

exports.newProd = (req, res, next) => {
    const newPro = new Item(req.body.product, req.body.id);
    console.log(req.body.product);
    console.log(req.body.id);
    newPro.addToAll(req.body.id);
    console.log(newPro);
    console.log("item:  " + Item);
    res.redirect("/list");
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
    const ItemsFromFile = Item.showProducts();
    console.log("rrr " + ItemsFromFile);
    res.render('list', { we: JSON.parse(ItemsFromFile) });
};
