import { useContext, useState } from "react";
import "./LoginPage.css";
import api from "../../api";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const LoginPage = () => {
  const { setIsAuthenticated, get_username } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userInfo = { username, password };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    api
      .post("token/", userInfo)
      .then((res) => {
        console.log(res.data.access);
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        setUsername("");
        setPassword("");
        setLoading(false);
        setIsAuthenticated(true);
        toast.success("Login successful!");
        get_username();

        const from = location?.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        toast.error("Login failed. Please check your credentials.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover={false}
      />

      <div className="login-container items-center">
        <div className="login-card shadow-lg">
          <h2 className="login-title text-center">Welcome Back</h2>
          <p className="login-subtitle text-center">
            Please login to your account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-3 password-input-container">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
              <span
                className="showPasswordToggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <button
              type="submit"
              className="btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="login-footer text-center">
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
