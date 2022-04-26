import "./MonthBreakDown.scss";
import { useState, useEffect } from 'react';
import MonthChart from "./MonthChart";
const MonthBreakDown = (props) => {
  const [selectData, setSelectData] = useState("2022");
  const [expense, setExpense] = useState([]);
  const transactions = props.transaction;
  useEffect(() => {
    const newExpense = {};
    transactions.filter((item) => item.date.includes(selectData) && item.type == 'expense').forEach(element => {
      if (element.date.slice(0, 7) in newExpense) {
        newExpense[element.date.slice(0, 7)] += Number(element.amount)
      } else {
        newExpense[element.date.slice(0, 7)] = Number(element.amount)
      }
    })
    setExpense(newExpense);
  }, [selectData, transactions]);
  console.log(expense);
  const setSelect = (e) => {
    setSelectData(e.target.value);
  }
  return (
    <div className="catagory-table-wrap">
      <div className="catagory-table">
        <div className="catagory-table-title">
          <h1> Month Breakdown</h1>
          <div className="month-input">
            <select onChange={setSelect} className="table-select">
              <option value="2022" disabled>select year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>

        <table className=" catagory-table table-fixed">
          <thead>
            <tr>
              <th className="w-1/6" >Date</th>
              <th className="w-1/6" >Value</th>
            </tr>
          </thead>
          <tbody>
            {

              Object.keys(expense).map((item, index) => {
                return (
                  <tr>
                    <th key={index}>{item}</th>
                    <th key={index}>{expense[item]}</th>
                  </tr>
                )
              })

            }
          </tbody>
        </table>
      </div>
      <div className="Catagory-chart">
        <MonthChart expense={expense} />
      </div>
    </div>
  );
};
export default MonthBreakDown;