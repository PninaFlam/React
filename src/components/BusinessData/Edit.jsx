import * as React from 'react';
import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DataStore from '../../store/store'
import DataServer from '../../store/server'

const Edit = (observer(({ setEditData }) => {
    const handleClose = () => {
        setEditData(false);
    };
    const [data, setData] = useState({
        name: DataStore.businessData.name,
        details:DataStore.businessData.details,
        address: DataStore.businessData.address,
        phone: DataStore.businessData.phone
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleClick = () => {
        DataServer.setBusinessData(data);
        handleClose();
    }

    return (
        <React.Fragment>
            <Dialog onClose={handleClose} open={true}>
                <DialogTitle>עריכת פרטי העסק</DialogTitle>
                <DialogActions>
                    <IconButton onClick={handleClose}><CloseIcon />
                    </IconButton>
                </DialogActions>
                <DialogContent>
                    <TextField variant="outlined" label="לוגו" name="logo" value={data.logo} onChange={handleChange}/><br/>
                    <TextField variant="outlined" label="שם העסק" name="name" value={data.name} onChange={handleChange} /><br />
                    <TextField variant="outlined" label="פרטים" name="details" value={data.details} onChange={handleChange}/><br/>
                    {/* <TextField variant="outlined" label="בעלים" name="admin" value={data.admin} onChange={handleChange} /><br /> */}
                    <TextField variant="outlined" label="כתובת" name="address" value={data.address} onChange={handleChange} /><br />
                    <TextField variant="outlined" label="טלפון" name="phone" value={data.phone} onChange={handleChange} /><br />
                    <DialogActions><Button onClick={handleClick}>שמור</Button></DialogActions>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )

}))
export default Edit;