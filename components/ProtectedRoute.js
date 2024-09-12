"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserInfo } from '@/services/authService';

export default function ProtectedRoute({ children, requiredRole }) {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const userInfo = await fetchUserInfo(token);

        if (requiredRole && userInfo.is_admin !== requiredRole) {
          router.push('/login'); // Redirect to a no-access page or similar
          return;
        }

        setHasAccess(true);
      } catch (error) {
        // Handle token validation or fetch errors
        console.error('Error fetching user info:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [router, requiredRole]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return hasAccess ? children : null;
}
