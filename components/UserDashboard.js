"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const UserDashboard = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token');
    
    router.push('/login');
  };
  return (<>
    <div>UserDashboard+++++</div>
    <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Logout
        </button></>
  )
}

export default UserDashboard