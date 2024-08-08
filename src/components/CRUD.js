import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser, createUser } from '../services/userServices';
import User from './User';
import Forms from './Forms';

const CRUD = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  const handleCreate = async (username, email, password) => {
    await createUser(username, email, password);
    loadUsers();
  };

  const handleUpdate = async (id, username, email, password) => {
    await updateUser(id, username, email, password);
    loadUsers();
  };

  return (
    <div>
      <h2>User List</h2>
        <Forms key={user.id} user={user} onEdit={handleUpdate} onDelete={handleDelete} onCreate={handleCreate} />
    </div>
  );
};

export default CRUD;
