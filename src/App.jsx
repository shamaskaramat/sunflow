import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import ProjectsPage from './Pages/Project/ProjectsPage';
import IssuesPage from './Pages/IssuesPage/IssuesPage';
import MapPage from './Pages/Map/MapPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './Pages/login/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <>
        {isAuthenticated && <Navbar />}
        <div className="flex">
          {isAuthenticated && <Sidebar />}
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/projects" element={isAuthenticated ? <ProjectsPage /> : <Navigate to="/login" />} />
              <Route path="/issues" element={isAuthenticated ? <IssuesPage handleLogout={handleLogout} /> : <Navigate to="/login" />} />
              <Route path="/map" element={isAuthenticated ? <MapPage /> : <Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
};

export default App;
