const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**N.B:
 * These are Mongo DB schemeas not GraghQL schema
 **/

/**We dont add the book id because in mongo its going
 * to be authomatically generated for us*/
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model('Book', bookSchema);
