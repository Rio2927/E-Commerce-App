import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
const isAdmin = localStorage.getItem("token") ? true : false;
console.log("isAdmin => ",isAdmin);
return isAdmin ? children : <Navigate to = "/login"/>;
};

export default ProtectedRoute;
