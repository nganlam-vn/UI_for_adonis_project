import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser, createUser } from '../services/userServices';
import Forms from '../components/Forms';
import PageLayout from '../Layouts/PageLayout';

const ManageUsers = () => {
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
    alert('User deleted successfully');
    loadUsers();
  };

  const handleCreate = async (username, email, password) => {
    await createUser(username, email, password);
    alert('User created successfully');
    loadUsers();
  };

  const handleUpdate = async (id, username, email, password) => {
    await updateUser(id, username, email, password);
    alert('User updated successfully');
    loadUsers();
  };
  return (
    <div>
      <PageLayout header={'Manage User'} data={<Forms onEdit={handleUpdate} onCreate={handleCreate} onDelete={handleDelete} />}  />
    </div>
  );
};

export default ManageUsers;
