import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userServices.js';
import User from '../components/User.js';
import PageLayout from '../Layouts/PageLayout.js';

const ListOfUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };
  return (
    <div>
        <PageLayout header={'List of Users'}
        content=
           {users.map((user) => (
        <User key={user.id} user={user} />
      ))} />
    </div>
  );
};

export default ListOfUser;
