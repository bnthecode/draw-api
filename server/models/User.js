import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
  },

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "Drawings",
    },
  ],

});

export default mongoose.model("User", User);
