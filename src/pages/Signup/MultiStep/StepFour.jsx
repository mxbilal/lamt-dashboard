import { Box } from '@mui/material'
import React from 'react'
import HeadBox from '../../../components/HeadBox/HeadBox'
import LMTForm from '../../../components/LMTForm/LMTForm'
import { StepFourFields, StepFourInitials, stepFourValidation } from './data'
import { useNavigate } from 'react-router-dom'

const StepFour = () => {
  const navigate = useNavigate()
  const onSubmit = () => {
    alert('thanks for submitting!')
    navigate('/login')
  }
  return (
    <div className='register-main'>
      <div className='register-container'>
        <Box className='register-inner'>
          <HeadBox title={"Admin Registration"} />
          <LMTForm
            initialValues={StepFourInitials}
            validationSchema={stepFourValidation}
            formFields={StepFourFields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
    </div>
  )
}

export default StepFour
