const API_URL = 'http://127.0.0.1:3333';

export const getUsers = async () => {
  const response = await fetch(API_URL + '/users');
  return await response.json();
};

export const createUser = async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

export const updateUser = async (id, username, email, password) => {
  const response = await fetch(API_URL + '/updateById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, email, password, id}),
  });
  return await response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(API_URL + '/deleteById', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  return await response.json();
};
