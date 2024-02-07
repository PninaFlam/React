import * as React from 'react';
import { observer } from "mobx-react"
import { useState } from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DataServer from '../../store/server'
import DataStore from '../../store/store'

const AddMeeting = (observer(({ serviceName, setOpen }) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [dateTime, setDate] = useState('')
  const [click, setClick] = useState(false);

  const handleClick = () => {
    DataServer.addMeeting({serviceName, dateTime, name, phone, email });
    setClick(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>קביעת פגישה</DialogTitle>
        <DialogActions><IconButton onClick={handleClose}><CloseIcon /></IconButton></DialogActions>
        <DialogContent>
          <TextField variant="standard" label="שירות" readOnly value={serviceName} /><br />
          <TextField variant="standard" label="שם" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <TextField variant="standard" label="טלפון" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
          <TextField variant="standard" label="מייל" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker views={['year', 'month', 'day', 'hours', 'minutes']} label="תאריך" value={dateTime} onChange={(e) => setDate(e.$d)} />
          </LocalizationProvider>
          <DialogActions><Button variant="contained" size="medium" color="primary" onClick={handleClick}>קבע פגישה</Button></DialogActions>
          {click && !DataStore.isAddMeeting && <Alert severity="error" onClose={() => { setClick(false) }}>לא ניתן לקבוע פגישה במועד זה. ניתן לנסות במועד אחר</Alert>}
          {click && DataStore.isAddMeeting && <Alert severity="success" onClose={() => { setClick(false) }}>הפגישה נקבעה בהצלחה</Alert>}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}))

export default AddMeeting