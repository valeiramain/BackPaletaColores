import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema(
  {
    nombre: {
      type: String,
      minLength: 5,
      maxLength: 100,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

// el nombre del modelo va en SINGULAR
const Color = mongoose.model("color", colorSchema);

export default Color;
