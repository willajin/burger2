// import express and create router
var express = require("express");
var router = express.Router();

// import burger model
var burger = require("../models/burger.js");

// routes
// GET route to retrieve burgers
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// POST route to add burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId});
    });
});

// PUT route to update burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // if no rows changed, then ID does not exist (404)
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// DELETE route to delete burger
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, function(result) {
        if (result.affectedRows === 0) {
            // if no rows changed, then ID does not exist (404)
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export router to server.js
module.exports = router;