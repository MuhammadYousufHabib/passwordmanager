'use client';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import AuthPrompt from '@/components/AuthPrompt';
import useLogin from '@/hooks/userLogin';

export default function Login() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    loading,
    handleLogin

  } = useLogin()
 
  return (
    <div className="bg-login bg-cover bg-repeat flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Password Manager
          </p>
        </div>
        <h2 className="text-3xl font-semibold text-center">Login</h2>

        <form className="space-y-6 " onSubmit={handleLogin}>
          <InputField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" text={loading ? 'Logging in...' : 'Login'}/>
          <AuthPrompt route="/register" promptText="Don't have an account? "/>

        </form>
      </div>
    </div>
  );
}
