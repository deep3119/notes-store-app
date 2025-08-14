import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import Navbar from './Home/Navbar';
import Login from './Login';

const Signup = ({ mode, toggleMode, localhost }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false); // ✅ modal state

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(`http://${localhost}:5001/user/signup`, userInfo);
      if (res.data) {
        toast.success('Signup Successfully!');
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error("Error: " + err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div className={`${mode==="light"?"lighto":"darko"} text-${mode === 'light' ? 'dark' : 'light'}`}>
      <Navbar mode={mode} toggleMode={toggleMode} localhost={localhost} />

      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div
          style={{
            maxWidth: '480px',
            width: '100%',
            padding: '2rem',
            borderRadius: '20px',
            background: mode === 'light'
              ? 'rgba(255, 255, 255, 0.85)'
              : 'rgba(52, 58, 64, 0.85)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: mode === 'light' ? '1px solid #ddd' : '1px solid #444',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 style={{ fontWeight: '700' }}>Create an Account</h3>
            <Link
              to="/"
              style={{
                backgroundColor: mode === 'light' ? '#212529' : '#f8f9fa',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: mode === 'light' ? '#fff' : '#000',
                textDecoration: 'none',
                fontSize: '18px',
                lineHeight: '1',
              }}
            >
              ×
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                {...register('fullname', { required: true })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: mode === 'light' ? '#fff' : '#495057',
                  color: mode === 'light' ? '#000' : '#fff',
                  fontWeight: '500',
                }}
              />
              {errors.fullname && <span style={{ color: 'red', fontSize: '0.85rem' }}>* Name is required</span>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                {...register('email', { required: true })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: mode === 'light' ? '#fff' : '#495057',
                  color: mode === 'light' ? '#000' : '#fff',
                  fontWeight: '500',
                }}
              />
              {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>* Email is required</span>}
            </div>

            {/* Password */}
            <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password', { required: true })}
                style={{
                  width: '100%',
                  padding: '12px 45px 12px 16px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: mode === 'light' ? '#fff' : '#495057',
                  color: mode === 'light' ? '#000' : '#fff',
                  fontWeight: '500',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  top: '70%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '22px',
                }}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
              {errors.password && (
                <span style={{ color: 'red', fontSize: '0.85rem' }}>* Password is required</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#198754',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#157347')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#198754')}
            >
              Sign Up
            </button>

            {/* Login Redirect with Modal trigger */}
            <p style={{ textAlign: 'center', marginTop: '1.2rem', fontSize: '0.95rem' }}>
              Already have an account?{' '}
              <span
                onClick={() => setModalShow(true)}
                style={{
                  fontWeight: '600',
                  color: '#0d6efd',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Login here
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* ✅ Login Modal Component */}
      <Login
        show={modalShow}
        localhost={localhost}
        mode={mode}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Signup;
