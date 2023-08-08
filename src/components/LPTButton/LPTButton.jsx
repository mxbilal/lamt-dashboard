import React from 'react'
import { Button } from '@mui/material'
import './LPTButton.scss'

const LPTButton = ({ content }) => {
  return (
    <Button className='lpt-button' variant="contained">{content}</Button>
  )
}

export default LPTButton
