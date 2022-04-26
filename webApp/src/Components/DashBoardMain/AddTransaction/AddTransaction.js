import React, { useState, useEffect } from "react";
import url from "../../../url";
import axios from 'axios';
import "./AddTransaction.scss";
const AddTransaction = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "income",
    catagory: "default",
    amount: "",
    date: "",
  });
  // update state from input 
  const handleTitleChange = (e) => {
    setFormData({
      ...formData,
      title: e.target.value
    });
  }
  const handleTypeChange = (e) => {
    setFormData({
      ...formData,
      type: e.target.value
    });
  }
  const handleCatagoryChange = (e) => {
    setFormData({
      ...formData,
      catagory: e.target.value
    });
  }
  const handleAmountChange = (e) => {
    setFormData({
      ...formData,
      amount: e.target.value
    });
  }
  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post(url + "/api/transaction/add", formData).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    // notify parent component to update data
    props.setNotify(!props.notify);
    // close modal 
    props.close(false);
  }
  return (
    <div className="AddComponent">
      <div className="Add-wrap">
        <h1>Add Transaction</h1>
        <form>
          <label>
            title:
            <input type="text" name="description" value={formData.title} onChange={handleTitleChange} />
          </label>
          <label>
            type:
            <select onChange={handleTypeChange} value={formData.type}>
              <option value="income">
                Income
              </option>
              <option value="expense">
                expense
              </option>
            </select>
          </label>
          <label>
            catagory:
            {formData.type == "income" ?
              <select onChange={handleCatagoryChange} value={formData.catagory} >
                <option value="default" disabled>
                  please select your catagory
                </option>
                <option value="salary">
                  salary
                </option>
                <option value="investment">
                  investment
                </option>
                <option value="property">
                  property
                </option>
                <option value="business">
                  business
                </option>
              </select> :
              <select
                onChange={handleCatagoryChange}
                value={formData.catagory}>
                <option value="default" disabled>
                  please select your catagory
                </option>
                <option value="generalexpense">
                  General Expense
                </option>
                <option value="travel">
                  Travel
                </option>
                <option value="utilities">
                  Utilities
                </option>
                <option value="shopping">
                  Shopping
                </option>
              </select>
            }
          </label>
          <label>
            Amount:
            <input type="text" name="amount" onChange={handleAmountChange} value={formData.amount} />
          </label>
          <label>
            Date:
            <input type="date" name="date" onChange={handleDateChange} value={formData.date} />
          </label>
          <div className="button-group">
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button onClick={() => props.close(false)}>Cancel</button>
          </div>

        </form>
      </div>
    </div>
  )
};
export default AddTransaction;