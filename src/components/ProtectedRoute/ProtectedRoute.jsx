import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const unAuthRoutes = ['login', 'forget-password', 'reset-password', "signup-type", "signup"]

const ProtectedRoute = ({ children }) => {
  let token = localStorage.getItem("authToken")
  let pathName = window.location.pathname.split("/")[1]
  let routeType = unAuthRoutes.includes(pathName) ? "public" : "private"

  if (!token && routeType !== 'public') {
    return <Navigate to="/login" replace />
  }
  if (token && routeType === 'public') {
    return <Navigate to="/" replace />
  }
  return children

};

export default ProtectedRoute;