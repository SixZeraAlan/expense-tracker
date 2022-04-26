import "./Navigator.scss"
import {
  Link
} from "react-router-dom";
const Navigator = () => {
  return (
    <div className="nav-wrap">
      <div className="nav-list">
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/expenselist" className="nav-item">Expense</Link>
        <Link to="/statics" className="nav-item">Statics</Link>
        <Link to="/settings" className="nav-item">Settings</Link>
      </div>
    </div>
  )
}
export default Navigator;