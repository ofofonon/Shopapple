import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';


import Landing from './pages/Landing';
import Contact from './pages/Contact';
import WHYF from './pages/WhyAfrivate';


function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="about-us" element={<WHYF />} />

          {/* Backwards-compatible redirects */}
          <Route path="contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="whyf" element={<Navigate to="/about-us" replace />} />
          

          
          
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
