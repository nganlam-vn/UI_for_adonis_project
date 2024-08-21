import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ManageUsers from './pages/ManageUsers';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/form' element={<ManageUsers/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
   </Routes>
    </BrowserRouter>
   
  );
};

export default App;
