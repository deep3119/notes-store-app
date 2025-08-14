import React from 'react';
import '../../Style/Navbar.css';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import Login from '../Login';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../Context/AuthProvider';
import logo from '../../images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { TbLogin2 } from "react-icons/tb";

const Navbar = ({ toggleMode, mode, localhost }) => {
    const [authuser] = useAuth();
    const [modalShow, setModalShow] = React.useState(false);
    const location = useLocation();

    return (
        <nav className={`navbar sticky-top navbar-expand-lg navbar-${mode} bg-${mode} shadow-sm`}>
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: 90, height: 60, objectFit: 'contain' }}
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={`nav-link px-3 ${location.pathname === '/' ? 'active fw-bold' : ''}`}
                                style={{
                                    transition: 'color 0.3s',
                                    color: mode === 'light' ? '#333' : '#ddd',
                                }}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/Course"
                                className={`nav-link px-3 ${location.pathname === '/Course' ? 'active fw-bold' : ''}`}
                                style={{
                                    transition: 'color 0.3s',
                                    color: mode === 'light' ? '#333' : '#ddd',
                                }}
                            >
                                Course
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={`nav-link px-3 ${location.pathname === '/contact' ? 'active fw-bold' : ''}`}
                                style={{
                                    transition: 'color 0.3s',
                                    color: mode === 'light' ? '#333' : '#ddd',
                                }}
                            >
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-link px-3"
                                style={{
                                    transition: 'color 0.3s',
                                    color: mode === 'light' ? '#333' : '#ddd',
                                }}
                            >
                                About
                            </Link>
                        </li>
                    </ul>

                    <form className="d-flex align-items-center gap-2" onSubmit={e => e.preventDefault()}>
                        <button
                            type="button"
                            onClick={toggleMode}
                            aria-label="Toggle dark mode"
                            className={`mode-toggle-btn ${mode === 'dark' ? 'dark' : ''}`}
                        >
                            {mode === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
                        </button>
                        {authuser ? (
                            <Link
                                to="/profile"
                                className="profile-btn d-flex align-items-center gap-2 px-3 py-2"
                                style={{
                                    fontWeight: 600,
                                    borderRadius: 30,
                                    color: mode === 'light' ? '#555' : '#ddd',
                                    backgroundColor: 'transparent',
                                    border: `1px solid ${mode === 'light' ? '#b0b0b0' : '#888'}`,
                                    transition: 'all 0.3s ease-in-out',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = mode === 'light' ? '#e0e0e0' : '#FAF9F6';
                                    e.currentTarget.style.color = '#222';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = mode === 'light' ? '#555' : '#ddd';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                title="Go to Profile"
                            >
                                <FaUserCircle size={22} />
                                <span className="d-none d-md-inline">{authuser.fullname || 'Profile'}</span>
                            </Link>


                        ) : (
                            <>
                                <Button
                                    onClick={() => setModalShow(true)}
                                    className="fw-semibold px-4 py-2"
                                    style={{
                                        borderRadius: "25px",
                                        fontWeight: "600",
                                        letterSpacing: "0.05em",
                                        backgroundColor: "transparent",
                                        border: `1px solid ${mode === "light" ? "#b0b0b0" : "#888"}`,
                                        color: mode === "light" ? "#555" : "#ddd",
                                        transition: "all 0.3s ease",
                                        boxShadow:
                                            mode === "light"
                                                ? "0 4px 8px rgba(0, 0, 0, 0.05)"
                                                : "0 4px 12px rgba(255, 255, 255, 0.05)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = mode === "light" ? "#e0e0e0" : "#faf9f6";
                                        e.currentTarget.style.color = "#222";
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.boxShadow =
                                            mode === "light"
                                                ? "0 6px 12px rgba(0, 0, 0, 0.1)"
                                                : "0 6px 14px rgba(255, 255, 255, 0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                        e.currentTarget.style.color = mode === "light" ? "#555" : "#ddd";
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                            mode === "light"
                                                ? "0 4px 8px rgba(0, 0, 0, 0.05)"
                                                : "0 4px 12px rgba(255, 255, 255, 0.05)";
                                    }}
                                >
                                    Login <TbLogin2 size={20} />
                                </Button>

                                <Login
                                    show={modalShow}
                                    localhost={localhost}
                                    mode={mode}
                                    onHide={() => setModalShow(false)}
                                />
                            </>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
