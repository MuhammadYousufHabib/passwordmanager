import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, fetchUserInfo } from '@/services/authService';

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

      const userInfo = await fetchUserInfo(access_token);

      if (userInfo.is_admin) {
        router.push('/admin');
      } else {
        router.push('/user');
      }
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
