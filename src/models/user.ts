import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  about: { type: String, default: "" },
  skills: { type: [String], default: [] },
  // profileImage: {
  //   public_id: { type: String, required: true },
  //   url: { type: String, required: true },
  // },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export { User };
