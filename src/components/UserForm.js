import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/userServices';

const UserForm = ({ selectedUser, onSave }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await updateUser(selectedUser.id, user);
    } else {
      await createUser(user);
    }
    onSave();
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </div>
      <button type="submit">{selectedUser ? 'Update' : 'Create'} User</button>
    </form>
  );
};

export default UserForm;
