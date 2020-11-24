const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: [String], require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    link: { type: String, require: true }
});

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;