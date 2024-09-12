const Base_URL ='http://localhost:8000';

export const registerUser = async (username, email, password, isAdmin) => {
  const response = await fetch(`${Base_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password, is_admin: isAdmin }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'invalid credentials');
  }

  return response.json(); 
};
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
export const fetchUserInfo = async (token) => {
  const response = await fetch(`${Base_URL}/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
};