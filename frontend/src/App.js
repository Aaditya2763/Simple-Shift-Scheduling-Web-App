import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Dashboard from './pages/dashboard';
import AddShift from './components/addShift/addShift';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addShift" element={<AddShift />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
