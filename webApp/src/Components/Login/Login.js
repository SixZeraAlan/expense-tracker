import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./login.scss";
import axios from 'axios';
import url from '../../url';
const Login = (props) => {
  const [formData, setFormdata] = useState({
    username: "",
    password: ""
  });
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post((url + "/api/user/login"), formData).then((res) => {
      if (res.data.status === 401) {
        alert(res.data.message);
      }
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        props.setLogin(true);
        props.setuserInformation(res.data)
        history.push("/dashboard");
      }
    }).catch((err) => {
      console.log(err);
    })

  }
  const handelInputUserName = (e) => {
    setFormdata({
      ...formData,
      username: e.target.value
    })
  }
  const handleInputPassword = (e) => {
    setFormdata({
      ...formData,
      password: e.target.value
    })
  }
  return (
    <div class="settings-wrapper">
      <div class="settings-form-wrapper">
        <h1>Expense Tracker</h1>
        <form class="mt-6">
          <div>
            <label for="username">User Name</label>
            <input type="email" onChange={handelInputUserName} />
          </div>
          <div class="mt-4">
            <div>
              <label for="password">Password</label>
              <input type="password" name="password" onChange={handleInputPassword} />
            </div>
            <div class="mt-6">
              <button onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login