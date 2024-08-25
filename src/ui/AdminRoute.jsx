import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuth from '../hooks/useAuth'

const AdminRoute = () => {
  const user = useAuth();
  

  return user?.isAdmin ? <Outlet /> : <Navigate to={'/'} replace />


}

export default AdminRoute