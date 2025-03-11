import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        {/* aurr banne wale route */}
      </Routes>
    </>
  );
}

export default App;