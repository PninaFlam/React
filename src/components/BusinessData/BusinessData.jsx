import { observer } from "mobx-react"
import { Fab } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DataStore from '../../store/store'
import DataServer from '../../store/server'
import logo from '../../assets/images/logo.png'
import '../../App.css'

const BusinessData = (observer(({setEditData}) => {

  return (
    <div className="businessData">
      <img src={logo}/>
      <div id="nameBusiness">{DataStore.businessData.name}</div>
      <div id="detailsBusiness">{DataStore.businessData.details}</div>
      <div>{DataStore.businessData.address}</div>
      <div>{DataStore.businessData.phone}</div>
      <br />
      {DataStore.isLogin && <Fab color="primary" aria-label="edit" variant="outlined" onClick={() => setEditData(true)}><EditIcon /></Fab>}
    </div>
  )
}))

export default BusinessData