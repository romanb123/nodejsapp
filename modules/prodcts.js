var fs = require('fs');
var path = require('path');

module.exports = class Product {
    constructor(name) {
        this.title = name;
    }

    addToAll() {
        var datapath = path.join("data", "data.json");

        fs.readFile(datapath, (err, data) => {
            let allproducts = [];
            if (!err) {
                allproducts = JSON.parse(data);
            }
            allproducts.push(this);
            fs.writeFile(datapath, JSON.stringify(allproducts), (err) => {
                console.log(err);
            });
            console.log(allproducts);
        });

    }
    static showProducts(pass) {
        const datapath = path.join("data", "data.json");
        fs.readFile(datapath, (err, datafile) => {
            if (err) {
                pass([]);
            }
            pass(JSON.parse(datafile));
        });

    }

}