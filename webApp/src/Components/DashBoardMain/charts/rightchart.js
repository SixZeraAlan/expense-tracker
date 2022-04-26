import * as echarts from 'echarts';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
const BudgetCharts = (props) => {
  let [main, setMain] = useState('');
  const date = new Date();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let expense = 0;
  props.transaction.filter(transaction => transaction.type === 'expense' && transaction.date.includes(month)).map((transaction) => {
    expense += Number(transaction.amount);
  });
  const option = {
    title: {
      text: "Your Todal Budget: $" + props.userInformation.budget + "\n" + "You have Spent $" + expense + " so far",
      x: 'left',
      y: 'top',
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 3000 - expense,

          },
          {
            value: expense,
          },
        ],
        radius: ['40%', '70%']
      }
    ]
  };
  useEffect(() => {
    var node = document.getElementById('right')
    setMain(node)
  }, [])
  if (main !== "") {
    var myChart = echarts.init(main);
    myChart.setOption(option);
  }
  return (
    <div style={{ height: "400px", width: "400px" }} id="right"></div>
  )
}
export default BudgetCharts;