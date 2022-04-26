import React from "react";
import "./Header.scss"
import { useHistory } from 'react-router-dom';
const Header = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setLogin(false);
    history.push('/login');
  }
  return (
    <div className="Header">
      <div className="header-wrapper">
        <div><h1>Expense Tracker</h1></div>
        <div className="welcome-wrapper">
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

    </div>
  )
};
export default Header;