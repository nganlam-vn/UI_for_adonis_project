import React from 'react';
import CardComponent from './CardComponent.js';

const User = ({ user}) => {
  return (
    <CardComponent data={
      <div>
        <h2>ID: {user.id}</h2>
        <h3>{user.username}</h3>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p> 
      </div>     
    }
    />
  );
};

export default User;
