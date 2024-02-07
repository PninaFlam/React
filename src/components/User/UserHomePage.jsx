import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import BusinessData from "../BusinessData/BusinessData"
import ServicesList from "../Services/ServicesList"
import '../../App.css'

function UserHomePage() {

  return (
    <>
      <BusinessData />
      <ServicesList />
      <Button id="adminButton" variant="outlined"><Link to={"/admin"}>כניסה כמנהל</Link></Button>
    </>
  )
}

export default UserHomePage