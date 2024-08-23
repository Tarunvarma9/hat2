import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/Login/login';
import HomePage from './components/Pages/HomePage';
import SecureLS from 'secure-ls';
import HelloMonday from './components/Pages/HelloMonday';
import Prometheus from './components/Pages/prometheus';
import Redwood from './components/Pages/redwood';
import { useState } from 'react';
import Message from './components/Pages/Message';
import Spotify from './components/Pages/Spotify';
import BeachHouse from './components/Pages/BeachHouse';

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
  console.log('ok')

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/Message" element={isAuthenticated ? <Message /> : <Navigate to="/login" />} />
        <Route path="/hellomonday" element={isAuthenticated ? <HelloMonday /> : <Navigate to="/login" />} />
        <Route path="/prometheus" element={isAuthenticated ? <Prometheus /> : <Navigate to="/login" />} />
        <Route path="/redwood" element={isAuthenticated ? <Redwood /> : <Navigate to="/login" />} />
        <Route path="/beachhouse" element={isAuthenticated ? <BeachHouse /> : <Navigate to="/login" />}/>
        <Route path="/spotify" element={isAuthenticated ? <Spotify /> : <Navigate to="/login" />}/>
      </Routes>
    </Router>
  );
}

export default App;
