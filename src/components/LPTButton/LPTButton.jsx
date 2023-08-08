import React from 'react'
import { Button } from '@mui/material'
import './LPTButton.scss'

const LPTButton = ({ content, onClick }) => {
  return (
    <Button className='lpt-button' variant="contained" onClick={onClick}>{content}</Button>
  )
}

export default LPTButton
