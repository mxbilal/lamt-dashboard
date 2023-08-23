import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
} from '@mui/material'
import { isValidEmail, showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './ForgetPassword.scss'
import { LAMT_API } from '../../api'
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import LMTLoader from '../../components/LMTLoader/LMTLoader';

const ForgetPassword = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
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
    setLoading(true)
    try {
      event.preventDefault();
      if (!email.error) {
        let forgetPassword = await LAMT_API.endpoints.superAdmin.forgetPassword({ email: email.value });
        console.log("forgetPassword", forgetPassword)
        if (forgetPassword.status === 200) {
          showAlert.success(forgetPassword?.data?.message)
          setTimeout(() => {
            navigate('/login')

          }, 2500)
        } else {
          showAlert.failure(forgetPassword?.response?.data?.message)
        }

      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <div className='forget-main'>
      {loading ? <LMTLoader /> : <div className='forget-container'>
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
              error={email.error}
              helperText={!email.error ? '' : 'Invalid email format'}
            />
            <LPTButton disabled={loading} content="Continue" type={"submit"} />
          </form>
          <Box className='first-login'>
            <Link to={'/login'} underline="none">
              Back to Login
            </Link>
          </Box>
        </Box>
      </div>}
    </div>
  )
}

export default ForgetPassword
