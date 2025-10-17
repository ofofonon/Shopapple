import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/layout/Navbar';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import VerifyOTP from './pages/auth/VerifyOTP';
import ResetPassword from './pages/auth/ResetPassword';
import LandingPage from './pages/LandingPage';
import Landing from './pages/Landing';
import DashF from './pages/Dash-freelance';
import DashE from './pages/Dash-employer';
import Community from './pages/Community';
import Discover from './pages/Discover';
import Road from './pages/Roadmap';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import KYCForm from './components/forms/KYCForm';
import Davy from './pages/auth/Davy';


function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/dashf" element={<DashF />} />
          <Route path="/dashe" element={<DashE />} />
          <Route path="/community" element={<Community />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/road" element={<Road />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/davy" element={< Davy/>} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
          <Route
            path="/kyc"
            element={
              <>
                <Navbar />
                <KYCForm />
              </>
            }
          />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
