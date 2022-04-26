import mongoose from "mongoose";
import moment from "moment";

const Schema = mongoose.Schema;
const transactionSchema = new Schema(
  {
    title: { type: String },
    type: { type: String },
    catagory: { type: String },
    amount: { type: String },
    date: { type: String }
  },
  { versionKey: false }
);

transactionSchema.set("toJSON", { getters: true, virtuals: true });
transactionSchema.set("toObject", { getters: true, virtuals: true });

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
