import Transaction from "../models/transaction";
import md5 from "md5";
import jwt from "jsonwebtoken";
import config from "../configs";

export async function createTransaction(ctx) {
  const title = ctx.request.body.title;
  const type = ctx.request.body.type; 
  const catagory = ctx.request.body.catagory;
  const amount = ctx.request.body.amount;
  const date = ctx.request.body.date;
  
  if (!title) {
    ctx.body = {
      status: 401,
      message: "title can not be null"
    };
    return;
  }

  const newTransaction = new Transaction({
    title,
    type,
    catagory,
    amount,
    date
  });

  try {
    let createResult = await newTransaction.save();
    console.log("new transaction creat successful");
    ctx.body = {
      success: true,
      transaction: createResult
    };
  } catch (err) {
    ctx.throw(500, "server error");
  }
}

export async function getAllTransactions(ctx) {
  try {
    const transactions = await Transaction.find({});
    ctx.body = {
      success: true,
      list: transactions
    };
  } catch (err) {
    ctx.throw(500, "server error");
  }
}

export async function updateTransaction(ctx) {
  const { title, type, catagory, amount, date } = ctx.request.body;
  const id = ctx.params.id;
  if (!title) {
    ctx.body = {
      status: 401,
      message: "title can not be null"
    };
    return;
  }

  const update_transaction = {
    title,
    type,
    catagory,
    date,
    amount
  };

  try {
    const transaction = await Transaction.findByIdAndUpdate(id, {
      $set: update_transaction
    }, { new: true });
    ctx.body = {
      success: true,
      transaction
    };
  } catch (err) {
    if (err.name === "CastError") {
      ctx.throw(401, "id not exit");
    } else {
      ctx.throw(500, "server error");
    }
  }
}

export async function getTransaction(ctx) {
  const id = ctx.request.body.id || ctx.query.id;
  if (!id) {
    ctx.body = {
      status: 401,
      message: "id can not be null"
    };
    return;
  }

  try {
    const transaction = await Transaction.findById(id);
    ctx.body = {
      success: true,
      transaction
    };
  } catch (err) {
    ctx.throw(500, "server error");
  }
}

export async function deleteTransaction(ctx) {
  const id = ctx.params.id;
  if (!id) {
    ctx.body = {
      status: 401,
      message: "id can not be null"
    };
    return;
  }
  try {
    const transaction = await Transaction.findByIdAndRemove(id);
    ctx.body = {
      success: true,
      transaction
    };
  } catch (err) {
    ctx.throw(500, "server error");
  }
}
