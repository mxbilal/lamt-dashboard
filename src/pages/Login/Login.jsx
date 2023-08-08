import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Button,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { isValidEmail, isValidPassword } from '../../utils';
import LPTButton from '../../components/LPTButton/LPTButton';
import './Login.scss'
import { LAMT_API } from '../../api'

const Login = () => {
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
    setEmail({ value: newEmail, error: email.error ? !isValidEmail(newEmail) : true });
  };
  const handlePasswordChange = (event) => {
    const newPass = event.target.value;
    setPassword({ value: newPass, error: password.error ? !isValidPassword(newPass) : true });
  };
  // const handleFocus = () => {
  //   setEmail({ ...email, focus: true });
  // };

  // const handleBlur = () => {
  //   setEmail({ ...email, focus: false, error: !isValidEmail(email.value) })
  // };
  async function handleSubmit(event){
    try{
      event.preventDefault();
      console.log("handleSubmit", event);
      let loginResponse = await LAMT_API.endpoints.superAdmin.login({email: email.value, password: password.value});
      console.log("loginResponse", loginResponse)
      if(loginResponse?.data?.success){
        localStorage.setItem("authToken", loginResponse?.data?.data?.token)
      }

    } catch(err){
      console.log(err)
    }
  }
  return (
    <div className='login-main'>
      <div className='login-container'>
        <Box className='login-inner'>
          <img width={50} height={50} className='logo' src='/favicon.png' />
          <Typography variant="h4" gutterBottom> Welcome </Typography>
          <Typography variant="subtitle1" gutterBottom> Please Login to continue to dashboard </Typography>
          <TextField
            label='Email'
            value={email.value}
            onChange={handleEmailChange}
            // onBlur={handleBlur}
            // onFocus={handleFocus}
            error={email.error}
            helperText={!email.error ? '' : 'Invalid email format'}
          />
          <TextField
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
          <Link href="#" underline="none">
            Forget Password?
          </Link>
          <LPTButton content="Continue"  onClick={handleSubmit}/>
          <Box>
            <Typography variant="subtitle1" gutterBottom> Don't have an account? </Typography>
            <Link href="#" underline="none">
              Sign up
            </Link>
          </Box>
          <Typography variant="subtitle1" gutterBottom> OR</Typography>
        </Box>
      </div>
    </div >
  )
}

export default Login
