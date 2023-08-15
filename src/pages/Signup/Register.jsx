import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField
} from '@mui/material'
import LPTButton from '../../components/LMTButton/LMTButton';
import './Signup.scss'
import '../Login/Login.scss'
import { LAMT_API } from '../../api'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LMTForm from '../../components/LMTForm/LMTForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  zipcode: Yup.string().required('Zip Code is required'),
  phone: Yup.string().required('Zip Code is required'),
  account_number: Yup.string().required('Account Number is required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  country: '',
  state: '',
  city: '',
  password: '',
  password_confirmation: '',
  address: '',
  zipcode: '',
  phone: '',
  account_number: ''
  // ... other fields with initial values
};
const fields = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'first_name', label: 'First Name', type: 'text' },
  { name: 'last_name', label: 'Last Name', type: 'text' },
  { name: 'country', label: 'Country', type: 'text' },
  { name: 'state', label: 'State', type: 'text' },
  { name: 'city', label: 'City', type: 'text' },
  { name: 'address', label: 'Address', type: 'text' },
  { name: 'zipcode', label: 'Zip Code', type: 'number' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'password_confirmation', label: 'Confirm Password', type: 'password' },
  { name: 'phone', label: 'Phone', type: 'number' },
  { name: 'account_number', label: 'Account Number', type: 'number' },
];
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
            <Typography variant="h4" gutterBottom> Signup </Typography>
            <Typography variant="subtitle1" gutterBottom> Please Fill the Form </Typography>
          </Box>

          <LMTForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            fields={fields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
