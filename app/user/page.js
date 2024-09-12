import React from 'react'
import UserDashboard from '@/components/UserDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';

const user = () => {
  return (
    <>
    <ProtectedRoute requiredRole={false}>
      <UserDashboard/>
    </ProtectedRoute>
    </>
  )
}

export default user