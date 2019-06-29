var fs = require('fs');
var path = require('path');

module.exports = class Product {
    constructor(name, id) {
        this.title = name;
        this.id = id;
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
    static showProducts() {
        const datapath = path.join("data", "data.json");
        let file = fs.readFileSync(datapath, "utf8", (err, datafile) => {
            if (err) {
                return [];
            }
            return JSON.parse(datafile);
        });
        console.log("file       " + JSON.parse(file));
        return file;

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