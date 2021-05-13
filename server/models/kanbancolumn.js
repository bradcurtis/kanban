const mongoose = require('mongoose');

const { Schema } = mongoose;

const kanbanColumnEntry = new Schema({
  name: String, // String is shorthand for {type: String}
  key: String,
  comments: String,
  cardindex: Number,
  cards: [{ 
    name: String, 
    cardindex: Number,
    key: String,
    comments: String,
    name: String}],
  
});

const KanbanColumnEntry = mongoose.model('kanbanColumnEntry', kanbanColumnEntry);

module.exports = KanbanColumnEntry;