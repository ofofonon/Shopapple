import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';


import Landing from './pages/Landing';
import Contact from './pages/Contact';


function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="contact" element={<Contact />} />
          

          
          
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
