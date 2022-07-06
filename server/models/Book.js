const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: String,
  }
});
//
const BookModule = mongoose.model('Books', BookSchema);
module.exports = BookModule