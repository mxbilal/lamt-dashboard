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
import './ResetPassword.scss'
import { LAMT_API } from '../../api'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [password, setPassword] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail({ value: newEmail, error: !isValidEmail(newEmail) });
  };
  const handlePasswordChange = (event) => {
    const newPass = event.target.value;
    setPassword({ value: newPass, error: !isValidPassword(newPass) });
  };
  // const handleFocus = () => {
  //   setEmail({ ...email, focus: true });
  // };

  // const handleBlur = () => {
  //   setEmail({ ...email, focus: false, error: !isValidEmail(email.value) })
  // };
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
            <Typography variant="h4" gutterBottom> Welcome </Typography>
            <Typography variant="subtitle1" gutterBottom> Please Login to continue to dashboard </Typography>
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
            <TextField
              fullWidth
              required
              type={showPassword ? 'text' : 'password'}
              InputProps={
                {
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              }
              onChange={handlePasswordChange}
              label="Password"
              error={password.error}
              helperText={!password.error ? '' : 'Password must be 8 characters, with 1 capital letter, 1 number, and 1 special character'}
            />
            <Link to={'/forget-password'} underline="none">
              Forget Password?
            </Link>
            <LPTButton content="Continue" type={"submit"} />
          </form>
          <Box className='first-login'>
            <Typography variant="subtitle1" gutterBottom> Don't have an account? </Typography>
            <Link href="#" underline="none">
              Sign up
            </Link>
          </Box>
          <Typography variant="subtitle1" gutterBottom> OR</Typography>
        </Box>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ResetPassword
