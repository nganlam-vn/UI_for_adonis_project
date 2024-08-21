const API_URL = 'http://127.0.0.1:3333/api/v1';

export const login = async (username, password) => {
  try {
  const response = await fetch(API_URL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }
  );
  const data = await response.json(); // Parse the JSON response body form api

  if (response.ok) {
      // If the response is okay, login was successful
      alert('Login successfully');
  } else {
      // If the response is not okay, display the error message
      alert(`Login failed: ${data.message}`);
  }
} catch (error) {
  // Handle any network errors or unexpected issues
  alert('Login failed: An unexpected error occurred.');
}
  
};

export const getUsers = async () => {
  const response = await fetch(API_URL + '/users');
  return await response.json();
};

export const createUser = async (username, email, password) => {
  const response = await fetch(API_URL + '/add/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, email, password}),
  });
  return await response.json();
};

export const updateUser = async (id, username, email, password) => {
  const response = await fetch(API_URL + '/update/userById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, email, password, id}),
  });
  return await response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(API_URL + '/truncate/userById', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  return await response.json();
};
