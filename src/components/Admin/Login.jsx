import { observer } from "mobx-react"
import { useState } from "react"
import { Alert, Button, IconButton, TextField } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DataStore from '../../store/store'

const Login = (observer(() => {

  const [login, setLogin] = useState(true)
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  
  const handleLogin = async () => {
    const response = await fetch('http://localhost:8787/login', {
      method: 'POST',
      body: JSON.stringify(
        { name, password }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      localStorage.setItem("isLogin", true)
      setLogin(true)
      setAlert(true)
    }
    else {
      setName('')
      setPassword('')
      setLogin(false)
      setAlert(true)
    }
  }
  const handleClose = () => {
    DataStore.setIsLogin(true)
  }

  return (
    <>
      <TextField label="שם" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <br />
      <TextField label="סיסמה" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br />
      <IconButton onClick={handleLogin}><ArrowBackIcon /></IconButton>
      {!login && alert && <Alert severity="error" onClose={() => setAlert(false)}>טעות:(  נסה שנית</Alert>}
      {login && alert && <Alert severity="primary" action={<Button color="primary" onClick={handleClose}>אישור</Button>}>נכנסת בהצלחה</Alert>}
    </>
  )
}))

export default Login