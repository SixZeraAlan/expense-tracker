import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
    avatar: { type: String }
  },
  { versionKey: false }
);
UserSchema.set("toJSON", { getters: true, virtuals: true });
UserSchema.set("toObject", { getters: true, virtuals: true });
const User = mongoose.model("User", UserSchema);
export default User;
