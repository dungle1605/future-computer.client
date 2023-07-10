import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import PropTypes from "prop-types";

Login.propTypes = {};

function Login(props) {
  return (
    <div className="container">
      <form action="#">
        <div className="title">Login</div>
        <div className="input-box underline">
          <input type="text" placeholder="Enter Your Email" required />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Your Password" required />
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
