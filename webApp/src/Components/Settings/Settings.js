import "./Settings.scss";
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from "react";
const Settings = (props) => {
  const [formData, setFormData] = useState({
    username: props.userInformation.name,
    budget: props.userInformation.budget,
  });
  console.log(props.userInformation)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChangeUserName = (e) => {
    setFormData({
      ...formData,
      username: e.target.value
    })
  }
  const handleChangeBudget = (e) => {
    setFormData({
      ...formData,
      budget: e.target.value
    })
  }

  if (!props.isLogin) {
    return <Redirect to="/login" />
  }
  return (
    <div className="settings">
      <div class="login-wrapper">
        <div class="login-form-wrapper">
          <h1>Settings </h1>
          <form class="mt-6">
            <div class="mt-4">
              <div>
                <div>
                  <label for="UserName">Change Your UserName</label>
                  <input type="text" name="budget" value={formData.username} onChange={handleChangeUserName} />
                </div>
                <div>
                  <label for="budget">Change Your Budget</label>
                  <input type="text" name="budget" value={formData.budget} onChange={handleChangeBudget} />
                </div>
              </div>
              <div class="mt-6">
                <button onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings;