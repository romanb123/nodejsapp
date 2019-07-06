var fs = require('fs');
var path = require('path');
var database = require('../sql-connect/sql-connect');

module.exports = class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    addToAll() {
        return database.execute('INSERT INTO products (id,title,price,description) VALUES (?,?,?,?)',
            [this.id, this.title, this.price, this.description]
        );
    }
    static showProducts() {
        return database.execute('SELECT * FROM products');
    }
    static showOnePronuct(thisid) {
        const datapath = path.join("data", "data.json");
        var tt = fs.readFileSync(datapath, "utf8", (err, datafile) => {
            if (err) {
                return [];
            }

            let onefile = JSON.parse(datafile);
            return onefile;
        });
        console.log("tt            " + tt);
        let rr = JSON.parse(tt);
        console.log("rr            " + rr);
        let yy = rr.find(p => p.id === thisid);
        console.log("yy            " + yy.id);
        return yy;
    }

}