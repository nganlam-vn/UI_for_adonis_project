import React, { useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';
import CardComponent from '../components/CardComponent';
import FormLayout from '../Layouts/FormLayout';
import { login} from '../services/userServices';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const handleLogin = async (username, password, isLogin) => {
        await login(username, password, isLogin);
  };
   
    const navigate = useNavigate();
   
    const goToSignUp = () => {
        navigate('/signup');
    }
  return (
    <div>
        <FormLayout header={'WELCOME BACK USER!'} content={<CardComponent data=
        {<LoginForm onLogin={handleLogin} onSignUp={() => goToSignUp()}/>} />}
        />
        
       
    </div>
  );
};

export default Login;
