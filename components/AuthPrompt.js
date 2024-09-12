import Link from 'next/link';

const AuthPrompt = ({ route, promptText }) => {
  return (
    <div className="text-sm text-center mt-4">
      <p className="text-gray-400">
        {promptText}{' '}
        <Link href={route} className="text-emerald-400 hover:text-emerald-300">
          {route.includes('/login') ? 'Login here' : 'Register here'}
        </Link>
      </p>
    </div>
  );
};

export default AuthPrompt;
