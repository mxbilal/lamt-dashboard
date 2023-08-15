import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { isValidEmail, isValidPassword } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './Login.scss'
import { LAMT_API } from '../../api'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const TwoFactor = () => {
  const [code, setCode] = useState('')
  async function handleSubmit(event) {
    event.preventDefault();
    if (!email.error) {
      try {
        let loginResponse = await LAMT_API.endpoints.superAdmin.login({ email: email.value, password: password.value });
        console.log("loginResponse", loginResponse?.data?.data)
        if (loginResponse?.data?.success) {
          localStorage.setItem("authToken", loginResponse?.data?.data?.token)
          window.location.reload()
        }
        else {
          toast.error(loginResponse?.response?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
      <ToastContainer />
    </div>
  )
}

export default TwoFactor
