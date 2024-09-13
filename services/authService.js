const Base_URL ='http://localhost:8000';

export const loginUser = async (username, password ,isAdmin) => {
  const urlEncodedBody = new URLSearchParams({
    username,
    password,
    is_admin: isAdmin
  });
  const response = await fetch(`${Base_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:  urlEncodedBody.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'invalid credentials');
  }

  return response.json();
};
