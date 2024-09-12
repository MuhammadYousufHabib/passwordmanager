import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/services/authService'; 

const useRegister = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');



    try {
      const response=await registerUser(username, email, password, role==='admin'); 
      console.log(response)
      router.push('/login');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    error,
    role,
    setRole,
    loading,
    handleRegister,
  };
};

export default useRegister;
