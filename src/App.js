import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/Login/login';
import HomePage from './components/Pages/HomePage';
import SecureLS from 'secure-ls';
import HelloMonday from './components/Pages/HelloMonday';
import Prometheus from './components/Pages/prometheus';
import Redwood from './components/Pages/redwood';
import { useState } from 'react';

const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

function App() {
  const isAuthenticated = ls.get('authenticated');
  const [isAuthenticatedChecked, setIsAuthenticatedChecked] = useState(false);

  useEffect(() => {
    setIsAuthenticatedChecked(true);
  }, []);

  if (!isAuthenticatedChecked) {
    return null; 
  }

  return (
      <Router>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/hellomonday" element={isAuthenticated ? <HelloMonday /> : <Navigate to="/login" />} />
          <Route path="/prometheus" element={isAuthenticated ? <Prometheus /> : <Navigate to="/login" />} />
          <Route path="/redwood" element={isAuthenticated ? <Redwood /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
  );
}

export default App;
