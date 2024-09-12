import React from 'react'
import AdminDashboard from '@/components/AdminDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';

const admin = () => {
  return (
    <>
    <ProtectedRoute requiredRole={true}>

          <AdminDashboard/>
          
    </ProtectedRoute>
    
    </>
  )
}

export default admin