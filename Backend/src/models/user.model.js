const mongoose = require("mongoose");
const { Schema } = mongoose;

const roles = ["end_user", "support_agent", "admin"];

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    role: {
      type: String,
      enum: roles,
      default: "end_user",
      required: true,
    },

    categories: [
      {
        type: String,
      },
    ],

    profileImage: {
      type: String,
      default: "",
    },

    tickets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],

    assigned_tickets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("User", UserSchema);
