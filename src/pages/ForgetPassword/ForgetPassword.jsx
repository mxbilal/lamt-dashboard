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
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate()
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
    try{
      event.preventDefault();
    if (!email.error) {
      let forgetPassword = await LAMT_API.endpoints.superAdmin.forgetPassword({email: email.value});
      console.log("forgetPassword", forgetPassword)
      if(forgetPassword.status === 200){
        toast.success(forgetPassword?.data?.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/new-password', { state: { email: email.value } })

        },2500)
      } else {
        toast.error(forgetPassword?.response?.data?.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      
    }
    } catch(error) {
      console.log(error)
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
            <LPTButton content="Continue" type={"submit"}/>
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
