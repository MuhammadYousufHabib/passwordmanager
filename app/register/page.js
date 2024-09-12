'use client';
import InputField from '@/components/InputField'; 
import Button from '@/components/Button'; 
import useRegister from '@/hooks/userRegister';
import RoleSelection from '@/components/RoleSelection';
import AuthPrompt from '@/components/AuthPrompt';
export default function Register() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    role,
    setRole,
    error,
    loading,
    handleRegister

  } = useRegister();
  
  return (
    <div className="bg-login bg-cover bg-repeat flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <div className=" text-center">
          <p className="text-3xl font-semibold bg-gradient-to-r  from-blue-400 to-green-500 bg-clip-text text-transparent">
            Password Manager
          </p>
        </div>
        <h2 className="text-3xl font-semibold text-center mt-3 mb-2">Register</h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          <InputField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
            required
          />
          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
          
          <RoleSelection role={role} setRole={setRole} />

          {error && <p className="text-red-500 text-sm">{error}</p>}
<div className='h-1'></div>
          <Button type="submit" text={loading ? 'Registering...' : 'Register'} />
        <AuthPrompt route="/login" promptText="Already registered?"/>
        </form>
      </div>
    </div>
  );
}
