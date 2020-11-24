const router = require("express").Router();
const { Router } = require("express");
const bookControllers = require("../../controllers/bookControllers");
const { model } = require("../../models/book");

// finds all routes /api/books/
router.route("/")
    .get(bookControllers.findAll)
    .post(bookControllers.create);







module.exports = router