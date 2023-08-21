import { Box, Typography } from '@mui/material'
import React from 'react'

const HeadBox = ({ title }) => {
  return (
    <Box className="register-head">
      <img width={50} height={50} className='logo' src='/favicon.png' />
      {title && <Typography variant="h4" gutterBottom> {title} </Typography>}
    </Box>
  )
}

export default HeadBox
