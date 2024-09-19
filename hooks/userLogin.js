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
    setError('');
    
    if (!username && !password) {
      setError('Username is required and Password is required.');
      return;
    }
    
    if (!username) {
      setError('Username is required.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    setLoading(true);

    try {
      const { access_token } = await loginUser(username, password);
      console.log(access_token, "response from userLogin");

      localStorage.setItem('token', access_token);
      router.push("/dashboard");
    } catch (error) {
      // Catch any other login errors
      setError('Invalid credentials. Please try again.');
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
