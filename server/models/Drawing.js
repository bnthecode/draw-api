import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Drawing = new Schema(
  {
    createdAt: {
      type: Date,
    },
    description: {
      type: String,
    },
    title: {
      type: String,
    },
    creator: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    isPublic: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Drawing", Drawing);
