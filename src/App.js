import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter } from 'react-router-dom';
import UserList from './components/UserList';
import Forms from './components/Forms';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserList />} />
    <Route path='/form' element={<Forms/>}/>
   </Routes>
    </BrowserRouter>
   
  );
};

export default App;
