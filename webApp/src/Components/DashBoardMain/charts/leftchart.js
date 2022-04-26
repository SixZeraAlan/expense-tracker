import * as echarts from 'echarts';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
const DashBoardLeftChart = (props) => {
  let [main, setMain] = useState('');
  const date = new Date();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  const newExpense = {
    generalexpense: 0,
    travel: 0,
    utilities: 0,
    shopping: 0,
  };
  props.data.filter((item) => item.date.includes(month)).forEach(element => {
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
  const option = {
    tooltip: {
      trigger: 'item'
    },
    title: {
      x: "left",
      y: "top",
      text: "Your Expense in " + moment(month, "").format("MMMM")
    },
    legend: {
      bottom: '1%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: newExpense.generalexpense,
            name: "generalexpense",
          },
          {
            value: newExpense.travel,
            name: 'Travel'
          },
          {
            value: newExpense.utilities,
            name: 'Utilities'
          },
          {
            value: newExpense.shopping,
            name: 'shopping'
          }
        ],
      }
    ]
  };
  useEffect(() => {
    var node = document.getElementById('DashBoardLeftChart')
    setMain(node)
  }, [])
  if (main !== "") {
    var myChart = echarts.init(main);
    myChart.setOption(option);
  }
  return (
    <div style={{ height: "400px", width: "400px" }} id="DashBoardLeftChart"></div>
  )
}
export default DashBoardLeftChart;
