import * as React from 'react';
import { observer } from 'mobx-react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import dataStore from '../../store/store'
import '../../App.css'

const MeetingsList = (observer(() => {
  const rows = [];
  dataStore.meetings.map((meeting, i) => (
    rows.push({ dateTime: meeting.dateTime, service: meeting.serviceName, name: meeting.name, phone: meeting.phone, email: meeting.email })
  ))
  const getTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric",
    }).format(date);
    return formattedDate;
  }
  const colorMeeting = (dateTime) => {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
    const restDay = 7 - meetingDate.getDay()
    const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
    if (meetingDate > currentDate && meetingDate <= lastDayOfWeek)
      return 'orange'
    if (meetingDate.getDate() === currentDate.getDate() &&
      meetingDate.getMonth() === currentDate.getMonth() &&
      meetingDate.getFullYear() === currentDate.getFullYear())
      return 'red';
    return 'blue';
  }
  return (
    dataStore.isLogin && <TableContainer className='meetings' component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow className='title'>
            <TableCell align='right'>תאריך</TableCell>
            <TableCell align='right'>שירות</TableCell>
            <TableCell align='right'>שם לקוח</TableCell>
            <TableCell align='right'>טלפון</TableCell>
            <TableCell align='right'>מייל</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            return <>
              <TableRow id={colorMeeting(row.dateTime)} key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='right'>{getTime(row.dateTime)}</TableCell>
                <TableCell align='right'>{row.service}</TableCell>
                <TableCell align='right'>{row.name}</TableCell>
                <TableCell align='right'>{row.phone}</TableCell>
                <TableCell align='right'>{row.email}</TableCell>
              </TableRow>
            </>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}))
export default MeetingsList