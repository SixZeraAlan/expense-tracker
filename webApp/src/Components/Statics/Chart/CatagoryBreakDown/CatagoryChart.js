import * as echarts from 'echarts';
import React, { useState, useEffect } from 'react';
const CatagoryChart = (props) => {
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
        name: "expense from",
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        data: [
          {
            value: expense.generalexpense,
            name: "generalexpense",
          },
          {
            value: expense.travel,
            name: 'Travel'
          },
          {
            value: expense.utilities,
            name: 'Utilities'
          },
          {
            value: expense.shopping,
            name: 'shopping'
          }
        ],
      }
    ]
  };
  useEffect(() => {
    var node = document.getElementById('catagoryChart')
    setMain(node)
  }, [])
  if (main !== "") {
    var myChart = echarts.init(main);
    myChart.setOption(option);
  }
  return (
    <div style={{ height: "400px", width: "600px" }} id="catagoryChart"></div>
  )
}
export default CatagoryChart;