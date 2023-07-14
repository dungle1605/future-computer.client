import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Register() {
  const displayTime = 3000;
  const navigate = useNavigate();
  const { REACT_APP_API_ENDPOINT } = process.env;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");

  const handleRegisterAccount = (e) => {
    e.preventDefault();

    if (password != retypePass) {
      toast.error("Password is missmatch");
      return;
    }

    const command = { UserName: username, Email: email, Password: password };

    return axios
      .post(`${REACT_APP_API_ENDPOINT}/api/user/register`, command)
      .then((res) => {
        toast.success(res.data);
        setTimeout(() => {
          navigate("/login");
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
      <form onSubmit={handleRegisterAccount}>
        <div className="title">Register</div>
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
        <div className="input-box underline">
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
        <div className="input-box">
          <input
            type="password"
            placeholder="Retype Your Password"
            required
            onChange={(e) => setRetypePass(e.target.value)}
            value={retypePass}
          />
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Continue" />
        </div>
        <div>
          <span>
            Already have an account Register{" "}
            <Link to="/login" className="link">
              Here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
