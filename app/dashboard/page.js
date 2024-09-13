"use client";
import { useRouter } from 'next/navigation'; 
import ProtectedRoute from '@/components/ProtectedRoute';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const page = () => {  
  const router = useRouter();  

  const handleLogout = () => {
    localStorage.removeItem('token');  
    router.push('/login');
  };

  return (
    <ProtectedRoute>
      <Sidebar />
      <button onClick={handleLogout}>Logout</button>
    </ProtectedRoute>
  );
};

export default page;
