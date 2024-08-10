import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ManageUsers from './pages/ManageUsers';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/form' element={<ManageUsers/>}/>
   </Routes>
    </BrowserRouter>
   
  );
};

export default App;
