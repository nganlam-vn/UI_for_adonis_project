import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../services/userServices';
import User from './User';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

 

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
