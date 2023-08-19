import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
} from '@mui/material'
import { showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './Login.scss'
import { LAMT_API } from '../../api'
import { useLocation } from 'react-router-dom';

const TwoFactor = () => {
  const location = useLocation()
  const { data } = location.state
  console.log(data)
  const [code, setCode] = useState('')
  async function handleSubmit(event) {
    event.preventDefault();
    if (code !== '') {
      try {
        let loginResponse = await LAMT_API.endpoints.superAdmin.twoFactor({ google2fa_verification: code });
        console.log("loginResponse", loginResponse?.data?.data)
        if (loginResponse?.data?.success) {

          // localStorage.setItem("authToken", loginResponse?.data?.data?.token)
          // window.location.reload()
        }
        else {
          showAlert.failure(loginResponse?.response?.data?.message)
        }

      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <div className='login-main'>
      <div className='login-container'>
        <Box className='login-inner'>
          <Box className="login-head">
            <img width={50} height={50} className='logo' src='/favicon.png' />
            <Typography variant="h4" gutterBottom> Two Factor Authentication</Typography>
            <Typography variant="subtitle1" gutterBottom> Please enter code sent to your Email </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label='code'
              value={code}
              placeholder='please enter code'
              onChange={(e) => setCode(e.target.value)}
              required
              fullWidth
            />
            <LPTButton content="Continue" type={"submit"} />
          </form>
        </Box>
      </div>
    </div>
  )
}

export default TwoFactor
