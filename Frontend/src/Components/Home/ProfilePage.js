import React from "react";
import Logout from "../Logout";
import { useAuth } from "../../Context/AuthProvider";
import { FaUserCircle, FaEnvelope, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = ({ mode }) => {
  const [authuser] = useAuth();
  const navigate = useNavigate();

  if (!authuser) {
    return (
      <div
        className={`d-flex justify-content-center align-items-center vh-100 text-${
          mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Please login to see your profile.</h3>
      </div>
    );
  }

  const { fullname, email } = authuser;

  return (
    <div
      className={`container my-5 p-4 rounded shadow-lg bg-${
        mode === "light" ? "white" : "#1c1c1c"
      } text-${mode === "light" ? "dark" : "light"}`}
      style={{ maxWidth: "500px" }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className={`btn btn-sm mb-3 border-${
          mode === "light" ? "dark" : "light"
        } text-${mode === "light" ? "dark" : "light"}`}
        style={{ fontWeight: "600" }}
      >
        &#8592; Back to Home
      </button>

      {/* Profile Info */}
      <div className="d-flex flex-column align-items-center mb-4">
        <div
          style={{
            fontSize: "90px",
            color: mode === "light" ? "#6c757d" : "#adb5bd",
            marginBottom: "10px",
          }}
        >
          <FaUserCircle />
        </div>
        <h2 className="fw-bold">{fullname}</h2>
        <p className={`text-${mode === "light" ? "muted" : "secondary"} mb-0`}>Welcome back!</p>
      </div>

      <div
        className={`p-3 rounded border border-${
          mode === "light" ? "secondary" : "light"
        } mb-4`}
      >
        <div className="d-flex align-items-center mb-3">
          <FaUser
            style={{ fontSize: "1.4rem", marginRight: "12px", color: "#d63384" }}
          />
          <div>
            <small className={`text-${mode === "light" ? "muted" : "secondary"}`}>Full Name</small>
            <p className="mb-0">{fullname}</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaEnvelope
            style={{ fontSize: "1.4rem", marginRight: "12px", color: "#d63384" }}
          />
          <div>
            <small className={`text-${mode === "light" ? "muted" : "secondary"}`}>Email</small>
            <p className="mb-0">{email}</p>
          </div>
        </div>
      </div>

      {/* Logout button centered */}
      <div className="d-flex justify-content-center">
        <Logout mode={mode} />
      </div>
    </div>
  );
};

export default Profile;
