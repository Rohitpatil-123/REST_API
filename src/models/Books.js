const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  summary: {
    type: String,
    require: true,
  },
});

const Books = new mongoose.model("BooksData", BooksSchema);
module.exports = Books;
