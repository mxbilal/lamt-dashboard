import React from 'react'

//src
import './Signup.scss'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const RegisterType = () => {
  return (
    <div className='register-type-main'>
      <div className='register-type-container'>
        <Typography variant='subtitle1'> Please Select Registration Type</Typography>
        <div className='register-option'>
          <Link to={'/signup'}> Register One Step </Link>
        </div>
        <div className='register-option'>
          <Link> Register with Wizard </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterType
