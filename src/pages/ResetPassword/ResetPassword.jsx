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
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const [password, setPassword] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handlePasswordChange = (event) => {
    const newPass = event.target.value;
    setPassword({ value: newPass, error: !isValidPassword(newPass) });
  };

  const handleConfirmPasswordChange = (event) => {
    const newPass = event.target.value;
    setConfirmPassword({ value: newPass, error: password.value !== newPass });
  };
  async function handleSubmit(event) {
    event.preventDefault();
    if (!password.error) {
      try {
        let resetPassword = await LAMT_API.endpoints.superAdmin.resetPassword({ 
          email: location.state.email, 
          password: password.value, 
          password_confirmation: confirmPassword.value
        });
        console.log("resetPassword", resetPassword)
        if (resetPassword?.data?.success) {
          
          navigate('/login')
        }
        else {
          toast.error(resetPassword?.response?.data?.message, {
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
            <TextField
              fullWidth
              required
              type={showConfirmPassword ? 'text' : 'password'}
              InputProps={
                {
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              }
              onChange={handleConfirmPasswordChange}
              label="New Password"
              error={confirmPassword.error}
              helperText={!confirmPassword.error ? '' : 'Both Password must be same!'}
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

export default ResetPassword