import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {

  let token = localStorage.getItem("authToken")
  if(!token) {
      return <Navigate to="/login" replace />
  }
 return children

};

export default ProtectedRoute;