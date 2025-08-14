import React from 'react';
import { FaReact, FaGraduationCap, FaUsers } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const About = ({ mode,toggleMode }) => {
  const isLight = mode === 'light';

  const containerStyle = {
    backgroundColor: isLight ? 'white' : 'black',
    color: isLight ? '#333' : '#f1f1f1',
    minHeight: '100vh',
    padding: '60px 20px',
    transition: 'all 0.3s ease',
  };

  const sectionStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    border:"1px solid rgb(221, 221, 221)",
    borderRadius: '16px',
    backgroundColor: isLight ? '#f9f9f9' : '#2a2a2a',
    boxShadow: isLight
      ? 'rgba(0, 0, 0, 0.25) 0px 8px 32px'
      : '0 4px 14px rgba(255,255,255,0.04)',
    transition: 'all 0.3s ease',
  };

  const iconStyle = {
    color: isLight ? '#d63384' : '#ff70a6',
    marginRight: '10px',
  };

  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode} />
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="mb-4 d-flex align-items-center">
          <FaReact style={iconStyle} />
          About Our Application
        </h1>
        <p style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
          Welcome to our web platform! We are focused on delivering high-quality educational content,
          tools, and resources for learners and developers. Our goal is to create an interactive, smooth, and user-friendly experience that adapts to both light and dark modes.
        </p>

        <hr className="my-4" style={{ borderColor: isLight ? '#ddd' : '#444' }} />

        <h3 className="mt-4 d-flex align-items-center">
          <FaGraduationCap style={iconStyle} />
          What We Offer
        </h3>
        <ul className="mt-2" style={{ paddingLeft: '1.2rem' }}>
          <li>Modern and responsive user interface</li>
          <li>Dark/Light theme toggle</li>
          <li>User profile management with authentication</li>
          <li>Interactive learning resources (e.g., courses)</li>
        </ul>

        <h3 className="mt-4 d-flex align-items-center">
          <FaUsers style={iconStyle} />
          Meet the Team
        </h3>
        <p>
          This project is developed by passionate developers who care about UI/UX, performance, and accessibility.
          We’re constantly working to improve the experience. Special thanks to contributors and users like you!
        </p>
      </div>
    </div>
    <Footer mode={mode}/>
    </>
  );
};

export default About;
