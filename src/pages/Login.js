import React, { useEffect, useState } from 'react';
import PageLayout from '../Layouts/PageLayout';
import LoginForm from '../components/LoginForm';
import CardComponent from '../components/CardComponent';
import FormLayout from '../Layouts/FormLayout';
import { login } from '../services/userServices';
const Login = () => {
    const handleLogin = async (username, password) => {
        await login(username, password);
    }
  return (
    <div>
        <FormLayout header={'WELCOME BACK USER!'} data={<CardComponent data=
        {<LoginForm onLogin={handleLogin}/>} />}
        />
        
       
    </div>
  );
};

export default Login;
