import "./Transaction.scss";
import { Divider } from 'antd';
const TransactionList = (props) => {
  const transactionsFromProps = props.transaction;
  // sort data by date
  const transactions = transactionsFromProps.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  return (
    <div className="transactionList">
      <div className="list-title">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>Your Transaction History
      </div>
      <div className="transaction-list-main">
        {
          transactions ? transactions.map(transaction => {
            return (
              <div className="transaction-main-wrapper">
                <div key={transaction.id} className="transaction" >
                  <div className="transaction-left">
                    <p className="transactionTitle">{transaction.title}</p>
                    <p className="transaction-date">{transaction.date}</p>
                  </div>
                  {/* right side icons and amount Numbers  */}
                  <div className="transaction-right">
                    {transaction.type === "income" ? <p className="income"> + {transaction.amount}</p> : <p className="expense"> - {transaction.amount}</p>}
                    <svg xmlns="http://www.w3.org/2000/svg" className="editicon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => props.UpdateClick(transaction.id)} >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="deleteicon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => props.DeleteClick(transaction.id)}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                </div>
                <hr class="border-0 bg-gray-500 text-gray-500 h-px"></hr>
              </div>

            )
          }) : null
        }
      </div>
    </div>
  );
};
export default TransactionList;