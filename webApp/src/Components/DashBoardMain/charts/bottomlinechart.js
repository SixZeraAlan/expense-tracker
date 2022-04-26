import * as echarts from 'echarts';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
const BottomLineChart = (props) => {
  let [main, setMain] = useState('');
  // get past seven days 
  const getdate = () => {
    let date = [];
    for (let i = 0; i < 7; i++) {
      // use Moment subString to get the date
      date.push(moment().subtract(i, 'd').format('YYYY-MM-DD'));
    }
    return date;
  }
  const dateArr = getdate();
  // double loop to get specific date 
  const general = [];
  const travel = [];
  const utilities = [];
  const shopping = [];
  // substrack the date from the dateArr
  for (let i = 0; i < dateArr.length; i++) {
    let generalExpense = 0;
    let travelExpense = 0;
    let utilitiesExpense = 0;
    let shoppingExpense = 0;
    for (let j = 0; j < props.transaction.length; j++) {
      if (dateArr[i] === props.transaction[j].date
        && props.transaction[j].type === 'expense'
        && props.transaction[j].catagory === 'generalexpense') {
        generalExpense += Number(props.transaction[j].amount);
      }
      if (dateArr[i] === props.transaction[j].date
        && props.transaction[j].type === 'expense'
        && props.transaction[j].catagory === 'travel') {
        travelExpense += Number(props.transaction[j].amount);
      }
      if (dateArr[i] === props.transaction[j].date
        && props.transaction[j].type === 'expense'
        && props.transaction[j].catagory === 'utilities') {
        utilitiesExpense += Number(props.transaction[j].amount);
      }
      if (dateArr[i] === props.transaction[j].date
        && props.transaction[j].type === 'expense'
        && props.transaction[j].catagory === 'shopping') {
        shoppingExpense += Number(props.transaction[j].amount);
      }
    }
    general.push(generalExpense);
    travel.push(travelExpense);
    utilities.push(utilitiesExpense);
    shopping.push(shoppingExpense);
  }
  const option = {
    legend: {
      top: '1%',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    title: {
      text: 'Your Expense in Past 7 Days',
      x: 'center',
      y: "bottom",
    },
    xAxis: {
      data: dateArr,
    },
    yAxis: {},
    series: [
      {
        data: general,
        type: 'bar',
        stack: "a",
        emphasis: {
          focus: 'series'
        },
        name: "generalExpense"
      },
      {
        data: travel,
        type: 'bar',
        stack: "a",
        emphasis: {
          focus: 'series'
        },
        name: "travel"
      },
      {
        data: utilities,
        type: 'bar',
        stack: "a",
        emphasis: {
          focus: 'series'
        },
        name: "utilities"
      },
      {
        data: shopping,
        type: 'bar',
        stack: "a",
        emphasis: {
          focus: 'series'
        },
        name: "shopping"
      }
    ]
  };
  useEffect(() => {
    var node = document.getElementById('bottom')
    setMain(node)
  }, [])
  if (main !== "") {
    var myChart = echarts.init(main);
    myChart.setOption(option);
  }
  return (
    <div style={{ height: "500px", width: "100%" }} id="bottom"></div>
  )
}
export default BottomLineChart;