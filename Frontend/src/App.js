import './App.css';
import { useState, useEffect, React } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Signup from './Components/Signup';
import Contacts from './Components/Contact/Contacts';
import ProfilePage from './Components/Home/ProfilePage';
import About from './Components/Home/About';
import AdminPanel from './Components/AdminPanel';
import Loader from './Components/Loader'; // 🔥 New Loader
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
function App() {
  const localhost = 'localhost';

  const [authuser] = useAuth();

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode : 'light';
  });

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? 'black' : 'white';
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
  }, [mode]);

  // 🔄 Page loader logic
  const location = useLocation();
  const [loading, setLoading] = useState(false);


useEffect(() => {
  setLoading(true);
  const timeout = setTimeout(() => {
    setLoading(false);
  }, 3000); 

  return () => clearTimeout(timeout);
}, [location]);

  return (
    <>
      {loading ? <Loader mode={mode}/>:

      <Routes>
        <Route path="/" element={<Home mode={mode} toggleMode={toggleMode} localhost={localhost} />} />
        <Route path="/Course" element={authuser ? <Courses mode={mode} toggleMode={toggleMode} localhost={localhost} /> : <Navigate to="/signup" />} />
        <Route path="/Contact" element={<Contacts mode={mode} toggleMode={toggleMode} localhost={localhost} />} />
        <Route path="/Signup" element={<Signup mode={mode} toggleMode={toggleMode} localhost={localhost} />} />
        <Route path="/profile" element={<ProfilePage mode={mode} localhost={localhost} />} />
        <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
        <Route path="/admin" element={<AdminPanel mode={mode} localhost={localhost} toggleMode={toggleMode} />} />
      </Routes>

      }
      <Toaster />
    </>
  );
}

export default App;
