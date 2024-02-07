import * as React from 'react';
import { observer } from "mobx-react"
import { useState } from "react"
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DataServer from "../../store/server";
import DataStore from '../../store/store';

const AddService = (observer(({ setAddService }) => {

  const [name, setName] = useState('');
  const [details, setDetails] = useState('')
  const [price, setPrice] = useState('')
  const [click, setClick] = useState(false);
  const handleClose = () => {
    setAddService(false);
  };
  const handleClick = () => {
    DataServer.addService({ name, details, price })
    setClick(true)
  }
  const closeAlert = () => {
    setClick(false)
    DataStore.isAddService = false;
  }
  return (
    <React.Fragment>
      <Dialog onClose={handleClose} open={true}>
        <DialogTitle>הוספת שירות</DialogTitle>
        <DialogActions><IconButton onClick={handleClose}><CloseIcon /></IconButton></DialogActions>
        <DialogContent>
          <TextField label="שם השירות" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <TextField label="פרטים" variant="outlined" multiline rows={3} value={details} onChange={(e) => setDetails(e.target.value)} /><br />
          <TextField label="מחיר" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} /><br />

          <Button variant="contained" size="medium" color="primary" onClick={handleClick}>הוסף שירות</Button>
          {click && !DataStore.isAddService && <Alert severity="error" onClose={closeAlert}>שירות זה קיים במערכת</Alert>}
          {click && DataStore.isAddService && <Alert severity="primary" onClose={closeAlert}>השירות נוסף בהצלחה</Alert>}
        </DialogContent></Dialog></React.Fragment>
  )
}))

export default AddService