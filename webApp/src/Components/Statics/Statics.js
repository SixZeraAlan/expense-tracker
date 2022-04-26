import CatagoryBreakDown from './Chart/CatagoryBreakDown/Catagory';
import "./Statics.scss";
import MonthBreakDown from './Chart/MonthBreakDown/MonthBreakDown';
import IncomeOutCome from './Chart/IncomeOutcome/IncomeOutcome';
import { Redirect } from 'react-router-dom'
const Statics = (props) => {
  if (!props.isLogin) {
    return <Redirect to="/login" />
  }
  return (
    <div className="staticGraph">
      <MonthBreakDown transaction={props.transaction} />
      <CatagoryBreakDown transaction={props.transaction} />
      <IncomeOutCome transaction={props.transaction} />

    </div>
  )
}
export default Statics