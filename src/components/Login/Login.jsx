import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { REACT_APP_API_ENDPOINT } = process.env;
  const displayTime = 3000;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const command = { Username: username, password: password };

  const handleUserLogin = (e) => {
    e.preventDefault();

    return axios
      .post(`${REACT_APP_API_ENDPOINT}/api/user/login`, command)
      .then((res) => {
        const decoded = jwt(res.data);
        cookies.set("jwt_authorization", res.data, {
          expires: new Date(decoded.exp * 100),
        });

        toast.success("Login successful! Navigating to Home page...");

        setTimeout(() => {
          navigate("/");
        }, displayTime);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={displayTime}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      ></ToastContainer>
      <form onSubmit={handleUserLogin}>
        <div className="title">Login</div>
        <div className="input-box underline">
          <input
            type="text"
            placeholder="Enter Your Username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Continue" />
        </div>
        <div>
          <span>
            Don't have an account Register{" "}
            <Link to="/register" className="link">
              Here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
