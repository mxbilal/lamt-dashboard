import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {

  let token = localStorage.getItem("authToken")
  let pathName = window.location.pathname.split("/")[1]
  console.log(pathName)
  if (!token) {
    return <Navigate to="/login" replace />
  }
  else if (token && pathName === 'login') {
    return <Navigate to="/" replace />
  }
  return children

};

export default ProtectedRoute;