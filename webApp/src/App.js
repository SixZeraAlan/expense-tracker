import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/DashBoardMain/Main';
import './App.scss';
import url from "./url"
import axios from 'axios';
import ExpenseMain from './Components/ExpenseList/ExpenseMain';
import Navigator from './Components/Navigator/Navigator';
import Statics from './Components/Statics/Statics';
import Settings from './Components/Settings/Settings';
import Login from './Components/Login/Login';
import { Route, useHistory } from 'react-router-dom';
function App() {
  const storedJwt = localStorage.getItem('token');
  const history = useHistory();
  const [token, setToken] = useState(storedJwt || null) //storedJwt || null; 
  const [transaction, setTransaction] = useState([]);
  const [notify, setNotify] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userInformation, setuserInformation] = useState({});
  useEffect(() => {
    if (token) {
      history.push('/dashboard');
    } else {
      history.push('/login');
    }
  }, [token, history])
  useEffect(() => {
    setTimeout(() => {
      axios.get(url + "/api/transaction/list").then((res) => {
        setTransaction(res.data.list);
      })
    }, 100)
  }, [notify]);
  return (
    <div className="App">
      <Header setLogin={setIsLogin} userInformation={userInformation} />
      <Navigator />
      <Route path="/" exact component={() => <Main
        transaction={transaction}
        setNotify={setNotify}
        notify={notify}
        isLogin={isLogin}
        userInformation={userInformation}
      />
      } />
      <Route path="/dashboard" exact component={() => <Main
        transaction={transaction}
        setNotify={setNotify}
        notify={notify}
        isLogin={isLogin}
        userInformation={userInformation}
      />
      } />
      <Route path="/expenselist" exact component={() => <ExpenseMain
        transaction={transaction}
        setNotify={setNotify}
        notify={notify}
        isLogin={isLogin}
      />} />
      <Route path="/statics" exact component={() => <Statics
        transaction={transaction}
        setNotify={setNotify}
        notify={notify}
        isLogin={isLogin} />} />
      <Route path="/settings" exact component={() => <Settings
        transaction={transaction}
        setNotify={setNotify}
        notify={notify}
        isLogin={isLogin}
        setLogin={setIsLogin}
        userInformation={userInformation}
      />} />
      <Route path="/login" exact component={() => <Login
        setLogin={setIsLogin}
        setToken={setToken}
        token={token}
        setuserInformation={setuserInformation}
      />} />
    </div>
  );
}

export default App;
