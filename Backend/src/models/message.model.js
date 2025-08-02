const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  ticket: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket',
    required: true
  },

  timestamp: {
    type: Date,
    default: Date.now
  },

  content: {
    type: String,
    required: true
  },

  attachments: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', MessageSchema);

