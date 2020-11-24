const express = require("express");
const router = express.Router();
// 
const apiRoutes = require("./api")
console.log("test")

router.use("/api", apiRoutes)

