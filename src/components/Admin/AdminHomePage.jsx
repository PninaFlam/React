import { observer } from "mobx-react"
import { Link, Outlet } from "react-router-dom"
import { Button } from "@mui/material"
import '../../App.css'
import DataStore from '../../store/store'
import Login from './Login'
import EditBusinessData from "../BusinessData/EditBusinessData"
import BusinessData from "../BusinessData/BusinessData"

const AdminHomePage = (observer(() => {
  return (
    <>
      {!DataStore.isLogin ? <><Login /><BusinessData /></> : <EditBusinessData />}
      <br />
      <div id='buttons'>
        <Button variant="outlined">{<Link to="./services">שירותים</Link>}</Button>
        <Button variant="outlined"><Link to="./meetings">פגישות</Link></Button>
      </div>
      <br />
      <Outlet />
    </>
  )
}))

export default AdminHomePage
