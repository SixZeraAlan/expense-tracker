import verify from "../../middleware/verify";

import { createTransaction, getAllTransactions, updateTransaction, deleteTransaction, getTransaction } from '../../controllers/transaction'

export default async router => {
  router.get("/transaction", async (ctx, next) => {
    ctx.body = "this a transaction response";
  });

  router.post("/transaction/add", createTransaction);
  router.all("/transaction/list", getAllTransactions);
  router.all("/transaction", getTransaction);
  router.put("/transaction/update/:id", updateTransaction);
  router.all("/transaction/delete/:id", deleteTransaction);
};
