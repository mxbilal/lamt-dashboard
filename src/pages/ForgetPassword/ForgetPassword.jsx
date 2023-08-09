import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
} from '@mui/material'
import { isValidEmail } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './ForgetPassword.scss'
import { LAMT_API } from '../../api'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail({ value: newEmail, error: !isValidEmail(newEmail) });
  };

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
    <div className='forget-main'>
      <div className='forget-container'>
        <Box className='forget-inner'>
          <Box className="forget-head">
            <img width={50} height={50} className='logo' src='/favicon.png' />
            <Typography variant="h4" gutterBottom> Forgot Your Password? </Typography>
            <Typography className='text2' variant="subtitle1" gutterBottom> Enter your email address and we will send you instructions to reset your password. </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Email'
              value={email.value}
              onChange={handleEmailChange}
              required
              fullWidth
              // onBlur={handleBlur}
              // onFocus={handleFocus}
              error={email.error}
              helperText={!email.error ? '' : 'Invalid email format'}
            />
            <LPTButton content="Continue" type={"submit"} />
          </form>
          <Box className='first-login'>
            <Link to={'/login'} underline="none">
              Back to Login
            </Link>
          </Box>
        </Box>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ForgetPassword
