import React, { useState } from 'react';
import TransactionList from './TransactionList/TransactionList';
import AddTransaction from './AddTransaction/AddTransaction';
import UpdateTransaction from './UpdateTransaction/UpdateTransaction';
import axios from 'axios';
import url from '../../url'
import "./Main.scss"
import BudgetCharts from './charts/rightchart';
import BottomLineChart from './charts/bottomlinechart';
import DashBoardLeftChart from './charts/leftchart';
import { Redirect } from 'react-router-dom';
const Main = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  // filter data and pass to updateTransactionComponent
  const updateID = (id) => {
    setShowEdit(true);
    const data = props.transaction.filter(transaction => transaction.id === id);
    setUpdateData(data);
  }
  // delete transaction and notify parent component to update Data
  const deleteID = (id) => {
    console.log(id);
    axios.delete(url + "/api/transaction/delete/" + id).then((res) => {
      console.log(res)
    })
    props.setNotify(!props.notify);
  }
  // toggle add transaction component
  const toggleAddModal = () => {
    setAddModal(true);
  }
  const setCloseModal = (status) => {
    setAddModal(status);
  }
  const setCloseEditModal = (status) => {
    setShowEdit(status);
  }
  //
  if (!props.isLogin) {
    return <Redirect to="/login" />
  }
  console.log(props);
  return (
    <div className='Main'>
      <div className='Maintop'>
        <div id="left-chart" className="left-chart">
          <DashBoardLeftChart
            data={props.transaction}
          />
        </div>
        <div className='TransactionHistory'>
          <TransactionList
            transaction={props.transaction}
            UpdateClick={updateID}
            DeleteClick={deleteID} />
          <div className='addPrompt'>
            <span className='prompttext'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>&nbsp; Missing Transaction?</span>
            <button className='promptbutton' onClick={toggleAddModal}>Add New</button>
          </div>
        </div>
        <div id="right-chart" className='right-chart'>
          <BudgetCharts
            userInformation={props.userInformation}
            transaction={props.transaction} />
        </div>
      </div>
      <div className='Mainbottom'>
        <BottomLineChart
          transaction={props.transaction}
        />
      </div>
      {
        addModal ? <AddTransaction
          setNotify={props.setNotify}
          notify={props.notify}
          add={addModal}
          close={setCloseModal}
        /> : null
      }
      {
        showEdit ?
          <UpdateTransaction
            updateData={updateData}
            showEdit={showEdit}
            setNotify={props.setNotify}
            notify={props.notify}
            close={setCloseEditModal}
          />
          : null
      }
    </div>
  )
};
export default Main;