import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../services/userServices';
import User from '../components/User.js';
import PageLayout from '../Layouts/PageLayout';

const Home = () => {
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
        <PageLayout header={'List of Users'}
        data=
           {users.map((user) => (
        <User key={user.id} user={user} />
      ))} />
    </div>
  );
};

export default Home;
