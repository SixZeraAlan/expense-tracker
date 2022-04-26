import * as echarts from 'echarts';
import React, { useState, useEffect } from 'react';
const IncomeChart = (props) => {
  const expense = props.expense;
  let [main, setMain] = useState('')
  const option = {
    tooltip: {
      trigger: 'item'
    },
    title: {
      left: 'center',
      top: 'center'
    },
    legend: {
      bottom: '1%',
      left: 'center'
    },

    label: {
      show: true,
      fontSize: '15',
      fontWeight: 'bold'
    },
    series: [
      {
        name: "Income from",
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        data: [
          {
            value: expense.salary,
            name: "Salary",
          },
          {
            value: expense.investment,
            name: 'Investment'
          },
          {
            value: expense.property,
            name: 'Property'
          },
          {
            value: expense.business,
            name: 'Business'
          }
        ],
      }
    ]
  };
  useEffect(() => {
    var node = document.getElementById('IncomeChart')
    setMain(node)
  }, [])
  if (main !== "") {
    var myChart = echarts.init(main);
    myChart.setOption(option);
  }
  return (
    <div style={{ height: "400px", width: "600px" }} id="IncomeChart"></div>
  )
}
export default IncomeChart;