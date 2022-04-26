
import "./IncomeOutcome.scss";
import { useState, useEffect } from 'react';
import IncomeChart from './IncomeChart';
const IncomeOutCome = (props) => {
  const [selectData, setSelectData] = useState("");
  const [expense, setExpense] = useState({
    salary: 0,
    investment: 0,
    property: 0,
    business: 0,
  });
  const transactions = props.transaction;
  useEffect(() => {
    const newExpense = {
      salary: 0,
      investment: 0,
      property: 0,
      business: 0,
    }
    transactions.filter((item) => item.date.includes(selectData)).forEach(element => {
      if (element.catagory === "salary") {
        newExpense.salary += Number(element.amount);
      }
      if (element.catagory === "travel") {
        newExpense.investment += Number(element.amount);
      }
      if (element.catagory === "utilities") {
        newExpense.property += Number(element.amount);
      }
      if (element.catagory === "shopping") {
        newExpense.business += Number(element.amount);
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
        Income Breakdown
        <div className="month-input">
          <input type="month" placeholder="Select Date" onChange={setSelect} className="block appearance-none  bg-white  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <table className=" catagory-table table-fixed">
          <thead>
            <tr>
              <th className="w-1/6" >Catagory</th>
              <th className="w-1/6" >Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salary</td>
              <td>{expense.salary}</td>
            </tr>
            <tr>
              <td>Investment</td>
              <td>{expense.investment}</td>
            </tr>
            <tr>
              <td>Property</td>
              <td>{expense.property}</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>{expense.business}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Catagory-chart">
        <IncomeChart expense={expense} />
      </div>
    </div>
  );
};
export default IncomeOutCome;