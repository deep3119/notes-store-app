import './App.css';
import { useState, useEffect, React } from 'react';
import Home from './Components/Home/Home';

import { Routes, Route } from "react-router-dom";
import Courses from './Components/Courses/Courses';
import Signup from './Components/Signup';


function App() {
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
        <Route path="/" element={<Home mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Course" element={<Courses mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Signup" element={<Signup mode={mode} toggleMode={toggleMode} />} />
      </Routes>
    </>
  );
}

export default App;
