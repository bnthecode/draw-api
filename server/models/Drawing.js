import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Drawing = new Schema({
  createdAt: {
    type: String,
  },

//   creator: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },
  imgUrl: {
    type: String,
  },
  private: {
    type: Boolean,
  }
});

export default mongoose.model("Drawing", Drawing);
