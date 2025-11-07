import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../images/logopicasoid.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "12345") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      {/* LEFT SIDE - INFO PANEL */}
      <div className="login-left">
        <div className="logo">
           <img src={logo} alt="logo" />
          <h1>PiCaSoid HMIS</h1>
        </div>

        <div className="features">
          <div className="feature-box">
            <span>🩺</span> Unified Health Records
          </div>
          <div className="feature-box">
            <span>🔒</span> End-to-End Encryption
          </div>
          <div className="feature-box">
            <span>🌐</span> ABDM Integrated
          </div>
          <div className="feature-box">
            <span>⚡</span> Instant Access
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="login-right">
        <div className="login-form-box">
          <h2>Welcome Back</h2>
          <p>Sign in to access your health portal</p>

          <form onSubmit={handleLogin}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="form-options">              
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-login">
              Login →
            </button>          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
