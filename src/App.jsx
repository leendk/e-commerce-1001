import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './shared/layout/footer';
import Navbar from './shared/layout/navbar';
import TopNavbar from "./shared/layout/TopHeader"; // renamed folder
import HomePage from "./features/Home/HomePage";
import SignUpPage from "./pages/Auth/Signup/SignUpPage";
import LoginPage from "./pages/Auth/Login/LoginPage";
import CheckoutPage from "./pages/Checkout/checkout"; 
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthStore } from '/src/store/authStore';


function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <div>
        <TopNavbar />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            } 
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


