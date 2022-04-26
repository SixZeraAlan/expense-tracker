import "./Catagory.scss";
import { useState, useEffect } from 'react';
import CatagoryChart from "./CatagoryChart";
const CatagoryBreakDown = (props) => {
  const [selectData, setSelectData] = useState("");
  const [expense, setExpense] = useState({
    generalexpense: 0,
    travel: 0,
    utilities: 0,
    shopping: 0,
  });
  const transactions = props.transaction;
  useEffect(() => {
    const newExpense = {
      generalexpense: 0,
      travel: 0,
      utilities: 0,
      shopping: 0,
    }
    transactions.filter((item) => item.date.includes(selectData)).forEach(element => {
      if (element.catagory === "generalexpense") {
        newExpense.generalexpense += Number(element.amount);
      }
      if (element.catagory === "travel") {
        newExpense.travel += Number(element.amount);
      }
      if (element.catagory === "utilities") {
        newExpense.utilities += Number(element.amount);
      }
      if (element.catagory === "shopping") {
        newExpense.shopping += Number(element.amount);
      }
    })
    setExpense(newExpense);
  }, [selectData, transactions]);
  const setSelect = (e) => {
    setSelectData(e.target.value);
  }
  return (
    <div className="catagory-table-wrap">
      <div className="catagory-table">
        <h1>Catagory Breakdown</h1>
        <div className="month-input">
          <input type="month" placeholder="Select Date" onChange={setSelect} className="block appearance-none  bg-white  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline table-select" />
        </div>
        <table className=" catagory-table table-fixed ">
          <thead>
            <tr>
              <th className="w-1/6" >Catagory</th>
              <th className="w-1/6" >Spent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General Expenses</td>
              <td>{expense.generalexpense}</td>
            </tr>
            <tr>
              <td>Travel</td>
              <td>{expense.travel}</td>
            </tr>
            <tr>
              <td>Utilities</td>
              <td>{expense.utilities}</td>
            </tr>
            <tr>
              <td>Shopping</td>
              <td>{expense.shopping}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Catagory-chart">
        <CatagoryChart expense={expense} />
      </div>
    </div>
  );
};
export default CatagoryBreakDown;