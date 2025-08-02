const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  created_on: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);
