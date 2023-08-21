import { Box } from '@mui/material'
import React from 'react'
import HeadBox from '../../../components/HeadBox/HeadBox'
import LMTForm from '../../../components/LMTForm/LMTForm'
import { stepTwoValidation, StepTwoInitials, StepTwoFields } from './data'
import { useNavigate } from 'react-router-dom'

const StepTwo = () => {
  const navigate = useNavigate()
  const onSubmit = () => {
    navigate('/signup/3')
  }
  return (
    <div className='register-main'>
      <div className='register-container'>
        <Box className='register-inner'>
          <HeadBox />
          <LMTForm
            initialValues={StepTwoInitials}
            validationSchema={stepTwoValidation}
            formFields={StepTwoFields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
    </div>
  )
}

export default StepTwo
