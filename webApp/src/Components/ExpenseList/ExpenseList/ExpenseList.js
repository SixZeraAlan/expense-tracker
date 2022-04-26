import "./ExpenseList.scss";
const ExpenseList = (props) => {
  const transactions = props.transaction;
  // sort date
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  const handleAdd = () => {
    props.AddClick();
  }
  return (
    <div className="expense-table">
      <div className="list-header">
        <div className="list-header-item">Expense List</div>
        <button className="addbutton" onClick={handleAdd}>add Transaction</button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="w-1/6" >Title</th>
            <th className="w-1/6" >Type</th>
            <th className="w-1/6" >Catagory</th>
            <th className="w-1/6" >Amount</th>
            <th className="w-1/6" >Date</th>
            <th className="w-1/6" >Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <tr key={index}>
                <td>{transaction.title}</td>
                {
                  transaction.type === "income" ?
                    <td><span className="income-red">Income</span></td> : <td  ><span className="expense-green">
                      Expense
                    </span></td>
                }
                <td>{transaction.catagory}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td className="table-icon-group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="edit-icon editicon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => props.UpdateClick(transaction.id)} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  &nbsp; &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" className=" delete-icon deleteicon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => props.DeleteClick(transaction.id)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  );
};
export default ExpenseList;