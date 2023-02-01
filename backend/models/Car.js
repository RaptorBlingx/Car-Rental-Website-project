import mongoose from "mongoose";

const rentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  carName: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  gps: {
    type: String,
    default: false,
  },
  seatType: {
    type: String,
    required: true,
  },
  automatic: {
    type: String,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
},
{timestamps:true}
);

export default mongoose.model("Car", rentSchema);


