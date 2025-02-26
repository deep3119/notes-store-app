import './App.css';
import { useState, useEffect, React } from 'react';
import Home from './Components/Home/Home';

import { Routes, Route, Navigate } from "react-router-dom";
import Courses from './Components/Courses/Courses';
import Signup from './Components/Signup';

import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
import Contacts from './Components/Contact/Contacts';


function App() {

  // const localhost = `192.168.1.73`;
  const localhost = 'localhost';


  const [authuser, setAuthuser]=useAuth();
  console.log(authuser);

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

  return (
    <>


      <Routes>
        <Route path="/" element={<Home mode={mode} toggleMode={toggleMode} localhost={localhost}/>} />
        <Route path="/Course" element={authuser?<Courses mode={mode} toggleMode={toggleMode} localhost={localhost} />:<Navigate to="/signup"/>} />
        <Route path="/Contact" element={<Contacts mode={mode} toggleMode={toggleMode} localhost={localhost} />} />
        <Route path="/Signup" element={<Signup mode={mode} toggleMode={toggleMode} localhost={localhost}/>} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
