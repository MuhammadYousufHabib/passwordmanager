import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/services/authService';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { access_token } = await loginUser(username, password);
      console.log(access_token, "response from userlogin");

      localStorage.setItem('token', access_token);
     router.push("/dashboard")
    
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
  };
};

export default useLogin;
