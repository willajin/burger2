// import orm.js
var orm = require("../config/orm.js");

// code to call ORM functions using burger specific input
var burger = {
    // display all burgers
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // add burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    // update burger
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },

    // delete burger
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

// export burger to burgers_controller.js
module.exports = burger;