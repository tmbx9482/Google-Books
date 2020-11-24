const { Router } = require("express")
const path = require("path")
const router = require("express").Router()
// 
const bookRoute = require("./books")

router.use("/books", bookRoute)

module.exports = router