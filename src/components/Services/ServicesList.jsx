import { useState } from 'react';
import { observer } from 'mobx-react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../../App.css'
import AddService from './AddService';
import AddMeeting from '../Meetings/AddMeeting';
import dataStore from '../../store/store'

const ServiceList = (observer(() => {

  const [serviceName, setServiceName] = useState('')
  const [addService, setAddService] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div id='serviceList'>
        {dataStore.services.length > 0 && dataStore.services.map((service, i) => {
          return <Card id='service' key={i} >
            <CardHeader className='title' title={service.name} />
            <CardContent>
              <div>{service.details}</div>
              <div className='price'>₪{service.price}</div>
            </CardContent>
            {!dataStore.isLogin && <CardActions><Button variant="outlined" size="medium" color="primary" onClick={() => { setOpen(true), setServiceName(service.name) }}>קביעת פגישה</Button></CardActions>}
          </Card>
        })}
        {open && <AddMeeting serviceName={serviceName} setOpen={setOpen} />}
      </div>
      {dataStore.isLogin && !addService && <Fab color="primary" aria-label="add" onClick={() => setAddService(true)}><AddIcon /></Fab>}
      {dataStore.isLogin && addService && <AddService setAddService={setAddService} />}
    </>
  )
}))
export default ServiceList