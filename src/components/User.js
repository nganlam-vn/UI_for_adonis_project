import React from 'react';
import handleDelete from './UserList';
import { deleteUser } from '../services/userServices';

const User = ({ user}) => {
  return (
    <div>
      <h2>ID: {user.id}</h2>
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      {/* <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button> */}
    </div>
  );
};

export default User;
