import React from "react";
import { Routes, Route } from "react-router-dom";

import BuyPage from "./pages/BuyPage";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Admin from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ManageUsers from "./pages/ManageUsers";
import AdminOrders  from "./pages/AdminOrders";
import UserOrders  from "./pages/UserOrders";
import Payment  from "./pages/Payment";
import About  from "./pages/About";
import ContactUs  from "./pages/Contactus";
import FAQ  from "./pages/faq";
import TnC  from "./pages/TnC";
import ProtectedRoute from "./ProtectedRoutes";
import AdminRoute from "./AdminRoute";





function App() {
  return (
    <Routes>
      <Route path="/" element={<BuyPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
      <Route path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
      <Route path="/my-orders" element={<ProtectedRoute><UserOrders /></ProtectedRoute>} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/tnc" element={<TnC/>} />
    </Routes>
  );
}

export default App;