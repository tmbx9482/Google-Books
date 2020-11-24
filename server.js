const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 3500;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//  API routes
app.use("/api", apiRoutes);

//  GET Method API 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// LocalHost 
app.listen(PORT, () => {
    console.log(`Globel Search ==> API server now on port http://localhost:${PORT}`);
});
