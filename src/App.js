import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ListOfUser from './pages/ListOfUser';
import ManageUsers from './pages/ManageUsers';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/"></Link>
      <Link to="/signup"></Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/users" element={<ListOfUser />} />
      <Route path='/form' element={<ManageUsers/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
   </Routes>
    </BrowserRouter>
   
  );
};

export default App;
