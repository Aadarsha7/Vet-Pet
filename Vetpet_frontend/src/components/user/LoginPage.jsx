import React from "react";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container items-center">
        <div className="login-card shadow-lg">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Please login to your account</p>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="username"
                className="form-control"
                id="email"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-100">
              Login
            </button>
          </form>
          <div className="login-footer">
            <p>
              <a href="#">Forgot Password</a>
            </p>
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
