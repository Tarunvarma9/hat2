import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/Login/login';
import HomePage from './components/Pages/HomePage';
import SecureLS from 'secure-ls';
import HelloMonday from './components/Pages/HelloMonday';

const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

function App() {
  const isAuthenticated = ls.get('authenticated');
  console.log(isAuthenticated)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}/>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}/>
          <Route path="/hellomonday" element={isAuthenticated ? <HelloMonday/> : <Navigate to="/login" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;