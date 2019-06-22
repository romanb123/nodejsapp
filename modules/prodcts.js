allproducts = [];

module.exports = class Product {
    constructor(name) {
        this.title = name;
    }

    addToAll() {
        allproducts.push(this);
    }
    static showProducts() {
        return allproducts;
    }

}