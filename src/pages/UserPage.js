import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const UserPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSave = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>CRUD User Management</h1>
      <UserForm selectedUser={selectedUser} onSave={handleSave} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default UserPage;
