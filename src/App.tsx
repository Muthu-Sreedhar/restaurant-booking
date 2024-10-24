// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactDetails from './components/ContactDetails';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRouter';
import { useAuth } from './context/AuthContext'; // Make sure to import your AuthContext
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated

  return (
    <Router>
      <Routes>
        {/* Redirect to Home if already authenticated */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={ <SignUp/>} />
        <Route path="/forgotpassword" element={ <ForgotPassword/>} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/contact/details/:id" element={<MainLayout><ContactDetails /></MainLayout>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
