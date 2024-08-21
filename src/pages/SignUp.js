import React, { useEffect, useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import CardComponent from '../components/CardComponent';
import FormLayout from '../Layouts/FormLayout';
import { createUser } from '../services/userServices';
const SignUp = () => {
    const handleCreate = async (username, email, password) => {
        await createUser(username, email, password);
        alert('Sign up successfully');
      };
  return (
    <div>
        <FormLayout header={'SIGN UP'} data={<CardComponent data=
        {<SignUpForm onCreate={handleCreate} />} />}
        />
    </div>
  );
};

export default SignUp;
