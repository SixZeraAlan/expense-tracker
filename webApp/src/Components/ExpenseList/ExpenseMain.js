import AddTransaction from "../DashBoardMain/AddTransaction/AddTransaction";
import UpdateTransaction from "../DashBoardMain/UpdateTransaction/UpdateTransaction";
import ExpenseList from "./ExpenseList/ExpenseList";
import { useState, useEffect } from "react";
import axios from "axios";
import url from "../../url";
import { Redirect } from "react-router-dom";
const ExpenseMain = (props) => {
  const transactions = props.transaction;
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
  // redirect 
  if (!props.isLogin) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <ExpenseList
        transaction={transactions}
        UpdateClick={updateID}
        DeleteClick={deleteID}
        AddClick={toggleAddModal}
      />
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
export default ExpenseMain;