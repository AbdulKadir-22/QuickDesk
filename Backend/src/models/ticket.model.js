const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketStatus = ["open", "in_progress", "resolved", "closed"];

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    attachments: [
      {
        type: String,
      },
    ],
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const TicketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    attachments: [
      {
        type: String,
      },
    ],

    message_thread: [MessageSchema],

    created_on: {
      type: Date,
      default: Date.now,
    },

    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assigned_to: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    status: {
      type: String,
      enum: ticketStatus,
      default: "open",
    },

    upvotes: {
      type: Number,
      default: 0,
    },

    downvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", TicketSchema);
