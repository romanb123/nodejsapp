allproducts = [];

module.exports = class Product {
    constructor(name) {
        this.title = name;
    }

    addToAll() {
        allproducts.push(this);
    }
    showProducts() {
        return allproducts;
    }

}