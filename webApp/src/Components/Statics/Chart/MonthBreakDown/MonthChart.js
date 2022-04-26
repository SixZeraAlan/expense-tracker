import * as echarts from 'echarts';
import React, { useState, useEffect } from 'react';
const MonthChart = (props) => {
  const [dataArr, setdataArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const expense = props.expense;
  console.log(expense);
  useEffect(() => {
    const newDataArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < month.length; i++) {
      Object.keys(expense).forEach(date => {
        if (date.split('-')[1] - 1 == i) {
          newDataArr[i] = expense[date]
        }
      })
    }
    setdataArr(newDataArr);
  }, [expense, month.length])

  let [main, setMain] = useState('')
  const option = {
    xAxis: {
      type: 'category',
      data: month,
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: dataArr,
        type: 'bar'
      }
    ]
  };
  useEffect(() => {
    var node = document.getElementById('MonthChart')
    setMain(node)
  }, [])
  if (main !== "") {
    var myChart = echarts.init(main);
    myChart.setOption(option);
  }
  return (
    <div style={{ height: "400px", width: "600px" }} id="MonthChart"></div>
  )
}
export default MonthChart;