import React, { useState } from 'react'
import {
  Typography,
  Box,
} from '@mui/material'
import './Signup.scss'
import '../Login/Login.scss'
import { LAMT_API } from '../../api'
import "react-toastify/dist/ReactToastify.css";
import LMTForm from '../../components/LMTForm/LMTForm';
import { showAlert } from '../../utils';
import { formFields, initialValues, validationSchema } from './data'
import HeadBox from '../../components/HeadBox/HeadBox'
const Register = () => {

  async function onSubmit(event) {
    event.preventDefault();
    if (true) {
      try {
        let resetPassword = await LAMT_API.endpoints.superAdmin.resetPassword({
          email: location.state.email,
          password: password.value,
          password_confirmation: confirmPassword.value,
          token,
        });
        console.log("resetPassword", resetPassword)
        if (resetPassword?.data?.success) {

          navigate('/login')
        }
        else {
          showAlert.failure(resetPassword?.response?.data?.message)
        }

      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <div className='register-main'>
      <div className='register-container'>
        <Box className='register-inner'>
          <HeadBox title={"Admin Registration"} />
          <LMTForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            formFields={formFields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
    </div>
  )
}

export default Register
